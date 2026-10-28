import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../config/siteConfig';

export default function FloatingWhatsApp() {
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

  return (
    <a
      href={getWhatsAppUrl("Assalam-o-Alaikum Bidai, I would like to inquire about your wedding packages.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact Bidai on WhatsApp"
      className={`fixed bottom-6 right-6 z-40 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-brand-maroon border-2 border-brand-gold shadow-lg flex items-center justify-center transition-all duration-300 transform ${
        isVisible
          ? 'opacity-100 scale-100 translate-y-0'
          : 'opacity-0 scale-90 translate-y-4 pointer-events-none'
      } hover:scale-105 active:scale-95 hover:bg-brand-maroon-dark focus:outline-hidden`}
    >
      <MessageCircle className="w-6 h-6 text-brand-gold shrink-0" />
    </a>
  );
}
