import { Metadata } from 'next';
import { constructMetadata, PAGE_SEO } from '@/lib/seo.config';

export const metadata: Metadata = constructMetadata({
  title: PAGE_SEO.solutions.avisClients.title,
  description: PAGE_SEO.solutions.avisClients.description,
  url: PAGE_SEO.solutions.avisClients.url,
  keywords: PAGE_SEO.solutions.avisClients.keywords,
});

export default function AvisClientsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
