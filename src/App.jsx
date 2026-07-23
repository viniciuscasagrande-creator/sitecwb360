import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import HeroCarousel from './components/HeroCarousel';
import AttractionSlider from './components/AttractionSlider';
import OfficialBrandSection from './components/OfficialBrandSection';
import ImperdiveisSection from './components/ImperdiveisSection';
import NearbySection from './components/NearbySection';
import TopicBanner from './components/TopicBanner';
import RoteirosSection from './components/RoteirosSection';
import GuiaPraticoSection from './components/GuiaPraticoSection';
import AgenciasSection from './components/AgenciasSection';
import AgenciaCotacaoModal from './components/AgenciaCotacaoModal';
import AttractionDetailModal from './components/AttractionDetailModal';
import CartModal from './components/CartModal';
import LoginModal from './components/LoginModal';
import BrandAboutModal from './components/BrandAboutModal';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';
import { ATTRACTIONS, UNIFIED_NAV_ITEMS } from './data/attractions';

export default function App() {
  const [activeTopicTab, setActiveTopicTab] = useState('all'); // all, parques, cultura, shows, teatros, eventos, tours, gastronomia, agencias, ofertas, roteiros, guia
  const [searchQuery, setSearchQuery] = useState('');
  const [activeAttraction, setActiveAttraction] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isAboutBrandOpen, setIsAboutBrandOpen] = useState(false);
  
  // Agency Quote Modal State
  const [isAgencyQuoteOpen, setIsAgencyQuoteOpen] = useState(false);
  const [agencyQuoteDefaultType, setAgencyQuoteDefaultType] = useState('passeio');

  // Handle Topic / Navigation Tab selection
  const handleSelectTopicTab = (tabId) => {
    setActiveTopicTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenAgencyQuote = (type = 'passeio') => {
    setAgencyQuoteDefaultType(type);
    setIsAgencyQuoteOpen(true);
  };

  // Filtered Attractions according to Unified Navigation Tab & Search
  const filteredAttractions = useMemo(() => {
    return ATTRACTIONS.filter((item) => {
      // Navigation tab filter
      if (activeTopicTab !== 'all' && activeTopicTab !== 'roteiros' && activeTopicTab !== 'guia' && activeTopicTab !== 'agencias') {
        if (activeTopicTab === 'ofertas') {
          if (!item.discount && !item.categories?.includes('promocionais') && !item.categories?.includes('cupons')) {
            return false;
          }
        } else {
          const matchesTopic = item.topic === activeTopicTab || item.category === activeTopicTab || item.categories?.includes(activeTopicTab);
          if (!matchesTopic) return false;
        }
      }

      // Search query filter
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.location.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q);

      return matchesSearch;
    });
  }, [activeTopicTab, searchQuery]);

  // Featured sections
  const imperdiveisAttractions = useMemo(() => {
    return ATTRACTIONS.filter(a => a.discount || a.category === 'pacotes' || a.category === 'agencias' || a.category === 'shows').slice(0, 4);
  }, []);

  const handleAddToCart = (newItem) => {
    setCartItems(prev => {
      const existingIdx = prev.findIndex(
        i => i.id === newItem.id && i.ticketType === newItem.ticketType
      );
      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx].quantity += newItem.quantity;
        return updated;
      }
      return [...prev, newItem];
    });
  };

  const handleRemoveFromCart = (index) => {
    setCartItems(prev => prev.filter((_, idx) => idx !== index));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleClearFilters = () => {
    setActiveTopicTab('all');
    setSearchQuery('');
  };

  const activeTabMeta = UNIFIED_NAV_ITEMS.find(i => i.id === activeTopicTab);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc', display: 'flex', flexDirection: 'column' }}>
      
      {/* Header with Single Unified Navigation Bar */}
      <Header
        activeTopicTab={activeTopicTab}
        onSelectTopicTab={handleSelectTopicTab}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenLogin={() => setIsLoginOpen(true)}
        onOpenAgencyQuote={handleOpenAgencyQuote}
        onClearFilters={handleClearFilters}
        totalResults={filteredAttractions.length}
      />

      {/* Main Content */}
      <main style={{ flex: 1 }}>
        
        {/* Topic Context Banner for specific topic views */}
        {(activeTopicTab === 'parques' || activeTopicTab === 'cultura' || activeTopicTab === 'shows' || activeTopicTab === 'teatros' || activeTopicTab === 'eventos' || activeTopicTab === 'tours' || activeTopicTab === 'gastronomia') && (
          <TopicBanner topicId={activeTopicTab} />
        )}

        {/* Hero Carousel (Shown on 'all' view when no search query) */}
        {activeTopicTab === 'all' && !searchQuery && (
          <HeroCarousel onSelectAttraction={setActiveAttraction} />
        )}

        {/* Dedicated Screen: Agências de Turismo & Região Metropolitana */}
        {activeTopicTab === 'agencias' ? (
          <AgenciasSection
            attractions={ATTRACTIONS}
            onClickDetail={setActiveAttraction}
            onOpenQuote={handleOpenAgencyQuote}
          />
        ) : activeTopicTab === 'roteiros' ? (
          /* Dedicated Screen: Roteiros Prontos */
          <RoteirosSection onClickDetail={setActiveAttraction} />
        ) : activeTopicTab === 'guia' ? (
          /* Dedicated Screen: Guia Prático CWB */
          <GuiaPraticoSection />
        ) : (
          /* Standard Attraction Grid/Slider View */
          <>
            <AttractionSlider
              title={
                searchQuery
                  ? `Resultados da busca (${filteredAttractions.length})`
                  : activeTopicTab === 'parques'
                  ? "Parques, Bosques & Natureza em Curitiba"
                  : activeTopicTab === 'cultura'
                  ? "Museus, Teatros & Patrimônio Histórico"
                  : activeTopicTab === 'shows'
                  ? "Shows & Concertos ao Vivo em Curitiba"
                  : activeTopicTab === 'teatros'
                  ? "Teatros & Espetáculos das Artes Cênicas"
                  : activeTopicTab === 'eventos'
                  ? "Festivais, Feiras & Eventos Especiais"
                  : activeTopicTab === 'tours'
                  ? "Tours, Passeios de Trem & Linha Turismo"
                  : activeTopicTab === 'gastronomia'
                  ? "Restaurantes, Polos Gastronômicos & Mercados"
                  : activeTopicTab === 'ofertas'
                  ? "Ofertas, Promoções & Cupons de Desconto"
                  : "O Que Fazer em Curitiba • Atrações em Destaque 360°"
              }
              subtitle={
                !searchQuery
                  ? activeTabMeta?.desc || "Explore as melhores atrações da capital paranaense."
                  : "Exibindo os melhores passeios correspondentes aos seus filtros."
              }
              attractions={filteredAttractions}
              onClickDetail={setActiveAttraction}
            />

            {/* Official Brand Section (Only on 'all' home view) */}
            {activeTopicTab === 'all' && !searchQuery && (
              <OfficialBrandSection
                onOpenMap={() => {
                  const nearbyEl = document.getElementById('nearby-section');
                  if (nearbyEl) nearbyEl.scrollIntoView({ behavior: 'smooth' });
                }}
                onOpenAboutBrand={() => setIsAboutBrandOpen(true)}
                onFilterLandmark={(landmarkName) => setSearchQuery(landmarkName)}
              />
            )}

            {/* Imperdíveis Section (Only on 'all' home view) */}
            {activeTopicTab === 'all' && !searchQuery && (
              <ImperdiveisSection
                attractions={imperdiveisAttractions}
                onClickDetail={setActiveAttraction}
              />
            )}

            {/* Nearby / Geolocation Section */}
            <div id="nearby-section">
              <NearbySection
                attractions={ATTRACTIONS}
                onClickDetail={setActiveAttraction}
              />
            </div>
          </>
        )}

      </main>

      {/* Floating WhatsApp Support Button */}
      <WhatsAppButton />

      {/* Footer */}
      <Footer onOpenAboutBrand={() => setIsAboutBrandOpen(true)} />

      {/* Modals */}
      {activeAttraction && (
        <AttractionDetailModal
          attraction={activeAttraction}
          allAttractions={ATTRACTIONS}
          onClose={() => setActiveAttraction(null)}
          onAddToCart={handleAddToCart}
        />
      )}

      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={handleClearCart}
      />

      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
      />

      <BrandAboutModal
        isOpen={isAboutBrandOpen}
        onClose={() => setIsAboutBrandOpen(false)}
      />

      <AgenciaCotacaoModal
        isOpen={isAgencyQuoteOpen}
        onClose={() => setIsAgencyQuoteOpen(false)}
        defaultType={agencyQuoteDefaultType}
      />

    </div>
  );
}
