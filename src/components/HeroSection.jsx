import React from 'react';
import { useStore } from '../context/StoreContext';
import { ArrowRight, Heart, ShieldCheck, Users } from 'lucide-react';

export const HeroSection = ({ triggerKey = 0 }) => {
  const { navigateToCollection } = useStore();

  return (
    <section
      key={triggerKey}
      className="relative overflow-hidden bg-[#F7F2EB] pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-[#EBE3D7] min-h-[80vh] flex items-center"
    >
      {/* Crisp Full-Width Background Photo Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="/images/hero_background_clean.jpg"
          alt="Sensory products background photography"
          className="w-full h-full object-cover object-right md:object-center opacity-95 transition-all duration-700"
        />
        {/* Soft background gradient mask on the left for maximum text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F7F2EB] via-[#F7F2EB]/90 to-transparent max-w-3xl" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F7F2EB]/80 via-transparent to-[#F7F2EB]/40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Eyebrow */}
            <div className="reveal-up inline-block text-xs font-black text-slate-500 uppercase tracking-[0.22em]">
              SUPPORTING EVERYDAY MOMENTS
            </div>

            {/* Main Headline */}
            <h1
              className="reveal-up text-4xl sm:text-5xl lg:text-[62px] font-black text-[#1A2542] leading-[1.1] tracking-tight drop-shadow-2xs"
              style={{ animationDelay: '100ms' }}
            >
              Products that <br className="hidden sm:inline" />
              help children <br />
              <span className="text-[#709078]">Feel. </span>
              <span className="text-[#D87D6C]">Learn. </span>
              <span className="text-[#4F5D82]">Thrive.</span>
            </h1>

            {/* Supporting Copy */}
            <p
              className="reveal-up text-base sm:text-lg text-slate-700 font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed"
              style={{ animationDelay: '200ms' }}
            >
              Thoughtfully selected sensory, educational and everyday support products for children, families and educators.
            </p>

            {/* Dual CTAs */}
            <div
              className="reveal-up flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
              style={{ animationDelay: '300ms' }}
            >
              <button
                onClick={() => navigateToCollection(null, 'sensory-regulation')}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#1D2945] hover:bg-[#131C31] text-white font-extrabold text-sm shadow-lg button-lift flex items-center justify-center gap-2 min-h-[50px]"
              >
                <span>Shop by Need</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => navigateToCollection(null, null)}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/90 border border-[#DCD5CB] text-[#1D2945] hover:bg-white font-extrabold text-sm transition-all shadow-sm button-lift flex items-center justify-center gap-2 min-h-[50px]"
              >
                <span>Explore Products</span>
              </button>
            </div>

            {/* Bottom 3 Value Pillars */}
            <div
              className="reveal-up grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[#EBE3D7] text-left max-w-xl mx-auto lg:mx-0"
              style={{ animationDelay: '400ms' }}
            >
              {/* Item 1 */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#E2EBE4] text-[#709078] flex items-center justify-center shrink-0 shadow-xs">
                  <Heart className="w-5 h-5 fill-[#709078]" />
                </div>
                <div>
                  <h4 className="text-xs font-black text-[#1A2542]">Curated with Care</h4>
                  <p className="text-[11px] text-slate-600 font-semibold leading-snug">
                    Handpicked for real life and real needs.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FCEAE6] text-[#D87D6C] flex items-center justify-center shrink-0 shadow-xs">
                  <ShieldCheck className="w-5 h-5 text-[#D87D6C]" />
                </div>
                <div>
                  <h4 className="text-xs font-black text-[#1A2542]">Safe & Trusted</h4>
                  <p className="text-[11px] text-slate-600 font-semibold leading-snug">
                    High quality, safe and reliable.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#ECE8F5] text-[#8072A8] flex items-center justify-center shrink-0 shadow-xs">
                  <Users className="w-5 h-5 text-[#8072A8]" />
                </div>
                <div>
                  <h4 className="text-xs font-black text-[#1A2542]">Here to Support</h4>
                  <p className="text-[11px] text-slate-600 font-semibold leading-snug">
                    We're here for families, educators & children.
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Right Floating Sage Circle Badge Column */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end reveal-up" style={{ animationDelay: '150ms' }}>
            <div className="relative w-40 h-40 sm:w-44 sm:h-44 rounded-full bg-[#C6D4C6]/95 backdrop-blur-md p-5 shadow-2xl border-4 border-white flex flex-col items-center justify-center text-center text-[#2D402F] animate-float-slow">
              <div className="w-9 h-9 rounded-full bg-[#2D402F]/10 flex items-center justify-center mb-1.5">
                <Heart className="w-4.5 h-4.5 text-[#2D402F] fill-[#2D402F]" />
              </div>
              <span className="text-xs sm:text-sm font-black leading-tight">
                Designed for Every Child's Journey
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
