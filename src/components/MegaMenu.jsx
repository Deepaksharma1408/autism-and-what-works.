import React, { useState } from 'react';
import { CATEGORIES, SHOP_BY_NEEDS } from '../data/storeData';
import { useStore } from '../context/StoreContext';
import { Sparkles, ArrowRight, ShieldCheck, Smile, HeartHandshake, GraduationCap, Car, Puzzle, MessageSquare, BookOpen } from 'lucide-react';

const ICON_MAP = {
  Sparkles,
  Smile,
  HeartHandshake,
  GraduationCap,
  Car,
  Puzzle,
  ShieldCheck,
  MessageSquare,
  BookOpen
};

export const MegaMenu = ({ isOpen, onClose }) => {
  const { navigateToCollection } = useStore();
  const [activeTab, setActiveTab] = useState('needs'); // 'needs' or 'products'

  if (!isOpen) return null;

  return (
    <div
      className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-md border-b border-brand-border shadow-soft-lg z-50 transition-all duration-300 animate-in fade-in slide-in-from-top-2"
      onMouseLeave={onClose}
    >
      <div className="max-w-7xl mx-auto p-6 lg:p-8">
        {/* Pathway Tabs Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
          <div className="flex items-center gap-6">
            <button
              onClick={() => setActiveTab('needs')}
              className={`flex items-center gap-2 text-base font-bold pb-2 transition-all border-b-2 ${
                activeTab === 'needs'
                  ? 'border-[#FF7A59] text-[#FF7A59]'
                  : 'border-transparent text-slate-500 hover:text-slate-900'
              }`}
            >
              <Sparkles className="w-5 h-5" />
              <span>SHOP BY NEED (Problem-Focused)</span>
              <span className="bg-[#FFEAC7] text-[#D97706] text-xs font-semibold px-2 py-0.5 rounded-full">
                Popular
              </span>
            </button>
            <button
              onClick={() => setActiveTab('products')}
              className={`flex items-center gap-2 text-base font-bold pb-2 transition-all border-b-2 ${
                activeTab === 'products'
                  ? 'border-[#FF7A59] text-[#FF7A59]'
                  : 'border-transparent text-slate-500 hover:text-slate-900'
              }`}
            >
              <span>SHOP BY PRODUCT CATEGORY</span>
            </button>
          </div>
          <span className="text-xs text-slate-400 font-medium hidden md:inline-block">
            Designed for quick, stress-free sensory browsing 🌈
          </span>
        </div>

        {/* Tab 1: SHOP BY NEED */}
        {activeTab === 'needs' && (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {SHOP_BY_NEEDS.map((need) => {
              const Icon = ICON_MAP[need.iconName] || Sparkles;
              return (
                <div
                  key={need.id}
                  onClick={() => {
                    navigateToCollection(null, need.id);
                    onClose();
                  }}
                  className={`group p-4 rounded-2xl border border-slate-100 ${need.cardBorder} hover:shadow-soft-md transition-all cursor-pointer flex items-start gap-4 bg-gradient-to-br from-white to-[#FFFDF8]`}
                >
                  <div className={`p-3 rounded-xl ${need.accentColor} shrink-0 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1 font-bold text-slate-800 text-sm group-hover:text-[#FF7A59] transition-colors">
                      <span>{need.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </div>
                    <p className="text-xs text-slate-500 line-clamp-2 mt-1 leading-relaxed">
                      {need.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Tab 2: SHOP BY PRODUCT */}
        {activeTab === 'products' && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {CATEGORIES.map((cat) => (
              <div
                key={cat.handle}
                onClick={() => {
                  navigateToCollection(cat.name, null);
                  onClose();
                }}
                className="group p-3 rounded-xl hover:bg-slate-50 transition-all cursor-pointer flex items-center gap-3 border border-slate-100 hover:border-[#FF7A59]/20"
              >
                <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0 bg-slate-100">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800 group-hover:text-[#FF7A59] transition-colors">
                    {cat.name}
                  </h4>
                  <span className="text-xs text-slate-400 font-medium">
                    {cat.count} Items
                  </span>
                </div>
              </div>
            ))}
            <div
              onClick={() => {
                navigateToCollection(null, null);
                onClose();
              }}
              className="p-3 rounded-xl bg-gradient-to-r from-[#FF7A59]/10 to-[#8E44AD]/10 border border-[#FF7A59]/20 flex items-center justify-between cursor-pointer hover:shadow-sm"
            >
              <div>
                <span className="text-xs font-bold text-[#FF7A59] uppercase tracking-wider block">Special Sale</span>
                <span className="text-sm font-extrabold text-slate-800">Browse All Deals & Bundles</span>
              </div>
              <ArrowRight className="w-5 h-5 text-[#FF7A59]" />
            </div>
          </div>
        )}

        {/* Footer CTA in Mega Menu */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span>Need custom advice? Contact our dad-owned support team anytime.</span>
          <button
            onClick={() => {
              navigateToCollection();
              onClose();
            }}
            className="text-[#FF7A59] font-bold hover:underline flex items-center gap-1"
          >
            View Complete Product Directory <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
