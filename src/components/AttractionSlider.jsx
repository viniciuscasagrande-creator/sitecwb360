import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import AttractionCard from './AttractionCard';

export default function AttractionSlider({ title, subtitle, attractions, onClickDetail }) {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  if (!attractions || attractions.length === 0) return null;

  return (
    <section style={{ maxWidth: '1280px', margin: '40px auto', padding: '0 20px' }}>
      {/* Header with Title and Scroll Controls */}
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '20px' }}>
        <div>
          <h2 style={{ fontSize: '26px', fontWeight: '800', color: '#0f172a', marginBottom: '4px' }}>
            {title}
          </h2>
          {subtitle && (
            <p style={{ fontSize: '14px', color: '#64748b' }}>
              {subtitle}
            </p>
          )}
        </div>

        {/* Arrow Controls */}
        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            onClick={() => scroll('left')}
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              backgroundColor: '#ffffff',
              border: '1px solid #cbd5e1',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#334155',
              cursor: 'pointer',
              boxShadow: '0 2px 4px rgba(0,0,0,0.04)'
            }}
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll('right')}
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              backgroundColor: '#ffffff',
              border: '1px solid #cbd5e1',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#334155',
              cursor: 'pointer',
              boxShadow: '0 2px 4px rgba(0,0,0,0.04)'
            }}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Scrollable Track */}
      <div 
        ref={scrollRef}
        style={{
          display: 'grid',
          gridAutoFlow: 'column',
          gridAutoColumns: 'minmax(280px, 310px)',
          gap: '20px',
          overflowX: 'auto',
          scrollBehavior: 'smooth',
          paddingBottom: '12px'
        }}
        className="hide-scrollbar"
      >
        {attractions.map((attraction) => (
          <AttractionCard 
            key={attraction.id} 
            attraction={attraction} 
            onClickDetail={onClickDetail} 
          />
        ))}
      </div>
    </section>
  );
}
