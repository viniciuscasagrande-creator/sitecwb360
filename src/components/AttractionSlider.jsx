import React, { useState } from 'react';
import { LayoutGrid, ListFilter, Sparkles, SlidersHorizontal, ArrowRight } from 'lucide-react';
import AttractionCard from './AttractionCard';
import AttractionListItem from './AttractionListItem';

export default function AttractionSlider({ title, subtitle, attractions, onClickDetail }) {
  const [displayCount, setDisplayCount] = useState('6'); // '4', '6', '8', 'all'
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  if (!attractions || attractions.length === 0) return null;

  // Determine list of displayed attractions according to user count selection
  const countLimit = displayCount === 'all' ? attractions.length : Math.min(parseInt(displayCount, 10), attractions.length);
  const displayedAttractions = attractions.slice(0, countLimit);

  return (
    <section style={{ maxWidth: '1280px', margin: '40px auto', padding: '0 20px' }}>
      
      {/* Header with Title and Control Toolbar */}
      <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '20px',
        padding: '24px 28px',
        border: '1px solid #e2e8f0',
        boxShadow: '0 4px 16px rgba(0,0,0,0.03)',
        marginBottom: '28px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '20px'
      }}>
        
        {/* Title & Subtitle */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <span style={{ backgroundColor: '#eff6ff', color: '#2563eb', padding: '4px 10px', borderRadius: '6px', fontSize: '11px', fontWeight: '800', textTransform: 'uppercase' }}>
              Catálogo 360°
            </span>
            <span style={{ fontSize: '12px', color: '#64748b', fontWeight: '600' }}>
              Exibindo {displayedAttractions.length} de {attractions.length} passeios
            </span>
          </div>
          <h2 style={{ fontSize: '26px', fontWeight: '900', color: '#0f172a', lineHeight: '1.2' }}>
            {title}
          </h2>
          {subtitle && (
            <p style={{ fontSize: '14px', color: '#64748b', marginTop: '4px' }}>
              {subtitle}
            </p>
          )}
        </div>

        {/* View Mode & Count Toolbar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
          
          {/* Card Quantity Buttons: 4, 6, 8, Todos */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ fontSize: '12px', fontWeight: '700', color: '#475569', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <SlidersHorizontal size={14} color="#00a896" />
              <span>Cards:</span>
            </span>

            <div style={{ display: 'flex', backgroundColor: '#f1f5f9', padding: '3px', borderRadius: '10px', border: '1px solid #cbd5e1' }}>
              {['4', '6', '8', 'all'].map((cnt) => {
                const isActive = displayCount === cnt;
                return (
                  <button
                    key={cnt}
                    onClick={() => setDisplayCount(cnt)}
                    style={{
                      height: '32px',
                      padding: '0 12px',
                      borderRadius: '8px',
                      fontSize: '12px',
                      fontWeight: isActive ? '800' : '600',
                      backgroundColor: isActive ? '#0f172a' : 'transparent',
                      color: isActive ? '#ffffff' : '#475569',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      boxShadow: isActive ? '0 2px 6px rgba(15,23,42,0.2)' : 'none'
                    }}
                  >
                    {cnt === 'all' ? 'Todos' : cnt}
                  </button>
                );
              })}
            </div>
          </div>

          {/* View Mode Switcher: Grid vs List */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <div style={{ display: 'flex', backgroundColor: '#f1f5f9', padding: '3px', borderRadius: '10px', border: '1px solid #cbd5e1' }}>
              <button
                onClick={() => setViewMode('grid')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  height: '32px',
                  padding: '0 14px',
                  borderRadius: '8px',
                  fontSize: '12px',
                  fontWeight: viewMode === 'grid' ? '800' : '600',
                  backgroundColor: viewMode === 'grid' ? '#2563eb' : 'transparent',
                  color: viewMode === 'grid' ? '#ffffff' : '#475569',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: viewMode === 'grid' ? '0 2px 8px rgba(37,99,235,0.3)' : 'none'
                }}
                title="Exibir em Grade de Cards"
              >
                <LayoutGrid size={15} />
                <span>Grade</span>
              </button>

              <button
                onClick={() => setViewMode('list')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  height: '32px',
                  padding: '0 14px',
                  borderRadius: '8px',
                  fontSize: '12px',
                  fontWeight: viewMode === 'list' ? '800' : '600',
                  backgroundColor: viewMode === 'list' ? '#2563eb' : 'transparent',
                  color: viewMode === 'list' ? '#ffffff' : '#475569',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: viewMode === 'list' ? '0 2px 8px rgba(37,99,235,0.3)' : 'none'
                }}
                title="Exibir em Lista Detalhada"
              >
                <ListFilter size={15} />
                <span>Lista</span>
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Render View Mode: Grid or List */}
      {viewMode === 'grid' ? (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '24px'
        }}>
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
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {displayedAttractions.map((attraction) => (
            <AttractionListItem
              key={attraction.id}
              attraction={attraction}
              onClickDetail={onClickDetail}
            />
          ))}
        </div>
      )}

      {/* Bottom Load More indicator if sliced */}
      {displayCount !== 'all' && attractions.length > countLimit && (
        <div style={{ textAlign: 'center', marginTop: '32px' }}>
          <button
            onClick={() => setDisplayCount('all')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              height: '42px',
              padding: '0 24px',
              borderRadius: '12px',
              backgroundColor: '#ffffff',
              color: '#2563eb',
              fontSize: '13px',
              fontWeight: '700',
              border: '1px solid #cbd5e1',
              boxShadow: '0 2px 6px rgba(0,0,0,0.04)',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#eff6ff';
              e.currentTarget.style.borderColor = '#2563eb';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = '#ffffff';
              e.currentTarget.style.borderColor = '#cbd5e1';
            }}
          >
            <span>Ver todos os {attractions.length} passeios</span>
            <ArrowRight size={16} />
          </button>
        </div>
      )}

    </section>
  );
}
