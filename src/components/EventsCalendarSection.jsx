import React, { useState } from 'react';
import { Calendar, MapPin, ChevronRight } from 'lucide-react';

const CURITIBA_EVENTS = [
  {
    id: 'festival-teatro-cwb',
    title: '32º Festival de Teatro de Curitiba',
    date: 'HOJE & FIM DE SEMANA',
    location: 'Teatro Guaíra & Vários Espaços',
    category: 'Teatro & Artes',
    tag: '🎭 Festival Oficial',
    image: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=800&q=80',
    price: 'A partir de R$ 40,00',
    highlight: 'Maior festival de artes cênicas da América Latina em Curitiba.'
  },
  {
    id: 'show-pedreira',
    title: 'Festival de Inverno na Pedreira Leminski',
    date: 'SÁBADO • 19:00',
    location: 'Pedreira Paulo Leminski',
    category: 'Shows ao Vivo',
    tag: '🎵 Show Nacional',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80',
    price: 'A partir de R$ 90,00',
    highlight: 'Palco ao vivo cercado por impressionantes paredões de rocha.'
  },
  {
    id: 'feira-largo-ordem',
    title: 'Feira de Artesanato do Largo da Ordem',
    date: 'DOMINGO • 09:00 - 14:00',
    location: 'Centro Histórico / Largo da Ordem',
    category: 'Eventos Gratuitos',
    tag: '🎨 Feirinha Tradicional',
    image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=80',
    price: 'ENTRADA GRATUITA',
    highlight: 'Mais de 1.000 barracas de artesanato e culinária típica.'
  },
  {
    id: 'vale-da-musica',
    title: 'Vale da Música (Palco Flutuante Ópera de Arame)',
    date: 'TERÇA A DOMINGO',
    location: 'Ópera de Arame',
    category: 'Shows ao Vivo',
    tag: '🎷 Instrumental ao Vivo',
    image: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=800&q=80',
    price: 'R$ 15,00',
    highlight: 'Apresentações musicais diárias no palco flutuante do lago.'
  }
];

export default function EventsCalendarSection({ onClickDetail }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredEvents = activeFilter === 'all'
    ? CURITIBA_EVENTS
    : CURITIBA_EVENTS.filter(e => e.category.toLowerCase().includes(activeFilter));

  return (
    <section style={{ maxWidth: '1280px', margin: '40px auto', padding: '0 16px' }}>
      
      {/* Section Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#00a896', fontSize: '11px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '2px' }}>
            <Calendar size={14} />
            <span>CALENDÁRIO INTEGRADO CWB</span>
          </div>
          <h2 style={{ fontSize: '24px', fontWeight: '900', color: '#0f172a' }}>
            Próximos Eventos, Shows & Festivais
          </h2>
          <p style={{ fontSize: '13px', color: '#64748b' }}>
            Programação cultural atualizada em Curitiba com ingressos e opções gratuitas
          </p>
        </div>

        {/* Filter Chips */}
        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
          {[
            { id: 'all', label: 'Todos os Eventos' },
            { id: 'shows', label: '🎵 Shows ao Vivo' },
            { id: 'teatro', label: '🎭 Teatros' },
            { id: 'gratuitos', label: '🎁 Gratuitos' },
          ].map((chip) => (
            <button
              key={chip.id}
              onClick={() => setActiveFilter(chip.id)}
              style={{
                padding: '6px 14px',
                borderRadius: '9999px',
                fontSize: '12px',
                fontWeight: activeFilter === chip.id ? '800' : '600',
                backgroundColor: activeFilter === chip.id ? '#0f172a' : '#ffffff',
                color: activeFilter === chip.id ? '#ffffff' : '#475569',
                border: activeFilter === chip.id ? '1px solid #0f172a' : '1px solid #cbd5e1',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {chip.label}
            </button>
          ))}
        </div>
      </div>

      {/* Events Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
        {filteredEvents.map((evt) => (
          <div
            key={evt.id}
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              overflow: 'hidden',
              border: '1px solid #e2e8f0',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
              display: 'flex',
              flexDirection: 'column',
              transition: 'transform 0.2s ease'
            }}
            className="hover-card-rise"
          >
            {/* Image Container */}
            <div style={{ position: 'relative', height: '160px', width: '100%', backgroundColor: '#0f172a' }}>
              <img
                src={evt.image}
                alt={evt.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              
              {/* Category Tag Overlay */}
              <div style={{
                position: 'absolute',
                top: '10px',
                left: '10px',
                backgroundColor: '#0f172a',
                color: '#ffffff',
                fontSize: '10px',
                fontWeight: '800',
                padding: '3px 8px',
                borderRadius: '6px',
                boxShadow: '0 2px 6px rgba(0,0,0,0.3)'
              }}>
                {evt.tag}
              </div>

              {/* Date Overlay */}
              <div style={{
                position: 'absolute',
                bottom: '10px',
                right: '10px',
                backgroundColor: '#00a896',
                color: '#ffffff',
                fontSize: '10px',
                fontWeight: '900',
                padding: '3px 8px',
                borderRadius: '6px'
              }}>
                {evt.date}
              </div>
            </div>

            {/* Event Content */}
            <div style={{ padding: '14px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <h3 style={{ fontSize: '15px', fontWeight: '800', color: '#0f172a', marginBottom: '4px', lineHeight: '1.3' }}>
                  {evt.title}
                </h3>
                
                <div style={{ fontSize: '12px', color: '#64748b', display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '8px' }}>
                  <MapPin size={13} color="#00a896" />
                  <span>{evt.location}</span>
                </div>

                <div style={{ fontSize: '11px', color: '#475569', backgroundColor: '#f8fafc', padding: '6px 8px', borderRadius: '6px', border: '1px solid #f1f5f9', lineHeight: '1.4' }}>
                  {evt.highlight}
                </div>
              </div>

              <div style={{ marginTop: '12px', paddingTop: '10px', borderTop: '1px dashed #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ fontSize: '13px', fontWeight: '900', color: evt.price === 'ENTRADA GRATUITA' ? '#16a34a' : '#2563eb' }}>
                  {evt.price}
                </div>

                <button
                  onClick={() => onClickDetail && onClickDetail(evt)}
                  style={{
                    backgroundColor: '#0f172a',
                    color: '#ffffff',
                    fontSize: '11px',
                    fontWeight: '800',
                    padding: '6px 12px',
                    borderRadius: '6px',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  <span>Ver Detalhes</span>
                  <ChevronRight size={12} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
