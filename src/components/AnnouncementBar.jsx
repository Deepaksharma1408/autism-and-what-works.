import React from 'react';
import { Truck, ShieldCheck, Heart } from 'lucide-react';

export const AnnouncementBar = () => {
  return (
    <div className="bg-gradient-to-r from-[#FF7A59] via-[#8E44AD] to-[#0284C7] text-white text-xs sm:text-sm font-semibold py-2 px-4 shadow-sm">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1 sm:gap-4 text-center">
        <div className="flex items-center gap-2">
          <span>🌈 Sensory tools thoughtfully chosen for neurodivergent kids</span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-xs text-white/90">
          <span className="flex items-center gap-1">
            <Truck className="w-3.5 h-3.5" /> Free Express Shipping Over $75
          </span>
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5" /> 100% Non-Toxic & Safety Approved
          </span>
          <span className="flex items-center gap-1">
            <Heart className="w-3.5 h-3.5" /> Australian Dad-Owned
          </span>
        </div>
      </div>
    </div>
  );
};
