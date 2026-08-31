import React, { createContext, useContext, useState } from 'react';
import { PRODUCTS } from '../data/storeData';

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  // Navigation & View state
  const [currentView, setCurrentView] = useState('home'); // 'home', 'collection', 'pdp', 'about', 'charity'
  const [selectedProduct, setSelectedProduct] = useState(PRODUCTS[0]);
  const [selectedNeedFilter, setSelectedNeedFilter] = useState(null);
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState(null);

  // Cart state
  const [cartItems, setCartItems] = useState([
    {
      product: PRODUCTS[0], // 3D A-Maze Ball
      quantity: 1
    },
    {
      product: PRODUCTS[2], // Silicone Chewelry Pendant
      quantity: 2
    }
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  // Toast Notification
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const addToCart = (product, quantity = 1) => {
    setCartItems(prevItems => {
      const existing = prevItems.find(item => item.product.id === product.id);
      if (existing) {
        return prevItems.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevItems, { product, quantity }];
    });
    showToast(`Added "${product.title}" to your cart! 🌈`);
    setIsCartOpen(true);
  };

  const updateCartQuantity = (productId, delta) => {
    setCartItems(prevItems =>
      prevItems
        .map(item => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.product.id !== productId));
    showToast('Item removed from cart.');
  };

  const cartTotal = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const freeShippingThreshold = 75.00;
  const amountToFreeShipping = Math.max(0, freeShippingThreshold - cartTotal);

  const navigateToProduct = (product) => {
    setSelectedProduct(product);
    setCurrentView('pdp');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToCollection = (categoryName = null, needId = null) => {
    setSelectedCategoryFilter(categoryName);
    setSelectedNeedFilter(needId);
    setCurrentView('collection');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToPage = (viewName) => {
    setCurrentView(viewName);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <StoreContext.Provider
      value={{
        currentView,
        setCurrentView,
        selectedProduct,
        setSelectedProduct,
        selectedNeedFilter,
        setSelectedNeedFilter,
        selectedCategoryFilter,
        setSelectedCategoryFilter,
        cartItems,
        addToCart,
        updateCartQuantity,
        removeFromCart,
        cartTotal,
        cartCount,
        freeShippingThreshold,
        amountToFreeShipping,
        isCartOpen,
        setIsCartOpen,
        isSearchOpen,
        setIsSearchOpen,
        isMobileMenuOpen,
        setIsMobileMenuOpen,
        quickViewProduct,
        setQuickViewProduct,
        toastMessage,
        showToast,
        navigateToProduct,
        navigateToCollection,
        navigateToPage
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
