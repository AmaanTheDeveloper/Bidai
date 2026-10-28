
import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../config/siteConfig';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Packages', href: '#packages' },
  { name: "What's Included", href: '#included' },
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'About', href: '#about' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
];

const whatsappMessage =
  'Assalam-o-Alaikum Bidai, I would like to inquire about your wedding packages.';

export default function Header({ onOpenPrivacy, onOpenTerms }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      let currentSection = 'home';

      navLinks.forEach((link) => {
        const section = document.getElementById(link.href.substring(1));

        if (section && section.getBoundingClientRect().top <= 160) {
          currentSection = section.id;
        }
      });

      const pageBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 5;

      if (pageBottom) {
        currentSection = 'contact';
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (event, href) => {
    event.preventDefault();

    setMobileMenuOpen(false);

    const section = document.getElementById(href.substring(1));

    if (section) {
      setActiveSection(section.id);

      const offsetTop =
        section.getBoundingClientRect().top + window.scrollY - 90;

      window.scrollTo({
        top: Math.max(0, offsetTop),
        behavior: 'smooth',
      });

      window.history.replaceState(null, '', href);
    }
  };

  const getNavClass = (link) => {
    const isActive = activeSection === link.href.substring(1);

    const baseClasses = [
      'text-sm',
      'font-medium',
      'transition-colors',
      'py-1',
      'relative',
      'after:absolute',
      'after:bottom-0',
      'after:left-0',
      'after:right-0',
      'after:h-[2px]',
      'after:bg-brand-gold',
      'after:transition-transform',
      'after:duration-300',
    ].join(' ');

    const stateClasses = isActive
      ? 'text-brand-maroon after:scale-x-100'
      : 'text-brand-dark/80 after:scale-x-0 hover:text-brand-maroon hover:after:scale-x-100';

    return baseClasses + ' ' + stateClasses;
  };

  const getMobileNavClass = (link) => {
    const isActive = activeSection === link.href.substring(1);

    const baseClasses = [
      'text-base',
      'font-medium',
      'py-2',
      'border-b',
      'border-brand-beige/60',
      'transition-colors',
    ].join(' ');

    const stateClasses = isActive
      ? 'text-brand-maroon border-l-2 border-l-brand-gold pl-3'
      : 'text-brand-dark hover:text-brand-maroon';

    return baseClasses + ' ' + stateClasses;
  };

  return (
    <header
      className={[
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-brand-ivory/95 backdrop-blur-md shadow-wedding py-3 border-b border-brand-gold/30'
          : 'bg-brand-ivory py-5 border-b border-brand-beige',
      ].join(' ')}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(event) => handleNavClick(event, '#home')}
            className="flex items-center gap-3 group"
            aria-label="Bidai Home"
          >
            <img
              src={import.meta.env.BASE_URL + 'packages-images/logo.jpeg'}
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
          <nav
            className="hidden lg:flex items-center gap-7"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(event) => handleNavClick(event, link.href)}
                className={getNavClass(link)}
                aria-current={
                  activeSection === link.href.substring(1)
                    ? 'location'
                    : undefined
                }
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#packages"
              onClick={(event) => handleNavClick(event, '#packages')}
              className="px-4 py-2 text-sm font-medium text-brand-maroon border border-brand-gold rounded-full hover:bg-brand-gold/10 transition-all shadow-xs"
            >
              View Packages
            </a>

            <a
              href={getWhatsAppUrl(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm font-medium text-white bg-brand-maroon rounded-full hover:bg-brand-maroon-dark transition-all flex items-center gap-1.5 shadow-sm border border-brand-maroon-dark"
            >
              <MessageCircle className="w-4 h-4 text-brand-gold" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Mobile Buttons */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href={getWhatsAppUrl(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-brand-maroon bg-brand-beige/50 rounded-full border border-brand-gold/50"
              aria-label="Contact on WhatsApp"
            >
              <MessageCircle className="w-5 h-5 text-brand-gold" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((previous) => !previous)}
              className="p-2 text-brand-dark hover:text-brand-maroon focus:outline-none"
              aria-label={
                mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'
              }
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-brand-ivory border-b border-brand-gold/40 px-4 pt-4 pb-6 mt-3 shadow-xl">
          <nav
            className="flex flex-col gap-3"
            aria-label="Mobile navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(event) => handleNavClick(event, link.href)}
                className={getMobileNavClass(link)}
                aria-current={
                  activeSection === link.href.substring(1)
                    ? 'location'
                    : undefined
                }
              >
                {link.name}
              </a>
            ))}

            <div className="flex flex-col gap-3 pt-3">
              <a
                href="#packages"
                onClick={(event) => handleNavClick(event, '#packages')}
                className="w-full text-center py-2.5 text-sm font-medium text-brand-maroon border border-brand-gold rounded-lg hover:bg-brand-beige/50"
              >
                View Packages
              </a>

              <a
                href={getWhatsAppUrl(whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-2.5 text-sm font-medium text-white bg-brand-maroon rounded-lg flex items-center justify-center gap-2 shadow-sm"
              >
                <MessageCircle className="w-4 h-4 text-brand-gold" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
