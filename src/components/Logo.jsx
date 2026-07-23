import React from 'react';

export default function Logo({ size = 'md', variant = 'default', className = '' }) {
  const heights = {
    sm: '60px',
    md: '90px',
    lg: '130px'
  };

  const currentHeight = heights[size] || heights.md;

  return (
    <div 
      className={`group flex items-center gap-4 select-none cursor-pointer transition-all duration-300 ${className}`} 
      style={{ 
        display: 'inline-flex', 
        alignItems: 'center', 
        gap: '14px',
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
      }}
    >
      {/* Pure Logo Image without button/card wrapper */}
      <div style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <img 
          src="/logos/gemini_logo.jpg" 
          alt="Curitiba 360 Logo Oficial" 
          style={{ 
            height: currentHeight,
            width: 'auto',
            objectFit: 'contain',
            borderRadius: '8px',
            transition: 'transform 0.3s ease',
            display: 'block'
          }} 
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'scale(1.04)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
          }}
        />
      </div>

      {/* Optional Secondary Brand Text */}
      {variant === 'with-text' && (
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
          <span style={{ 
            fontSize: size === 'lg' ? '26px' : size === 'sm' ? '16px' : '22px', 
            fontWeight: '900', 
            color: '#0f172a',
            letterSpacing: '-0.5px'
          }}>
            CURITIBA <span style={{ color: '#00a896' }}>360°</span>
          </span>
          <span style={{ 
            fontSize: size === 'lg' ? '12px' : '10px', 
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







