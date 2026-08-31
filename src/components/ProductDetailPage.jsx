import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { PRODUCTS } from '../data/storeData';
import { ProductCard } from './ProductCard';
import { Star, ShieldCheck, Truck, RotateCcw, Plus, Minus, ShoppingBag, Heart, ChevronDown, Check, ArrowRight } from 'lucide-react';

export const ProductDetailPage = () => {
  const { selectedProduct, addToCart, navigateToPage, navigateToProduct } = useStore();
  const [selectedImage, setSelectedImage] = useState(selectedProduct?.image);
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState('why'); // 'why', 'how', 'safety', 'when'
  const [added, setAdded] = useState(false);

  if (!selectedProduct) return null;

  const images = [selectedProduct.image, selectedProduct.secondaryImage].filter(Boolean);

  const handleAddToCart = () => {
    addToCart(selectedProduct, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const relatedProducts = PRODUCTS.filter(
    p => p.id !== selectedProduct.id && (p.category === selectedProduct.category || p.needs.some(n => selectedProduct.needs.includes(n)))
  ).slice(0, 3);

  return (
    <div className="py-8 bg-[#FFFDF8] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs font-bold text-slate-500 mb-8">
          <button onClick={() => navigateToPage('home')} className="hover:text-[#FF7A59]">Home</button>
          <span>/</span>
          <span className="hover:text-[#FF7A59] cursor-pointer">{selectedProduct.category}</span>
          <span>/</span>
          <span className="text-slate-900 font-extrabold line-clamp-1">{selectedProduct.title}</span>
        </nav>

        {/* Top PDP Layout (Gallery + Product Info) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 bg-white rounded-3xl p-6 sm:p-10 border border-slate-100 shadow-soft-sm mb-16">
          
          {/* Left Gallery */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 shadow-sm">
              <img
                src={selectedImage || selectedProduct.image}
                alt={selectedProduct.title}
                className="w-full h-full object-cover"
              />
              {selectedProduct.isSale && (
                <span className="absolute top-4 left-4 bg-[#FF7A59] text-white text-xs font-extrabold px-3 py-1 rounded-full shadow-sm">
                  SALE
                </span>
              )}
            </div>

            {/* Thumbnail Navigation */}
            {images.length > 1 && (
              <div className="flex items-center gap-3">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(img)}
                    className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                      selectedImage === img ? 'border-[#FF7A59] shadow-sm' : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Guarantees Box */}
            <div className="grid grid-cols-3 gap-2 pt-4 text-center">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <Truck className="w-5 h-5 text-[#0284C7] mx-auto mb-1" />
                <span className="text-[11px] font-extrabold text-slate-800 block">Fast Dispatch</span>
                <span className="text-[10px] text-slate-400">Australia Wide</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <ShieldCheck className="w-5 h-5 text-[#8E44AD] mx-auto mb-1" />
                <span className="text-[11px] font-extrabold text-slate-800 block">Safety Tested</span>
                <span className="text-[10px] text-slate-400">BPA-Free Silicone</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <RotateCcw className="w-5 h-5 text-[#FF7A59] mx-auto mb-1" />
                <span className="text-[11px] font-extrabold text-slate-800 block">Dad-Owned</span>
                <span className="text-[10px] text-slate-400">Personal Support</span>
              </div>
            </div>

          </div>

          {/* Right Product Details */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#F2DEFA] text-[#8E44AD] px-3 py-1 rounded-full text-xs font-extrabold mb-3">
                <span>{selectedProduct.category}</span>
                <span>•</span>
                <span>{selectedProduct.productType}</span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 leading-tight">
                {selectedProduct.title}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-3 mt-3 text-sm font-semibold">
                <div className="flex items-center text-amber-500">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span className="font-extrabold text-slate-900 ml-1.5">{selectedProduct.rating}</span>
                </div>
                <span className="text-slate-400">•</span>
                <span className="text-slate-600 font-bold">{selectedProduct.reviewCount} Verified Judge.me Reviews</span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3 mt-4">
                <span className="text-3xl font-black text-slate-900">
                  ${selectedProduct.price.toFixed(2)} AUD
                </span>
                {selectedProduct.compareAtPrice && (
                  <span className="text-base text-slate-400 line-through font-semibold">
                    ${selectedProduct.compareAtPrice.toFixed(2)}
                  </span>
                )}
                <span className="text-xs font-extrabold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
                  In Stock & Ready to Ship
                </span>
              </div>

              <p className="text-sm text-slate-600 font-medium leading-relaxed mt-4">
                {selectedProduct.description}
              </p>

              {/* Quantity Selector & Add to Cart */}
              <div className="space-y-4 pt-6 border-t border-slate-100 mt-6">
                <div className="flex items-center gap-4">
                  <span className="text-xs font-extrabold text-slate-700">Quantity:</span>
                  <div className="flex items-center border border-slate-200 rounded-xl bg-slate-50">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-2.5 text-slate-600 hover:bg-slate-200 rounded-l-xl transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-4 text-sm font-black text-slate-900">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-2.5 text-slate-600 hover:bg-slate-200 rounded-r-xl transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    onClick={handleAddToCart}
                    className={`py-4 px-6 rounded-2xl font-extrabold text-base shadow-lg button-lift flex items-center justify-center gap-2 min-h-[44px] ${
                      added ? 'bg-emerald-600 text-white' : 'bg-[#FF7A59] hover:bg-[#E86645] text-white shadow-[#FF7A59]/20'
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
                        <span>Add to Cart — ${(selectedProduct.price * quantity).toFixed(2)}</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => {
                      handleAddToCart();
                    }}
                    className="py-4 px-6 rounded-2xl bg-[#8E44AD] hover:bg-[#7B1FA2] text-white font-extrabold text-base shadow-md button-lift flex items-center justify-center gap-2 min-h-[44px]"
                  >
                    <span>Buy Now with Shop Pay</span>
                  </button>
                </div>
              </div>

            </div>

            {/* Content Accordions */}
            <div className="border-t border-slate-100 pt-6 space-y-3">
              
              {/* Accordion 1: Why You'll Love It */}
              <div className="border border-slate-100 rounded-2xl overflow-hidden bg-slate-50/50">
                <button
                  onClick={() => setActiveAccordion(activeAccordion === 'why' ? null : 'why')}
                  className="w-full p-4 text-left font-extrabold text-slate-900 text-sm flex items-center justify-between min-h-[44px]"
                >
                  <span>Why You'll Love It</span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${activeAccordion === 'why' ? 'rotate-180' : ''}`} />
                </button>
                {activeAccordion === 'why' && (
                  <div className="p-4 pt-0 text-xs text-slate-600 font-medium space-y-2 border-t border-slate-100/80 bg-white">
                    {selectedProduct.whyYouLoveIt?.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="text-[#FF7A59] font-extrabold">•</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Accordion 2: How to Use It */}
              <div className="border border-slate-100 rounded-2xl overflow-hidden bg-slate-50/50">
                <button
                  onClick={() => setActiveAccordion(activeAccordion === 'how' ? null : 'how')}
                  className="w-full p-4 text-left font-extrabold text-slate-900 text-sm flex items-center justify-between min-h-[44px]"
                >
                  <span>How to Use It & Clean</span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${activeAccordion === 'how' ? 'rotate-180' : ''}`} />
                </button>
                {activeAccordion === 'how' && (
                  <div className="p-4 pt-0 text-xs text-slate-600 font-medium border-t border-slate-100/80 bg-white">
                    <p>{selectedProduct.howToUse}</p>
                  </div>
                )}
              </div>

              {/* Accordion 3: Safety & Materials */}
              <div className="border border-slate-100 rounded-2xl overflow-hidden bg-slate-50/50">
                <button
                  onClick={() => setActiveAccordion(activeAccordion === 'safety' ? null : 'safety')}
                  className="w-full p-4 text-left font-extrabold text-slate-900 text-sm flex items-center justify-between min-h-[44px]"
                >
                  <span>Safety Information & Disclaimers</span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${activeAccordion === 'safety' ? 'rotate-180' : ''}`} />
                </button>
                {activeAccordion === 'safety' && (
                  <div className="p-4 pt-0 text-xs text-amber-900 font-medium border-t border-slate-100/80 bg-amber-50/40">
                    <p className="leading-relaxed">{selectedProduct.safetyInfo}</p>
                    <p className="mt-2 text-[11px] text-slate-400 italic">
                      Disclaimer: Products are intended for sensory regulation, play, and learning. Products do not diagnose, treat, or cure medical conditions.
                    </p>
                  </div>
                )}
              </div>

            </div>

          </div>

        </div>

        {/* Related Products ("You May Also Like") */}
        {relatedProducts.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-black text-slate-900 mb-6">You May Also Like</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
