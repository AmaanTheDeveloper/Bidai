import React from 'react';
import { Sparkles, PackageCheck, Send, PhoneCall, CheckCircle } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Choose Your Package",
      description: "Explore packages and select the one that matches your requirements.",
      icon: PackageCheck
    },
    {
      num: "02",
      title: "Place Your Order",
      description: "Submit your details through the Bidai order form.",
      icon: Send
    },
    {
      num: "03",
      title: "We Contact You",
      description: "Our team receives your request and contacts you to discuss requirements.",
      icon: PhoneCall
    },
    {
      num: "04",
      title: "Finalize Your Details",
      description: "Package specifications, availability, location and final requirements are confirmed with you.",
      icon: CheckCircle
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white border-y border-brand-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-ivory border border-brand-gold/40 text-brand-maroon text-xs font-semibold uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
            <span>Simple 4-Step Process</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark mb-4">
            How Bidai Works
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent mx-auto mb-4"></div>

          <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
            Shaadi ki tayyari ab simple banayein. Follow these 4 easy steps to start your wedding preparation with Bidai.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative bg-brand-ivory rounded-2xl p-6 sm:p-8 border border-brand-beige/90 shadow-card flex flex-col justify-between group hover:border-brand-gold hover:shadow-wedding transition-all"
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-4xl font-bold text-brand-gold/70 group-hover:text-brand-gold transition-colors">
                      {step.num}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-white border border-brand-gold/40 flex items-center justify-center text-brand-maroon shadow-xs group-hover:bg-brand-maroon group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-brand-dark mb-3">
                    {step.title}
                  </h3>

                  <p className="text-xs text-brand-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Progress Indicator */}
                <div className="mt-6 pt-4 border-t border-brand-beige/80 flex items-center gap-2">
                  <div className="h-1 flex-1 bg-brand-beige rounded-full overflow-hidden">
                    <div className="h-full bg-brand-gold w-full"></div>
                  </div>
                  <span className="text-[10px] text-brand-muted font-mono uppercase">Step {idx + 1} of 4</span>
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
