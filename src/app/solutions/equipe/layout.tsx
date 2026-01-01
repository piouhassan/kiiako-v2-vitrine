import { Metadata } from 'next';
import { constructMetadata, PAGE_SEO } from '@/lib/seo.config';

export const metadata: Metadata = constructMetadata({
  title: PAGE_SEO.solutions.equipe.title,
  description: PAGE_SEO.solutions.equipe.description,
  url: PAGE_SEO.solutions.equipe.url,
  keywords: PAGE_SEO.solutions.equipe.keywords,
});

export default function EquipeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
