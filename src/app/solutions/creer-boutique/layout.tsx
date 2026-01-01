import { Metadata } from 'next';
import { constructMetadata, PAGE_SEO } from '@/lib/seo.config';

export const metadata: Metadata = constructMetadata({
  title: PAGE_SEO.solutions.creerBoutique.title,
  description: PAGE_SEO.solutions.creerBoutique.description,
  url: PAGE_SEO.solutions.creerBoutique.url,
  keywords: PAGE_SEO.solutions.creerBoutique.keywords,
});

export default function CreerBoutiqueLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
