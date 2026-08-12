import React from 'react';
import { ShoppingBag, MessageCircle, Sliders, Sparkles } from 'lucide-react';

interface Props {
  brandName: string;
  whatsappNumber: string;
  onOpenSettings: () => void;
  cartCount: number;
}

export const WebsiteHeaderPreview: React.FC<Props> = ({
  brandName,
  whatsappNumber,
  onOpenSettings,
  cartCount,
}) => {
  return (
    <header className="w-full bg-[#0A0A0A]/95 backdrop-blur-md border-b border-white/10 sticky top-0 z-40 px-4 lg:px-8 py-4 text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo / Existing Site Identity */}
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-2xl bg-[#E5E5E5] flex items-center justify-center font-serif-italic font-extrabold text-xl text-black shadow-md">
            {brandName.charAt(0) || 'M'}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-serif-italic text-lg tracking-tight text-[#E5E5E5]">
                {brandName || 'MERCA / DROP 01'}
              </span>
              <span className="text-[10px] font-mono-code px-2 py-0.5 rounded-full bg-[#1A1A1A] border border-white/10 text-gray-400 uppercase tracking-widest">
                Exclusive Drop
              </span>
            </div>
            <p className="text-[11px] font-mono-code text-gray-500 uppercase tracking-widest hidden sm:block">
              Exclusive Gear via WhatsApp
            </p>
          </div>
        </div>

        {/* Existing Website Nav Links */}
        <nav className="hidden md:flex items-center space-x-6 text-xs font-mono-code uppercase tracking-wider text-gray-400">
          <a href="#inicio" className="hover:text-white transition-colors">Inicio</a>
          <a href="#equipos" className="hover:text-white transition-colors">Colecciones</a>
          <a href="#merch" className="text-white font-bold border-b-2 border-white pb-0.5">Merca Shop</a>
          <a href="#contacto" className="hover:text-white transition-colors">Comunidad</a>
        </nav>

        {/* Action Controls & Settings */}
        <div className="flex items-center space-x-3">
          {/* Quick WhatsApp Info */}
          <a
            href={`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] text-xs font-bold hover:bg-[#25D366]/20 transition"
            title="Número configurado para recibir pedidos"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-[#25D366]/30" />
            <span className="font-mono-code text-[11px]">+ {whatsappNumber}</span>
          </a>

          {/* Cart / Orders Badge */}
          <div className="relative flex items-center justify-center p-2 rounded-full bg-[#1A1A1A] border border-white/10 text-gray-300 hover:text-white">
            <ShoppingBag className="w-4 h-4 text-white" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#25D366] text-black font-extrabold text-[10px] flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </div>

          {/* Integration Config Drawer Trigger */}
          <button
            onClick={onOpenSettings}
            className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-[#E5E5E5] text-black text-xs font-bold uppercase tracking-wider hover:bg-white transition cursor-pointer"
            title="Configurar sección (WhatsApp, Títulos, Fotos)"
          >
            <Sliders className="w-3.5 h-3.5 text-black" />
            <span className="hidden sm:inline">Ajustes</span>
          </button>
        </div>
      </div>
    </header>
  );
};
