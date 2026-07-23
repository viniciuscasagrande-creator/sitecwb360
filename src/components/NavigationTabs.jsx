import React from 'react';
import { 
  Sparkles, Trees, Compass, Ticket, Utensils, Percent, MapPin, HelpCircle 
} from 'lucide-react';
import { UNIFIED_NAV_ITEMS } from '../data/attractions';

const ICON_MAP = {
  Sparkles,
  Trees,
  Compass,
  Ticket,
  Utensils,
  Percent,
  MapPin,
  HelpCircle
};

export default function NavigationTabs({ activeTab, onSelectTab }) {
  return (
    <nav style={{ backgroundColor: '#0f172a', borderBottom: '1px solid #1e293b', boxShadow: '0 4px 14px rgba(0,0,0,0.12)' }}>
      <div style={{ 
        maxWidth: '1280px', 
        margin: '0 auto', 
        padding: '0 20px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        gap: '4px', 
        overflowX: 'auto', 
        scrollbarWidth: 'none' 
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
                height: '46px',
                padding: '0 16px',
                fontSize: '13px',
                fontWeight: isActive ? '800' : '600',
                color: isActive ? '#ffffff' : '#94a3b8',
                borderBottom: isActive ? '3px solid #00a896' : '3px solid transparent',
                backgroundColor: isActive ? 'rgba(0, 168, 150, 0.16)' : 'transparent',
                borderTopLeftRadius: '8px',
                borderTopRightRadius: '8px',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all 0.2s ease',
                border: 'none',
                outline: 'none'
              }}
              onMouseOver={(e) => {
                if (!isActive) {
                  e.currentTarget.style.color = '#ffffff';
                  e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)';
                }
              }}
              onMouseOut={(e) => {
                if (!isActive) {
                  e.currentTarget.style.color = '#94a3b8';
                  e.currentTarget.style.backgroundColor = 'transparent';
                }
              }}
              title={item.desc}
            >
              <IconComp size={16} color={isActive ? '#00a896' : '#64748b'} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
