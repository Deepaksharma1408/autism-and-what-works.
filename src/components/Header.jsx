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
        isSticky ? 'shadow-soft-md border-b border-slate-200/80 py-1.5' : 'py-2.5 border-b border-slate-100'
      }`}
      onMouseLeave={() => setIsMegaMenuOpen(false)}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Mobile Hamburger Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 rounded-xl hover:bg-slate-100 text-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-[#FF7A59]"
              aria-label="Open Mobile Navigation Menu"
            >
              <Menu className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 rounded-xl hover:bg-slate-100 text-slate-700 transition-colors sm:hidden"
              aria-label="Open Search"
            >
              <Search className="w-5 h-5" />
            </button>
          </div>

          {/* Logo */}
          <div
            onClick={() => navigateToPage('home')}
            className="flex items-center gap-2.5 cursor-pointer group shrink-0"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#FF7A59] via-[#8E44AD] to-[#0284C7] p-0.5 shadow-sm group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
                <Sparkles className="w-4.5 h-4.5 text-[#FF7A59]" />
              </div>
            </div>
            <div>
              <span className="text-base sm:text-lg font-black tracking-tight text-slate-900 block leading-none font-sans">
                Autism and What Works
              </span>
              <span className="text-[9px] font-bold text-[#8E44AD] tracking-wider uppercase block mt-0.5">
                Tried & Tested Sensory Tools
              </span>
            </div>
          </div>

          {/* Desktop Main Navigation - Centered & Breathable */}
          <nav className="hidden lg:flex items-center justify-center gap-4 xl:gap-7 font-semibold text-slate-700 text-[13px] mx-auto">
            
            {/* Shop All / Mega Menu Trigger */}
            <div onMouseEnter={() => setIsMegaMenuOpen(true)}>
              <button
                onClick={() => navigateToCollection()}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-lg transition-all ${
                  isMegaMenuOpen ? 'bg-slate-100 text-[#FF7A59]' : 'hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                <span>Shop</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isMegaMenuOpen ? 'rotate-180 text-[#FF7A59]' : ''}`} />
              </button>
            </div>

            {/* Shop by Need Direct Button */}
            <button
              onClick={() => {
                setIsMegaMenuOpen(false);
                navigateToCollection(null, 'sensory-regulation');
              }}
              onMouseEnter={() => setIsMegaMenuOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:bg-[#F2DEFA]/50 transition-all text-[#8E44AD] font-bold"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#8E44AD]" />
              <span>Shop by Need</span>
            </button>

            <button
              onClick={() => {
                setIsMegaMenuOpen(false);
                navigateToCollection(null, null);
              }}
              className="px-3 py-1.5 rounded-lg hover:bg-slate-100 hover:text-slate-900 transition-all"
            >
              Best Sellers
            </button>

            <button
              onClick={() => {
                setIsMegaMenuOpen(false);
                navigateToCollection(null, null);
              }}
              className="px-3 py-1.5 rounded-lg hover:bg-slate-100 hover:text-slate-900 transition-all"
            >
              New Arrivals
            </button>

            <button
              onClick={() => {
                setIsMegaMenuOpen(false);
                navigateToCollection('Bundles', null);
              }}
              className="px-3 py-1.5 rounded-lg hover:bg-[#FFDED3]/40 transition-all text-[#FF7A59] font-bold"
            >
              Bundles
            </button>

            <button
              onClick={() => {
                setIsMegaMenuOpen(false);
                navigateToPage('about');
              }}
              className="px-3 py-1.5 rounded-lg hover:bg-slate-100 hover:text-slate-900 transition-all"
            >
              About
            </button>

            <button
              onClick={() => {
                setIsMegaMenuOpen(false);
                navigateToPage('charity');
              }}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg hover:bg-[#E3F2FD]/50 text-[#0284C7] font-bold transition-all"
            >
              <Heart className="w-3.5 h-3.5 text-[#0284C7]" />
              <span>Charity</span>
            </button>
          </nav>

          {/* Absolute Right Corner Header Controls (Search, Account, Cart) */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0 ml-auto lg:ml-0">
            
            {/* Clean Desktop Search Icon Button */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="hidden sm:flex items-center justify-center p-2 rounded-xl hover:bg-slate-100 text-slate-700 transition-colors"
              aria-label="Search Store"
              title="Search Store"
            >
              <Search className="w-5 h-5 text-slate-700" />
            </button>

            {/* Account Icon Link */}
            <button
              onClick={() => navigateToPage('about')}
              className="p-2 rounded-xl hover:bg-slate-100 text-slate-700 transition-colors hidden sm:flex items-center justify-center"
              title="Customer Account"
              aria-label="Customer Account"
            >
              <User className="w-5 h-5 text-slate-700" />
            </button>

            {/* Cart Drawer Trigger Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center justify-center p-2.5 rounded-xl bg-[#FF7A59] text-white hover:bg-[#E86645] transition-all shadow-xs button-lift"
              aria-label={`Shopping Cart with ${cartCount} items`}
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-[#8E44AD] text-white text-[10px] font-black w-4.5 h-4.5 rounded-full flex items-center justify-center border-2 border-white shadow-xs animate-pulse">
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
