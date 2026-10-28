import React from 'react';
import { X, FileText } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function TermsModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-dark/70 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-2xl w-full border border-brand-gold shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="bg-brand-maroon text-white p-5 flex items-center justify-between border-b border-brand-gold">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-brand-gold" />
            <h3 className="font-serif text-xl font-bold">Terms & Conditions</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-white/10 text-white/80 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scroll Content */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-brand-dark/90 leading-relaxed">
          <p><strong>Effective Date:</strong> January 2026</p>
          
          <p>
            Welcome to <strong>{siteConfig.businessName}</strong>. By submitting an inquiry or order request through our website, you agree to the following Terms & Conditions.
          </p>

          <h4 className="font-serif font-bold text-base text-brand-maroon pt-2">1. Package Specifications & Pricing</h4>
          <p>
            All prices and package inclusions listed on the website represent standard starter offerings. Final pricing and package contents may vary based on product selection, availability, location, and customized requirements.
          </p>

          <h4 className="font-serif font-bold text-base text-brand-maroon pt-2">2. Order Requests vs. Final Contract</h4>
          <p>
            Submitting an order form on this website constitutes a request for consultation and reservation. It does not automatically guarantee product availability or form a binding financial contract until confirmed directly by the Bidai team.
          </p>

          <h4 className="font-serif font-bold text-base text-brand-maroon pt-2">3. Product Substitutions & Availability</h4>
          <p>
            In the event that specific furniture models, electronic brands, or cookware items are unavailable, Bidai reserves the right to offer equivalent quality substitutions with client consent.
          </p>

          <h4 className="font-serif font-bold text-base text-brand-maroon pt-2">4. Delivery & Event Services</h4>
          <p>
            Delivery schedules, logistics charges, and wedding event assistance depend on geographical location and final scope agreed upon during consultation.
          </p>

          <h4 className="font-serif font-bold text-base text-brand-maroon pt-2">5. Amendments</h4>
          <p>
            Bidai reserves the right to modify package offerings, descriptions, and policies at any time.
          </p>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-brand-ivory border-t border-brand-beige flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-brand-maroon text-white font-semibold text-xs rounded-lg hover:bg-brand-maroon-dark"
          >
            Close Terms & Conditions
          </button>
        </div>

      </div>
    </div>
  );
}
