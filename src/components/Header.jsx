import React, { useState } from 'react';
import Logo from './Logo';
import { 
  Search, User, ShoppingCart, Ticket, Percent, Tag, Trees, 
  Compass, Utensils, Music, Sparkles, Globe, X, Menu, PhoneCall, Building2, UserCheck
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
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 1000, boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
      
      {/* Top Utility Bar - Decolar Inspired */}
      <div style={{ backgroundColor: '#0f172a', color: '#cbd5e1', fontSize: '12px', padding: '6px 20px', borderBottom: '1px solid #1e293b' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <span style={{ color: '#00a896', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Sparkles size={14} />
              <span>Portal Oficial Curitiba 360°</span>
            </span>
            <span style={{ display: 'none', mdDisplay: 'inline', color: '#64748b' }}>|</span>
            <a href="#parceiro" onClick={(e) => { e.preventDefault(); alert("Formulário de Seja Parceiro Comercial 360° em breve!"); }} style={{ color: '#94a3b8', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Building2 size={13} color="#00a896" />
              <span>Seja Parceiro 360</span>
            </a>
            <a href="#agencia" onClick={(e) => { e.preventDefault(); alert("Painel de Agente de Vendas em breve!"); }} style={{ color: '#94a3b8', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <UserCheck size={13} color="#2563eb" />
              <span>Agente de Vendas</span>
            </a>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <a href="https://wa.me/5541999999999" target="_blank" rel="noreferrer" style={{ color: '#22c55e', textDecoration: 'none', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <PhoneCall size={13} />
              <span>Suporte 24h</span>
            </a>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', backgroundColor: '#1e293b', padding: '2px 8px', borderRadius: '4px', color: '#ffffff', fontWeight: '600' }}>
              <span>🇧🇷 BR (R$)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar Tier */}
      <div style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #e2e8f0', padding: '14px 20px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '20px' }}>
          
          {/* Decolar-Style Prominent Brand Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <a href="#" onClick={(e) => { e.preventDefault(); onClearFilters(); }} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
              <Logo size="md" />
            </a>
          </div>

          {/* Central Decolar-Style Search Input */}
          <div style={{ flex: '1', maxWidth: '520px', position: 'relative' }}>
            <Search size={19} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#00a896' }} />
            <input
              type="text"
              placeholder="O que você quer fazer em Curitiba? Pesquise parques, trem, shows..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 18px 12px 46px',
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
                style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8', border: 'none', background: 'none', cursor: 'pointer' }}
              >
                <X size={18} />
              </button>
            )}
          </div>

          {/* User & Cart Action Bar */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            
            {/* Cart Button */}
            <button
              onClick={onOpenCart}
              style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 16px',
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
              <span style={{ display: 'none', smDisplay: 'inline' }}>Meu Carrinho</span>
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

            {/* Login / Minha Conta Button */}
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

      {/* Category Navigation Bar */}
      <div style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #f1f5f9' }}>
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
                  border: isActive ? '2px solid #2563eb' : '1px solid #e2e8f0',
                  boxShadow: isActive ? '0 2px 6px rgba(37,99,235,0.15)' : 'none',
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

