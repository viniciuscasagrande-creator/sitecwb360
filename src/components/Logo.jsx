import React from 'react';

export default function Logo({ size = 'md', variant = 'default', className = '' }) {
  const heights = {
    sm: '52px',
    md: '68px',
    lg: '92px'
  };

  const currentHeight = heights[size] || heights.md;

  return (
    <div 
      className={`group flex items-center gap-3 select-none cursor-pointer transition-all duration-300 ${className}`} 
      style={{ 
        display: 'inline-flex', 
        alignItems: 'center', 
        gap: '14px',
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
      }}
    >
      {/* Transparent High-Impact Logo Image */}
      <div style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.3s ease'
      }}>
        <img 
          src="/logos/logo_transparent.png" 
          alt="Curitiba 360 Logo" 
          style={{ 
            height: currentHeight,
            width: 'auto',
            objectFit: 'contain',
            filter: 'drop-shadow(0 4px 14px rgba(0, 168, 150, 0.35)) drop-shadow(0 2px 6px rgba(0, 0, 0, 0.1))',
            transition: 'transform 0.3s ease, filter 0.3s ease'
          }} 
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'scale(1.06)';
            e.currentTarget.style.filter = 'drop-shadow(0 6px 18px rgba(0, 168, 150, 0.5))';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.filter = 'drop-shadow(0 4px 14px rgba(0, 168, 150, 0.35))';
          }}
        />
      </div>

      {/* Optional Brand Badge Text */}
      {variant === 'with-text' && (
        <div style={{ display: 'flex', flexDirection: 'column', leading: 1 }}>
          <span style={{ 
            fontSize: size === 'lg' ? '24px' : size === 'sm' ? '15px' : '20px', 
            fontWeight: '900', 
            color: '#0f172a',
            letterSpacing: '-0.5px',
            lineHeight: '1.1'
          }}>
            CURITIBA <span style={{ color: '#00a896', textShadow: '0 0 12px rgba(0,168,150,0.3)' }}>360°</span>
          </span>
          <span style={{ 
            fontSize: size === 'lg' ? '12px' : '10px', 
            fontWeight: '700', 
            color: '#64748b', 
            letterSpacing: '1px', 
            textTransform: 'uppercase' 
          }}>
            Portal Oficial de Turismo
          </span>
        </div>
      )}
    </div>
  );
}


