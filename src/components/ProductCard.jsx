import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { Star, ShoppingBag, Eye, Check } from 'lucide-react';

export const ProductCard = ({ product }) => {
  const { addToCart, navigateToProduct, setQuickViewProduct } = useStore();
  const [isHovered, setIsHovered] = useState(false);
  const [added, setAdded] = useState(false);

  const discountPercent = product.compareAtPrice
    ? Math.round(((product.compareAtPrice - product.price) / product.compareAtPrice) * 100)
    : null;

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div
      onClick={() => navigateToProduct(product)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative bg-white rounded-3xl p-4 border border-slate-100 shadow-soft-sm hover:shadow-card-hover card-hover cursor-pointer flex flex-col justify-between h-full transition-all duration-300"
    >
      <div>
        {/* Image Container */}
        <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-slate-50 mb-4 image-zoom">
          
          {/* Main Image & Hover Swap */}
          <img
            src={isHovered && product.secondaryImage ? product.secondaryImage : product.image}
            alt={product.title}
            className="w-full h-full object-cover object-center transition-all duration-500"
            loading="lazy"
          />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
            {product.isSale && discountPercent && (
              <span className="bg-[#FF7A59] text-white text-[11px] font-extrabold px-2.5 py-1 rounded-full shadow-sm">
                SAVE {discountPercent}%
              </span>
            )}
            {product.isBestSeller && (
              <span className="bg-[#8E44AD] text-white text-[11px] font-extrabold px-2.5 py-1 rounded-full shadow-sm">
                BEST SELLER
              </span>
            )}
            {product.isSoldOut && (
              <span className="bg-slate-800 text-white text-[11px] font-extrabold px-2.5 py-1 rounded-full shadow-sm">
                SOLD OUT
              </span>
            )}
          </div>

          {/* Quick View Button on Hover */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setQuickViewProduct(product);
            }}
            className="absolute bottom-3 right-3 bg-white/90 hover:bg-white text-slate-700 p-2.5 rounded-full shadow-md backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-110 min-h-[44px] min-w-[44px] flex items-center justify-center"
            title="Quick View"
            aria-label={`Quick View ${product.title}`}
          >
            <Eye className="w-4 h-4" />
          </button>
        </div>

        {/* Product Info */}
        <div className="space-y-1.5">
          <div className="flex items-center gap-1.5 text-xs text-amber-500 font-semibold">
            <div className="flex items-center">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            </div>
            <span className="font-extrabold text-slate-800">{product.rating}</span>
            <span className="text-slate-400">({product.reviewCount})</span>
          </div>

          <h3 className="text-sm sm:text-base font-extrabold text-slate-900 group-hover:text-[#FF7A59] transition-colors line-clamp-2 leading-snug">
            {product.title}
          </h3>

          <p className="text-xs text-slate-500 font-medium line-clamp-1">
            {product.category}
          </p>
        </div>
      </div>

      {/* Price & Add to Cart Footer */}
      <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between gap-2">
        <div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-base sm:text-lg font-black text-slate-900">
              ${product.price.toFixed(2)}
            </span>
            {product.compareAtPrice && (
              <span className="text-xs text-slate-400 line-through font-semibold">
                ${product.compareAtPrice.toFixed(2)}
              </span>
            )}
          </div>
          <span className="text-[10px] text-slate-400 block font-medium">AUD • Incl. Tax</span>
        </div>

        {/* Quick Add CTA */}
        <button
          onClick={handleAddToCart}
          disabled={product.isSoldOut}
          className={`py-2.5 px-3.5 rounded-xl font-extrabold text-xs transition-all flex items-center gap-1.5 shadow-sm min-h-[44px] ${
            added
              ? 'bg-emerald-600 text-white'
              : product.isSoldOut
              ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
              : 'bg-[#FF7A59] hover:bg-[#E86645] text-white button-lift'
          }`}
          aria-label={`Add ${product.title} to Cart`}
        >
          {added ? (
            <>
              <Check className="w-4 h-4" />
              <span>Added!</span>
            </>
          ) : (
            <>
              <ShoppingBag className="w-4 h-4" />
              <span>Add</span>
            </>
          )}
        </button>
      </div>

    </div>
  );
};
