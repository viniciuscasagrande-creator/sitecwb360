import React, { useState } from 'react';
import { 
  X, MapPin, Clock, Ticket, Bus, CloudSun, Utensils, Hotel, 
  HelpCircle, Star, Info
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function AttractionDetailModal({ attraction, onClose, onAddToCart }) {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('overview');

  if (!attraction) return null;

  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart({
        ...attraction,
        quantity: 1,
        totalPrice: attraction.isFree ? 0 : attraction.price
      });
    }
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 3500,
      backgroundColor: 'rgba(15, 23, 42, 0.75)',
      backdropFilter: 'blur(6px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '12px'
    }}>
      <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '20px',
        maxWidth: '460px',
        width: '100%',
        maxHeight: '85vh',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.35)',
        border: '1px solid #e2e8f0'
      }}>
        {/* Compact Banner Image */}
        <div style={{ position: 'relative', height: '140px', width: '100%', backgroundColor: '#0f172a' }}>
          <img
            src={attraction.image}
            alt={attraction.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(15, 23, 42, 0.9) 0%, rgba(15, 23, 42, 0.2) 60%, transparent 100%)'
          }} />

          {/* Close Button */}
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              backgroundColor: 'rgba(15, 23, 42, 0.75)',
              color: '#ffffff',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 10
            }}
          >
            <X size={16} />
          </button>

          {/* Compact Title Overlay */}
          <div style={{ position: 'absolute', bottom: '12px', left: '16px', right: '16px', zIndex: 10, color: '#ffffff' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
              <span style={{ backgroundColor: '#00a896', color: '#ffffff', fontSize: '10px', fontWeight: '900', padding: '2px 8px', borderRadius: '4px' }}>
                {attraction.category || 'Atração'}
              </span>
              <span style={{ backgroundColor: 'rgba(255,255,255,0.2)', color: '#ffffff', fontSize: '10px', fontWeight: '800', padding: '2px 8px', borderRadius: '4px' }}>
                ⭐ {attraction.rating || 4.9}
              </span>
            </div>
            <h3 style={{ fontSize: '18px', fontWeight: '900', lineHeight: '1.2' }}>
              {attraction.title}
            </h3>
          </div>
        </div>

        {/* Compact Tab Pill Buttons */}
        <div style={{ backgroundColor: '#0f172a', padding: '8px 12px', display: 'flex', gap: '6px', overflowX: 'auto' }} className="hide-scrollbar">
          {[
            { id: 'overview', label: 'Info' },
            { id: 'transit', label: 'Como Chegar' },
            { id: 'weather', label: 'Clima 21°C' },
            { id: 'nearby', label: 'Próximos' },
            { id: 'faq', label: 'Dicas' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: '4px 10px',
                fontSize: '11px',
                fontWeight: activeTab === tab.id ? '800' : '600',
                color: activeTab === tab.id ? '#ffffff' : '#94a3b8',
                backgroundColor: activeTab === tab.id ? '#00a896' : 'rgba(255,255,255,0.08)',
                borderRadius: '9999px',
                border: 'none',
                cursor: 'pointer',
                whiteSpace: 'nowrap'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Compact Content */}
        <div style={{ padding: '14px 16px', overflowY: 'auto', flex: 1, backgroundColor: '#ffffff', fontSize: '13px' }}>
          
          {activeTab === 'overview' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <p style={{ color: '#475569', lineHeight: '1.5', fontSize: '12px' }}>
                {attraction.description || 'Ponto turístico imperdível de Curitiba! Excelente opção para passeio.'}
              </p>

              <div style={{ backgroundColor: '#f8fafc', padding: '10px 12px', borderRadius: '10px', border: '1px solid #e2e8f0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', fontSize: '11px' }}>
                <div>
                  <span style={{ color: '#64748b', fontWeight: '700' }}>Local:</span>
                  <div style={{ fontWeight: '800', color: '#0f172a' }}>{attraction.location || 'Curitiba'}</div>
                </div>

                <div>
                  <span style={{ color: '#64748b', fontWeight: '700' }}>Horário:</span>
                  <div style={{ fontWeight: '800', color: '#0f172a' }}>{attraction.hours || '06h às 19h30'}</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'transit' && (
            <div style={{ backgroundColor: '#eff6ff', padding: '10px 12px', borderRadius: '10px', color: '#1e40af', fontSize: '12px', lineHeight: '1.4' }}>
              <strong>🚌 Acesso BRT / Linha Turismo:</strong>
              <p style={{ marginTop: '2px' }}>{attraction.howToGet || 'Acesse via Linha Turismo Double-Decker ou Estação Tubo BRT.'}</p>
            </div>
          )}

          {activeTab === 'weather' && (
            <div style={{ backgroundColor: '#f0fdf4', padding: '10px 12px', borderRadius: '10px', color: '#166534', fontSize: '12px' }}>
              <strong>🌦️ Clima em Curitiba: 21°C Ensolarado</strong>
              <p style={{ marginTop: '2px' }}>Excelente para passeios a céu aberto nos parques.</p>
            </div>
          )}

          {activeTab === 'nearby' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '11px' }}>
              <div style={{ padding: '8px 10px', backgroundColor: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                <strong>🍽️ Bar do Alemão</strong> (Chopp Submarino • 400m)
              </div>
              <div style={{ padding: '8px 10px', backgroundColor: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                <strong>🏨 Radisson Hotel 5★</strong> (Batel • 800m)
              </div>
            </div>
          )}

          {activeTab === 'faq' && (
            <div style={{ backgroundColor: '#f8fafc', padding: '10px 12px', borderRadius: '10px', border: '1px solid #e2e8f0', fontSize: '12px', color: '#475569' }}>
              <strong>💡 Dica Local 360°:</strong>
              <p style={{ marginTop: '2px' }}>{attraction.tip || 'Horário ideal para fotos: no fim da tarde entre 16h30 e 18h.'}</p>
            </div>
          )}

        </div>

        {/* Compact Footer CTA */}
        <div style={{ padding: '10px 16px', backgroundColor: '#0f172a', display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#ffffff' }}>
          <div>
            <span style={{ fontSize: '10px', color: '#94a3b8', display: 'block' }}>A partir de</span>
            <span style={{ fontSize: '16px', fontWeight: '900', color: attraction.isFree ? '#22c55e' : '#00a896' }}>
              {attraction.isFree ? 'GRATUITO' : `R$ ${attraction.price.toFixed(2).replace('.', ',')}`}
            </span>
          </div>

          <button
            onClick={handleAddToCart}
            style={{
              backgroundColor: '#00a896',
              color: '#ffffff',
              fontWeight: '900',
              fontSize: '12px',
              padding: '8px 16px',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <Ticket size={14} />
            <span>Garantir Vaga</span>
          </button>
        </div>

      </div>
    </div>
  );
}
