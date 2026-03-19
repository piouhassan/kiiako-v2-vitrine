'use client';

import { useParams } from 'next/navigation';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { FadeIn } from '@/components/animations/FadeIn';
import { Share2, ArrowLeft, MessageSquare, ThumbsUp } from 'lucide-react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

export default function VideoDetailPage() {
  const { slug } = useParams();
  const { t } = useTranslation();

  const video = {
    title: t('ressourcesVideoDetail.mockup.title'),
    duration: t('ressourcesVideoDetail.mockup.duration'),
    category: t('ressourcesVideoDetail.mockup.category'),
    views: t('ressourcesVideoDetail.mockup.views'),
    date: t('ressourcesVideoDetail.mockup.date'),
    description: t('ressourcesVideoDetail.mockup.description'),
    chapters: [
      { time: "00:00", title: "Introduction" },
      { time: "01:15", title: "Choix de l'abonnement" },
      { time: "02:45", title: "Interface du Dashboard" },
      { time: "04:30", title: "Publication en direct" },
    ]
  };

  return (
    <div className="bg-background-1 dark:bg-background-6 min-h-screen">
      <Header />
      <main className="xl:pt-[120px] md:pt-32 pt-28 pb-32">
        <div className="main-container space-y-10">
          <FadeIn>
            <Link href="/ressources/videos" className="inline-flex items-center gap-2 text-sm font-medium text-secondary/40 hover:text-primary-500 mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              {t('ressourcesVideoDetail.back')}
            </Link>
          </FadeIn>

          {/* Video + Info — Side by side */}
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            {/* Video Player */}
            <div className="lg:col-span-8 space-y-6">
              <FadeIn delay={0.1}>
                <div className="relative aspect-video rounded-[32px] overflow-hidden border border-stroke-1 dark:border-white/10 bg-black">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1"
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </FadeIn>

              {/* Title + Actions */}
              <FadeIn delay={0.2}>
                <div className="flex flex-wrap items-start justify-between gap-4 px-1">
                  <h1 className="text-heading-5 md:text-heading-4 font-bold italic">"{video.title}"</h1>
                  <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-5 h-10 rounded-2xl bg-background-3 dark:bg-background-8 text-[10px] font-bold uppercase transition-all hover:bg-primary-500/10">
                      <ThumbsUp className="size-4" /> {video.views}
                    </button>
                    <button className="size-10 rounded-2xl bg-background-3 dark:bg-background-8 flex items-center justify-center hover:bg-primary-500/10 transition-all">
                      <Share2 className="size-4" />
                    </button>
                  </div>
                </div>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="flex items-center gap-6 text-[10px] font-bold text-secondary/40 uppercase tracking-widest italic px-1">
                  <span>{video.date}</span>
                  <span className="text-primary-500">#KiiakoTutorials</span>
                </div>
              </FadeIn>
            </div>

            {/* Description Sidebar */}
            <div className="lg:col-span-4">
              <FadeIn delay={0.4}>
                <div className="p-8 rounded-[32px] bg-white dark:bg-background-7 border border-stroke-1 dark:border-white/5 space-y-6 sticky top-40">
                  <h3 className="text-sm font-bold flex items-center gap-2 italic">
                    <MessageSquare className="size-4 text-primary-500" />
                    {t('ressourcesVideoDetail.about')}
                  </h3>
                  <p className="text-secondary/60 dark:text-accent/60 text-sm leading-relaxed italic">
                    {video.description}
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>

        {/* Related Videos --- NEW --- */}
        <section className="py-24 bg-background-3 dark:bg-background-7/40">
          <div className="main-container space-y-12">
            <div className="flex items-center justify-between">
              <h2 className="text-heading-5 font-bold">{t('ressourcesVideoDetail.similar')}</h2>
              <Link href="/ressources/videos" className="flex items-center gap-2 text-sm font-medium text-primary-500 hover:underline">
                {t('ressourcesVideoDetail.viewAll')} <ArrowLeft className="w-4 h-4 rotate-180" />
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {(t('ressourcesVideoDetail.mockup.similarVideos', { returnObjects: true }) as any[]).map((v, idx) => (
                <FadeIn key={idx} delay={idx * 0.1}>
                  <Link href="/ressources/videos/creer-sa-boutique" className="group space-y-4 block">
                    <div className="relative aspect-video rounded-[24px] overflow-hidden border border-stroke-1 dark:border-white/5 bg-background-3 dark:bg-background-8">
                      <div className="absolute inset-0 bg-secondary/10 group-hover:bg-secondary/20 transition-colors duration-300 flex items-center justify-center">
                        <div className="size-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:bg-primary-500 group-hover:border-primary-500 transition-all duration-300">
                          <Share2 className="w-5 h-5 text-white -rotate-45" />
                        </div>
                      </div>
                      <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-black/50 text-white text-[10px] font-bold">{v.duration}</div>
                    </div>
                    <div className="px-1 space-y-1">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-primary-500">{v.tag}</p>
                      <h3 className="text-sm font-semibold group-hover:text-primary-500 transition-colors">{v.title}</h3>
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Tags & Meta --- NEW --- */}
        <section className="py-16">
          <div className="main-container space-y-6">
            <p className="text-[10px] font-bold uppercase tracking-widest text-secondary/40">{t('ressourcesVideoDetail.tags')}</p>
            <div className="flex flex-wrap gap-3">
              {(t('ressourcesVideoDetail.mockup.tagsList', { returnObjects: true }) as string[]).map((tag, i) => (
                <FadeIn key={i} delay={i * 0.05}>
                  <span className="px-5 py-2 rounded-full border border-stroke-1 dark:border-white/5 text-xs font-bold text-secondary/50 dark:text-accent/50 hover:border-primary-500/40 hover:text-primary-500 transition-all cursor-pointer">
                    {tag}
                  </span>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* YouTube Subscribe CTA --- NEW --- */}
        <section className="pb-32">
          <div className="main-container">
            <FadeIn>
              <div className="p-12 rounded-[48px] bg-background-3 dark:bg-background-7 border border-stroke-1 dark:border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="space-y-4 max-w-lg">
                  <h2 className="text-heading-5 font-bold">{t('ressourcesVideoDetail.youtube.title')}</h2>
                  <p className="text-secondary/60 dark:text-accent/60 leading-relaxed">
                    {t('ressourcesVideoDetail.youtube.desc')}
                  </p>
                </div>
                <Link href="https://youtube.com" target="_blank" className="btn btn-primary px-10 h-14 rounded-2xl whitespace-nowrap flex items-center gap-3">
                  {t('ressourcesVideoDetail.youtube.button')}
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
