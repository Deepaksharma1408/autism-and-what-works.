import React from 'react';
import { useStore } from './context/StoreContext';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Header } from './components/Header';
import { MobileDrawer } from './components/MobileDrawer';
import { HeroSection } from './components/HeroSection';
import { ShopByNeedSection } from './components/ShopByNeedSection';
import { BestSellersSection } from './components/BestSellersSection';
import { ShopByCategorySection } from './components/ShopByCategorySection';
import { ProblemSolutionSection } from './components/ProblemSolutionSection';
import { FeaturedBundles } from './components/FeaturedBundles';
import { TrustSection } from './components/TrustSection';
import { CharitySection } from './components/CharitySection';
import { ReviewsSection } from './components/ReviewsSection';
import { ParentResourcesSection } from './components/ParentResourcesSection';
import { NewsletterSection } from './components/NewsletterSection';
import { CartDrawer } from './components/CartDrawer';
import { SearchModal } from './components/SearchModal';
import { QuickViewModal } from './components/QuickViewModal';
import { CollectionPage } from './components/CollectionPage';
import { ProductDetailPage } from './components/ProductDetailPage';
import { AboutPage } from './components/AboutPage';
import { CharityPage } from './components/CharityPage';
import { Footer } from './components/Footer';

export const App = () => {
  const { currentView, toastMessage } = useStore();

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#FFFDF8]">
      <div>
        {/* Sticky Header */}
        <Header />

        {/* Off-canvas Navigation Drawer for Mobile */}
        <MobileDrawer />

        {/* Dynamic Page Views */}
        <main>
          {currentView === 'home' && (
            <>
              <HeroSection />
              <ShopByNeedSection />
              <BestSellersSection />
              <ShopByCategorySection />
              <ProblemSolutionSection />
              <FeaturedBundles />
              <TrustSection />
              <CharitySection />
              <ReviewsSection />
              <ParentResourcesSection />
              <NewsletterSection />
            </>
          )}

          {currentView === 'collection' && <CollectionPage />}
          {currentView === 'pdp' && <ProductDetailPage />}
          {currentView === 'about' && <AboutPage />}
          {currentView === 'charity' && <CharityPage />}
        </main>
      </div>

      {/* Persistent Global Cart & Search Drawers */}
      <CartDrawer />
      <SearchModal />
      <QuickViewModal />

      {/* Global Toast Notification Popup */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-5 py-3.5 rounded-2xl shadow-2xl font-extrabold text-xs flex items-center gap-2 animate-in slide-in-from-bottom-5">
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
};
