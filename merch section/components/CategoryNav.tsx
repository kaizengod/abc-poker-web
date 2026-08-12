import React from 'react';
import { ProductCategory } from '../types';
import { Shirt, HardHat, Flame, LayoutGrid } from 'lucide-react';

interface Props {
  activeCategory: ProductCategory;
  onSelectCategory: (cat: ProductCategory) => void;
  counts: {
    todos: number;
    franelas: number;
    gorras: number;
    hoodies: number;
  };
}

export const CategoryNav: React.FC<Props> = ({
  activeCategory,
  onSelectCategory,
  counts,
}) => {
  const categories: { id: ProductCategory; label: string; num: string; icon: React.ReactNode }[] = [
    { id: 'todos', label: 'Ver Todo', num: '00', icon: <LayoutGrid className="w-3.5 h-3.5" /> },
    { id: 'franelas', label: 'Franelas', num: '01', icon: <Shirt className="w-3.5 h-3.5" /> },
    { id: 'gorras', label: 'Gorras', num: '02', icon: <HardHat className="w-3.5 h-3.5" /> },
    { id: 'hoodies', label: 'Hoodies', num: '03', icon: <Flame className="w-3.5 h-3.5" /> },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-4 mb-8 flex justify-center">
      {/* Category Nav Pill matching Bento Grid design (<nav class="flex gap-2 bg-[#1A1A1A] p-1 rounded-full border border-white/5">) */}
      <nav className="inline-flex items-center gap-1.5 bg-[#1A1A1A] p-1.5 rounded-full border border-white/10 shadow-xl overflow-x-auto max-w-full">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          const count = counts[cat.id];

          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`flex items-center space-x-2 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer whitespace-nowrap ${
                isActive
                  ? 'bg-white text-black shadow-md font-extrabold'
                  : 'text-[#999] hover:bg-white/10 hover:text-white'
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`text-[10px] font-mono-code px-1.5 py-0.2 rounded-full ${
                  isActive ? 'bg-black/10 text-black font-bold' : 'bg-white/10 text-gray-400'
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};
