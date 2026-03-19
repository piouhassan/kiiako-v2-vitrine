'use client';

import { useParams } from 'next/navigation';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { FadeIn } from '@/components/animations/FadeIn';
import { Quote, ArrowLeft, Star, TrendingUp, Users, MapPin, Share2, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useTranslation, Trans } from 'react-i18next';

export default function SuccessStoryDetailPage() {
  const { slug } = useParams();
  const { t } = useTranslation();

  const story = {
    name: t('ressourcesHistoireDetail.mockup.quoteAuthor'),
    business: t('ressourcesHistoireDetail.mockup.business'),
    location: t('ressourcesHistoireDetail.mockup.location'),
    impact: "Ventes x4 en 3 mois",
    category: t('ressourcesHistoireDetail.mockup.category'),
    challenge: t('ressourcesHistoireDetail.mockup.challenge'),
    solution: t('ressourcesHistoireDetail.mockup.solution'),
    results: [
      { label: (t('ressourcesHistoireDetail.mockup.results', { returnObjects: true }) as any[])[0].label, value: "+300%", icon: TrendingUp },
      { label: (t('ressourcesHistoireDetail.mockup.results', { returnObjects: true }) as any[])[1].label, value: "850+", icon: Users },
      { label: (t('ressourcesHistoireDetail.mockup.results', { returnObjects: true }) as any[])[2].label, value: "Régional", icon: MapPin }
    ]
  };

  return (
    <div className="bg-background-1 dark:bg-background-6 min-h-screen selection:bg-primary-500/30">
      <Header />
      <main className="xl:pt-[180px] md:pt-42 sm:pt-36 pt-32 pb-48">
        <div className="main-container max-w-6xl">
          <FadeIn>
            <Link href="/ressources/histoires" className="group inline-flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-secondary/40 hover:text-primary-500 mb-20 transition-all">
              <div className="size-8 rounded-full border border-stroke-1 flex items-center justify-center group-hover:bg-primary-500 group-hover:border-primary-500 transition-all">
                <ArrowLeft className="w-3 h-3 group-hover:text-white" />
              </div>
              {t('ressourcesHistoireDetail.back')}
            </Link>
          </FadeIn>

          <article className="space-y-24">
            {/* Soft Editorial Header */}
            <header className="space-y-10 text-center max-w-4xl mx-auto">
              <FadeIn delay={0.1}>
                 <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary-500/60 flex justify-center items-center gap-4">
                    <span className="w-6 h-px bg-primary-500/20"></span>
                    {story.category}
                    <span className="w-6 h-px bg-primary-500/20"></span>
                 </span>
              </FadeIn>
              <FadeIn delay={0.2}>
                <h1 className="text-4xl md:text-6xl font-bold leading-[1.1] tracking-tight">
                   <Trans i18nKey="ressourcesHistoireDetail.mockup.title" components={{ 1: <span className="text-secondary/20 dark:text-accent/20 italic font-medium" /> }} />
                </h1>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="flex flex-wrap items-center justify-center gap-6 text-[10px] font-bold text-secondary/40 uppercase tracking-[0.2em]">
                   <span>{story.business}</span>
                   <span className="size-1 rounded-full bg-primary-500/40"></span>
                   <span>{story.location}</span>
                </div>
              </FadeIn>
            </header>

            {/* Featured Image - Atmospheric & Integrated */}
            <FadeIn delay={0.4}>
              <div className="aspect-[21/9] rounded-[48px] bg-background-2 dark:bg-background-7/40 border border-stroke-1 dark:border-white/5 overflow-hidden relative group">
                 <div className="absolute inset-0 bg-secondary/5 group-hover:bg-transparent transition-colors duration-500"></div>
                 <div className="absolute inset-0 flex items-center justify-center opacity-40 group-hover:opacity-100 transition-opacity duration-700">
                    <Quote className="size-32 text-white/10 fill-current" />
                 </div>
              </div>
            </FadeIn>

            {/* Narrative Content - Editorial Flow */}
            <div className="grid lg:grid-cols-12 gap-20">
              {/* Sidebar: Results - atmospheric, borderless block */}
              <aside className="lg:col-span-4 order-2 lg:order-1 space-y-12">
                 <div className="sticky top-40 space-y-12">
                    <FadeIn delay={0.5}>
                       <div className="p-10 rounded-[40px] bg-background-2/50 dark:bg-background-7/20 border border-stroke-1 dark:border-white/5 space-y-10">
                          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary-500/80">{t('ressourcesHistoireDetail.indicators')}</p>
                          <div className="space-y-10">
                             {story.results.map((res, i) => (
                               <div key={i} className="flex items-center gap-6 group">
                                  <div className="size-12 rounded-2xl bg-white dark:bg-background-8 border border-stroke-1 flex items-center justify-center text-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-all duration-500">
                                     <res.icon className="size-5" />
                                  </div>
                                  <div className="space-y-1">
                                     <p className="text-2xl font-bold tracking-tight">{res.value}</p>
                                     <p className="text-[10px] text-secondary/40 font-bold uppercase tracking-widest">{res.label}</p>
                                  </div>
                               </div>
                             ))}
                          </div>
                          
                          <div className="pt-8 border-t border-stroke-1 dark:border-white/5">
                             <Link href="/signup" className="group flex items-center justify-between gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-secondary hover:text-primary-500 transition-all">
                                {t('ressourcesHistoireDetail.cta')}
                                <div className="size-10 rounded-full border border-stroke-1 flex items-center justify-center group-hover:bg-primary-500 group-hover:border-primary-500 transition-all">
                                  <ArrowRight className="w-4 h-4 group-hover:text-white" />
                                </div>
                             </Link>
                          </div>
                       </div>
                    </FadeIn>
                 </div>
              </aside>

              {/* Main Narrative - editorial body */}
              <div className="lg:col-span-8 order-1 lg:order-2 space-y-20">
                 <FadeIn delay={0.4}>
                    <div className="space-y-16">
                       <section className="space-y-6">
                          <h2 className="text-2xl font-bold tracking-tight italic text-secondary/40">{t('ressourcesHistoireDetail.mockup.storyTitles.challenge')}</h2>
                          <div className="h-px w-20 bg-primary-500/20 mb-8"></div>
                          <p className="text-xl leading-relaxed text-secondary/60 dark:text-accent/60 font-light italic">
                             {story.challenge}
                          </p>
                       </section>

                       {/* Editorial Quote - Integrated atmospheric block */}
                       <blockquote className="py-12 space-y-8 relative group">
                          <Quote className="absolute -top-6 -right-12 size-16 text-primary-500/5 fill-current transition-transform duration-1000" />
                          <p className="text-3xl md:text-4xl font-light leading-[1.25] italic text-secondary dark:text-white">
                             <Trans i18nKey="ressourcesHistoireDetail.mockup.quote" components={{ 1: <span className="text-primary-500 font-medium" /> }} />
                          </p>
                          <footer className="flex items-center gap-6">
                             <div className="size-12 rounded-full bg-primary-500/10 border border-primary-500/20 flex items-center justify-center text-primary-500 font-bold italic">{story.name.charAt(0)}</div>
                             <div className="space-y-1">
                                <p className="text-sm font-bold text-secondary dark:text-white">{t('ressourcesHistoireDetail.mockup.quoteAuthor')}</p>
                                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary/40">{t('ressourcesHistoireDetail.mockup.quoteRole')}</p>
                             </div>
                          </footer>
                       </blockquote>

                       <section className="space-y-6">
                          <h2 className="text-2xl font-bold tracking-tight italic text-secondary/40">{t('ressourcesHistoireDetail.mockup.storyTitles.solution')}</h2>
                          <div className="h-px w-20 bg-primary-500/20 mb-8"></div>
                          <p className="text-xl leading-relaxed text-secondary/60 dark:text-accent/60 font-light italic">
                             {story.solution}
                          </p>
                       </section>

                       {/* Refined Feature Badges */}
                       <div className="pt-12 flex flex-wrap gap-4">
                          {(t('ressourcesHistoireDetail.mockup.features', { returnObjects: true }) as string[]).map((item, idx) => (
                             <div key={idx} className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-background-2/50 dark:bg-background-7 border border-stroke-1 dark:border-white/5 text-[10px] font-bold uppercase tracking-widest italic text-secondary/50 dark:text-accent/50 group hover:border-primary-500/40 transition-colors">
                                <CheckCircle2 className="size-4 text-primary-500" />
                                {item}
                             </div>
                          ))}
                       </div>
                    </div>
                 </FadeIn>
              </div>
            </div>
          </article>
          
          {/* Integrated Next Story Nav - fluid conclusion */}
          <section className="pt-28 border-t border-stroke-1/50 dark:border-white/5 mt-32 text-center">
             <FadeIn>
                <div className="max-w-2xl mx-auto space-y-10">
                   <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-secondary/40 italic">{t('ressourcesHistoireDetail.journey')}</p>
                   <h2 className="text-heading-2 tracking-tight">
                      <Trans i18nKey="ressourcesHistoireDetail.mockup.nextStory" components={{ 1: <span className="text-primary-500 italic" /> }} />
                   </h2>
                   <div className="flex justify-center pt-8">
                      <Link href="/ressources/histoires/slug" className="group flex items-center gap-6 text-sm uppercase tracking-[0.2em] text-secondary hover:text-primary-500 transition-all">
                         {t('ressourcesHistoireDetail.discover')}
                         <div className="size-16 rounded-full border border-stroke-1 flex items-center justify-center group-hover:bg-primary-500 group-hover:border-primary-500 transition-all">
                           <ArrowRight className="w-6 h-6 group-hover:text-white" />
                         </div>
                      </Link>
                   </div>
                </div>
             </FadeIn>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
