
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "iPower",
  "alternateName": "iPower Electrical Engineering",
  "description": "Leading electrical engineering and solar energy solutions provider in Lebanon, specializing in industrial automation, renewable energy systems, and smart electrical infrastructure.",
  "url": "https://ipower.com.lb",
  "logo": "https://ipower.com.lb/assets/images/logo.png",
  "foundingDate": "2011",
  "founder": {
    "@type": "Person",
    "name": "iPower Engineering Team"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Abbaseye Main Street",
    "addressLocality": "Abbaseye",
    "addressCountry": "Lebanon"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+961-70-123-456",
    "contactType": "customer service",
    "email": "info@ipower.com.lb",
    "availableLanguage": ["English", "Arabic"]
  },
  "sameAs": [
    "https://www.linkedin.com/company/ipower-lebanon",
    "https://www.facebook.com/ipowerlebanon"
  ],
  "areaServed": {
    "@type": "Country",
    "name": "Lebanon"
  },
  "serviceType": [
    "Electrical Engineering",
    "Solar Energy Systems",
    "Industrial Automation",
    "Power Distribution",
    "Control Systems"
  ]
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://ipower.com.lb/#localbusiness",
  "name": "iPower Electrical Engineering",
  "description": "Premier electrical engineering and solar energy solutions provider in Lebanon, serving residential, commercial, and industrial clients across the country.",
  "url": "https://ipower.com.lb",
  "telephone": "+961-70-123-456",
  "email": "info@ipower.com.lb",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Abbaseye Main Street",
    "addressLocality": "Abbaseye",
    "addressRegion": "South Lebanon",
    "postalCode": "0000",
    "addressCountry": "LB"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "33.8547",
    "longitude": "35.8623"
  },
  "openingHours": "Mo-Sa 08:00-17:00",
  "priceRange": "$$",
  "paymentAccepted": "Cash, Credit Card, Bank Transfer",
  "currenciesAccepted": "USD, LBP",
  "areaServed": {
    "@type": "Country",
    "name": "Lebanon"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Electrical Engineering Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Solar Energy Systems",
          "description": "Complete solar energy solutions for residential, commercial, and industrial applications"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Industrial Automation",
          "description": "Advanced automation and control systems for industrial facilities"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Electrical Design",
          "description": "Professional electrical system design and engineering services"
        }
      }
    ]
  }
};

export const serviceSchema = (serviceName: string, description: string, category: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": serviceName,
  "description": description,
  "provider": {
    "@type": "Organization",
    "name": "iPower",
    "url": "https://ipower.com.lb"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Lebanon"
  },
  "serviceType": category,
  "category": "Electrical Engineering",
  "offers": {
    "@type": "Offer",
    "description": description,
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock"
  }
});

export const projectSchema = (projectName: string, description: string, location: string, capacity: string, year: string) => ({
  "@context": "https://schema.org",
  "@type": "Project",
  "name": projectName,
  "description": description,
  "location": {
    "@type": "Place",
    "name": location,
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Lebanon"
    }
  },
  "foundingDate": year,
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "System Capacity",
      "value": capacity
    },
    {
      "@type": "PropertyValue",
      "name": "Project Type",
      "value": "Electrical Engineering"
    }
  ],
  "sponsor": {
    "@type": "Organization",
    "name": "iPower",
    "url": "https://ipower.com.lb"
  }
});

export const breadcrumbSchema = (items: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const faqSchema = (faqs: Array<{question: string, answer: string}>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});
