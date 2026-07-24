import React from 'react';
import { Home, MapPin, Calendar, Heart, User, Sparkles } from 'lucide-react';

export default function MobileBottomNav({ 
  activeTab, 
  onSelectTab, 
  onOpenMap, 
  onOpenAccount,
  favoritesCount = 0 
}) {
  return (
    <div className="mobile-only-nav" style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: '#ffffff',
      borderTop: '1px solid #e2e8f0',
      boxShadow: '0 -4px 20px rgba(0,0,0,0.08)',
      zIndex: 2200,
      display: 'none',
      padding: '6px 12px 10px'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
        
        {/* Home */}
        <button
          onClick={() => onSelectTab('all')}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '2px',
            border: 'none',
            background: 'none',
            color: activeTab === 'all' ? '#00a896' : '#64748b',
            cursor: 'pointer'
          }}
        >
          <Home size={20} />
          <span style={{ fontSize: '10px', fontWeight: activeTab === 'all' ? '800' : '600' }}>Início</span>
        </button>

        {/* Mapa */}
        <button
          onClick={onOpenMap}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '2px',
            border: 'none',
            background: 'none',
            color: '#64748b',
            cursor: 'pointer'
          }}
        >
          <MapPin size={20} />
          <span style={{ fontSize: '10px', fontWeight: '600' }}>Mapa</span>
        </button>

        {/* Eventos */}
        <button
          onClick={() => onSelectTab('eventos')}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '2px',
            border: 'none',
            background: 'none',
            color: activeTab === 'eventos' ? '#00a896' : '#64748b',
            cursor: 'pointer'
          }}
        >
          <Calendar size={20} />
          <span style={{ fontSize: '10px', fontWeight: activeTab === 'eventos' ? '800' : '600' }}>Eventos</span>
        </button>

        {/* Roteiros */}
        <button
          onClick={() => onSelectTab('roteiros')}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '2px',
            border: 'none',
            background: 'none',
            color: activeTab === 'roteiros' ? '#00a896' : '#64748b',
            cursor: 'pointer'
          }}
        >
          <Sparkles size={20} />
          <span style={{ fontSize: '10px', fontWeight: activeTab === 'roteiros' ? '800' : '600' }}>Roteiros</span>
        </button>

        {/* Conta VIP */}
        <button
          onClick={onOpenAccount}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '2px',
            border: 'none',
            background: 'none',
            color: '#64748b',
            cursor: 'pointer',
            position: 'relative'
          }}
        >
          <User size={20} />
          <span style={{ fontSize: '10px', fontWeight: '600' }}>Perfil VIP</span>
          {favoritesCount > 0 && (
            <span style={{
              position: 'absolute',
              top: '-2px',
              right: '4px',
              backgroundColor: '#ea580c',
              color: '#ffffff',
              fontSize: '9px',
              fontWeight: '900',
              borderRadius: '50%',
              width: '14px',
              height: '14px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {favoritesCount}
            </span>
          )}
        </button>

      </div>
    </div>
  );
}
