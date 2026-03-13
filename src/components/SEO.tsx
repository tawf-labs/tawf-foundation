import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getSEOConfig, getFullPageTitle, getPageSchema, DEFAULT_OG_IMAGE, SITE_URL } from '../config/seo';

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  canonical?: string;
  noIndex?: boolean;
  schema?: Record<string, unknown>[];
}

// Default SEO props for fallback
const defaultSEO: SEOProps = {
  title: 'Infrastructure for the Digital Baitul Maal',
  description: 'Tawf provides blockchain-based infrastructure for transparent Islamic philanthropy, zakat, and waqf management.',
  keywords: [
    'Islamic foundation',
    'digital zakat',
    'blockchain waqf',
    'Islamic finance transparency',
  ],
  ogImage: DEFAULT_OG_IMAGE,
  canonical: SITE_URL,
};

/**
 * SEO Component - Manages dynamic meta tags and structured data
 *
 * This component updates the document head with:
 * - Dynamic page title
 * - Meta description and keywords
 * - OpenGraph tags for social sharing
 * - Twitter Card tags
 * - Canonical URL
 * - JSON-LD structured data
 */
export default function SEO(props: SEOProps) {
  const { pathname } = useLocation();

  // Get route-specific config or use provided props
  const routeConfig = getSEOConfig(pathname);
  const title = props.title || routeConfig.title;
  const description = props.description || routeConfig.description;
  const keywords = props.keywords || routeConfig.keywords;
  const ogImage = props.ogImage || routeConfig.ogImage || DEFAULT_OG_IMAGE;
  const canonical = props.canonical || routeConfig.canonical || `${SITE_URL}${pathname}`;
  const schemas = props.schema || getPageSchema(pathname);

  // Full page title with site name
  const fullTitle = getFullPageTitle(title);

  useEffect(() => {
    // Update document title
    document.title = fullTitle;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;

      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, name);
        document.head.appendChild(element);
      }

      element.setAttribute('content', content);
    };

    // Description
    updateMetaTag('description', description);

    // Keywords
    if (keywords && keywords.length > 0) {
      updateMetaTag('keywords', keywords.join(', '));
    }

    // OpenGraph tags
    updateMetaTag('og:type', 'website', true);
    updateMetaTag('og:url', canonical, true);
    updateMetaTag('og:title', fullTitle, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:site_name', 'Tawf Islamic Foundation', true);

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:url', canonical);
    updateMetaTag('twitter:title', fullTitle);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage);

    // Canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonical);

    // Robots tag
    if (props.noIndex) {
      updateMetaTag('robots', 'noindex, nofollow');
    }

    // Clean up old JSON-LD scripts from our app
    const existingScripts = document.querySelectorAll('script[data-seo="json-ld"]');
    existingScripts.forEach(script => script.remove());

    // Add JSON-LD structured data
    schemas.forEach(schemaData => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-seo', 'json-ld');
      script.textContent = JSON.stringify(schemaData);
      document.head.appendChild(script);
    });

    // Cleanup function
    return () => {
      // Note: We don't remove all meta tags on unmount because they persist
      // and get overwritten by the next page's SEO component
    };
  }, [fullTitle, description, keywords, ogImage, canonical, schemas, props.noIndex]);

  // This component doesn't render anything
  return null;
}

/**
 * Hook to get current page SEO config
 */
export function useSEOConfig() {
  const { pathname } = useLocation();
  return getSEOConfig(pathname);
}

/**
 * HOC to add SEO metadata to a page component
 */
export function withSEO<P extends object>(
  Component: React.ComponentType<P>,
  seoProps: SEOProps
) {
  return function WithSEOComponent(props: P) {
    return (
      <>
        <SEO {...seoProps} />
        <Component {...props} />
      </>
    );
  };
}
