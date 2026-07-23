import React from 'react';

export default function Logo({ size = 'md', className = '' }) {
  const heights = {
    sm: '36px',
    md: '48px',
    lg: '64px'
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '12px' }}>
      <img 
        src="/logos/vteor 360-2.jpg" 
        alt="Curitiba 360 Logo" 
        style={{ 
          height: heights[size] || '48px',
          width: 'auto',
          objectFit: 'contain',
          borderRadius: '8px'
        }} 
      />
    </div>
  );
}
