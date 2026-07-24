import React, { useState, useRef, useEffect, useMemo } from 'react';
import { 
  Search, X, MapPin, Trees, Eye, Compass, Music, Drama, Calendar,
  Ticket, Utensils, Beer, Building2, Hotel, Percent, Sparkles, ChevronRight, Star, Tag, Landmark
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { ATTRACTIONS } from '../data/attractions';

// Database of Curitiba Landmarks, Museums, Neighborhoods, Cities, Hotels, Restaurants, Shows
export const AUTOCOMPLETE_KNOWLEDGE = [
  // MUSEUMS & CULTURE
  { id: 'mon', title: 'Museu Oscar Niemeyer (MON Olho)', category: 'Museus & Cultura', type: 'museus', location: 'Centro Cívico', image: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=600&q=80' },
  { id: 'museu-egipcio', title: 'Museu Egípcio e Rosacruz', category: 'Museus & Cultura', type: 'museus', location: 'Bacacheri', image: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=600&q=80' },
  { id: 'museu-expedicionario', title: 'Museu do Expedicionário', category: 'Museus & Cultura', type: 'museus', location: 'Alto da XV', image: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=600&q=80' },
  { id: 'museu-paranaense', title: 'Museu Paranaense (Fundado em 1876)', category: 'Museus & Cultura', type: 'museus', location: 'São Francisco', image: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=600&q=80' },
  { id: 'paco-da-liberdade', title: 'Sesc Paço da Liberdade', category: 'Museus & Cultura', type: 'museus', location: 'Centro Histórico', image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=600&q=80' },

  // PARKS & NATURE
  { id: 'jardim-botanico', title: 'Jardim Botânico de Curitiba (Estufa de Vidro)', category: 'Parques & Natureza', type: 'parques', location: 'Jardim Botânico', image: 'https://images.unsplash.com/photo-1596436889106-be35e843f974?auto=format&fit=crop&w=600&q=80' },
  { id: 'parque-tangua', title: 'Parque Tanguá (Mirante do Castelo & Cascata)', category: 'Parques & Natureza', type: 'parques', location: 'Taboão / Pilarzinho', image: 'https://images.unsplash.com/photo-1519331379826-f10be5486c6f?auto=format&fit=crop&w=600&q=80' },
  { id: 'parque-barigui', title: 'Parque Barigui (Recanto das Capivaras)', category: 'Parques & Natureza', type: 'parques', location: 'Bigorrilho', image: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=600&q=80' },
  { id: 'bosque-alemao', title: 'Bosque Alemão (Trilha de João e Maria)', category: 'Parques & Natureza', type: 'parques', location: 'Vista Alegre', image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=600&q=80' },
  { id: 'praca-do-japao', title: 'Praça do Japão (Cerejeiras & Templo)', category: 'Parques & Natureza', type: 'parques', location: 'Batel / Água Verde', image: 'https://images.unsplash.com/photo-1528164344705-47542687990d?auto=format&fit=crop&w=600&q=80' },
  { id: 'passeio-publico', title: 'Passeio Público (Primeiro Parque 1886)', category: 'Parques & Natureza', type: 'parques', location: 'Centro', image: 'https://images.unsplash.com/photo-1519331379826-f10be5486c6f?auto=format&fit=crop&w=600&q=80' },
  { id: 'bosque-papa', title: 'Bosque João Paulo II (Memorial Polonês)', category: 'Parques & Natureza', type: 'parques', location: 'Centro Cívico', image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=600&q=80' },

  // GASTRONOMY & NIGHTLIFE
  { id: 'bar-do-alemao', title: 'Bar do Alemão (Chopp Submarino & Carne de Onça)', category: 'Gastronomia & Choperias', type: 'restaurantes', location: 'Largo da Ordem', image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=600&q=80' },
  { id: 'santa-felicidade', title: 'Bairro Gastronômico de Santa Felicidade (Madalosso)', category: 'Gastronomia & Choperias', type: 'restaurantes', location: 'Santa Felicidade', image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80' },
  { id: 'mercado-municipal', title: 'Mercado Municipal de Curitiba (Orgânicos & Especiarias)', category: 'Gastronomia & Choperias', type: 'restaurantes', location: 'Centro / Capanema', image: 'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&w=600&q=80' },
  { id: 'caminho-do-vinho', title: 'Caminho do Vinho (Adegas & Café Colonial)', category: 'Gastronomia & Choperias', type: 'restaurantes', location: 'São José dos Pinhais RMC', image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=600&q=80' },

  // HOTELS & 5-STAR STAYS
  { id: 'radisson-hotel-curitiba', title: 'Radisson Hotel Curitiba 5★ (Praça da Espanha)', category: 'Hotéis 5★ & Hospedagem', type: 'hoteis', location: 'Batel', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80' },
  { id: 'nomaa-hotel', title: 'Nomaa Hotel Boutique 5★', category: 'Hotéis 5★ & Hospedagem', type: 'hoteis', location: 'Batel Soho', image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80' },
  { id: 'bourbon-curitiba', title: 'Bourbon Curitiba Convention Hotel 5★', category: 'Hotéis 5★ & Hospedagem', type: 'hoteis', location: 'Centro', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80' },

  // NEIGHBORHOODS & REGION
  { id: 'bairro-batel', title: 'Bairro Batel (Soho, Gastronomia & Shoppings)', category: 'Bairros & Cidades', type: 'bairros', location: 'Batel', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80' },
  { id: 'largo-da-ordem', title: 'Largo da Ordem (Feira de Domingo & Centro Histórico)', category: 'Bairros & Cidades', type: 'bairros', location: 'São Francisco', image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=600&q=80' },
  { id: 'cidade-morretes', title: 'Cidade de Morretes (Passeio de Trem & Barreado)', category: 'Bairros & Cidades', type: 'cidades', location: 'Serra do Mar RMC', image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=600&q=80' },
  { id: 'cidade-sjp', title: 'São José dos Pinhais (Caminho do Vinho)', category: 'Bairros & Cidades', type: 'cidades', location: 'Região Metropolitana', image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=600&q=80' },
  { id: 'cidade-ponta-grossa', title: 'Ponta Grossa (Vila Velha & Arenitos)', category: 'Bairros & Cidades', type: 'cidades', location: 'Campos Gerais RMC', image: 'https://images.unsplash.com/photo-1519331379826-f10be5486c6f?auto=format&fit=crop&w=600&q=80' }
];

export default function AirbnbSearchBar({ searchQuery, onSearchChange, onSelectAttraction, onSelectTab }) {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const containerRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Filtered Auto-complete Knowledge Results
  const searchResults = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    if (!query && activeFilter === 'all') return AUTOCOMPLETE_KNOWLEDGE.slice(0, 6);

    return AUTOCOMPLETE_KNOWLEDGE.filter((item) => {
      const matchesType = activeFilter === 'all' || item.type === activeFilter;
      if (!matchesType) return false;

      if (!query) return true;

      const titleMatch = item.title.toLowerCase().includes(query);
      const catMatch = item.category.toLowerCase().includes(query);
      const locMatch = item.location.toLowerCase().includes(query);

      return titleMatch || catMatch || locMatch;
    });
  }, [searchQuery, activeFilter]);

  const handleSelectResult = (item) => {
    setIsOpen(false);
    
    // Find in full ATTRACTIONS database
    const fullItem = ATTRACTIONS.find(a => a.id === item.id || a.title.toLowerCase().includes(item.id));
    if (fullItem && onSelectAttraction) {
      onSelectAttraction(fullItem);
    } else if (onSearchChange) {
      onSearchChange(item.title);
    }
  };

  return (
    <div ref={containerRef} style={{ position: 'relative', width: '100%' }}>
      {/* Search Input Box */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        border: '1px solid #cbd5e1',
        borderRadius: '9999px',
        padding: '6px 8px 6px 16px',
        boxShadow: isOpen ? '0 8px 30px rgba(0,0,0,0.12)' : '0 2px 8px rgba(0,0,0,0.04)',
        transition: 'all 0.2s ease'
      }}>
        <Search size={18} color="#00a896" style={{ flexShrink: 0, marginRight: '10px' }} />
        
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => {
            onSearchChange(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          placeholder="O que você quer fazer em Curitiba? (Ex: Botânico, Trem, Batel, Bar...)"
          style={{
            width: '100%',
            border: 'none',
            outline: 'none',
            fontSize: '13px',
            fontWeight: '600',
            color: '#0f172a',
            backgroundColor: 'transparent'
          }}
        />

        {searchQuery && (
          <button
            onClick={() => {
              onSearchChange('');
              setIsOpen(false);
            }}
            style={{
              backgroundColor: '#f1f5f9',
              border: 'none',
              borderRadius: '50%',
              width: '24px',
              height: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#64748b',
              marginRight: '6px'
            }}
          >
            <X size={14} />
          </button>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            backgroundColor: '#00a896',
            color: '#ffffff',
            border: 'none',
            borderRadius: '9999px',
            padding: '8px 16px',
            fontSize: '12px',
            fontWeight: '800',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            flexShrink: 0
          }}
        >
          <span>Pesquisar</span>
        </button>
      </div>

      {/* Auto-Complete Dropdown Menu */}
      {isOpen && (
        <div style={{
          position: 'absolute',
          top: 'calc(100% + 8px)',
          left: 0,
          right: 0,
          backgroundColor: '#ffffff',
          borderRadius: '20px',
          boxShadow: '0 16px 40px rgba(0,0,0,0.15)',
          border: '1px solid #e2e8f0',
          padding: '16px',
          zIndex: 2000,
          maxHeight: '420px',
          overflowY: 'auto'
        }} className="animate-fade-in">
          
          {/* Quick Filter Categories */}
          <div style={{ display: 'flex', gap: '6px', overflowX: 'auto', paddingBottom: '12px', marginBottom: '12px', borderBottom: '1px solid #f1f5f9' }} className="hide-scrollbar">
            {[
              { id: 'all', label: 'Todos' },
              { id: 'parques', label: '🌲 Parques' },
              { id: 'museus', label: '🏛️ Museus' },
              { id: 'restaurantes', label: '🍝 Gastronomia' },
              { id: 'hoteis', label: '🏨 Hotéis' },
              { id: 'bairros', label: '📍 Bairros & Cidades' }
            ].map(f => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                style={{
                  padding: '5px 12px',
                  borderRadius: '9999px',
                  fontSize: '11px',
                  fontWeight: activeFilter === f.id ? '800' : '600',
                  backgroundColor: activeFilter === f.id ? '#0f172a' : '#f8fafc',
                  color: activeFilter === f.id ? '#ffffff' : '#64748b',
                  border: activeFilter === f.id ? '1px solid #0f172a' : '1px solid #e2e8f0',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap'
                }}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Results List */}
          {searchResults.length > 0 ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {searchResults.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleSelectResult(item)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '8px 10px',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    transition: 'backgroundColor 0.15s ease'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f8fafc'}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{ width: '44px', height: '44px', borderRadius: '10px', objectFit: 'cover', flexShrink: 0 }}
                  />

                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: '13px', fontWeight: '800', color: '#0f172a', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {item.title}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: '#64748b', marginTop: '2px' }}>
                      <span style={{ color: '#00a896', fontWeight: '700' }}>{item.category}</span>
                      <span>•</span>
                      <span>{item.location}</span>
                    </div>
                  </div>

                  <ChevronRight size={16} color="#cbd5e1" />
                </div>
              ))}
            </div>
          ) : (
            <div style={{ padding: '20px', textAlign: 'center', color: '#64748b', fontSize: '13px' }}>
              Nenhum resultado encontrado para "{searchQuery}".
            </div>
          )}

        </div>
      )}
    </div>
  );
}
