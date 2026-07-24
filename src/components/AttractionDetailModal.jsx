import React, { useState } from 'react';
import { X, MapPin, Clock, Ticket, Bus, CloudSun, Utensils, Hotel, HelpCircle, Star } from 'lucide-react';
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
      backgroundColor: 'rgba(15, 23, 42, 0.45)',
      backdropFilter: 'blur(5px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '16px'
    }}>
      {/* 100% ENTIRE SQUARE CARD WITH ROUNDED CORNERS */}
      <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '24px',
        width: '380px',
        height: '380px',
        maxWidth: '90vw',
        maxHeight: '90vh',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
        border: '1px solid #e2e8f0',
        position: 'relative'
      }}>
        
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            width: '28px',
            height: '28px',
            borderRadius: '50%',
            backgroundColor: '#ffffff',
            color: '#0f172a',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 20,
            boxShadow: '0 2px 8px rgba(0,0,0,0.18)'
          }}
        >
          <X size={14} />
        </button>

        {/* Top Half Image Header */}
        <div style={{ position: 'relative', height: '150px', width: '100%', backgroundColor: '#f1f5f9', flexShrink: 0 }}>
          <img
            src={attraction.image}
            alt={attraction.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, transparent 60%)'
          }} />

          {/* Title Overlay */}
          <div style={{ position: 'absolute', bottom: '8px', left: '12px', right: '12px', zIndex: 10, color: '#ffffff' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '2px' }}>
              <span style={{ backgroundColor: '#00a896', color: '#ffffff', fontSize: '9px', fontWeight: '900', padding: '2px 6px', borderRadius: '4px' }}>
                {attraction.category || 'Atração'}
              </span>
              <span style={{ backgroundColor: 'rgba(255,255,255,0.25)', color: '#ffffff', fontSize: '9px', fontWeight: '800', padding: '2px 6px', borderRadius: '4px' }}>
                ⭐ {attraction.rating || 4.9}
              </span>
            </div>
            <h3 style={{ fontSize: '15px', fontWeight: '900', lineHeight: '1.2', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {attraction.title}
            </h3>
          </div>
        </div>

        {/* Compact Light Pill Navigation */}
        <div style={{ backgroundColor: '#f8fafc', padding: '6px 10px', display: 'flex', gap: '4px', borderBottom: '1px solid #e2e8f0', overflowX: 'auto', flexShrink: 0 }} className="hide-scrollbar">
          {[
            { id: 'overview', label: 'Info' },
            { id: 'transit', label: 'BRT' },
            { id: 'weather', label: 'Clima 21°C' },
            { id: 'nearby', label: 'Próximos' },
            { id: 'faq', label: 'Dica 360°' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: '3px 9px',
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

        {/* Middle Body Content (Fits inside the Square) */}
        <div style={{ padding: '10px 12px', overflowY: 'auto', flex: 1, backgroundColor: '#ffffff', fontSize: '11px' }}>
          
          {activeTab === 'overview' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <p style={{ color: '#475569', lineHeight: '1.4', fontSize: '11px', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                {attraction.description || 'Ponto turístico imperdível de Curitiba! Excelente opção para passeio.'}
              </p>

              <div style={{ backgroundColor: '#f8fafc', padding: '6px 8px', borderRadius: '8px', border: '1px solid #e2e8f0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px', fontSize: '10px' }}>
                <div>
                  <span style={{ color: '#64748b', fontWeight: '700' }}>Local:</span>
                  <div style={{ fontWeight: '800', color: '#0f172a', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{attraction.location || 'Curitiba'}</div>
                </div>

                <div>
                  <span style={{ color: '#64748b', fontWeight: '700' }}>Horário:</span>
                  <div style={{ fontWeight: '800', color: '#0f172a', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{attraction.hours || '06h às 19h30'}</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'transit' && (
            <div style={{ backgroundColor: '#eff6ff', padding: '8px 10px', borderRadius: '8px', border: '1px solid #bfdbfe', color: '#1e40af', fontSize: '11px', lineHeight: '1.3' }}>
              <strong>🚌 BRT / Linha Turismo:</strong>
              <p style={{ marginTop: '2px' }}>{attraction.howToGet || 'Linha Turismo Double-Decker ou Estação Tubo BRT.'}</p>
            </div>
          )}

          {activeTab === 'weather' && (
            <div style={{ backgroundColor: '#f0fdf4', padding: '8px 10px', borderRadius: '8px', border: '1px solid #bbf7d0', color: '#166534', fontSize: '11px' }}>
              <strong>🌦️ Clima em Curitiba: 21°C</strong>
              <p style={{ marginTop: '2px' }}>Dia ensolarado ideal para passeios ao ar livre.</p>
            </div>
          )}

          {activeTab === 'nearby' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '10px' }}>
              <div style={{ padding: '6px 8px', backgroundColor: '#f8fafc', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
                <strong>🍽️ Bar do Alemão</strong> (Chopp Submarino • 400m)
              </div>
              <div style={{ padding: '6px 8px', backgroundColor: '#f8fafc', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
                <strong>🏨 Radisson Hotel 5★</strong> (Batel • 800m)
              </div>
            </div>
          )}

          {activeTab === 'faq' && (
            <div style={{ backgroundColor: '#f8fafc', padding: '8px 10px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '11px', color: '#475569' }}>
              <strong>💡 Dica Local 360°:</strong>
              <p style={{ marginTop: '2px' }}>{attraction.tip || 'Fotos perfeitas no pôr do sol entre 16h30 e 18h.'}</p>
            </div>
          )}

        </div>

        {/* Bottom Action Footer (Inside Square Card) */}
        <div style={{ padding: '8px 12px', backgroundColor: '#f8fafc', borderTop: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0 }}>
          <div>
            <span style={{ fontSize: '9px', color: '#64748b', display: 'block' }}>A partir de</span>
            <span style={{ fontSize: '14px', fontWeight: '900', color: attraction.isFree ? '#16a34a' : '#2563eb' }}>
              {attraction.isFree ? 'GRATUITO' : `R$ ${attraction.price.toFixed(2).replace('.', ',')}`}
            </span>
          </div>

          <button
            onClick={handleAddToCart}
            style={{
              backgroundColor: '#00a896',
              color: '#ffffff',
              fontWeight: '800',
              fontSize: '11px',
              padding: '6px 14px',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              boxShadow: '0 2px 6px rgba(0,168,150,0.3)'
            }}
          >
            <Ticket size={13} />
            <span>Garantir Vaga</span>
          </button>
        </div>

      </div>
    </div>
  );
}
