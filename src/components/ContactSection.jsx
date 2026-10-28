import React from 'react';
import { siteConfig, getWhatsAppUrl, getDisplayPhone } from '../config/siteConfig';
import { Phone, MessageCircle, Mail, MapPin, Sparkles } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white border-y border-brand-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-ivory border border-brand-gold/40 text-brand-maroon text-xs font-semibold uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
              <span>Get In Touch</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark mb-4">
              Contact Bidai Team
            </h2>

            <div className="w-20 h-1 bg-brand-gold mb-6"></div>

            <p className="text-sm sm:text-base text-brand-muted leading-relaxed mb-8">
              Have questions about customized packages, specific furniture designs, or wedding event support? Our team is available to assist your family.
            </p>

            <a
              href={getWhatsAppUrl("Assalam-o-Alaikum Bidai, I would like to speak with your wedding package advisor.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 maroon-gradient-btn text-white font-semibold text-sm rounded-full border border-brand-gold/40 shadow-sm"
            >
              <MessageCircle className="w-4 h-4 text-brand-gold" />
              <span>Talk to Bidai</span>
            </a>
          </div>

          {/* Right Contact Card */}
          <div className="lg:col-span-6">
            <div className="bg-brand-ivory rounded-2xl p-6 sm:p-10 border-2 border-brand-gold/40 shadow-wedding space-y-6">
              
              <div>
                <span className="font-serif text-2xl font-bold text-brand-maroon">
                  {siteConfig.businessName}
                </span>
                <p className="text-xs text-brand-muted">
                  Wedding & Household Package Solutions
                </p>
              </div>

              <div className="space-y-4 pt-2 border-t border-brand-beige">
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white border border-brand-gold/40 flex items-center justify-center text-brand-maroon shadow-xs">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-brand-muted block font-semibold">Phone</span>
                    <span className="text-sm font-semibold text-brand-dark">{getDisplayPhone()}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white border border-brand-gold/40 flex items-center justify-center text-brand-maroon shadow-xs">
                    <MessageCircle className="w-4 h-4 text-brand-gold" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-brand-muted block font-semibold">WhatsApp</span>
                    <span className="text-sm font-semibold text-brand-dark">{siteConfig.whatsappNumber}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white border border-brand-gold/40 flex items-center justify-center text-brand-maroon shadow-xs">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-brand-muted block font-semibold">Email</span>
                    <span className="text-sm font-semibold text-brand-dark">{siteConfig.email}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white border border-brand-gold/40 flex items-center justify-center text-brand-maroon shadow-xs">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-brand-muted block font-semibold">Location</span>
                    <span className="text-sm font-semibold text-brand-dark">{siteConfig.location}</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
