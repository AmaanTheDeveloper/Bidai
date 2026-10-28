import React, { useState, useEffect } from 'react';
import { MessageCircle, ArrowUp } from 'lucide-react';
import { getWhatsAppUrl } from '../config/siteConfig';

export default function FloatingWidgets() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToTop = () => {
    const homeElement = document.querySelector('#home');
    if (homeElement) {
      const offsetTop = homeElement.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3">
      
      {/* Back to Top Arrow Button (Stacked above WhatsApp) */}
      

      {/* Floating Circular WhatsApp Icon */}
      <a
        href={getWhatsAppUrl("Assalam-o-Alaikum Bidai, I would like to inquire about your wedding packages.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact Bidai on WhatsApp"
        className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-brand-maroon border-2 border-brand-gold shadow-lg flex items-center justify-center transition-all duration-300 transform ${
          isVisible
            ? 'opacity-100 scale-100 translate-y-0'
            : 'opacity-0 scale-90 translate-y-4 pointer-events-none'
        } hover:scale-105 active:scale-95 hover:bg-brand-maroon-dark focus:outline-hidden`}
      >
        <MessageCircle className="w-6 h-6 text-brand-gold shrink-0" />
      </a>


<button
        onClick={handleScrollToTop}
        aria-label="Scroll back to top"
        className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white text-brand-maroon border border-brand-gold/60 shadow-md flex items-center justify-center transition-all duration-300 transform ${
          isVisible
            ? 'opacity-100 scale-100 translate-y-0'
            : 'opacity-0 scale-90 translate-y-4 pointer-events-none'
        } hover:bg-brand-maroon hover:text-white hover:border-brand-gold active:scale-95 focus:outline-hidden cursor-pointer`}
      >
        <ArrowUp className="w-5 h-5 shrink-0" />
      </button>
    </div>
  );
}
