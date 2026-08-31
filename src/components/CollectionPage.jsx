import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { PRODUCTS, CATEGORIES, SHOP_BY_NEEDS } from '../data/storeData';
import { ProductCard } from './ProductCard';
import { SlidersHorizontal, ChevronDown, Grid, LayoutGrid, Sparkles, X, Filter } from 'lucide-react';

export const CollectionPage = () => {
  const { selectedCategoryFilter, selectedNeedFilter, setSelectedCategoryFilter, setSelectedNeedFilter, navigateToPage } = useStore();

  const [sortOption, setSortOption] = useState('featured');
  const [priceMax, setPriceMax] = useState(100);
  const [onlySale, setOnlySale] = useState(false);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Filter products
  let filtered = PRODUCTS.filter(p => {
    if (selectedCategoryFilter && p.category !== selectedCategoryFilter) return false;
    if (selectedNeedFilter && !p.needs.includes(selectedNeedFilter)) return false;
    if (p.price > priceMax) return false;
    if (onlySale && !p.isSale) return false;
    return true;
  });

  // Sort products
  if (sortOption === 'price-low') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortOption === 'price-high') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sortOption === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  } else if (sortOption === 'newest') {
    filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
  }

  const activeNeedObj = SHOP_BY_NEEDS.find(n => n.id === selectedNeedFilter);

  return (
    <div className="py-8 bg-[#FFFDF8] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs font-bold text-slate-500 mb-6">
          <button onClick={() => navigateToPage('home')} className="hover:text-[#FF7A59]">Home</button>
          <span>/</span>
          <span className="text-slate-900 font-extrabold">
            {selectedCategoryFilter || (activeNeedObj ? activeNeedObj.title : 'All Sensory Products')}
          </span>
        </nav>

        {/* Collection Header */}
        <div className="bg-gradient-to-r from-[#F7F9FC] to-[#FFFDF8] rounded-3xl p-6 sm:p-10 border border-slate-100 mb-8 shadow-soft-sm">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[#F2DEFA] text-[#8E44AD] px-3 py-1 rounded-full text-xs font-extrabold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Shopify 2.0 Collection Directory</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              {selectedCategoryFilter
                ? selectedCategoryFilter
                : activeNeedObj
                ? activeNeedObj.title
                : 'All Sensory Tools & Educational Aids'}
            </h1>

            <p className="text-sm sm:text-base text-slate-600 font-medium mt-2">
              {activeNeedObj
                ? activeNeedObj.subtitle
                : 'Browse our complete catalog of tried and tested sensory toys, oral chewelry, classroom supports, and therapy kits.'}
            </p>
          </div>
        </div>

        {/* Top Control Bar (Filters summary, Sort, Grid toggle, Mobile Drawer Button) */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-200/80 mb-8">
          
          <div className="flex items-center gap-3">
            {/* Mobile Filter Button */}
            <button
              onClick={() => setIsMobileFilterOpen(true)}
              className="lg:hidden flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-800 text-xs font-extrabold shadow-sm min-h-[44px]"
            >
              <Filter className="w-4 h-4 text-[#FF7A59]" />
              <span>Filters</span>
            </button>

            <span className="text-xs font-bold text-slate-500">
              Showing <strong className="text-slate-900 font-black">{filtered.length}</strong> Products
            </span>

            {/* Active Filter Chips */}
            {(selectedCategoryFilter || selectedNeedFilter || onlySale) && (
              <div className="hidden sm:flex items-center gap-2">
                {selectedCategoryFilter && (
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold bg-[#E3F2FD] text-[#0284C7] px-2.5 py-1 rounded-full">
                    Category: {selectedCategoryFilter}
                    <button onClick={() => setSelectedCategoryFilter(null)}><X className="w-3 h-3 ml-1" /></button>
                  </span>
                )}
                {selectedNeedFilter && (
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold bg-[#F2DEFA] text-[#8E44AD] px-2.5 py-1 rounded-full">
                    Need: {activeNeedObj?.title}
                    <button onClick={() => setSelectedNeedFilter(null)}><X className="w-3 h-3 ml-1" /></button>
                  </span>
                )}
                {onlySale && (
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold bg-[#FFDED3] text-[#FF7A59] px-2.5 py-1 rounded-full">
                    On Sale Only
                    <button onClick={() => setOnlySale(false)}><X className="w-3 h-3 ml-1" /></button>
                  </span>
                )}
                <button
                  onClick={() => {
                    setSelectedCategoryFilter(null);
                    setSelectedNeedFilter(null);
                    setOnlySale(false);
                    setPriceMax(100);
                  }}
                  className="text-xs text-rose-600 font-bold hover:underline"
                >
                  Clear All
                </button>
              </div>
            )}
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-extrabold text-slate-500 hidden sm:inline-block">Sort by:</span>
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs font-extrabold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#FF7A59] min-h-[44px]"
            >
              <option value="featured">Featured / Best Sellers</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="newest">New Arrivals</option>
            </select>
          </div>

        </div>

        {/* Main Content Layout (Desktop Sidebar Filters + Product Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Desktop Filters Sidebar */}
          <div className="hidden lg:block lg:col-span-3 space-y-6">
            <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-soft-sm space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 className="font-black text-slate-900 text-sm flex items-center gap-2">
                  <SlidersHorizontal className="w-4 h-4 text-[#FF7A59]" />
                  <span>Shopify Search & Discovery</span>
                </h3>
              </div>

              {/* Filter by Category */}
              <div>
                <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider mb-3">
                  Product Category
                </h4>
                <div className="space-y-1">
                  <button
                    onClick={() => setSelectedCategoryFilter(null)}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                      !selectedCategoryFilter ? 'bg-[#FF7A59] text-white' : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    All Categories
                  </button>
                  {CATEGORIES.map(cat => (
                    <button
                      key={cat.handle}
                      onClick={() => setSelectedCategoryFilter(cat.name)}
                      className={`w-full text-left px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-between ${
                        selectedCategoryFilter === cat.name ? 'bg-[#FF7A59] text-white' : 'text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <span>{cat.name}</span>
                      <span className="text-[10px] opacity-70">({cat.count})</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Filter by Need */}
              <div>
                <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider mb-3">
                  Sensory Need
                </h4>
                <div className="space-y-1">
                  <button
                    onClick={() => setSelectedNeedFilter(null)}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                      !selectedNeedFilter ? 'bg-[#8E44AD] text-white' : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    All Needs
                  </button>
                  {SHOP_BY_NEEDS.map(need => (
                    <button
                      key={need.id}
                      onClick={() => setSelectedNeedFilter(need.id)}
                      className={`w-full text-left px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                        selectedNeedFilter === need.id ? 'bg-[#8E44AD] text-white' : 'text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      {need.title}
                    </button>
                  ))}
                </div>
              </div>

              {/* Filter by Price */}
              <div>
                <div className="flex justify-between text-xs font-extrabold text-slate-800 mb-2">
                  <span>Max Price:</span>
                  <span className="text-[#FF7A59]">${priceMax} AUD</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="100"
                  value={priceMax}
                  onChange={(e) => setPriceMax(Number(e.target.value))}
                  className="w-full accent-[#FF7A59]"
                />
              </div>

              {/* Toggle Sale Only */}
              <div className="pt-2">
                <label className="flex items-center gap-2 cursor-pointer text-xs font-bold text-slate-800">
                  <input
                    type="checkbox"
                    checked={onlySale}
                    onChange={(e) => setOnlySale(e.target.checked)}
                    className="w-4 h-4 rounded text-[#FF7A59] focus:ring-[#FF7A59]"
                  />
                  <span>Show Discounted Items Only</span>
                </label>
              </div>

            </div>
          </div>

          {/* Product Grid */}
          <div className="lg:col-span-9">
            {filtered.length === 0 ? (
              <div className="bg-white rounded-3xl p-12 text-center border border-slate-100 space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#FFEAC7] text-[#D97706] mx-auto flex items-center justify-center font-bold text-xl">
                  📦
                </div>
                <h3 className="text-lg font-black text-slate-900">No products match your filters</h3>
                <p className="text-xs text-slate-500 font-medium max-w-sm mx-auto">
                  Try clearing some filters or exploring a different category.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategoryFilter(null);
                    setSelectedNeedFilter(null);
                    setOnlySale(false);
                    setPriceMax(100);
                  }}
                  className="px-6 py-2.5 rounded-xl bg-[#FF7A59] text-white font-extrabold text-xs button-lift shadow-sm"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {filtered.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>

        </div>

      </div>

      {/* Mobile Filters Drawer */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden lg:hidden">
          <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm" onClick={() => setIsMobileFilterOpen(false)} />
          <div className="fixed inset-y-0 right-0 max-w-full flex">
            <div className="w-screen max-w-xs bg-white shadow-2xl p-6 flex flex-col justify-between overflow-y-auto">
              <div>
                <div className="flex justify-between items-center pb-4 border-b border-slate-100 mb-6">
                  <h3 className="font-extrabold text-slate-900 text-base">Filter Directory</h3>
                  <button onClick={() => setIsMobileFilterOpen(false)} className="p-2 text-slate-400">
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Mobile Filter Category */}
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider mb-2">Category</h4>
                    <div className="space-y-1">
                      <button
                        onClick={() => { setSelectedCategoryFilter(null); setIsMobileFilterOpen(false); }}
                        className="w-full text-left text-xs font-bold p-2 rounded-lg bg-slate-50 text-slate-800"
                      >
                        All Categories
                      </button>
                      {CATEGORIES.map(cat => (
                        <button
                          key={cat.handle}
                          onClick={() => { setSelectedCategoryFilter(cat.name); setIsMobileFilterOpen(false); }}
                          className="w-full text-left text-xs font-semibold p-2 rounded-lg hover:bg-slate-50 text-slate-700"
                        >
                          {cat.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider mb-2">Need</h4>
                    <div className="space-y-1">
                      {SHOP_BY_NEEDS.map(need => (
                        <button
                          key={need.id}
                          onClick={() => { setSelectedNeedFilter(need.id); setIsMobileFilterOpen(false); }}
                          className="w-full text-left text-xs font-semibold p-2 rounded-lg hover:bg-slate-50 text-slate-700"
                        >
                          {need.title}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setIsMobileFilterOpen(false)}
                className="w-full py-3.5 bg-[#FF7A59] text-white font-extrabold rounded-2xl text-xs mt-6"
              >
                Apply Filters ({filtered.length} Products)
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
