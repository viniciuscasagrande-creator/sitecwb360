import React from 'react';

export default function Logo({ size = 'md', variant = 'default', className = '' }) {
  const heights = {
    sm: '68px',
    md: '100px',
    lg: '145px'
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
      {/* High-Definition Gemini Logo Image */}
      <div style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.3s ease'
      }}>
        <img 
          src="/logos/gemini_logo.jpg" 
          alt="Curitiba 360 Logo Oficial" 
          style={{ 
            height: currentHeight,
            width: 'auto',
            objectFit: 'contain',
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0, 168, 150, 0.25), 0 2px 8px rgba(0, 0, 0, 0.1)',
            filter: 'drop-shadow(0 2px 8px rgba(0, 168, 150, 0.2))',
            transition: 'transform 0.3s ease, boxShadow 0.3s ease',
            display: 'block'
          }} 
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.boxShadow = '0 8px 28px rgba(0, 168, 150, 0.4)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 168, 150, 0.25)';
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






