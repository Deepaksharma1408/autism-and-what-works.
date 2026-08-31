import React from 'react';
import { TRUST_PILLARS } from '../data/storeData';
import { Sparkles, Heart, UserCheck, HandHeart, ShieldCheck } from 'lucide-react';

const ICON_MAP = {
  Sparkles,
  Heart,
  UserCheck,
  HandHeart
};

export const TrustSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-[#F7F9FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-[#E3F2FD] text-[#0284C7] px-3.5 py-1.5 rounded-full text-xs font-extrabold mb-3">
            <ShieldCheck className="w-4 h-4" />
            <span>Our Commitment to You</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Why Families Choose Autism and What Works
          </h2>
          <p className="text-base text-slate-600 font-medium mt-2">
            Built by a dad who understands sensory needs firsthand. We prioritize safety, trust, and practical solutions.
          </p>
        </div>

        {/* 4 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRUST_PILLARS.map((pillar, idx) => {
            const Icon = ICON_MAP[pillar.icon] || Sparkles;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-soft-sm card-hover flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl ${pillar.bg} flex items-center justify-center mb-6 shadow-sm`}>
                    <Icon className="w-6 h-6 text-slate-800" />
                  </div>
                  <h3 className="text-lg font-black text-slate-900 mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
