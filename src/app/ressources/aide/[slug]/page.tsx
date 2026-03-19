'use client';

import { useParams } from 'next/navigation';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { FadeIn } from '@/components/animations/FadeIn';
import { Search, ChevronRight, Home, Printer, Share2, ArrowLeft, Lightbulb, MessageSquare } from 'lucide-react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

export default function HelpDetailPage() {
  const { slug } = useParams();
  const { t } = useTranslation();

  const article = {
    title: t('ressourcesAideDetail.mockup.title'),
    category: t('ressourcesAideDetail.mockup.category'),
    lastUpdated: t('ressourcesAideDetail.mockup.lastUpdated'),
    content: [
      {
        type: "paragraph",
        text: t('ressourcesAideDetail.mockup.content')
      },
      {
        type: "steps",
        items: t('ressourcesAideDetail.mockup.steps', { returnObjects: true }) as string[]
      }
    ]
  };

  return (
    <div className="bg-background-1 dark:bg-background-6 min-h-screen">
      <Header />
      <main className="xl:pt-[120px] md:pt-32 pt-28 pb-32">
        <div className="main-container">
          {/* Breadcrumbs */}
          <FadeIn>
            <nav className="flex items-center gap-2 text-xs font-bold text-secondary/40 uppercase tracking-widest mb-12">
               <Link href="/ressources/aide" className="hover:text-primary-500 transition-colors">{t('ressourcesAideDetail.breadcrumb')}</Link>
               <ChevronRight className="size-3" />
               <span className="text-secondary/20">{article.category}</span>
               <ChevronRight className="size-3" />
               <span className="text-primary-500 underline decoration-primary-500/20">{article.title}</span>
            </nav>
          </FadeIn>

          <div className="grid lg:grid-cols-12 gap-16">
            {/* Left: Article Content */}
            <div className="lg:col-span-8 space-y-12">
               <header className="space-y-6">
                  <FadeIn delay={0.1}>
                    <h1 className="text-heading-3 md:text-heading-2 font-bold italic leading-tight">
                       "{article.title}"
                    </h1>
                  </FadeIn>
                  <FadeIn delay={0.2}>
                    <div className="flex items-center gap-6 text-[10px] font-bold text-secondary/40 uppercase tracking-widest">
                       <span>{article.lastUpdated}</span>
                       <div className="flex items-center gap-4">
                          <button className="hover:text-primary-500 transition-all flex items-center gap-1"><Printer className="size-3" /> {t('ressourcesAideDetail.print')}</button>
                          <button className="hover:text-primary-500 transition-all flex items-center gap-1"><Share2 className="size-3" /> {t('ressourcesAideDetail.share')}</button>
                       </div>
                    </div>
                  </FadeIn>
               </header>

               <div className="prose prose-lg dark:prose-invert max-w-none space-y-10">
                  <FadeIn delay={0.3}>
                    <p className="text-secondary/70 dark:text-accent/70 text-lg leading-relaxed italic">
                      {article.content[0].text}
                    </p>
                  </FadeIn>

                  <FadeIn delay={0.4}>
                    <div className="space-y-6">
                       <h3 className="text-heading-6 font-bold italic">{t('ressourcesAideDetail.stepsTitle')}</h3>
                       <div className="space-y-4">
                          {article.content[1].items?.map((step, idx) => (
                            <div key={idx} className="flex items-start gap-4 p-6 rounded-2xl bg-white dark:bg-background-7 border border-stroke-1 dark:border-white/5 shadow-xl">
                               <span className="size-6 rounded-full bg-primary-500 text-white text-[10px] font-bold flex items-center justify-center shrink-0">{idx + 1}</span>
                               <p className="text-sm text-secondary/80 dark:text-accent/80 italic">{step}</p>
                            </div>
                          ))}
                       </div>
                    </div>
                  </FadeIn>

                  <FadeIn delay={0.5}>
                    <div className="p-8 rounded-[40px] bg-background-3 dark:bg-background-8 border border-stroke-1 dark:border-white/5 space-y-4 shadow-sm italic">
                       <div className="flex items-center gap-3">
                          <Lightbulb className="size-5 text-primary-500" />
                          <span className="text-xs font-bold uppercase tracking-widest">{t('ressourcesAideDetail.importantNote')}</span>
                       </div>
                       <p className="text-[10px] text-secondary/60 leading-relaxed italic">{t('ressourcesAideDetail.mockup.note')}</p>
                    </div>
                  </FadeIn>
               </div>

               {/* Feedback */}
               <FadeIn delay={0.6}>
                  <div className="pt-16 border-t border-stroke-1 dark:border-white/5 space-y-6 text-center">
                     <p className="text-sm font-bold italic">{t('ressourcesAideDetail.feedback.title')}</p>
                     <div className="flex justify-center gap-4">
                        <button className="btn btn-secondary h-12 px-10 rounded-2xl text-[10px] font-bold bg-background-3 dark:bg-background-8 border-none transform hover:scale-105 transition-all">{t('ressourcesAideDetail.feedback.yes')}</button>
                        <button className="btn btn-secondary h-12 px-10 rounded-2xl text-[10px] font-bold bg-background-3 dark:bg-background-8 border-none transform hover:scale-105 transition-all">{t('ressourcesAideDetail.feedback.no')}</button>
                     </div>
                  </div>
               </FadeIn>
            </div>

            {/* Right: Sidebar */}
            <div className="lg:col-span-4 space-y-8">
               <FadeIn delay={0.7}>
                  <div className="p-10 rounded-[48px] bg-secondary dark:bg-background-9 text-white space-y-8 shadow-2xl relative overflow-hidden group">
                     <div className="absolute -bottom-8 -right-8 size-40 bg-primary-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
                     <MessageSquare className="size-12 text-primary-500" />
                     <div className="space-y-4 relative z-10">
                        <h3 className="text-heading-6 font-bold">{t('ressourcesAideDetail.sidebar.stuck')}</h3>
                        <p className="text-white/40 text-xs leading-relaxed italic">{t('ressourcesAideDetail.sidebar.desc')}</p>
                     </div>
                     <button className="w-full btn btn-primary h-14 rounded-2xl text-[10px] font-bold relative z-10">{t('ressourcesAideDetail.sidebar.button')}</button>
                  </div>
               </FadeIn>

               <FadeIn delay={0.8}>
                  <div className="p-10 rounded-[48px] bg-white dark:bg-background-7 border border-stroke-1 dark:border-white/5 space-y-6 shadow-xl">
                     <h3 className="text-xs font-bold uppercase tracking-widest text-primary-500">{t('ressourcesAideDetail.sidebar.related')}</h3>
                     <div className="space-y-4">
                        {(t('ressourcesAideDetail.sidebar.relatedLinks', { returnObjects: true }) as string[]).map((t, i) => (
                           <Link key={i} href="#" className="block p-4 rounded-xl hover:bg-background-2 dark:hover:bg-background-8 transition-colors text-xs font-semibold italic flex items-center justify-between group">
                              {t}
                              <ChevronRight className="size-3 group-hover:translate-x-1 transition-transform text-primary-500/40" />
                           </Link>
                        ))}
                     </div>
                  </div>
               </FadeIn>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
