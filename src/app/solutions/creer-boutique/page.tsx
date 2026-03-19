'use client';

import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { FadeIn } from '@/components/animations/FadeIn';
import { Check, Store, Globe, Palette, ShoppingBag, Users, Zap, TrendingUp, Package, ArrowRight, Star } from 'lucide-react';
import {REGISTER_URL_FREE} from "@/lib/utls";
import { useTranslation, Trans } from 'react-i18next';

export default function CreerBoutiquePage() {
  const { t } = useTranslation();

  return (
      <div className="bg-background-1 dark:bg-background-6">
        <Header />
        <main>
          {/* Hero Section */}
          <section className="pt-32 pb-20 md:pt-48 md:pb-32 lg:pt-56 lg:pb-40 relative overflow-hidden bg-background-1 dark:bg-background-6">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
              <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-500/10 blur-[120px] rounded-full"></div>
              <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-blue-500/10 blur-[100px] rounded-full"></div>
            </div>

            <div className="min-h-120 w-full relative">
              {/* Floating Images - Version Décorative Éparpillée (Refined) */}
              <div className="hidden lg:block absolute inset-0 pointer-events-none z-0">
                {/* --- IMAGES ÉPARPILLÉES GAUCHE --- */}
                <FadeIn delay={0.6} className="scatter-img pos-1 animate-float">
                  <div className="glass-card p-2 rounded-2xl border border-white/20 dark:border-white/5 shadow-2xl">
                    <img src="/builder/product-timer.png" style={{width : "300px", height : "180px"}}
                         className="rounded-xl object-cover" alt="Deco" />
                  </div>
                </FadeIn>

                <FadeIn delay={0.9} className="scatter-img pos-5 animate-float-delayed-1">
                   <div className="glass-card p-2 rounded-2xl border border-white/20 dark:border-white/5 shadow-2xl">
                    <img src="/builder/product-magazine.png" style={{width : "280px", height : "160px"}}
                         className="rounded-xl object-cover" alt="Deco" />
                   </div>
                </FadeIn>

                <FadeIn delay={1.3} className="scatter-img pos-7 animate-float-delayed-2">
                   <div className="glass-card p-1.5 rounded-2xl border border-white/20 dark:border-white/5 shadow-xl">
                    <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=220&auto=format&fit=crop"
                         className="w-28 h-28 rounded-xl object-cover" alt="Deco" />
                   </div>
                </FadeIn>

                {/* --- IMAGES ÉPARPILLÉES DROITE --- */}
                <FadeIn delay={0.7} className="scatter-img pos-2 animate-float-delayed-3">
                   <div className="glass-card p-1.5 rounded-2xl border border-white/20 dark:border-white/5 shadow-2xl">
                    <img src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=200&auto=format&fit=crop"
                         className="w-24 h-36 rounded-xl object-cover" alt="Deco" />
                   </div>
                </FadeIn>

                <FadeIn delay={1.1} className="scatter-img pos-8 animate-float">
                  <div className="glass-card p-2 rounded-2xl border border-white/20 dark:border-white/5 shadow-2xl">
                    <img src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=190&auto=format&fit=crop"
                         className="w-32 h-32 rounded-xl object-cover" alt="Deco" />
                  </div>
                </FadeIn>

                <FadeIn delay={1.2} className="scatter-img pos-10 animate-float-delayed-1">
                  <div className="glass-card p-2 rounded-2xl border border-white/20 dark:border-white/5 shadow-2xl">
                    <img src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=200&auto=format&fit=crop"
                         className="w-28 h-36 rounded-xl object-cover" alt="Deco" />
                  </div>
                </FadeIn>
              </div>

              <div className="main-container relative z-10 px-4">
                <div className="max-w-7xl mx-auto text-center space-y-12">
                  <div className="space-y-10">
                    <FadeIn delay={0.1}>
                      <span className="cb-badge">
                        {t('creerBoutique.hero.badge')}
                      </span>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                      <h2 className="text-heading-2 tracking-tight text-secondary dark:text-white leading-[1.1] max-w-5xl mx-auto">
                        <Trans i18nKey="creerBoutique.hero.title" components={{ 1: <span className="text-primary-500" /> }} />
                      </h2>
                    </FadeIn>

                    <FadeIn delay={0.3}>
                      <p className="text-secondary/60 dark:text-accent/60 max-w-2xl mx-auto leading-relaxed">
                        {t('creerBoutique.hero.description')}
                      </p>
                    </FadeIn>
                  </div>

                  <FadeIn delay={0.4}>
                    <div className="flex flex-col items-center gap-8">
                      <a
                        href={REGISTER_URL_FREE}
                        className="cb-btn px-10 py-5 group gap-3"
                      >
                        <span className="relative z-10">{t('creerBoutique.hero.button')}</span>
                        <ArrowRight className="size-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                      </a>

                      <div className="flex flex-col md:flex-row items-center gap-6">
                        <div className="flex -space-x-4">
                          {[
                            "photo-1502685104226-ee32379fefbe",
                            "photo-1500648767791-00dcc994a43e",
                            "photo-1544005313-94ddf0286df2",
                            "photo-1527980965255-d3b416303d12",
                            "photo-1535713875002-d1d0cf377fde"
                          ].map((img, i) => (
                            <img 
                              key={i}
                              className="size-10 rounded-full border-2 border-white dark:border-background-6 object-cover"
                              src={`https://images.unsplash.com/${img}?w=100&h=100&fit=crop`}
                              alt="User"
                            />
                          ))}
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex gap-0.5">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="size-4 fill-amber-400 text-amber-400" />
                            ))}
                          </div>
                          <span className="text-sm font-medium text-secondary/70 dark:text-accent/70">
                            {t('creerBoutique.hero.usersLoveIt')}
                          </span>
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                </div>
              </div>
            </div>
          </section>

          {/* Fonctionnalités principales - Matched produits-digitaux */}
          <section id="fonctionnalites" className="py-24 lg:py-32 bg-background-3 dark:bg-background-7 relative">
             <div className="main-container relative z-10 px-4">
              <div className="text-center max-w-3xl mx-auto mb-20">
                <FadeIn delay={0.1}>
                  <h2 className="text-heading-3 mb-6 text-secondary dark:text-white">
                    <Trans i18nKey="creerBoutique.features.title">
                      Tout ce dont vous avez besoin pour <span className="text-primary-500">réussir</span>
                    </Trans>
                  </h2>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <p className="text-secondary/60 dark:text-accent/60 leading-relaxed">
                    {t('creerBoutique.features.subtitle')}
                  </p>
                </FadeIn>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { key: 'start', icon: Zap },
                  { key: 'domain', icon: Globe },
                  { key: 'builder', icon: Palette },
                  { key: 'templates', icon: Store },
                  { key: 'unlimited', icon: ShoppingBag },
                  { key: 'centralized', icon: Users }
                ].map((feature, idx) => (
                  <FadeIn key={feature.key} delay={0.1 + (idx * 0.05)}>
                    <div className="p-8 bg-white/40 dark:bg-white/[0.02] backdrop-blur-xl rounded-[32px] border border-white/20 dark:border-white/5 transition-all duration-500 hover:shadow-2xl hover:bg-white/60 dark:hover:bg-white/[0.04] group hover:-translate-y-2">
                      <div className="w-14 h-14 rounded-2xl bg-primary-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                        <feature.icon className="w-7 h-7 text-primary-500" />
                      </div>
                      <h3 className="text-xl mb-3 text-secondary dark:text-white font-bold tracking-tight">
                        {t(`creerBoutique.features.items.${feature.key}.title`)}
                      </h3>
                      <p className="text-secondary/60 dark:text-accent/60 leading-relaxed font-medium">
                        {t(`creerBoutique.features.items.${feature.key}.description`)}
                      </p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </section>

          {/* Section Thèmes / Templates Stack Redesign */}
          <section className="py-24 lg:py-32 bg-background-1 dark:bg-background-6 relative overflow-hidden">
            <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-secondary/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="main-container px-4">
              <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
                <FadeIn delay={0.1}>
                  <span className="cb-badge">
                    {t('creerBoutique.themes.badge')}
                  </span>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <h2 className="text-heading-3 text-secondary dark:text-white leading-tight">
                    {t('creerBoutique.themes.title')}
                  </h2>
                </FadeIn>
                <FadeIn delay={0.3}>
                  <p className="text-xl text-secondary/60 dark:text-accent/60 leading-relaxed">
                    {t('creerBoutique.themes.subtitle')}
                  </p>
                </FadeIn>
              </div>

              <div className="flex justify-center items-center py-24 relative lg:h-[600px]">
                <div className="theme-stack-container">
                  {[
                    {
                      title: "Tech Store",
                      image: "/builder/theme1.png",
                      type: "E-commerce",
                      className: "theme-card-left"
                    },
                    {
                      title: "Fashion Pulse",
                      image: "/builder/theme2.png",
                      type: "Lifestyle",
                      className: "theme-card-right"
                    },
                    {
                      title: "Modern Minimalist",
                      image: "/builder/theme1.png",
                      type: "Corporate",
                      className: "theme-card-main"
                    }
                  ].map((theme, idx) => (
                    <div key={idx} className={`transition-all duration-700 ${theme.className}`}>
                      <div className="theme-card-glass bg-white/40 dark:bg-white/[0.02] backdrop-blur-2xl border border-white/30 dark:border-white/5 rounded-[40px] shadow-2xl p-3">
                        <div className="theme-card-img-wrapper rounded-[30px] overflow-hidden aspect-[4/3]">
                          <img
                              src={theme.image}
                              alt={theme.title}
                              className="theme-card-img object-cover w-full h-full"
                          />
                        </div>
                        <div className="theme-card-footer pt-6 pb-4 px-4 flex justify-between items-center">
                          <h3 className="theme-card-title text-xl font-bold text-secondary dark:text-white">{theme.title}</h3>
                          <span className="theme-card-type-badge px-4 py-1.5 rounded-full bg-primary-500/10 text-primary-500 text-[10px] font-bold uppercase tracking-widest">
                            {theme.type}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Comment ça marche - Premium list items */}
          <section className="py-24 lg:py-32 bg-background-3 dark:bg-background-7">
            <div className="main-container px-4">
              <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
                <FadeIn delay={0.1}>
                  <span className="cb-badge">
                    {t('creerBoutique.steps.badge')}
                  </span>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <h2 className="text-heading-3 text-secondary dark:text-white leading-tight">
                    {t('creerBoutique.steps.title')}
                  </h2>
                </FadeIn>
                <FadeIn delay={0.3}>
                  <p className=" text-secondary/60 dark:text-accent/60 leading-relaxed">
                    {t('creerBoutique.steps.subtitle')}
                  </p>
                </FadeIn>
              </div>

              <div className="max-w-4xl mx-auto">
                <div className="space-y-8 relative">
                  {/* Connector Line */}
                  <div className="absolute left-[27px] top-8 bottom-8 w-[2px] bg-gradient-to-b from-primary-500/20 via-primary-500/50 to-primary-500/20 hidden md:block"></div>

                  {[
                    {
                      number: "1",
                      icon: Users,
                      title: t('creerBoutique.steps.items.step1.title'),
                      description: t('creerBoutique.steps.items.step1.description')
                    },
                    {
                      number: "2",
                      icon: Globe,
                      title: t('creerBoutique.steps.items.step2.title'),
                      description: t('creerBoutique.steps.items.step2.description')
                    },
                    {
                      number: "3",
                      icon: Palette,
                      title: t('creerBoutique.steps.items.step3.title'),
                      description: t('creerBoutique.steps.items.step3.description')
                    },
                    {
                      number: "4",
                      icon: Package,
                      title: t('creerBoutique.steps.items.step4.title'),
                      description: t('creerBoutique.steps.items.step4.description')
                    },
                    {
                      number: "5",
                      icon: TrendingUp,
                      title: t('creerBoutique.steps.items.step5.title'),
                      description: t('creerBoutique.steps.items.step5.description')
                    }
                  ].map((step, index) => (
                      <FadeIn key={index} delay={0.1 + index * 0.05}>
                        <div className="cb-step-card group bg-white/40 dark:bg-white/[0.02] backdrop-blur-xl border border-white/20 dark:border-white/5 p-8 rounded-[32px] hover:bg-white/60 dark:hover:bg-white/[0.04] transition-all duration-500 hover:shadow-2xl flex flex-col md:flex-row gap-8 relative z-10">
                          <div className="cb-step-icon-box size-14 rounded-2xl bg-primary-500 flex items-center justify-center shrink-0 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                            <step.icon className="size-7 text-white" />
                          </div>
                          <div className="flex-1 space-y-2">
                            <span className="text-xs  text-primary-500 uppercase tracking-[0.2em]">
                              {t('creerBoutique.steps.stepLabel')} {step.number}
                            </span>
                            <h3 className="text-xl font-medium text-secondary dark:text-white leading-tight">{step.title}</h3>
                            <p className="text-secondary/60 dark:text-accent/60 leading-relaxed font-medium">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </FadeIn>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Pourquoi Kiiako - Split Screen Redesign (Refined) */}
          <section className="relative w-full bg-background-1 dark:bg-background-6 overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 p-12 md:px-20 md:py-32 flex flex-col justify-center bg-background-2 dark:bg-background-8">
                <div className="max-w-xl mx-auto space-y-10">
                  <FadeIn delay={0.1}>
                    <span className="cb-badge">
                      {t('creerBoutique.why.badge')}
                    </span>
                  </FadeIn>

                  <div className="space-y-6">
                    <FadeIn delay={0.2}>
                      <h2 className="text-heading-3 text-secondary dark:text-white leading-tight">
                        {t('creerBoutique.why.title')}
                      </h2>
                    </FadeIn>

                    <FadeIn delay={0.3}>
                      <p className="text-secondary/60 dark:text-accent/60 leading-relaxed">
                        {t('creerBoutique.why.description')}
                      </p>
                    </FadeIn>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12">
                    {(t('creerBoutique.why.list', { returnObjects: true }) as string[]).map((item, index) => (
                        <FadeIn key={index} delay={0.4 + index * 0.05}>
                          <div className="flex items-start gap-4">
                            <div className="size-6 rounded-full bg-primary-500/10 flex items-center justify-center shrink-0 mt-1">
                              <Check className="size-3.5 text-primary-500" />
                            </div>
                            <span className="text-secondary dark:text-white  leading-snug">{item}</span>
                          </div>
                        </FadeIn>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Video (50%) - Full Height with Premium Overlays */}
              <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-[800px]">
                 <FadeIn delay={0.3} className="h-full w-full">
                    <video
                        className="absolute inset-0 w-full h-full object-cover"
                        src="/hero/femme_couture.mp4"
                        preload="none"
                        loop
                        autoPlay
                        poster="/hero/2150171831.jpg"
                        muted
                        playsInline
                    />
                 </FadeIn>

                 {/* Premium Overlays */}
                 <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-background-2 dark:from-background-8 to-transparent z-10 hidden md:block"></div>
                 <div className="absolute inset-0 bg-secondary/10 dark:bg-background-9/10 mix-blend-multiply pointer-events-none"></div>
                 
                 {/* Floating Card Decorative */}
                 <div className="absolute bottom-12 left-12 right-12 md:right-auto md:w-80 group z-20">
                    <div className="glass-card p-6 rounded-[32px] border border-white/20 dark:border-white/5 shadow-2xl backdrop-blur-3xl bg-white/40 dark:bg-background-9/40">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="size-12 rounded-2xl bg-primary-500 flex items-center justify-center shadow-lg">
                          <Package className="size-6 text-white" />
                        </div>
                        <div>
                          <p className="text-[10px] font-bold text-primary-500 uppercase tracking-widest">{t('creerBoutique.why.visual.status')}</p>
                          <p className="text-sm font-bold text-secondary dark:text-white leading-tight">{t('creerBoutique.why.visual.processing')}</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-1 w-full bg-secondary/10 dark:bg-white/10 rounded-full">
                          <div className="h-full w-2/3 bg-primary-500 rounded-full"></div>
                        </div>
                        <p className="text-[10px] text-secondary/60 dark:text-accent/60 font-medium">{t('creerBoutique.why.visual.scheduled')}</p>
                      </div>
                    </div>
                 </div>
              </div>
            </div>
          </section>

          {/* CTA Section - Uniformized */}
          <section className="cb-cta-section relative overflow-hidden py-24 lg:py-32">
            <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-30">
              <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary-500/20 blur-[120px] rounded-full"></div>
            </div>
            
            <div className="cb-container px-4">
              <div className="cb-max-w-4xl cb-text-center space-y-12 relative z-10">
                <div className="space-y-6">
                  <FadeIn delay={0.2}>
                    <h2 className="text-heading-3 text-secondary dark:text-white leading-tight">
                      {t('creerBoutique.cta.title')}
                    </h2>
                  </FadeIn>
                  <FadeIn delay={0.3}>
                    <p className="text-xl text-secondary/60 dark:text-accent/60 max-w-2xl mx-auto leading-relaxed">
                      {t('creerBoutique.cta.description')}
                    </p>
                  </FadeIn>
                </div>

                <FadeIn delay={0.4}>
                  <div className="flex flex-col items-center gap-10">
                    <a href={REGISTER_URL_FREE} className="cb-btn px-12 py-6 text-lg group shadow-2xl shadow-primary-500/20">
                      <span className="relative z-10">
                        {t('creerBoutique.cta.button')}
                      </span>
                    </a>
                    
                    <ul className="flex flex-wrap justify-center gap-x-12 gap-y-6">
                      <li className="flex items-center gap-3">
                        <div className="size-6 rounded-full bg-primary-500/10 flex items-center justify-center">
                          <Check className="size-3.5 text-primary-500" />
                        </div>
                        <span className="text-secondary/80 dark:text-accent/80   text-[10px]">
                          {t('creerBoutique.cta.benefits.free')}
                        </span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="size-6 rounded-full bg-primary-500/10 flex items-center justify-center">
                          <Check className="size-3.5 text-primary-500" />
                        </div>
                        <span className="text-secondary/80 dark:text-accent/80 text-[10px]">
                          {t('creerBoutique.cta.benefits.noCard')}
                        </span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="size-6 rounded-full bg-primary-500/10 flex items-center justify-center">
                          <Check className="size-3.5 text-primary-500" />
                        </div>
                        <span className="text-secondary/80 dark:text-accent/80 text-[10px]">
                          {t('creerBoutique.cta.benefits.support')}
                        </span>
                      </li>
                    </ul>
                  </div>
                </FadeIn>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
  );
}