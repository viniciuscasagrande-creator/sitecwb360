import React, { useState } from 'react';
import { Calendar, Music, Drama, MapPin, Clock, Ticket, ChevronRight, Sparkles, Star } from 'lucide-react';

const CURITIBA_EVENTS = [
  {
    id: 'festival-teatro-cwb',
    title: '32º Festival de Teatro de Curitiba',
    date: 'HOJE & ESTE FIM DE SEMANA',
    location: 'Teatro Guaíra & Vários Espaços',
    category: 'Teatro & Artes',
    tag: '🎭 Festival Oficial',
    image: '/images/teatro-guaira.jpg',
    price: 'A partir de R$ 40,00',
    time: '20h00',
    highlight: 'Maior festival de artes cênicas da América Latina'
  },
  {
    id: 'show-pedreira',
    title: 'Festival de Inverno na Pedreira Leminski',
    date: 'SÁBADO • 19:00',
    location: 'Pedreira Paulo Leminski',
    category: 'Shows ao Vivo',
    tag: '🎵 Show Nacional',
    image: '/images/pedreira-leminski.jpg',
    price: 'A partir de R$ 90,00',
    time: '19h00',
    highlight: 'Palco ao vivo cercado por paredões de rocha natural'
  },
  {
    id: 'feira-largo-ordem',
    title: 'Feira de Artesanato do Largo da Ordem',
    date: 'DOMINGO • 09:00 às 14:00',
    location: 'Centro Histórico / Largo da Ordem',
    category: 'Eventos Gratuitos',
    tag: '🎨 Feirinha Tradicional',
    image: '/images/largo-da-ordem.jpg',
    price: 'ENTRADA GRATUITA',
    time: '09h às 14h',
    highlight: 'Mais de 1.000 barracas de artesanato e comida típica'
  },
  {
    id: 'vale-da-musica',
    title: 'Vale da Música Ópera de Arame (Palco Flutuante)',
    date: 'TERÇA A DOMINGO',
    location: 'Ópera de Arame',
    category: 'Shows ao Vivo',
    tag: '🎷 Instrumental ao Vivo',
    image: '/images/opera-de-arame.jpg',
    price: 'R$ 15,00',
    time: '10h às 18h',
    highlight: 'Música instrumental ao vivo no palco flutuante do lago'
  }
];

export default function EventsCalendarSection({ onClickDetail }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredEvents = activeFilter === 'all'
    ? CURITIBA_EVENTS
    : CURITIBA_EVENTS.filter(e => e.category.toLowerCase().includes(activeFilter));

  return (
    <section style={{ maxWidth: '1280px', margin: '48px auto', padding: '0 16px' }}>
      
      {/* Section Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#00a896', fontSize: '12px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>
            <Calendar size={16} />
            <span>CALENDÁRIO INTEGRADO CWB</span>
          </div>
          <h2 style={{ fontSize: '28px', fontWeight: '900', color: '#0f172a' }}>
            Próximos Eventos, Shows & Festivais
          </h2>
          <p style={{ fontSize: '14px', color: '#64748b' }}>
            Confira a programação cultural e garanta seu ingresso com desconto
          </p>
        </div>

        {/* Filter Chips */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
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
                padding: '8px 16px',
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
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
        {filteredEvents.map((evt) => (
          <div
            key={evt.id}
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '20px',
              overflow: 'hidden',
              border: '1px solid #e2e8f0',
              boxShadow: '0 4px 14px rgba(0,0,0,0.05)',
              display: 'flex',
              flexDirection: 'column',
              transition: 'transform 0.25s ease'
            }}
          >
            {/* Image & Date Badge */}
            <div style={{ position: 'relative', height: '180px' }}>
              <img
                src={evt.image}
                alt={evt.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{
                position: 'absolute',
                top: '12px',
                left: '12px',
                backgroundColor: '#0f172a',
                color: '#ffffff',
                fontSize: '11px',
                fontWeight: '800',
                padding: '4px 10px',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.3)'
              }}>
                {evt.tag}
              </div>

              <div style={{
                position: 'absolute',
                bottom: '12px',
                right: '12px',
                backgroundColor: '#00a896',
                color: '#ffffff',
                fontSize: '11px',
                fontWeight: '900',
                padding: '4px 10px',
                borderRadius: '8px'
              }}>
                {evt.date}
              </div>
            </div>

            {/* Event Body */}
            <div style={{ padding: '16px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <h3 style={{ fontSize: '16px', fontWeight: '800', color: '#0f172a', marginBottom: '6px', lineHeight: '1.3' }}>
                  {evt.title}
                </h3>
                
                <div style={{ fontSize: '12px', color: '#64748b', display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '8px' }}>
                  <MapPin size={13} color="#00a896" />
                  <span>{evt.location}</span>
                </div>

                <div style={{ fontSize: '12px', color: '#475569', backgroundColor: '#f8fafc', padding: '8px 10px', borderRadius: '8px', border: '1px solid #f1f5f9' }}>
                  {evt.highlight}
                </div>
              </div>

              <div style={{ marginTop: '16px', paddingTop: '12px', borderTop: '1px dashed #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ fontSize: '14px', fontWeight: '900', color: '#2563eb' }}>
                  {evt.price}
                </div>

                <button
                  onClick={() => onClickDetail && onClickDetail(evt)}
                  style={{
                    backgroundColor: '#0f172a',
                    color: '#ffffff',
                    fontSize: '12px',
                    fontWeight: '800',
                    padding: '8px 14px',
                    borderRadius: '8px',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  <span>Ver Evento</span>
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
