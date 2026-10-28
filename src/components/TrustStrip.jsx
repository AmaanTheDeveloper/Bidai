import React from 'react';
import { Layers, Sliders, DollarSign, UserCheck } from 'lucide-react';

export default function TrustStrip() {
  const pillars = [
    {
      icon: Layers,
      title: "One Platform",
      description: "Multiple wedding essentials together."
    },
    {
      icon: Sliders,
      title: "Flexible Packages",
      description: "Choose according to your requirements."
    },
    {
      icon: DollarSign,
      title: "Transparent Pricing",
      description: "Package prices are clearly displayed."
    },
    {
      icon: UserCheck,
      title: "Personal Assistance",
      description: "Our team contacts you after your order/inquiry."
    }
  ];

  return (
    <section className="bg-white border-y border-brand-gold/30 py-8 relative shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={idx}
                className="flex items-start gap-4 p-3 rounded-xl hover:bg-brand-ivory/60 transition-colors"
              >
                <div className="w-11 h-11 rounded-full bg-brand-ivory border border-brand-gold/40 flex items-center justify-center shrink-0 shadow-xs">
                  <Icon className="w-5 h-5 text-brand-maroon" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-base text-brand-dark mb-1">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-brand-muted leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
