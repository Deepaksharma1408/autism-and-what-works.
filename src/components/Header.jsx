import React, { useState, useEffect } from 'react';
import { useStore } from '../context/StoreContext';
import { MegaMenu } from './MegaMenu';
import { Search, ShoppingBag, User, Menu, ChevronDown, Sparkles, Heart } from 'lucide-react';

export const Header = () => {
  const {
    cartCount,
    setIsCartOpen,
    setIsSearchOpen,
    setIsMobileMenuOpen,
    navigateToPage,
    navigateToCollection
  } = useStore();

  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 bg-[#FFFDF8]/95 backdrop-blur-md transition-all duration-300 relative ${
        isSticky ? 'shadow-soft-md border-b border-slate-200/80 py-3' : 'py-4 border-b border-slate-100'
      }`}
      onMouseLeave={() => setIsMegaMenuOpen(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Mobile Hamburger Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2.5 rounded-xl hover:bg-slate-100 text-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-[#FF7A59]"
              aria-label="Open Mobile Navigation Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2.5 rounded-xl hover:bg-slate-100 text-slate-700 transition-colors sm:hidden"
              aria-label="Open Search"
            >
              <Search className="w-5 h-5" />
            </button>
          </div>

          {/* Logo */}
          <div
            onClick={() => navigateToPage('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#FF7A59] via-[#8E44AD] to-[#0284C7] p-0.5 shadow-sm group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-[#FF7A59]" />
              </div>
            </div>
            <div>
              <span className="text-lg sm:text-xl font-extrabold tracking-tight text-slate-900 block leading-none font-sans">
                Autism and What Works
              </span>
              <span className="text-[10px] font-semibold text-[#8E44AD] tracking-wide uppercase block mt-0.5">
                Tried & Tested Sensory Tools
              </span>
            </div>
          </div>

          {/* Desktop Main Navigation */}
          <nav className="hidden lg:flex items-center gap-1 font-semibold text-slate-700 text-sm">
            
            {/* Shop All / Mega Menu Trigger */}
            <div onMouseEnter={() => setIsMegaMenuOpen(true)}>
              <button
                onClick={() => navigateToCollection()}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl transition-all ${
                  isMegaMenuOpen ? 'bg-slate-100 text-[#FF7A59]' : 'hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                <span>Shop</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isMegaMenuOpen ? 'rotate-180 text-[#FF7A59]' : ''}`} />
              </button>
            </div>

            {/* Shop by Need Direct Button */}
            <button
              onClick={() => {
                setIsMegaMenuOpen(false);
                navigateToCollection(null, 'sensory-regulation');
              }}
              onMouseEnter={() => setIsMegaMenuOpen(true)}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl hover:bg-slate-100 hover:text-slate-900 transition-all text-[#8E44AD] font-bold"
            >
              <Sparkles className="w-4 h-4 text-[#8E44AD]" />
              <span>Shop by Need</span>
            </button>

            <button
              onClick={() => {
                setIsMegaMenuOpen(false);
                navigateToCollection(null, null);
              }}
              className="px-3.5 py-2 rounded-xl hover:bg-slate-100 hover:text-slate-900 transition-all"
            >
              Best Sellers
            </button>

            <button
              onClick={() => {
                setIsMegaMenuOpen(false);
                navigateToCollection(null, null);
              }}
              className="px-3.5 py-2 rounded-xl hover:bg-slate-100 hover:text-slate-900 transition-all"
            >
              New Arrivals
            </button>

            <button
              onClick={() => {
                setIsMegaMenuOpen(false);
                navigateToCollection('Bundles', null);
              }}
              className="px-3.5 py-2 rounded-xl hover:bg-slate-100 hover:text-slate-900 transition-all text-[#FF7A59] font-bold"
            >
              Bundles
            </button>

            <button
              onClick={() => {
                setIsMegaMenuOpen(false);
                navigateToPage('about');
              }}
              className="px-3.5 py-2 rounded-xl hover:bg-slate-100 hover:text-slate-900 transition-all"
            >
              About
            </button>

            <button
              onClick={() => {
                setIsMegaMenuOpen(false);
                navigateToPage('charity');
              }}
              className="flex items-center gap-1 px-3.5 py-2 rounded-xl hover:bg-slate-100 text-[#0284C7] font-bold transition-all"
            >
              <Heart className="w-3.5 h-3.5 text-[#0284C7]" />
              <span>Charity</span>
            </button>
          </nav>

          {/* Right Header Controls (Search, Account, Cart) */}
          <div className="flex items-center gap-2">
            
            {/* Desktop Search Trigger */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="hidden sm:flex items-center gap-2 bg-slate-100 hover:bg-slate-200/80 text-slate-600 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all"
              aria-label="Search Store"
            >
              <Search className="w-4 h-4 text-slate-500" />
              <span>Search tools...</span>
              <kbd className="hidden lg:inline-block bg-white text-slate-400 px-1.5 py-0.5 rounded text-[10px]">⌘K</kbd>
            </button>

            {/* Account Link */}
            <button
              onClick={() => navigateToPage('about')}
              className="p-2.5 rounded-xl hover:bg-slate-100 text-slate-700 transition-colors hidden sm:block"
              title="Customer Account"
              aria-label="Customer Account"
            >
              <User className="w-5 h-5" />
            </button>

            {/* Cart Drawer Trigger Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center justify-center p-2.5 rounded-2xl bg-[#FF7A59] text-white hover:bg-[#E86645] transition-all shadow-sm button-lift ml-1"
              aria-label={`Shopping Cart with ${cartCount} items`}
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-[#8E44AD] text-white text-[11px] font-extrabold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow-sm animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Full-Width Mega Menu Dropdown */}
      <MegaMenu
        isOpen={isMegaMenuOpen}
        onClose={() => setIsMegaMenuOpen(false)}
      />
    </header>
  );
};
