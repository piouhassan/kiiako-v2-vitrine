import { Metadata } from 'next';
import { constructMetadata, PAGE_SEO } from '@/lib/seo.config';

export const metadata: Metadata = constructMetadata({
  title: PAGE_SEO.solutions.mobileMoney.title,
  description: PAGE_SEO.solutions.mobileMoney.description,
  url: PAGE_SEO.solutions.mobileMoney.url,
  keywords: PAGE_SEO.solutions.mobileMoney.keywords,
});

export default function MobileMoneyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
