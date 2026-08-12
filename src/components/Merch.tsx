import React, { useState } from 'react';
import { MERCH_ITEMS, CLUB_INFO } from '../data/pokerData';
import { MerchItem } from '../types';
import { ShoppingBag, MessageCircle, Sparkles, Check, ChevronRight, Tag, ShieldCheck } from 'lucide-react';

export const Merch: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [selectedItem, setSelectedItem] = useState<MerchItem | null>(null);
  const [selectedSize, setSelectedSize] = useState<string>('M');
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);

  const categories = [
    { id: 'todos', label: 'Toda la Merch' },
    { id: 'ropa', label: 'Ropa & Hoodies' },
    { id: 'chips', label: 'Sets de Fichas' },
    { id: 'naipes', label: 'Naipes' },
    { id: 'accesorios', label: 'Accesorios' },
  ];

  const filteredItems = MERCH_ITEMS.filter(
    (item) => selectedCategory === 'todos' || item.category === selectedCategory
  );

  const handleOpenItem = (item: MerchItem) => {
    setSelectedItem(item);
    if (item.sizes && item.sizes.length > 0) setSelectedSize(item.sizes[0]);
    if (item.colorOptions && item.colorOptions.length > 0) setSelectedColor(item.colorOptions[0]);
    setQuantity(1);
  };

  const handleWhatsAppOrder = (item: MerchItem) => {
    const sizeText = item.sizes ? ` | Talla: ${selectedSize}` : '';
    const colorText = item.colorOptions ? ` | Color: ${selectedColor}` : '';
    const totalPrice = (item.price * quantity).toFixed(2);

    const messageText = `Hola ABC Poker! Deseo comprar el producto oficial de la tienda:\n\n` +
      `📦 Producto: ${item.name}\n` +
      `💰 Precio Unitario: $${item.price.toFixed(2)}\n` +
      `🔢 Cantidad: ${quantity}${sizeText}${colorText}\n` +
      `💵 Total Estimado: $${totalPrice}\n\n` +
      `Por favor indíquenme los métodos de pago disponibles en Ecuador. ¡Gracias!`;

    const url = `https://wa.me/${CLUB_INFO.whatsappNumber}?text=${encodeURIComponent(messageText)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="merch" className="py-24 bg-slate-950 relative overflow-hidden border-t border-blue-500/10">
      {/* Background glow illumination */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-96 bg-gradient-to-r from-blue-600/10 via-cyan-500/15 to-purple-600/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/40 mb-4">
            <ShoppingBag className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-black tracking-widest text-cyan-300 uppercase">
              TIENDA OFICIAL CLUB
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            MERCH EXCLUSIVA <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-amber-300 bg-clip-text text-transparent">ABC POKER</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 mb-2">
            Vístete con los colores del club. Todos los pedidos y pagos se realizan de forma directa y segura a través de <strong className="text-emerald-400">WhatsApp</strong>.
          </p>

          <p className="text-xs text-amber-300 font-mono bg-amber-500/10 inline-block px-4 py-1.5 rounded-full border border-amber-400/30">
            ★ Envíos a todo el Ecuador • Pago ContraEntrega o Transferencia
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-[0_0_20px_rgba(0,180,255,0.4)]'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl overflow-hidden bg-slate-900/90 border border-blue-500/20 hover:border-cyan-400/60 shadow-xl hover:shadow-[0_0_30px_rgba(0,180,255,0.2)] transition-all flex flex-col justify-between group"
            >
              {/* Product Preview Header Box */}
              <div className="p-6 bg-gradient-to-b from-slate-950 via-slate-900 to-blue-950/40 relative flex flex-col items-center justify-center h-52 border-b border-slate-800">
                {/* Tag */}
                {item.tag && (
                  <span className="absolute top-3 left-3 text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/40">
                    {item.tag}
                  </span>
                )}

                {/* Stock badge */}
                <span className="absolute top-3 right-3 text-[10px] font-bold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30">
                  {item.stock}
                </span>

                {/* Creative Stylized Visual Icon Graphic */}
                <div className="w-24 h-24 rounded-full bg-slate-900 border-2 border-cyan-400/30 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                  {item.category === 'ropa' && <span className="text-5xl select-none">👕</span>}
                  {item.category === 'chips' && <span className="text-5xl select-none">🪙</span>}
                  {item.category === 'naipes' && <span className="text-5xl select-none">🃏</span>}
                  {item.category === 'accesorios' && <span className="text-5xl select-none">🧢</span>}
                </div>

                <span className="text-[11px] text-blue-400 font-bold uppercase tracking-widest mt-3">
                  Colección Oficial 2026
                </span>
              </div>

              {/* Item Info */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {item.name}
                    </h3>
                    <span className="text-xl font-black text-amber-400 font-mono">
                      ${item.price.toFixed(2)}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Action button */}
                <button
                  onClick={() => handleOpenItem(item)}
                  className="w-full py-3 rounded-xl text-xs font-black uppercase tracking-wider text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-300 hover:to-teal-200 shadow-md shadow-emerald-500/20 transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Pedir por WhatsApp</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Item Order Drawer */}
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
            <div className="bg-slate-900 border border-blue-500/40 rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative">
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-white bg-slate-800"
              >
                ✕
              </button>

              <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-widest mb-2">
                <Sparkles className="w-4 h-4" /> PEDIDO POR WHATSAPP
              </div>

              <h3 className="text-2xl font-black text-white mb-2">{selectedItem.name}</h3>
              <p className="text-xs text-slate-300 mb-6">{selectedItem.description}</p>

              {/* Sizes selection if applicable */}
              {selectedItem.sizes && (
                <div className="mb-4">
                  <label className="text-xs font-bold text-slate-400 uppercase block mb-2">
                    Selecciona tu Talla:
                  </label>
                  <div className="flex gap-2">
                    {selectedItem.sizes.map((sz) => (
                      <button
                        key={sz}
                        onClick={() => setSelectedSize(sz)}
                        className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                          selectedSize === sz
                            ? 'bg-cyan-400 text-slate-950 font-black'
                            : 'bg-slate-950 text-slate-300 border border-slate-800'
                        }`}
                      >
                        {sz}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Color options if applicable */}
              {selectedItem.colorOptions && (
                <div className="mb-4">
                  <label className="text-xs font-bold text-slate-400 uppercase block mb-2">
                    Opción de Color:
                  </label>
                  <div className="flex gap-2">
                    {selectedItem.colorOptions.map((cl) => (
                      <button
                        key={cl}
                        onClick={() => setSelectedColor(cl)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                          selectedColor === cl
                            ? 'bg-amber-400 text-slate-950 font-black'
                            : 'bg-slate-950 text-slate-300 border border-slate-800'
                        }`}
                      >
                        {cl}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div className="mb-6 flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-xs font-bold text-slate-400 uppercase">Cantidad:</span>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-8 h-8 rounded-lg bg-slate-800 text-white font-bold flex items-center justify-center"
                  >
                    -
                  </button>
                  <span className="font-mono font-bold text-white text-base">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-8 h-8 rounded-lg bg-slate-800 text-white font-bold flex items-center justify-center"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Total Calculation */}
              <div className="flex justify-between items-center mb-6 pt-3 border-t border-slate-800">
                <span className="text-sm font-bold text-slate-300">Total a Pagar:</span>
                <span className="text-2xl font-black text-amber-400 font-mono">
                  ${(selectedItem.price * quantity).toFixed(2)}
                </span>
              </div>

              {/* WhatsApp Confirm button */}
              <button
                onClick={() => handleWhatsAppOrder(selectedItem)}
                className="w-full py-4 rounded-xl text-sm font-black uppercase text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 shadow-xl shadow-emerald-500/20 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Confirmar Pedido en WhatsApp</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
