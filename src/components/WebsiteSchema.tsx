import React from 'react';

const WebsiteSchema: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://saherflow.com/#website",
    "url": "https://saherflow.com",
    "name": "Saher Flow Solutions",
    "description": "Revolutionary DMOR technology for accurate multiphase flow measurement. Non-radioactive, AI-powered flow meters for oil & gas industry.",
    "publisher": {
      "@id": "https://saherflow.com/#organization"
    },
    "potentialAction": [
      {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://saherflow.com/search?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    ],
    "inLanguage": "en-US",
    "copyrightYear": "2025",
    "copyrightHolder": {
      "@id": "https://saherflow.com/#organization"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  );
};

export default WebsiteSchema;
