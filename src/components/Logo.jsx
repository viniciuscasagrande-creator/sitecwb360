import React from 'react';

export default function Logo({ size = 'md', variant = 'default', className = '' }) {
  const heights = {
    sm: '42px',
    md: '56px',
    lg: '76px'
  };

  const currentHeight = heights[size] || heights.md;

  return (
    <div 
      className={`group flex items-center gap-3 select-none cursor-pointer transition-all duration-300 ${className}`} 
      style={{ 
        display: 'inline-flex', 
        alignItems: 'center', 
        gap: '12px',
        padding: '4px 8px',
        borderRadius: '12px',
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
      }}
    >
      {/* Logo Image Container with Vibrant Glow & Elevation */}
      <div style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        padding: '4px 8px',
        boxShadow: '0 4px 14px rgba(0, 168, 150, 0.18), 0 2px 6px rgba(0, 0, 0, 0.05)',
        border: '1.5px solid rgba(0, 168, 150, 0.2)',
        transition: 'all 0.3s ease'
      }}>
        <img 
          src="/logos/vteor 360-2.jpg" 
          alt="Curitiba 360 Logo" 
          style={{ 
            height: currentHeight,
            width: 'auto',
            objectFit: 'contain',
            borderRadius: '6px',
            filter: 'drop-shadow(0 2px 4px rgba(0, 168, 150, 0.15))'
          }} 
        />
      </div>

      {/* Optional Brand Badge Text for High Visibility */}
      {variant === 'with-text' && (
        <div style={{ display: 'flex', flexDirection: 'column', leading: 1 }}>
          <span style={{ 
            fontSize: size === 'lg' ? '22px' : size === 'sm' ? '14px' : '18px', 
            fontWeight: '900', 
            color: '#0f172a',
            letterSpacing: '-0.5px',
            lineHeight: '1.1'
          }}>
            CURITIBA <span style={{ color: '#00a896', textShadow: '0 0 10px rgba(0,168,150,0.2)' }}>360°</span>
          </span>
          <span style={{ 
            fontSize: size === 'lg' ? '11px' : '9px', 
            fontWeight: '700', 
            color: '#64748b', 
            letterSpacing: '1px', 
            textTransform: 'uppercase' 
          }}>
            Capital Ecológica & Turismo
          </span>
        </div>
      )}
    </div>
  );
}

