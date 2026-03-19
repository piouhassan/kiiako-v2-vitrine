'use client';

import { useTranslation, Trans } from 'react-i18next';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { FadeIn } from '@/components/animations/FadeIn';
import { SlideIn } from '@/components/animations/SlideIn';
import { motion } from 'framer-motion';
import { Check, Paintbrush, Eye, Layout, Palette, Image as ImageIcon, Sun, Moon, Shield, Globe, Lock, TrendingUp, Cloud, FileText, Download, Zap, User } from 'lucide-react';
import {REGISTER_URL_FREE} from "@/lib/utls";

export default function PersonnalisationPage() {
  const { t } = useTranslation();

  return (
      <div className="bg-background-1 dark:bg-background-6">
        <Header />
        <main>
          {/* Hero Section */}
          <section className="pb-24 pt-32 lg:pb-32 lg:pt-48 xl:pb-40 xl:pt-56 overflow-hidden relative">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
              <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-500/10 blur-[120px] rounded-full"></div>
              <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-blue-500/10 blur-[100px] rounded-full"></div>
            </div>

            <div className="main-container relative z-10 px-4">
              <div className="text-center max-w-7xl mx-auto space-y-10">
                <div className="space-y-8">
                  <FadeIn delay={0.2}>
                    <span className="cb-badge">
                      {t('personnalisation.hero.badge')}
                    </span>
                  </FadeIn>
                  <FadeIn delay={0.3}>
                    <h1 className="text-heading-2 text-secondary dark:text-white leading-tight">
                      {t('personnalisation.hero.title')}
                    </h1>
                  </FadeIn>
                  <FadeIn delay={0.4}>
                    <p className="text-secondary/60 dark:text-accent/60 leading-relaxed max-w-2xl mx-auto">
                      {t('personnalisation.hero.subtitle')}
                    </p>
                  </FadeIn>
                </div>

                <FadeIn delay={0.6}>
                  <div className="relative group mx-auto">
                    {/* Decorative glows around the mockup */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary-500/20 to-blue-500/20 rounded-[32px] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                    
                    <div className="relative glass-card rounded-[32px] border border-white/20 dark:border-white/5 overflow-hidden shadow-2xl bg-white/40 dark:bg-background-8/40 backdrop-blur-xl">
                      {/* Premium Browser-like header */}
                      <div className="h-10 bg-white/80 dark:bg-background-9/80 border-b border-stroke-1 dark:border-white/5 flex items-center px-6 gap-2">
                        <div className="flex gap-1.5">
                          <div className="size-2.5 rounded-full bg-red-400"></div>
                          <div className="size-2.5 rounded-full bg-amber-400"></div>
                          <div className="size-2.5 rounded-full bg-green-400"></div>
                        </div>
                        <div className="flex-1 flex justify-center">
                          <div className="h-6 px-10 rounded-lg bg-background-3 dark:bg-background-7 border border-stroke-1 dark:border-white/5 flex items-center gap-2">
                            <Lock className="size-3 text-secondary/40" />
                            <span className="text-[10px] text-secondary/40 font-medium">https://store.kiiako.io/builder</span>
                          </div>
                        </div>
                      </div>

                      <div className="p-2 bg-background-2 dark:bg-background-9">
                        <img
                          src="/builder/builder_2.png"
                          alt="Visual Builder"
                          className="rounded-2xl w-full shadow-lg"
                        />
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </section>

          {/* Fonctionnalités principales - Now matches produits-digitaux */}
          <section id="fonctionnalites" className="py-24 bg-background-3 dark:bg-background-7">
            <div className="main-container px-4">
              <div className="text-center max-w-3xl mx-auto mb-20">
                <FadeIn delay={0.1}>
                  <h2 className="text-heading-3 mb-6 text-secondary dark:text-white">
                    <Trans i18nKey="personnalisation.features.title">
                      Créez l'expérience parfaite pour vos <span className="text-primary-500">clients</span>
                    </Trans>
                  </h2>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <p className="text-secondary/60 dark:text-accent/60 leading-relaxed">
                    {t('personnalisation.features.subtitle')}
                  </p>
                </FadeIn>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { key: 'builder', icon: Layout },
                  { key: 'palette', icon: Palette },
                  { key: 'media', icon: ImageIcon },
                  { key: 'preview', icon: Eye },
                  { key: 'sections', icon: Layout },
                  { key: 'darkmode', icon: Sun }
                ].map((feature, idx) => (
                  <FadeIn key={feature.key} delay={0.1 + (idx * 0.05)}>
                    <div className="p-8 bg-white/40 dark:bg-white/[0.02] backdrop-blur-xl rounded-[32px] border border-white/20 dark:border-white/5 transition-all duration-500 hover:shadow-2xl hover:bg-white/60 dark:hover:bg-white/[0.04] group hover:-translate-y-2">
                      <div className="w-14 h-14 rounded-2xl bg-primary-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                        <feature.icon className="w-7 h-7 text-primary-500" />
                      </div>
                      <h3 className="text-xl mb-3 text-secondary dark:text-white font-bold tracking-tight">
                        {t(`personnalisation.features.items.${feature.key}.title`)}
                      </h3>
                      <p className="text-secondary/60 dark:text-accent/60 leading-relaxed font-medium">
                        {t(`personnalisation.features.items.${feature.key}.description`)}
                      </p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </section>

          {/* Section Flexible - deux sens */}
          <section className="py-24 lg:py-32 bg-background-1 dark:bg-background-6 relative overflow-hidden">
            <div className="main-container relative z-10 px-4">
              {/* Premier sens : image à gauche, texte à droite */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-32">
                <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
                  <FadeIn delay={0.2}>
                    <div className="group relative">
                      {/* Decorative background glow */}
                      <div className="absolute -inset-4 bg-primary-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full"></div>
                      
                      <div className="glass-sidebar-container to-right relative">
                        <div className="glass-sidebar-background" />
                        <div className="glass-sidebar-content border border-white/20 dark:border-white/5 shadow-2xl rounded-[40px] overflow-hidden">
                          <img
                              src="/builder/left_panel.png"
                              alt="Design personnalisé"
                              className="glass-sidebar-image object-cover"
                              style={{height : "540px", width: "300px"}}
                          />
                          <div className="glass-sidebar-overlay" />
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                </div>
                <div className="order-1 lg:order-2 space-y-8">
                  <FadeIn delay={0.3}>
                    <span className="cb-badge">
                      {t('personnalisation.sections.ready.badge')}
                    </span>
                  </FadeIn>
                  <FadeIn delay={0.4}>
                    <h2 className="text-heading-3 text-secondary dark:text-white leading-tight">
                      {t('personnalisation.sections.ready.title')}
                    </h2>
                  </FadeIn>
                  <FadeIn delay={0.5}>
                    <p className="text-secondary/60 dark:text-accent/60 leading-relaxed">
                      {t('personnalisation.sections.ready.description')}
                    </p>
                  </FadeIn>
                  <ul className="space-y-5">
                    {(t('personnalisation.sections.ready.list', { returnObjects: true }) as string[]).map((item, idx) => (
                      <FadeIn key={idx} delay={0.6 + (idx * 0.1)}>
                        <li className="flex items-start gap-4">
                          <div className="size-6 rounded-full bg-primary-500/10 flex items-center justify-center mt-1 flex-shrink-0">
                            <Check className="size-3.5 text-primary-500" />
                          </div>
                          <span className="text-secondary dark:text-white">{item}</span>
                        </li>
                      </FadeIn>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Second sens : texte à gauche, image à droite */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                <div className="space-y-8">
                  <FadeIn delay={0.2}>
                    <span className="cb-badge bg-blue-500/10 text-blue-500 border-blue-500/20">
                      {t('personnalisation.sections.intuitive.badge')}
                    </span>
                  </FadeIn>
                  <FadeIn delay={0.3}>
                    <h2 className="text-heading-3 text-secondary dark:text-white leading-tight">
                      {t('personnalisation.sections.intuitive.title')}
                    </h2>
                  </FadeIn>
                  <FadeIn delay={0.4}>
                    <p className="text-secondary/60 dark:text-accent/60 leading-relaxed">
                      {t('personnalisation.sections.intuitive.description')}
                    </p>
                  </FadeIn>
                  <ul className="space-y-5">
                    {(t('personnalisation.sections.intuitive.list', { returnObjects: true }) as string[]).map((item, idx) => (
                      <FadeIn key={idx} delay={0.5 + (idx * 0.1)}>
                        <li className="flex items-start gap-4">
                          <div className="size-6 rounded-full bg-blue-500/10 flex items-center justify-center mt-1 flex-shrink-0">
                            <Check className="size-3.5 text-blue-500" />
                          </div>
                          <span className="text-secondary dark:text-white">{item}</span>
                        </li>
                      </FadeIn>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-center lg:justify-end">
                  <FadeIn delay={0.2}>
                    <div className="group relative">
                       {/* Decorative background glow */}
                       <div className="absolute -inset-4 bg-blue-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full"></div>

                      <div className="glass-sidebar-container to-left relative">
                        <div className="glass-sidebar-background" />
                        <div className="glass-sidebar-content border border-white/20 dark:border-white/5 shadow-2xl rounded-[40px] overflow-hidden">
                          <img
                              src="/builder/right_panel.png"
                              alt="Personnalisation facile"
                              className="glass-sidebar-image object-cover"
                              style={{height : "540px", width: "300px"}}
                          />
                          <div className="glass-sidebar-overlay" />
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                </div>
              </div>
            </div>
          </section>

          {/* Section Avantages - Sober Palette */}
          <section className="py-24 lg:py-32 bg-background-3 dark:bg-background-7 relative">
            <div className="main-container relative z-10 px-4">
              <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
                <FadeIn delay={0.1}>
                  <span className="cb-badge">
                    {t('personnalisation.advantages.badge')}
                  </span>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <h2 className="text-heading-3 text-secondary dark:text-white">
                    {t('personnalisation.advantages.title')}
                  </h2>
                </FadeIn>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                {[
                  { key: 'standout', icon: Shield },
                  { key: 'branding', icon: Globe },
                  { key: 'experience', icon: Eye }
                ].map((adv, idx) => (
                  <FadeIn key={adv.key} delay={0.3 + (idx * 0.1)}>
                    <div className="text-center space-y-6 group">
                      <div className="flex justify-center">
                        <div className="size-20 rounded-[32px] bg-white dark:bg-background-8  flex items-center justify-center  group-hover:bg-primary-500 group-hover:border-primary-500 transition-all duration-500">
                          <adv.icon className="size-10 text-secondary dark:text-white group-hover:text-white transition-colors" />
                        </div>
                      </div>
                      <div className="space-y-3">
                        <h3 className="text-lg lg:text-xl text-secondary dark:text-white font-bold tracking-tight">
                          {t(`personnalisation.advantages.items.${adv.key}.title`)}
                        </h3>
                        <p className="text-secondary/60 dark:text-accent/60 leading-relaxed">
                          {t(`personnalisation.advantages.items.${adv.key}.description`)}
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </section>

          {/* Section Templates */}
          <section className="bg-background-1 dark:bg-background-6 py-24 lg:py-32 relative overflow-hidden">
            <div className="main-container relative z-10 px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                <div className="order-2 lg:order-1 relative">
                  <FadeIn delay={0.3}>
                    <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl border border-white/20 dark:border-white/5 aspect-[4/3] group bg-white dark:bg-background-8">
                      <motion.img
                          src="/builder/theme2.png"
                          alt="Templates professionnels"
                          initial={{ y: 0 }}
                          animate={{ y: ["0%", "-65%", "0%"] }}
                          transition={{
                            duration: 15,
                            repeat: Infinity,
                            ease: "easeInOut",
                            repeatDelay: 2
                          }}
                          className="w-full h-auto object-top pointer-events-none"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                    </div>
                  </FadeIn>
                  {/* Decorative background glow */}
                  <div className="absolute -top-[20%] -left-[20%] w-[80%] h-[80%] bg-primary-500/10 blur-[100px] rounded-full -z-10"></div>
                </div>
                <div className="order-1 lg:order-2 space-y-8">
                  <FadeIn delay={0.1}>
                    <span className="cb-badge">
                      {t('personnalisation.templates.badge')}
                    </span>
                  </FadeIn>
                  <FadeIn delay={0.2}>
                    <h2 className="text-heading-3 text-secondary dark:text-white leading-tight">
                      {t('personnalisation.templates.title')}
                    </h2>
                  </FadeIn>
                  <FadeIn delay={0.3}>
                    <p className=" text-secondary/60 dark:text-accent/60 leading-relaxed">
                      {t('personnalisation.templates.subtitle')}
                    </p>
                  </FadeIn>
                  <ul className="space-y-5">
                    {(t('personnalisation.templates.list', { returnObjects: true }) as string[]).map((item, idx) => (
                      <FadeIn key={idx} delay={0.4 + (idx * 0.1)}>
                        <li className="flex items-start gap-4">
                          <div className="size-6 rounded-full bg-primary-500/10 flex items-center justify-center mt-1 flex-shrink-0">
                            <Check className="size-3.5 text-primary-500" />
                          </div>
                          <span className="text-secondary dark:text-white">{item}</span>
                        </li>
                      </FadeIn>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="cb-cta-section relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-30">
              <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary-500/20 blur-[120px] rounded-full"></div>
            </div>
            
            <div className="cb-container px-4">
              <div className="cb-max-w-4xl cb-text-center space-y-12 relative z-10">
                <div className="space-y-6">
                  <FadeIn delay={0.2}>
                    <h2 className="text-heading-3 text-secondary dark:text-white">
                      {t('personnalisation.cta.title')}
                    </h2>
                  </FadeIn>
                  <FadeIn delay={0.3}>
                    <p className="text-secondary/60 dark:text-accent/60 max-w-2xl mx-auto leading-relaxed">
                      {t('personnalisation.cta.subtitle')}
                    </p>
                  </FadeIn>
                </div>

                <FadeIn delay={0.4}>
                  <div className="flex flex-col items-center gap-8">
                    <a href={REGISTER_URL_FREE} className="cb-btn px-10 py-5 text-lg group">
                      <span className="inline-block first-letter:uppercase relative z-10">
                        {t('personnalisation.cta.button')}
                      </span>
                    </a>
                    
                    <ul className="flex flex-wrap justify-center gap-x-12 gap-y-4">
                      {(t('personnalisation.cta.benefits', { returnObjects: true }) as string[]).map((benefit, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <div className="size-6 rounded-full bg-primary-500/10 flex items-center justify-center">
                            <Check className="size-3.5 text-primary-500" />
                          </div>
                          <span className="text-secondary/80 dark:text-accent/80 font-bold uppercase tracking-widest text-[10px]">
                            {benefit}
                          </span>
                        </li>
                      ))}
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
