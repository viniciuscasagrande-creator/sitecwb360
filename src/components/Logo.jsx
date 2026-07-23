import React from 'react';

export default function Logo({ size = 'md', variant = 'default', className = '' }) {
  const heights = {
    sm: '64px',
    md: '84px',
    lg: '115px'
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
      {/* Cropped Transparent High-Impact Logo Image */}
      <div style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.3s ease'
      }}>
        <img 
          src="/logos/logo_cropped_transparent.png" 
          alt="Curitiba 360 Logo" 
          style={{ 
            height: currentHeight,
            width: 'auto',
            objectFit: 'contain',
            filter: 'drop-shadow(0 4px 16px rgba(0, 168, 150, 0.45)) drop-shadow(0 2px 6px rgba(0, 0, 0, 0.15))',
            transition: 'transform 0.3s ease, filter 0.3s ease'
          }} 
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'scale(1.08)';
            e.currentTarget.style.filter = 'drop-shadow(0 8px 22px rgba(0, 168, 150, 0.6))';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.filter = 'drop-shadow(0 4px 16px rgba(0, 168, 150, 0.45))';
          }}
        />
      </div>

      {/* Optional Brand Badge Text for Extra Prominence */}
      {variant === 'with-text' && (
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
          <span style={{ 
            fontSize: size === 'lg' ? '26px' : size === 'sm' ? '16px' : '22px', 
            fontWeight: '900', 
            color: '#0f172a',
            letterSpacing: '-0.5px'
          }}>
            CURITIBA <span style={{ color: '#00a896', textShadow: '0 0 12px rgba(0,168,150,0.35)' }}>360°</span>
          </span>
          <span style={{ 
            fontSize: size === 'lg' ? '12px' : '10px', 
            fontWeight: '800', 
            color: '#64748b', 
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



