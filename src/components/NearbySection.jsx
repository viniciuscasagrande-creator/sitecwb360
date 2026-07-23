import React, { useState, useEffect } from 'react';
import { MapPin, Navigation, Compass, Sparkles, Layers, Eye, Trees, CheckCircle2, ArrowRight } from 'lucide-react';
import AttractionCard from './AttractionCard';

const MAP_PINS = [
  {
    id: 'user',
    title: 'Sua Localização Atual',
    subtitle: 'Centro Cívico • Curitiba',
    lat: -25.4284,
    lng: -49.2733,
    top: '48%',
    left: '42%',
    color: '#2563eb',
    icon: 'Navigation',
    isUser: true
  },
  {
    id: 'jardim-botanico',
    title: 'Jardim Botânico',
    subtitle: 'Estufa de Vidro & Jardins',
    lat: -25.4431,
    lng: -49.2397,
    top: '65%',
    left: '78%',
    color: '#10b981',
    icon: 'Trees',
    image: 'https://images.unsplash.com/photo-1596436889106-be35e843f974?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'mon',
    title: 'Museu Oscar Niemeyer',
    subtitle: 'Museu do Olho • Centro Cívico',
    lat: -25.4103,
    lng: -49.2670,
    top: '32%',
    left: '52%',
    color: '#8b5cf6',
    icon: 'Eye',
    image: 'https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'opera',
    title: 'Ópera de Arame',
    subtitle: 'Parque das Pedreiras',
    lat: -25.3846,
    lng: -49.2764,
    top: '18%',
    left: '38%',
    color: '#f59e0b',
    icon: 'Compass',
    image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'tangua',
    title: 'Parque Tanguá',
    subtitle: 'Mirante do Castelo & Pôr do Sol',
    lat: -25.3780,
    lng: -49.2820,
    top: '14%',
    left: '26%',
    color: '#ea580c',
    icon: 'Sparkles',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'barigui',
    title: 'Parque Barigui',
    subtitle: 'Recanto das Capivaras & Lago',
    lat: -25.4260,
    lng: -49.3080,
    top: '55%',
    left: '18%',
    color: '#059669',
    icon: 'Trees',
    image: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=400&q=80'
  }
];

export default function NearbySection({ attractions, onClickDetail }) {
  const [selectedPinId, setSelectedPinId] = useState('jardim-botanico');
  const [mapMode, setMapMode] = useState('light'); // light, satellite, eco
  const [userCoords, setUserCoords] = useState({ lat: -25.4284, lng: -49.2733 });
  const [gpsStatus, setGpsStatus] = useState('Centro CWB (Padrão)');

  // Request real browser geolocation if available
  const handleDetectGPS = () => {
    if (navigator.geolocation) {
      setGpsStatus('Localizando...');
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setUserCoords({ lat: pos.coords.latitude, lng: pos.coords.longitude });
          setGpsStatus('GPS Ativo com Precisão');
        },
        () => {
          setGpsStatus('Centro CWB (Padrão)');
        }
      );
    }
  };

  // Calculate distance in km
  const getDistance = (lat, lng) => {
    if (!lat || !lng) return '2.5';
    const dLat = (lat - userCoords.lat) * 111;
    const dLng = (lng - userCoords.lng) * 100;
    const dist = Math.sqrt(dLat * dLat + dLng * dLng);
    return dist.toFixed(1);
  };

  const selectedPin = MAP_PINS.find(p => p.id === selectedPinId) || MAP_PINS[1];
  const selectedAttraction = attractions.find(a => a.id === selectedPinId) || attractions[0];

  return (
    <section style={{ maxWidth: '1280px', margin: '56px auto', padding: '0 20px' }}>
      
      {/* Header with Title & Live GPS button */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '16px', marginBottom: '28px' }}>
        <div>
          <span style={{
            backgroundColor: '#e0f2fe',
            color: '#0284c7',
            fontSize: '12px',
            fontWeight: '800',
            padding: '4px 12px',
            borderRadius: '9999px',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px'
          }}>
            <Navigation size={14} />
            <span>Geolocalização Interativa</span>
          </span>
          <h2 style={{ fontSize: '30px', fontWeight: '900', color: '#0f172a', marginTop: '8px', marginBottom: '4px' }}>
            Mapa de Atrações & Perto de Você
          </h2>
          <p style={{ fontSize: '15px', color: '#64748b', maxWidth: '700px' }}>
            Explore os pontos turísticos em um mapa vetorizado claro de Curitiba. Clique nos pins para ver detalhes e distâncias em tempo real.
          </p>
        </div>

        {/* GPS Button & Mode Selector */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', backgroundColor: '#e2e8f0', padding: '3px', borderRadius: '10px' }}>
            <button
              onClick={() => setMapMode('light')}
              style={{
                height: '32px',
                padding: '0 12px',
                borderRadius: '8px',
                fontSize: '12px',
                fontWeight: '700',
                backgroundColor: mapMode === 'light' ? '#ffffff' : 'transparent',
                color: mapMode === 'light' ? '#0f172a' : '#64748b',
                border: 'none',
                cursor: 'pointer',
                boxShadow: mapMode === 'light' ? '0 2px 6px rgba(0,0,0,0.08)' : 'none'
              }}
            >
              🗺️ Vetorial Claro
            </button>
            <button
              onClick={() => setMapMode('satellite')}
              style={{
                height: '32px',
                padding: '0 12px',
                borderRadius: '8px',
                fontSize: '12px',
                fontWeight: '700',
                backgroundColor: mapMode === 'satellite' ? '#0f172a' : 'transparent',
                color: mapMode === 'satellite' ? '#ffffff' : '#64748b',
                border: 'none',
                cursor: 'pointer',
                boxShadow: mapMode === 'satellite' ? '0 2px 6px rgba(0,0,0,0.2)' : 'none'
              }}
            >
              🛰️ Satélite
            </button>
          </div>

          <button
            onClick={handleDetectGPS}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              height: '38px',
              padding: '0 16px',
              borderRadius: '10px',
              backgroundColor: '#00a896',
              color: '#ffffff',
              fontSize: '13px',
              fontWeight: '700',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(0,168,150,0.3)',
              transition: 'all 0.2s ease'
            }}
          >
            <Navigation size={15} />
            <span>{gpsStatus}</span>
          </button>
        </div>
      </div>

      {/* Main Map & Interactive Details Container */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        lgGridTemplateColumns: '1fr 380px',
        gap: '24px',
        alignItems: 'stretch'
      }}>
        
        {/* Modern Light Vector Map Canvas */}
        <div style={{
          position: 'relative',
          borderRadius: '24px',
          overflow: 'hidden',
          minHeight: '450px',
          border: '2px solid #cbd5e1',
          boxShadow: '0 12px 36px rgba(0,0,0,0.06)',
          backgroundColor: mapMode === 'satellite' ? '#0f172a' : '#f1f5f9',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}>
          
          {/* Map Vector Background Illustration */}
          {mapMode === 'light' ? (
            <div style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `
                radial-gradient(circle at 50% 50%, #ffffff 0%, #f1f5f9 100%),
                linear-gradient(to right, rgba(0, 168, 150, 0.05) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(0, 168, 150, 0.05) 1px, transparent 1px)
              `,
              backgroundSize: '100% 100%, 40px 40px, 40px 40px'
            }}>
              {/* Simulated River Line (Rio Barigui) */}
              <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.35 }}>
                <path d="M 50 0 Q 150 150, 250 300 T 500 500" fill="none" stroke="#3b82f6" strokeWidth="24" strokeLinecap="round" />
                <path d="M 0 200 Q 200 250, 400 200 T 800 300" fill="none" stroke="#00a896" strokeWidth="16" opacity="0.4" />
              </svg>
            </div>
          ) : (
            <div style={{
              position: 'absolute',
              inset: 0,
              backgroundColor: '#0f172a',
              backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
              backgroundSize: '24px 24px'
            }} />
          )}

          {/* Map Legend Overlay */}
          <div style={{
            position: 'absolute',
            top: '16px',
            left: '16px',
            zIndex: 20,
            backgroundColor: 'rgba(255, 255, 255, 0.92)',
            backdropFilter: 'blur(8px)',
            padding: '8px 14px',
            borderRadius: '12px',
            border: '1px solid #cbd5e1',
            boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
            fontSize: '12px',
            fontWeight: '700',
            color: '#0f172a',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#2563eb' }} />
              <span>Você</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#10b981' }} />
              <span>Parques</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#8b5cf6' }} />
              <span>Cultura</span>
            </div>
          </div>

          {/* Interactive Pins on Map */}
          <div style={{ position: 'relative', zIndex: 10, width: '100%', height: '100%', minHeight: '380px' }}>
            {MAP_PINS.map((pin) => {
              const isSelected = selectedPinId === pin.id;

              return (
                <div
                  key={pin.id}
                  onClick={() => setSelectedPinId(pin.id)}
                  style={{
                    position: 'absolute',
                    top: pin.top,
                    left: pin.left,
                    transform: 'translate(-50%, -100%)',
                    cursor: 'pointer',
                    zIndex: isSelected ? 30 : 15,
                    transition: 'all 0.25s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                  }}
                >
                  {/* Pin Bubble */}
                  <div style={{
                    backgroundColor: isSelected ? '#0f172a' : pin.color,
                    color: '#ffffff',
                    padding: isSelected ? '8px 14px' : '6px 10px',
                    borderRadius: '9999px',
                    fontWeight: '800',
                    fontSize: '12px',
                    boxShadow: isSelected ? '0 8px 20px rgba(0,0,0,0.3)' : '0 4px 12px rgba(0,0,0,0.15)',
                    border: '2px solid #ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    transform: isSelected ? 'scale(1.15)' : 'scale(1)'
                  }}>
                    <MapPin size={16} color="#ffffff" fill={isSelected ? '#00a896' : '#ffffff'} />
                    <span>{pin.title}</span>
                  </div>
                  
                  {/* Pointer arrow */}
                  <div style={{
                    width: 0,
                    height: 0,
                    borderLeft: '6px solid transparent',
                    borderRight: '6px solid transparent',
                    borderTop: `8px solid ${isSelected ? '#0f172a' : pin.color}`,
                    marginTop: '-1px'
                  }} />
                </div>
              );
            })}
          </div>

          {/* Map Footer Prompt */}
          <div style={{
            position: 'relative',
            zIndex: 20,
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(8px)',
            padding: '12px 20px',
            borderTop: '1px solid #e2e8f0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '13px',
            color: '#475569'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Sparkles size={16} color="#00a896" />
              <span>Clique nos marcadores para explorar cada ponto de Curitiba</span>
            </div>
            <div style={{ fontWeight: '700', color: '#00a896' }}>
              {MAP_PINS.length} Pontos no Mapa
            </div>
          </div>

        </div>

        {/* Selected Attraction Card Sidebar */}
        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: '24px',
          padding: '24px',
          border: '1px solid #e2e8f0',
          boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <span style={{
                backgroundColor: '#ecfdf5',
                color: '#059669',
                fontSize: '12px',
                fontWeight: '800',
                padding: '4px 10px',
                borderRadius: '6px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px'
              }}>
                <MapPin size={13} />
                <span>{getDistance(selectedPin.lat, selectedPin.lng)} km de distância</span>
              </span>

              <span style={{ fontSize: '12px', color: '#64748b', fontWeight: '600' }}>
                Curitiba 360°
              </span>
            </div>

            {/* Thumbnail Image */}
            <div style={{ position: 'relative', height: '180px', borderRadius: '16px', overflow: 'hidden', marginBottom: '16px' }}>
              <img
                src={selectedAttraction.image}
                alt={selectedAttraction.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{
                position: 'absolute',
                bottom: '12px',
                left: '12px',
                backgroundColor: 'rgba(15, 23, 42, 0.85)',
                backdropFilter: 'blur(4px)',
                color: '#ffffff',
                fontSize: '12px',
                fontWeight: '800',
                padding: '4px 10px',
                borderRadius: '6px'
              }}>
                {selectedAttraction.category.toUpperCase()}
              </div>
            </div>

            {/* Attraction Info */}
            <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#0f172a', marginBottom: '6px', lineHeight: '1.3' }}>
              {selectedAttraction.title}
            </h3>
            <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '16px', lineHeight: '1.5' }}>
              {selectedAttraction.description.substring(0, 120)}...
            </p>

            {/* Key Features Bullet List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '20px' }}>
              {selectedAttraction.features?.slice(0, 3).map((ft, i) => (
                <div key={i} style={{ fontSize: '12px', color: '#334155', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <CheckCircle2 size={14} color="#00a896" />
                  <span>{ft}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card Action Button */}
          <button
            onClick={() => onClickDetail(selectedAttraction)}
            style={{
              width: '100%',
              height: '44px',
              borderRadius: '12px',
              backgroundColor: '#2563eb',
              color: '#ffffff',
              fontSize: '14px',
              fontWeight: '800',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              boxShadow: '0 4px 14px rgba(37,99,235,0.3)',
              transition: 'all 0.2s ease'
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#1d4ed8'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
          >
            <span>Ver Passeio Completo</span>
            <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
}
