import React, { useState } from 'react';
import { 
  Sparkles, Trees, Compass, Ticket, Utensils, Percent, MapPin, HelpCircle,
  Music, Drama, Calendar, Building2, Beer, Hotel, ChevronDown, ChevronUp 
} from 'lucide-react';
import { UNIFIED_NAV_ITEMS } from '../data/attractions';
import { useLanguage } from '../context/LanguageContext';

const ICON_MAP = {
  Sparkles,
  Trees,
  Compass,
  Music,
  Drama,
  Calendar,
  Ticket,
  Utensils,
  Beer,
  Building2,
  Hotel,
  Percent,
  MapPin,
  HelpCircle
};

// Core 5 Essential Tabs to display by default
const ESSENTIAL_TAB_IDS = ['all', 'tours', 'gastronomia', 'hoteis', 'eventos'];

export default function NavigationTabs({ activeTab, onSelectTab }) {
  const { t } = useLanguage();
  const [showAll, setShowAll] = useState(false);

  const visibleItems = showAll 
    ? UNIFIED_NAV_ITEMS 
    : UNIFIED_NAV_ITEMS.filter(item => ESSENTIAL_TAB_IDS.includes(item.id));

  return (
    <nav style={{ 
      backgroundColor: '#0f172a', 
      borderBottom: '1px solid #1e293b', 
      boxShadow: '0 4px 14px rgba(0,0,0,0.12)',
      width: '100%',
      padding: '8px 0'
    }}>
      <div style={{ 
        maxWidth: '1280px', 
        margin: '0 auto', 
        padding: '0 16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '12px',
        flexWrap: 'wrap'
      }}>
        {/* Scrollable / Flexible Tabs List */}
        <div 
          className="hide-scrollbar nav-mobile-scroll"
          style={{ 
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            flexWrap: showAll ? 'wrap' : 'nowrap',
            flex: 1,
            overflowX: showAll ? 'visible' : 'auto'
          }}
        >
          {visibleItems.map((item) => {
            const IconComp = ICON_MAP[item.icon] || Sparkles;
            const isActive = activeTab === item.id;
            const translatedLabel = t(`nav.${item.id}`) || item.label;

            return (
              <button
                key={item.id}
                onClick={() => onSelectTab(item.id)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  height: '38px',
                  padding: '0 16px',
                  fontSize: '12px',
                  fontWeight: isActive ? '800' : '600',
                  color: isActive ? '#ffffff' : '#cbd5e1',
                  backgroundColor: isActive ? '#00a896' : 'rgba(255, 255, 255, 0.07)',
                  borderRadius: '9999px',
                  border: isActive ? '1px solid #00a896' : '1px solid rgba(255, 255, 255, 0.12)',
                  boxShadow: isActive ? '0 4px 12px rgba(0, 168, 150, 0.35)' : 'none',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                  transition: 'all 0.2s ease',
                  outline: 'none'
                }}
                title={item.desc}
              >
                <IconComp size={14} style={{ flexShrink: 0 }} color={isActive ? '#ffffff' : '#00a896'} />
                <span>{translatedLabel}</span>
              </button>
            );
          })}
        </div>

        {/* Toggle Show All Categories Button */}
        <button
          onClick={() => setShowAll(!showAll)}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            height: '38px',
            padding: '0 14px',
            borderRadius: '9999px',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            color: '#00a896',
            fontSize: '12px',
            fontWeight: '800',
            border: '1px solid rgba(0,168,150,0.4)',
            cursor: 'pointer',
            whiteSpace: 'nowrap',
            flexShrink: 0,
            transition: 'all 0.2s ease'
          }}
        >
          <span>{showAll ? 'Mostrar Menos' : `+ Ver Todas (${UNIFIED_NAV_ITEMS.length})`}</span>
          {showAll ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>
      </div>
    </nav>
  );
}
