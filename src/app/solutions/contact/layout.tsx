import { Metadata } from 'next';
import { constructMetadata, PAGE_SEO } from '@/lib/seo.config';

export const metadata: Metadata = constructMetadata({
  title: PAGE_SEO.solutions.contact.title,
  description: PAGE_SEO.solutions.contact.description,
  url: PAGE_SEO.solutions.contact.url,
  keywords: PAGE_SEO.solutions.contact.keywords,
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
