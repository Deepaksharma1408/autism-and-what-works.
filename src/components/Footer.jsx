import React from 'react';
import { useStore } from '../context/StoreContext';
import { Sparkles, Heart, ShieldCheck, Lock } from 'lucide-react';

export const Footer = () => {
  const { navigateToPage, navigateToCollection } = useStore();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div
              onClick={() => navigateToPage('home')}
              className="flex items-center gap-3 cursor-pointer"
            >
              <div className="w-10 h-10 rounded-2xl bg-[#FF7A59] flex items-center justify-center text-white">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">
                Autism and What Works
              </span>
            </div>

            <p className="text-xs text-slate-400 font-medium leading-relaxed max-w-sm">
              Tried and tested sensory toys and educational aids for neuro-divergent and autistic children. Thoughtfully selected by an Australian dad.
            </p>

            <div className="flex items-center gap-2 text-xs font-bold text-[#FF7A59]">
              <Heart className="w-4 h-4 fill-[#FF7A59]" />
              <span>Australian Dad-Owned & Operated Store</span>
            </div>
          </div>

          {/* Column 1: Shop */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold text-white uppercase tracking-wider">
              Shop Categories
            </h4>
            <ul className="space-y-2 text-xs font-medium text-slate-400">
              <li>
                <button onClick={() => navigateToCollection('Chewelry', null)} className="hover:text-[#FF7A59] transition-colors">
                  Chewelry & Oral Sensory
                </button>
              </li>
              <li>
                <button onClick={() => navigateToCollection('Sensory Toys', null)} className="hover:text-[#FF7A59] transition-colors">
                  Sensory & Fidget Toys
                </button>
              </li>
              <li>
                <button onClick={() => navigateToCollection('Educational', null)} className="hover:text-[#FF7A59] transition-colors">
                  Educational Aids & Grips
                </button>
              </li>
              <li>
                <button onClick={() => navigateToCollection('Daily Use', null)} className="hover:text-[#FF7A59] transition-colors">
                  Daily Use & Food Trays
                </button>
              </li>
              <li>
                <button onClick={() => navigateToCollection('Movement and Balance', null)} className="hover:text-[#FF7A59] transition-colors">
                  Movement & Balance
                </button>
              </li>
              <li>
                <button onClick={() => navigateToCollection('Bundles', null)} className="hover:text-[#FF7A59] font-bold text-[#FF7A59]">
                  Sensory Bundles (Save 20%)
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Company */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold text-white uppercase tracking-wider">
              Company & Impact
            </h4>
            <ul className="space-y-2 text-xs font-medium text-slate-400">
              <li>
                <button onClick={() => navigateToPage('about')} className="hover:text-[#FF7A59] transition-colors">
                  About Us (Dad's Story)
                </button>
              </li>
              <li>
                <button onClick={() => navigateToPage('charity')} className="hover:text-[#FF7A59] transition-colors text-[#0284C7] font-bold">
                  Charity Decals Initiative
                </button>
              </li>
              <li>
                <button onClick={() => navigateToPage('about')} className="hover:text-[#FF7A59] transition-colors">
                  Product Safety Commitment
                </button>
              </li>
              <li>
                <button onClick={() => navigateToPage('about')} className="hover:text-[#FF7A59] transition-colors">
                  Community Reviews
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Customer Support */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold text-white uppercase tracking-wider">
              Support & Legal
            </h4>
            <ul className="space-y-2 text-xs font-medium text-slate-400">
              <li><span className="hover:text-white cursor-pointer">Shipping & Delivery Info</span></li>
              <li><span className="hover:text-white cursor-pointer">Returns & Exchange Policy</span></li>
              <li><span className="hover:text-white cursor-pointer">Privacy Policy</span></li>
              <li><span className="hover:text-white cursor-pointer">Terms of Service</span></li>
              <li><span className="hover:text-white cursor-pointer">Chewelry Safety Disclaimer</span></li>
            </ul>
          </div>

        </div>

        {/* Safety Disclaimer Banner */}
        <div className="py-6 border-b border-slate-800 text-[11px] text-slate-500 leading-relaxed">
          <p>
            <strong>Safety & Medical Disclaimer:</strong> Products sold on <em>Autism and What Works</em> are intended solely for sensory regulation, fidgeting, educational play, and daily routine support. Adult supervision is required for all products, especially chewelry and small toys. Products are not intended to diagnose, treat, cure, or prevent any medical condition or autism spectrum disorder.
          </p>
        </div>

        {/* Bottom Bar: Copyright & Payment Badges */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-slate-500">
          <div>
            © {new Date().getFullYear()} Autism and What Works. All rights reserved. Powered by Shopify 2.0.
          </div>

          {/* Payment Badges */}
          <div className="flex items-center gap-3 text-slate-400">
            <span className="px-2 py-1 bg-slate-800 rounded font-bold text-[10px] text-white">Shop Pay</span>
            <span className="px-2 py-1 bg-slate-800 rounded font-bold text-[10px] text-white">Apple Pay</span>
            <span className="px-2 py-1 bg-slate-800 rounded font-bold text-[10px] text-white">Visa</span>
            <span className="px-2 py-1 bg-slate-800 rounded font-bold text-[10px] text-white">Mastercard</span>
            <span className="px-2 py-1 bg-slate-800 rounded font-bold text-[10px] text-white">PayPal</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
