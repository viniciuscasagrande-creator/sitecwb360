import React, { useState } from 'react';
import { Star, Clock, Heart, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';

export default function AttractionListItem({ attraction, onClickDetail }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = (e) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  return (
    <div
      onClick={() => onClickDetail(attraction)}
      className="hover-card-rise"
      style={{
        backgroundColor: '#ffffff',
        borderRadius: '16px',
        border: '1px solid #e2e8f0',
        padding: '16px',
        display: 'grid',
        gridTemplateColumns: '1fr',
        mdGridTemplateColumns: '240px 1fr',
        gap: '20px',
        cursor: 'pointer',
        boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
        transition: 'all 0.25s ease'
      }}
    >
      {/* Left Column: Image */}
      <div style={{ position: 'relative', height: '170px', borderRadius: '12px', overflow: 'hidden' }}>
        <img
          src={attraction.image}
          alt={attraction.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />

        {/* Discount Badge */}
        {attraction.discount && (
          <div style={{
            position: 'absolute',
            top: '10px',
            left: '10px',
            backgroundColor: '#ea580c',
            color: '#ffffff',
            fontSize: '11px',
            fontWeight: '800',
            padding: '3px 8px',
            borderRadius: '6px',
            boxShadow: '0 2px 6px rgba(234,88,12,0.3)',
            zIndex: 2
          }}>
            {attraction.discount}
          </div>
        )}

        {/* Favorite Heart Button */}
        <button
          onClick={toggleFavorite}
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.85)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: 'none',
            cursor: 'pointer',
            zIndex: 2
          }}
          title={isFavorite ? "Remover dos favoritos" : "Salvar nos favoritos"}
        >
          <Heart 
            size={16} 
            color={isFavorite ? '#ef4444' : '#64748b'} 
            fill={isFavorite ? '#ef4444' : 'none'} 
          />
        </button>
      </div>

      {/* Right Column: Full Info */}
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#0f172a', lineHeight: '1.3' }}>
              {attraction.title}
            </h3>

            {/* Price badge right header */}
            <div>
              {attraction.isFree ? (
                <div style={{ fontSize: '18px', fontWeight: '800', color: '#16a34a' }}>
                  GRÁTIS
                </div>
              ) : (
                <div style={{ textAlign: 'right' }}>
                  <span style={{ fontSize: '11px', color: '#64748b' }}>A partir de</span>
                  <div style={{ fontSize: '20px', fontWeight: '800', color: '#2563eb', lineHeight: '1' }}>
                    R$ {attraction.price.toFixed(2).replace('.', ',')}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Subtitle & Rating */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap', marginTop: '6px', marginBottom: '10px', fontSize: '13px', color: '#64748b' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <MapPin size={14} color="#00a896" />
              <span>{attraction.subtitle}</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', backgroundColor: '#fef3c7', padding: '2px 8px', borderRadius: '6px' }}>
              <Star size={13} color="#f59e0b" fill="#f59e0b" />
              <span style={{ fontSize: '12px', fontWeight: '800', color: '#92400e' }}>{attraction.rating}</span>
              <span style={{ fontSize: '11px', color: '#78350f' }}>({attraction.reviewsCount})</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px' }}>
              <Clock size={13} color="#64748b" />
              <span>{attraction.duration}</span>
            </div>
          </div>

          <p style={{ fontSize: '14px', color: '#475569', lineHeight: '1.5', marginBottom: '12px' }}>
            {attraction.description.substring(0, 160)}...
          </p>

          {/* Bullet Features */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '14px' }}>
            {attraction.features?.slice(0, 3).map((ft, i) => (
              <span key={i} style={{ fontSize: '11px', fontWeight: '600', backgroundColor: '#f1f5f9', color: '#334155', padding: '3px 10px', borderRadius: '6px', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                <CheckCircle2 size={12} color="#00a896" />
                <span>{ft}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Footer Action */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px dashed #e2e8f0', paddingTop: '10px' }}>
          <span style={{ fontSize: '12px', color: '#64748b', fontWeight: '500' }}>
            {attraction.paymentTerms || 'Pague em até 3x no cartão'}
          </span>

          <button
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              height: '34px',
              padding: '0 16px',
              borderRadius: '8px',
              backgroundColor: '#2563eb',
              color: '#ffffff',
              fontSize: '13px',
              fontWeight: '700',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            <span>Ver Passeio</span>
            <ArrowRight size={14} />
          </button>
        </div>

      </div>
    </div>
  );
}
