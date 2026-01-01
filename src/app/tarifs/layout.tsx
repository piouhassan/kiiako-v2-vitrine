import { Metadata } from 'next';
import { constructMetadata, PAGE_SEO } from '@/lib/seo.config';

export const metadata: Metadata = constructMetadata({
  title: PAGE_SEO.tarifs.title,
  description: PAGE_SEO.tarifs.description,
  url: PAGE_SEO.tarifs.url,
  keywords: PAGE_SEO.tarifs.keywords,
});

export default function TarifsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
