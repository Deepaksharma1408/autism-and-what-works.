import React from 'react';
import { PROBLEM_SOLUTIONS } from '../data/storeData';
import { useStore } from '../context/StoreContext';
import { HelpCircle, ArrowRight, CheckCircle } from 'lucide-react';

export const ProblemSolutionSection = () => {
  const { navigateToCollection } = useStore();

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-[#FFFDF8] via-[#F2DEFA]/20 to-[#FFFDF8] border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#F2DEFA] text-[#8E44AD] px-3.5 py-1.5 rounded-full text-xs font-extrabold mb-3">
            <HelpCircle className="w-4 h-4" />
            <span>Problem → Solution Finder</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Not Sure What You Need?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium mt-3">
            Start with the challenge you're trying to solve. We've matched real family situations with tested sensory tools.
          </p>
        </div>

        {/* Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROBLEM_SOLUTIONS.map((item, idx) => (
            <div
              key={idx}
              onClick={() => navigateToCollection(null, item.needId)}
              className={`group bg-white rounded-3xl p-6 sm:p-8 shadow-soft-sm hover:shadow-card-hover card-hover cursor-pointer border border-slate-100 ${item.accent} flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center gap-2 text-xs font-extrabold text-[#8E44AD] uppercase tracking-wider mb-2">
                  <CheckCircle className="w-4 h-4 text-[#8E44AD]" />
                  <span>Challenge #{idx + 1}</span>
                </div>

                <h3 className="text-xl font-black text-slate-900 group-hover:text-[#FF7A59] transition-colors mb-3">
                  {item.problem}
                </h3>

                <p className="text-sm text-slate-600 font-medium leading-relaxed mb-6">
                  {item.solution}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between font-extrabold text-sm text-slate-900 group-hover:text-[#FF7A59]">
                <span>{item.cta}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
