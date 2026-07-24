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
  { id: 'mon', title: 'Museu Oscar Niemeyer (MON Olho)', category: 'Museus & Cultura', type: 'museus', location: 'Centro Cívico', image: '/images/mon-olho.jpg' },
  { id: 'museu-egipcio', title: 'Museu Egípcio e Rosacruz', category: 'Museus & Cultura', type: 'museus', location: 'Bacacheri', image: '/images/mon-olho.jpg' },
  { id: 'museu-expedicionario', title: 'Museu do Expedicionário', category: 'Museus & Cultura', type: 'museus', location: 'Alto da XV', image: '/images/mon-olho.jpg' },
  { id: 'museu-paranaense', title: 'Museu Paranaense (Fundado em 1876)', category: 'Museus & Cultura', type: 'museus', location: 'São Francisco', image: '/images/mon-olho.jpg' },
  { id: 'paco-da-liberdade', title: 'Sesc Paço da Liberdade', category: 'Museus & Cultura', type: 'museus', location: 'Centro Histórico', image: '/images/largo-da-ordem.jpg' },

  // PARKS & NATURE
  { id: 'jardim-botanico', title: 'Jardim Botânico de Curitiba (Estufa de Vidro)', category: 'Parques & Natureza', type: 'parques', location: 'Jardim Botânico', image: '/images/jardim-botanico.jpg' },
  { id: 'parque-tangua', title: 'Parque Tanguá (Mirante do Castelo & Cascata)', category: 'Parques & Natureza', type: 'parques', location: 'Taboão / Pilarzinho', image: '/images/parque-tangua.jpg' },
  { id: 'parque-barigui', title: 'Parque Barigui (Recanto das Capivaras)', category: 'Parques & Natureza', type: 'parques', location: 'Bigorrilho', image: '/images/parque-barigui.jpg' },
  { id: 'bosque-alemao', title: 'Bosque Alemão (Trilha de João e Maria)', category: 'Parques & Natureza', type: 'parques', location: 'Vista Alegre', image: '/images/bosque-alemao.jpg' },
  { id: 'praca-do-japao', title: 'Praça do Japão (Cerejeiras & Templo)', category: 'Parques & Natureza', type: 'parques', location: 'Batel / Água Verde', image: '/images/praca-do-japao.jpg' },
  { id: 'passeio-publico', title: 'Passeio Público (Primeiro Parque 1886)', category: 'Parques & Natureza', type: 'parques', location: 'Centro', image: '/images/passeio-publico.jpg' },
  { id: 'bosque-papa', title: 'Bosque João Paulo II (Memorial Polonês)', category: 'Parques & Natureza', type: 'parques', location: 'Centro Cívico', image: '/images/bosque-papa.jpg' },

  // GASTRONOMY & NIGHTLIFE
  { id: 'bar-do-alemao', title: 'Bar do Alemão (Chopp Submarino & Carne de Onça)', category: 'Gastronomia & Choperias', type: 'restaurantes', location: 'Largo da Ordem', image: '/images/bar-do-alemao.jpg' },
  { id: 'santa-felicidade', title: 'Bairro Gastronômico de Santa Felicidade (Madalosso)', category: 'Gastronomia & Choperias', type: 'restaurantes', location: 'Santa Felicidade', image: '/images/santa-felicidade.jpg' },
  { id: 'mercado-municipal', title: 'Mercado Municipal de Curitiba (Orgânicos & Especiarias)', category: 'Gastronomia & Choperias', type: 'restaurantes', location: 'Centro / Capanema', image: '/images/mercado-municipal.jpg' },
  { id: 'caminho-do-vinho', title: 'Caminho do Vinho (Adegas & Café Colonial)', category: 'Gastronomia & Choperias', type: 'restaurantes', location: 'São José dos Pinhais RMC', image: '/images/caminho-do-vinho.jpg' },

  // HOTELS & 5-STAR STAYS
  { id: 'radisson-hotel-curitiba', title: 'Radisson Hotel Curitiba 5★ (Praça da Espanha)', category: 'Hotéis 5★ & Hospedagem', type: 'hoteis', location: 'Batel', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80' },
  { id: 'nomaa-hotel', title: 'Nomaa Hotel Boutique 5★', category: 'Hotéis 5★ & Hospedagem', type: 'hoteis', location: 'Batel Soho', image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80' },
  { id: 'bourbon-curitiba', title: 'Bourbon Curitiba Convention Hotel 5★', category: 'Hotéis 5★ & Hospedagem', type: 'hoteis', location: 'Centro', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80' },

  // NEIGHBORHOODS & REGION
  { id: 'bairro-batel', title: 'Bairro Batel (Soho, Gastronomia & Shoppings)', category: 'Bairros & Cidades', type: 'bairros', location: 'Batel', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80' },
  { id: 'largo-da-ordem', title: 'Largo da Ordem (Feira de Domingo & Centro Histórico)', category: 'Bairros & Cidades', type: 'bairros', location: 'São Francisco', image: '/images/largo-da-ordem.jpg' },
  { id: 'cidade-morretes', title: 'Cidade de Morretes (Passeio de Trem & Barreado)', category: 'Bairros & Cidades', type: 'cidades', location: 'Serra do Mar RMC', image: '/images/trem-serra-verde.jpg' },
  { id: 'cidade-sjp', title: 'São José dos Pinhais (Caminho do Vinho)', category: 'Bairros & Cidades', type: 'cidades', location: 'Região Metropolitana', image: '/images/caminho-do-vinho.jpg' },
  { id: 'cidade-ponta-grossa', title: 'Ponta Grossa (Vila Velha & Arenitos)', category: 'Bairros & Cidades', type: 'cidades', location: 'Campos Gerais RMC', image: '/images/vila-velha.jpg' }
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

  // Filter Knowledge Items
  const filteredItems = useMemo(() => {
    const q = (searchQuery || '').toLowerCase().trim();
    return AUTOCOMPLETE_KNOWLEDGE.filter((item) => {
      if (activeFilter !== 'all' && item.type !== activeFilter) {
        return false;
      }
      if (!q) return true;
      return (
        item.title.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.location.toLowerCase().includes(q)
      );
    });
  }, [searchQuery, activeFilter]);

  const handleSelectSuggestion = (item) => {
    const cleanTitle = item.title.split(' (')[0];
    onSearchChange(cleanTitle);
    setIsOpen(false);

    const matchedAttraction = ATTRACTIONS.find(a => a.id === item.id || (a.title && a.title.toLowerCase().includes(item.id)));
    if (matchedAttraction && onSelectAttraction) {
      onSelectAttraction(matchedAttraction);
    }
  };

  return (
    <div ref={containerRef} className="relative w-full max-w-xl">
      {/* Airbnb Search Input Bar */}
      <div 
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-3 h-12 px-4 bg-white rounded-full border-2 border-slate-200 hover:border-emerald-500 transition-all shadow-sm cursor-pointer"
      >
        <Search className="w-5 h-5 text-emerald-600 flex-shrink-0" />
        
        <input
          type="text"
          value={searchQuery || ''}
          onChange={(e) => {
            onSearchChange(e.target.value);
            if (!isOpen) setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          placeholder={t('searchPlaceholder') || "O que você quer fazer em Curitiba? Pesquise parques, hotéis, restaurantes..."}
          className="w-full bg-transparent text-slate-800 text-sm font-semibold placeholder:text-slate-400 placeholder:font-normal outline-none"
        />

        {searchQuery && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onSearchChange('');
            }}
            className="p-1 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Popover Dropdown */}
      {isOpen && (
        <div className="absolute top-14 left-0 right-0 z-50 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-96 flex flex-col">
          
          {/* Quick Category Chips */}
          <div className="p-3 bg-slate-50 border-b border-slate-200 flex gap-2 overflow-x-auto hide-scrollbar">
            {[
              { id: 'all', label: 'Todos' },
              { id: 'parques', label: '🌲 Parques' },
              { id: 'museus', label: '🏛️ Museus' },
              { id: 'restaurantes', label: '🍝 Gastronomia' },
              { id: 'hoteis', label: '🏨 Hotéis 5★' },
              { id: 'bairros', label: '📍 Bairros & Cidades' },
            ].map((chip) => (
              <button
                key={chip.id}
                onClick={() => setActiveFilter(chip.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-colors ${
                  activeFilter === chip.id
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {chip.label}
              </button>
            ))}
          </div>

          {/* Suggestions List */}
          <div className="overflow-y-auto p-2 divide-y divide-slate-100">
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleSelectSuggestion(item)}
                  className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 cursor-pointer transition-colors"
                >
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-10 h-10 rounded-lg object-cover flex-shrink-0"
                    loading="lazy"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-extrabold text-slate-800 truncate">
                      {item.title}
                    </div>
                    <div className="flex items-center gap-2 text-[11px] text-slate-500 mt-0.5">
                      <span className="text-emerald-600 font-bold">{item.category}</span>
                      <span>•</span>
                      <span className="truncate">{item.location}</span>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 flex-shrink-0" />
                </div>
              ))
            ) : (
              <div className="p-6 text-center text-slate-500">
                <div className="text-sm font-bold text-slate-800 mb-1">
                  Nenhuma sugestão encontrada para "{searchQuery}"
                </div>
                <div className="text-xs">
                  Tente buscar por "Museu", "Jardim Botânico", "Batel" ou "Hotel".
                </div>
              </div>
            )}
          </div>

        </div>
      )}
    </div>
  );
}
