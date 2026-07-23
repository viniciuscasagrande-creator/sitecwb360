import React from 'react';
import Logo from './Logo';
import NavigationTabs from './NavigationTabs';
import { Search, User, ShoppingCart, Sparkles, X, PhoneCall, Building2, UserCheck } from 'lucide-react';

export default function Header({ 
  activeTopicTab,
  onSelectTopicTab,
  searchQuery, 
  onSearchChange,
  cartCount,
  onOpenCart,
  onOpenLogin,
  onOpenAgencyQuote,
  onClearFilters,
  totalResults
}) {
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 1000, boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
      
      {/* Top Utility Bar */}
      <div style={{ backgroundColor: '#0f172a', color: '#cbd5e1', fontSize: '12px', padding: '6px 16px', borderBottom: '1px solid #1e293b' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <span style={{ color: '#00a896', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '6px', letterSpacing: '0.3px' }}>
              <Sparkles size={14} />
              <span>Curitiba 360°</span>
            </span>
            <span style={{ color: '#334155' }}>|</span>
            <a 
              href="#parceiro" 
              onClick={(e) => { e.preventDefault(); onOpenAgencyQuote ? onOpenAgencyQuote('parceiro') : onSelectTopicTab('agencias'); }} 
              style={{ color: '#94a3b8', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px', fontWeight: '500' }}
            >
              <Building2 size={13} color="#00a896" />
              <span>Seja Parceiro</span>
            </a>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <a href="https://wa.me/5541999999999" target="_blank" rel="noreferrer" style={{ color: '#22c55e', textDecoration: 'none', fontWeight: '700', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
              <PhoneCall size={13} />
              <span>Suporte 24h</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header Tier - Mobile First Responsive Flex */}
      <div style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #e2e8f0', padding: '10px 16px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          
          {/* Row 1: Logo + User & Cart Action Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', gap: '12px' }}>
            
            {/* Logo */}
            <a href="#" onClick={(e) => { e.preventDefault(); onClearFilters(); }} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', flexShrink: 0 }}>
              <Logo size="md" />
            </a>

            {/* Action Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
              
              {/* Cart Button */}
              <button
                onClick={onOpenCart}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  height: '40px',
                  minHeight: '40px',
                  padding: '0 12px',
                  borderRadius: '10px',
                  backgroundColor: '#f1f5f9',
                  color: '#0f172a',
                  fontWeight: '700',
                  fontSize: '13px',
                  border: '1px solid #cbd5e1',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  outline: 'none'
                }}
                title="Carrinho de ingressos"
              >
                <ShoppingCart size={18} color="#00a896" />
                <span className="hidden sm:inline">Carrinho</span>
                {cartCount > 0 && (
                  <span style={{
                    backgroundColor: '#ea580c',
                    color: '#ffffff',
                    fontSize: '11px',
                    fontWeight: '800',
                    borderRadius: '9999px',
                    height: '20px',
                    minWidth: '20px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '0 5px'
                  }}>
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Login Button */}
              <button
                onClick={onOpenLogin}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  height: '40px',
                  minHeight: '40px',
                  padding: '0 14px',
                  borderRadius: '10px',
                  backgroundColor: '#2563eb',
                  color: '#ffffff',
                  fontWeight: '700',
                  fontSize: '13px',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 3px 10px rgba(37,99,235,0.25)',
                  transition: 'all 0.2s ease',
                  outline: 'none'
                }}
              >
                <User size={18} />
                <span>Entrar</span>
              </button>

            </div>

          </div>

          {/* Row 2: Search Bar Always Visible & 100% Width on Mobile */}
          <div style={{ width: '100%', position: 'relative' }}>
            <Search size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#00a896', zIndex: 2 }} />
            <input
              type="text"
              placeholder="Pesquise shows, parques, gastronomia, hotéis..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              style={{
                width: '100%',
                height: '44px',
                minHeight: '44px',
                padding: '0 40px 0 44px',
                borderRadius: '9999px',
                border: '2px solid #cbd5e1',
                backgroundColor: '#f8fafc',
                fontSize: '14px',
                fontWeight: '500',
                outline: 'none',
                transition: 'all 0.25s ease',
                boxShadow: '0 2px 6px rgba(0,0,0,0.03)'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#00a896';
                e.target.style.backgroundColor = '#ffffff';
                e.target.style.boxShadow = '0 0 0 4px rgba(0,168,150,0.15)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#cbd5e1';
                e.target.style.backgroundColor = '#f8fafc';
                e.target.style.boxShadow = '0 2px 6px rgba(0,0,0,0.03)';
              }}
            />
            {searchQuery && (
              <button 
                onClick={() => onSearchChange('')}
                style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8', border: 'none', background: 'none', cursor: 'pointer', zIndex: 2 }}
              >
                <X size={18} />
              </button>
            )}
          </div>

        </div>
      </div>

      {/* SINGLE UNIFIED NAVIGATION BAR */}
      <NavigationTabs
        activeTab={activeTopicTab}
        onSelectTab={onSelectTopicTab}
      />

      {/* Active Search / Filter Notification Bar */}
      {searchQuery && (
        <div style={{ backgroundColor: '#f1f5f9', borderTop: '1px solid #e2e8f0', padding: '8px 16px' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '13px', color: '#475569', flexWrap: 'wrap', gap: '8px' }}>
            <div>
              <span>Pesquisando: </span>
              <strong style={{ color: '#2563eb' }}>
                "{searchQuery}"
              </strong>
              <span style={{ marginLeft: '8px', color: '#64748b' }}>
                ({totalResults} {totalResults === 1 ? 'resultado' : 'resultados'})
              </span>
            </div>
            <button
              onClick={onClearFilters}
              style={{
                color: '#dc2626',
                fontWeight: '700',
                fontSize: '12px',
                border: 'none',
                background: 'none',
                cursor: 'pointer',
                textDecoration: 'underline'
              }}
            >
              Limpar busca
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
