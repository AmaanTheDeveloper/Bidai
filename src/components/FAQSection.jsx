import React, { useState } from 'react';
import { Sparkles, ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "Are the package prices fixed?",
      a: "Displayed prices are starting/package prices. Final pricing may vary based on product selection, availability, location and requirements."
    },
    {
      q: "Can I customize a package?",
      a: "Customers can discuss customization requirements with the Bidai team after submitting an inquiry."
    },
    {
      q: "Do all packages contain the same items?",
      a: "No. Each package has different inclusions tailored to different household and wedding budget tiers."
    },
    {
      q: "How do I place an order?",
      a: "Select a package, complete the order form on this website with your contact and wedding details, and submit your request."
    },
    {
      q: "How will Bidai contact me?",
      a: "Our team will contact you through WhatsApp, phone call or email shortly after receiving your order request."
    },
    {
      q: "Do I need to pay online?",
      a: "No online payment is required during this Phase 1 website launch. Payment arrangements can be discussed directly with the Bidai team."
    },
    {
      q: "Is delivery available?",
      a: "Delivery and service availability depend on location and final package requirements."
    },
    {
      q: "Can package prices change?",
      a: "Yes. Prices and package contents may change based on availability, seasonal updates, and final custom requirements."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-brand-ivory relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-beige border border-brand-gold/40 text-brand-maroon text-xs font-semibold uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
            <span>Got Questions?</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-dark mb-4">
            Frequently Asked Questions
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent mx-auto mb-4"></div>

          <p className="text-sm text-brand-muted">
            Everything you need to know about our packages, inquiry process, and delivery.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-brand-beige shadow-card overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full py-4 px-6 text-left flex items-center justify-between gap-4 font-serif text-base font-bold text-brand-dark hover:text-brand-maroon focus:outline-hidden"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-4 h-4 text-brand-gold shrink-0" />
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-brand-gold shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-brand-maroon' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-brand-muted leading-relaxed border-t border-brand-ivory">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
