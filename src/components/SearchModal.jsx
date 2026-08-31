import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { PRODUCTS } from '../data/storeData';
import { Search, X, ArrowRight, Sparkles, Star } from 'lucide-react';

export const SearchModal = () => {
  const { isSearchOpen, setIsSearchOpen, navigateToProduct, navigateToCollection } = useStore();
  const [query, setQuery] = useState('');

  if (!isSearchOpen) return null;

  const filteredProducts = query.trim()
    ? PRODUCTS.filter(p =>
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase()) ||
        p.needs.some(n => n.toLowerCase().includes(query.toLowerCase())) ||
        p.description.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-md"
        onClick={() => setIsSearchOpen(false)}
      />

      <div className="relative min-h-screen flex items-start justify-center p-4 pt-16 sm:pt-24">
        <div className="relative w-full max-w-2xl bg-[#FFFDF8] rounded-3xl shadow-2xl border border-slate-200/80 overflow-hidden">
          
          {/* Search Input Bar */}
          <div className="p-4 sm:p-6 border-b border-slate-200/80 bg-white flex items-center gap-3">
            <Search className="w-6 h-6 text-[#FF7A59] shrink-0" />
            <input
              type="text"
              autoFocus
              placeholder="Search tools, chewelry, fidgets, pop tubes, liquid timers..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full text-base sm:text-lg font-bold text-slate-900 placeholder:text-slate-400 bg-transparent focus:outline-none"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="text-xs font-semibold text-slate-400 hover:text-slate-600 px-2 py-1 bg-slate-100 rounded-lg"
              >
                Clear
              </button>
            )}
            <button
              onClick={() => setIsSearchOpen(false)}
              className="p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Close search modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Quick Tags / Suggestions when empty */}
          {!query && (
            <div className="p-6 bg-slate-50 border-b border-slate-100">
              <span className="text-xs font-extrabold text-slate-400 uppercase tracking-wider block mb-3">
                Popular Sensory Searches
              </span>
              <div className="flex flex-wrap gap-2">
                {['Chewelry', '3D Maze Ball', 'Sensory Regulation', 'Liquid Motion', 'Pencil Pal', 'Deep Pressure Kit'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-bold text-slate-700 hover:border-[#FF7A59] hover:text-[#FF7A59] transition-all shadow-sm"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Results List */}
          <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-6 divide-y divide-slate-100">
            {query && filteredProducts.length === 0 ? (
              <div className="text-center py-12 space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#FFEAC7] text-[#D97706] mx-auto flex items-center justify-center font-bold text-xl">
                  🔍
                </div>
                <h3 className="text-base font-extrabold text-slate-900">
                  We couldn't find what you're looking for.
                </h3>
                <p className="text-xs text-slate-500 font-medium max-w-sm mx-auto">
                  Try searching for terms like "chew", "fidget", "calm", or explore our Shop by Need menu.
                </p>
                <div className="flex justify-center gap-3 pt-2">
                  <button
                    onClick={() => {
                      setIsSearchOpen(false);
                      navigateToCollection(null, null);
                    }}
                    className="px-4 py-2 rounded-xl bg-[#FF7A59] text-white font-extrabold text-xs shadow-sm"
                  >
                    Browse Best Sellers
                  </button>
                  <button
                    onClick={() => {
                      setIsSearchOpen(false);
                      navigateToCollection(null, 'sensory-regulation');
                    }}
                    className="px-4 py-2 rounded-xl bg-[#F2DEFA] text-[#8E44AD] font-extrabold text-xs"
                  >
                    Shop by Need
                  </button>
                </div>
              </div>
            ) : (
              filteredProducts.map(product => (
                <div
                  key={product.id}
                  onClick={() => {
                    setIsSearchOpen(false);
                    navigateToProduct(product);
                  }}
                  className="py-3 flex items-center justify-between gap-4 group cursor-pointer hover:bg-slate-50 px-3 rounded-2xl transition-all"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-14 h-14 rounded-xl object-cover bg-slate-100 shrink-0"
                    />
                    <div>
                      <h4 className="text-sm font-extrabold text-slate-900 group-hover:text-[#FF7A59] transition-colors">
                        {product.title}
                      </h4>
                      <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
                        <span>{product.category}</span>
                        <span>•</span>
                        <div className="flex items-center gap-1 text-amber-500 font-bold">
                          <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                          <span>{product.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="text-sm font-black text-slate-900 block">
                      ${product.price.toFixed(2)}
                    </span>
                    <span className="text-[11px] text-[#FF7A59] font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                      View Product →
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Search Modal Footer */}
          {query && filteredProducts.length > 0 && (
            <div className="p-4 bg-slate-50 border-t border-slate-200/80 text-center">
              <button
                onClick={() => {
                  setIsSearchOpen(false);
                  navigateToCollection(null, null);
                }}
                className="text-xs font-extrabold text-[#FF7A59] hover:underline flex items-center justify-center gap-1 mx-auto"
              >
                <span>View all search results</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
