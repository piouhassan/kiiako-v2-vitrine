import { Metadata } from 'next';
import { constructMetadata, PAGE_SEO } from '@/lib/seo.config';

export const metadata: Metadata = constructMetadata({
  title: PAGE_SEO.solutions.produitsPhysiques.title,
  description: PAGE_SEO.solutions.produitsPhysiques.description,
  url: PAGE_SEO.solutions.produitsPhysiques.url,
  keywords: PAGE_SEO.solutions.produitsPhysiques.keywords,
});

export default function ProduitsPhysiquesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
