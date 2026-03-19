'use client';

import { useState } from 'react';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { FadeIn } from '@/components/animations/FadeIn';
import { Lightbulb, Wallet, ArrowRight, BookOpen, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Link from 'next/link';
import { useTranslation, Trans } from 'react-i18next';

export default function GuidesPage() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const images = [
    '/img/dashboard.png',
    '/hero/1.jpg',
    '/hero/2.jpg',
    '/img/order_detail.png',
    '/hero/5.jpg',
    '/hero/6.jpg',
    '/img/order.png',
    '/hero/7.jpg',
    '/hero/8.jpg',
    '/img/domain.png',
    '/hero/3.jpg',
    '/hero/4.jpg',
    '/img/livraison.png',
  ];

  const slides = images.map(src => ({ src }));

  const openLightbox = (index: number) => {
    setPhotoIndex(index);
    setOpen(true);
  };

  return (
    <div className="bg-background-1 dark:bg-background-6 min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="xl:pt-[180px] md:pt-42 sm:pt-36 pt-32 xl:pb-20 pb-16">
          <div className="main-container">
            <div className="max-w-4xl">
              <FadeIn delay={0.1}>
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-px w-12 bg-primary-500"></div>
                  <span className="text-primary-500 text-sm font-medium tracking-wide uppercase">
                    {t('ressourcesGuides.hero.badge')}
                  </span>
                </div>
              </FadeIn>

              <div className="space-y-6">
                <FadeIn delay={0.2}>
                  <h1 className="text-heading-5 md:text-heading-4 lg:text-heading-3">
                    <Trans i18nKey="ressourcesGuides.hero.title" components={{ 1: <span className="text-primary-500" /> }} />
                  </h1>
                </FadeIn>
                <FadeIn delay={0.3}>
                  <p className="text-secondary/60 dark:text-accent/60 text-lg max-w-2xl">
                    {t('ressourcesGuides.hero.subtitle')}
                  </p>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* Essential Guides Selection */}
        <section className="pb-24">
          <div className="main-container">
            <div className="grid lg:grid-cols-12 gap-12">
              {/* Sidebar Info */}
              <div className="lg:col-span-4 space-y-8">
                <FadeIn delay={0.4}>
                  <div className="p-8 rounded-[32px] bg-white dark:bg-background-7 border border-stroke-1 dark:border-white/5 space-y-6">
                    <div className="size-12 rounded-2xl bg-primary-500/10 flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-primary-500" />
                    </div>
                    <div>
                      <h3 className="text-heading-6 font-semibold mb-2">{t('ressourcesGuides.sidebar.why.title')}</h3>
                      <p className="text-secondary/60 dark:text-accent/60 text-sm leading-relaxed">
                        {t('ressourcesGuides.sidebar.why.desc')}
                      </p>
                    </div>
                    <ul className="space-y-3">
                      {(t('ressourcesGuides.sidebar.why.points', { returnObjects: true }) as string[]).map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-secondary/80 dark:text-accent/80">
                          <CheckCircle2 className="w-4 h-4 text-primary-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>

                <FadeIn delay={0.5}>
                  <div className="p-8 rounded-[32px] bg-primary-500 space-y-6 text-white overflow-hidden relative group">
                    <div className="absolute -right-8 -bottom-8 size-32 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                    <h3 className="text-heading-6 font-semibold relative z-10 text-white">{t('ressourcesGuides.sidebar.customSupport.title')}</h3>
                    <p className="text-white/80 text-sm relative z-10">
                      {t('ressourcesGuides.sidebar.customSupport.desc')}
                    </p>
                    <Link href="/ressources/guides/creation-ambition" className="inline-flex items-center gap-2 text-sm font-semibold group relative z-10 hover:text-white transition-colors">
                      {t('ressourcesGuides.sidebar.customSupport.link')}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </FadeIn>
              </div>

              {/* Main Content: Detailed Guide */}
              <div className="lg:col-span-8 space-y-20">
                {/* Section: Créer votre boutique */}
                <div className="space-y-10">
                  <FadeIn>
                    <div className="space-y-4">
                      <h2 className="text-heading-5 md:text-heading-4 text-secondary dark:text-accent">
                        {t('ressourcesGuides.content.step1.title')}
                      </h2>
                      <p className="text-secondary/70 dark:text-accent/70 text-lg leading-relaxed">
                        {t('ressourcesGuides.content.step1.desc')}
                      </p>
                    </div>
                  </FadeIn>

                  <div className="grid md:grid-cols-2 gap-6">
                    <FadeIn delay={0.1}>
                      <div className="p-6 rounded-2xl bg-background-3 dark:bg-background-7/50 border border-stroke-1 dark:border-white/5 h-full">
                        <h3 className="text-heading-6 font-semibold mb-3">{t('ressourcesGuides.content.step1.free.title')}</h3>
                        <p className="text-secondary/60 dark:text-accent/60 text-sm mb-4">
                          {t('ressourcesGuides.content.step1.free.desc')}
                        </p>
                        <ul className="text-xs space-y-2 text-secondary/60 dark:text-accent/60">
                          {(t('ressourcesGuides.content.step1.free.features', { returnObjects: true }) as string[]).map((feat, i) => (
                            <li key={i}>{feat}</li>
                          ))}
                        </ul>
                      </div>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                      <div className="p-6 rounded-2xl bg-background-3 dark:bg-background-7/50 border border-stroke-1 dark:border-white/5 h-full border-primary-500/20">
                        <h3 className="text-heading-6 font-semibold mb-3 flex items-center gap-2">
                          {t('ressourcesGuides.content.step1.pro.title')}
                        </h3>
                        <p className="text-secondary/60 dark:text-accent/60 text-sm mb-4">
                          {t('ressourcesGuides.content.step1.pro.desc')}
                        </p>
                        <ul className="text-xs space-y-2 text-secondary/60 dark:text-accent/60">
                          {(t('ressourcesGuides.content.step1.pro.features', { returnObjects: true }) as string[]).map((feat, i) => (
                            <li key={i}>{feat}</li>
                          ))}
                        </ul>
                      </div>
                    </FadeIn>
                  </div>

                  <FadeIn delay={0.3}>
                    <div className="grid md:grid-cols-2 gap-6">
                      <figure
                        className="rounded-[24px] overflow-hidden border border-stroke-1 dark:border-white/10 cursor-pointer hover:opacity-90 transition-opacity aspect-video relative"
                        onClick={() => openLightbox(0)}
                      >
                         <Image src="/img/dashboard.png" alt="Tableau de bord" fill className="object-cover" />
                      </figure>
                      <figure
                        className="rounded-[24px] overflow-hidden border border-stroke-1 dark:border-white/10 cursor-pointer hover:opacity-90 transition-opacity aspect-video relative"
                        onClick={() => openLightbox(1)}
                      >
                         <Image src="/hero/1.jpg" alt="Création boutique" fill className="object-cover" />
                      </figure>
                    </div>
                  </FadeIn>
                </div>

                {/* Section: Produits & Gestion */}
                <div className="space-y-10">
                  <FadeIn>
                    <div className="space-y-4">
                      <h2 className="text-heading-5 md:text-heading-4 text-secondary dark:text-accent">
                        {t('ressourcesGuides.content.step2.title')}
                      </h2>
                      <p className="text-secondary/70 dark:text-accent/70 text-lg leading-relaxed">
                        {t('ressourcesGuides.content.step2.desc')}
                      </p>
                    </div>
                  </FadeIn>

                  <FadeIn delay={0.1}>
                    <div className="flex items-start gap-4 p-6 rounded-2xl bg-primary-500/5 border border-primary-500/10">
                      <Lightbulb className="w-6 h-6 text-primary-500 shrink-0" />
                      <div>
                        <p className="text-secondary dark:text-accent font-medium mb-1">{t('ressourcesGuides.content.step2.tip.title')}</p>
                        <p className="text-secondary/60 dark:text-accent/60 text-sm">
                          {t('ressourcesGuides.content.step2.tip.desc')}
                        </p>
                      </div>
                    </div>
                  </FadeIn>

                  <FadeIn delay={0.2}>
                    <figure
                      className="rounded-[24px] overflow-hidden border border-stroke-1 dark:border-white/10 cursor-pointer hover:opacity-90 transition-opacity aspect-[16/9] relative"
                      onClick={() => openLightbox(3)}
                    >
                       <Image src="/img/order_detail.png" alt="Gestion produit" fill className="object-cover" />
                    </figure>
                  </FadeIn>
                </div>

                {/* Section: Paiements */}
                <div className="space-y-10">
                  <FadeIn>
                    <div className="space-y-4">
                      <h2 className="text-heading-5 md:text-heading-4 text-secondary dark:text-accent">
                        {t('ressourcesGuides.content.step3.title')}
                      </h2>
                      <p className="text-secondary/70 dark:text-accent/70 text-lg leading-relaxed">
                        {t('ressourcesGuides.content.step3.desc')}
                      </p>
                    </div>
                  </FadeIn>

                  <div className="grid md:grid-cols-3 gap-6">
                    {(t('ressourcesGuides.content.step3.features', { returnObjects: true }) as any[]).map((item, idx) => (
                      <FadeIn key={idx} delay={idx * 0.1}>
                        <div className="p-6 rounded-2xl bg-white dark:bg-background-7 border border-stroke-1 dark:border-stroke-6 text-center">
                          <p className="text-secondary dark:text-accent font-semibold mb-1">{item.title}</p>
                          <p className="text-secondary/60 dark:text-accent/60 text-xs">{item.desc}</p>
                        </div>
                      </FadeIn>
                    ))}
                  </div>

                  <FadeIn delay={0.4}>
                    <figure
                      className="rounded-[24px] overflow-hidden border border-stroke-1 dark:border-white/10 cursor-pointer hover:opacity-90 transition-opacity aspect-[16/9] relative"
                      onClick={() => openLightbox(8)}
                    >
                       <Image src="/hero/8.jpg" alt="Paiements" fill className="object-cover" />
                    </figure>
                  </FadeIn>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        index={photoIndex}
      />
    </div>
  );
}
