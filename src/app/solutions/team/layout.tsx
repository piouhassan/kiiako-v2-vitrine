import { Metadata } from 'next';
import { constructMetadata, PAGE_SEO } from '@/lib/seo.config';

export const metadata: Metadata = constructMetadata({
  title: PAGE_SEO.solutions.team.title,
  description: PAGE_SEO.solutions.team.description,
  url: PAGE_SEO.solutions.team.url,
  keywords: PAGE_SEO.solutions.team.keywords,
});

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
