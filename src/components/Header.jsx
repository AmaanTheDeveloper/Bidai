import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, PhoneCall } from 'lucide-react';
import { siteConfig, getWhatsAppUrl } from '../config/siteConfig';

export default function Header({ onOpenPrivacy, onOpenTerms }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Packages', href: '#packages' },
    { name: "What's Included", href: '#included' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'About', href: '#about' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-brand-ivory/95 backdrop-blur-md shadow-wedding py-3 border-b border-brand-gold/30'
          : 'bg-brand-ivory py-5 border-b border-brand-beige'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group"
          >
            <img 
              src="/packages-images/logo.jpeg" 
              alt="Bidai Logo" 
              className="h-10 sm:h-12 w-auto object-contain rounded-md border border-brand-gold/40 shadow-xs group-hover:scale-105 transition-transform" 
            />
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold tracking-wider text-brand-maroon leading-tight">
                BIDAI
              </span>
              <span className="text-[10px] tracking-widest text-brand-gold uppercase font-medium">
                Wedding Packages
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-brand-dark/80 hover:text-brand-maroon transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-brand-gold after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#packages"
              onClick={(e) => handleNavClick(e, '#packages')}
              className="px-4 py-2 text-sm font-medium text-brand-maroon border border-brand-gold rounded-full hover:bg-brand-gold/10 transition-all shadow-xs"
            >
              View Packages
            </a>
            
            <a
              href={getWhatsAppUrl("Assalam-o-Alaikum Bidai, I would like to inquire about your wedding packages.")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm font-medium text-white bg-brand-maroon rounded-full hover:bg-brand-maroon-dark transition-all flex items-center gap-1.5 shadow-sm border border-brand-maroon-dark"
            >
              <MessageCircle className="w-4 h-4 text-brand-gold" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href={getWhatsAppUrl("Assalam-o-Alaikum Bidai, I would like to inquire about your wedding packages.")}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-brand-maroon bg-brand-beige/50 rounded-full border border-brand-gold/50"
              aria-label="Contact on WhatsApp"
            >
              <MessageCircle className="w-5 h-5 text-brand-gold" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-brand-dark hover:text-brand-maroon focus:outline-hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-brand-ivory border-b border-brand-gold/40 px-4 pt-4 pb-6 mt-3 shadow-xl">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-base font-medium text-brand-dark hover:text-brand-maroon py-2 border-b border-brand-beige/60"
              >
                {link.name}
              </a>
            ))}

            <div className="flex flex-col gap-3 pt-3">
              <a
                href="#packages"
                onClick={(e) => handleNavClick(e, '#packages')}
                className="w-full text-center py-2.5 text-sm font-medium text-brand-maroon border border-brand-gold rounded-lg hover:bg-brand-beige/50"
              >
                View Packages
              </a>

              <a
                href={getWhatsAppUrl("Assalam-o-Alaikum Bidai, I would like to inquire about your wedding packages.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-2.5 text-sm font-medium text-white bg-brand-maroon rounded-lg flex items-center justify-center gap-2 shadow-sm"
              >
                <MessageCircle className="w-4 h-4 text-brand-gold" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
