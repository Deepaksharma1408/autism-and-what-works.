import React from 'react';
import { REVIEWS } from '../data/storeData';
import { Star, CheckCircle, Quote } from 'lucide-react';

export const ReviewsSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-[#FFFDF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-800 px-3.5 py-1.5 rounded-full text-xs font-extrabold mb-3">
            <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
            <span>Judge.me Verified Customer Reviews</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            What Parents Are Saying
          </h2>
          <p className="text-base text-slate-600 font-medium mt-2">
            Real feedback from parents, caregivers, and educators who use our sensory tools daily.
          </p>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS.map(review => (
            <div
              key={review.id}
              className="bg-white rounded-3xl p-6 border border-slate-100 shadow-soft-sm card-hover flex flex-col justify-between"
            >
              <div>
                <Quote className="w-8 h-8 text-[#FF7A59]/20 mb-3" />
                
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs font-bold text-slate-400 ml-1.5">{review.date}</span>
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed mb-4 italic">
                  "{review.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <div className="flex items-center gap-1.5 font-extrabold text-xs text-slate-900">
                  <span>{review.name}</span>
                  {review.verified && (
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-500" title="Verified Judge.me Buyer" />
                  )}
                </div>
                <span className="text-[11px] text-[#8E44AD] font-semibold block mt-0.5">
                  Verified Buyer • {review.productName}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
