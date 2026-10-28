import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import ShowroomLandingVideo from './components/ShowroomLandingVideo';
import PackagesSection from './components/PackagesSection';
import PackageComparison from './components/PackageComparison';
import WhatsIncluded from './components/WhatsIncluded';
import WeddingServicesVideoSection from './components/WeddingServicesVideoSection';
import CustomerReviewsVideoSection from './components/CustomerReviewsVideoSection';
import HowItWorks from './components/HowItWorks';
import AboutSection from './components/AboutSection';
import WhyChooseUs from './components/WhyChooseUs';
import FAQSection from './components/FAQSection';
import OrderFormSection from './components/OrderFormSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingWidgets from './components/FloatingWidgets';
import SuccessModal from './components/SuccessModal';
import PrivacyPolicyModal from './components/PrivacyPolicyModal';
import TermsModal from './components/TermsModal';

export default function App() {
  const [selectedPackageId, setSelectedPackageId] = useState('D');
  const [completedOrderData, setCompletedOrderData] = useState(null);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);

  const handleSelectPackage = (pkgId) => {
    setSelectedPackageId(pkgId);
  };

  const handleOrderSuccess = (orderPayload) => {
    setCompletedOrderData(orderPayload);
  };

  return (
    <div className="min-h-screen bg-brand-ivory text-brand-dark flex flex-col font-sans selection:bg-brand-gold/30 selection:text-brand-maroon">
      
      {/* Navigation Bar */}
      <Header
        onOpenPrivacy={() => setPrivacyOpen(true)}
        onOpenTerms={() => setTermsOpen(true)}
      />

      {/* Main Page Content Following Exact Requirement #13 Final Flow */}
      <main className="flex-1">
        {/* 1. Hero */}
        <Hero />

        {/* 2. Short Bidai Introduction */}
        <TrustStrip />

        {/* 3. See Our Showroom / Our Work Landing Page Video */}
        <ShowroomLandingVideo />

        {/* 4. Packages Section (AI card image, View Full Set, Book, Chat on WhatsApp) */}
        <PackagesSection onSelectPackage={handleSelectPackage} />

        {/* 5. Package Comparison */}
        <PackageComparison onSelectPackage={handleSelectPackage} />

        {/* 6. What's Included */}
        <WhatsIncluded />

        {/* 7. Wedding Services Videos */}
        <WeddingServicesVideoSection />

        {/* 8. Customer Video Reviews */}
        <CustomerReviewsVideoSection />

        {/* 9. How It Works */}
        <HowItWorks />

        {/* 10. About Section */}
        <AboutSection />

        {/* 11. Why Choose Us */}
        <WhyChooseUs />

        {/* 12. FAQ Section */}
        <FAQSection />

        {/* 13. Existing Web3Forms Order Request Form */}
        <OrderFormSection
          selectedPackageId={selectedPackageId}
          onOrderSuccess={handleOrderSuccess}
        />

        {/* 14. Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenPrivacy={() => setPrivacyOpen(true)}
        onOpenTerms={() => setTermsOpen(true)}
        onSelectPackage={handleSelectPackage}
      />

      {/* Scroll-based Floating Widgets (WhatsApp + Back to Top) */}
      <FloatingWidgets />

      {/* Modals & Overlays */}
      <SuccessModal
        orderData={completedOrderData}
        onClose={() => setCompletedOrderData(null)}
      />

      <PrivacyPolicyModal
        isOpen={privacyOpen}
        onClose={() => setPrivacyOpen(false)}
      />

      <TermsModal
        isOpen={termsOpen}
        onClose={() => setTermsOpen(false)}
      />

    </div>
  );
}
