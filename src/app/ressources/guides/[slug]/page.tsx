'use client';

import { useParams } from 'next/navigation';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { FadeIn } from '@/components/animations/FadeIn';
import { BookOpen, Calendar, User, Share2, ArrowLeft, CheckCircle2, Lightbulb, ChevronRight, Clock } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export default function GuideDetailPage() {
  const { slug } = useParams();
  const { t } = useTranslation();

  const article = {
    title: t('ressourcesGuideDetail.mockup.title'),
    date: t('ressourcesGuideDetail.mockup.date'),
    author: t('ressourcesGuideDetail.mockup.author'),
    category: t('ressourcesGuideDetail.mockup.category'),
    readTime: t('ressourcesGuideDetail.mockup.readTime'),
    content: [
      {
        type: "paragraph",
        text: t('ressourcesGuideDetail.mockup.content.0')
      },
      {
        type: "heading",
        text: t('ressourcesGuideDetail.mockup.content.1')
      },
      {
        type: "paragraph",
        text: t('ressourcesGuideDetail.mockup.content.2')
      },
      {
        type: "pro-tip",
        text: t('ressourcesGuideDetail.mockup.content.3')
      }
    ]
  };

  return (
    <div className="bg-background-1 dark:bg-background-6 min-h-screen">
      <Header />
      <main className="xl:pt-[120px] md:pt-32 pt-28 pb-32">
        <div className="main-container max-w-5xl">
          <FadeIn>
            <Link href="/ressources/guides" className="inline-flex items-center gap-2 text-sm font-medium text-secondary/40 hover:text-primary-500 mb-12 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              {t('ressourcesGuideDetail.back')}
            </Link>
          </FadeIn>

          <article className="space-y-16">
            {/* Header */}
            <header className="space-y-8 text-center max-w-3xl mx-auto">
              <FadeIn delay={0.1}>
                 <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-500/10 text-primary-500 text-[10px] font-bold uppercase tracking-widest">
                    <BookOpen className="w-3 h-3" />
                    {t('ressourcesGuideDetail.badge')}
                 </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <h1 className="text-heading-3 md:text-heading-2 font-bold italic leading-tight">
                   "{article.title}"
                </h1>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-bold text-secondary/40 uppercase tracking-widest">
                   <span className="flex items-center gap-2"><User className="size-4" /> {article.author}</span>
                   <span className="flex items-center gap-2"><Calendar className="size-4" /> {article.date}</span>
                   <span className="flex items-center gap-2"><Clock className="size-4" /> {article.readTime}</span>
                </div>
              </FadeIn>
            </header>

            {/* Featured Image placeholder */}
            <FadeIn delay={0.4}>
              <div className="aspect-[21/9] rounded-[48px] bg-background-3 dark:bg-background-8 border border-stroke-1 dark:border-white/5 overflow-hidden shadow-2xl relative">
                 <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </FadeIn>

            {/* Content Layout */}
            <div className="grid lg:grid-cols-12 gap-16">
              {/* Sidebar: Table of Contents */}
              <aside className="lg:col-span-3 hidden lg:block">
                 <div className="sticky top-40 space-y-8">
                    <div className="space-y-4">
                       <p className="text-[10px] font-bold text-primary-500 uppercase tracking-widest">{t('ressourcesGuideDetail.sidebar.summary')}</p>
                       <nav className="space-y-2">
                          {(t('ressourcesGuideDetail.sidebar.summaryLinks', { returnObjects: true }) as string[]).map((item, idx) => (
                            <Link key={idx} href="#" className="block py-2 text-sm font-medium text-secondary/40 hover:text-primary-500 transition-colors flex items-center gap-2 group">
                               <ChevronRight className="size-3 opacity-0 group-hover:opacity-100 transition-all text-primary-500" />
                               {item}
                            </Link>
                          ))}
                       </nav>
                    </div>
                    <div className="p-8 rounded-[32px] bg-white dark:bg-background-7 border border-stroke-1 dark:border-white/5 space-y-4 shadow-xl">
                       <p className="text-xs font-bold">{t('ressourcesGuideDetail.sidebar.needHelp')}</p>
                       <p className="text-[10px] text-secondary/40 leading-relaxed italic">{t('ressourcesGuideDetail.sidebar.desc')}</p>
                       <button className="btn btn-primary h-12 w-full rounded-2xl text-[10px] font-bold">{t('ressourcesGuideDetail.sidebar.button')}</button>
                    </div>
                 </div>
              </aside>

              {/* Main Text Content */}
              <div className="lg:col-span-9 space-y-12">
                 <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
                    <p className="text-secondary/70 dark:text-accent/70 text-lg leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:text-primary-500 first-letter:mr-3 first-letter:float-left italic">
                       {article.content[0].text}
                    </p>
                    <h3 className="text-heading-5 font-bold italic underline decoration-primary-500/20 underline-offset-8">
                       {article.content[1].text}
                    </h3>
                    <p className="text-secondary/70 dark:text-accent/70 text-lg leading-relaxed italic">
                       {article.content[2].text}
                    </p>
                    
                    <div className="p-10 rounded-[40px] bg-primary-500/5 border border-primary-500/20 flex items-start gap-6 shadow-2xl shadow-primary-500/5 relative overflow-hidden group">
                       <Lightbulb className="size-8 text-primary-500 shrink-0 mt-1" />
                       <div className="space-y-2">
                          <p className="text-primary-500 text-xs font-bold uppercase tracking-widest">{t('ressourcesGuideDetail.expertTip')}</p>
                          <p className="text-secondary/80 dark:text-accent/80 text-sm leading-relaxed italic">
                             {article.content[3].text}
                          </p>
                       </div>
                    </div>
                 </div>

                 {/* Shared Actions */}
                 <div className="pt-12 border-t border-stroke-1 dark:border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                       <button className="btn btn-secondary h-12 px-6 rounded-2xl text-xs flex items-center gap-2 bg-background-3 dark:bg-background-8 border-none text-secondary">
                          <Share2 className="size-4" /> {t('ressourcesGuideDetail.share')}
                       </button>
                    </div>
                    <div className="flex items-center gap-2">
                       <span className="text-xs text-secondary/40 italic">{t('ressourcesGuideDetail.feedback')}</span>
                       <div className="flex gap-2">
                          <button className="size-10 rounded-xl bg-background-3 dark:bg-background-8 flex items-center justify-center hover:bg-primary-500/10 transition-all">👍</button>
                          <button className="size-10 rounded-xl bg-background-3 dark:bg-background-8 flex items-center justify-center hover:bg-primary-500/10 transition-all">👎</button>
                       </div>
                    </div>
                 </div>
              </div>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}
