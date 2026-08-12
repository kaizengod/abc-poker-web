import React, { useState } from 'react';
import { X, Sliders, MessageCircle, Plus, Copy, Check, Save, Code } from 'lucide-react';
import { StoreConfig, Product } from '../types';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  config: StoreConfig;
  onUpdateConfig: (newConfig: StoreConfig) => void;
  products: Product[];
  onAddProduct: (product: Product) => void;
}

export const StoreSettingsDrawer: React.FC<Props> = ({
  isOpen,
  onClose,
  config,
  onUpdateConfig,
  products,
  onAddProduct,
}) => {
  if (!isOpen) return null;

  const [whatsapp, setWhatsapp] = useState(config.whatsappNumber);
  const [brandName, setBrandName] = useState(config.brandName);
  const [storeTitle, setStoreTitle] = useState(config.storeTitle);
  const [storeSubtitle, setStoreSubtitle] = useState(config.storeSubtitle);
  const [showEmptyPlaceholders, setShowEmptyPlaceholders] = useState(config.showEmptyPlaceholders);
  const [copiedCode, setCopiedCode] = useState(false);

  // New product form state
  const [showNewProductForm, setShowNewProductForm] = useState(false);
  const [newName, setNewName] = useState('');
  const [newCat, setNewCat] = useState<'franelas' | 'gorras' | 'hoodies'>('franelas');
  const [newPrice, setNewPrice] = useState('35.00');
  const [newBadge, setNewBadge] = useState('EXCLUSIVO');
  const [newDesc, setNewDesc] = useState('');

  const handleSaveConfig = () => {
    onUpdateConfig({
      ...config,
      whatsappNumber: whatsapp,
      brandName,
      storeTitle,
      storeSubtitle,
      showEmptyPlaceholders,
    });
  };

  const handleCreateProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim()) return;

    const newProd: Product = {
      id: `custom-${Date.now()}`,
      name: newName,
      category: newCat,
      price: parseFloat(newPrice) || 30.0,
      badge: newBadge,
      description: newDesc || 'Producto oficial en la tienda de merchandising.',
      sizes: newCat === 'gorras' ? ['Ajustable'] : ['S', 'M', 'L', 'XL'],
      colors: [{ name: 'Negro', hex: '#111111' }],
    };

    onAddProduct(newProd);
    setNewName('');
    setNewDesc('');
    setShowNewProductForm(false);
  };

  const handleCopyCodeSnippet = () => {
    const code = `<MerchStoreSection
  brandName="${brandName}"
  whatsappNumber="${whatsapp}"
  showEmptyPlaceholders={${showEmptyPlaceholders}}
/>`;
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-md bg-[#151515] border-l border-white/10 text-white h-full overflow-y-auto p-6 space-y-6 shadow-2xl flex flex-col justify-between">
        <div className="space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div className="flex items-center space-x-2.5">
              <Sliders className="w-4 h-4 text-white" />
              <h2 className="font-serif-italic text-xl font-bold">Ajustes de la Sección</h2>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-[#222] border border-white/10 text-gray-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* WhatsApp Settings */}
          <div className="space-y-3 bg-[#0A0A0A] p-4 rounded-2xl border border-white/10 font-mono-code text-xs">
            <label className="flex items-center space-x-2 font-bold text-gray-300 uppercase tracking-wider">
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>Número WhatsApp (Pedido Directo):</span>
            </label>
            <input
              type="text"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              placeholder="Ej: 584121234567"
              className="w-full bg-[#151515] border border-white/10 rounded-xl px-3 py-2 text-sm text-white font-mono-code focus:border-white/30 focus:outline-none"
            />
            <p className="text-[11px] text-gray-500 leading-normal">
              A este número se enviará la orden automática pre-formateada con el detalle de prendas.
            </p>
          </div>

          {/* Placeholders Mode Toggle (Recuadros Vacíos) */}
          <div className="bg-[#0A0A0A] p-4 rounded-2xl border border-white/10 space-y-3 font-mono-code text-xs">
            <div className="flex items-center justify-between">
              <div>
                <span className="font-bold text-gray-200 uppercase block tracking-wider">
                  Modo Recuadros Vacíos
                </span>
                <p className="text-[11px] text-gray-500">
                  {showEmptyPlaceholders
                    ? 'Mostrando marcos vacíos listos para tus fotos.'
                    : 'Mostrando imágenes de demostración.'}
                </p>
              </div>
              <button
                onClick={() => setShowEmptyPlaceholders(!showEmptyPlaceholders)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  showEmptyPlaceholders ? 'bg-white' : 'bg-[#222]'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full transition-transform ${
                    showEmptyPlaceholders ? 'translate-x-6 bg-black' : 'translate-x-1 bg-gray-400'
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Brand & Titles Customization */}
          <div className="space-y-3 bg-[#0A0A0A] p-4 rounded-2xl border border-white/10 font-mono-code text-xs">
            <h3 className="font-bold text-gray-300 uppercase tracking-wider">Títulos & Marca</h3>
            
            <div>
              <label className="text-[11px] text-gray-500 block mb-1">Nombre de Marca:</label>
              <input
                type="text"
                value={brandName}
                onChange={(e) => setBrandName(e.target.value)}
                className="w-full bg-[#151515] border border-white/10 rounded-xl px-3 py-1.5 text-xs text-white"
              />
            </div>

            <div>
              <label className="text-[11px] text-gray-500 block mb-1">Título Principal:</label>
              <input
                type="text"
                value={storeTitle}
                onChange={(e) => setStoreTitle(e.target.value)}
                className="w-full bg-[#151515] border border-white/10 rounded-xl px-3 py-1.5 text-xs text-white"
              />
            </div>

            <div>
              <label className="text-[11px] text-gray-500 block mb-1">Subtítulo:</label>
              <textarea
                value={storeSubtitle}
                onChange={(e) => setStoreSubtitle(e.target.value)}
                rows={2}
                className="w-full bg-[#151515] border border-white/10 rounded-xl px-3 py-1.5 text-xs text-white"
              />
            </div>
          </div>

          {/* Add New Product Form */}
          <div className="bg-[#0A0A0A] p-4 rounded-2xl border border-white/10 space-y-3 font-mono-code text-xs">
            <div className="flex items-center justify-between">
              <span className="font-bold text-gray-300 uppercase tracking-wider">Gestión Catálogo</span>
              <button
                onClick={() => setShowNewProductForm(!showNewProductForm)}
                className="font-bold text-white hover:text-gray-300 flex items-center space-x-1"
              >
                <Plus className="w-3.5 h-3.5 text-[#25D366]" />
                <span>{showNewProductForm ? 'Cancelar' : 'Agregar Prenda'}</span>
              </button>
            </div>

            {showNewProductForm && (
              <form onSubmit={handleCreateProduct} className="space-y-2.5 pt-2 border-t border-white/10">
                <input
                  type="text"
                  placeholder="Nombre de prenda (ej: The As)"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  className="w-full bg-[#151515] border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-white"
                  required
                />
                <div className="grid grid-cols-2 gap-2">
                  <select
                    value={newCat}
                    onChange={(e) => setNewCat(e.target.value as any)}
                    className="bg-[#151515] border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-white"
                  >
                    <option value="franelas">Franelas</option>
                    <option value="gorras">Gorras</option>
                    <option value="hoodies">Hoodies</option>
                  </select>
                  <input
                    type="number"
                    step="0.01"
                    placeholder="Precio ($)"
                    value={newPrice}
                    onChange={(e) => setNewPrice(e.target.value)}
                    className="bg-[#151515] border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-white"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Insignia (ej: NEW DROP)"
                  value={newBadge}
                  onChange={(e) => setNewBadge(e.target.value)}
                  className="w-full bg-[#151515] border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-white"
                />
                <textarea
                  placeholder="Descripción breve..."
                  value={newDesc}
                  onChange={(e) => setNewDesc(e.target.value)}
                  rows={2}
                  className="w-full bg-[#151515] border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-white"
                />
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-full bg-white text-black font-extrabold text-xs uppercase tracking-wider"
                >
                  Guardar Prenda
                </button>
              </form>
            )}

            <p className="text-[11px] text-gray-500">
              Tienes <strong className="text-white">{products.length} productos</strong> activos.
            </p>
          </div>

          {/* Integration Code Snippet */}
          <div className="bg-[#0A0A0A] p-4 rounded-2xl border border-white/10 space-y-2 font-mono-code text-xs">
            <div className="flex items-center justify-between">
              <span className="font-bold text-gray-300 uppercase tracking-wider flex items-center space-x-1.5">
                <Code className="w-3.5 h-3.5 text-white" />
                <span>Componente JSX Integrable</span>
              </span>
              <button
                onClick={handleCopyCodeSnippet}
                className="text-[11px] text-gray-300 hover:text-white flex items-center space-x-1"
              >
                {copiedCode ? <Check className="w-3.5 h-3.5 text-[#25D366]" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedCode ? '¡Copiado!' : 'Copiar'}</span>
              </button>
            </div>
            <pre className="text-[10px] font-mono-code bg-[#151515] p-2.5 rounded-xl text-gray-300 overflow-x-auto border border-white/5">
              {`<MerchStoreSection whatsappNumber="${whatsapp}" />`}
            </pre>
          </div>
        </div>

        {/* Footer Save Button */}
        <div className="pt-4 border-t border-white/10">
          <button
            onClick={() => {
              handleSaveConfig();
              onClose();
            }}
            className="w-full py-3.5 rounded-full bg-white text-black font-black text-xs uppercase tracking-widest hover:bg-gray-200 transition"
          >
            Guardar Cambios
          </button>
        </div>
      </div>
    </div>
  );
};
