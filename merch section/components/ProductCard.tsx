import React, { useState } from 'react';
import { Heart, MessageCircle, Upload, Image as ImageIcon } from 'lucide-react';
import { Product } from '../types';

interface Props {
  product: Product;
  showEmptyPlaceholders: boolean;
  onSelectForOrder: (product: Product) => void;
  onUpdateImage?: (productId: string, newUrl: string) => void;
  isFeaturedHero?: boolean;
}

export const ProductCard: React.FC<Props> = ({
  product,
  showEmptyPlaceholders,
  onSelectForOrder,
  onUpdateImage,
  isFeaturedHero = false,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] || 'M');
  const [selectedColor, setSelectedColor] = useState(product.colors[0] || { name: 'Negro', hex: '#111' });

  // Handle direct custom image upload for this card
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && onUpdateImage) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          onUpdateImage(product.id, event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      className={`group relative flex flex-col justify-between bg-[#151515] rounded-3xl border border-white/10 hover:border-white/20 p-6 transition-all duration-300 hover:shadow-2xl hover:shadow-black/60 ${
        isFeaturedHero ? 'lg:col-span-2 lg:row-span-2 p-8 bg-[#181818]' : ''
      }`}
    >
      {/* Top Bar: Badge Tag & Price/Favorite */}
      <div className="flex items-center justify-between mb-4 z-10">
        <div className="flex items-center space-x-2">
          {product.badge ? (
            <span className="bg-white text-black px-3 py-1 text-[10px] font-black uppercase tracking-tighter rounded-full shadow-sm">
              {product.badge}
            </span>
          ) : (
            <span className="bg-[#262626] text-gray-300 px-3 py-1 text-[10px] font-mono-code font-bold uppercase tracking-widest rounded-full">
              {product.category.toUpperCase()}
            </span>
          )}
        </div>

        <div className="flex items-center space-x-2">
          <span className="text-sm font-extrabold text-[#E5E5E5] font-mono-code bg-[#222] px-3 py-1 rounded-full border border-white/5">
            ${product.price.toFixed(2)}
          </span>
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className={`p-2 rounded-full border transition ${
              isFavorite
                ? 'bg-red-950/80 border-red-500/50 text-red-400'
                : 'bg-[#222] border-white/5 text-gray-400 hover:text-white'
            }`}
            title="Favorito"
          >
            <Heart className={`w-3.5 h-3.5 ${isFavorite ? 'fill-red-500' : ''}`} />
          </button>
        </div>
      </div>

      {/* Main Image Area */}
      <div className={`relative w-full rounded-2xl bg-[#0A0A0A] border border-dashed border-white/10 group-hover:border-white/20 flex flex-col items-center justify-center overflow-hidden mb-5 p-4 transition ${
        isFeaturedHero ? 'h-64 sm:h-80' : 'h-48 sm:h-56'
      }`}>
        {product.imageUrl && !showEmptyPlaceholders ? (
          <div className="relative w-full h-full flex items-center justify-center">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        ) : (
          /* Empty Placeholder Box with Stylized Frame & Direct Photo Upload Option */
          <div className="w-full h-full flex flex-col items-center justify-center text-center p-3 relative">
            <div className="relative z-10 flex flex-col items-center">
              <div className={`rounded-2xl bg-[#1A1A1A] border border-white/10 flex items-center justify-center text-gray-400 mb-2 shadow-inner ${
                isFeaturedHero ? 'w-14 h-14' : 'w-10 h-10'
              }`}>
                <ImageIcon className={isFeaturedHero ? 'w-7 h-7' : 'w-5 h-5'} />
              </div>

              <span className="text-xs font-mono-code text-gray-300 mb-0.5 uppercase tracking-wider">
                [ Espacio para Foto ]
              </span>
              <p className="text-[10px] font-mono-code text-gray-500 mb-3">
                {product.category === 'franelas'
                  ? 'Franela / Foto'
                  : product.category === 'gorras'
                  ? 'Gorra / Foto'
                  : 'Hoodie / Foto'}
              </p>

              <label className="cursor-pointer px-3 py-1.5 rounded-full bg-[#222] hover:bg-white hover:text-black border border-white/10 text-gray-300 text-[11px] font-bold uppercase tracking-wider flex items-center space-x-1.5 transition">
                <Upload className="w-3 h-3" />
                <span>Cargar Foto</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>
            </div>
          </div>
        )}
      </div>

      {/* Product Information */}
      <div className="space-y-3">
        <div>
          <h3 className={`font-serif-italic font-bold text-[#E5E5E5] group-hover:text-white transition-colors leading-tight ${
            isFeaturedHero ? 'text-3xl sm:text-5xl mb-2' : 'text-2xl mb-1'
          }`}>
            {product.name}
          </h3>
          <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Options Row (Colors & Sizes) */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-xs">
          {/* Available Sizes Pills */}
          <div className="flex items-center space-x-1">
            <span className="text-[10px] font-mono-code text-gray-500 uppercase mr-1">Talla:</span>
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-2 py-0.5 rounded text-[10px] font-mono-code font-bold transition ${
                  selectedSize === size
                    ? 'bg-white text-black'
                    : 'bg-[#222] text-gray-400 hover:text-white border border-white/5'
                }`}
              >
                {size}
              </button>
            ))}
          </div>

          {/* Color swatches preview */}
          {product.colors && product.colors.length > 0 && (
            <div className="flex items-center space-x-1">
              {product.colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color)}
                  className={`w-3.5 h-3.5 rounded-full border transition ${
                    selectedColor.name === color.name
                      ? 'ring-2 ring-white scale-110'
                      : 'border-white/20 opacity-70 hover:opacity-100'
                  }`}
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                />
              ))}
            </div>
          )}
        </div>

        {/* WhatsApp Conversion Button */}
        <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-3">
          <button
            onClick={() => onSelectForOrder(product)}
            className="w-full py-3 px-5 rounded-full bg-[#25D366] text-black font-extrabold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 shadow-lg hover:scale-[1.02] active:scale-[0.98] transition cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-black" />
            <span>Consultar vía WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
};
