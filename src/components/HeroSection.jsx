import React, { useState, useEffect, useRef } from 'react';
import { useStore } from '../context/StoreContext';
import { Sparkles, ArrowRight, ShieldCheck, Star, Truck, CheckCircle2, Heart, Award } from 'lucide-react';

const HERO_FEATURED_TABS = [
  {
    id: 'sensory-regulation',
    label: 'Sensory Regulation',
    title: 'School Support Sensory Starter Pack',
    subtitle: 'Quiet Classroom Focus & Self-Regulation',
    badge: '🌈 Popular Choice',
    price: '$49.99 AUD',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'oral-chewelry',
    label: 'Oral Chewelry',
    title: 'Silicone Chewelry Pendant Necklace',
    subtitle: '100% Food-Grade Safe Oral Input',
    badge: '👅 100% Food Safe',
    price: '$16.50 AUD',
    image: 'https://images.unsplash.com/photo-1611591475140-be3a9f0290c0?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'fidgets-toys',
    label: 'Fidget & Spatial',
    title: '3D A-Maze Ball & Tactile Fidgets',
    subtitle: 'Develops Concentration & Fine Motor Dexterity',
    badge: '✨ Quiet Focus',
    price: '$18.99 AUD',
    image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'therapy-kits',
    label: 'Deep Pressure Kits',
    title: 'Movement & Deep Pressure Kit Bundle',
    subtitle: 'Proprioceptive Decompression at Home',
    badge: '📦 Value Bundle',
    price: '$89.00 AUD',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1000'
  }
];

export const HeroSection = ({ triggerKey = 0 }) => {
  const { navigateToCollection } = useStore();
  const [activeTabIdx, setActiveTabIdx] = useState(0);
  const [scrollTranslate, setScrollTranslate] = useState(0);
  const [scrollOpacity, setScrollOpacity] = useState(1);
  const heroRef = useRef(null);

  // Auto-cycle hero feature tabs crossfade (6s interval)
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTabIdx((prev) => (prev + 1) % HERO_FEATURED_TABS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Lightweight scroll interaction (desktop only, no scroll-jacking)
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.innerWidth >= 768 && heroRef.current) {
            const scrollY = window.scrollY;
            if (scrollY < 800) {
              setScrollTranslate(scrollY * 0.08);
              setScrollOpacity(Math.max(0, 1 - scrollY / 750));
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeItem = HERO_FEATURED_TABS[activeTabIdx];

  return (
    <section
      ref={heroRef}
      key={triggerKey}
      className="relative overflow-hidden bg-gradient-to-b from-[#FFFDF8] via-[#F7F9FC] to-[#FFFDF8] pt-6 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-100"
    >
      {/* Background Soft Glow Auras (Layer 0) */}
      <div className="absolute top-4 left-6 w-80 h-80 bg-[#F2DEFA]/45 rounded-full blur-3xl -z-10 animate-glow-pulse" />
      <div className="absolute bottom-6 right-8 w-[480px] h-[480px] bg-[#E3F2FD]/55 rounded-full blur-3xl -z-10 animate-glow-pulse" style={{ animationDelay: '2.5s' }} />
      <div className="absolute top-1/3 left-1/2 w-72 h-72 bg-[#FFEAC7]/45 rounded-full blur-3xl -z-10 animate-glow-pulse" style={{ animationDelay: '5s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Text Column: Content Hierarchy with Staggered Entrance */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Eyebrow Badge */}
            <div className="reveal-up inline-flex items-center gap-2 bg-[#FFEAC7]/80 border border-[#D97706]/20 px-4 py-2 rounded-full text-xs font-black text-[#D97706] shadow-sm hover:scale-105 transition-transform cursor-pointer">
              <span className="text-base leading-none">🌈</span>
              <span>Support for Everyday Moments</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#D97706]"></span>
              <span className="text-slate-700 font-extrabold">Australian Dad-Owned</span>
            </div>

            {/* Main Headline */}
            <h1
              className="reveal-up text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.12] tracking-tight"
              style={{ animationDelay: '100ms' }}
            >
              Products That Help Children{' '}
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#FF7A59] via-[#8E44AD] to-[#0284C7]">
                Feel, Learn & Thrive
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#FF7A59]/35" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0 15 Q 50 0 100 15" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span>
            </h1>

            {/* Supporting Copy */}
            <p
              className="reveal-up text-base sm:text-lg lg:text-xl text-slate-600 font-medium max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              style={{ animationDelay: '200ms' }}
            >
              Thoughtfully selected sensory, educational and everyday support products for children, families and educators.
            </p>

            {/* Value Callouts Pill Grid */}
            <div
              className="reveal-up grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-left max-w-xl mx-auto lg:mx-0"
              style={{ animationDelay: '300ms' }}
            >
              <div className="flex items-center gap-2.5 bg-white/90 backdrop-blur-md p-3 rounded-2xl border border-slate-200/80 shadow-soft-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
                <div className="w-8 h-8 rounded-xl bg-[#F2DEFA] text-[#8E44AD] flex items-center justify-center shrink-0 font-bold text-sm">
                  ✨
                </div>
                <span className="text-xs font-extrabold text-slate-800">Sensory Regulation</span>
              </div>

              <div className="flex items-center gap-2.5 bg-white/90 backdrop-blur-md p-3 rounded-2xl border border-slate-200/80 shadow-soft-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
                <div className="w-8 h-8 rounded-xl bg-[#FFDED3] text-[#FF7A59] flex items-center justify-center shrink-0 font-bold text-sm">
                  👅
                </div>
                <span className="text-xs font-extrabold text-slate-800">100% Oral Safe</span>
              </div>

              <div className="flex items-center gap-2.5 bg-white/90 backdrop-blur-md p-3 rounded-2xl border border-slate-200/80 shadow-soft-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
                <div className="w-8 h-8 rounded-xl bg-[#E3F2FD] text-[#0284C7] flex items-center justify-center shrink-0 font-bold text-sm">
                  🎒
                </div>
                <span className="text-xs font-extrabold text-slate-800">School & Travel Ready</span>
              </div>
            </div>

            {/* Dual Action CTAs */}
            <div
              className="reveal-up flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3"
              style={{ animationDelay: '400ms' }}
            >
              <button
                onClick={() => navigateToCollection(null, 'sensory-regulation')}
                className="group relative w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#FF7A59] text-white font-extrabold text-base shadow-xl shadow-[#FF7A59]/25 hover:bg-[#E86645] button-lift flex items-center justify-center gap-2 min-h-[52px]"
              >
                <Sparkles className="w-5 h-5 text-white/90" />
                <span>Shop by Need</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => navigateToCollection(null, null)}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white border-2 border-[#8E44AD] text-[#8E44AD] font-extrabold text-base hover:bg-[#F2DEFA]/40 transition-all flex items-center justify-center gap-2 shadow-sm button-lift min-h-[52px]"
              >
                <span>Explore Products</span>
              </button>
            </div>

            {/* Social Proof Bar */}
            <div
              className="reveal-up flex items-center justify-center lg:justify-start gap-4 pt-2"
              style={{ animationDelay: '500ms' }}
            >
              <div className="flex -space-x-2.5">
                <img className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=120" alt="Customer avatar" />
                <img className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120" alt="Customer avatar" />
                <img className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120" alt="Customer avatar" />
              </div>
              <div className="text-left text-xs font-semibold text-slate-600">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="font-extrabold text-slate-900 ml-1">4.9 / 5.0 Rating</span>
                </div>
                <span className="text-slate-500 font-medium">Trusted by 1,200+ Australian families</span>
              </div>
            </div>

          </div>

          {/* Right Column: Layered Product Composition with Crossfades & Depth */}
          <div
            className="lg:col-span-5 relative reveal-up"
            style={{
              animationDelay: '200ms',
              transform: `translateY(${scrollTranslate}px)`,
              opacity: scrollOpacity
            }}
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Category Selector Tabs Bar above Visual Composition */}
              <div className="flex items-center gap-1.5 p-1.5 bg-white/90 backdrop-blur-md rounded-2xl border border-slate-200/80 shadow-soft-sm mb-4 overflow-x-auto no-scrollbar">
                {HERO_FEATURED_TABS.map((tab, idx) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTabIdx(idx)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-extrabold transition-all whitespace-nowrap ${
                      activeTabIdx === idx
                        ? 'bg-[#FF7A59] text-white shadow-sm'
                        : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Layered Showcase Card Container (Layer 1) */}
              <div className="relative rounded-[32px] p-2.5 bg-gradient-to-tr from-[#FF7A59] via-[#8E44AD] to-[#0284C7] shadow-2xl">
                <div className="relative rounded-[24px] overflow-hidden bg-white">
                  
                  {/* Main Product Photography Crossfade */}
                  <div className="relative h-[410px] sm:h-[480px] overflow-hidden bg-slate-100">
                    <img
                      key={activeItem.image}
                      src={activeItem.image}
                      alt={activeItem.title}
                      className="w-full h-full object-cover transition-all duration-700 animate-in fade-in zoom-in-95"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent" />
                  </div>

                  {/* Layer 2: Floating Pill Top-Left (Independent Depth Motion) */}
                  <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 animate-layer-float-1">
                    <div className="w-10 h-10 rounded-xl bg-[#F2DEFA] text-[#8E44AD] flex items-center justify-center font-bold text-lg shadow-sm">
                      ✨
                    </div>
                    <div>
                      <span className="text-xs font-black text-slate-900 block line-clamp-1">{activeItem.title}</span>
                      <span className="text-[10px] font-bold text-[#8E44AD]">{activeItem.subtitle}</span>
                    </div>
                  </div>

                  {/* Layer 3: Floating Pill Bottom-Right (Counter Depth Motion) */}
                  <div className="absolute bottom-6 right-5 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-slate-100 max-w-[240px] animate-layer-float-2">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <div className="flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4 text-[#FF7A59]" />
                        <span className="text-xs font-black text-slate-900">Safety Approved</span>
                      </div>
                      <span className="text-xs font-black text-[#FF7A59]">{activeItem.price}</span>
                    </div>
                    <p className="text-[11px] text-slate-500 font-medium leading-tight">
                      BPA-Free, 100% food-grade silicone & sensory approved.
                    </p>
                  </div>

                  {/* Bottom Indicator Dots */}
                  <div className="absolute bottom-5 left-5 flex items-center gap-2 z-10">
                    {HERO_FEATURED_TABS.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveTabIdx(i)}
                        className={`h-2.5 rounded-full transition-all ${
                          activeTabIdx === i ? 'w-7 bg-[#FF7A59]' : 'w-2.5 bg-white/60 hover:bg-white'
                        }`}
                        aria-label={`Select tab ${i + 1}`}
                      />
                    ))}
                  </div>

                </div>
              </div>

              {/* Layer 4: Independent Floating Dispatch Badge Bottom Left */}
              <div className="absolute -bottom-6 -left-6 bg-white p-3.5 rounded-2xl shadow-xl border border-slate-100 hidden sm:flex items-center gap-3 animate-layer-float-3">
                <div className="w-9 h-9 rounded-xl bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center font-bold">
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-extrabold text-slate-900 block">Fast Dispatch</span>
                  <span className="text-[10px] text-slate-400 font-semibold">Sydney Warehouse • In Stock</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
