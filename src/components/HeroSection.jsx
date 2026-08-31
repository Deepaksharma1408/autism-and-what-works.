import React, { useState, useEffect, useRef } from 'react';
import { useStore } from '../context/StoreContext';
import { Sparkles, ArrowRight, ShieldCheck, Star, Truck, Check, Eye, Heart, ShoppingBag } from 'lucide-react';

const HERO_COMPOSITIONS = [
  {
    id: 'school-support',
    categoryLabel: 'School Support',
    headline: 'Products That Help Children Feel, Learn & Thrive',
    subtitle: 'Thoughtfully selected sensory, educational and everyday support products for children, families and educators.',
    mainProduct: {
      title: 'School Support Sensory Starter Pack',
      subtitle: 'Classroom Focus & Quiet Fidgets',
      price: '$49.99 AUD',
      rating: 5.0,
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1000'
    },
    secCard1: {
      title: 'Pencil Pal Grips',
      subtitle: 'Tripod Posture Aid',
      price: '$11.50 AUD',
      image: 'https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?auto=format&fit=crop&q=80&w=600'
    },
    secCard2: {
      title: '3D A-Maze Ball',
      subtitle: 'Quiet Homework Focus',
      price: '$18.99 AUD',
      image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&q=80&w=600'
    },
    floatingTag: '✨ Classroom Regulation'
  },
  {
    id: 'oral-chewelry',
    categoryLabel: 'Oral Chewelry',
    headline: 'Safe Food-Grade Chewelry & Oral Input Tools',
    subtitle: '100% silicone chew pendants designed for children who chew collars, sleeves, or pencils.',
    mainProduct: {
      title: 'Silicone Chewelry Pendant Necklace',
      subtitle: 'Breakaway Safety Clasp • BPA Free',
      price: '$16.50 AUD',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1611591475140-be3a9f0290c0?auto=format&fit=crop&q=80&w=1000'
    },
    secCard1: {
      title: 'Car Silicone Meal Tray',
      subtitle: 'Non-Slip Divided Plate',
      price: '$24.50 AUD',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=600'
    },
    secCard2: {
      title: 'Kids Ergonomic Cutlery',
      subtitle: 'Tactile Mealtime Support',
      price: '$15.99 AUD',
      image: 'https://images.unsplash.com/photo-1576867757603-05b134ebc379?auto=format&fit=crop&q=80&w=600'
    },
    floatingTag: '👅 100% Food Safe'
  },
  {
    id: 'calm-down',
    categoryLabel: 'Calm Down & Rest',
    headline: 'Visual Motions & Calming Tools for Decompression',
    subtitle: 'Rhythmic liquid timers and squishy tactile tools that soothe anxiety and support self-regulation.',
    mainProduct: {
      title: 'Cosmic Calmer Liquid Motion Timer',
      subtitle: 'Mesmerizing Soothing Rhythm',
      price: '$15.99 AUD',
      rating: 5.0,
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1000'
    },
    secCard1: {
      title: 'Amoeba Stress Reliever',
      subtitle: 'Micro-Bead Tactile Gel',
      price: '$12.99 AUD',
      image: 'https://images.unsplash.com/photo-1530325553241-4f6e7690cf36?auto=format&fit=crop&q=80&w=600'
    },
    secCard2: {
      title: 'Classic Brass Kaleidoscope',
      subtitle: 'Visual Tracking & Focus',
      price: '$19.95 AUD',
      image: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&q=80&w=600'
    },
    floatingTag: '🌙 Bedtime Decompression'
  },
  {
    id: 'deep-pressure',
    categoryLabel: 'Deep Pressure Kits',
    headline: 'Proprioceptive Movement & Heavy Work Bundles',
    subtitle: 'Assembled by parents to deliver soothing deep pressure input for high-energy moments at home.',
    mainProduct: {
      title: 'Movement & Deep Pressure Kit Bundle',
      subtitle: '4 Proprioceptive Regulation Tools',
      price: '$89.00 AUD',
      rating: 5.0,
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1000'
    },
    secCard1: {
      title: 'Pop Tube Pack (6 Piece)',
      subtitle: 'Stretch & Snap Heavy Work',
      price: '$14.95 AUD',
      image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&q=80&w=600'
    },
    secCard2: {
      title: 'Detangling Hairbrush',
      subtitle: 'Sensory Scalp Comfort',
      price: '$21.00 AUD',
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=600'
    },
    floatingTag: '📦 Save 20% Bundle'
  }
];

export const HeroSection = ({ triggerKey = 0 }) => {
  const { navigateToCollection, addToCart, setQuickViewProduct } = useStore();

  // Active Category State
  const [activeTabIdx, setActiveTabIdx] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Mouse 3D Depth Interpolation (Lerp) State
  const [mousePos, setMousePos] = useState({ targetX: 0, targetY: 0, currentX: 0, currentY: 0 });
  
  // Scroll Transformation State
  const [scrollProgress, setScrollProgress] = useState(0);

  const heroContainerRef = useRef(null);
  const animFrameRef = useRef(null);

  // Auto-cycle compositions every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleTabChange((activeTabIdx + 1) % HERO_COMPOSITIONS.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [activeTabIdx]);

  // Handle Tab Switch with Composition Rearrangement Transition
  const handleTabChange = (newIdx) => {
    if (newIdx === activeTabIdx || isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveTabIdx(newIdx);
      setIsTransitioning(false);
    }, 280);
  };

  // Mouse 3D Motion LERP Loop (Desktop Only)
  useEffect(() => {
    const updateMouseLerp = () => {
      setMousePos((prev) => {
        const dx = prev.targetX - prev.currentX;
        const dy = prev.targetY - prev.currentY;
        // Smooth linear interpolation (lerp speed: 0.06)
        if (Math.abs(dx) < 0.0001 && Math.abs(dy) < 0.0001) return prev;
        return {
          ...prev,
          currentX: prev.currentX + dx * 0.06,
          currentY: prev.currentY + dy * 0.06
        };
      });
      animFrameRef.current = requestAnimationFrame(updateMouseLerp);
    };

    animFrameRef.current = requestAnimationFrame(updateMouseLerp);
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  // Desktop Mouse Movement Handler
  const handleMouseMove = (e) => {
    if (window.innerWidth < 768 || !heroContainerRef.current) return;
    const rect = heroContainerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2; // -1 to +1
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;  // -1 to +1
    setMousePos((prev) => ({ ...prev, targetX: x, targetY: y }));
  };

  const handleMouseLeave = () => {
    setMousePos((prev) => ({ ...prev, targetX: 0, targetY: 0 }));
  };

  // Scroll Response Handler (Cinematic separation without scroll-jacking)
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.innerWidth >= 768) {
            const scrollY = window.scrollY;
            if (scrollY < 800) {
              setScrollProgress(scrollY);
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

  const comp = HERO_COMPOSITIONS[activeTabIdx];

  // Calculated dynamic transforms based on mouse LERP + scroll
  const mouseX = mousePos.currentX;
  const mouseY = mousePos.currentY;
  const scrollOffset = scrollProgress;

  // Scroll dynamics
  const textTranslateY = -scrollOffset * 0.12;
  const textOpacity = Math.max(0, 1 - scrollOffset / 650);

  const mainVisualScale = Math.max(0.92, 1 - scrollOffset * 0.0003);
  const mainVisualTranslateY = scrollOffset * 0.09;
  const secCard1ShiftX = scrollOffset * 0.22;
  const secCard2ShiftX = -scrollOffset * 0.20;

  return (
    <section
      ref={heroContainerRef}
      key={triggerKey}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden bg-gradient-to-b from-[#FFFDF8] via-[#F7F9FC] to-[#FFFDF8] pt-6 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-100 min-h-[85vh] flex items-center"
    >
      {/* Background Soft Glow Auras (Layer 0) */}
      <div className="absolute top-4 left-6 w-80 h-80 bg-[#F2DEFA]/40 rounded-full blur-3xl -z-10 hero-glow-pulse" />
      <div className="absolute bottom-6 right-8 w-[500px] h-[500px] bg-[#E3F2FD]/50 rounded-full blur-3xl -z-10 hero-glow-pulse" style={{ animationDelay: '2.5s' }} />
      <div className="absolute top-1/3 left-1/2 w-72 h-72 bg-[#FFEAC7]/40 rounded-full blur-3xl -z-10 hero-glow-pulse" style={{ animationDelay: '5s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* LEFT AREA: Content Hierarchy with Staggered Entrance & Cursor Parallax */}
          <div
            className="lg:col-span-6 space-y-6 text-center lg:text-left z-20"
            style={{
              transform: `translate3d(${mouseX * 6}px, ${mouseY * 6 + textTranslateY}px, 0)`,
              opacity: textOpacity
            }}
          >
            
            {/* Eyebrow Badge (Step 2: 150-850ms) */}
            <div className="hero-assembly-headline inline-flex items-center gap-2 bg-[#FFEAC7]/80 border border-[#D97706]/20 px-4 py-2 rounded-full text-xs font-black text-[#D97706] shadow-sm hover:scale-105 transition-transform cursor-pointer">
              <span className="text-base leading-none">🌈</span>
              <span>Support for Everyday Moments</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#D97706]"></span>
              <span className="text-slate-700 font-extrabold">Australian Dad-Owned</span>
            </div>

            {/* Main Headline (Step 3: 300-850ms) */}
            <h1
              className="hero-assembly-headline text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.12] tracking-tight"
              style={{ animationDelay: '150ms' }}
            >
              {comp.headline.split(' ').map((word, wIdx) => {
                if (['Feel,', 'Learn', '&', 'Thrive', 'Safe', 'Food-Grade', 'Visual', 'Proprioceptive'].includes(word)) {
                  return (
                    <span key={wIdx} className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#FF7A59] via-[#8E44AD] to-[#0284C7] mr-2">
                      {word}{' '}
                    </span>
                  );
                }
                return <span key={wIdx}>{word} </span>;
              })}
            </h1>

            {/* Supporting Copy (Step 4: 500-950ms) */}
            <p
              className="hero-assembly-headline text-base sm:text-lg lg:text-xl text-slate-600 font-medium max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              style={{ animationDelay: '300ms' }}
            >
              {comp.subtitle}
            </p>

            {/* Value Callouts Pill Grid */}
            <div
              className="hero-assembly-headline grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-left max-w-xl mx-auto lg:mx-0"
              style={{ animationDelay: '420ms' }}
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

            {/* Dual Action CTAs (Step 5: 650-1100ms) */}
            <div
              className="hero-assembly-headline flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3"
              style={{ animationDelay: '550ms' }}
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
              className="hero-assembly-headline flex items-center justify-center lg:justify-start gap-4 pt-2"
              style={{ animationDelay: '680ms' }}
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

          {/* RIGHT AREA: Multi-Layered Product Composition with 3D Depth & Scroll Separation */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Category Rearrangement Tabs Selector */}
              <div className="flex items-center gap-1.5 p-1.5 bg-white/90 backdrop-blur-md rounded-2xl border border-slate-200/80 shadow-soft-sm mb-6 overflow-x-auto no-scrollbar relative z-30">
                {HERO_COMPOSITIONS.map((tab, idx) => (
                  <button
                    key={tab.id}
                    onClick={() => handleTabChange(idx)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-extrabold transition-all whitespace-nowrap ${
                      activeTabIdx === idx
                        ? 'bg-[#FF7A59] text-white shadow-sm'
                        : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    {tab.categoryLabel}
                  </button>
                ))}
              </div>

              {/* Layered Composition Stage */}
              <div
                className={`relative transition-all duration-300 ${
                  isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                }`}
              >

                {/* LAYER 1: Central Primary Product Card */}
                <div
                  className="hero-assembly-visual hero-micro-main relative z-20 rounded-[32px] p-2 bg-gradient-to-tr from-[#FF7A59] via-[#8E44AD] to-[#0284C7] shadow-2xl transition-transform duration-100"
                  style={{
                    transform: `translate3d(${mouseX * 18}px, ${mouseY * 18 + mainVisualTranslateY}px, 0) scale(${mainVisualScale}) rotateX(${-mouseY * 5}deg) rotateY(${mouseX * 5}deg)`
                  }}
                >
                  <div className="relative rounded-[26px] overflow-hidden bg-white">
                    <div className="relative h-[340px] sm:h-[400px] overflow-hidden bg-slate-100">
                      <img
                        src={comp.mainProduct.image}
                        alt={comp.mainProduct.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/15 to-transparent" />
                    </div>

                    {/* Main Card Content Overlay */}
                    <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 text-white flex items-end justify-between gap-4">
                      <div>
                        <span className="inline-block bg-white/20 backdrop-blur-md text-white text-[11px] font-extrabold px-3 py-1 rounded-full mb-2">
                          {comp.floatingTag}
                        </span>
                        <h3 className="text-lg sm:text-xl font-black drop-shadow-sm leading-snug">
                          {comp.mainProduct.title}
                        </h3>
                        <p className="text-xs text-white/80 font-medium line-clamp-1 mt-0.5">
                          {comp.mainProduct.subtitle}
                        </p>
                      </div>

                      <div className="text-right shrink-0">
                        <span className="text-lg font-black text-white block">
                          {comp.mainProduct.price}
                        </span>
                        <button
                          onClick={() => navigateToCollection(null, null)}
                          className="mt-1 px-3 py-1.5 rounded-xl bg-[#FF7A59] hover:bg-[#E86645] text-white font-extrabold text-xs shadow-md button-lift flex items-center gap-1"
                        >
                          <ShoppingBag className="w-3.5 h-3.5" />
                          <span>View</span>
                        </button>
                      </div>
                    </div>

                  </div>
                </div>

                {/* LAYER 2: Secondary Overlapping Card 1 (Top-Right Depth Offset) */}
                <div
                  className="hero-assembly-sec1 hero-micro-sec1 absolute -top-8 -right-4 sm:-right-8 z-30 w-52 sm:w-60 bg-white rounded-2xl p-3 border border-slate-200/80 shadow-xl hidden sm:block transition-transform duration-100"
                  style={{
                    transform: `translate3d(${mouseX * 38 + secCard1ShiftX}px, ${mouseY * 38}px, 0) rotate(4.5deg)`
                  }}
                >
                  <div className="relative h-28 rounded-xl overflow-hidden bg-slate-50 mb-2">
                    <img
                      src={comp.secCard1.image}
                      alt={comp.secCard1.title}
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-2 right-2 bg-slate-900/80 backdrop-blur-sm text-white text-[10px] font-extrabold px-2 py-0.5 rounded-md">
                      {comp.secCard1.price}
                    </span>
                  </div>
                  <h4 className="text-xs font-black text-slate-900 line-clamp-1">
                    {comp.secCard1.title}
                  </h4>
                  <p className="text-[10px] text-slate-500 font-semibold line-clamp-1">
                    {comp.secCard1.subtitle}
                  </p>
                </div>

                {/* LAYER 3: Secondary Overlapping Card 2 (Bottom-Left Depth Offset) */}
                <div
                  className="hero-assembly-sec2 hero-micro-sec2 absolute -bottom-8 -left-4 sm:-left-8 z-30 w-52 sm:w-60 bg-white rounded-2xl p-3 border border-slate-200/80 shadow-xl hidden sm:block transition-transform duration-100"
                  style={{
                    transform: `translate3d(${mouseX * 24 + secCard2ShiftX}px, ${mouseY * 24}px, 0) rotate(-3.5deg)`
                  }}
                >
                  <div className="relative h-28 rounded-xl overflow-hidden bg-slate-50 mb-2">
                    <img
                      src={comp.secCard2.image}
                      alt={comp.secCard2.title}
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-2 right-2 bg-[#8E44AD] text-white text-[10px] font-extrabold px-2 py-0.5 rounded-md">
                      {comp.secCard2.price}
                    </span>
                  </div>
                  <h4 className="text-xs font-black text-slate-900 line-clamp-1">
                    {comp.secCard2.title}
                  </h4>
                  <p className="text-[10px] text-slate-500 font-semibold line-clamp-1">
                    {comp.secCard2.subtitle}
                  </p>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
