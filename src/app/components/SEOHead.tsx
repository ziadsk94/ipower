'use client';

import Head from 'next/head';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: any;
  noIndex?: boolean;
}

const SEOHead = ({
  title,
  description,
  keywords,
  canonical,
  ogImage = '/assets/images/og-image.jpg',
  ogType = 'website',
  structuredData,
  noIndex = false
}: SEOHeadProps) => {
  const fullTitle = title.includes('iPower') ? title : `${title} | iPower - Electrical Engineering Lebanon`;
  const fullDescription = description;
  const fullKeywords = keywords || 'electrical engineering Lebanon, solar energy Lebanon, industrial automation, renewable energy solutions, electrical systems Lebanon';

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={fullKeywords} />
      <meta name="robots" content={noIndex ? "noindex, nofollow" : "index, follow"} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="author" content="iPower - Electrical Engineering Lebanon" />
      <meta name="language" content="en" />
      <meta name="geo.region" content="LB" />
      <meta name="geo.country" content="Lebanon" />
      <meta name="geo.placename" content="Lebanon" />
      
      {canonical && <link rel="canonical" href={canonical} />}
      
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical || 'https://ipower.com.lb'} />
      <meta property="og:site_name" content="iPower - Electrical Engineering Lebanon" />
      <meta property="og:locale" content="en_LB" />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={ogImage} />
      
      <meta name="theme-color" content="#007577" />
      <meta name="msapplication-TileColor" content="#007577" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
      )}
    </Head>
  );
};

export default SEOHead;
