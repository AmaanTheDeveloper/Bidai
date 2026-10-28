import React from 'react';
import { Sparkles, Layers, CheckSquare, DollarSign, UserCheck, Settings, TrendingUp } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Layers,
      title: "Everything Together",
      description: "Multiple essentials through one platform."
    },
    {
      icon: CheckSquare,
      title: "Clear Packages",
      description: "Easy-to-understand package options."
    },
    {
      icon: DollarSign,
      title: "Transparent Pricing",
      description: "Prices are visible before placing an order."
    },
    {
      icon: UserCheck,
      title: "Personal Assistance",
      description: "Our team contacts customers directly."
    },
    {
      icon: Settings,
      title: "Flexible Requirements",
      description: "Customers can discuss specific needs with the Bidai team."
    },
    {
      icon: TrendingUp,
      title: "Built to Grow",
      description: "The platform can later expand into a complete digital wedding marketplace."
    }
  ];

  return (
    <section className="py-20 bg-white border-y border-brand-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-ivory border border-brand-gold/40 text-brand-maroon text-xs font-semibold uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
            <span>Key Advantages</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark mb-4">
            Why Choose Bidai
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent mx-auto mb-4"></div>

          <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
            We take the hassle out of wedding shopping by providing an organized, trustworthy, and transparent experience.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-brand-ivory/60 rounded-2xl p-6 sm:p-8 border border-brand-beige shadow-card hover:shadow-wedding hover:border-brand-gold/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-brand-gold/40 flex items-center justify-center text-brand-maroon mb-6 group-hover:bg-brand-maroon group-hover:text-brand-gold transition-colors shadow-xs">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="font-serif text-xl font-bold text-brand-dark mb-2">
                  {item.title}
                </h3>

                <p className="text-xs text-brand-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
