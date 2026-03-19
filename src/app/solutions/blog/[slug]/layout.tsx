import { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo.config';
import { BlogPost } from '../BlogTypes';

// Fetch specific blog metadata for SEO
async function getBlogData(slug: string): Promise<BlogPost | null> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api/';
  const url = `${baseUrl}blog/public/article/${encodeURIComponent(slug)}?track=false`;
  
  try {
    const res = await fetch(url, {
      headers: {
        'x-api-key': 'A/=h6eucodZfZVqgC3G`=>L=M]/$j}8*0o[lZ!ER@Y'
      },
      next: { revalidate: 60 }
    });
    
    if (!res.ok) {
      console.warn(`[SEO Fetch] API returned ${res.status} for URL: ${url}`);
      return null;
    }
    const data = await res.json();
    return data?.data || null;
  } catch (error: any) {
    console.warn(`[SEO Fetch] Failed for URL ${url}:`, error?.message || error);
    return null;
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlogData(slug);
  
  if (!blog) {
    return constructMetadata({
      title: 'Article introuvable | Kiiako',
      description: 'L\'article que vous recherchez n\'existe pas.'
    });
  }

  return constructMetadata({
    title: `${blog.title} | Blog Kiiako`,
    description: blog.excerpt,
    url: `/solutions/blog/${blog.slug}`,
    image: blog.featured_image ? `${process.env.NEXT_PUBLIC_API_URL}${blog.featured_image}` : undefined
  });
}

export default function BlogDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
