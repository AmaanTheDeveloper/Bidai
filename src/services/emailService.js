import { siteConfig } from '../config/siteConfig.js';
import { packagesData, buildPackageWhatsAppUrl } from '../config/packagesData.js';

/**
 * Normalized Order Object Builder
 */
export const createNormalizedOrder = ({
  orderId,
  customerName,
  customerEmail,
  customerWhatsApp,
  city,
  packageId,
  packageName,
  packagePrice,
  weddingDate,
  expectedGuests,
  additionalRequirements
}) => {
  const createdAt = new Date().toLocaleString('en-PK', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });

  const selectedPkg = packagesData.find(p => p.id === packageId) || {
    name: packageName,
    formattedPrice: packagePrice,
    registrationFee: "Registration Charges: PKR 10,500 Extra",
    shortInclusions: ["Complete Rukhsati Items & Setup"],
    catering: null
  };

  // Clean customer WhatsApp number for wa.me link
  const rawCustomerNumber = (customerWhatsApp || '').replace(/[^0-9]/g, "");
  const formattedCustomerNum = rawCustomerNumber.startsWith('0')
    ? '92' + rawCustomerNumber.substring(1)
    : rawCustomerNumber;

  const firstName = customerName ? customerName.trim().split(' ')[0] : customerName;

  // Build exact WhatsApp order URL as per Requirement #2
  const customerWhatsAppUrl = buildPackageWhatsAppUrl(selectedPkg, {
    customerName,
    customerWhatsApp,
    weddingDate,
    city
  });

  // Exact Owner WhatsApp Pre-filled Text for Customer Contact
  const ownerWhatsAppText = `Assalam-o-Alaikum ${firstName},

This is Bidai regarding your order request #${orderId}.

Package: ${packageName}
Price: ${packagePrice}
Wedding Date: ${weddingDate}
Guests: ${expectedGuests}

We would like to discuss your requirements and confirm your package.

Thank you,
Bidai Team`;

  const ownerWhatsAppContactUrl = `https://wa.me/${formattedCustomerNum}?text=${encodeURIComponent(ownerWhatsAppText)}`;

  return {
    orderId,
    customerName,
    firstName,
    customerEmail,
    customerWhatsApp,
    city,
    packageId,
    packageName,
    packagePrice,
    weddingDate,
    expectedGuests,
    additionalRequirements: additionalRequirements || "None",
    createdAt,
    customerWhatsAppUrl,
    ownerWhatsAppContactUrl,
    ownerEmailTarget: siteConfig.email
  };
};

/**
 * Dispatch Order Emails via Web3Forms API
 */
export const sendOrderEmails = async (order) => {
  const web3Key = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
  const isWeb3Configured = web3Key && !web3Key.includes('CHANGE_WITH_YOUR');

  if (!isWeb3Configured) {
    console.warn("Bidai Email Service Notice: VITE_WEB3FORMS_ACCESS_KEY missing in .env");
    return {
      success: false,
      isConfigured: false,
      message: "Web3Forms access key not found in .env file."
    };
  }

  try {
    // Owner Notification Email Content
    const ownerMessageBody = `
NEW BIDAI ORDER REQUEST — ${order.orderId}

CUSTOMER DETAILS
----------------------------------------
Name: ${order.customerName}
Email: ${order.customerEmail}
WhatsApp / Phone: ${order.customerWhatsApp}
City: ${order.city}

ORDER DETAILS
----------------------------------------
Selected Package: ${order.packageName}
Package Price: ${order.packagePrice}
Wedding Date: ${order.weddingDate}
Expected Guests: ${order.expectedGuests}
Additional Requirements: ${order.additionalRequirements}
Submission Time: ${order.createdAt}

CONTACT CUSTOMER ON WHATSAPP:
${order.ownerWhatsAppContactUrl}
    `.trim();

    const formDataOwner = new FormData();
    formDataOwner.append("access_key", web3Key);
    formDataOwner.append("subject", `New Bidai Order — ${order.orderId}`);
    formDataOwner.append("from_name", "Bidai Orders");
    formDataOwner.append("name", order.customerName);
    formDataOwner.append("email", order.customerEmail);
    formDataOwner.append("replyto", order.customerEmail);
    formDataOwner.append("message", ownerMessageBody);
    formDataOwner.append("botcheck", "");

    console.log("Dispatching Owner Order Notification Email via Web3Forms...", { recipient: siteConfig.email });

    const ownerRes = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Accept": "application/json" },
      body: formDataOwner
    });

    const ownerData = await ownerRes.json();
    console.log("Owner Email Web3Forms API Response:", ownerData);

    let customerSent = false;
    try {
      const customerMessageBody = `
Assalam-o-Alaikum ${order.firstName || order.customerName},

Thank you for submitting your package request with Bidai. Your request has been successfully received.

ORDER REFERENCE: ${order.orderId}

ORDER SUMMARY
----------------------------------------
Selected Package: ${order.packageName}
Package Price: ${order.packagePrice}
Wedding Date: ${order.weddingDate}
Expected Guests: ${order.expectedGuests}
City: ${order.city}
Additional Requirements: ${order.additionalRequirements}

Our team will review your request and contact you shortly to confirm the package details.

CHAT WITH BIDAI ON WHATSAPP:
${order.customerWhatsAppUrl}

Regards,
Bidai Team
Phone: ${siteConfig.phone}
Email: ${siteConfig.email}
Location: ${siteConfig.location}
      `.trim();

      const formDataCustomer = new FormData();
      formDataCustomer.append("access_key", web3Key);
      formDataCustomer.append("subject", `Order Request Received — Bidai — ${order.orderId}`);
      formDataCustomer.append("from_name", "Bidai Team");
      formDataCustomer.append("email", order.customerEmail);
      formDataCustomer.append("to_email", order.customerEmail);
      formDataCustomer.append("replyto", siteConfig.email);
      formDataCustomer.append("message", customerMessageBody);

      const custRes = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Accept": "application/json" },
        body: formDataCustomer
      });

      const custData = await custRes.json();
      console.log("Customer Confirmation Web3Forms API Response:", custData);
      customerSent = custRes.ok && custData.success === true;
    } catch (cErr) {
      console.warn("Customer confirmation email notice:", cErr.message);
    }

    return {
      success: ownerRes.ok && ownerData.success === true,
      apiResponse: ownerData,
      ownerEmailSent: ownerData.success === true,
      customerEmailSent: customerSent,
      message: ownerData.message || "Form submitted successfully!"
    };

  } catch (err) {
    console.error("Web3Forms Email Service Exception:", err);
    return {
      success: false,
      error: err.message
    };
  }
};
