import { Metadata } from 'next';
import { constructMetadata, PAGE_SEO } from '@/lib/seo.config';

export const metadata: Metadata = constructMetadata({
  title: PAGE_SEO.solutions.personnalisation.title,
  description: PAGE_SEO.solutions.personnalisation.description,
  url: PAGE_SEO.solutions.personnalisation.url,
  keywords: PAGE_SEO.solutions.personnalisation.keywords,
});

export default function PersonnalisationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
