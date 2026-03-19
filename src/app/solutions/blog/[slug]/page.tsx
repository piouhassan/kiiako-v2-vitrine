'use client';

import React, { useEffect, useState, use } from 'react';
import { notFound } from 'next/navigation';
import { Calendar, Eye, Share2, Facebook, Twitter, Linkedin, Link as LinkIcon, ArrowLeft, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { FadeIn } from '@/components/animations/FadeIn';
import { SlideIn } from '@/components/animations/SlideIn';
import { BlogPost } from '../BlogTypes';
import Link from 'next/link';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';

// Helper for formatting date
const formatDate = (dateString: string, lang: string) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  return new Intl.DateTimeFormat(lang === 'fr' ? 'fr-FR' : 'en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(date);
};

export default function BlogDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const { t, i18n } = useTranslation();
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [relatedBlogs, setRelatedBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);
  const trackViewedRef = React.useRef(new Set<string>());
  const fallbackImg = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=2000';

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        setLoading(true);
        
        // Prevent StrictMode double-counting
        const isTracked = trackViewedRef.current.has(slug);
        const trackParam = isTracked ? 'false' : 'true';
        trackViewedRef.current.add(slug);

        // Fetch specific blog by slug
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}blog/public/article/${slug}?track=${trackParam}`, {
          headers: {
            'x-api-key': 'A/=h6eucodZfZVqgC3G`=>L=M]/$j}8*0o[lZ!ER@Y'
          }
        });
        
        if (!res.ok) {
          if (res.status === 404) notFound();
          throw new Error('Failed to fetch blog');
        }
        
        const data = await res.json();
        setBlog(data.data);

        // Fetch related blogs (latest 3 excluding current)
        const relatedRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}blog/public?limit=4`, {
          headers: {
            'x-api-key': 'A/=h6eucodZfZVqgC3G`=>L=M]/$j}8*0o[lZ!ER@Y'
          }
        });
        
        if (relatedRes.ok) {
          const relatedData = await relatedRes.json();
          // Filter out current blog and take up to 3
          const filtered = (relatedData.data || [])
            .filter((b: BlogPost) => b.slug !== slug)
            .slice(0, 3);
          setRelatedBlogs(filtered);
        }

      } catch (error) {
        console.error('Error fetching blog:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogData();
  }, [slug]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (loading) {
    return (
      <main className="min-h-screen bg-background-1 dark:bg-background-6 pt-32 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <div className="animate-pulse space-y-8">
            <div className="h-4 bg-stroke-2 dark:bg-stroke-6 w-24 rounded-full" />
            <div className="h-12 bg-stroke-2 dark:bg-stroke-6 w-3/4 rounded-2xl" />
            <div className="h-6 bg-stroke-2 dark:bg-stroke-6 w-1/2 rounded-full" />
            <div className="w-full h-96 bg-stroke-2 dark:bg-stroke-6 rounded-[32px] mt-10" />
            <div className="space-y-4 mt-16">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-4 bg-stroke-2 dark:bg-stroke-6 rounded-full w-full" />
              ))}
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (!blog) return null;

  const readingTime = Math.max(1, Math.round((blog.content ? blog.content.replace(/<[^>]*>?/gm, '').length : (blog.excerpt?.length || 500)) / 1000));
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <div className="bg-background-1 dark:bg-background-6">
      <Header />
      <main className="min-h-screen bg-background-1 dark:bg-background-6 relative overflow-x-clip selection:bg-primary-500/30">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-primary-500/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px] -translate-x-1/2 pointer-events-none" />

      {/* Hero Section */}
      <header className="relative pt-32 lg:pt-48 pb-12 lg:pb-16 z-10 text-center">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex justify-start mb-8 md:mb-12">
            <Link 
              href="/solutions/blog"
              className="inline-flex items-center gap-2 text-secondary/60 dark:text-accent/60 hover:text-primary-500 font-medium text-sm transition-all group"
            >
              <ArrowLeft className="size-4 group-hover:-translate-x-1 transition-transform" />
              {t('blog.article.back')}
            </Link>
          </div>
          <SlideIn direction="up">
            <div className="flex items-center justify-center gap-4 flex-wrap mb-8">
              {blog.Category && (
                <span className="cb-badge">
                  {blog.Category.name}
                </span>
              )}
              <span className="w-1.5 h-1.5 rounded-full bg-stroke-2 dark:bg-stroke-6" />
              <span className="text-sm text-secondary/60 dark:text-accent/60 font-medium flex items-center gap-2">
                <Calendar className="size-4" />
                {formatDate(blog.published_at, i18n.language)}
              </span>
            </div>

            <h1 className="text-heading-2 text-secondary dark:text-white leading-[1.1] mb-8 tracking-tight mx-auto max-w-4xl">
              {blog.title}
            </h1>

            {blog.excerpt && (
              <p className="text-lg md:text-xl text-secondary/60 dark:text-accent/60 leading-relaxed mb-12 max-w-3xl mx-auto">
                {blog.excerpt}
              </p>
            )}
          </SlideIn>
        </div>
      </header>

      {/* Cinematic Featured Image */}
      <FadeIn delay={0.2} className="relative z-10 container mx-auto px-4 max-w-[1200px] mb-20 lg:mb-32">
        <figure className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-[32px] md:rounded-[48px] overflow-hidden border border-stroke-1 dark:border-white/5 bg-background-3 dark:bg-background-7 group">
          <img
            src={blog.featured_image ? `${process.env.NEXT_PUBLIC_API_URL}${blog.featured_image}` : fallbackImg}
            alt={blog.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        </figure>
      </FadeIn>

      {/* Main Content & Sticky Sidebar */}
      <section className="relative z-10 pb-32">
        <div className="container mx-auto px-4 max-w-[1100px] flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Sidebar - Sticky (Desktop) */}
          <aside className="lg:w-1/4 hidden lg:block sticky top-32 h-fit">
            <div className="space-y-10 bg-gray-50 dark:bg-background-7 p-8 rounded-[32px] border border-stroke-1 dark:border-white/5">
              {/* Author Info */}
              <div className="pt-8 border-t border-stroke-2 dark:border-stroke-6">
                <div className="text-[10px] font-bold text-secondary/40 dark:text-accent/40 uppercase tracking-[0.2em] mb-4">{t('blog.article.writtenBy')}</div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-500/10 flex items-center justify-center text-primary-500 font-bold text-xl">
                    {blog.author ? blog.author.charAt(0).toUpperCase() : 'K'}
                  </div>
                  <div className="text-base font-bold text-secondary dark:text-white">
                    {blog.author || t('blog.article.team')}
                  </div>
                </div>
              </div>

              {/* Specs */}
              <div className="pt-8 border-t border-stroke-2 dark:border-stroke-6 space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-secondary/60 dark:text-accent/60 font-medium">{t('blog.article.share')}</span>
                  <span className="font-bold text-secondary dark:text-white bg-white dark:bg-white/5 px-3 py-1 rounded-full border border-stroke-1 dark:border-white/5">{readingTime} {t('blog.article.readingTime')}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-secondary/60 dark:text-accent/60 font-medium">{t('blog.sidebar.past_records')}</span>
                  <span className="font-bold text-secondary dark:text-white flex items-center gap-1.5">
                    <Eye className="size-4 text-primary-500" />
                    {blog.views_count || 0}
                  </span>
                </div>
              </div>

              {/* Share */}
              <div className="pt-8 border-t border-stroke-2 dark:border-stroke-6">
                <div className="text-[10px] font-bold text-secondary/40 dark:text-accent/40 uppercase tracking-[0.2em] mb-4">{t('blog.article.share')}</div>
                <div className="flex gap-2">
                  <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(blog.title)}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-white/5 border border-stroke-1 dark:border-white/5 text-secondary/60 hover:bg-[#1DA1F2] hover:text-white hover:border-[#1DA1F2] transition-all">
                    <Twitter className="size-4" />
                  </a>
                  <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(blog.title)}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-white/5 border border-stroke-1 dark:border-white/5 text-secondary/60 hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] transition-all">
                    <Linkedin className="size-4" />
                  </a>
                  <button onClick={handleCopyLink} className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-white/5 border border-stroke-1 dark:border-white/5 text-secondary/60 hover:bg-primary-500 hover:text-white hover:border-primary-500 transition-all relative">
                    <LinkIcon className="size-4" />
                    {copied && (
                      <span className="absolute -top-10 bg-secondary dark:bg-white text-white dark:text-secondary text-[11px] font-bold px-3 py-1.5 rounded-lg shadow-xl whitespace-nowrap animate-in zoom-in">
                        {t('blog.article.copied')}
                      </span>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </aside>

          {/* Right Content - The Article text */}
          <article className="lg:w-3/4 max-w-3xl">
            {/* Mobile Header (Hidden on Desktop) */}
            <div className="lg:hidden mb-12">
              <div className="flex items-center justify-between py-6 border-y border-stroke-2 dark:border-stroke-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-500/10 flex items-center justify-center text-primary-500 font-bold text-lg">
                    {blog.author ? blog.author.charAt(0).toUpperCase() : 'K'}
                  </div>
                  <div>
                    <div className="text-base font-bold text-secondary dark:text-white">
                      {blog.author || t('blog.article.team')}
                    </div>
                    <div className="text-sm text-secondary/50 dark:text-accent/50 font-medium">
                      {readingTime} {t('blog.article.readingTime')}
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button onClick={handleCopyLink} className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-white/5 border border-stroke-1 dark:border-white/5 text-secondary/70 hover:bg-primary-500 hover:text-white transition-colors relative">
                    <LinkIcon className="size-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Prose formatting */}
            <SlideIn direction="up" delay={0.3}>
              <div 
                className="prose md:prose-lg max-w-none dark:prose-invert 
                  prose-headings:text-secondary dark:prose-headings:text-white prose-headings:tracking-tight
                  prose-h2:text-3xl md:prose-h2:text-heading-3 prose-h2:mt-16 prose-h2:mb-8 prose-h2:font-bold
                  prose-h3:text-2xl md:prose-h3:text-heading-4 prose-h3:mt-12 prose-h3:mb-6 prose-h3:font-bold
                  prose-p:text-secondary/80 dark:prose-p:text-accent/80 prose-p:leading-relaxed prose-p:mb-8
                  prose-a:text-primary-500 prose-a:no-underline hover:prose-a:underline prose-a:font-medium
                  prose-strong:text-secondary dark:prose-strong:text-white prose-strong:font-bold
                  prose-ul:my-8 prose-li:my-3 prose-li:text-secondary/80 dark:prose-li:text-accent/80
                  prose-blockquote:border-l-4 prose-blockquote:border-primary-500 prose-blockquote:bg-background-3 dark:prose-blockquote:bg-background-7 prose-blockquote:py-4 prose-blockquote:px-8 prose-blockquote:rounded-r-2xl prose-blockquote:italic prose-blockquote:text-secondary/90 dark:prose-blockquote:text-white
                  prose-img:rounded-[32px] prose-img:my-16 prose-img:border prose-img:border-stroke-1 dark:prose-img:border-white/5"
                dangerouslySetInnerHTML={{ __html: blog.content || `<p>${t('blog.read_more')}...</p>` }}
              />
            </SlideIn>

            {/* Tags area */}
            {blog.tags && (
              <div className="mt-20 pt-10 border-t border-stroke-2 dark:border-stroke-6">
                <div className="text-[10px] font-bold text-secondary/40 dark:text-accent/40 uppercase tracking-[0.2em] mb-6">{t('blog.article.keywords')}</div>
                <div className="flex items-center gap-3 flex-wrap">
                  {((): string[] => {
                    try { return JSON.parse(blog.tags); }
                    catch { return []; }
                  })().map((tag: string, i: number) => (
                    <span key={i} className="px-4 py-2 bg-white dark:bg-background-7 border border-stroke-1 dark:border-white/5 rounded-full text-xs font-medium text-secondary/60 dark:text-accent/60 hover:bg-primary-500 hover:text-white hover:border-primary-500 transition-all cursor-pointer">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </article>
        </div>
      </section>

      {/* Suggested Articles Wrapper */}
      {relatedBlogs.length > 0 && (
        <section className="relative z-10 py-32 bg-background-3 dark:bg-background-7">
          <div className="container mx-auto px-4 max-w-[1200px]">
            <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-16 gap-6 text-center md:text-left">
              <div>
                <h2 className="text-heading-3 text-secondary dark:text-white mb-4">
                  {t('blog.article.related')}
                </h2>
                <p className="text-secondary/60 dark:text-accent/60">{t('blog.article.subtitle')}</p>
              </div>
              <Link href="/solutions/blog" className="inline-flex items-center justify-center px-8 h-12 text-secondary dark:text-white hover:bg-white dark:hover:bg-white/5 rounded-full transition-colors border border-transparent hover:border-stroke-2 dark:hover:border-white/10 shrink-0">
                {t('blog.article.more')}
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedBlogs.map((relatedBlog, index) => (
                <FadeIn key={relatedBlog.id} delay={index * 0.1}>
                  <article className="group bg-white dark:bg-background-6 rounded-[32px] border border-stroke-1 dark:border-white/5 p-4 transition-all duration-300 hover:translate-y-[-4px] overflow-hidden flex flex-col h-full">
                    <figure className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-6 shrink-0">
                      <img
                        src={relatedBlog.featured_image ? `${process.env.NEXT_PUBLIC_API_URL}${relatedBlog.featured_image}` : fallbackImg}
                        alt={relatedBlog.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      {relatedBlog.Category && (
                        <div className="absolute top-4 left-4 z-10">
                          <span className="px-3 py-1.5 rounded-full bg-white/90 dark:bg-black/50 backdrop-blur-md border border-white/20 text-secondary dark:text-white text-[10px] font-bold uppercase tracking-wider">
                            {relatedBlog.Category.name}
                          </span>
                        </div>
                      )}
                    </figure>
                    <div className="flex-1 flex flex-col px-2">
                       <div className="flex items-center gap-3 text-xs font-medium text-secondary/50 dark:text-accent/50 mb-4">
                         <span className="flex items-center gap-1.5">
                           <Calendar className="size-3.5" />
                           {formatDate(relatedBlog.published_at, i18n.language)}
                         </span>
                       </div>
                       <h3 className="text-xl font-bold text-secondary dark:text-white group-hover:text-primary-500 transition-colors duration-300 leading-tight mb-3 line-clamp-2">
                         <Link href={`/solutions/blog/${relatedBlog.slug}`} className="before:absolute before:inset-0">
                           {relatedBlog.title}
                         </Link>
                       </h3>
                       <p className="text-sm text-secondary/60 dark:text-accent/60 line-clamp-2 leading-relaxed mb-6 mt-auto">
                         {relatedBlog.excerpt}
                       </p>
                    </div>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Modern CTA */}
      <section className="relative z-10 py-32 px-4 bg-background-1 dark:bg-background-6">
        <div className="container mx-auto max-w-[1000px] text-center">
            <FadeIn>
              <div className="bg-background-3 dark:bg-background-7 rounded-[48px] border border-stroke-1 dark:border-white/5 p-12 md:p-16 lg:p-20 relative overflow-hidden">
                <div className="max-w-2xl mx-auto space-y-8">
                  <h2 className="text-heading-3 text-secondary dark:text-white leading-[1.1]">
                    {t('blog.article.cta.title')}
                  </h2>
                  <p className="text-secondary/60 dark:text-accent/60 leading-relaxed max-w-xl mx-auto">
                    {t('blog.article.cta.subtitle')}
                  </p>
                  <div className="pt-4">
                    <Link 
                      href="/contact"
                      className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 transition-colors text-white px-8 h-14 rounded-full"
                    >
                      {t('blog.article.cta.button')} <ArrowRight className="size-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </FadeIn>
        </div>
      </section>

    </main>
    <Footer />
  </div>
  );
}
