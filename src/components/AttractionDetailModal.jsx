import React, { useState } from 'react';
import { 
  X, MapPin, Clock, Ticket, Bus, CloudSun, Utensils, Hotel, 
  Star, Share2, Heart, ShieldCheck
} from 'lucide-react';

export default function AttractionDetailModal({ attraction, onClose, onAddToCart }) {
  const [activeTab, setActiveTab] = useState('overview');
  const [isFavorite, setIsFavorite] = useState(false);
  const [sharedToast, setSharedToast] = useState(false);

  if (!attraction) return null;

  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart({
        ...attraction,
        quantity: 1,
        totalPrice: attraction.isFree ? 0 : (attraction.price || attraction.priceVal || 0)
      });
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: attraction.title,
        text: `Confira ${attraction.title} no Curitiba 360°!`,
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard?.writeText(window.location.href);
      setSharedToast(true);
      setTimeout(() => setSharedToast(false), 2000);
    }
  };

  const priceFormatted = attraction.isFree
    ? 'GRÁTIS'
    : attraction.price
    ? typeof attraction.price === 'string' && attraction.price.includes('R$')
      ? attraction.price
      : `R$ ${(attraction.priceVal || attraction.price || 0).toFixed(2).replace('.', ',')}`
    : 'GRÁTIS';

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 4000,
      backgroundColor: 'rgba(15, 23, 42, 0.5)',
      backdropFilter: 'blur(4px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '12px'
    }}>
      
      {/* Toast Notification */}
      {sharedToast && (
        <div style={{
          position: 'fixed',
          top: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: '#0f172a',
          color: '#34d399',
          padding: '8px 16px',
          borderRadius: '9999px',
          fontSize: '12px',
          fontWeight: '800',
          boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
          zIndex: 5000,
          display: 'flex',
          alignItems: 'center',
          gap: '6px'
        }}>
          <ShieldCheck size={14} />
          <span>Link copiado!</span>
        </div>
      )}

      {/* Ultra-Compact Ficha Técnica Card Modal (340px width) */}
      <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '14px',
        maxWidth: '340px',
        width: '100%',
        maxHeight: '75vh',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 12px 32px rgba(0,0,0,0.18)',
        border: '1px solid #cbd5e1',
        position: 'relative'
      }} className="animate-fade-in">
        
        {/* Compact Header Image (115px) */}
        <div style={{ position: 'relative', height: '115px', width: '100%', backgroundColor: '#f1f5f9', flexShrink: 0 }}>
          <img
            src={attraction.image}
            alt={attraction.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(15, 23, 42, 0.9) 0%, transparent 75%)'
          }} />

          {/* Action Header Buttons */}
          <div style={{ position: 'absolute', top: '8px', right: '8px', display: 'flex', gap: '4px', zIndex: 20 }}>
            <button
              onClick={handleShare}
              style={{
                width: '26px',
                height: '26px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                color: '#0f172a',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              title="Compartilhar"
            >
              <Share2 size={12} />
            </button>

            <button
              onClick={() => setIsFavorite(!isFavorite)}
              style={{
                width: '26px',
                height: '26px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                color: isFavorite ? '#ef4444' : '#0f172a',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              title="Favoritar"
            >
              <Heart size={12} fill={isFavorite ? '#ef4444' : 'none'} />
            </button>

            <button
              onClick={onClose}
              style={{
                width: '26px',
                height: '26px',
                borderRadius: '50%',
                backgroundColor: '#ffffff',
                color: '#0f172a',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              title="Fechar"
            >
              <X size={14} />
            </button>
          </div>

          {/* Title Overlay */}
          <div style={{ position: 'absolute', bottom: '8px', left: '10px', right: '10px', zIndex: 10, color: '#ffffff' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '2px' }}>
              <span style={{ backgroundColor: '#00a896', color: '#ffffff', fontSize: '8.5px', fontWeight: '900', padding: '1px 5px', borderRadius: '3px', textTransform: 'uppercase' }}>
                {attraction.category || 'Atração'}
              </span>
              <span style={{ backgroundColor: 'rgba(255,255,255,0.25)', color: '#ffffff', fontSize: '8.5px', fontWeight: '800', padding: '1px 5px', borderRadius: '3px' }}>
                ⭐ {attraction.rating || 4.9}
              </span>
            </div>

            <h3 style={{ fontSize: '14px', fontWeight: '900', lineHeight: '1.2' }}>
              {attraction.title}
            </h3>
          </div>
        </div>

        {/* Compact Tab Bar */}
        <div style={{ backgroundColor: '#f8fafc', padding: '4px 8px', display: 'flex', gap: '4px', borderBottom: '1px solid #e2e8f0', overflowX: 'auto', flexShrink: 0 }} className="hide-scrollbar">
          {[
            { id: 'overview', label: 'Sobre' },
            { id: 'transit', label: 'Acesso BRT' },
            { id: 'weather', label: 'Clima 21°C' },
            { id: 'faq', label: 'Dica' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: '3px 8px',
                fontSize: '10px',
                fontWeight: activeTab === tab.id ? '800' : '600',
                color: activeTab === tab.id ? '#ffffff' : '#475569',
                backgroundColor: activeTab === tab.id ? '#00a896' : '#ffffff',
                borderRadius: '9999px',
                border: activeTab === tab.id ? '1px solid #00a896' : '1px solid #cbd5e1',
                cursor: 'pointer',
                whiteSpace: 'nowrap'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Compact Body Content */}
        <div style={{ padding: '10px', overflowY: 'auto', flex: 1, backgroundColor: '#ffffff', fontSize: '11px', lineHeight: '1.35' }}>
          
          {activeTab === 'overview' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <p style={{
                color: '#475569',
                fontSize: '11px',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden'
              }}>
                {attraction.description || 'Ponto turístico principal de Curitiba para visitação.'}
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px' }}>
                <div style={{ backgroundColor: '#f8fafc', padding: '6px', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
                  <div style={{ color: '#00a896', fontWeight: '800', fontSize: '9px', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '3px', marginBottom: '1px' }}>
                    <MapPin size={10} color="#00a896" />
                    <span>Local</span>
                  </div>
                  <div style={{ fontWeight: '800', color: '#0f172a', fontSize: '10.5px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {attraction.location || 'Curitiba'}
                  </div>
                </div>

                <div style={{ backgroundColor: '#f8fafc', padding: '6px', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
                  <div style={{ color: '#2563eb', fontWeight: '800', fontSize: '9px', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '3px', marginBottom: '1px' }}>
                    <Clock size={10} color="#2563eb" />
                    <span>Horário</span>
                  </div>
                  <div style={{ fontWeight: '800', color: '#0f172a', fontSize: '10.5px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {attraction.hours || '06h às 19h30'}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'transit' && (
            <div style={{ backgroundColor: '#eff6ff', padding: '8px', borderRadius: '8px', border: '1px solid #bfdbfe', color: '#1e40af' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontWeight: '800', fontSize: '11px', marginBottom: '2px' }}>
                <Bus size={12} color="#2563eb" />
                <span>Linha Turismo / BRT:</span>
              </div>
              <p style={{ fontSize: '10.5px', color: '#1e3a8a' }}>
                {attraction.howToGet || 'Estação Tubo BRT ou Linha Turismo.'}
              </p>
            </div>
          )}

          {activeTab === 'weather' && (
            <div style={{ backgroundColor: '#f0fdf4', padding: '8px', borderRadius: '8px', border: '1px solid #bbf7d0', color: '#166534' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontWeight: '800', fontSize: '11px', marginBottom: '2px' }}>
                <CloudSun size={13} color="#16a34a" />
                <span>Clima em Curitiba: 21°C</span>
              </div>
              <p style={{ fontSize: '10.5px', color: '#15803d' }}>
                Ensolarado e ideal para passeios.
              </p>
            </div>
          )}

          {activeTab === 'faq' && (
            <div style={{ backgroundColor: '#fef3c7', padding: '8px', borderRadius: '8px', border: '1px solid #fde68a', color: '#92400e' }}>
              <strong style={{ color: '#b45309', fontSize: '10.5px', display: 'block', marginBottom: '1px' }}>💡 Dica Local:</strong>
              <p style={{ fontSize: '10.5px' }}>
                {attraction.tip || 'Fotos com iluminação perfeita das 16h30 às 18h.'}
              </p>
            </div>
          )}

        </div>

        {/* Ultra-Compact Footer */}
        <div style={{ padding: '8px 10px', backgroundColor: '#f8fafc', borderTop: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0 }}>
          <div>
            <span style={{ fontSize: '8.5px', color: '#64748b', display: 'block', fontWeight: '600' }}>Acesso</span>
            <span style={{ fontSize: '13px', fontWeight: '900', color: attraction.isFree ? '#16a34a' : '#2563eb' }}>
              {priceFormatted}
            </span>
          </div>

          <button
            onClick={handleAddToCart}
            style={{
              backgroundColor: '#00a896',
              color: '#ffffff',
              fontWeight: '900',
              fontSize: '11px',
              height: '30px',
              padding: '0 12px',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              boxShadow: '0 2px 6px rgba(0,168,150,0.3)'
            }}
          >
            <Ticket size={12} />
            <span>Garantir Vaga</span>
          </button>
        </div>

      </div>
    </div>
  );
}
