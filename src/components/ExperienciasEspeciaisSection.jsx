import React, { useState } from 'react';
import { Sparkles, Star, Award, Heart, ShieldCheck, ArrowRight, Compass, Utensils, Hotel, CheckCircle2, MessageSquare } from 'lucide-react';

const EXCLUSIVE_EXPERIENCES = [
  {
    id: 'exp-helicopte',
    title: 'Tour Panorâmico de Helicóptero sobre Curitiba',
    subtitle: 'Voe sobre o Botânico, MON e Parque Barigui',
    category: 'Vip & Aventura',
    price: 490.0,
    rating: 5.0,
    reviews: 142,
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80',
    tag: '👑 EXCLUSIVO 360°'
  },
  {
    id: 'exp-trem-luxo',
    title: 'Trem de Luxo Great Brazil Express (Lapa/Morretes)',
    subtitle: 'Vagões temáticos, espumante à vontade & alta gastronomia',
    category: 'Passeios de Trem',
    price: 380.0,
    rating: 4.9,
    reviews: 310,
    image: '/images/trem-serra-verde.jpg',
    tag: '💎 ALTA GASTRONOMIA'
  },
  {
    id: 'exp-terrazza',
    title: 'Jantar Romântico Panorâmico 360° no Terrazza 40',
    subtitle: 'Vista estonteante da cidade iluminada no topo do Batel',
    category: 'Gastronomia Fina',
    price: 240.0,
    rating: 4.9,
    reviews: 890,
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    tag: '🍷 ROMÂNTICO'
  }
];

const TOURIST_REVIEWS = [
  {
    id: 1,
    name: 'Mariana & Rodrigo',
    city: 'São Paulo, SP',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    comment: 'O Curitiba 360° facilitou toda a nossa viagem! Compramos a Linha Turismo e o Trem de Morretes pelo portal e os Vouchers com QR Code funcionaram perfeitamente.',
    attraction: 'Passeio de Trem Morretes',
    stars: 5,
    date: 'Ontem'
  },
  {
    id: 2,
    name: 'Fernando Silva',
    city: 'Porto Alegre, RS',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    comment: 'A IA do site me deu o roteiro exato para um dia de chuva na cidade. Fui no MON e depois almoçar em Santa Felicidade. Experiência nota 1000!',
    attraction: 'IA Concierge Turístico',
    stars: 5,
    date: 'Há 2 dias'
  },
  {
    id: 3,
    name: 'Carla & Família',
    city: 'Rio de Janeiro, RJ',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    comment: 'As dicas de hotéis 5 estrelas no Batel e os cupons de desconto valeram super a pena. Recomendo de olhos fechados!',
    attraction: 'Radisson Batel 5★',
    stars: 5,
    date: 'Há 3 dias'
  }
];

export default function ExperienciasEspeciaisSection({ onClickDetail }) {
  return (
    <section style={{ maxWidth: '1280px', margin: '48px auto', padding: '0 16px' }}>
      
      {/* 1. Blocos de Experiências Exclusivas 360° */}
      <div style={{ marginBottom: '48px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '12px', marginBottom: '20px' }}>
          <div>
            <span style={{ backgroundColor: '#fef3c7', color: '#b45309', fontSize: '11px', fontWeight: '900', padding: '3px 10px', borderRadius: '9999px', textTransform: 'uppercase', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
              <Sparkles size={13} color="#d97706" />
              <span>Experiências Exclusivas 360°</span>
            </span>
            <h2 style={{ fontSize: '24px', fontWeight: '900', color: '#0f172a', marginTop: '6px' }}>
              Viva Momentos Inesquecíveis na Capital
            </h2>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
          {EXCLUSIVE_EXPERIENCES.map((exp) => (
            <div
              key={exp.id}
              onClick={() => {
                if (onClickDetail) onClickDetail(exp);
              }}
              className="hover-card-rise"
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                border: '1px solid #e2e8f0',
                overflow: 'hidden',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                position: 'relative'
              }}
            >
              <div style={{ position: 'relative', height: '170px' }}>
                <img src={exp.image} alt={exp.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <span style={{ position: 'absolute', top: '10px', left: '10px', backgroundColor: '#0f172a', color: '#fbbf24', fontSize: '10px', fontWeight: '900', padding: '4px 10px', borderRadius: '6px', boxShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
                  {exp.tag}
                </span>
              </div>

              <div style={{ padding: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px', fontWeight: '800', color: '#b45309', marginBottom: '4px' }}>
                  <Star size={14} color="#f59e0b" fill="#f59e0b" />
                  <span>{exp.rating}</span>
                  <span style={{ color: '#64748b', fontWeight: '500' }}>({exp.reviews} avaliações)</span>
                </div>

                <h4 style={{ fontSize: '15px', fontWeight: '800', color: '#0f172a', lineHeight: '1.3', marginBottom: '4px' }}>
                  {exp.title}
                </h4>
                <p style={{ fontSize: '12px', color: '#64748b', marginBottom: '14px', lineHeight: '1.4' }}>
                  {exp.subtitle}
                </p>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px dashed #e2e8f0', paddingTop: '10px' }}>
                  <div>
                    <span style={{ fontSize: '10px', color: '#64748b', display: 'block' }}>A partir de</span>
                    <strong style={{ fontSize: '18px', fontWeight: '900', color: '#2563eb' }}>
                      R$ {exp.price.toFixed(2).replace('.', ',')}
                    </strong>
                  </div>

                  <span style={{ fontSize: '12px', fontWeight: '800', color: '#00a896', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <span>Reservar</span>
                    <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. Avaliações dos Turistas na Home */}
      <div style={{ backgroundColor: '#0f172a', borderRadius: '20px', padding: '28px 24px', color: '#ffffff', boxShadow: '0 12px 30px rgba(15,23,42,0.2)' }}>
        <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 24px' }}>
          <span style={{ backgroundColor: 'rgba(16,185,129,0.2)', color: '#34d399', fontSize: '11px', fontWeight: '900', padding: '4px 12px', borderRadius: '9999px', textTransform: 'uppercase' }}>
            ★ AVALIAÇÕES REAIS DOS VISITANTES
          </span>
          <h3 style={{ fontSize: '22px', fontWeight: '900', marginTop: '8px', color: '#ffffff' }}>
            O Que Dizem os Turistas sobre o Curitiba 360°
          </h3>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
          {TOURIST_REVIEWS.map((rev) => (
            <div key={rev.id} style={{ backgroundColor: '#1e293b', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', gap: '2px', color: '#f59e0b', marginBottom: '10px' }}>
                  {[...Array(rev.stars)].map((_, i) => (
                    <Star key={i} size={14} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>
                <p style={{ fontSize: '13px', color: '#cbd5e1', lineHeight: '1.5', fontStyle: 'italic', marginBottom: '16px' }}>
                  "{rev.comment}"
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '12px' }}>
                <img src={rev.avatar} alt={rev.name} style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: '13px', fontWeight: '800', color: '#ffffff', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span>{rev.name}</span>
                    <ShieldCheck size={14} color="#34d399" />
                  </div>
                  <div style={{ fontSize: '11px', color: '#94a3b8' }}>
                    {rev.city} • <span style={{ color: '#00a896' }}>{rev.attraction}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
