import React from 'react';
import { useStore } from '../context/StoreContext';
import { PRODUCTS } from '../data/storeData';
import { ProductCard } from './ProductCard';
import { Heart, Sparkles, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const CharityPage = () => {
  const { navigateToProduct } = useStore();
  const charityProduct = PRODUCTS.find(p => p.handle === 'charity-support-sticker-decal');

  return (
    <div className="py-12 lg:py-20 bg-[#FFFDF8]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Hero */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-[#E0F7FA] text-[#00838F] px-3.5 py-1.5 rounded-full text-xs font-extrabold mb-4">
            <Heart className="w-4 h-4 text-pink-500" />
            <span>Community Advocacy & Support</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Charity Decals Initiative
          </h1>

          <p className="text-lg text-slate-600 font-medium mt-4 leading-relaxed">
            Every purchase of a <strong className="text-slate-900 font-extrabold">Charity Decal Sticker</strong> helps direct funding toward selected schools, neurodiversity awareness programs, and community initiatives for children.
          </p>
        </div>

        {/* Charity Product Highlight Card */}
        {charityProduct && (
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-100 shadow-soft-md mb-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5 rounded-2xl overflow-hidden shadow-sm aspect-square">
              <img
                src={charityProduct.image}
                alt={charityProduct.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="md:col-span-7 space-y-4">
              <span className="bg-[#E0F7FA] text-[#00838F] text-xs font-extrabold px-3 py-1 rounded-full">
                100% Proceeds Donated
              </span>

              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                {charityProduct.title}
              </h2>

              <p className="text-sm text-slate-600 font-medium leading-relaxed">
                {charityProduct.description}
              </p>

              <div className="space-y-2 pt-2 text-xs font-bold text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>High quality weatherproof vinyl for laptops, water bottles, and car windows</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Spreads positive neurodiversity acceptance and pride</span>
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between">
                <span className="text-2xl font-black text-slate-900">${charityProduct.price.toFixed(2)} AUD</span>
                <button
                  onClick={() => navigateToProduct(charityProduct)}
                  className="px-6 py-3.5 rounded-2xl bg-[#FF7A59] hover:bg-[#E86645] text-white font-extrabold text-xs shadow-md button-lift"
                >
                  Buy Support Sticker ($4.99)
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
