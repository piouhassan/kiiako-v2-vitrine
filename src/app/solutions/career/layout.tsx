import { Metadata } from 'next';
import { constructMetadata, PAGE_SEO } from '@/lib/seo.config';

export const metadata: Metadata = constructMetadata({
  title: PAGE_SEO.solutions.career.title,
  description: PAGE_SEO.solutions.career.description,
  url: PAGE_SEO.solutions.career.url,
  keywords: PAGE_SEO.solutions.career.keywords,
});

export default function CareerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
