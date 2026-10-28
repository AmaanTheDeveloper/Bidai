/**
 * BIDAI PACKAGE CONFIGURATION
 * 
 * Central single-source of truth for all Bidai package offerings,
 * prices, inclusions, disclaimer, and comparison grid.
 */
import { siteConfig } from './siteConfig';

export const packageDisclaimer = "Package contents and prices may vary based on product availability, selected specifications, location and final requirements. Our team will confirm the final package details before fulfillment.";

export const formatPrice = (priceNumber) => {
  return `PKR ${priceNumber.toLocaleString('en-PK')}`;
};

export const packagesData = [
  {
    id: "A",
    code: "BIDAI-PAK-A",
    name: "Complete Rukhsati Package A",
    shortName: "Package A",
    price: 225000,
    formattedPrice: "PKR 225,000",
    badge: "🎁 Gold Set Free",
    registrationFee: "Registration Charges: PKR 10,500 Extra",
    catering: "100 Persons Dinner — Chicken Biryani, Chicken Qorma, Naan, Raita, Salad & Kheer.",
    cardImage: "/images/cards/card_pkg_a.jpg",
    fullSetImage: "/packages-images/pak A.jpeg",
    description: "Complete starter Rukhsati package with essential furniture, household items, electronics and catering for 100 guests.",
    shortInclusions: [
      "Bed",
      "Wardrobe",
      "Dressing Table",
      "Mattress",
      "Dining Set",
      "Washing Machine",
      "Sewing Machine",
      "LED TV",
      "Dinner Set",
      "Kitchen Set",
      "Suitcase",
      "Bed Set",
      "Towel Set",
      "Wall Clock & More"
    ]
  },
  {
    id: "A1",
    code: "BIDAI-PAK-A1",
    name: "Complete Rukhsati Package A-1",
    shortName: "Package A-1",
    price: 175000,
    formattedPrice: "PKR 175,000",
    badge: "🎁 Gold Set Free",
    registrationFee: "Registration Charges: PKR 10,500 Extra",
    catering: "None",
    cardImage: "/images/cards/card_pkg_a1.jpg",
    fullSetImage: "/packages-images/pak A1.jpeg",
    description: "Economical essential Rukhsati package covering double bed setup, home electronics, kitchen essentials & gift items.",
    shortInclusions: [
      "Double Bed",
      "Wardrobe",
      "Dressing Table",
      "Mattress",
      "Dining Set",
      "Washing Machine",
      "Sewing Machine",
      "LED TV",
      "Dinner Set",
      "Kitchen Set",
      "Suitcase",
      "Bed Set",
      "Towel Set",
      "Wall Clock & More"
    ]
  },
  {
    id: "B",
    code: "BIDAI-PAK-B",
    name: "Complete Rukhsati Package B",
    shortName: "Package B",
    price: 375000,
    formattedPrice: "PKR 375,000 + Bike",
    badge: "🏍️ Bike Included • 🎁 Gold Set Free",
    registrationFee: "Registration Charges: PKR 10,500 Extra",
    catering: "100 Persons Dinner — Chicken Biryani, Chicken Qorma, Naan, Raita, Salad & Kheer.",
    cardImage: "/images/cards/card_pkg_b.jpg",
    fullSetImage: "/packages-images/pak B.jpeg",
    description: "Popular grand Rukhsati package including a brand new Motorcycle/Bike, full furniture, electronics and 100 persons dinner.",
    shortInclusions: [
      "Double Bed",
      "3-Door Wardrobe",
      "Dressing Table",
      "Mattress",
      "Dining Set",
      "Washing Machine",
      "Sewing Machine",
      "LED TV",
      "Dinner Set",
      "Kitchen Set",
      "Suitcase",
      "Bed Set",
      "Towel Set",
      "Wall Clock & More"
    ]
  },
  {
    id: "D",
    code: "BIDAI-PAK-D",
    name: "Complete Rukhsati Package D",
    shortName: "Package D",
    price: 499000,
    formattedPrice: "PKR 499,000",
    badge: "POPULAR",
    registrationFee: "Registration Charges: PKR 10,500 Extra",
    catering: "300 Persons Dinner — Chicken Biryani, Chicken Qorma/Karahi, Naan, Raita, Salad & Kheer.",
    cardImage: "/images/cards/card_pkg_d.jpg",
    fullSetImage: "/packages-images/pak D.jpeg",
    description: "Comprehensive luxury Rukhsati package with complete master furniture, 72-piece dinner set, LED TV & catering for 300 guests.",
    shortInclusions: [
      "Complete Furniture",
      "Double Bed",
      "Dressing Table",
      "Dining Set",
      "72-Piece Dinner Set",
      "Washing Machine",
      "Sewing Machine",
      "24-Inch LED TV",
      "Kitchen Essentials",
      "Gift Sets",
      "Household Items & More"
    ]
  },
  {
    id: "D1",
    code: "BIDAI-PAK-D1",
    name: "Complete Rukhsati Package D-1",
    shortName: "Package D-1",
    price: 375000,
    formattedPrice: "PKR 375,000",
    badge: "📍 Only For Karachi",
    registrationFee: "Registration Charges: PKR 10,500 Extra",
    catering: "100 Persons Dinner — Chicken Biryani, Chicken Qorma, Naan, Raita, Salad & Kheer.",
    cardImage: "/images/cards/card_pkg_d1.jpg",
    fullSetImage: "/packages-images/pak D1.jpeg",
    description: "Special Karachi Rukhsati package featuring 3-door wardrobe, bedroom furniture, appliances and catering for 100 guests.",
    shortInclusions: [
      "Double Bed",
      "3-Door Wardrobe",
      "Dressing Table",
      "Mattress",
      "Dining Set",
      "Washing Machine",
      "Sewing Machine",
      "LED TV",
      "Dinner Set",
      "Kitchen Set",
      "Suitcase",
      "Bed Set",
      "Towel Set",
      "Wall Clock & More"
    ]
  },
  {
    id: "ALL_IN_ONE",
    code: "BIDAI-ALL-IN-ONE",
    name: "Complete Rukhsati Package All in One",
    shortName: "All in One",
    price: 425000,
    formattedPrice: "PKR 425,000",
    badge: "COMPLETE SOLUTION",
    registrationFee: "Registration Charges: PKR 10,500 Extra",
    catering: "200 Persons Dinner — Chicken Biryani, Chicken Karahi, Naan, Raita, Salad & Kheer.",
    cardImage: "/images/cards/card_pkg_all_in_one.jpg",
    fullSetImage: "/packages-images/All in One.jpeg",
    description: "Ultimate all-inclusive package combining wedding hall services, bridal makeup, photo/video shoot with complete household furniture and 200 persons dinner.",
    shortInclusions: [
      "Complete Rukhsati Items",
      "Wedding Card",
      "Bridal Makeup",
      "Wedding Hall",
      "Photo Album",
      "Photo Shoot",
      "Video Shoot",
      "Double Bed",
      "Wardrobe",
      "Dressing Table",
      "Mattress",
      "Washing Machine",
      "Sewing Machine",
      "LED TV",
      "Dinner Set",
      "Kitchen Set & More"
    ]
  }
];

export const categoriesData = [
  {
    id: "furniture",
    title: "Furniture",
    icon: "Bed",
    description: "Complete bedroom sets, wardrobes, dressing tables, sofa sets & dining furniture.",
    items: ["Bed", "Mattress", "Wardrobe", "Dressing table", "Sofa", "Dining furniture"]
  },
  {
    id: "kitchen",
    title: "Kitchen",
    icon: "Utensils",
    description: "High-grade cookware, elegant dinner sets, glassware, cutlery & accessories.",
    items: ["Cooking utensils", "Pots", "Dinner set", "Glass set", "Cutlery", "Kitchen accessories"]
  },
  {
    id: "electronics",
    title: "Electronics",
    icon: "Tv",
    description: "Essential home electronics from refrigerators & washing machines to LED TVs & sewing machines.",
    items: ["Refrigerator", "Washing machine", "LED TV", "Sewing machine", "Iron", "Selected appliances"]
  },
  {
    id: "catering",
    title: "Catering & Dinner",
    icon: "UtensilsCrossed",
    description: "Delicious Pakistani wedding dinner menus for 100 to 300 persons including biryani, qorma/karahi & sweet desserts.",
    items: ["Chicken Biryani", "Chicken Qorma / Karahi", "Naan", "Raita & Salad", "Kheer Dessert"]
  },
  {
    id: "services",
    title: "Wedding Services",
    icon: "Sparkles",
    description: "Full wedding support including hall booking, bridal makeup, photo albums & professional video shoot.",
    items: ["Bridal makeup", "Wedding hall", "Photo shoot", "Video shoot", "Wedding cards"]
  }
];

export const comparisonMatrix = {
  features: [
    { key: "furniture", label: "Furniture Setup" },
    { key: "electronics", label: "Home Electronics" },
    { key: "kitchen", label: "Kitchen Essentials" },
    { key: "catering", label: "Catering & Dinner" },
    { key: "bike", label: "Motorcycle / Bike" },
    { key: "gift", label: "Free Gold Set Gift" },
    { key: "services", label: "Wedding Services" }
  ],
  packages: {
    A: {
      furniture: "Bed + Wardrobe + Dressing",
      electronics: "LED TV + Washer + Sewing",
      kitchen: "Dinner & Kitchen Set",
      catering: "100 Persons Dinner",
      bike: "—",
      gift: "Gold Set Free",
      services: "Standard Package"
    },
    A1: {
      furniture: "Double Bed + Wardrobe",
      electronics: "LED TV + Washer + Sewing",
      kitchen: "Dinner & Kitchen Set",
      catering: "—",
      bike: "—",
      gift: "Gold Set Free",
      services: "Standard Package"
    },
    B: {
      furniture: "Double Bed + 3-Door Wardrobe",
      electronics: "LED TV + Washer + Sewing",
      kitchen: "Dinner & Kitchen Set",
      catering: "100 Persons Dinner",
      bike: "Motorcycle Included",
      gift: "Gold Set Free",
      services: "Upgraded Package"
    },
    D: {
      furniture: "Complete Master Furniture",
      electronics: "24-Inch LED TV + Washer + Sewing",
      kitchen: "72-Piece Premium Set",
      catering: "300 Persons Dinner",
      bike: "—",
      gift: "Special Gift Sets",
      services: "Popular Grand Tier"
    },
    D1: {
      furniture: "3-Door Wardrobe + Bed",
      electronics: "LED TV + Washer + Sewing",
      kitchen: "Dinner & Kitchen Set",
      catering: "100 Persons Dinner",
      bike: "—",
      gift: "Special Gift Sets",
      services: "Karachi Special Tier"
    },
    ALL_IN_ONE: {
      furniture: "Double Bed + Wardrobe + Dressing",
      electronics: "LED TV + Washer + Sewing",
      kitchen: "Dinner & Kitchen Set",
      catering: "200 Persons Dinner",
      bike: "—",
      gift: "Complete Gift Set",
      services: "Hall + Makeup + Photo/Video"
    }
  }
};

/**
 * Helper to build the exact URL-encoded WhatsApp message for a package
 * as specified in Requirement #2
 */
export const buildPackageWhatsAppUrl = (pkg, customerInfo = {}, targetNumber = siteConfig.whatsappNumber) => {
  const rawNum = (targetNumber || "03148379112").replace(/[^0-9]/g, "");
  const formattedOwnerNum = rawNum.startsWith('0') ? '92' + rawNum.substring(1) : rawNum;

  const pkgName = pkg ? pkg.name : "Complete Rukhsati Package";
  const pkgPrice = pkg ? pkg.formattedPrice : "On Request";
  const regFee = pkg && pkg.registrationFee ? pkg.registrationFee : "Registration Charges: PKR 10,500 Extra";

  const inclusionsText = pkg && pkg.shortInclusions ? pkg.shortInclusions.join(', ') : "Complete Rukhsati Items & Setup.";
  const cateringText = pkg && pkg.catering ? pkg.catering : "None";

  const customerName = customerInfo.customerName || customerInfo.fullName || customerInfo.name || "[Name]";
  const phone = customerInfo.customerWhatsApp || customerInfo.whatsapp || customerInfo.phone || "[Phone]";
  const weddingDate = customerInfo.weddingDate || "[Date]";
  const address = customerInfo.city || customerInfo.address || "[Address]";

  const messageText = `Assalam-o-Alaikum, I am interested in this Bidai package.

Package: ${pkgName}
Price: ${pkgPrice}
${regFee}

Package Includes:
${inclusionsText}

Catering:
${cateringText}

Customer Name: ${customerName}
Phone: ${phone}
Wedding Date: ${weddingDate}
Address: ${address}

Please share further details and booking procedure.`;

  return `https://wa.me/${formattedOwnerNum}?text=${encodeURIComponent(messageText)}`;
};
