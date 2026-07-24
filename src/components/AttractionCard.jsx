import React, { useState } from 'react';
import { Star, Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function AttractionCard({ attraction, onClickDetail }) {
  const { t } = useLanguage();
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
        overflow: 'hidden',
        border: '1px solid #e2e8f0',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        boxShadow: '0 2px 10px rgba(0,0,0,0.04)',
        transition: 'all 0.25s ease'
      }}
    >
      {/* Top Image Container */}
      <div style={{ position: 'relative', height: '170px', width: '100%', overflow: 'hidden', backgroundColor: '#f1f5f9' }}>
        <img 
          src={attraction.image} 
          alt={attraction.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.4s ease'
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.04)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        />
        
        {/* GetYourGuide Style Badge Top Left */}
        <div style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          backgroundColor: attraction.discount ? '#dc2626' : '#0f172a',
          color: '#ffffff',
          fontSize: '11px',
          fontWeight: '800',
          padding: '3px 8px',
          borderRadius: '6px',
          boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
          zIndex: 2
        }}>
          {attraction.discount ? 'Esgota rápido' : 'Oficial CWB 360'}
        </div>

        {/* Favorite Heart Circle Top Right */}
        <button
          onClick={toggleFavorite}
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            width: '34px',
            height: '34px',
            borderRadius: '50%',
            backgroundColor: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: 'none',
            cursor: 'pointer',
            zIndex: 2,
            boxShadow: '0 2px 8px rgba(0,0,0,0.18)',
            transition: 'transform 0.15s ease'
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          title={isFavorite ? "Remover dos favoritos" : "Salvar nos favoritos"}
        >
          <Heart 
            size={18} 
            color={isFavorite ? '#ef4444' : '#0f172a'} 
            fill={isFavorite ? '#ef4444' : 'none'} 
          />
        </button>
      </div>

      {/* GetYourGuide Style Card Body */}
      <div style={{ padding: '14px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          {/* Subtitle / Category Tag Above Title */}
          <div style={{ fontSize: '12px', color: '#64748b', fontWeight: '600', marginBottom: '4px' }}>
            Curitiba • {attraction.category || 'Atividade'}
          </div>

          {/* Bold Title */}
          <h3 style={{ fontSize: '15px', fontWeight: '800', color: '#0f172a', marginBottom: '8px', lineHeight: '1.3' }}>
            {attraction.title}
          </h3>

          {/* Meta Features Line */}
          <div style={{ fontSize: '12px', color: '#64748b', fontWeight: '500', marginBottom: '14px' }}>
            {attraction.duration || '2 - 3 horas'} • Evite filas • Guia PT-BR
          </div>
        </div>

        {/* Rating & Price Row */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', paddingTop: '10px', borderTop: '1px solid #f1f5f9' }}>
          {/* Rating */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px', color: '#0f172a', fontWeight: '700' }}>
            <span>{attraction.rating || '4,8'}</span>
            <Star size={13} color="#0f172a" fill="#0f172a" />
            <span style={{ color: '#64748b', fontWeight: '500' }}>({attraction.reviewsCount || '1.200'})</span>
          </div>

          {/* Price */}
          <div style={{ textAlign: 'right' }}>
            <span style={{ fontSize: '10px', color: '#64748b', display: 'block', fontWeight: '600' }}>A partir de</span>
            <span style={{ fontSize: '16px', fontWeight: '900', color: attraction.isFree ? '#16a34a' : '#0f172a' }}>
              {attraction.isFree ? 'GRATUITO' : `R$ ${(attraction.price || 0).toFixed(0)}`}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
