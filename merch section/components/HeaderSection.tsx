import React from 'react';
import { Sparkles, ShoppingBag, ShieldCheck, Truck } from 'lucide-react';

interface Props {
  brandName: string;
  storeTitle: string;
  storeSubtitle: string;
}

export const HeaderSection: React.FC<Props> = ({
  brandName,
  storeTitle,
  storeSubtitle,
}) => {
  return (
    <div className="relative w-full pt-10 pb-6 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
      <div className="relative max-w-4xl mx-auto space-y-3">
        {/* Monospaced uppercase badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1A1A1A] border border-white/10 text-gray-400 font-mono-code text-[11px] font-bold tracking-widest uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
          <span>{brandName ? `${brandName} / DROP EXCLUSIVO` : 'MERCA / DROP 01'}</span>
        </div>

        {/* Main Serif Italic Title from Bento Grid Design */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif-italic tracking-tight text-[#E5E5E5] leading-none">
          {storeTitle || 'Merca / Drop 01'}
        </h1>

        {/* Monospaced Subtitle */}
        <p className="text-xs sm:text-sm font-mono-code uppercase tracking-widest text-[#888] max-w-2xl mx-auto leading-relaxed">
          {storeSubtitle || 'Exclusive Gear via WhatsApp • Pedidos Directos'}
        </p>

        {/* Key Conversion Trust Badges */}
        <div className="pt-3 flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs font-mono-code text-gray-400">
          <div className="flex items-center space-x-2 bg-[#151515] border border-white/10 px-3.5 py-1.5 rounded-full">
            <ShieldCheck className="w-3.5 h-3.5 text-white" />
            <span className="text-[11px] uppercase tracking-wider">Calidad Algodón Pima</span>
          </div>
          <div className="flex items-center space-x-2 bg-[#151515] border border-white/10 px-3.5 py-1.5 rounded-full">
            <ShoppingBag className="w-3.5 h-3.5 text-[#25D366]" />
            <span className="text-[11px] uppercase tracking-wider text-[#25D366]">Atención WhatsApp</span>
          </div>
          <div className="flex items-center space-x-2 bg-[#151515] border border-white/10 px-3.5 py-1.5 rounded-full">
            <Truck className="w-3.5 h-3.5 text-white" />
            <span className="text-[11px] uppercase tracking-wider">Envíos Directos</span>
          </div>
        </div>
      </div>
    </div>
  );
};
