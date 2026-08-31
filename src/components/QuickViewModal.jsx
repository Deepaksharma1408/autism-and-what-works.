import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { X, Star, ShoppingBag, ShieldCheck, ArrowRight, Check } from 'lucide-react';

export const QuickViewModal = () => {
  const { quickViewProduct, setQuickViewProduct, addToCart, navigateToProduct } = useStore();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!quickViewProduct) return null;

  const handleAddToCart = () => {
    addToCart(quickViewProduct, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-md"
        onClick={() => setQuickViewProduct(null)}
      />

      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative w-full max-w-3xl bg-[#FFFDF8] rounded-3xl shadow-2xl border border-slate-200/80 overflow-hidden my-8">
          
          <button
            onClick={() => setQuickViewProduct(null)}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white text-slate-500 shadow-md backdrop-blur-sm min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 sm:p-8">
            
            {/* Image */}
            <div className="rounded-2xl overflow-hidden bg-slate-50 aspect-square border border-slate-100">
              <img
                src={quickViewProduct.image}
                alt={quickViewProduct.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Details */}
            <div className="flex flex-col justify-between space-y-4">
              <div>
                <span className="text-xs font-extrabold text-[#8E44AD] uppercase tracking-wider block mb-1">
                  {quickViewProduct.category}
                </span>

                <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                  {quickViewProduct.title}
                </h2>

                <div className="flex items-center gap-2 mt-2 text-xs font-semibold text-slate-600">
                  <div className="flex items-center text-amber-500">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span className="font-extrabold ml-1">{quickViewProduct.rating}</span>
                  </div>
                  <span>•</span>
                  <span>{quickViewProduct.reviewCount} verified Judge.me reviews</span>
                </div>

                <div className="flex items-baseline gap-2 mt-3">
                  <span className="text-2xl font-black text-slate-900">
                    ${quickViewProduct.price.toFixed(2)} AUD
                  </span>
                  {quickViewProduct.compareAtPrice && (
                    <span className="text-sm text-slate-400 line-through font-semibold">
                      ${quickViewProduct.compareAtPrice.toFixed(2)}
                    </span>
                  )}
                </div>

                <p className="text-xs text-slate-600 font-medium leading-relaxed mt-3">
                  {quickViewProduct.description}
                </p>

                {/* Highlights */}
                {quickViewProduct.whyYouLoveIt && (
                  <div className="mt-4 space-y-1 bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <span className="text-[11px] font-extrabold text-slate-800 uppercase block mb-1">
                      Why Parents Love It:
                    </span>
                    {quickViewProduct.whyYouLoveIt.slice(0, 2).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-700 font-medium">
                        <span className="text-[#FF7A59] font-bold">•</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-4 border-t border-slate-100">
                <button
                  onClick={handleAddToCart}
                  className={`w-full py-3.5 px-4 rounded-2xl font-extrabold text-sm shadow-md button-lift flex items-center justify-center gap-2 min-h-[44px] ${
                    added ? 'bg-emerald-600 text-white' : 'bg-[#FF7A59] hover:bg-[#E86645] text-white'
                  }`}
                >
                  {added ? (
                    <>
                      <Check className="w-5 h-5" />
                      <span>Added to Cart!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-5 h-5" />
                      <span>Add to Cart — ${(quickViewProduct.price * quantity).toFixed(2)}</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => {
                    setQuickViewProduct(null);
                    navigateToProduct(quickViewProduct);
                  }}
                  className="w-full text-center text-xs font-extrabold text-[#8E44AD] hover:underline flex items-center justify-center gap-1"
                >
                  <span>View Full Product Details & Safety Disclaimers</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
