import React, { useState } from 'react';
import { MapPin, Navigation, Radio } from 'lucide-react';
import AttractionCard from './AttractionCard';

export default function NearbySection({ attractions, onClickDetail }) {
  const [selectedPin, setSelectedPin] = useState('user');

  // Simulated GPS Coordinates for Curitiba Center
  const userLat = -25.4284;
  const userLng = -49.2733;

  // Calculate distance in km
  const getDistance = (lat, lng) => {
    if (!lat || !lng) return '2.5';
    const dLat = (lat - userLat) * 111;
    const dLng = (lng - userLng) * 100;
    const dist = Math.sqrt(dLat * dLat + dLng * dLng);
    return dist.toFixed(1);
  };

  const nearbyList = attractions.slice(0, 2);

  return (
    <section style={{ maxWidth: '1280px', margin: '56px auto', padding: '0 20px' }}>
      <div style={{ marginBottom: '24px' }}>
        <h2 style={{ fontSize: '28px', fontWeight: '800', color: '#0f172a', marginBottom: '4px' }}>
          Perto de você
        </h2>
        <p style={{ fontSize: '15px', color: '#64748b', maxWidth: '800px' }}>
          Descubra os pontos turísticos e experiências mais próximos da sua localização atual. Ative a geolocalização do seu navegador para obter recomendações com distâncias precisas.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', lgGridTemplateColumns: '420px 1fr', gap: '24px' }}>
        
        {/* Left Side: Interactive Map Box */}
        <div style={{
          backgroundColor: '#0f172a',
          borderRadius: '20px',
          padding: '24px',
          color: '#ffffff',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          minHeight: '340px',
          boxShadow: '0 10px 25px rgba(15,23,42,0.2)'
        }}>
          {/* Map Grid Pattern background */}
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
            backgroundSize: '24px 24px',
            opacity: 0.5
          }} />

          {/* Top Sensor Info Header */}
          <div style={{ position: 'relative', zIndex: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', backgroundColor: 'rgba(0,168,150,0.2)', color: '#00a896', padding: '4px 10px', borderRadius: '9999px', fontSize: '12px', fontWeight: '700', border: '1px solid rgba(0,168,150,0.4)' }}>
                <Radio size={14} className="animate-pulse" />
                <span>Status do Sensor</span>
              </div>
            </div>
            <p style={{ fontSize: '13px', color: '#cbd5e1', lineHeight: '1.4' }}>
              GPS ligado. Usando centro da cidade.<br />
              <strong style={{ color: '#00a896' }}>LAT: -25.4284 | LNG: -49.2733</strong>
            </p>
          </div>

          {/* Map Visual Pins */}
          <div style={{ position: 'relative', zIndex: 10, height: '160px', width: '100%', margin: '16px 0', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', backgroundColor: 'rgba(30,41,59,0.7)', overflow: 'hidden' }}>
            
            {/* User Pin */}
            <div 
              onClick={() => setSelectedPin('user')}
              style={{
                position: 'absolute',
                top: '50%',
                left: '35%',
                transform: 'translate(-50%, -50%)',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              <div style={{ backgroundColor: '#2563eb', padding: '6px', borderRadius: '50%', boxShadow: '0 0 16px rgba(37,99,235,0.8)' }}>
                <Navigation size={18} color="#ffffff" />
              </div>
              <span style={{ fontSize: '10px', fontWeight: '700', backgroundColor: '#1e293b', padding: '2px 6px', borderRadius: '4px', marginTop: '4px', whiteSpace: 'nowrap' }}>
                Você está aqui
              </span>
            </div>

            {/* Pin 1: Ópera de Arame */}
            <div 
              onClick={() => setSelectedPin('opera')}
              style={{
                position: 'absolute',
                top: '25%',
                left: '70%',
                transform: 'translate(-50%, -50%)',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              <MapPin size={22} color="#f59e0b" fill="#f59e0b" />
              <span style={{ fontSize: '10px', fontWeight: '600', backgroundColor: '#1e293b', padding: '2px 6px', borderRadius: '4px', marginTop: '2px', whiteSpace: 'nowrap' }}>
                Ópera de Arame
              </span>
            </div>

            {/* Pin 2: Parque Jaime Lerner */}
            <div 
              onClick={() => setSelectedPin('jaime')}
              style={{
                position: 'absolute',
                top: '70%',
                left: '75%',
                transform: 'translate(-50%, -50%)',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              <MapPin size={22} color="#00a896" fill="#00a896" />
              <span style={{ fontSize: '10px', fontWeight: '600', backgroundColor: '#1e293b', padding: '2px 6px', borderRadius: '4px', marginTop: '2px', whiteSpace: 'nowrap' }}>
                Parque Jaime Lerner
              </span>
            </div>

          </div>

          <div style={{ position: 'relative', zIndex: 10, fontSize: '12px', color: '#94a3b8', textAlign: 'center' }}>
            Clique nos marcadores do mapa para interagir
          </div>
        </div>

        {/* Right Side: Nearest Attraction Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
          {nearbyList.map((item) => (
            <div key={item.id} style={{ position: 'relative' }}>
              <div style={{
                position: 'absolute',
                top: '-10px',
                right: '16px',
                backgroundColor: '#0f172a',
                color: '#ffffff',
                fontSize: '11px',
                fontWeight: '700',
                padding: '4px 10px',
                borderRadius: '9999px',
                zIndex: 10,
                boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}>
                <MapPin size={12} color="#00a896" />
                <span>{getDistance(item.lat, item.lng)} km de você</span>
              </div>
              <AttractionCard attraction={item} onClickDetail={onClickDetail} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
