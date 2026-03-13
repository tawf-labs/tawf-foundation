// SEO Configuration for Tawf Foundation
// Centralized metadata for all pages

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonical?: string;
  type?: 'website' | 'article';
  schema?: Record<string, unknown>;
}

export const DEFAULT_OG_IMAGE = 'https://tawf.foundation/images/tawflogo.png';
export const SITE_URL = 'https://tawf.foundation';

// Organization Schema for Tawf Islamic Foundation
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Tawf Islamic Foundation',
  alternateName: 'Tawf',
  url: SITE_URL,
  logo: `${SITE_URL}/images/tawflogo.png`,
  description: 'Baitul Maal rebuilt for the digital age. We provide blockchain-based infrastructure for transparent Islamic philanthropy, zakat, and waqf management.',
  sameAs: [
    'https://tawf.xyz',
    'https://x.com/TawfFoundation',
  ],
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'ID',
    addressLocality: 'Jakarta',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    email: 'salam@tawf.foundation',
  },
};

// Website Schema with search capability
export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Tawf Islamic Foundation',
  url: SITE_URL,
  description: 'Infrastructure for the Digital Baitul Maal - Blockchain-based Islamic philanthropy, zakat, and waqf management.',
  potentialAction: {
    '@type': 'SearchAction',
    target: `${SITE_URL}/glossary?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
};

// Page-specific SEO configurations
export const pageSEO: Record<string, SEOConfig> = {
  // Homepage
  home: {
    title: 'Infrastructure for the Digital Baitul Maal',
    description: 'Tawf provides blockchain-based infrastructure for transparent Islamic philanthropy, zakat, and waqf management. Every transaction is verifiable and Sharia-compliant.',
    keywords: [
      'Islamic foundation',
      'digital zakat',
      'blockchain waqf',
      'Islamic finance transparency',
      'Baitul Maal',
      'Sharia-compliant finance',
      'crypto philanthropy',
      'on-chain zakat',
    ],
    canonical: `${SITE_URL}/`,
  },

  // Manifesto
  manifesto: {
    title: 'Tawf Manifesto - Islamic Philanthropy Reimagined',
    description: 'Our vision for transparent, accountable Islamic philanthropy using blockchain technology and zero-knowledge proofs. Seven non-negotiable principles for ethical finance.',
    keywords: [
      'Islamic philanthropy manifesto',
      'waqf transparency',
      'crypto zakat',
      'ethical finance',
      'Sharia-compliant blockchain',
      'Islamic finance principles',
    ],
    canonical: `${SITE_URL}/manifesto`,
    type: 'article',
  },

  // Zakat
  zakat: {
    title: 'Zakat Transparency - On-Chain Verification',
    description: 'Track your zakat contributions with complete transparency. Blockchain-verified zakat distribution to the eight asnaf categories for maximum accountability.',
    keywords: [
      'digital zakat',
      'transparent zakat',
      'blockchain zakat verification',
      'zakat on-chain',
      'asnaf distribution',
      'Zakat calculator',
      'pay zakat online',
    ],
    canonical: `${SITE_URL}/zakat`,
  },

  // Qurban
  qurban: {
    title: 'Qurban Management - Transparent Sacrifice',
    description: 'Modern qurban management with on-chain tracking. Ensure your sacrifice reaches beneficiaries with full transparency through NFT certificates.',
    keywords: [
      'digital qurban',
      'transparent qurban',
      'blockchain sacrifice',
      'qurban NFT',
      'Eid al-Adha',
      'online qurban',
      'qurban waqf',
    ],
    canonical: `${SITE_URL}/qurban`,
  },

  // Research
  research: {
    title: 'Tawf Research - Islamic Finance & Blockchain',
    description: 'Explore our research on Islamic finance, blockchain technology, tokenized waqf, digital zakat, and the future of decentralized Islamic philanthropy.',
    keywords: [
      'Islamic finance research',
      'blockchain research',
      'crypto waqf studies',
      'tokenized waqf',
      'Islamic DeFi',
      'Sharia-compliant blockchain',
      'digital philanthropy research',
    ],
    canonical: `${SITE_URL}/research`,
    type: 'article',
  },

  // Glossary
  glossary: {
    title: 'Islamic Finance Glossary - Tawf',
    description: 'Learn key terms in Islamic finance, zakat, waqf, sadaqah, and blockchain technology. Comprehensive glossary for understanding modern Islamic philanthropy.',
    keywords: [
      'Islamic finance terms',
      'zakat glossary',
      'waqf definitions',
      'Islamic finance dictionary',
      'Sharia terms',
      'blockchain Islamic finance',
      'asnaf definitions',
    ],
    canonical: `${SITE_URL}/glossary`,
  },

  // Contact
  contact: {
    title: 'Contact Tawf Foundation',
    description: 'Get in touch with Tawf Islamic Foundation. Join us in building transparent digital infrastructure for Islamic philanthropy. Partnership inquiries welcome.',
    keywords: [
      'contact Tawf',
      'Islamic foundation contact',
      'Tawf partnership',
      'blockchain philanthropy contact',
    ],
    canonical: `${SITE_URL}/contact`,
  },
};

// Helper function to get SEO config for a route
export function getSEOConfig(route: string): SEOConfig {
  // Remove leading slash and query params
  const cleanRoute = route.replace(/^\/|[\?#].*$/g, '') || 'home';
  return pageSEO[cleanRoute] || pageSEO.home;
}

// Generate full page title with site name suffix
export function getFullPageTitle(title: string): string {
  return `${title} | Tawf Islamic Foundation`;
}

// Get JSON-LD structured data for a page
export function getPageSchema(route: string): Record<string, unknown>[] {
  const schemas: Record<string, unknown>[] = [
    organizationSchema as Record<string, unknown>,
    websiteSchema as Record<string, unknown>,
  ];
  const config = getSEOConfig(route);

  // Add Article schema for article-type pages
  if (config.type === 'article' || route === '/manifesto' || route === '/research') {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: config.title,
      description: config.description,
      url: config.canonical,
      publisher: {
        '@type': 'Organization',
        name: 'Tawf Islamic Foundation',
        logo: `${SITE_URL}/images/tawflogo.png`,
      },
    });
  }

  // Add FAQPage schema for glossary
  if (route === '/glossary') {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [], // Will be populated dynamically from glossary terms
    });
  }

  return schemas;
}
