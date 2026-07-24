import React from 'react';

const DESTINATION_SPOTS = [
  {
    id: 'jardim-botanico',
    title: 'Jardim Botânico',
    image: 'https://images.unsplash.com/photo-1596436889106-be35e843f974?auto=format&fit=crop&w=600&q=80',
    count: '24 atividades'
  },
  {
    id: 'batel',
    title: 'Batel & Gastronomia',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80',
    count: '38 restaurantes & pubs'
  },
  {
    id: 'opera-de-arame',
    title: 'Ópera de Arame',
    image: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=600&q=80',
    count: '15 shows & vale da música'
  },
  {
    id: 'mon',
    title: 'Museu do Olho (MON)',
    image: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=600&q=80',
    count: '12 exposições'
  },
  {
    id: 'santa-felicidade',
    title: 'Santa Felicidade',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80',
    count: '18 cantinas & vinhos'
  },
  {
    id: 'serra-do-mar',
    title: 'Trem para Morretes',
    image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=600&q=80',
    count: '8 tours ecológicos'
  }
];

export default function SquareCategoriesGrid({ onSelectSpot }) {
  return (
    <section style={{ maxWidth: '1280px', margin: '40px auto 20px', padding: '0 16px' }}>
      <h2 style={{ fontSize: '24px', fontWeight: '900', color: '#0f172a', marginBottom: '20px' }}>
        Ache atrações incríveis em Curitiba
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: '16px' }}>
        {DESTINATION_SPOTS.map((spot) => (
          <div
            key={spot.id}
            onClick={() => onSelectSpot && onSelectSpot(spot.title)}
            style={{
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px'
            }}
            className="hover-card-rise"
          >
            {/* Square 1:1 Image */}
            <div style={{
              width: '100%',
              aspectRatio: '1/1',
              borderRadius: '16px',
              overflow: 'hidden',
              backgroundColor: '#f1f5f9',
              boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
              border: '1px solid #e2e8f0'
            }}>
              <img
                src={spot.image}
                alt={spot.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.4s ease'
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.06)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              />
            </div>

            {/* Title & Count Below Photo */}
            <div>
              <h3 style={{ fontSize: '15px', fontWeight: '800', color: '#0f172a', lineHeight: '1.2' }}>
                {spot.title}
              </h3>
              <span style={{ fontSize: '12px', color: '#64748b', fontWeight: '500' }}>
                {spot.count}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
