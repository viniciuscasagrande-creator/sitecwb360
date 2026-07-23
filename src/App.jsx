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
import AttractionDetailModal from './components/AttractionDetailModal';
import CartModal from './components/CartModal';
import LoginModal from './components/LoginModal';
import BrandAboutModal from './components/BrandAboutModal';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';
import { ATTRACTIONS } from './data/attractions';

export default function App() {
  const [activeTopicTab, setActiveTopicTab] = useState('home'); // home, parques, cultura, tours, gastronomia, roteiros, guia
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeAttraction, setActiveAttraction] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isAboutBrandOpen, setIsAboutBrandOpen] = useState(false);

  // Handle Topic selection
  const handleSelectTopicTab = (tabId) => {
    setActiveTopicTab(tabId);
    // Reset category filter when switching main topic tabs
    setSelectedCategory('all');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Filtered Attractions according to both Topic & Category & Search
  const filteredAttractions = useMemo(() => {
    return ATTRACTIONS.filter((item) => {
      // Topic tab filter
      if (activeTopicTab !== 'home' && activeTopicTab !== 'roteiros' && activeTopicTab !== 'guia') {
        if (item.topic !== activeTopicTab && !item.categories?.includes(activeTopicTab)) {
          return false;
        }
      }

      // Category filter
      const matchesCategory =
        selectedCategory === 'all' ||
        item.category === selectedCategory ||
        (item.categories && item.categories.includes(selectedCategory));

      // Search query filter
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.location.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [activeTopicTab, selectedCategory, searchQuery]);

  // Featured sections
  const imperdiveisAttractions = useMemo(() => {
    return ATTRACTIONS.filter(a => a.discount || a.category === 'pacotes').slice(0, 4);
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
    setActiveTopicTab('home');
    setSelectedCategory('all');
    setSearchQuery('');
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc', display: 'flex', flexDirection: 'column' }}>
      
      {/* Header with Navigation Tabs */}
      <Header
        activeTopicTab={activeTopicTab}
        onSelectTopicTab={handleSelectTopicTab}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenLogin={() => setIsLoginOpen(true)}
        onClearFilters={handleClearFilters}
        totalResults={filteredAttractions.length}
      />

      {/* Main Content */}
      <main style={{ flex: 1 }}>
        
        {/* Topic Context Banner for specific topic views */}
        {(activeTopicTab === 'parques' || activeTopicTab === 'cultura' || activeTopicTab === 'tours' || activeTopicTab === 'gastronomia') && (
          <TopicBanner topicId={activeTopicTab} />
        )}

        {/* Hero Carousel (Shown on Home view when no search query) */}
        {activeTopicTab === 'home' && !searchQuery && selectedCategory === 'all' && (
          <HeroCarousel onSelectAttraction={setActiveAttraction} />
        )}

        {/* Dedicated Screen: Roteiros Prontos */}
        {activeTopicTab === 'roteiros' ? (
          <RoteirosSection onClickDetail={setActiveAttraction} />
        ) : activeTopicTab === 'guia' ? (
          /* Dedicated Screen: Guia Prático CWB */
          <GuiaPraticoSection />
        ) : (
          /* Standard Attraction Grid/Slider View for Home or Topic Filter Views */
          <>
            <AttractionSlider
              title={
                selectedCategory !== 'all' || searchQuery
                  ? `Resultados da busca (${filteredAttractions.length})`
                  : activeTopicTab === 'parques'
                  ? "Parques, Bosques & Natureza em Curitiba"
                  : activeTopicTab === 'cultura'
                  ? "Museus, Teatros & Patrimônio Histórico"
                  : activeTopicTab === 'tours'
                  ? "Tours, Passeios de Trem & Linha Turismo"
                  : activeTopicTab === 'gastronomia'
                  ? "Restaurantes, Polos Gastronômicos & Mercados"
                  : "O Que Fazer em Curitiba • Atrações em Destaque 360°"
              }
              subtitle={
                selectedCategory === 'all' && !searchQuery
                  ? "Explore as melhores atrações ecológicas, culturais e gastronômicas da capital paranaense."
                  : "Exibindo os melhores passeios correspondentes aos seus filtros."
              }
              attractions={filteredAttractions}
              onClickDetail={setActiveAttraction}
            />

            {/* Official Brand Section (Only on Home) */}
            {activeTopicTab === 'home' && !searchQuery && selectedCategory === 'all' && (
              <OfficialBrandSection
                onOpenMap={() => {
                  const nearbyEl = document.getElementById('nearby-section');
                  if (nearbyEl) nearbyEl.scrollIntoView({ behavior: 'smooth' });
                }}
                onOpenAboutBrand={() => setIsAboutBrandOpen(true)}
                onFilterLandmark={(landmarkName) => setSearchQuery(landmarkName)}
              />
            )}

            {/* Imperdíveis Section (Only on Home) */}
            {activeTopicTab === 'home' && !searchQuery && selectedCategory === 'all' && (
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

    </div>
  );
}
