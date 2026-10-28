import React, { useState } from 'react';
import { packagesData, packageDisclaimer, buildPackageWhatsAppUrl } from '../config/packagesData';
import { Sparkles, Eye, ArrowRight, UtensilsCrossed, ShieldAlert, CheckCircle2, MessageCircle } from 'lucide-react';
import PackageLightboxModal from './PackageLightboxModal';

export default function PackagesSection({ onSelectPackage }) {
  const [activeLightboxImage, setActiveLightboxImage] = useState(null);
  const [activeLightboxTitle, setActiveLightboxTitle] = useState('');

  const handleOpenFullSet = (pkg) => {
    setActiveLightboxImage(pkg.fullSetImage);
    setActiveLightboxTitle(`${pkg.name} — Full Spec Sheet`);
  };

  const handleCloseFullSet = () => {
    setActiveLightboxImage(null);
    setActiveLightboxTitle('');
  };

  const handleBookPackage = (pkg) => {
    if (onSelectPackage) {
      onSelectPackage(pkg.id);
    }
    const element = document.querySelector('#order-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="packages" className="py-20 bg-brand-ivory relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-beige border border-brand-gold/40 text-brand-maroon text-xs font-semibold tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
            <span>Complete Rukhsati Solutions</span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark mb-4">
            Our Wedding Packages
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent mx-auto mb-4"></div>
          
          <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
            Choose from six carefully designed wedding & rukhsati package tiers, fully equipped with furniture, electronics, household essentials, and catering.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {packagesData.map((pkg) => {
            const isPopular = pkg.id === 'D';
            const isBikePkg = pkg.id === 'B';
            const isAllInOne = pkg.id === 'ALL_IN_ONE';

            return (
              <div
                key={pkg.id}
                className={`relative bg-white rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 border ${
                  isPopular
                    ? 'border-2 border-brand-gold shadow-wedding-hover ring-2 ring-brand-gold/20 scale-[1.01] lg:scale-[1.02]'
                    : isBikePkg || isAllInOne
                    ? 'border-2 border-brand-maroon shadow-wedding'
                    : 'border-brand-beige shadow-card hover:border-brand-gold/60 hover:shadow-wedding'
                }`}
              >
                {/* Top AI Promotional Card Image */}
                <div className="relative h-56 sm:h-64 overflow-hidden bg-brand-dark group">
                  <img
                    src={pkg.cardImage}
                    alt={pkg.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  {/* Badge overlay on top left */}
                  {pkg.badge && (
                    <div className="absolute top-3 left-3 px-3 py-1 bg-brand-maroon text-brand-gold font-bold text-[11px] tracking-wider uppercase rounded-full border border-brand-gold shadow-md flex items-center gap-1">
                      <Sparkles className="w-3 h-3 fill-brand-gold text-brand-gold" />
                      <span>{pkg.badge}</span>
                    </div>
                  )}

                  {/* Package Code Tag on Top Right */}
                  <div className="absolute top-3 right-3 px-2.5 py-0.5 bg-black/60 backdrop-blur-xs text-white/90 font-mono text-[10px] rounded border border-white/20">
                    {pkg.code}
                  </div>

                  {/* Price Tag Overlay at Bottom Left */}
                  <div className="absolute bottom-3 left-3 text-white">
                    <span className="text-[10px] uppercase tracking-wider text-brand-gold block font-semibold">
                      Package Price
                    </span>
                    <div className="font-serif text-2xl font-bold tracking-tight text-white drop-shadow-md">
                      {pkg.formattedPrice}
                    </div>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                  
                  <div>
                    {/* Package Name */}
                    <h3 className="font-serif text-xl font-bold text-brand-dark mb-1.5 leading-snug">
                      {pkg.name}
                    </h3>

                    {/* Registration Charges Notice */}
                    <div className="inline-block text-[11px] font-semibold text-brand-maroon bg-brand-maroon/10 px-2.5 py-0.5 rounded-md border border-brand-maroon/20 mb-3">
                      {pkg.registrationFee}
                    </div>

                    {/* Short Description */}
                    <p className="text-xs text-brand-muted mb-4 leading-relaxed">
                      {pkg.description}
                    </p>

                    {/* Short Major Inclusions List */}
                    <div className="mb-4">
                      <span className="text-[11px] uppercase font-bold text-brand-dark tracking-wider block mb-2 pb-1 border-b border-brand-beige">
                        Major Package Inclusions
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {pkg.shortInclusions.map((item, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center gap-1 text-[11px] font-medium bg-brand-ivory text-brand-dark px-2.5 py-1 rounded-md border border-brand-beige"
                          >
                            <CheckCircle2 className="w-3 h-3 text-brand-gold shrink-0" />
                            <span>{item}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Catering Info if Applicable */}
                    {pkg.catering && (
                      <div className="p-3 rounded-xl bg-brand-ivory/80 border border-brand-gold/40 text-xs text-brand-dark space-y-1 mb-2">
                        <div className="flex items-center gap-1.5 font-serif font-bold text-brand-maroon">
                          <UtensilsCrossed className="w-3.5 h-3.5 text-brand-gold" />
                          <span>Catering Menu Included</span>
                        </div>
                        <p className="text-[11px] text-brand-muted leading-relaxed">
                          {pkg.catering}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Card Action Buttons */}
                  <div className="space-y-2 pt-2 border-t border-brand-beige">
                    {/* View Full Set Modal Trigger Button */}
                    <button
                      onClick={() => handleOpenFullSet(pkg)}
                      className="w-full py-2.5 px-4 bg-brand-ivory text-brand-maroon hover:bg-brand-maroon hover:text-white font-semibold text-xs rounded-xl border border-brand-gold/60 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                    >
                      <Eye className="w-4 h-4 text-brand-gold" />
                      <span>View Full Set</span>
                    </button>

                    {/* Booking CTA Button */}
                    <button
                      onClick={() => handleBookPackage(pkg)}
                      className="w-full py-3 px-4 maroon-gradient-btn text-white font-bold text-xs rounded-xl border border-brand-gold/40 shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Book Package Request</span>
                      <ArrowRight className="w-4 h-4 text-brand-gold" />
                    </button>

                    {/* Direct Chat on WhatsApp Button */}
                    <a
                      href={buildPackageWhatsAppUrl(pkg)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl border border-emerald-500 shadow-xs flex items-center justify-center gap-2 text-center transition-all"
                    >
                      <MessageCircle className="w-4 h-4 text-white" />
                      <span>Chat on WhatsApp</span>
                    </a>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

        {/* Package Disclaimer Notice */}
        <div className="bg-white rounded-xl p-4 sm:p-5 border border-brand-gold/40 shadow-xs flex items-start gap-3 max-w-4xl mx-auto">
          <ShieldAlert className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
          <p className="text-xs text-brand-muted leading-relaxed">
            <strong className="text-brand-dark font-semibold">Important Note: </strong>
            {packageDisclaimer}
          </p>
        </div>

      </div>

      {/* Lightbox Modal for Original Spec Sheet Images */}
      <PackageLightboxModal
        isOpen={!!activeLightboxImage}
        imagePath={activeLightboxImage}
        title={activeLightboxTitle}
        onClose={handleCloseFullSet}
      />
    </section>
  );
}
