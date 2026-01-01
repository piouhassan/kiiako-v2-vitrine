import { SITE_CONFIG } from './seo.config';

export interface Organization {
  '@context': string;
  '@type': string;
  name: string;
  url: string;
  logo: string;
  description: string;
  sameAs: string[];
  contactPoint: {
    '@type': string;
    contactType: string;
    email: string;
    availableLanguage: string[];
  };
}

export interface WebSite {
  '@context': string;
  '@type': string;
  name: string;
  url: string;
  description: string;
  publisher: {
    '@type': string;
    name: string;
  };
}

export interface WebPage {
  '@context': string;
  '@type': string;
  name: string;
  description: string;
  url: string;
  inLanguage: string;
  isPartOf: {
    '@type': string;
    url: string;
  };
}

export interface SoftwareApplication {
  '@context': string;
  '@type': string;
  name: string;
  applicationCategory: string;
  operatingSystem: string;
  offers: {
    '@type': string;
    price: string;
    priceCurrency: string;
  };
  description: string;
  url: string;
  creator: {
    '@type': string;
    name: string;
  };
}

export interface Product {
  '@context': string;
  '@type': string;
  name: string;
  description: string;
  brand: {
    '@type': string;
    name: string;
  };
  offers: {
    '@type': string;
    url: string;
    priceCurrency: string;
    price: string;
    availability: string;
  };
}

export interface BreadcrumbList {
  '@context': string;
  '@type': string;
  itemListElement: {
    '@type': string;
    position: number;
    name: string;
    item?: string;
  }[];
}

export const getOrganizationSchema = (): Organization => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_CONFIG.name,
  url: SITE_CONFIG.url,
  logo: `${SITE_CONFIG.url}/logo.png`,
  description: SITE_CONFIG.description,
  sameAs: [
    'https://twitter.com/kiiako',
    'https://www.linkedin.com/company/kiiako',
    'https://www.facebook.com/kiiako',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Service',
    email: 'contact@kiiako.io',
    availableLanguage: ['French', 'English'],
  },
});

export const getWebSiteSchema = (): WebSite => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_CONFIG.name,
  url: SITE_CONFIG.url,
  description: SITE_CONFIG.description,
  publisher: {
    '@type': 'Organization',
    name: SITE_CONFIG.name,
  },
});

export const getWebPageSchema = (
  title: string,
  description: string,
  url: string
): WebPage => ({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: title,
  description,
  url,
  inLanguage: 'fr-FR',
  isPartOf: {
    '@type': 'WebSite',
    url: SITE_CONFIG.url,
  },
});

export const getSoftwareApplicationSchema = (): SoftwareApplication => ({
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: SITE_CONFIG.name,
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'XOF',
  },
  description: SITE_CONFIG.description,
  url: SITE_CONFIG.url,
  creator: {
    '@type': 'Organization',
    name: SITE_CONFIG.name,
  },
});

export const getBreadcrumbSchema = (
  items: { name: string; url?: string }[]
): BreadcrumbList => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    ...(item.url && { item: item.url }),
  })),
});
