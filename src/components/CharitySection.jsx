import React from 'react';
import { useStore } from '../context/StoreContext';
import { Heart, ArrowRight, Sparkles } from 'lucide-react';

export const CharitySection = () => {
  const { navigateToPage } = useStore();

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-r from-[#8E44AD] to-[#0284C7] text-white relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-2xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-8 space-y-4 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-extrabold text-white">
              <Heart className="w-4 h-4 text-pink-300" />
              <span>Giving Back Initiative</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
              Every Purchase Can Help Support the Community
            </h2>

            <p className="text-base sm:text-lg text-white/90 font-medium max-w-2xl leading-relaxed">
              Through our Charity Decals initiative, proceeds from selected support stickers are directed toward neurodiversity programs, school equipment, and community initiatives supporting neurodivergent kids.
            </p>
          </div>

          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <button
              onClick={() => navigateToPage('charity')}
              className="px-8 py-4 rounded-2xl bg-white text-[#8E44AD] font-extrabold text-base shadow-xl hover:bg-slate-50 button-lift flex items-center gap-2"
            >
              <span>Support Through Charity Decals</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
