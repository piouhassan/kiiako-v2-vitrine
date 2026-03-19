'use client';

import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { FadeIn } from '@/components/animations/FadeIn';
import { Play, PlayCircle, Clock, Tag, ArrowRight, Youtube } from 'lucide-react';
import Link from 'next/link';
import { useTranslation, Trans } from 'react-i18next';

export default function VideosPage() {
  const { t } = useTranslation();

  const videosText = t('ressourcesVideos.videos', { returnObjects: true }) as any[];
  const videos = [
    { ...videosText[0], duration: "05:24", thumbnail: "/img/dashboard.png" },
    { ...videosText[1], duration: "03:15", thumbnail: "/img/order.png" },
    { ...videosText[2], duration: "04:10", thumbnail: "/img/order_detail.png" },
    { ...videosText[3], duration: "06:45", thumbnail: "/hero/7.jpg" }
  ];

  return (
    <div className="bg-background-1 dark:bg-background-6 min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="xl:pt-[180px] md:pt-42 sm:pt-36 pt-32 xl:pb-28 pb-20">
          <div className="main-container text-center space-y-8">
            <FadeIn>
              <div className="size-16 rounded-[24px] bg-primary-500/10 flex items-center justify-center mx-auto text-primary-500">
                <Play className="fill-current w-6 h-6" />
              </div>
            </FadeIn>
            <div className="max-w-3xl mx-auto space-y-4">
              <FadeIn delay={0.1}>
                <h1 className="text-heading-2">
                  <Trans i18nKey="ressourcesVideos.hero.title" components={{ 1: <span className="text-primary-500" /> }} />
                </h1>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-secondary/60 dark:text-accent/60">
                  {t('ressourcesVideos.hero.subtitle')}
                </p>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Video Grid */}
        <section className="pb-32">
          <div className="main-container">
            <div className="grid md:grid-cols-4 gap-8 lg:gap-12">
              {videos.map((vid, idx) => (
                <FadeIn key={idx} delay={idx * 0.1}>
                  <Link href={`/ressources/videos/creer-sa-boutique`} className="group cursor-pointer space-y-6 block">
                    <div className="relative aspect-video rounded-[32px] overflow-hidden border border-stroke-1 dark:border-white/5 bg-background-3 dark:bg-background-8">
                      {/* Thumbnail Placeholder with Overlay */}
                      <div className="absolute inset-0 bg-secondary/20 group-hover:bg-secondary/40 transition-colors duration-500 flex items-center justify-center">
                        <div className="size-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary-500 group-hover:border-primary-500 transition-all duration-500">
                          <PlayCircle className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm text-white text-[10px] font-bold">
                        {vid.duration}
                      </div>
                    </div>
                    
                    <div className="space-y-3 px-4">
                      <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest">
                        <span className="text-primary-500">{vid.tag}</span>
                        <span className="text-secondary/30 dark:text-accent/30">•</span>
                        <span className="text-secondary/40 dark:text-accent/40">{vid.category}</span>
                      </div>
                      <h3 className="text-heading-6 font-bold group-hover:text-primary-500 transition-colors duration-300">
                        {vid.title}
                      </h3>
                      <div className="inline-flex items-center gap-2 text-xs font-bold text-secondary/60 dark:text-accent/60 group-hover:text-primary-500 transition-colors">
                        {t('ressourcesVideos.videoCard.watchNow')}
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Youtube CTA */}
        <section className="pb-32 overflow-hidden relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-red-500/10 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="main-container relative z-10">
            <FadeIn>
              <div className="relative group overflow-hidden p-12 md:p-16 rounded-[48px] bg-white/40 dark:bg-white/[0.03] backdrop-blur-xl border border-gray-200 dark:border-white/5 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
                <div className="absolute -top-24 -right-24 size-64 bg-red-600/5 rounded-full blur-3xl group-hover:bg-red-600/10 transition-colors duration-500"></div>
                
                <div className="space-y-6 max-w-xl relative">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 text-red-600 dark:text-red-400 text-xs font-bold uppercase tracking-widest">
                    <span className="size-2 rounded-full bg-red-600 animate-pulse"></span>
                    {t('ressourcesVideos.youtubeCTA.badge')}
                  </div>
                  <h2 className="text-heading-3 md:text-heading-2 font-bold leading-tight">
                    <Trans i18nKey="ressourcesVideos.youtubeCTA.title" components={{ 1: <span className="text-red-600" /> }} />
                  </h2>
                  <p className="text-secondary/60 dark:text-accent/60 text-lg leading-relaxed">
                    {t('ressourcesVideos.youtubeCTA.subtitle')}
                  </p>
                </div>

                <div className="relative">
                  <a 
                    href="https://youtube.com/@kiiako" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group/btn relative inline-flex items-center gap-4 bg-red-600 hover:bg-red-700 text-white px-10 h-20 rounded-[32px] font-bold text-xl shadow-xl shadow-red-600/20 transition-all duration-300 hover:-translate-y-1"
                  >
                    <Youtube className="w-8 h-8" />
                    {t('ressourcesVideos.youtubeCTA.button')}
                    <div className="absolute inset-0 rounded-[32px] bg-white/20 scale-x-0 group-hover/btn:scale-x-100 origin-left transition-transform duration-500"></div>
                  </a>
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
