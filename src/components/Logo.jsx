import React from 'react';

export default function Logo({ size = 'md', variant = 'default', className = '' }) {
  const heights = {
    sm: '85px',
    md: '115px',
    lg: '155px'
  };

  const currentHeight = heights[size] || heights.md;

  return (
    <div 
      className={`group flex items-center gap-4 select-none cursor-pointer transition-all duration-300 ${className}`} 
      style={{ 
        display: 'inline-flex', 
        alignItems: 'center', 
        gap: '16px',
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
      }}
    >
      {/* Pure Transparent Logo Artwork (+60% Size, Zero Background Box) */}
      <div style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.3s ease'
      }}>
        <img 
          src="/logos/logo_pure_transparent.png" 
          alt="Curitiba 360 Logo Oficial" 
          style={{ 
            height: currentHeight,
            width: 'auto',
            objectFit: 'contain',
            filter: 'drop-shadow(0 6px 18px rgba(0, 168, 150, 0.45)) drop-shadow(0 2px 8px rgba(0, 0, 0, 0.15))',
            transition: 'transform 0.3s ease, filter 0.3s ease',
            display: 'block'
          }} 
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'scale(1.08)';
            e.currentTarget.style.filter = 'drop-shadow(0 10px 28px rgba(0, 168, 150, 0.65))';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.filter = 'drop-shadow(0 6px 18px rgba(0, 168, 150, 0.45))';
          }}
        />
      </div>

      {/* Optional Secondary Brand Label */}
      {variant === 'with-text' && (
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
          <span style={{ 
            fontSize: size === 'lg' ? '28px' : size === 'sm' ? '18px' : '24px', 
            fontWeight: '900', 
            color: '#0f172a',
            letterSpacing: '-0.5px'
          }}>
            CURITIBA <span style={{ color: '#00a896', textShadow: '0 0 12px rgba(0,168,150,0.35)' }}>360°</span>
          </span>
          <span style={{ 
            fontSize: size === 'lg' ? '13px' : '11px', 
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





