import React from 'react';
import { 
  Sparkles, Trees, Compass, Ticket, Utensils, MapPin, HelpCircle 
} from 'lucide-react';
import { TOPIC_TABS } from '../data/attractions';

const ICON_MAP = {
  Sparkles,
  Trees,
  Compass,
  Ticket,
  Utensils,
  MapPin,
  HelpCircle
};

export default function NavigationTabs({ activeTab, onSelectTab }) {
  return (
    <div style={{ backgroundColor: '#0f172a', borderBottom: '1px solid #1e293b', boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}>
      <div style={{ 
        maxWidth: '1280px', 
        margin: '0 auto', 
        padding: '0 20px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        gap: '6px', 
        overflowX: 'auto', 
        scrollbarWidth: 'none' 
      }}>
        {TOPIC_TABS.map((tab) => {
          const IconComp = ICON_MAP[tab.icon] || Sparkles;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => onSelectTab(tab.id)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                height: '46px',
                padding: '0 18px',
                fontSize: '13px',
                fontWeight: isActive ? '800' : '600',
                color: isActive ? '#ffffff' : '#94a3b8',
                borderBottom: isActive ? '3px solid #00a896' : '3px solid transparent',
                backgroundColor: isActive ? 'rgba(0, 168, 150, 0.14)' : 'transparent',
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
              title={tab.desc}
            >
              <IconComp size={16} color={isActive ? '#00a896' : '#64748b'} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
