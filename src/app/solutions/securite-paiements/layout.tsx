import { Metadata } from 'next';
import { constructMetadata, PAGE_SEO } from '@/lib/seo.config';

export const metadata: Metadata = constructMetadata({
  title: PAGE_SEO.solutions.securitePaiements.title,
  description: PAGE_SEO.solutions.securitePaiements.description,
  url: PAGE_SEO.solutions.securitePaiements.url,
  keywords: PAGE_SEO.solutions.securitePaiements.keywords,
});

export default function SecuritePaiementsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
