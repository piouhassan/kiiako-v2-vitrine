import { Metadata } from 'next';
import { constructMetadata, PAGE_SEO } from '@/lib/seo.config';

export const metadata: Metadata = constructMetadata({
  title: PAGE_SEO.solutions.blog.title,
  description: PAGE_SEO.solutions.blog.description,
  url: PAGE_SEO.solutions.blog.url,
  keywords: PAGE_SEO.solutions.blog.keywords,
});

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
