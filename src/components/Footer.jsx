import React from 'react';
import { siteConfig, getDisplayPhone } from '../config/siteConfig';
import { packagesData } from '../config/packagesData';
import { Phone, MessageCircle, Mail, MapPin } from 'lucide-react';

export default function Footer({ onOpenPrivacy, onOpenTerms, onSelectPackage }) {
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  const handlePackageClick = (pkgId) => {
    if (onSelectPackage) onSelectPackage(pkgId);
    const element = document.querySelector('#order-form');
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8 border-t-4 border-brand-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/packages-images/logo.jpeg" 
                alt="Bidai Logo" 
                className="h-10 w-auto object-contain rounded-md border border-brand-gold/60" 
              />
              <span className="font-serif text-2xl font-bold tracking-wider text-white">
                BIDAI
              </span>
            </div>

            <p className="font-serif italic text-sm text-brand-gold">
              "{siteConfig.tagline}"
            </p>

            <p className="text-xs text-white/70 leading-relaxed max-w-sm">
              {siteConfig.alternativeSubtext}
            </p>

            <div className="pt-2 text-xs text-white/60">
              <span>Location: </span>
              <strong className="text-white">{siteConfig.location}</strong>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif font-bold text-sm tracking-wide text-brand-gold uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              {['Home', 'Packages', "What's Included", 'How It Works', 'About', 'FAQ', 'Contact'].map((item) => {
                const href = `#${item.toLowerCase().replace(/[' ]/g, '-')}`;
                return (
                  <li key={item}>
                    <a
                      href={href}
                      onClick={(e) => handleNavClick(e, href)}
                      className="text-white/80 hover:text-brand-gold transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Packages Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-sm tracking-wide text-brand-gold uppercase">
              Wedding Packages
            </h4>
            <ul className="space-y-2 text-xs">
              {packagesData.map((pkg) => (
                <li key={pkg.id}>
                  <button
                    onClick={() => handlePackageClick(pkg.id)}
                    className="text-white/80 hover:text-brand-gold transition-colors text-left"
                  >
                    {pkg.shortName} <span className="text-[10px] text-brand-gold/70">({pkg.formattedPrice})</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-sm tracking-wide text-brand-gold uppercase">
              Contact Bidai
            </h4>
            
            <div className="space-y-2.5 text-xs text-white/80">
              <div className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                <span>Phone: {getDisplayPhone()}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                <span>WhatsApp: {siteConfig.whatsappNumber}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                <span>Email: {siteConfig.email}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                <span>{siteConfig.location}</span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-4 text-xs">
              <button
                onClick={onOpenPrivacy}
                className="text-white/70 hover:text-brand-gold underline underline-offset-2"
              >
                Privacy Policy
              </button>
              <span className="text-white/30">•</span>
              <button
                onClick={onOpenTerms}
                className="text-white/70 hover:text-brand-gold underline underline-offset-2"
              >
                Terms & Conditions
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>© 2026 Bidai. All rights reserved.</p>
          <p className="text-[11px] text-white/40">
            Har Zaroorat, Ek Bidai Package Mein.
          </p>
        </div>

      </div>
    </footer>
  );
}
