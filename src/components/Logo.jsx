import React from 'react';

export default function Logo({ size = 'md', variant = 'default', className = '' }) {
  const heights = {
    sm: '52px',
    md: '72px',
    lg: '96px'
  };

  const currentHeight = heights[size] || heights.md;

  return (
    <div 
      className={`group flex items-center gap-3 select-none cursor-pointer transition-all duration-300 ${className}`} 
      style={{ 
        display: 'inline-flex', 
        alignItems: 'center', 
        gap: '12px',
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
      }}
    >
      {/* Decolar-Style High-Impact Logo Card Container */}
      <div 
        style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#ffffff',
          borderRadius: '14px',
          padding: '6px 12px',
          boxShadow: '0 4px 20px rgba(0, 168, 150, 0.22), 0 2px 8px rgba(0, 0, 0, 0.08)',
          border: '2px solid #00a896',
          transition: 'all 0.3s ease',
          overflow: 'hidden'
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'translateY(-2px) scale(1.03)';
          e.currentTarget.style.boxShadow = '0 8px 26px rgba(0, 168, 150, 0.35)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'translateY(0) scale(1)';
          e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 168, 150, 0.22)';
        }}
      >
        <img 
          src="/logos/vteor_360_2.jpg" 
          alt="Curitiba 360 Oficial Logo" 
          style={{ 
            height: currentHeight,
            width: 'auto',
            objectFit: 'contain',
            borderRadius: '8px',
            display: 'block'
          }} 
        />
      </div>

      {/* Optional Decolar-Style Secondary Brand Label */}
      {variant === 'with-text' && (
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
          <span style={{ 
            fontSize: size === 'lg' ? '24px' : size === 'sm' ? '15px' : '20px', 
            fontWeight: '900', 
            color: '#0f172a',
            letterSpacing: '-0.5px'
          }}>
            CURITIBA <span style={{ color: '#00a896', textShadow: '0 0 10px rgba(0,168,150,0.3)' }}>360°</span>
          </span>
          <span style={{ 
            fontSize: size === 'lg' ? '11px' : '9px', 
            fontWeight: '800', 
            color: '#2563eb', 
            letterSpacing: '1.2px', 
            textTransform: 'uppercase' 
          }}>
            Portal Oficial de Turismo
          </span>
        </div>
      )}
    </div>
  );
}




