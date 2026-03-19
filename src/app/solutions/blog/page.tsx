'use client';

import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { FadeIn } from '@/components/animations/FadeIn';
import { Check, ArrowRight, Search, Calendar, Eye, BookOpen } from 'lucide-react';
import { REGISTER_URL_FREE } from "@/lib/utls";
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { BlogPost, BlogCategory } from './BlogTypes';

export default function BlogPage() {
  const { t } = useTranslation();

  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<BlogCategory[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [blogsRes, categoriesRes] = await Promise.all([
          fetch(`${process.env.NEXT_PUBLIC_API_URL}blog/public`, {
            headers: {
              "Content-Type": "application/json",
              "x-api-key": "A/=h6eucodZfZVqgC3G`=>L=M]/$j}8*0o[lZ!ER@Y",
            },
          }),
          fetch(`${process.env.NEXT_PUBLIC_API_URL}blog/category/public/list`, {
            headers: {
              "Content-Type": "application/json",
              "x-api-key": "A/=h6eucodZfZVqgC3G`=>L=M]/$j}8*0o[lZ!ER@Y",
            },
          }),
        ]);

        const blogsData = await blogsRes.json();
        const categoriesData = await categoriesRes.json();

        if (blogsData.data) setBlogs(blogsData.data);
        if (categoriesData.data) setCategories(categoriesData.data);
      } catch (error) {
        console.error('Error fetching blog data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  const featuredBlog = blogs.length > 0 ? blogs[0] : null;
  const secondaryBlogs = blogs.length > 1 ? blogs.slice(1, 7) : [];

  const allTags = Array.from(new Set(blogs.flatMap(blog => {
    try { return blog.tags ? JSON.parse(blog.tags) : []; }
    catch { return []; }
  }))) as string[];

  const fallbackImg = "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=600&fit=crop";

  return (
    <div className="bg-background-1 dark:bg-background-6">
      <Header />
      <main>

        {/* ─── Hero ─────────────────────────────────────────────────── */}
        <section className="pt-32 md:pt-40 lg:pt-48 pb-20 relative overflow-hidden bg-background-2 dark:bg-background-5">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-500/5 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/5 blur-[120px] rounded-full"></div>
          </div>

          <div className="main-container px-4 relative z-10">
            <div className="text-center space-y-8 max-w-3xl mx-auto">
              <FadeIn delay={0.2}>
                <span className="cb-badge">
                  {t('blog.hero.badge', 'Notre Blog')}
                </span>
              </FadeIn>
              <FadeIn delay={0.3}>
                <h1 className="text-heading-2 text-secondary dark:text-white">
                  {t('blog.hero.title_part1')}
                  <span className="text-primary-500"> {t('blog.hero.title_part2')}</span>
                </h1>
              </FadeIn>
              <FadeIn delay={0.4}>
                <p className="text-secondary/60 dark:text-accent/60 max-w-2xl mx-auto leading-relaxed text-lg">
                  {t('blog.hero.subtitle')}
                </p>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ─── Blog Content ──────────────────────────────────────────── */}
        <section className="py-32 bg-background-1 dark:bg-background-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500/5 blur-[150px] rounded-full pointer-events-none"></div>

          <div className="main-container px-4 relative z-10">

            {/* Empty state */}
            {!loading && blogs.length === 0 && (
              <div className="flex flex-col items-center justify-center py-40 gap-6">
                <div className="size-20 rounded-[28px] bg-primary-500/10 flex items-center justify-center">
                  <BookOpen className="size-10 text-primary-500" />
                </div>
                <p className="text-secondary/60 dark:text-accent/60 text-lg">
                  {t('blog.no_articles', 'Aucun article disponible pour le moment.')}
                </p>
              </div>
            )}

            {(loading || blogs.length > 0) && (
              <div className="grid grid-cols-12 gap-10 lg:gap-16">

                {/* ── Articles column ─────────────────────────────── */}
                <div className="col-span-12 lg:col-span-8 space-y-12">


                  {/* All articles — unified horizontal list */}
                  {loading ? (
                    <div className="space-y-5">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className={`flex gap-6 bg-white/40 dark:bg-white/[0.02] backdrop-blur-xl border border-white/20 dark:border-white/5 overflow-hidden animate-pulse ${i === 0 ? 'rounded-[28px] p-0' : 'rounded-[20px] p-4'}`}>
                          <div className={`shrink-0 bg-stroke-2 dark:bg-stroke-6 ${i === 0 ? 'w-56 h-52' : 'w-36 h-28 rounded-2xl'}`} />
                          <div className={`flex-1 space-y-3 ${i === 0 ? 'p-7' : 'py-2'}`}>
                            <div className="h-3 bg-stroke-2 dark:bg-stroke-6 rounded-full w-1/5" />
                            <div className="h-5 bg-stroke-2 dark:bg-stroke-6 rounded-lg w-4/5" />
                            <div className="h-5 bg-stroke-2 dark:bg-stroke-6 rounded-lg w-3/5" />
                            <div className="h-3 bg-stroke-2 dark:bg-stroke-6 rounded-full w-1/3 mt-2" />
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : blogs.length > 0 ? (
                    <div className="space-y-3">
                      {blogs.slice(0, 7).map((blog, index) => {
                        const isFeatured = index === 0;
                        const readingTime = Math.max(1, Math.round(((blog.content ? blog.content.replace(/<[^>]*>?/gm, '').length : (blog.excerpt?.length || 500)) / 1000)));
                        return (
                          <FadeIn key={blog.id || index} delay={0.2 + index * 0.06}>
                            {isFeatured ? (
                              /* ── Featured card ── */
                              <article className="group flex bg-white/50 dark:bg-white/[0.03] backdrop-blur-xl rounded-[24px] border border-white/30 dark:border-white/[0.07] overflow-hidden transition-all duration-300 hover:bg-white/70 dark:hover:bg-white/[0.05] hover:-translate-y-0.5">
                                {/* Image */}
                                <figure className="shrink-0 w-60 sm:w-72 relative overflow-hidden">
                                  <img
                                    src={blog.featured_image
                                      ? `${process.env.NEXT_PUBLIC_API_URL}${blog.featured_image}`
                                      : fallbackImg}
                                    alt={blog.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/5 dark:to-black/30" />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                                  <div className="absolute bottom-4 left-4 flex flex-col gap-1.5">
                                    <span className="self-start px-3 py-1 rounded-full bg-primary-500 text-white text-[11px] font-bold tracking-wide shadow-lg">
                                      À la une
                                    </span>
                                    {blog.Category && (
                                      <span className="self-start px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-[11px] font-medium">
                                        {blog.Category.name}
                                      </span>
                                    )}
                                  </div>
                                </figure>

                                {/* Content */}
                                <div className="flex flex-col justify-between flex-1 min-w-0 p-6 sm:p-8 gap-4">
                                  <div className="space-y-3">
                                    {/* Meta */}
                                    <div className="flex items-center gap-2 text-[11px] text-secondary/40 dark:text-accent/40 font-medium">
                                      <span className="flex items-center gap-1">
                                        <Calendar className="size-3" />
                                        {formatDate(blog.published_at)}
                                      </span>
                                      <span className="w-1 h-1 rounded-full bg-stroke-2 dark:bg-stroke-6" />
                                      <span className="flex items-center gap-1">
                                        <Eye className="size-3" />
                                        {blog.views_count || 0} vues
                                      </span>
                                      <span className="w-1 h-1 rounded-full bg-stroke-2 dark:bg-stroke-6" />
                                      <span>{readingTime} min de lecture</span>
                                    </div>

                                    {/* Title */}
                                    <h2 className="text-xl sm:text-2xl font-bold text-secondary dark:text-white group-hover:text-primary-500 transition-colors duration-200 leading-snug line-clamp-2">
                                      <Link href={`/solutions/blog/${blog.slug}`}>{blog.title}</Link>
                                    </h2>

                                    {/* Excerpt */}
                                    <p className="text-sm text-secondary/60 dark:text-accent/60 leading-relaxed line-clamp-2">
                                      {blog.excerpt}
                                    </p>
                                  </div>

                                  {/* CTA */}
                                  <Link
                                    href={`/solutions/blog/${blog.slug}`}
                                    className="inline-flex items-center gap-2 text-primary-500 text-sm font-semibold group/link hover:gap-3 transition-all duration-200"
                                  >
                                    <span>{t('blog.read_more', 'Lire l\'article')}</span>
                                    <ArrowRight className="size-4 group-hover/link:translate-x-0.5 transition-transform" />
                                  </Link>
                                </div>
                              </article>
                            ) : (
                              /* ── Secondary card ── */
                              <article className="group flex gap-4 bg-white/40 dark:bg-white/[0.02] backdrop-blur-xl rounded-[18px] border border-white/20 dark:border-white/5 p-3 transition-all duration-300 hover:bg-white/60 dark:hover:bg-white/[0.04] hover:-translate-y-0.5 relative overflow-hidden">
                                {/* Left accent line on hover */}
                                <span className="absolute left-0 top-0 bottom-0 w-[3px] bg-primary-500 rounded-l-[18px] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center" />

                                {/* Thumbnail */}
                                <figure className="w-[120px] h-[88px] shrink-0 rounded-xl overflow-hidden">
                                  <img
                                    src={blog.featured_image
                                      ? `${process.env.NEXT_PUBLIC_API_URL}${blog.featured_image}`
                                      : fallbackImg}
                                    alt={blog.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                  />
                                </figure>

                                {/* Content */}
                                <div className="flex flex-col justify-between flex-1 min-w-0 py-0.5">
                                  <div className="space-y-1">
                                    {/* Meta row */}
                                    <div className="flex items-center gap-1.5 flex-wrap">
                                      {blog.Category && (
                                        <span className="px-2 py-0.5 rounded-full bg-primary-500/10 text-primary-500 text-[10px] font-bold">
                                          {blog.Category.name}
                                        </span>
                                      )}
                                      <span className="w-0.5 h-0.5 rounded-full bg-stroke-2 dark:bg-stroke-6" />
                                      <span className="text-[10px] text-secondary/40 dark:text-accent/40 font-medium flex items-center gap-0.5">
                                        <Calendar className="size-2.5" />
                                        {formatDate(blog.published_at)}
                                      </span>
                                      <span className="w-0.5 h-0.5 rounded-full bg-stroke-2 dark:bg-stroke-6" />
                                      <span className="text-[10px] text-secondary/40 dark:text-accent/40 font-medium">
                                        {readingTime} min
                                      </span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="font-semibold text-[14px] text-secondary dark:text-white group-hover:text-primary-500 transition-colors duration-200 line-clamp-2 leading-snug">
                                      <Link href={`/solutions/blog/${blog.slug}`}>{blog.title}</Link>
                                    </h3>
                                  </div>

                                  {/* Bottom: views + link */}
                                  <div className="flex items-center justify-between">
                                    <span className="text-[10px] text-secondary/35 dark:text-accent/35 flex items-center gap-0.5">
                                      <Eye className="size-2.5" />
                                      {blog.views_count || 0}
                                    </span>
                                    <Link
                                      href={`/solutions/blog/${blog.slug}`}
                                      className="text-primary-500 text-[11px] font-semibold inline-flex items-center gap-1 group/link hover:gap-1.5 transition-all duration-200"
                                    >
                                      Lire <ArrowRight className="size-3 group-hover/link:translate-x-0.5 transition-transform" />
                                    </Link>
                                  </div>
                                </div>
                              </article>
                            )}
                          </FadeIn>
                        );
                      })}
                    </div>
                  ) : null}
                </div>

                {/* ── Sidebar ──────────────────────────────────────── */}
                <div className="col-span-12 lg:col-span-4 space-y-8">

                  {/* Search */}
                  <FadeIn delay={0.2}>
                    <div className="bg-white/40 dark:bg-white/[0.02] backdrop-blur-xl rounded-[32px] border border-white/20 dark:border-white/5 p-7">
                      <h3 className="text-base font-bold text-secondary dark:text-white mb-5">
                        {t('blog.sidebar.search_title', 'Recherche')}
                      </h3>
                      <div className="relative">
                        <input
                          type="text"
                          placeholder={t('blog.sidebar.search_placeholder', 'Rechercher…')}
                          className="w-full bg-background-1 dark:bg-background-6 border border-stroke-1 dark:border-stroke-7 rounded-2xl py-3 pl-5 pr-12 text-sm focus:outline-none focus:border-primary-500 transition-colors dark:text-white placeholder:text-secondary/40 dark:placeholder:text-accent/40"
                        />
                        <Search className="absolute right-4 top-1/2 -translate-y-1/2 size-4 text-secondary/40" />
                      </div>
                    </div>
                  </FadeIn>

                  {/* Categories */}
                  <FadeIn delay={0.3}>
                    <div className="bg-white/40 dark:bg-white/[0.02] backdrop-blur-xl rounded-[32px] border border-white/20 dark:border-white/5 p-7">
                      <h3 className="text-base font-bold text-secondary dark:text-white mb-5">
                        {t('blog.sidebar.categories', 'Catégories')}
                      </h3>
                      {loading ? (
                        <div className="space-y-3">
                          {[1, 2, 3, 4].map(i => (
                            <div key={i} className="h-4 bg-stroke-2 dark:bg-stroke-6 rounded-full animate-pulse w-full" />
                          ))}
                        </div>
                      ) : (
                        <ul className="space-y-1">
                          {categories.map((cat, idx) => (
                            <li key={cat.id || idx}>
                              <a
                                href="#"
                                className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-primary-500/5 text-secondary/70 dark:text-accent/70 hover:text-primary-500 transition-all duration-200 text-sm font-medium group"
                              >
                                <span>{cat.name}</span>
                                <ArrowRight className="size-3.5 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200" />
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </FadeIn>

                  {/* Recent posts */}
                  <FadeIn delay={0.4}>
                    <div className="bg-white/40 dark:bg-white/[0.02] backdrop-blur-xl rounded-[32px] border border-white/20 dark:border-white/5 p-7">
                      <h3 className="text-base font-bold text-secondary dark:text-white mb-6">
                        {t('blog.sidebar.recent_posts', 'Articles récents')}
                      </h3>
                      <div className="space-y-5">
                        {loading ? (
                          [1, 2, 3].map(i => (
                            <div key={i} className="flex gap-4 animate-pulse">
                              <div className="size-14 rounded-2xl bg-stroke-2 dark:bg-stroke-6 shrink-0" />
                              <div className="flex-1 space-y-2 pt-1">
                                <div className="h-3.5 bg-stroke-2 dark:bg-stroke-6 rounded-full w-full" />
                                <div className="h-3 bg-stroke-2 dark:bg-stroke-6 rounded-full w-1/2" />
                              </div>
                            </div>
                          ))
                        ) : (
                          blogs.slice(0, 4).map((post, idx) => (
                            <Link
                              key={post.id || idx}
                              href={`/solutions/blog/${post.slug}`}
                              className="flex gap-4 group"
                            >
                              <figure className="size-14 rounded-2xl overflow-hidden shrink-0 border border-stroke-1 dark:border-stroke-7">
                                <img
                                  src={post.featured_image
                                    ? `${process.env.NEXT_PUBLIC_API_URL}${post.featured_image}`
                                    : fallbackImg}
                                  alt={post.title}
                                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                              </figure>
                              <div className="flex-1 min-w-0 space-y-1">
                                <p className="text-sm font-semibold text-secondary dark:text-white group-hover:text-primary-500 transition-colors line-clamp-2 leading-snug">
                                  {post.title}
                                </p>
                                <p className="text-xs text-secondary/40 dark:text-accent/40 font-medium">
                                  {formatDate(post.published_at)}
                                </p>
                              </div>
                            </Link>
                          ))
                        )}
                      </div>
                    </div>
                  </FadeIn>

                  {/* Tags */}
                  {allTags.length > 0 && (
                    <FadeIn delay={0.5}>
                      <div className="bg-white/40 dark:bg-white/[0.02] backdrop-blur-xl rounded-[32px] border border-white/20 dark:border-white/5 p-7">
                        <h3 className="text-base font-bold text-secondary dark:text-white mb-5">
                          {t('blog.sidebar.tags', 'Tags')}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {allTags.map((tag, idx) => (
                            <a
                              key={idx}
                              href="#"
                              className="px-3 py-1.5 rounded-full bg-background-3 dark:bg-background-7 text-secondary/60 dark:text-accent/60 text-xs font-semibold hover:bg-primary-500 hover:text-white transition-all duration-200 border border-stroke-1 dark:border-stroke-7"
                            >
                              {tag}
                            </a>
                          ))}
                        </div>
                      </div>
                    </FadeIn>
                  )}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ─── CTA ──────────────────────────────────────────────────── */}
        <section className="cb-cta-section">
          <div className="cb-container">
            <div className="cb-max-w-4xl cb-text-center space-y-8">
              <FadeIn delay={0.2}>
                <h2 className="text-heading-3">
                  {t('blog.cta.title')}
                </h2>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p className="cb-lead">
                  {t('blog.cta.description')}
                </p>
              </FadeIn>
              <FadeIn delay={0.4}>
                <div className="cb-text-center">
                  <Link href={REGISTER_URL_FREE} className="cb-btn">
                    <span className="inline-block first-letter:uppercase">
                      {t('blog.cta.button')}
                    </span>
                  </Link>
                </div>
              </FadeIn>
              <FadeIn delay={0.5}>
                <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
                  {[
                    t('blog.cta.features.no_credit_card', 'Sans carte bancaire'),
                    t('blog.cta.features.free_trial', 'Essai gratuit 14 jours'),
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-secondary/60 dark:text-accent/60 text-sm font-medium">
                      <span className="size-[18px] bg-secondary dark:bg-accent rounded-full flex items-center justify-center">
                        <Check className="size-3 text-white dark:text-secondary" strokeWidth={3} />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </FadeIn>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
