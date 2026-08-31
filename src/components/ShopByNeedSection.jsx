import React from 'react';
import { SHOP_BY_NEEDS } from '../data/storeData';
import { useStore } from '../context/StoreContext';
import {
  Sparkles,
  Smile,
  HeartHandshake,
  GraduationCap,
  Car,
  Puzzle,
  ShieldCheck,
  MessageSquare,
  BookOpen,
  ArrowRight
} from 'lucide-react';

const ICON_MAP = {
  Sparkles,
  Smile,
  HeartHandshake,
  GraduationCap,
  Car,
  Puzzle,
  ShieldCheck,
  MessageSquare,
  BookOpen
};

export const ShopByNeedSection = () => {
  const { navigateToCollection } = useStore();

  return (
    <section className="py-16 lg:py-24 bg-[#FFFDF8] relative overflow-hidden">
      
      {/* Background subtle elements */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#F2DEFA]/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#FFEAC7]/30 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#F2DEFA] text-[#8E44AD] px-4 py-1.5 rounded-full text-xs font-black mb-3 shadow-sm">
            <Sparkles className="w-4 h-4 text-[#8E44AD]" />
            <span>Targeted Sensory Navigation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Shop by Need
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium mt-3">
            Start with what your child needs most. We help parents find practical sensory solutions in seconds.
          </p>
        </div>

        {/* Need Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SHOP_BY_NEEDS.map((need, idx) => {
            const Icon = ICON_MAP[need.iconName] || Sparkles;
            return (
              <div
                key={need.id}
                onClick={() => navigateToCollection(null, need.id)}
                className="group relative bg-white rounded-[28px] p-6 sm:p-8 border border-slate-200/80 shadow-soft-sm hover:shadow-card-hover card-hover cursor-pointer flex flex-col justify-between overflow-hidden transition-all duration-300"
              >
                {/* Top Corner Color Accent */}
                <div className={`absolute top-0 right-0 w-36 h-36 rounded-bl-[100px] ${need.badgeBg} opacity-40 group-hover:scale-125 transition-transform duration-500`} />

                <div>
                  {/* Top Icon & Badge */}
                  <div className="flex items-center justify-between mb-6 relative z-10">
                    <div className={`p-4 rounded-2xl ${need.accentColor} group-hover:scale-110 transition-transform shadow-md`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest bg-slate-50 px-3 py-1 rounded-full border border-slate-100 shadow-2xs">
                      Need #{idx + 1}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-black text-slate-900 group-hover:text-[#FF7A59] transition-colors mb-2 leading-tight">
                    {need.title}
                  </h3>
                  <p className="text-sm text-slate-600 font-medium leading-relaxed mb-6">
                    {need.subtitle}
                  </p>
                </div>

                {/* CTA Button */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between font-black text-sm text-slate-800 group-hover:text-[#FF7A59] transition-colors">
                  <span>{need.ctaText}</span>
                  <div className="w-10 h-10 rounded-2xl bg-slate-100 group-hover:bg-[#FF7A59] group-hover:text-white flex items-center justify-center transition-all shadow-sm">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
