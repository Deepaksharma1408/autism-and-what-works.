import React from 'react';
import { useStore } from '../context/StoreContext';
import { Heart, Sparkles, ShieldCheck, UserCheck, ArrowRight } from 'lucide-react';

export const AboutPage = () => {
  const { navigateToCollection } = useStore();

  return (
    <div className="py-12 lg:py-20 bg-[#FFFDF8]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Hero */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-[#F2DEFA] text-[#8E44AD] px-3.5 py-1.5 rounded-full text-xs font-extrabold mb-4">
            <Heart className="w-4 h-4 text-[#8E44AD]" />
            <span>Australian Dad-Owned Business</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Tried and Tested Sensory Tools for Real-Life Moments
          </h1>

          <p className="text-lg text-slate-600 font-medium mt-4 leading-relaxed">
            Welcome to <strong className="text-slate-900 font-extrabold">Autism and What Works</strong>. We are a family-first business created out of hands-on experience raising a neurodivergent child.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-white rounded-3xl p-8 sm:p-12 border border-slate-100 shadow-soft-sm mb-16">
          <div className="rounded-2xl overflow-hidden shadow-md">
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800"
              alt="Dad and child reading sensory story"
              className="w-full h-80 object-cover"
            />
          </div>

          <div className="space-y-4 text-slate-700 font-medium text-sm leading-relaxed">
            <h2 className="text-2xl font-black text-slate-900">Our Story & Purpose</h2>
            <p>
              When our family started searching for sensory regulation tools, oral chewelry, and quiet classroom fidgets, we quickly noticed how overwhelming and corporate the options felt.
            </p>
            <p>
              We founded <strong>Autism and What Works</strong> to remove the guesswork for parents, caregivers, and educators. Every single item in our store is thoughtfully selected based on safety, durability, sensory feedback, and real-life usefulness.
            </p>
            <p className="text-xs text-[#8E44AD] font-bold">
              "We don't sell generic trinkets. We provide tools that help children find calm, focus, and joy."
            </p>
          </div>
        </div>

        {/* 3 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-soft-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#FFEAC7] text-[#D97706] flex items-center justify-center font-bold">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-base font-black text-slate-900">Thoughtfully Curated</h3>
            <p className="text-xs text-slate-600 font-medium leading-relaxed">
              Selected with sensory input, oral safety, motor skill growth, and classroom quietness in mind.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-soft-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#E3F2FD] text-[#0284C7] flex items-center justify-center font-bold">
              <UserCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-black text-slate-900">Dad Experience</h3>
            <p className="text-xs text-slate-600 font-medium leading-relaxed">
              Tested in real homes with real kids. We know what breaks, what works, and what brings comfort.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-soft-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#FFDED3] text-[#FF7A59] flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-black text-slate-900">Safety & Trust</h3>
            <p className="text-xs text-slate-600 font-medium leading-relaxed">
              Food-grade, BPA-free silicone for oral products, non-toxic materials, and clear age disclaimers.
            </p>
          </div>
        </div>

        {/* Bottom Call to Action */}
        <div className="text-center bg-gradient-to-r from-[#FF7A59] to-[#8E44AD] text-white p-10 rounded-3xl shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-black mb-3">Ready to Find What Works for Your Child?</h2>
          <p className="text-sm font-medium opacity-90 max-w-xl mx-auto mb-6">
            Explore our Best Sellers or start with our Shop by Need menu.
          </p>
          <button
            onClick={() => navigateToCollection(null, null)}
            className="px-8 py-4 rounded-2xl bg-white text-[#FF7A59] font-extrabold text-sm shadow-md button-lift inline-flex items-center gap-2"
          >
            <span>Explore All Products</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
