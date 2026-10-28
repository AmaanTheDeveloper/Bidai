import React from 'react';
import { X, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function PrivacyPolicyModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-dark/70 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-2xl w-full border border-brand-gold shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="bg-brand-maroon text-white p-5 flex items-center justify-between border-b border-brand-gold">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-brand-gold" />
            <h3 className="font-serif text-xl font-bold">Privacy Policy</h3>
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
            At <strong>{siteConfig.businessName}</strong>, accessible from our official website, we prioritize the privacy of our clients and visitors. This Privacy Policy document outlines the types of information collected and how it is used.
          </p>

          <h4 className="font-serif font-bold text-base text-brand-maroon pt-2">1. Information We Collect</h4>
          <p>When you submit an order request or inquiry form on Bidai, we may ask you to provide:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Full Name</li>
            <li>Email Address</li>
            <li>WhatsApp / Phone Number</li>
            <li>City & Delivery Location</li>
            <li>Expected Wedding Date</li>
            <li>Expected Number of Guests</li>
            <li>Special Package Requirements or Notes</li>
          </ul>

          <h4 className="font-serif font-bold text-base text-brand-maroon pt-2">2. How We Use Your Information</h4>
          <p>We use the collected information solely for business communication and service delivery, including:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Processing package inquiries and order requests</li>
            <li>Contacting you via WhatsApp, phone call, or email to confirm specifications</li>
            <li>Providing customer support and consultation</li>
            <li>Internal record keeping for fulfillment</li>
          </ul>

          <h4 className="font-serif font-bold text-base text-brand-maroon pt-2">3. Data Protection & Security</h4>
          <p>
            We take reasonable technical and operational measures to protect your personal information. We do not sell, rent, or trade customer information to third-party marketers.
          </p>

          <h4 className="font-serif font-bold text-base text-brand-maroon pt-2">4. Contact Us</h4>
          <p>
            If you have questions regarding our Privacy Policy, please contact us at <strong>{siteConfig.email}</strong>.
          </p>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-brand-ivory border-t border-brand-beige flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-brand-maroon text-white font-semibold text-xs rounded-lg hover:bg-brand-maroon-dark"
          >
            Close Privacy Policy
          </button>
        </div>

      </div>
    </div>
  );
}
