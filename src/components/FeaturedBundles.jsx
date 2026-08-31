import React from 'react';
import { PRODUCTS } from '../data/storeData';
import { ProductCard } from './ProductCard';
import { useStore } from '../context/StoreContext';
import { Package, Sparkles } from 'lucide-react';

export const FeaturedBundles = () => {
  const { navigateToCollection } = useStore();
  const bundles = PRODUCTS.filter(p => p.category === 'Bundles');

  return (
    <section className="py-16 lg:py-24 bg-[#FFFDF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-[#FF7A59]/10 via-[#8E44AD]/10 to-[#0284C7]/10 rounded-3xl p-8 sm:p-12 mb-12 border border-[#FF7A59]/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-[#FF7A59] text-white px-3.5 py-1 rounded-full text-xs font-extrabold mb-3 shadow-sm">
              <Package className="w-4 h-4" />
              <span>Curated Value Bundles</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Made for Real-Life Moments
            </h2>
            <p className="text-base text-slate-600 font-medium mt-2">
              Save up to 20% with our complete sensory kit bundles assembled by parents for home, classroom, and travel routines.
            </p>
          </div>

          <button
            onClick={() => navigateToCollection('Bundles', null)}
            className="px-6 py-3.5 rounded-2xl bg-[#FF7A59] hover:bg-[#E86645] text-white font-extrabold text-sm shadow-md button-lift shrink-0"
          >
            Explore All Bundles
          </button>
        </div>

        {/* Bundle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {bundles.map(bundle => (
            <ProductCard key={bundle.id} product={bundle} />
          ))}
        </div>

      </div>
    </section>
  );
};
