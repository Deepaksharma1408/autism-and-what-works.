import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { CATEGORIES, SHOP_BY_NEEDS } from '../data/storeData';
import { X, Search, ChevronDown, Sparkles, Heart, ArrowRight, ShoppingBag } from 'lucide-react';

export const MobileDrawer = () => {
  const {
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    setIsSearchOpen,
    navigateToCollection,
    navigateToPage,
    cartCount,
    setIsCartOpen
  } = useStore();

  const [expandedSection, setExpandedSection] = useState('needs'); // 'needs', 'categories', or null

  if (!isMobileMenuOpen) return null;

  const handleLinkClick = (action) => {
    setIsMobileMenuOpen(false);
    action();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden lg:hidden animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm"
        onClick={() => setIsMobileMenuOpen(false)}
      />

      <div className="fixed inset-y-0 left-0 max-w-full flex">
        <div className="w-screen max-w-md bg-[#FFFDF8] shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-4 border-b border-slate-200/80 flex items-center justify-between bg-white">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#FF7A59]" />
              <span className="font-extrabold text-slate-900 text-base">Navigation</span>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2.5 rounded-full hover:bg-slate-100 text-slate-500 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Close Mobile Navigation"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Body content */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            
            {/* Quick Search Button inside Drawer */}
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsSearchOpen(true);
              }}
              className="w-full flex items-center gap-3 bg-slate-100 p-3.5 rounded-2xl text-slate-600 font-semibold text-sm min-h-[44px]"
            >
              <Search className="w-5 h-5 text-slate-400" />
              <span>Search products, chewelry, toys...</span>
            </button>

            {/* SHOP BY NEED Accordion */}
            <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white">
              <button
                onClick={() => setExpandedSection(expandedSection === 'needs' ? null : 'needs')}
                className="w-full p-4 flex items-center justify-between text-left font-extrabold text-slate-800 text-base bg-[#F2DEFA]/20 min-h-[44px]"
              >
                <div className="flex items-center gap-2 text-[#8E44AD]">
                  <Sparkles className="w-5 h-5" />
                  <span>SHOP BY NEED</span>
                </div>
                <ChevronDown className={`w-5 h-5 text-[#8E44AD] transition-transform ${expandedSection === 'needs' ? 'rotate-180' : ''}`} />
              </button>

              {expandedSection === 'needs' && (
                <div className="p-3 space-y-1 bg-white border-t border-slate-100">
                  {SHOP_BY_NEEDS.map((need) => (
                    <button
                      key={need.id}
                      onClick={() => handleLinkClick(() => navigateToCollection(null, need.id))}
                      className="w-full text-left p-3 rounded-xl hover:bg-slate-50 flex items-center justify-between text-sm font-bold text-slate-700 min-h-[44px]"
                    >
                      <span>{need.title}</span>
                      <ArrowRight className="w-4 h-4 text-slate-400" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* SHOP BY PRODUCT Accordion */}
            <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white">
              <button
                onClick={() => setExpandedSection(expandedSection === 'categories' ? null : 'categories')}
                className="w-full p-4 flex items-center justify-between text-left font-extrabold text-slate-800 text-base bg-[#E3F2FD]/30 min-h-[44px]"
              >
                <div className="flex items-center gap-2 text-[#0284C7]">
                  <span>SHOP BY CATEGORY</span>
                </div>
                <ChevronDown className={`w-5 h-5 text-[#0284C7] transition-transform ${expandedSection === 'categories' ? 'rotate-180' : ''}`} />
              </button>

              {expandedSection === 'categories' && (
                <div className="p-3 space-y-1 bg-white border-t border-slate-100">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat.handle}
                      onClick={() => handleLinkClick(() => navigateToCollection(cat.name, null))}
                      className="w-full text-left p-3 rounded-xl hover:bg-slate-50 flex items-center justify-between text-sm font-semibold text-slate-700 min-h-[44px]"
                    >
                      <span>{cat.name}</span>
                      <span className="text-xs text-slate-400 font-normal">({cat.count})</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Direct Links */}
            <div className="space-y-1 pt-2">
              <button
                onClick={() => handleLinkClick(() => navigateToCollection(null, null))}
                className="w-full p-3.5 rounded-2xl bg-white border border-slate-100 hover:bg-slate-50 text-left font-bold text-slate-800 flex items-center justify-between min-h-[44px]"
              >
                <span>Best Sellers</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </button>

              <button
                onClick={() => handleLinkClick(() => navigateToCollection('Bundles', null))}
                className="w-full p-3.5 rounded-2xl bg-[#FFDED3]/40 border border-[#FF7A59]/20 text-left font-extrabold text-[#FF7A59] flex items-center justify-between min-h-[44px]"
              >
                <span>Featured Bundles</span>
                <span className="bg-[#FF7A59] text-white text-xs px-2 py-0.5 rounded-full">Save 20%</span>
              </button>

              <button
                onClick={() => handleLinkClick(() => navigateToPage('about'))}
                className="w-full p-3.5 rounded-2xl bg-white border border-slate-100 hover:bg-slate-50 text-left font-bold text-slate-800 flex items-center justify-between min-h-[44px]"
              >
                <span>About Us (Our Story)</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </button>

              <button
                onClick={() => handleLinkClick(() => navigateToPage('charity'))}
                className="w-full p-3.5 rounded-2xl bg-[#E0F7FA]/50 border border-[#00838F]/20 text-left font-extrabold text-[#00838F] flex items-center justify-between min-h-[44px]"
              >
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  <span>Charity Decals Mission</span>
                </div>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Footer Actions */}
          <div className="p-4 border-t border-slate-200/80 bg-white space-y-3">
            <button
              onClick={() => handleLinkClick(() => setIsCartOpen(true))}
              className="w-full py-3.5 px-4 rounded-2xl bg-[#FF7A59] text-white font-extrabold flex items-center justify-center gap-2 button-lift shadow-sm min-h-[44px]"
            >
              <ShoppingBag className="w-5 h-5" />
              <span>View Cart ({cartCount} items)</span>
            </button>
            <p className="text-center text-xs text-slate-400 font-medium">
              Autism and What Works • Australian Dad-Owned
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};
