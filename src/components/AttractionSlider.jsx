import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, LayoutGrid, ListFilter, Sparkles } from 'lucide-react';
import AttractionCard from './AttractionCard';
import AttractionListItem from './AttractionListItem';

export default function AttractionSlider({ title, subtitle, attractions, onClickDetail }) {
  const [displayCount, setDisplayCount] = useState('6'); // '4', '6', '8', 'all'
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  if (!attractions || attractions.length === 0) return null;

  // Determine list of displayed attractions according to user count selection
  const countLimit = displayCount === 'all' ? attractions.length : parseInt(displayCount, 10);
  const displayedAttractions = attractions.slice(0, countLimit);

  return (
    <section style={{ maxWidth: '1280px', margin: '40px auto', padding: '0 20px' }}>
      
      {/* Header with Title and View & Count Controls */}
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', marginBottom: '24px' }}>
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

        {/* View Mode & Count Selectors */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
          
          {/* Card Quantity Buttons: 4, 6, 8, Todos */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', backgroundColor: '#f1f5f9', padding: '3px', borderRadius: '10px', border: '1px solid #cbd5e1' }}>
            <span style={{ fontSize: '11px', fontWeight: '700', color: '#64748b', padding: '0 6px', textTransform: 'uppercase' }}>
              Exibir:
            </span>
            {['4', '6', '8', 'all'].map((cnt) => (
              <button
                key={cnt}
                onClick={() => setDisplayCount(cnt)}
                style={{
                  height: '30px',
                  padding: '0 10px',
                  borderRadius: '7px',
                  fontSize: '12px',
                  fontWeight: displayCount === cnt ? '800' : '600',
                  backgroundColor: displayCount === cnt ? '#2563eb' : 'transparent',
                  color: displayCount === cnt ? '#ffffff' : '#475569',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: displayCount === cnt ? '0 2px 6px rgba(37,99,235,0.3)' : 'none'
                }}
              >
                {cnt === 'all' ? 'Todos' : `${cnt} Cards`}
              </button>
            ))}
          </div>

          {/* View Mode Toggle: Grid vs List */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', backgroundColor: '#f1f5f9', padding: '3px', borderRadius: '10px', border: '1px solid #cbd5e1' }}>
            <button
              onClick={() => setViewMode('grid')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                height: '30px',
                padding: '0 12px',
                borderRadius: '7px',
                fontSize: '12px',
                fontWeight: viewMode === 'grid' ? '800' : '600',
                backgroundColor: viewMode === 'grid' ? '#0f172a' : 'transparent',
                color: viewMode === 'grid' ? '#ffffff' : '#475569',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              title="Exibir em Grade de Cards"
            >
              <LayoutGrid size={14} />
              <span>Grade</span>
            </button>

            <button
              onClick={() => setViewMode('list')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                height: '30px',
                padding: '0 12px',
                borderRadius: '7px',
                fontSize: '12px',
                fontWeight: viewMode === 'list' ? '800' : '600',
                backgroundColor: viewMode === 'list' ? '#0f172a' : 'transparent',
                color: viewMode === 'list' ? '#ffffff' : '#475569',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              title="Exibir em Lista Detalhada"
            >
              <ListFilter size={14} />
              <span>Lista</span>
            </button>
          </div>

          {/* Arrow Controls (Only shown for Grid view) */}
          {viewMode === 'grid' && (
            <div style={{ display: 'flex', gap: '6px' }}>
              <button
                onClick={() => scroll('left')}
                style={{
                  width: '36px',
                  height: '36px',
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
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => scroll('right')}
                style={{
                  width: '36px',
                  height: '36px',
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
                <ChevronRight size={18} />
              </button>
            </div>
          )}

        </div>
      </div>

      {/* Render View: Grid vs List */}
      {viewMode === 'grid' ? (
        <div 
          ref={scrollRef}
          style={{
            display: 'grid',
            gridAutoFlow: displayCount === 'all' || displayedAttractions.length > 4 ? 'dense' : 'column',
            gridTemplateColumns: displayCount === 'all' || displayedAttractions.length > 4 ? 'repeat(auto-fill, minmax(280px, 1fr))' : undefined,
            gridAutoColumns: displayCount === 'all' || displayedAttractions.length > 4 ? undefined : 'minmax(280px, 310px)',
            gap: '20px',
            overflowX: displayCount === 'all' || displayedAttractions.length > 4 ? 'visible' : 'auto',
            scrollBehavior: 'smooth',
            paddingBottom: '12px'
          }}
          className="hide-scrollbar"
        >
          {displayedAttractions.map((attraction) => (
            <AttractionCard 
              key={attraction.id} 
              attraction={attraction} 
              onClickDetail={onClickDetail} 
            />
          ))}
        </div>
      ) : (
        /* List View rendering */
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {displayedAttractions.map((attraction) => (
            <AttractionListItem
              key={attraction.id}
              attraction={attraction}
              onClickDetail={onClickDetail}
            />
          ))}
        </div>
      )}

    </section>
  );
}
