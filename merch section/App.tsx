import React, { useState } from 'react';
import { INITIAL_PRODUCTS } from './data/products';
import { Product, ProductCategory, StoreConfig } from './types';
import { WebsiteHeaderPreview } from './components/WebsiteHeaderPreview';
import { HeaderSection } from './components/HeaderSection';
import { CategoryNav } from './components/CategoryNav';
import { ProductGridShowcase } from './components/ProductGridShowcase';
import { WhatsAppModal } from './components/WhatsAppModal';
import { StoreSettingsDrawer } from './components/StoreSettingsDrawer';
import { MessageCircle, Sliders, CheckCircle2 } from 'lucide-react';

export default function App() {
  // Products state initialized with requested names (The As, Apex predator, All in)
  const [products, setProducts] = useState<Product[]>(INITIAL_PRODUCTS);

  // Active Category Filter
  const [activeCategory, setActiveCategory] = useState<ProductCategory>('todos');

  // Store Configuration
  const [config, setConfig] = useState<StoreConfig>({
    brandName: 'MERCA / DROP 01',
    storeTitle: 'Merca / Drop Exclusivo',
    storeSubtitle: 'Ediciones limitadas de franelas, gorras y hoodies con pedidos directos a WhatsApp.',
    whatsappNumber: '584120000000',
    showEmptyPlaceholders: true, // User requested empty frames: "Puedes dejar los recuadros vacíos que luego yo agregaré más fotos"
    currencySymbol: '$',
  });

  // Selected product for WhatsApp order modal
  const [selectedProductForOrder, setSelectedProductForOrder] = useState<Product | null>(null);

  // Settings drawer state
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  // Helper count per category
  const categoryCounts = {
    todos: products.length,
    franelas: products.filter((p) => p.category === 'franelas').length,
    gorras: products.filter((p) => p.category === 'gorras').length,
    hoodies: products.filter((p) => p.category === 'hoodies').length,
  };

  // Add custom product handler
  const handleAddProduct = (newProduct: Product) => {
    setProducts((prev) => [newProduct, ...prev]);
  };

  // Update specific product image handler
  const handleUpdateImage = (productId: string, newUrl: string) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === productId ? { ...p, imageUrl: newUrl } : p))
    );
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#E5E5E5] font-sans-clean antialiased selection:bg-white selection:text-black flex flex-col justify-between relative overflow-x-hidden">
      
      <div className="relative z-10 flex-1 flex flex-col">
        {/* Simulated Web Header (Integration header in Bento Grid aesthetic) */}
        <WebsiteHeaderPreview
          brandName={config.brandName}
          whatsappNumber={config.whatsappNumber}
          onOpenSettings={() => setIsSettingsOpen(true)}
          cartCount={0}
        />

        {/* Main Section Banner */}
        <section id="merch-hero" className="w-full">
          <HeaderSection
            brandName={config.brandName}
            storeTitle={config.storeTitle}
            storeSubtitle={config.storeSubtitle}
          />
        </section>

        {/* Category Switcher Pills */}
        <section id="merch-categories" className="w-full">
          <CategoryNav
            activeCategory={activeCategory}
            onSelectCategory={(cat) => setActiveCategory(cat)}
            counts={categoryCounts}
          />
        </section>

        {/* Bento Grid Merch Showcase Section */}
        <section id="merch-showcase" className="w-full flex-1 mb-10">
          <ProductGridShowcase
            products={products}
            activeCategory={activeCategory}
            onSelectCategory={(cat) => setActiveCategory(cat)}
            showEmptyPlaceholders={config.showEmptyPlaceholders}
            onSelectForOrder={(prod) => setSelectedProductForOrder(prod)}
            onUpdateImage={handleUpdateImage}
          />
        </section>

        {/* WhatsApp Conversion Bar */}
        <div className="w-full max-w-7xl mx-auto px-4 lg:px-8 mb-12">
          <div className="rounded-3xl bg-[#151515] border border-white/10 p-6 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-2xl bg-[#25D366] flex items-center justify-center text-black shrink-0 shadow-lg">
                <MessageCircle className="w-6 h-6 fill-black" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  <span className="font-serif-italic text-lg">Atención Personalizada vía WhatsApp (+{config.whatsappNumber})</span>
                  <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
                </h4>
                <p className="text-xs font-mono-code text-gray-400 mt-1 max-w-xl">
                  Selecciona tu prenda favorita, personaliza talla y color, y finaliza tu pedido de forma directa y segura.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3 w-full md:w-auto">
              <button
                onClick={() => setIsSettingsOpen(true)}
                className="w-full md:w-auto px-6 py-3 rounded-full bg-white text-black font-extrabold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 hover:bg-gray-200 transition cursor-pointer"
              >
                <Sliders className="w-4 h-4" />
                <span>Configurar Sección</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer / Credits */}
      <footer className="relative z-10 w-full border-t border-white/10 bg-[#0A0A0A] py-6 px-4 text-center text-xs font-mono-code text-gray-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
            <span className="text-gray-400">
              {config.brandName || 'MERCA / DROP 01'} — Módulo Bento Grid Integrable
            </span>
          </div>

          <p className="text-gray-500">
            Diseño Bento Grid responsive & optimizado para conversión vía WhatsApp.
          </p>
        </div>
      </footer>

      {/* WhatsApp Pre-Checkout Order Modal */}
      <WhatsAppModal
        product={selectedProductForOrder}
        config={config}
        onClose={() => setSelectedProductForOrder(null)}
      />

      {/* Store Settings & Code Integration Drawer */}
      <StoreSettingsDrawer
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        config={config}
        onUpdateConfig={(newConf) => setConfig(newConf)}
        products={products}
        onAddProduct={handleAddProduct}
      />
    </div>
  );
}
