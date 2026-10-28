import React, { useState, useEffect } from 'react';
import { packagesData } from '../config/packagesData';
import { createNormalizedOrder, sendOrderEmails } from '../services/emailService';
import { Sparkles, Send, ShieldAlert } from 'lucide-react';

export default function OrderFormSection({ selectedPackageId, onOrderSuccess }) {
  const initialFormState = {
    fullName: '',
    email: '',
    whatsapp: '',
    city: 'Karachi',
    contactMethod: 'WhatsApp',
    weddingDate: '',
    expectedGuests: '',
    packageId: selectedPackageId || 'D',
    additionalRequirements: '',
    agreedDisclaimer: false,
    honeypot: ''
  };

  const [formData, setFormData] = useState(initialFormState);
  const [formError, setFormError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (selectedPackageId) {
      setFormData(prev => ({ ...prev, packageId: selectedPackageId }));
    }
  }, [selectedPackageId]);

  const currentPackage = packagesData.find(p => p.id === formData.packageId) || packagesData[3];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (formError) setFormError('');
  };

  const generateOrderId = () => {
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    return `BID-${randomNum}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.honeypot) return; // Anti-spam reject

    // Form Validation
    if (!formData.fullName.trim()) {
      setFormError('Please enter your full name.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      setFormError('Please enter a valid email address (e.g. amaanafzal720@gmail.com).');
      return;
    }
    if (!formData.whatsapp.trim() || formData.whatsapp.length < 8) {
      setFormError('Please enter a valid WhatsApp phone number.');
      return;
    }
    if (!formData.city.trim()) {
      setFormError('Please enter your city.');
      return;
    }
    if (!formData.weddingDate) {
      setFormError('Please select your expected wedding date.');
      return;
    }
    if (!formData.expectedGuests || !formData.expectedGuests.trim()) {
      setFormError('Please enter the expected number of guests.');
      return;
    }
    if (!formData.agreedDisclaimer) {
      setFormError('Please confirm the package terms acknowledgment checkbox.');
      return;
    }

    setIsSubmitting(true);

    // 1. Generate Order ID
    const orderId = generateOrderId();

    // 2. Create Normalized Order Object
    const normalizedOrder = createNormalizedOrder({
      orderId,
      customerName: formData.fullName.trim(),
      customerEmail: formData.email.trim(),
      customerWhatsApp: formData.whatsapp.trim(),
      city: formData.city.trim(),
      packageId: currentPackage.id,
      packageName: currentPackage.name,
      packagePrice: currentPackage.formattedPrice,
      weddingDate: formData.weddingDate,
      expectedGuests: formData.expectedGuests.trim(),
      additionalRequirements: formData.additionalRequirements.trim()
    });

    // 3. Dispatch Email Service
    const emailResult = await sendOrderEmails(normalizedOrder);

    setIsSubmitting(false);

    // 4. RESET FORM COMPLETELY
    setFormData(initialFormState);
    setFormError('');

    // 5. Trigger Success Modal Flow with final submitted order data
    if (onOrderSuccess) {
      onOrderSuccess({
        order: normalizedOrder,
        emailStatus: emailResult
      });
    }
  };

  return (
    <section id="order-form" className="py-20 bg-wedding-pattern relative scroll-mt-24 sm:scroll-mt-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-beige border border-brand-gold/40 text-brand-maroon text-xs font-semibold uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
            <span>Order & Inquiry Form</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark mb-4">
            Place Your Package Request
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent mx-auto mb-4"></div>

          <p className="text-sm sm:text-base text-brand-muted max-w-xl mx-auto">
            Fill out your details below. Our team will review your request and contact you directly to confirm final specifications.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-2xl border-2 border-brand-gold/40 shadow-wedding p-6 sm:p-10 relative">
          
          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* Honeypot anti-spam input */}
            <input
              type="text"
              name="honeypot"
              value={formData.honeypot}
              onChange={handleChange}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            {/* Error Banner */}
            {formError && (
              <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2 animate-fadeIn">
                <ShieldAlert className="w-4 h-4 shrink-0 text-red-600" />
                <span>{formError}</span>
              </div>
            )}

            {/* Step 1: Customer Information */}
            <div>
              <h3 className="font-serif text-lg font-bold text-brand-dark mb-4 pb-2 border-b border-brand-beige flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-brand-maroon text-white text-xs font-sans flex items-center justify-center font-bold">1</span>
                <span>Customer Information</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div>
                  <label className="block text-xs font-semibold text-brand-dark mb-1">
                    Full Name <span className="text-brand-maroon">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Amaan Afzal"
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-brand-beige bg-brand-ivory/40 text-xs sm:text-sm text-brand-dark focus:outline-hidden focus:border-brand-gold focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-brand-dark mb-1">
                    Email Address <span className="text-brand-maroon">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. amaanafzal720@gmail.com"
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-brand-beige bg-brand-ivory/40 text-xs sm:text-sm text-brand-dark focus:outline-hidden focus:border-brand-gold focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-brand-dark mb-1">
                    WhatsApp / Phone Number <span className="text-brand-maroon">*</span>
                  </label>
                  <input
                    type="tel"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    placeholder="e.g. 03148379112"
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-brand-beige bg-brand-ivory/40 text-xs sm:text-sm text-brand-dark focus:outline-hidden focus:border-brand-gold focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-brand-dark mb-1">
                    City <span className="text-brand-maroon">*</span>
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="e.g. Karachi"
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-brand-beige bg-brand-ivory/40 text-xs sm:text-sm text-brand-dark focus:outline-hidden focus:border-brand-gold focus:bg-white transition-colors"
                  />
                </div>

              </div>
            </div>

            {/* Step 2: Wedding Details */}
            <div>
              <h3 className="font-serif text-lg font-bold text-brand-dark mb-4 pb-2 border-b border-brand-beige flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-brand-maroon text-white text-xs font-sans flex items-center justify-center font-bold">2</span>
                <span>Wedding Details & Package Selection</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                
                <div>
                  <label className="block text-xs font-semibold text-brand-dark mb-1">
                    Wedding Date <span className="text-brand-maroon">*</span>
                  </label>
                  <input
                    type="date"
                    name="weddingDate"
                    value={formData.weddingDate}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-brand-beige bg-brand-ivory/40 text-xs sm:text-sm text-brand-dark focus:outline-hidden focus:border-brand-gold focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-brand-dark mb-1">
                    Expected Guests <span className="text-brand-maroon">*</span>
                  </label>
                  <input
                    type="text"
                    name="expectedGuests"
                    value={formData.expectedGuests}
                    onChange={handleChange}
                    placeholder="e.g. 200 guests"
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-brand-beige bg-brand-ivory/40 text-xs sm:text-sm text-brand-dark focus:outline-hidden focus:border-brand-gold focus:bg-white transition-colors"
                  />
                </div>

                {/* Preferred Package Dropdown */}
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-brand-dark mb-1">
                    Select Package <span className="text-brand-maroon">*</span>
                  </label>
                  <select
                    name="packageId"
                    value={formData.packageId}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-2 border-brand-gold/60 bg-brand-ivory text-xs sm:text-sm font-semibold text-brand-dark focus:outline-hidden focus:border-brand-maroon transition-colors cursor-pointer"
                  >
                    {packagesData.map((pkg) => (
                      <option key={pkg.id} value={pkg.id}>
                        {pkg.name} — ({pkg.formattedPrice})
                      </option>
                    ))}
                  </select>
                </div>

              </div>

              {/* Dynamic Auto Package Preview Box */}
              {currentPackage && (
                <div className="p-4 rounded-xl bg-brand-ivory border border-brand-gold/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-brand-gold tracking-wider block">Selected Package Preview</span>
                    <h4 className="font-serif text-lg font-bold text-brand-maroon">
                      {currentPackage.name}
                    </h4>
                    <p className="text-xs text-brand-muted">
                      {currentPackage.description}
                    </p>
                  </div>
                  <div className="bg-white px-4 py-2 rounded-lg border border-brand-beige text-right shrink-0">
                    <span className="text-[10px] text-brand-muted block">Package Price</span>
                    <span className="font-serif text-lg font-bold text-brand-maroon">
                      {currentPackage.formattedPrice}
                    </span>
                  </div>
                </div>
              )}

            </div>

            {/* Step 3: Additional Requirements & Terms */}
            <div>
              <h3 className="font-serif text-lg font-bold text-brand-dark mb-4 pb-2 border-b border-brand-beige flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-brand-maroon text-white text-xs font-sans flex items-center justify-center font-bold">3</span>
                <span>Additional Requirements & Terms</span>
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-brand-dark mb-1">
                    Additional Requirements (Optional)
                  </label>
                  <textarea
                    name="additionalRequirements"
                    rows="3"
                    value={formData.additionalRequirements}
                    onChange={handleChange}
                    placeholder="Tell us if you have any special requirements, preferred products, location details or package changes."
                    className="w-full px-4 py-2.5 rounded-xl border border-brand-beige bg-brand-ivory/40 text-xs sm:text-sm text-brand-dark focus:outline-hidden focus:border-brand-gold focus:bg-white transition-colors"
                  ></textarea>
                </div>

                {/* Disclaimer Checkbox */}
                <div className="flex items-start gap-3 pt-2">
                  <input
                    type="checkbox"
                    id="agreedDisclaimer"
                    name="agreedDisclaimer"
                    checked={formData.agreedDisclaimer}
                    onChange={handleChange}
                    className="mt-1 w-4 h-4 text-brand-maroon rounded border-brand-gold focus:ring-brand-gold cursor-pointer"
                  />
                  <label htmlFor="agreedDisclaimer" className="text-xs text-brand-muted leading-relaxed cursor-pointer select-none">
                    I understand that final package contents, availability and pricing will be confirmed by the Bidai team.
                  </label>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 px-6 maroon-gradient-btn text-white font-bold text-base rounded-xl shadow-md flex items-center justify-center gap-2 border border-brand-gold/40 disabled:opacity-50 cursor-pointer"
            >
              {isSubmitting ? (
                <span>Submitting Order Request...</span>
              ) : (
                <>
                  <Send className="w-4 h-4 text-brand-gold" />
                  <span>Place My Order</span>
                </>
              )}
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}
