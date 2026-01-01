import { MetadataRoute } from 'next';
import { SITE_CONFIG, PAGE_SEO } from '@/lib/seo.config';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    {
      url: SITE_CONFIG.url,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: PAGE_SEO.tarifs.url,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: PAGE_SEO.solutions.creerBoutique.url,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: PAGE_SEO.solutions.mobileMoney.url,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: PAGE_SEO.solutions.nomDeDomaine.url,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: PAGE_SEO.solutions.personnalisation.url,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: PAGE_SEO.solutions.produitsPhysiques.url,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: PAGE_SEO.solutions.produitsDigitaux.url,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: PAGE_SEO.solutions.securitePaiements.url,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: PAGE_SEO.solutions.avisClients.url,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: PAGE_SEO.solutions.blog.url,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: PAGE_SEO.solutions.equipe.url,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: PAGE_SEO.solutions.contact.url,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: PAGE_SEO.solutions.career.url,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: PAGE_SEO.solutions.team.url,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
  ];

  return routes;
}
