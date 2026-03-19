'use client';

import { FadeIn } from '@/components/animations/FadeIn';
import { SlideIn } from '@/components/animations/SlideIn';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { BlogPost } from '@/app/solutions/blog/BlogTypes';
import { Calendar, Clock } from 'lucide-react';
import Link from 'next/link';

const API_KEY = "A/=h6eucodZfZVqgC3G`=>L=M]/$j}8*0o[lZ!ER@Y";
const fallbackImg = "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=600&fit=crop";

export default function Blog() {
  const { t, i18n } = useTranslation();
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}blog/public`, {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": API_KEY,
          },
        });
        const data = await res.json();
        if (data.data) setBlogs(data.data.slice(0, 3));
      } catch (error) {
        console.error('Error fetching blog data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString(i18n.language === 'fr' ? 'fr-FR' : 'en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  const getReadingTime = (blog: BlogPost) =>
    Math.max(1, Math.round(((blog.content ? blog.content.replace(/<[^>]*>?/gm, '').length : (blog.excerpt?.length || 500)) / 1000)));

  const getImageSrc = (post: BlogPost) =>
    post.featured_image ? `${process.env.NEXT_PUBLIC_API_URL}${post.featured_image}` : fallbackImg;

  const featuredBlog = blogs[0] ?? null;
  const secondaryBlogs = blogs.slice(1, 3);

  /* ── Skeleton helpers ───────────────────────────────────────────── */
  const FeaturedSkeleton = () => (
    <div className="rounded-[20px] overflow-hidden bg-white dark:bg-background-8 max-w-[627px] lg:max-w-full lg:mx-0 mx-auto animate-pulse">
      <div className="w-full h-[260px] bg-stroke-2 dark:bg-stroke-6" />
      <div className="p-8 space-y-4">
        <div className="flex gap-4">
          <div className="h-4 w-24 bg-stroke-2 dark:bg-stroke-6 rounded-full" />
          <div className="h-4 w-16 bg-stroke-2 dark:bg-stroke-6 rounded-full" />
        </div>
        <div className="h-6 w-4/5 bg-stroke-2 dark:bg-stroke-6 rounded-lg" />
        <div className="h-4 w-full bg-stroke-2 dark:bg-stroke-6 rounded-full" />
        <div className="h-4 w-3/4 bg-stroke-2 dark:bg-stroke-6 rounded-full" />
        <div className="h-10 w-36 bg-stroke-2 dark:bg-stroke-6 rounded-xl mt-8" />
      </div>
    </div>
  );

  const SecondarySkeleton = () => (
    <div className="rounded-[20px] overflow-hidden bg-white dark:bg-background-8 flex sm:flex-row flex-col sm:gap-8 gap-0 max-w-[627px] lg:max-w-full lg:mx-0 mx-auto animate-pulse">
      <div className="sm:w-[298px] w-full h-[118px] sm:h-auto bg-stroke-2 dark:bg-stroke-6 rounded-[20px] shrink-0" />
      <div className="sm:py-8 sm:pr-8 p-8 sm:p-0 space-y-3 flex-1">
        <div className="flex gap-4">
          <div className="h-3 w-20 bg-stroke-2 dark:bg-stroke-6 rounded-full" />
          <div className="h-3 w-14 bg-stroke-2 dark:bg-stroke-6 rounded-full" />
        </div>
        <div className="h-5 w-4/5 bg-stroke-2 dark:bg-stroke-6 rounded-lg" />
        <div className="h-5 w-3/5 bg-stroke-2 dark:bg-stroke-6 rounded-lg" />
        <div className="h-9 w-32 bg-stroke-2 dark:bg-stroke-6 rounded-xl mt-4" />
      </div>
    </div>
  );

  return (
    <section className="pt-16 md:pt-20 lg:pt-[90px] xl:pt-[100px] pb-16 md:pb-20 lg:pb-[90px] xl:pb-[100px]">
      <div className="main-container">
        <div className="text-center space-y-5 mb-10 md:mb-[70px]">
          <FadeIn delay={0.1}>
            <span className="badge bg-primary-500 text-white">{t('home.blog.badge')}</span>
          </FadeIn>
          <div className="space-y-3">
            <SlideIn direction="down" delay={0.2}>
              <h2>{t('home.blog.title')}</h2>
            </SlideIn>
            <SlideIn direction="down" delay={0.3}>
              <p className="max-w-[492px] mx-auto">
                {t('home.blog.subtitle')}
              </p>
            </SlideIn>
          </div>
        </div>

        <div>
          <div className="grid grid-cols-12 items-start lg:gap-8 gap-y-12">

            {/* ── Featured post ─────────────────────────────────────── */}
            <div className="col-span-12 xl:col-span-6 lg:col-span-5 group">
              <FadeIn delay={0.4}>
                {loading || !featuredBlog ? (
                  <FeaturedSkeleton />
                ) : (
                  <div className="rounded-[20px] overflow-hidden bg-white dark:bg-background-8 max-w-[627px] lg:max-w-full lg:mx-0 mx-auto scale-100 group-hover:scale-[101%] transition-transform duration-500 group-hover:transition-transform group-hover:duration-500">
                    <figure className="lg:max-w-[627px] max-w-full w-full h-[260px] overflow-hidden rounded-[20px]">
                      <img
                        src={getImageSrc(featuredBlog)}
                        alt={featuredBlog.title}
                        className="w-full h-full object-cover"
                      />
                    </figure>
                    <div className="p-8">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="size-5 text-secondary/40 dark:text-accent/40" />
                          <span className="text-tagline-2 font-medium text-secondary/60 dark:text-accent/60">
                            {formatDate(featuredBlog.published_at)}
                          </span>
                        </div>
                        <div className="w-px h-[22px] bg-stroke-2 dark:bg-stroke-6" />
                        <div className="flex items-center gap-2">
                          <Clock className="size-5 text-secondary/40 dark:text-accent/40" />
                          <span className="text-tagline-2 font-medium text-secondary/60 dark:text-accent/60">
                            {getReadingTime(featuredBlog)} {t('common.units.minutes_short', 'min')}
                          </span>
                        </div>
                      </div>
                      <div className="space-y-4 mt-4">
                        <a href={`/solutions/blog/${featuredBlog.slug}`} className="block">
                          <h3 className="text-heading-6 md:text-heading-5 line-clamp-2">
                            {featuredBlog.title}
                          </h3>
                        </a>
                        <p className="max-w-[563px] w-full line-clamp-2">
                          {featuredBlog.excerpt}
                        </p>
                      </div>
                      <div className="xl:mt-12 mt-8">
                        <Link
                          href={`/solutions/blog/${featuredBlog.slug}`}
                          className="btn btn-white hover:btn-secondary dark:btn-transparent dark:hover:btn-accent btn-md w-[90%] md:w-auto"
                        >
                          <span>{t('home.blog.readMore')}</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </FadeIn>
            </div>

            {/* ── Secondary posts ───────────────────────────────────── */}
            <div className="col-span-12 xl:col-span-6 lg:col-span-7 space-y-8">
              {loading ? (
                <>
                  <div className="group"><FadeIn delay={0.5}><SecondarySkeleton /></FadeIn></div>
                  <div className="group"><FadeIn delay={0.6}><SecondarySkeleton /></FadeIn></div>
                </>
              ) : (
                secondaryBlogs.map((blog, i) => (
                  <div key={blog.id} className="group">
                    <FadeIn delay={0.5 + i * 0.1}>
                      <div className="rounded-[20px] overflow-hidden bg-white dark:bg-background-8 flex sm:flex-row flex-col sm:gap-8 gap-0 max-w-[627px] lg:max-w-full lg:mx-0 mx-auto scale-100 group-hover:scale-[101%] transition-transform duration-500 group-hover:transition-transform group-hover:duration-500">
                        <figure className="sm:w-[298px] w-full xl:h-[260px] sm:h-auto h-[260px] shrink-0 overflow-hidden rounded-[20px]">
                          <img
                            src={getImageSrc(blog)}
                            alt={blog.title}
                            className="w-full h-full object-cover"
                          />
                        </figure>
                        <div className="sm:py-8 sm:pr-8 p-8 sm:p-0 space-y-4">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                              <span className="text-tagline-2 font-medium text-secondary/60 dark:text-accent/60">
                                {formatDate(blog.published_at)}
                              </span>
                            </div>
                            <div className="w-px h-[22px] bg-stroke-2 dark:bg-stroke-6" />
                            <div className="flex items-center gap-2">
                              <span className="text-tagline-2 font-medium text-secondary/60 dark:text-accent/60">
                                {getReadingTime(blog)} {t('common.units.minutes_short', 'min')}
                              </span>
                            </div>
                          </div>
                          <div className="space-y-4">
                            <a href={`/solutions/blog/${blog.slug}`} className="block">
                              <h3 className="text-heading-6 md:text-heading-5 line-clamp-2">
                                {blog.title}
                              </h3>
                            </a>
                          </div>
                          <div>
                            <a
                              href={`/solutions/blog/${blog.slug}`}
                              className="btn btn-white hover:btn-secondary dark:btn-transparent dark:hover:btn-accent btn-md w-[90%] md:w-auto"
                            >
                              <span>{t('home.blog.readMore')}</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </FadeIn>
                  </div>
                ))
              )}
            </div>
          </div>

          <FadeIn delay={0.7}>
            <div className="flex justify-center mt-10 md:mt-14">
              <a
                href="/solutions/blog"
                className="btn btn-secondary btn-md inline-block dark:btn-transparent dark:border-stroke-7 hover:btn-primary dark:hover:btn-white w-[90%] md:w-auto"
              >
                <span>{t('home.blog.visitBlog')}</span>
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
