import React from 'react';
import { CheckCircle, MessageCircle, X, Home, Copy } from 'lucide-react';

export default function SuccessModal({ orderData, onClose }) {
  if (!orderData || !orderData.order) return null;

  const { order } = orderData;

  const handleCopyOrderId = () => {
    if (order.orderId) {
      navigator.clipboard.writeText(order.orderId);
      alert(`Order ID ${order.orderId} copied to clipboard!`);
    }
  };

  const handleBackToHome = () => {
    onClose();
    const element = document.querySelector('#home');
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-dark/75 backdrop-blur-xs animate-fadeIn">
      
      <div className="bg-white rounded-2xl max-w-lg w-full border-2 border-brand-gold shadow-2xl overflow-hidden relative max-h-[95vh] flex flex-col">
        
        {/* Header Ribbon */}
        <div className="bg-brand-maroon text-white p-6 sm:p-8 text-center relative border-b border-brand-gold shrink-0">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="w-14 h-14 rounded-full bg-white text-brand-maroon flex items-center justify-center mx-auto mb-3 border-2 border-brand-gold shadow-md">
            <CheckCircle className="w-8 h-8 text-brand-maroon" />
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-1 uppercase tracking-wide">
            Request Submitted Successfully
          </h3>

          <p className="text-xs sm:text-sm text-brand-gold font-medium max-w-sm mx-auto leading-relaxed">
            Thank you, {order.firstName || order.customerName}. Your order request has been received by Bidai.
          </p>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-xs sm:text-sm">
          
          {/* Elegant Order Reference Card */}
          <div className="bg-brand-ivory rounded-xl p-4 border border-brand-beige text-center shadow-xs">
            <span className="text-[10px] uppercase font-bold text-brand-muted tracking-widest block mb-1">
              Order Reference
            </span>
            <div className="flex items-center justify-center gap-2">
              <span className="font-serif text-2xl font-bold text-brand-maroon tracking-wider">
                {order.orderId}
              </span>
              <button
                onClick={handleCopyOrderId}
                className="p-1 text-brand-gold hover:text-brand-maroon transition-colors"
                title="Copy Order ID"
              >
                <Copy className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Clean Order Summary Breakdown */}
          <div className="bg-white rounded-xl border border-brand-beige overflow-hidden shadow-xs">
            <div className="bg-brand-ivory/60 px-4 py-3 border-b border-brand-beige">
              <span className="font-serif font-bold text-sm text-brand-dark">Order Summary</span>
            </div>

            <div className="divide-y divide-brand-beige/70">
              <div className="p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <span className="text-brand-muted font-medium text-xs">Package</span>
                <span className="font-bold text-brand-maroon text-xs sm:text-sm">{order.packageName}</span>
              </div>

              <div className="p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 bg-brand-ivory/30">
                <span className="text-brand-muted font-medium text-xs">Package Price</span>
                <span className="font-bold font-mono text-brand-dark text-xs sm:text-sm">{order.packagePrice}</span>
              </div>

              <div className="p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <span className="text-brand-muted font-medium text-xs">Wedding Date</span>
                <span className="font-semibold text-brand-dark text-xs sm:text-sm">{order.weddingDate}</span>
              </div>

              <div className="p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 bg-brand-ivory/30">
                <span className="text-brand-muted font-medium text-xs">Expected Guests</span>
                <span className="font-semibold text-brand-dark text-xs sm:text-sm">{order.expectedGuests}</span>
              </div>

              <div className="p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <span className="text-brand-muted font-medium text-xs">City</span>
                <span className="font-semibold text-brand-dark text-xs sm:text-sm">{order.city}</span>
              </div>

              <div className="p-3.5 bg-brand-ivory/30">
                <span className="text-brand-muted font-medium text-xs block mb-1">Additional Requirements</span>
                <span className="font-medium text-brand-dark text-xs block bg-white p-2.5 rounded-lg border border-brand-beige leading-relaxed">
                  {order.additionalRequirements || "None"}
                </span>
              </div>
            </div>
          </div>

          {/* Short Reassurance Message */}
          <p className="text-xs text-brand-muted text-center leading-relaxed">
            Our team will review your request and contact you shortly to confirm the package details.
          </p>

          {/* Action Buttons */}
          <div className="space-y-3 pt-2">
            <a
              href={order.customerWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 maroon-gradient-btn text-white font-bold text-sm rounded-xl border border-brand-gold shadow-sm flex items-center justify-center gap-2 text-center"
            >
              <MessageCircle className="w-5 h-5 text-brand-gold" />
              <span>Chat with Bidai on WhatsApp</span>
            </a>

            <button
              onClick={handleBackToHome}
              className="w-full py-2.5 px-4 bg-brand-ivory text-brand-dark font-medium text-xs rounded-xl border border-brand-beige hover:bg-brand-beige transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Back to Home</span>
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}
