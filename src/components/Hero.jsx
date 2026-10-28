import React from 'react';
import { Sparkles, MessageCircle, ArrowRight, ShieldCheck, HeartHandshake } from 'lucide-react';
import { siteConfig, getWhatsAppUrl } from '../config/siteConfig';

export default function Hero() {
  const handleScrollToPackages = (e) => {
    e.preventDefault();
    const element = document.querySelector('#packages');
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-wedding-pattern">
      {/* Subtle Background Decorative Elements */}
      <div className="absolute top-10 right-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-brand-maroon/5 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-beige/80 border border-brand-gold/40 text-brand-maroon text-xs font-semibold tracking-wide uppercase mb-6 shadow-xs">
              {/* <Sparkles className="w-3.5 h-3.5 text-brand-gold" /> */}
              <span>Shaadi Ki Tayyari, Ab Ek Hi Platform Par</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-dark leading-tight mb-6">
              Har Zaroorat, <br className="hidden sm:inline" />
              <span className="text-brand-maroon relative inline-block">
                Ek Bidai Package Mein.
                <svg className="absolute -bottom-2 left-0 w-full h-2 text-brand-gold/60" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 9C50 3 150 2 298 9" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-brand-muted max-w-2xl mb-8 leading-relaxed font-normal">
              Shaadi ki tayyari ko simple banayein — carefully planned wedding, household and bridal essentials, all brought together in one convenient package.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="#packages"
                onClick={handleScrollToPackages}
                className="maroon-gradient-btn px-7 py-3.5 text-white font-medium rounded-full shadow-md text-center flex items-center justify-center gap-2 group border border-brand-maroon-dark"
              >
                <span>Explore Packages</span>
                <ArrowRight className="w-4 h-4 text-brand-gold group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={getWhatsAppUrl("Assalam-o-Alaikum Bidai, I would like to inquire about your wedding packages.")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 bg-white text-brand-maroon font-medium rounded-full border border-brand-gold/60 hover:bg-brand-beige/40 transition-all text-center flex items-center justify-center gap-2 shadow-xs"
              >
                <MessageCircle className="w-4 h-4 text-brand-gold" />
                <span>Talk on WhatsApp</span>
              </a>
            </div>

            {/* Trust Micro-Highlights */}
            <div className="pt-6 border-t border-brand-gold/30 grid grid-cols-2 sm:grid-cols-3 gap-4 w-full">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-brand-gold flex-shrink-0" />
                <span className="text-xs text-brand-dark font-medium">Transparent Pricing</span>
              </div>
              <div className="flex items-center gap-2">
                <HeartHandshake className="w-4 h-4 text-brand-gold flex-shrink-0" />
                <span className="text-xs text-brand-dark font-medium">Personal Assistance</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <Sparkles className="w-4 h-4 text-brand-gold flex-shrink-0" />
                <span className="text-xs text-brand-dark font-medium">Complete Household Setup</span>
              </div>
            </div>

          </div>

          {/* Right Hero Visual Cards Composition */}
          <div className="lg:col-span-5 relative">
            
            {/* Elegant Framed Container */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Decorative Gold Frame Offset */}
              <div className="absolute inset-0 border-2 border-brand-gold/40 rounded-2xl transform rotate-2 scale-102 pointer-events-none"></div>

              {/* Main Visual Showcase Card */}
              <div className="relative bg-white p-6 sm:p-8 rounded-2xl border border-brand-beige shadow-wedding overflow-hidden">
                
                {/* Header Tag */}
                <div className="flex items-center justify-between border-b border-brand-beige pb-4 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-brand-gold"></div>
                    <span className="text-xs font-semibold tracking-wider text-brand-maroon uppercase">
                      Bidai Complete Setup
                    </span>
                  </div>
                  <span className="text-xs px-2.5 py-1 bg-brand-ivory text-brand-dark rounded-full font-serif border border-brand-gold/30">
                    6 Packages Available
                  </span>
                </div>

                {/* Grid of Included Category Previews */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  
                  <div className="p-3 bg-brand-ivory rounded-xl border border-brand-beige/80 flex flex-col gap-1">
                    <span className="text-xl"></span>
                    <span className="text-xs font-semibold text-brand-dark">Bedroom & Living</span>
                    <span className="text-[10px] text-brand-muted">Bed, Sofa, Dining</span>
                  </div>

                  <div className="p-3 bg-brand-ivory rounded-xl border border-brand-beige/80 flex flex-col gap-1">
                    <span className="text-xl"></span>
                    <span className="text-xs font-semibold text-brand-dark">Kitchen & Dining</span>
                    <span className="text-[10px] text-brand-muted">Utensils, Dinner set</span>
                  </div>

                  <div className="p-3 bg-brand-ivory rounded-xl border border-brand-beige/80 flex flex-col gap-1">
                    <span className="text-xl"></span>
                    <span className="text-xs font-semibold text-brand-dark">Home Electronics</span>
                    <span className="text-[10px] text-brand-muted">Fridge, TV, Washer</span>
                  </div>

                  <div className="p-3 bg-brand-ivory rounded-xl border border-brand-beige/80 flex flex-col gap-1">
                    <span className="text-xl"></span>
                    <span className="text-xs font-semibold text-brand-dark">Bridal & Jewellery</span>
                    <span className="text-[10px] text-brand-muted">Makeup, Mehndi, Sets</span>
                  </div>

                </div>

                {/* Bottom Highlight Banner */}
                <div className="bg-brand-maroon text-white p-4 rounded-xl flex items-center justify-between border border-brand-gold/40">
                  <div>
                    <span className="block text-[11px] text-brand-gold uppercase tracking-wider font-semibold">Starting From</span>
                    <span className="font-serif text-xl font-bold">PKR 249,999</span>
                  </div>
                  <a
                    href="#packages"
                    onClick={handleScrollToPackages}
                    className="px-3.5 py-1.5 bg-brand-gold hover:bg-brand-gold-dark text-brand-dark text-xs font-bold rounded-lg transition-colors"
                  >
                    View All
                  </a>
                </div>

              </div>

              {/* Decorative Pakistani Motif Badge Floating */}
              <div className="absolute -bottom-5 -left-5 bg-brand-ivory border-2 border-brand-gold p-3 rounded-xl shadow-lg hidden sm:flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-maroon font-bold text-sm">
                  ✓
                </div>
                <div>
                  <p className="text-xs font-bold text-brand-dark">100% Transparent</p>
                  <p className="text-[10px] text-brand-muted">No Hidden Package Charges</p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
