import React from 'react';
import { categoriesData } from '../config/packagesData';
import { Bed, Utensils, Tv, ShoppingBag, Sparkles, Gem, Users, Check } from 'lucide-react';

const iconMap = {
  Bed,
  Utensils,
  Tv,
  ShoppingBag,
  Sparkles,
  Gem,
  Users
};

export default function WhatsIncluded() {
  return (
    <section id="included" className="py-20 bg-wedding-pattern relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-beige border border-brand-gold/40 text-brand-maroon text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
            <span>Complete Setup Solutions</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark mb-4">
            What's Included in Bidai Packages
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent mx-auto mb-4"></div>

          <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
            Every Bidai package brings together essential categories of high-quality household items, bridal preparation, and wedding support under one platform.
          </p>
        </div>

        {/* Category Visual Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoriesData.map((cat) => {
            const IconComponent = iconMap[cat.icon] || Sparkles;

            return (
              <div
                key={cat.id}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-brand-beige shadow-card hover:shadow-wedding hover:border-brand-gold/50 transition-all group flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-ivory border border-brand-gold/40 flex items-center justify-center text-brand-maroon group-hover:bg-brand-maroon group-hover:text-brand-gold transition-colors shadow-xs">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-bold text-brand-dark">
                        {cat.title}
                      </h3>
                      <span className="text-[11px] text-brand-gold uppercase tracking-wider font-semibold">
                        Included Category
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-brand-muted mb-6 leading-relaxed">
                    {cat.description}
                  </p>

                  {/* Included Items Checklist */}
                  <div className="bg-brand-ivory/60 rounded-xl p-4 border border-brand-beige/80">
                    <ul className="grid grid-cols-2 gap-2 text-xs">
                      {cat.items.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-brand-dark/90">
                          <Check className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                          <span className="truncate">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-brand-beige/60 flex items-center justify-between text-xs">
                  <span className="text-brand-muted">Varies by Package Tier</span>
                  <a href="#packages" className="text-brand-maroon font-semibold hover:underline">
                    View Packages →
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
