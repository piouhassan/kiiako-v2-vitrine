import { Metadata } from 'next';
import { constructMetadata, PAGE_SEO } from '@/lib/seo.config';

export const metadata: Metadata = constructMetadata({
  title: PAGE_SEO.solutions.produitsDigitaux.title,
  description: PAGE_SEO.solutions.produitsDigitaux.description,
  url: PAGE_SEO.solutions.produitsDigitaux.url,
  keywords: PAGE_SEO.solutions.produitsDigitaux.keywords,
});

export default function ProduitsDigitauxLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
