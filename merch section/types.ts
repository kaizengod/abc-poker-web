export type ProductCategory = 'franelas' | 'gorras' | 'hoodies' | 'todos';

export interface Product {
  id: string;
  name: string;
  category: 'franelas' | 'gorras' | 'hoodies';
  price: number;
  badge?: string; // e.g., 'MÁS VENDIDO', 'EDICIÓN LIMITADA', 'NUEVO'
  description: string;
  imageUrl?: string;
  sizes: string[];
  colors: { name: string; hex: string }[];
  isFeatured?: boolean;
}

export interface StoreConfig {
  brandName: string;
  storeTitle: string;
  storeSubtitle: string;
  whatsappNumber: string; // formatted phone number e.g. 584120000000
  showEmptyPlaceholders: boolean; // toggle empty image boxes vs illustrations
  currencySymbol: string;
}

export interface OrderDetails {
  product: Product;
  size: string;
  color: string;
  quantity: number;
  customNote: string;
}
