import React from 'react';
import { CATEGORIES } from '../data/storeData';
import { useStore } from '../context/StoreContext';
import { ArrowRight, Grid } from 'lucide-react';

export const ShopByCategorySection = () => {
  const { navigateToCollection } = useStore();

  return (
    <section className="py-16 lg:py-24 bg-[#FFFDF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-[#E3F2FD] text-[#0284C7] px-3.5 py-1.5 rounded-full text-xs font-extrabold mb-3">
            <Grid className="w-4 h-4" />
            <span>Product Collections</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Shop by Category
          </h2>
          <p className="text-base text-slate-600 font-medium mt-2">
            Explore our thoughtfully curated collection categories designed for home, school, and daily therapy routines.
          </p>
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {CATEGORIES.map(category => (
            <div
              key={category.handle}
              onClick={() => navigateToCollection(category.name, null)}
              className="group relative rounded-3xl overflow-hidden bg-white border border-slate-100 shadow-soft-sm hover:shadow-card-hover card-hover cursor-pointer p-4 flex flex-col justify-between h-48 sm:h-56"
            >
              {/* Image Background */}
              <div className="absolute inset-0 z-0">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent" />
              </div>

              {/* Top Item Count Badge */}
              <div className="relative z-10 flex justify-end">
                <span className="bg-white/90 backdrop-blur-sm text-slate-800 text-[11px] font-extrabold px-3 py-1 rounded-full shadow-sm">
                  {category.count} Items
                </span>
              </div>

              {/* Bottom Title & CTA */}
              <div className="relative z-10 text-white">
                <h3 className="text-lg sm:text-xl font-black group-hover:text-[#FF7A59] transition-colors drop-shadow-sm">
                  {category.name}
                </h3>
                <div className="flex items-center gap-1 text-xs font-bold text-white/80 mt-1 group-hover:text-white">
                  <span>Explore Collection</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
