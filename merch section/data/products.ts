import { Product } from '../types';

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'franela-the-as',
    name: 'The As',
    category: 'franelas',
    price: 32.00,
    badge: 'MÁS VENDIDO',
    description: 'Franela de algodón pesado 240g con corte oversize premium y estampado sutil de As de Picas en relieve.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Negro Mate', hex: '#111111' },
      { name: 'Azul Noche', hex: '#0B132B' },
      { name: 'Blanco Puro', hex: '#FFFFFF' }
    ],
    isFeatured: true
  },
  {
    id: 'franela-apex-predator',
    name: 'Apex predator',
    category: 'franelas',
    price: 35.00,
    badge: 'EDICIÓN LIMITADA',
    description: 'Diseño exclusivo con tipografía técnica reflectiva y símbolo Apex en la espalda. Algodón peinado ultra suave.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Negro Carbón', hex: '#1C1C1C' },
      { name: 'Gris Grafito', hex: '#333333' }
    ],
    isFeatured: true
  },
  {
    id: 'hoodie-all-in',
    name: 'All in',
    category: 'hoodies',
    price: 58.00,
    badge: 'EDICIÓN ESPECIAL',
    description: 'Hoodie con capucha doble capa, bolsillo tipo canguro reforzado y bordado de alta densidad "ALL IN" en el pecho.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Azul Noche Profundo', hex: '#080D1E' },
      { name: 'Negro Azabache', hex: '#0A0A0A' },
      { name: 'Violeta Oscuro', hex: '#2A0845' }
    ],
    isFeatured: true
  },
  {
    id: 'gorra-royal-snapback',
    name: 'Gorra Snapback Royal',
    category: 'gorras',
    price: 28.00,
    badge: 'EXCLUSIVO',
    description: 'Gorra de visera plana con estructura de 6 paneles, bordado frontal 3D dorado y broche ajustable.',
    sizes: ['Ajustable'],
    colors: [
      { name: 'Negro / Dorado', hex: '#1A1A1A' },
      { name: 'Azul Marino', hex: '#0D1B2A' }
    ],
    isFeatured: false
  },
  {
    id: 'gorra-apex-cap',
    name: 'Gorra Trucker Apex',
    category: 'gorras',
    price: 26.00,
    badge: 'NUEVO',
    description: 'Malla respirable de alta calidad en la parte posterior con parche frontal tejido de alta resolución.',
    sizes: ['Ajustable'],
    colors: [
      { name: 'Negro Total', hex: '#000000' },
      { name: 'Gris / Violeta', hex: '#4A4E69' }
    ],
    isFeatured: false
  },
  {
    id: 'franela-poker-face',
    name: 'Franela High Roller',
    category: 'franelas',
    price: 30.00,
    badge: 'POPULAR',
    description: 'Diseño minimalista en el pecho con detalle geométrico en la manga derecha. Tela fresca de alta durabilidad.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Blanco', hex: '#FFFFFF' },
      { name: 'Negro', hex: '#121212' }
    ],
    isFeatured: false
  },
  {
    id: 'hoodie-apex-stealth',
    name: 'Hoodie Apex Stealth',
    category: 'hoodies',
    price: 62.00,
    badge: 'PROFESIONAL',
    description: 'Franja reflectiva impermeable con cremallera oculta y grabado térmico. Confort absoluto para bajas temperaturas.',
    sizes: ['M', 'L', 'XL'],
    colors: [
      { name: 'Gris Oscuro', hex: '#22252A' },
      { name: 'Azul Profundo', hex: '#0B132B' }
    ],
    isFeatured: false
  }
];
