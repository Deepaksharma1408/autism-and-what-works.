import React from 'react';
import { PRODUCTS } from '../data/storeData';
import { ProductCard } from './ProductCard';
import { useStore } from '../context/StoreContext';
import { Sparkles, ArrowRight } from 'lucide-react';

export const BestSellersSection = () => {
  const { navigateToCollection } = useStore();
  const bestSellers = PRODUCTS.filter(p => p.isBestSeller).slice(0, 4);

  return (
    <section className="py-16 lg:py-24 bg-[#F7F9FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#FFEAC7] text-[#D97706] px-3.5 py-1.5 rounded-full text-xs font-extrabold mb-3">
              <Sparkles className="w-4 h-4" />
              <span>Parent Favorites</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Best Sellers
            </h2>
            <p className="text-base text-slate-600 font-medium mt-2">
              Some of the products families come back to again and again.
            </p>
          </div>

          <button
            onClick={() => navigateToCollection(null, null)}
            className="flex items-center gap-2 text-sm font-extrabold text-[#FF7A59] hover:text-[#E86645] transition-colors group"
          >
            <span>View All Best Sellers</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestSellers.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  );
};
