import React, { useState } from 'react';
import Logo from './Logo';
import { 
  Search, User, ShoppingCart, Ticket, Percent, Tag, Trees, 
  Compass, Utensils, Music, Sparkles, Globe, X, Menu 
} from 'lucide-react';
import { CATEGORIES } from '../data/attractions';

const ICON_MAP = {
  Sparkles, Ticket, Percent, Tag, Trees, Compass, Utensils, Music
};

export default function Header({ 
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #e2e8f0', sticky: 'top', position: 'sticky', top: 0, zIndex: 1000, boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
      {/* Top Navbar */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '12px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
        
        {/* Brand Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <a href="#" onClick={(e) => { e.preventDefault(); onClearFilters(); }} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <Logo size="md" />
          </a>
        </div>

        {/* Search Bar */}
        <div style={{ flex: '1', maxWidth: '440px', position: 'relative' }}>
          <Search size={18} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
          <input
            type="text"
            placeholder="Pesquisar atrações, locais..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            style={{
              width: '100%',
              padding: '10px 16px 10px 42px',
              borderRadius: '9999px',
              border: '1px solid #cbd5e1',
              backgroundColor: '#f8fafc',
              fontSize: '14px',
              outline: 'none',
              transition: 'all 0.2s ease'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = '#2563eb';
              e.target.style.backgroundColor = '#ffffff';
              e.target.style.boxShadow = '0 0 0 3px rgba(37,99,235,0.15)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#cbd5e1';
              e.target.style.backgroundColor = '#f8fafc';
              e.target.style.boxShadow = 'none';
            }}
          />
          {searchQuery && (
            <button 
              onClick={() => onSearchChange('')}
              style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8', border: 'none', background: 'none', cursor: 'pointer' }}
            >
              <X size={16} />
            </button>
          )}
        </div>

        {/* Action Links & Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div style={{ display: 'none', mdDisplay: 'flex', alignItems: 'center', gap: '20px', fontSize: '13px', fontWeight: '500', color: '#334155' }}>
            <a href="#parceiro" onClick={(e) => { e.preventDefault(); alert("Página de Agente de Vendas em desenvolvimento"); }} style={{ textDecoration: 'none', color: '#475569' }}>Agente de Vendas</a>
            <a href="#parceiro" onClick={(e) => { e.preventDefault(); alert("Página de Seja Parceiro 360 em desenvolvimento"); }} style={{ textDecoration: 'none', color: '#475569' }}>Seja Parceiro 360</a>
            
            {/* Language Selector */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer', padding: '4px 8px', borderRadius: '6px', backgroundColor: '#f1f5f9' }}>
              <span style={{ fontSize: '13px', fontWeight: '600' }}>BR 🇧🇷</span>
            </div>
          </div>

          {/* Cart Icon */}
          <button
            onClick={onOpenCart}
            style={{
              position: 'relative',
              padding: '10px',
              borderRadius: '50%',
              backgroundColor: '#f1f5f9',
              color: '#1e293b',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: 'none',
              cursor: 'pointer'
            }}
            title="Carrinho de Compras"
          >
            <ShoppingCart size={20} />
            {cartCount > 0 && (
              <span style={{
                position: 'absolute',
                top: '-4px',
                right: '-4px',
                backgroundColor: '#ea580c',
                color: '#ffffff',
                fontSize: '11px',
                fontWeight: '700',
                borderRadius: '9999px',
                height: '18px',
                minWidth: '18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0 4px'
              }}>
                {cartCount}
              </span>
            )}
          </button>

          {/* Login Button */}
          <button
            onClick={onOpenLogin}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: '#2563eb',
              color: '#ffffff',
              padding: '10px 18px',
              borderRadius: '10px',
              fontWeight: '600',
              fontSize: '14px',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 2px 6px rgba(37,99,235,0.25)',
              transition: 'all 0.2s ease'
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#1d4ed8'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
          >
            <User size={18} />
            <span>Login</span>
          </button>
        </div>
      </div>

      {/* Category Pills Navigation Bar */}
      <div style={{ backgroundColor: '#ffffff', borderTop: '1px solid #f1f5f9' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '10px 20px', display: 'flex', alignItems: 'center', gap: '10px', overflowX: 'auto' }} className="hide-scrollbar">
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
                  gap: '8px',
                  padding: '8px 16px',
                  borderRadius: '9999px',
                  fontSize: '13px',
                  fontWeight: isActive ? '700' : '500',
                  whiteSpace: 'nowrap',
                  backgroundColor: isActive ? '#eff6ff' : '#ffffff',
                  color: isActive ? '#2563eb' : '#64748b',
                  border: isActive ? '1px solid #93c5fd' : '1px solid #e2e8f0',
                  boxShadow: isActive ? '0 2px 4px rgba(37,99,235,0.1)' : 'none',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                <IconComponent size={16} color={isActive ? '#2563eb' : '#94a3b8'} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>

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
