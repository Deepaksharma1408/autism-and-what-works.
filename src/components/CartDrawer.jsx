import React from 'react';
import { useStore } from '../context/StoreContext';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, ShieldCheck, Truck } from 'lucide-react';

export const CartDrawer = () => {
  const {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    updateCartQuantity,
    removeFromCart,
    cartTotal,
    freeShippingThreshold,
    amountToFreeShipping,
    navigateToCollection
  } = useStore();

  if (!isCartOpen) return null;

  const progressPercent = Math.min(100, (cartTotal / freeShippingThreshold) * 100);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex">
        <div className="w-screen max-w-md bg-[#FFFDF8] shadow-2xl flex flex-col justify-between">
          
          {/* Cart Header */}
          <div className="p-4 sm:p-6 border-b border-slate-200/80 bg-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#FF7A59]" />
              <h2 className="text-lg font-black text-slate-900">Your Cart</h2>
              <span className="bg-[#FFEAC7] text-[#D97706] text-xs font-extrabold px-2.5 py-0.5 rounded-full">
                {cartItems.reduce((sum, item) => sum + item.quantity, 0)} Items
              </span>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Close Cart Drawer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Free Shipping Progress Bar */}
          <div className="bg-[#F7F9FC] p-4 border-b border-slate-200/80">
            <div className="flex items-center justify-between text-xs font-bold text-slate-700 mb-1.5">
              <span className="flex items-center gap-1.5">
                <Truck className="w-4 h-4 text-[#0284C7]" />
                {amountToFreeShipping === 0 ? (
                  <span className="text-emerald-700 font-extrabold">🎉 You unlocked Free Express Shipping!</span>
                ) : (
                  <span>Add <strong className="text-[#FF7A59]">${amountToFreeShipping.toFixed(2)}</strong> for Free Express Shipping</span>
                )}
              </span>
              <span>{Math.round(progressPercent)}%</span>
            </div>
            <div className="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#FF7A59] via-[#8E44AD] to-[#0284C7] transition-all duration-500 rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#FFEAC7] text-[#D97706] mx-auto flex items-center justify-center text-2xl font-bold">
                  🛍️
                </div>
                <h3 className="text-lg font-black text-slate-900">Your cart is empty</h3>
                <p className="text-xs text-slate-500 font-medium max-w-xs mx-auto">
                  Browse our thoughtfully curated sensory tools and chewelry designed for neurodivergent kids.
                </p>
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    navigateToCollection(null, null);
                  }}
                  className="px-6 py-3 rounded-2xl bg-[#FF7A59] text-white font-extrabold text-xs shadow-md button-lift"
                >
                  Start Shopping Best Sellers
                </button>
              </div>
            ) : (
              cartItems.map(({ product, quantity }) => (
                <div
                  key={product.id}
                  className="flex gap-4 p-3.5 bg-white rounded-2xl border border-slate-100 shadow-soft-sm"
                >
                  {/* Thumbnail */}
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-20 h-20 rounded-xl object-cover bg-slate-50 shrink-0"
                  />

                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start gap-2">
                        <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 line-clamp-1">
                          {product.title}
                        </h4>
                        <button
                          onClick={() => removeFromCart(product.id)}
                          className="text-slate-400 hover:text-rose-600 transition-colors p-1"
                          aria-label={`Remove ${product.title}`}
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <span className="text-[11px] text-slate-400 font-medium">{product.category}</span>
                    </div>

                    {/* Quantity Controls & Line Price */}
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center border border-slate-200 rounded-lg bg-slate-50">
                        <button
                          onClick={() => updateCartQuantity(product.id, -1)}
                          className="p-1 text-slate-600 hover:bg-slate-200 rounded-l-lg transition-colors min-h-[32px] min-w-[32px] flex items-center justify-center"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-3 text-xs font-black text-slate-800">
                          {quantity}
                        </span>
                        <button
                          onClick={() => updateCartQuantity(product.id, 1)}
                          className="p-1 text-slate-600 hover:bg-slate-200 rounded-r-lg transition-colors min-h-[32px] min-w-[32px] flex items-center justify-center"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <span className="text-sm font-black text-slate-900">
                        ${(product.price * quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Cart Footer */}
          {cartItems.length > 0 && (
            <div className="p-4 sm:p-6 border-t border-slate-200/80 bg-white space-y-4 shadow-soft-lg">
              
              <div className="space-y-1.5 text-xs font-semibold text-slate-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-base font-black text-slate-900">${cartTotal.toFixed(2)} AUD</span>
                </div>
                <div className="flex justify-between text-[11px] text-slate-400">
                  <span>Shipping & Taxes</span>
                  <span>Calculated at Shopify Checkout</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                onClick={() => {
                  alert('Redirecting to Shopify Checkout (Secure Payment Processing)...');
                }}
                className="w-full py-4 px-6 rounded-2xl bg-[#FF7A59] hover:bg-[#E86645] text-white font-extrabold text-base shadow-lg shadow-[#FF7A59]/20 button-lift flex items-center justify-center gap-2 min-h-[44px]"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Shopify Encrypted 256-Bit SSL Checkout</span>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
};
