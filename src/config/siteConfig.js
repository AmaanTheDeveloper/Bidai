/*
  BIDAI BUSINESS INFORMATION — SINGLE SOURCE OF TRUTH

  To change business contact information in the future, simply update 
  the values below. All components across the website dynamically read from 
  this central configuration file.
*/

export const siteConfig = {
  businessName: "Bidai",
  tagline: "Har Zaroorat, Ek Bidai Package Mein.",
  subtagline: "Shaadi ki tayyari, ab ek hi platform par.",
  alternativeSubtext: "From wedding essentials to home setup — Bidai brings everything together in thoughtfully designed packages.",

  // Official Business Contacts (Single Source of Truth)
  whatsappNumber: "03148379112", // Used for wa.me URLs
  phone: "031483791122",          // Display phone number
  email: "erc95475@gmail.com",     // Owner email address for order notifications

  // Location & Domain
  location: "Opposite Farzan Bakery, Korangi Number 1, Karachi, Pakistan",
  website: "CHANGE_WITH_YOUR_DOMAIN",

  // Social Links
  socialLinks: {
    instagram: "CHANGE_WITH_YOUR_INSTAGRAM",
    facebook: "CHANGE_WITH_YOUR_FACEBOOK",
  }
};

/**
 * Helper to format phone for display across website components
 */
export const getDisplayPhone = () => {
  return siteConfig.phone || "031483791122";
};

/**
 * Helper to generate general WhatsApp link for general inquiries
 */
export const getWhatsAppUrl = (customMessage = "") => {
  const num = siteConfig.whatsappNumber.replace(/[^0-9]/g, "");
  const defaultText = customMessage || `Assalam-o-Alaikum ${siteConfig.businessName}, I would like to inquire about your wedding packages.`;
  return `https://wa.me/${num}?text=${encodeURIComponent(defaultText)}`;
};
