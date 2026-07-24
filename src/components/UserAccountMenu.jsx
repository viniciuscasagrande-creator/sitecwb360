import React, { useState, useRef, useEffect } from 'react';
import { User, Heart, Package, Tag, LogIn, ChevronDown, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function UserAccountMenu({ onOpenLogin, onOpenCart, favoritesCount = 0 }) {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="relative inline-block">
      {/* Prominent User Profile Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2.5 h-11 px-4 rounded-full bg-slate-900 text-white font-extrabold text-xs border-2 border-emerald-500 hover:bg-slate-800 transition-all shadow-md cursor-pointer outline-none"
      >
        {/* Avatar Circle */}
        <div className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center font-black text-xs shadow-inner">
          V
        </div>

        <div className="flex flex-col text-left">
          <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider leading-none">Membro VIP</span>
          <span className="text-xs font-black text-white leading-tight">Olá, Vinicius</span>
        </div>

        <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Popover Menu */}
      {isOpen && (
        <div className="absolute right-0 top-13 z-50 w-72 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-fade-in">
          
          {/* User Header Info Card */}
          <div className="p-4 bg-slate-900 text-white border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-black text-sm shadow-md">
                V
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-black text-white truncate">Vinicius Casagrande</div>
                <div className="text-xs text-slate-400 truncate">vinicius@curitiba360.com.br</div>
              </div>
            </div>
            
            <div className="mt-3 pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
              <span className="text-emerald-400 font-bold flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                Selo de Membro Oficial 360°
              </span>
              <span className="bg-emerald-500/20 text-emerald-300 font-extrabold px-2 py-0.5 rounded text-[10px]">
                NÍVEL VIP
              </span>
            </div>
          </div>

          {/* Quick Menu Options */}
          <div className="p-2 space-y-1">
            
            <button
              onClick={() => {
                setIsOpen(false);
                if (onOpenCart) onOpenCart();
              }}
              className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 text-slate-800 font-extrabold text-xs transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-red-50 text-red-500">
                  <Heart className="w-4 h-4 fill-red-500" />
                </div>
                <span>Meus Favoritos</span>
              </div>
              <span className="bg-red-100 text-red-700 font-black px-2 py-0.5 rounded-full text-[10px]">
                {favoritesCount || 12}
              </span>
            </button>

            <button
              onClick={() => {
                setIsOpen(false);
                if (onOpenCart) onOpenCart();
              }}
              className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 text-slate-800 font-extrabold text-xs transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-blue-50 text-blue-600">
                  <Package className="w-4 h-4" />
                </div>
                <span>Meus Pedidos & Ingressos</span>
              </div>
              <span className="bg-blue-100 text-blue-700 font-black px-2 py-0.5 rounded-full text-[10px]">
                2 ativos
              </span>
            </button>

            <button
              onClick={() => {
                setIsOpen(false);
                if (onOpenCart) onOpenCart();
              }}
              className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-emerald-50 text-slate-800 font-extrabold text-xs transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-emerald-100 text-emerald-700">
                  <Tag className="w-4 h-4" />
                </div>
                <span>Meus Cupons de Desconto</span>
              </div>
              <span className="bg-emerald-600 text-white font-black px-2 py-0.5 rounded-full text-[10px]">
                15% OFF
              </span>
            </button>

          </div>

          {/* Benefits Footer */}
          <div className="p-3 bg-slate-50 border-t border-slate-200">
            <div className="text-[11px] font-bold text-slate-600 mb-1">
              ★ Benefícios Ativos da Sua Conta:
            </div>
            <ul className="text-[10px] text-slate-500 space-y-1">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3 h-3 text-emerald-600 flex-shrink-0" />
                <span>Cashback garantido em passeios e hotéis</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3 h-3 text-emerald-600 flex-shrink-0" />
                <span>Atendimento prioritário no concierge turistico</span>
              </li>
            </ul>
          </div>

        </div>
      )}
    </div>
  );
}
