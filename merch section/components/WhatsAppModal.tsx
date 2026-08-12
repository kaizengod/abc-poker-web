import React, { useState } from 'react';
import { X, MessageCircle, ShoppingBag, ArrowRight, ShieldCheck } from 'lucide-react';
import { Product, StoreConfig } from '../types';

interface Props {
  product: Product | null;
  config: StoreConfig;
  onClose: () => void;
}

export const WhatsAppModal: React.FC<Props> = ({ product, config, onClose }) => {
  if (!product) return null;

  const [selectedSize, setSelectedSize] = useState(product.sizes[0] || 'M');
  const [selectedColor, setSelectedColor] = useState(
    product.colors[0] || { name: 'Negro', hex: '#111' }
  );
  const [quantity, setQuantity] = useState(1);
  const [customNote, setCustomNote] = useState('');

  const totalPrice = product.price * quantity;

  // Clean phone number
  const cleanPhone = config.whatsappNumber.replace(/[^0-9]/g, '');

  // Generate WhatsApp message string
  const generateMessage = () => {
    const text = `¡Hola! Quisiera realizar la compra de merchandising oficial:

• *Producto:* ${product.name}
• *Categoría:* ${product.category.toUpperCase()}
• *Talla:* ${selectedSize}
• *Color:* ${selectedColor.name}
• *Cantidad:* ${quantity}
• *Precio Unitario:* $${product.price.toFixed(2)}
• *TOTAL:* $${totalPrice.toFixed(2)}
${customNote.trim() ? `\n• *Nota Adicional:* ${customNote.trim()}` : ''}

¿Tienen disponibilidad para procesar mi pedido? Muchas gracias.`;

    return encodeURIComponent(text);
  };

  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${generateMessage()}`;

  const handleSend = () => {
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-lg bg-[#151515] border border-white/10 rounded-3xl p-6 shadow-2xl space-y-5 text-white overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#222] border border-white/10 text-gray-400 hover:text-white transition cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-2xl bg-[#25D366] flex items-center justify-center text-black shadow-lg shadow-[#25D366]/20">
            <MessageCircle className="w-5 h-5 fill-black" />
          </div>
          <div>
            <h3 className="font-serif-italic text-2xl font-bold text-[#E5E5E5]">
              Confirmar Pedido WhatsApp
            </h3>
            <p className="text-xs font-mono-code text-gray-400 uppercase tracking-wider">
              Atención directa y envío personalizado
            </p>
          </div>
        </div>

        {/* Selected Product Card Summary */}
        <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-4 flex items-center space-x-4">
          <div className="w-16 h-16 rounded-xl bg-[#1A1A1A] border border-white/10 flex items-center justify-center text-white font-extrabold text-xl overflow-hidden shrink-0">
            {product.imageUrl ? (
              <img src={product.imageUrl} alt={product.name} className="w-full h-full object-contain" />
            ) : (
              <ShoppingBag className="w-6 h-6 text-gray-400" />
            )}
          </div>
          <div className="flex-1">
            <span className="text-[10px] font-mono-code text-[#25D366] uppercase font-bold tracking-widest">
              Línea {product.category}
            </span>
            <h4 className="font-serif-italic text-xl font-bold text-white">{product.name}</h4>
            <span className="text-sm font-mono-code font-extrabold text-white">
              ${product.price.toFixed(2)}
            </span>
          </div>
        </div>

        {/* Customization Options */}
        <div className="space-y-4 text-xs font-mono-code">
          {/* Talla Selector */}
          <div>
            <label className="block text-gray-400 font-bold uppercase mb-1.5 text-[11px] tracking-wider">
              1. Selecciona Talla:
            </label>
            <div className="flex items-center space-x-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-3 py-1.5 rounded-full font-bold transition cursor-pointer ${
                    selectedSize === size
                      ? 'bg-white text-black font-extrabold'
                      : 'bg-[#222] text-gray-400 hover:text-white border border-white/5'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color Selector */}
          {product.colors && product.colors.length > 0 && (
            <div>
              <label className="block text-gray-400 font-bold uppercase mb-1.5 text-[11px] tracking-wider">
                2. Selecciona Color ({selectedColor.name}):
              </label>
              <div className="flex items-center space-x-2">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color)}
                    className={`flex items-center space-x-2 px-3 py-1.5 rounded-full border transition cursor-pointer ${
                      selectedColor.name === color.name
                        ? 'bg-white text-black font-bold border-white'
                        : 'bg-[#222] border-white/10 text-gray-400'
                    }`}
                  >
                    <span
                      className="w-3 h-3 rounded-full border border-gray-600"
                      style={{ backgroundColor: color.hex }}
                    />
                    <span>{color.name}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Cantidad Selector */}
          <div>
            <label className="block text-gray-400 font-bold uppercase mb-1.5 text-[11px] tracking-wider">
              3. Cantidad:
            </label>
            <div className="flex items-center space-x-3">
              <div className="flex items-center bg-[#0A0A0A] border border-white/10 rounded-full p-1">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-8 h-8 rounded-full bg-[#222] text-gray-300 font-bold hover:bg-[#333] transition"
                >
                  -
                </button>
                <span className="w-10 text-center font-extrabold text-sm text-white font-mono-code">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-8 h-8 rounded-full bg-[#222] text-gray-300 font-bold hover:bg-[#333] transition"
                >
                  +
                </button>
              </div>
              <span className="text-gray-400 text-xs">
                Total estimado: <strong className="text-white font-extrabold text-sm font-mono-code">${totalPrice.toFixed(2)}</strong>
              </span>
            </div>
          </div>

          {/* Custom Note Input */}
          <div>
            <label className="block text-gray-400 font-bold uppercase mb-1.5 text-[11px] tracking-wider">
              4. Dirección / Nota Especial (Opcional):
            </label>
            <input
              type="text"
              value={customNote}
              onChange={(e) => setCustomNote(e.target.value)}
              placeholder="Ej: Ciudad de envío, indicación de entrega..."
              className="w-full bg-[#0A0A0A] border border-white/10 rounded-2xl px-4 py-2.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-white/30"
            />
          </div>
        </div>

        {/* Send Button */}
        <div className="pt-3 border-t border-white/10 space-y-2">
          <button
            onClick={handleSend}
            className="w-full py-4 px-5 rounded-full bg-[#25D366] text-black font-black text-xs uppercase tracking-wider flex items-center justify-center space-x-2 shadow-xl shadow-[#25D366]/20 hover:scale-[1.01] active:scale-[0.99] transition cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 fill-black" />
            <span>Enviar Pedido por WhatsApp (+{cleanPhone})</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </button>

          <p className="text-[11px] font-mono-code text-gray-500 text-center flex items-center justify-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-[#25D366]" />
            Abre tu aplicación de WhatsApp con el mensaje pre-completado.
          </p>
        </div>
      </div>
    </div>
  );
};
