import React from 'react';
import { 
  Sparkles, Trees, Compass, Ticket, Utensils, Percent, MapPin, HelpCircle,
  Music, Drama, Calendar, Building2, Beer, Hotel 
} from 'lucide-react';
import { UNIFIED_NAV_ITEMS } from '../data/attractions';

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

export default function NavigationTabs({ activeTab, onSelectTab }) {
  return (
    <nav style={{ 
      backgroundColor: '#0f172a', 
      borderBottom: '1px solid #1e293b', 
      boxShadow: '0 4px 14px rgba(0,0,0,0.12)',
      width: '100%',
      padding: '8px 0',
      overflowX: 'auto',
      WebkitOverflowScrolling: 'touch'
    }} className="hide-scrollbar">
      <div style={{ 
        maxWidth: '1280px', 
        margin: '0 auto', 
        padding: '0 16px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'flex-start',
        flexWrap: 'nowrap',
        gap: '8px',
        width: 'max-content'
      }}>
        {UNIFIED_NAV_ITEMS.map((item) => {
          const IconComp = ICON_MAP[item.icon] || Sparkles;
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onSelectTab(item.id)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                minHeight: '44px',
                height: '44px',
                padding: '0 16px',
                fontSize: '13px',
                fontWeight: isActive ? '800' : '600',
                color: isActive ? '#ffffff' : '#cbd5e1',
                backgroundColor: isActive ? '#00a896' : 'rgba(255, 255, 255, 0.08)',
                borderRadius: '9999px',
                border: isActive ? '1px solid #00a896' : '1px solid rgba(255, 255, 255, 0.14)',
                boxShadow: isActive ? '0 4px 12px rgba(0, 168, 150, 0.35)' : 'none',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                flexShrink: 0,
                transition: 'all 0.2s ease',
                outline: 'none'
              }}
              onMouseOver={(e) => {
                if (!isActive) {
                  e.currentTarget.style.color = '#ffffff';
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.16)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.28)';
                }
              }}
              onMouseOut={(e) => {
                if (!isActive) {
                  e.currentTarget.style.color = '#cbd5e1';
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.14)';
                }
              }}
              title={item.desc}
            >
              <IconComp size={16} style={{ flexShrink: 0 }} color={isActive ? '#ffffff' : '#00a896'} />
              <span style={{ whiteSpace: 'nowrap' }}>{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
