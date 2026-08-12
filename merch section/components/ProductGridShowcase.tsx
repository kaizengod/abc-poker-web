import React from 'react';
import { Product, ProductCategory } from '../types';
import { ProductCard } from './ProductCard';
import { MessageCircle, Sparkles, Shield, Globe, ArrowUpRight } from 'lucide-react';

interface Props {
  products: Product[];
  activeCategory: ProductCategory;
  onSelectCategory: (cat: ProductCategory) => void;
  showEmptyPlaceholders: boolean;
  onSelectForOrder: (product: Product) => void;
  onUpdateImage?: (productId: string, newUrl: string) => void;
}

export const ProductGridShowcase: React.FC<Props> = ({
  products,
  activeCategory,
  onSelectCategory,
  showEmptyPlaceholders,
  onSelectForOrder,
  onUpdateImage,
}) => {
  // Filter products by selected category
  const filteredProducts = activeCategory === 'todos'
    ? products
    : products.filter((p) => p.category === activeCategory);

  // Identify featured product (e.g., 'The As' or first featured)
  const featuredProduct = filteredProducts.find((p) => p.isFeatured) || filteredProducts[0];
  const remainingProducts = filteredProducts.filter((p) => p.id !== featuredProduct?.id);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-6">
      
      {/* Bento Grid Main Layout */}
      <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-5">
        
        {/* HERO BENTO ITEM: Col Span 6 (Matching Design HTML Hero Card) */}
        {featuredProduct && (
          <div className="col-span-12 lg:col-span-6 bg-[#151515] rounded-3xl border border-white/10 relative overflow-hidden group flex flex-col justify-between p-8 min-h-[420px] hover:border-white/20 transition-all duration-300">
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10 pointer-events-none" />

            {/* Featured Badge */}
            <div className="relative z-20 flex justify-between items-start">
              <span className="bg-white text-black px-3.5 py-1 text-[10px] font-mono-code font-black uppercase tracking-wider rounded-full shadow-md">
                ★ {featuredProduct.badge || 'FEATURED DROP'}
              </span>
              <span className="text-lg font-extrabold text-white font-mono-code bg-[#0A0A0A]/80 border border-white/10 px-4 py-1 rounded-full">
                ${featuredProduct.price.toFixed(2)}
              </span>
            </div>

            {/* Middle Image or Placeholder */}
            <div className="relative z-10 my-4 flex items-center justify-center h-48">
              {featuredProduct.imageUrl && !showEmptyPlaceholders ? (
                <img
                  src={featuredProduct.imageUrl}
                  alt={featuredProduct.name}
                  className="max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className="w-full h-full border-2 border-dashed border-white/10 rounded-2xl flex flex-col items-center justify-center p-4">
                  <span className="text-xs font-mono-code text-gray-400 uppercase tracking-widest">[ Foto Principal: {featuredProduct.name} ]</span>
                  <p className="text-[10px] font-mono-code text-gray-600 mt-1">Haz clic en Cargar Foto para previsualizar</p>
                </div>
              )}
            </div>

            {/* Bottom Hero Details & WhatsApp CTA */}
            <div className="relative z-20 pt-4">
              <span className="text-[10px] font-mono-code text-[#25D366] uppercase tracking-widest block mb-1">
                Línea {featuredProduct.category.toUpperCase()} / Drop Exclusivo
              </span>
              <h2 className="text-4xl sm:text-6xl font-serif-italic leading-tight text-white mb-2">
                {featuredProduct.name}
              </h2>
              <p className="text-xs sm:text-sm text-gray-400 max-w-md mb-6 leading-relaxed">
                {featuredProduct.description}
              </p>

              <button
                onClick={() => onSelectForOrder(featuredProduct)}
                className="inline-flex items-center gap-3 bg-[#25D366] text-black px-7 py-3.5 rounded-full font-bold text-xs sm:text-sm uppercase tracking-wider hover:scale-105 active:scale-95 transition-all shadow-xl shadow-[#25D366]/20 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-black" />
                <span>Consultar vía WhatsApp</span>
              </button>
            </div>
          </div>
        )}

        {/* SECONDARY BENTO ITEMS (Col Span 3 Each) */}
        {remainingProducts.slice(0, 2).map((prod) => (
          <div key={prod.id} className="col-span-12 sm:col-span-6 lg:col-span-3">
            <ProductCard
              product={prod}
              showEmptyPlaceholders={showEmptyPlaceholders}
              onSelectForOrder={onSelectForOrder}
              onUpdateImage={onUpdateImage}
            />
          </div>
        ))}

        {/* LIGHT CONTRAST BENTO BANNER CARD (Col Span 6 / Bottom Block like Design HTML) */}
        <div className="col-span-12 lg:col-span-6 bg-[#E5E5E5] text-black rounded-3xl p-8 flex flex-col sm:flex-row items-center gap-6 justify-between border border-white/20 shadow-xl">
          <div className="flex-1 space-y-4">
            <span className="text-[10px] font-mono-code uppercase font-bold tracking-widest bg-black/10 px-3 py-1 rounded-full text-black">
              Atención Directa
            </span>
            <h3 className="text-black text-2xl sm:text-3xl font-serif-italic leading-tight">
              Personaliza tu pedido directamente con nosotros.
            </h3>
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="bg-black/5 p-3.5 rounded-2xl">
                <p className="text-black font-extrabold text-base mb-0 font-mono-code">24/7</p>
                <p className="text-black/60 text-[10px] uppercase font-mono-code font-bold tracking-wider">Atención WA</p>
              </div>
              <div className="bg-black/5 p-3.5 rounded-2xl">
                <p className="text-black font-extrabold text-base mb-0 font-mono-code">Nacional</p>
                <p className="text-black/60 text-[10px] uppercase font-mono-code font-bold tracking-wider">Envíos Directos</p>
              </div>
            </div>
          </div>

          <div className="w-full sm:w-auto flex flex-col gap-2 shrink-0">
            <button
              onClick={() => onSelectCategory('todos')}
              className="w-full sm:w-44 bg-black text-white py-3.5 px-5 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-neutral-800 transition cursor-pointer"
            >
              Ver Catálogo
            </button>
            <button
              onClick={() => onSelectCategory('franelas')}
              className="w-full sm:w-44 border border-black/20 text-black py-3.5 px-5 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-black/5 transition cursor-pointer"
            >
              Guía de Tallas
            </button>
          </div>
        </div>

        {/* REMAINING CATALOG PRODUCTS IN BENTO GRID */}
        {remainingProducts.slice(2).map((prod) => (
          <div key={prod.id} className="col-span-12 sm:col-span-6 lg:col-span-3">
            <ProductCard
              product={prod}
              showEmptyPlaceholders={showEmptyPlaceholders}
              onSelectForOrder={onSelectForOrder}
              onUpdateImage={onUpdateImage}
            />
          </div>
        ))}

      </div>

    </div>
  );
};
