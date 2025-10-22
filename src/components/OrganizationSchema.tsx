import React from 'react';

const OrganizationSchema: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://saherflow.com/#organization",
    "name": "Saher Flow Solutions",
    "legalName": "Saher Flow Solutions Ltd.",
    "url": "https://saherflow.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://saherflow.com/wp-content/uploads/2021/06/Artboard-1-copy100.svg",
      "width": "500",
      "height": "200"
    },
    "description": "Revolutionary DMOR technology for accurate multiphase flow measurement. Non-radioactive, AI-powered flow meters for oil & gas industry. Made in Saudi Arabia, trusted globally.",
    "foundingDate": "2019",
    "foundingLocation": {
      "@type": "Place",
      "name": "Thuwal, Saudi Arabia"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "KAUST, Building 1",
      "addressLocality": "Thuwal",
      "addressRegion": "Makkah Province",
      "postalCode": "23955",
      "addressCountry": "SA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "22.308683",
      "longitude": "39.104413"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+966-12-808-0000",
        "contactType": "customer service",
        "email": "contact@saherflow.com",
        "areaServed": ["SA", "AE", "KW", "QA", "BH", "OM", "US", "EU"],
        "availableLanguage": ["en", "ar"]
      },
      {
        "@type": "ContactPoint",
        "contactType": "sales",
        "email": "sales@saherflow.com",
        "areaServed": ["SA", "AE", "KW", "QA", "BH", "OM", "US", "EU"]
      },
      {
        "@type": "ContactPoint",
        "contactType": "technical support",
        "email": "support@saherflow.com",
        "areaServed": ["SA", "AE", "KW", "QA", "BH", "OM", "US", "EU"]
      }
    ],
    "sameAs": [
      "https://www.linkedin.com/company/saher-flow-solutions",
      "https://twitter.com/SaherFlow",
      "https://www.facebook.com/saherflow"
    ],
    "slogan": "Revolutionizing Multiphase Flow Measurement",
    "brand": {
      "@type": "Brand",
      "name": "Saher Flow Solutions",
      "logo": "https://saherflow.com/wp-content/uploads/2021/06/Artboard-1-copy100.svg"
    },
    "parentOrganization": {
      "@type": "Organization",
      "name": "King Abdullah University of Science and Technology",
      "url": "https://www.kaust.edu.sa"
    },
    "keywords": "multiphase flow meter, DMOR technology, oil and gas measurement, non-radioactive flow meter, water cut meter, artificial intelligence, Saudi Arabia, Vision 2030, Saudi Aramco approved",
    "areaServed": {
      "@type": "Place",
      "name": "Global"
    },
    "knowsAbout": [
      "Multiphase Flow Measurement",
      "DMOR Technology",
      "Oil and Gas Industry",
      "Non-Radioactive Sensing",
      "Artificial Intelligence",
      "Water Cut Metering",
      "Production Optimization",
      "Digital Twin Technology"
    ],
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "SF-321 Water-cut Meter",
          "description": "3 Phase Wellhead Water-cut Meter using DMOR technology",
          "image": "https://res.cloudinary.com/drnak5yb2/image/upload/v1754555754/High-Res-render-min_oqcyvr.png",
          "category": "Industrial Equipment"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Multiphase Flow Measurement Services",
          "description": "Comprehensive flow measurement solutions for oil and gas production",
          "serviceType": "Flow Measurement"
        }
      }
    ],
    "award": [
      "Saudi Aramco Pre-Qualification (2025)",
      "KPMG Global Tech Innovator Finalist",
      "Deloitte Rising Star",
      "SPE Rising Star Award",
      "IEEE Technical Achievement Award",
      "King's Prize Winner"
    ],
    "memberOf": [
      {
        "@type": "Organization",
        "name": "Saudi Aramco Supplier Network"
      },
      {
        "@type": "Organization",
        "name": "IKTVA Program"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  );
};

export default OrganizationSchema;
