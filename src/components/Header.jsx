import React from 'react';
import Logo from './Logo';
import NavigationTabs from './NavigationTabs';
import { 
  Search, User, ShoppingCart, Ticket, Percent, Tag, Trees, 
  Compass, Utensils, Music, Sparkles, Globe, X, PhoneCall, Building2, UserCheck
} from 'lucide-react';
import { CATEGORIES } from '../data/attractions';

const ICON_MAP = {
  Sparkles, Ticket, Percent, Tag, Trees, Compass, Utensils, Music
};

export default function Header({ 
  activeTopicTab,
  onSelectTopicTab,
  selectedCategory, 
  onSelectCategory, 
  searchQuery, 
  onSearchChange,
  cartCount,
  onOpenCart,
  onOpenLogin,
  onClearFilters,
  totalResults
}) {
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 1000, boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
      
      {/* Top Utility Bar - Decolar Inspired & Perfectly Centered */}
      <div style={{ backgroundColor: '#0f172a', color: '#cbd5e1', fontSize: '12px', padding: '8px 20px', borderBottom: '1px solid #1e293b' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <span style={{ color: '#00a896', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '6px', letterSpacing: '0.3px' }}>
              <Sparkles size={14} />
              <span>Portal Oficial Curitiba 360°</span>
            </span>
            <span style={{ color: '#334155' }}>|</span>
            <a href="#parceiro" onClick={(e) => { e.preventDefault(); alert("Formulário de Seja Parceiro Comercial 360° em breve!"); }} style={{ color: '#94a3b8', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px', fontWeight: '500' }}>
              <Building2 size={14} color="#00a896" />
              <span>Seja Parceiro 360</span>
            </a>
            <a href="#agencia" onClick={(e) => { e.preventDefault(); alert("Painel de Agente de Vendas em breve!"); }} style={{ color: '#94a3b8', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px', fontWeight: '500' }}>
              <UserCheck size={14} color="#2563eb" />
              <span>Agente de Vendas</span>
            </a>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <a href="https://wa.me/5541999999999" target="_blank" rel="noreferrer" style={{ color: '#22c55e', textDecoration: 'none', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <PhoneCall size={14} />
              <span>Suporte 24h</span>
            </a>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', backgroundColor: '#1e293b', padding: '3px 10px', borderRadius: '6px', color: '#ffffff', fontWeight: '700', fontSize: '11px' }}>
              <span>🇧🇷 BR (R$)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header Tier - Balanced Layout */}
      <div style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #e2e8f0', padding: '12px 20px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px' }}>
          
          {/* Official Brand Logo */}
          <div style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
            <a href="#" onClick={(e) => { e.preventDefault(); onClearFilters(); }} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
              <Logo size="md" />
            </a>
          </div>

          {/* Centralized Search Bar */}
          <div style={{ flex: '1', maxWidth: '580px', margin: '0 auto', position: 'relative' }}>
            <Search size={19} style={{ position: 'absolute', left: '18px', top: '50%', transform: 'translateY(-50%)', color: '#00a896' }} />
            <input
              type="text"
              placeholder="O que você quer fazer em Curitiba? Pesquise parques, restaurantes, passeios..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 20px 12px 48px',
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
                style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8', border: 'none', background: 'none', cursor: 'pointer' }}
              >
                <X size={18} />
              </button>
            )}
          </div>

          {/* User & Cart Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexShrink: 0 }}>
            
            {/* Cart Button */}
            <button
              onClick={onOpenCart}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 18px',
                borderRadius: '12px',
                backgroundColor: '#f1f5f9',
                color: '#0f172a',
                fontWeight: '700',
                fontSize: '14px',
                border: '1px solid #cbd5e1',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#e2e8f0'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#f1f5f9'}
              title="Ver meu carrinho de ingressos"
            >
              <ShoppingCart size={20} color="#00a896" />
              <span>Carrinho</span>
              {cartCount > 0 && (
                <span style={{
                  backgroundColor: '#ea580c',
                  color: '#ffffff',
                  fontSize: '11px',
                  fontWeight: '800',
                  borderRadius: '9999px',
                  height: '20px',
                  minWidth: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '0 6px',
                  boxShadow: '0 2px 6px rgba(234,88,12,0.4)'
                }}>
                  {cartCount}
                </span>
              )}
            </button>

            {/* Login / Account Button */}
            <button
              onClick={onOpenLogin}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: '#2563eb',
                color: '#ffffff',
                padding: '10px 20px',
                borderRadius: '12px',
                fontWeight: '700',
                fontSize: '14px',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(37,99,235,0.3)',
                transition: 'all 0.2s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#1d4ed8';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = '#2563eb';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <User size={18} />
              <span>Entrar / Cadastrar</span>
            </button>

          </div>
        </div>
      </div>

      {/* Main Topic Screens Navigation Bar */}
      <NavigationTabs
        activeTab={activeTopicTab}
        onSelectTab={onSelectTopicTab}
      />

      {/* Secondary Category Pills Filter (Only when on home or attraction catalog view) */}
      {(activeTopicTab === 'home' || activeTopicTab === 'parques' || activeTopicTab === 'cultura' || activeTopicTab === 'tours' || activeTopicTab === 'gastronomia') && (
        <div style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #e2e8f0', boxShadow: '0 2px 6px rgba(0,0,0,0.02)' }}>
          <div style={{ 
            maxWidth: '1280px', 
            margin: '0 auto', 
            padding: '10px 20px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            gap: '10px', 
            flexWrap: 'wrap' 
          }}>
            {CATEGORIES.map((cat) => {
              const IconComponent = ICON_MAP[cat.icon] || Sparkles;
              const isActive = selectedCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => onSelectCategory(cat.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '7px 15px',
                    borderRadius: '9999px',
                    fontSize: '12px',
                    fontWeight: isActive ? '800' : '600',
                    whiteSpace: 'nowrap',
                    backgroundColor: isActive ? '#eff6ff' : '#f8fafc',
                    color: isActive ? '#2563eb' : '#475569',
                    border: isActive ? '2px solid #2563eb' : '1px solid #cbd5e1',
                    boxShadow: isActive ? '0 2px 8px rgba(37,99,235,0.15)' : 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <IconComponent size={14} color={isActive ? '#2563eb' : '#00a896'} />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Active Filter Bar if selected */}
      {(selectedCategory !== 'all' || searchQuery) && (
        <div style={{ backgroundColor: '#f1f5f9', borderTop: '1px solid #e2e8f0', padding: '8px 20px' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '13px', color: '#475569' }}>
            <div>
              <span>Filtros ativos: </span>
              {selectedCategory !== 'all' && (
                <strong style={{ color: '#2563eb', marginRight: '8px' }}>
                  Categoria: {CATEGORIES.find(c => c.id === selectedCategory)?.label}
                </strong>
              )}
              {searchQuery && (
                <strong style={{ color: '#2563eb' }}>
                  Busca: "{searchQuery}"
                </strong>
              )}
              <span style={{ marginLeft: '12px', color: '#64748b' }}>
                ({totalResults} {totalResults === 1 ? 'atração encontrada' : 'atrações encontradas'})
              </span>
            </div>
            <button
              onClick={onClearFilters}
              style={{
                color: '#dc2626',
                fontWeight: '600',
                fontSize: '12px',
                border: 'none',
                background: 'none',
                cursor: 'pointer',
                textDecoration: 'underline'
              }}
            >
              Limpar filtros
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
