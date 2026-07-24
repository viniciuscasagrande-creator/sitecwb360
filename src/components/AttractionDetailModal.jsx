import React, { useState } from 'react';
import { 
  X, MapPin, Clock, Ticket, Bus, CloudSun, Utensils, Hotel, 
  HelpCircle, Star, Heart, Share2, CheckCircle2, ChevronRight, Info
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function AttractionDetailModal({ attraction, onClose, onAddToCart }) {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('overview'); // overview, weather, transit, nearby, faq
  const [selectedTicketType, setSelectedTicketType] = useState('inteira');
  const [ticketQuantity, setTicketQuantity] = useState(1);

  if (!attraction) return null;

  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart({
        ...attraction,
        ticketType: selectedTicketType,
        quantity: ticketQuantity,
        totalPrice: attraction.isFree ? 0 : attraction.price * ticketQuantity
      });
    }
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 3500,
      backgroundColor: 'rgba(15, 23, 42, 0.85)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '16px'
    }}>
      <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '24px',
        maxWidth: '840px',
        width: '100%',
        maxHeight: '92vh',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4)',
        border: '1px solid #1e293b'
      }}>
        {/* Top Banner Image with Close & Share Overlay */}
        <div style={{ position: 'relative', height: '260px', width: '100%', backgroundColor: '#0f172a' }}>
          <img
            src={attraction.image}
            alt={attraction.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.85)' }}
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(15, 23, 42, 0.95) 0%, rgba(15, 23, 42, 0.3) 60%, transparent 100%)'
          }} />

          {/* Close Button */}
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '16px',
              right: '16px',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: 'rgba(15, 23, 42, 0.75)',
              color: '#ffffff',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 10
            }}
          >
            <X size={20} />
          </button>

          {/* Title & Category Banner Overlay */}
          <div style={{ position: 'absolute', bottom: '20px', left: '24px', right: '24px', zIndex: 10, color: '#ffffff' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
              <span style={{ backgroundColor: '#00a896', color: '#ffffff', fontSize: '11px', fontWeight: '900', padding: '3px 10px', borderRadius: '6px', textTransform: 'uppercase' }}>
                {attraction.category || 'Ponto Turístico'}
              </span>
              <span style={{ backgroundColor: 'rgba(255,255,255,0.2)', color: '#ffffff', fontSize: '11px', fontWeight: '800', padding: '3px 10px', borderRadius: '6px' }}>
                ⭐ {attraction.rating || 4.9} ({attraction.reviewsCount || '1.2k'} avaliações)
              </span>
            </div>
            <h2 style={{ fontSize: '24px', fontWeight: '900', lineHeight: '1.2' }}>
              {attraction.title}
            </h2>
          </div>
        </div>

        {/* Tab Navigation Menu */}
        <div style={{ backgroundColor: '#0f172a', padding: '0 24px', borderBottom: '1px solid #1e293b', display: 'flex', gap: '8px', overflowX: 'auto' }} className="hide-scrollbar">
          {[
            { id: 'overview', label: '📌 Visão Geral', icon: Info },
            { id: 'transit', label: '🚌 Como Chegar & BRT', icon: Bus },
            { id: 'weather', label: '🌦️ Clima em CWB', icon: CloudSun },
            { id: 'nearby', label: '🍽️ Próximos', icon: Utensils },
            { id: 'faq', label: '💡 Dicas & FAQ', icon: HelpCircle },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: '14px 16px',
                fontSize: '13px',
                fontWeight: activeTab === tab.id ? '800' : '600',
                color: activeTab === tab.id ? '#00a896' : '#94a3b8',
                backgroundColor: 'transparent',
                border: 'none',
                borderBottom: activeTab === tab.id ? '3px solid #00a896' : '3px solid transparent',
                cursor: 'pointer',
                whiteSpace: 'nowrap'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Modal Tab Content */}
        <div style={{ padding: '24px', overflowY: 'auto', flex: 1, backgroundColor: '#ffffff' }}>
          
          {/* OVERVIEW TAB */}
          {activeTab === 'overview' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <p style={{ fontSize: '14px', color: '#475569', lineHeight: '1.6' }}>
                {attraction.description || 'Uma das atrações imperdíveis de Curitiba! Excelente opção de passeio para famílias, casais e turistas de todo o Brasil.'}
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px', backgroundColor: '#f8fafc', padding: '16px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                <div>
                  <div style={{ fontSize: '11px', color: '#64748b', fontWeight: '700', textTransform: 'uppercase' }}>Endereço / Bairro</div>
                  <div style={{ fontSize: '13px', fontWeight: '800', color: '#0f172a', marginTop: '2px' }}>{attraction.location || 'Curitiba - Paraná'}</div>
                </div>

                <div>
                  <div style={{ fontSize: '11px', color: '#64748b', fontWeight: '700', textTransform: 'uppercase' }}>Horário de Funcionamento</div>
                  <div style={{ fontSize: '13px', fontWeight: '800', color: '#0f172a', marginTop: '2px' }}>{attraction.hours || 'Segunda a Domingo: 06h às 19h30'}</div>
                </div>

                <div>
                  <div style={{ fontSize: '11px', color: '#64748b', fontWeight: '700', textTransform: 'uppercase' }}>Tempo Médio de Visita</div>
                  <div style={{ fontSize: '13px', fontWeight: '800', color: '#00a896', marginTop: '2px' }}>{attraction.duration || '2 a 3 horas'}</div>
                </div>
              </div>
            </div>
          )}

          {/* TRANSIT & TUBOS BRT TAB */}
          {activeTab === 'transit' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ backgroundColor: '#eff6ff', border: '1px solid #bfdbfe', padding: '16px', borderRadius: '16px', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <Bus size={24} color="#2563eb" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <h4 style={{ fontSize: '15px', fontWeight: '800', color: '#1e3a8a', marginBottom: '4px' }}>Linha Turismo & Estações Tubo BRT</h4>
                  <p style={{ fontSize: '13px', color: '#1e40af', lineHeight: '1.5' }}>
                    {attraction.howToGet || 'Acesse via Linha Turismo Double-Decker (embarque nos principais pontos) ou Estação Tubo BRT Centenário / Campo Comprido.'}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* WEATHER TAB */}
          {activeTab === 'weather' && (
            <div style={{ backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', padding: '16px', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '16px' }}>
              <CloudSun size={36} color="#16a34a" />
              <div>
                <h4 style={{ fontSize: '16px', fontWeight: '900', color: '#14532d' }}>Previsão do Tempo em Curitiba: 21°C</h4>
                <p style={{ fontSize: '13px', color: '#166534', marginTop: '2px' }}>
                  Clima agradável e ensolarado para passeios a céu aberto nos parques e bosques hoje.
                </p>
              </div>
            </div>
          )}

          {/* NEARBY TAB */}
          {activeTab === 'nearby' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <h4 style={{ fontSize: '14px', fontWeight: '800', color: '#0f172a' }}>Gastronomia & Hotéis a menos de 1 km:</h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '12px' }}>
                <div style={{ backgroundColor: '#f8fafc', padding: '12px', borderRadius: '12px', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Utensils size={18} color="#ea580c" />
                  <div>
                    <div style={{ fontSize: '12px', fontWeight: '800', color: '#0f172a' }}>Bar do Alemão</div>
                    <div style={{ fontSize: '11px', color: '#64748b' }}>Chopp Submarino • 400m</div>
                  </div>
                </div>

                <div style={{ backgroundColor: '#f8fafc', padding: '12px', borderRadius: '12px', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Hotel size={18} color="#00a896" />
                  <div>
                    <div style={{ fontSize: '12px', fontWeight: '800', color: '#0f172a' }}>Radisson Hotel 5★</div>
                    <div style={{ fontSize: '11px', color: '#64748b' }}>Hospedagem Batel • 800m</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* FAQ TAB */}
          {activeTab === 'faq' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ backgroundColor: '#f8fafc', padding: '14px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                <div style={{ fontSize: '13px', fontWeight: '800', color: '#0f172a', marginBottom: '4px' }}>💡 Dica Local 360°</div>
                <div style={{ fontSize: '12px', color: '#475569' }}>
                  {attraction.tip || 'O melhor horário para fotos com iluminação perfeita é entre 16h30 e 18h no pôr do sol.'}
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Footer Checkout CTA */}
        <div style={{ padding: '16px 24px', backgroundColor: '#0f172a', borderTop: '1px solid #1e293b', display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#ffffff' }}>
          <div>
            <div style={{ fontSize: '11px', color: '#94a3b8' }}>Ingressos a partir de</div>
            <div style={{ fontSize: '20px', fontWeight: '900', color: attraction.isFree ? '#22c55e' : '#00a896' }}>
              {attraction.isFree ? 'ENTRADA GRATUITA' : `R$ ${attraction.price.toFixed(2).replace('.', ',')}`}
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            style={{
              backgroundColor: '#00a896',
              color: '#ffffff',
              fontWeight: '900',
              fontSize: '13px',
              padding: '12px 24px',
              borderRadius: '12px',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 4px 14px rgba(0,168,150,0.4)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <Ticket size={16} />
            <span>Garantir Experiência</span>
          </button>
        </div>

      </div>
    </div>
  );
}
