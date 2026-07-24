import React, { useState } from 'react';
import { X, SlidersHorizontal, DollarSign, Accessibility, Car, Wifi, Baby, Sun, Check, RefreshCw } from 'lucide-react';

export default function FilterModal({ isOpen, onClose, onApplyFilters, currentFilters }) {
  const [priceFilter, setPriceFilter] = useState(currentFilters?.price || 'all');
  const [isFreeOnly, setIsFreeOnly] = useState(currentFilters?.isFree || false);
  const [accessibility, setAccessibility] = useState(currentFilters?.accessibility || false);
  const [parking, setParking] = useState(currentFilters?.parking || false);
  const [kidsFriendly, setKidsFriendly] = useState(currentFilters?.kidsFriendly || false);
  const [wifi, setWifi] = useState(currentFilters?.wifi || false);

  if (!isOpen) return null;

  const handleClear = () => {
    setPriceFilter('all');
    setIsFreeOnly(false);
    setAccessibility(false);
    setParking(false);
    setKidsFriendly(false);
    setWifi(false);
  };

  const handleApply = () => {
    onApplyFilters({
      price: priceFilter,
      isFree: isFreeOnly,
      accessibility,
      parking,
      kidsFriendly,
      wifi
    });
    onClose();
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 3000,
      backgroundColor: 'rgba(15, 23, 42, 0.75)',
      backdropFilter: 'blur(6px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '16px'
    }}>
      <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '24px',
        maxWidth: '540px',
        width: '100%',
        maxHeight: '90vh',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.35)',
        border: '1px solid #e2e8f0'
      }}>
        {/* Header */}
        <div style={{
          padding: '20px 24px',
          borderBottom: '1px solid #e2e8f0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: '#f8fafc'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              backgroundColor: '#00a896',
              color: '#ffffff',
              padding: '8px',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <SlidersHorizontal size={18} />
            </div>
            <div>
              <h3 style={{ fontSize: '18px', fontWeight: '900', color: '#0f172a' }}>
                Filtros Avançados 360°
              </h3>
              <p style={{ fontSize: '12px', color: '#64748b' }}>
                Refine sua busca por orçamento, acessibilidade e comodidades
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              color: '#64748b',
              cursor: 'pointer',
              padding: '6px',
              borderRadius: '50%'
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div style={{ padding: '24px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          
          {/* Price Range Filter */}
          <div>
            <label style={{ fontSize: '13px', fontWeight: '800', color: '#0f172a', display: 'block', marginBottom: '10px' }}>
              Faixa de Preço
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
              {[
                { id: 'all', label: 'Todos os Valores' },
                { id: 'free', label: '100% Gratuito' },
                { id: 'under50', label: 'Até R$ 50,00' },
                { id: 'under150', label: 'Até R$ 150,00' },
              ].map((p) => (
                <button
                  key={p.id}
                  onClick={() => {
                    setPriceFilter(p.id);
                    if (p.id === 'free') setIsFreeOnly(true);
                  }}
                  style={{
                    padding: '10px 14px',
                    borderRadius: '12px',
                    fontSize: '12px',
                    fontWeight: priceFilter === p.id ? '800' : '600',
                    backgroundColor: priceFilter === p.id ? '#00a896' : '#f8fafc',
                    color: priceFilter === p.id ? '#ffffff' : '#475569',
                    border: priceFilter === p.id ? '1px solid #00a896' : '1px solid #e2e8f0',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    textAlign: 'left'
                  }}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          {/* Amenities & Accessibility Checklist */}
          <div>
            <label style={{ fontSize: '13px', fontWeight: '800', color: '#0f172a', display: 'block', marginBottom: '10px' }}>
              Comodidades & Infraestrutura
            </label>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              
              <label style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 14px',
                borderRadius: '12px',
                backgroundColor: accessibility ? '#f0fdf4' : '#f8fafc',
                border: accessibility ? '1px solid #22c55e' : '1px solid #e2e8f0',
                cursor: 'pointer'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Accessibility size={18} color="#2563eb" />
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: '700', color: '#0f172a' }}>Acessibilidade PWD</div>
                    <div style={{ fontSize: '11px', color: '#64748b' }}>Rampas, elevadores e banheiros adaptados</div>
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={accessibility}
                  onChange={(e) => setAccessibility(e.target.checked)}
                  style={{ width: '18px', height: '18px', accentColor: '#00a896', cursor: 'pointer' }}
                />
              </label>

              <label style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 14px',
                borderRadius: '12px',
                backgroundColor: parking ? '#f0fdf4' : '#f8fafc',
                border: parking ? '1px solid #22c55e' : '1px solid #e2e8f0',
                cursor: 'pointer'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Car size={18} color="#00a896" />
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: '700', color: '#0f172a' }}>Estacionamento no Local</div>
                    <div style={{ fontSize: '11px', color: '#64748b' }}>Vagas próprias ou convênio com valete</div>
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={parking}
                  onChange={(e) => setParking(e.target.checked)}
                  style={{ width: '18px', height: '18px', accentColor: '#00a896', cursor: 'pointer' }}
                />
              </label>

              <label style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 14px',
                borderRadius: '12px',
                backgroundColor: kidsFriendly ? '#f0fdf4' : '#f8fafc',
                border: kidsFriendly ? '1px solid #22c55e' : '1px solid #e2e8f0',
                cursor: 'pointer'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Baby size={18} color="#ea580c" />
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: '700', color: '#0f172a' }}>Ideal para Crianças & Família</div>
                    <div style={{ fontSize: '11px', color: '#64748b' }}>Área infantil, fraldário e brinquedoteca</div>
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={kidsFriendly}
                  onChange={(e) => setKidsFriendly(e.target.checked)}
                  style={{ width: '18px', height: '18px', accentColor: '#00a896', cursor: 'pointer' }}
                />
              </label>

              <label style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 14px',
                borderRadius: '12px',
                backgroundColor: wifi ? '#f0fdf4' : '#f8fafc',
                border: wifi ? '1px solid #22c55e' : '1px solid #e2e8f0',
                cursor: 'pointer'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Wifi size={18} color="#0284c7" />
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: '700', color: '#0f172a' }}>Wi-Fi Gratuito</div>
                    <div style={{ fontSize: '11px', color: '#64748b' }}>Internet fibra de alta velocidade no local</div>
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={wifi}
                  onChange={(e) => setWifi(e.target.checked)}
                  style={{ width: '18px', height: '18px', accentColor: '#00a896', cursor: 'pointer' }}
                />
              </label>

            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div style={{
          padding: '16px 24px',
          borderTop: '1px solid #e2e8f0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: '#f8fafc'
        }}>
          <button
            onClick={handleClear}
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              color: '#64748b',
              fontSize: '13px',
              fontWeight: '700',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <RefreshCw size={14} />
            <span>Limpar Filtros</span>
          </button>

          <button
            onClick={handleApply}
            style={{
              backgroundColor: '#00a896',
              color: '#ffffff',
              fontWeight: '800',
              fontSize: '13px',
              padding: '12px 24px',
              borderRadius: '12px',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 4px 14px rgba(0,168,150,0.35)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <Check size={16} />
            <span>Aplicar Filtros</span>
          </button>
        </div>

      </div>
    </div>
  );
}
