import React, { useState } from 'react';
import { X, MapPin, Clock, Ticket, Bus, CloudSun, Utensils, Hotel, HelpCircle, Star } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function AttractionDetailModal({ attraction, onClose, onAddToCart }) {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('overview');

  if (!attraction) return null;

  // Defensive fallbacks for all fields to prevent any runtime crash
  const image = attraction.image || (attraction.gallery && attraction.gallery[0]) || 'https://images.unsplash.com/photo-1596436889106-be35e843f974?auto=format&fit=crop&w=800&q=80';
  const title = attraction.title || 'Atração Turística em Curitiba';
  const category = attraction.category || 'Passeio';
  const rating = attraction.rating || 4.9;
  const reviewsCount = attraction.reviewsCount || '1.2k';
  const description = attraction.description || attraction.subtitle || 'Ponto turístico imperdível de Curitiba! Excelente opção de passeio para toda a família.';
  const location = attraction.location || 'Curitiba - PR';
  const hours = attraction.hours || '08h às 18h';
  const howToGet = attraction.howToGet || 'Acesse via Linha Turismo Double-Decker ou transporte público.';
  const tip = attraction.tip || 'Horário ideal para fotos com iluminação perfeita é no fim da tarde.';
  const isFree = Boolean(attraction.isFree || attraction.price === 0);

  const priceFormatted = isFree 
    ? 'ENTRADA GRATUITA' 
    : (typeof attraction.price === 'number' 
        ? `R$ ${attraction.price.toFixed(2).replace('.', ',')}` 
        : String(attraction.price || 'Consulte Valores'));

  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart({
        ...attraction,
        quantity: 1,
        totalPrice: isFree ? 0 : (typeof attraction.price === 'number' ? attraction.price : 0)
      });
    }
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 4000,
      backgroundColor: 'rgba(15, 23, 42, 0.55)',
      backdropFilter: 'blur(4px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '16px'
    }}>
      {/* Compact Light Card Ficha Técnica with Proportional Photo (380px width) */}
      <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '20px',
        maxWidth: '380px',
        width: '100%',
        maxHeight: '88vh',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 20px 45px rgba(0, 0, 0, 0.18)',
        border: '1px solid #e2e8f0',
        position: 'relative'
      }} className="animate-fade-in">
        
        {/* Header Image Banner */}
        <div style={{ position: 'relative', height: '180px', width: '100%', backgroundColor: '#f1f5f9', flexShrink: 0 }}>
          <img
            src={image}
            alt={title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(15, 23, 42, 0.8) 0%, transparent 60%)'
          }} />

          {/* Close Button */}
          <button
            onClick={() => onClose && onClose()}
            style={{
              position: 'absolute',
              top: '12px',
              right: '12px',
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              backgroundColor: '#ffffff',
              color: '#0f172a',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 20,
              boxShadow: '0 2px 8px rgba(0,0,0,0.18)',
              transition: 'transform 0.15s ease'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            title="Fechar Ficha Técnica"
          >
            <X size={16} />
          </button>

          {/* Title Overlay */}
          <div style={{ position: 'absolute', bottom: '12px', left: '16px', right: '16px', zIndex: 10, color: '#ffffff' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
              <span style={{ backgroundColor: '#00a896', color: '#ffffff', fontSize: '10px', fontWeight: '900', padding: '2px 8px', borderRadius: '4px', textTransform: 'uppercase' }}>
                {category}
              </span>
              <span style={{ backgroundColor: 'rgba(255,255,255,0.25)', color: '#ffffff', fontSize: '10px', fontWeight: '800', padding: '2px 8px', borderRadius: '4px', backdropFilter: 'blur(4px)' }}>
                ⭐ {rating} ({reviewsCount})
              </span>
            </div>
            <h3 style={{ fontSize: '18px', fontWeight: '900', lineHeight: '1.2' }}>
              {title}
            </h3>
          </div>
        </div>

        {/* Light Pill Navigation Tabs */}
        <div style={{ backgroundColor: '#f8fafc', padding: '8px 12px', display: 'flex', gap: '6px', borderBottom: '1px solid #e2e8f0', overflowX: 'auto', flexShrink: 0 }} className="hide-scrollbar">
          {[
            { id: 'overview', label: 'Informações' },
            { id: 'transit', label: 'Como Chegar' },
            { id: 'weather', label: 'Clima 21°C' },
            { id: 'nearby', label: 'Próximos' },
            { id: 'faq', label: 'Dicas' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: '5px 12px',
                fontSize: '11px',
                fontWeight: activeTab === tab.id ? '800' : '600',
                color: activeTab === tab.id ? '#ffffff' : '#475569',
                backgroundColor: activeTab === tab.id ? '#00a896' : '#ffffff',
                borderRadius: '9999px',
                border: activeTab === tab.id ? '1px solid #00a896' : '1px solid #cbd5e1',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all 0.15s ease'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Light Body Content */}
        <div style={{ padding: '16px', overflowY: 'auto', flex: 1, backgroundColor: '#ffffff', fontSize: '13px' }}>
          
          {activeTab === 'overview' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <p style={{ color: '#475569', lineHeight: '1.5', fontSize: '13px' }}>
                {description}
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', fontSize: '11px' }}>
                <div style={{ backgroundColor: '#ffffff', padding: '8px 10px', borderRadius: '10px', border: '1px solid #e2e8f0', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
                  <span style={{ color: '#00a896', fontWeight: '800', fontSize: '10px', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '2px' }}>
                    <MapPin size={12} color="#00a896" />
                    <span>Endereço</span>
                  </span>
                  <div style={{ fontWeight: '800', color: '#0f172a' }}>{location}</div>
                </div>

                <div style={{ backgroundColor: '#ffffff', padding: '8px 10px', borderRadius: '10px', border: '1px solid #e2e8f0', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
                  <span style={{ color: '#2563eb', fontWeight: '800', fontSize: '10px', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '2px' }}>
                    <Clock size={12} color="#2563eb" />
                    <span>Horários</span>
                  </span>
                  <div style={{ fontWeight: '800', color: '#0f172a' }}>{hours}</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'transit' && (
            <div style={{ backgroundColor: '#ffffff', padding: '10px 12px', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 2px 6px rgba(0,0,0,0.03)', color: '#1e40af', fontSize: '12px', lineHeight: '1.4' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#2563eb', fontWeight: '800', marginBottom: '4px' }}>
                <Bus size={14} color="#2563eb" />
                <span>Acesso BRT / Linha Turismo:</span>
              </div>
              <p style={{ color: '#334155', fontWeight: '600' }}>{howToGet}</p>
            </div>
          )}

          {activeTab === 'weather' && (
            <div style={{ backgroundColor: '#f0fdf4', padding: '10px 12px', borderRadius: '12px', border: '1px solid #bbf7d0', color: '#166534', fontSize: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: '800', marginBottom: '4px' }}>
                <CloudSun size={15} color="#16a34a" />
                <span>Clima em Curitiba: 21°C Ensolarado</span>
              </div>
              <p style={{ color: '#15803d', fontWeight: '600' }}>Condição climática ideal para passeios e fotos ao ar livre nos parques.</p>
            </div>
          )}

          {activeTab === 'nearby' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '11px' }}>
              <div style={{ padding: '8px 10px', backgroundColor: '#ffffff', borderRadius: '10px', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Utensils size={15} color="#ea580c" />
                <div>
                  <strong>Bar do Alemão</strong> <span style={{ color: '#64748b' }}>(Chopp Submarino • 400m)</span>
                </div>
              </div>

              <div style={{ padding: '8px 10px', backgroundColor: '#ffffff', borderRadius: '10px', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Hotel size={15} color="#00a896" />
                <div>
                  <strong>Radisson Hotel 5★</strong> <span style={{ color: '#64748b' }}>(Praça da Espanha • 800m)</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'faq' && (
            <div style={{ backgroundColor: '#f0fdf4', padding: '10px 12px', borderRadius: '12px', border: '1px solid #bbf7d0', fontSize: '12px', color: '#166534' }}>
              <strong style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#15803d', marginBottom: '2px' }}>💡 Dica Local 360°:</strong>
              <p style={{ fontWeight: '600' }}>{tip}</p>
            </div>
          )}

        </div>

        {/* Light Footer Action Bar */}
        <div style={{ padding: '12px 16px', backgroundColor: '#f8fafc', borderTop: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0 }}>
          <div>
            <span style={{ fontSize: '10px', color: '#64748b', display: 'block', fontWeight: '600' }}>Ingressos a partir de</span>
            <span style={{ fontSize: '17px', fontWeight: '900', color: isFree ? '#16a34a' : '#2563eb' }}>
              {priceFormatted}
            </span>
          </div>

          <button
            onClick={handleAddToCart}
            style={{
              backgroundColor: '#00a896',
              color: '#ffffff',
              fontWeight: '800',
              fontSize: '13px',
              padding: '10px 20px',
              borderRadius: '12px',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              boxShadow: '0 4px 12px rgba(0,168,150,0.35)',
              transition: 'transform 0.15s ease'
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-1px)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            <Ticket size={16} />
            <span>Garantir Vaga</span>
          </button>
        </div>

      </div>
    </div>
  );
}
