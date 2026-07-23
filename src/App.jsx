import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import HeroCarousel from './components/HeroCarousel';
import AttractionSlider from './components/AttractionSlider';
import OfficialBrandSection from './components/OfficialBrandSection';
import ImperdiveisSection from './components/ImperdiveisSection';
import NearbySection from './components/NearbySection';
import AttractionDetailModal from './components/AttractionDetailModal';
import CartModal from './components/CartModal';
import LoginModal from './components/LoginModal';
import BrandAboutModal from './components/BrandAboutModal';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';
import { ATTRACTIONS } from './data/attractions';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeAttraction, setActiveAttraction] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isAboutBrandOpen, setIsAboutBrandOpen] = useState(false);

  // Filtered Attractions
  const filteredAttractions = useMemo(() => {
    return ATTRACTIONS.filter((item) => {
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
  }, [selectedCategory, searchQuery]);

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
    setSelectedCategory('all');
    setSearchQuery('');
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc', display: 'flex', flexDirection: 'column' }}>
      
      {/* Header */}
      <Header
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
        
        {/* Hero Carousel (Only shown when no search is active) */}
        {!searchQuery && selectedCategory === 'all' && (
          <HeroCarousel onSelectAttraction={setActiveAttraction} />
        )}

        {/* Dynamic Attraction Slider / Grid */}
        <AttractionSlider
          title={
            selectedCategory !== 'all' || searchQuery
              ? `Resultados da busca (${filteredAttractions.length})`
              : "O que fazer em Curitiba"
          }
          subtitle={
            selectedCategory === 'all' && !searchQuery
              ? "Explore as principais atrações ecológicas e experiências da capital paranaense."
              : "Exibindo os melhores passeios correspondentes aos seus filtros."
          }
          attractions={filteredAttractions}
          onClickDetail={setActiveAttraction}
        />

        {/* Official Brand Section */}
        {!searchQuery && selectedCategory === 'all' && (
          <OfficialBrandSection
            onOpenMap={() => {
              const nearbyEl = document.getElementById('nearby-section');
              if (nearbyEl) nearbyEl.scrollIntoView({ behavior: 'smooth' });
            }}
            onOpenAboutBrand={() => setIsAboutBrandOpen(true)}
            onFilterLandmark={(landmarkName) => setSearchQuery(landmarkName)}
          />
        )}

        {/* Imperdíveis Section */}
        {!searchQuery && selectedCategory === 'all' && (
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
