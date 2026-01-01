import { Metadata } from 'next';
import { constructMetadata, PAGE_SEO } from '@/lib/seo.config';

export const metadata: Metadata = constructMetadata({
  title: PAGE_SEO.solutions.nomDeDomaine.title,
  description: PAGE_SEO.solutions.nomDeDomaine.description,
  url: PAGE_SEO.solutions.nomDeDomaine.url,
  keywords: PAGE_SEO.solutions.nomDeDomaine.keywords,
});

export default function NomDeDomaineLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
