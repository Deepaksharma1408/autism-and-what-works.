import React from 'react';
import { PARENT_RESOURCES } from '../data/storeData';
import { BookOpen, ArrowRight, Clock } from 'lucide-react';

export const ParentResourcesSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-[#F7F9FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-[#FFEAC7] text-[#D97706] px-3.5 py-1.5 rounded-full text-xs font-extrabold mb-3">
            <BookOpen className="w-4 h-4" />
            <span>Parent Guides & Advice</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Helpful Resources for Parents & Caregivers
          </h2>
          <p className="text-base text-slate-600 font-medium mt-2">
            Practical advice, sensory selection guides, and routine tips written with real family experience.
          </p>
        </div>

        {/* Resource Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PARENT_RESOURCES.map(article => (
            <div
              key={article.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-soft-sm card-hover flex flex-col justify-between"
            >
              <div>
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#8E44AD] text-xs font-extrabold px-3 py-1 rounded-full shadow-sm">
                    {article.category}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium mb-2">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="text-lg font-black text-slate-900 hover:text-[#FF7A59] transition-colors mb-2 leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-0">
                <button className="text-xs font-extrabold text-[#FF7A59] hover:underline flex items-center gap-1">
                  Read Full Guide <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
