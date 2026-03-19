'use client';

import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { FadeIn } from '@/components/animations/FadeIn';
import {
  Truck, MapPin, Star, Shield, Zap, Users, Building2, Wallet,
  MessageSquare, CheckCircle, ArrowRight, Package, Clock
} from 'lucide-react';
import Link from 'next/link';
import { useTranslation, Trans } from 'react-i18next';
import { REGISTER_URL_FREE } from '@/lib/utls';

export default function LivraisonsPage() {
  const { t } = useTranslation();

  const stepsTexts = t('livraisons.steps.items', { returnObjects: true }) as any[];
  const steps = [
    { icon: Package, color: "text-secondary/40", ...stepsTexts[0] },
    { icon: Users, color: "text-blue-500", ...stepsTexts[1] },
    { icon: Truck, color: "text-primary-500", ...stepsTexts[2] },
    { icon: CheckCircle, color: "text-emerald-500", ...stepsTexts[3] },
    { icon: Star, color: "text-yellow-500", ...stepsTexts[4] },
  ];

  const featuresTexts = t('livraisons.features.items', { returnObjects: true }) as any;
  const features = [
    { icon: MessageSquare, ...featuresTexts.whatsapp },
    { icon: Wallet, ...featuresTexts.wallet },
    { icon: Star, ...featuresTexts.avis },
    { icon: Shield, ...featuresTexts.shield },
    { icon: Clock, ...featuresTexts.date },
    { icon: Zap, ...featuresTexts.assign },
  ];

  return (
    <div className="bg-background-1 dark:bg-background-6">
      <Header />
      <main>

        {/* Hero */}
        <section className="pb-20 pt-24 md:pb-28 md:pt-36 lg:pt-44 overflow-hidden">
          <div className="main-container">
            <div className="text-center max-w-3xl mx-auto space-y-8">
              <FadeIn delay={0.1}>
                <span className="badge bg-primary-500 text-white">{t('livraisons.hero.badge')}</span>
              </FadeIn>
              <FadeIn delay={0.2}>
                <h1 className="text-heading-2">
                  <Trans i18nKey="livraisons.hero.title" components={{ 1: <span className="text-primary-500" /> }} />
                </h1>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p className="text-lg text-secondary/70 dark:text-accent/70 max-w-2xl mx-auto">
                  {t('livraisons.hero.subtitle')}
                </p>
              </FadeIn>
              <FadeIn delay={0.4}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href={REGISTER_URL_FREE} className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 transition-colors text-white  px-7 h-13 rounded-full">
                    {t('livraisons.hero.cta.free')}
                  </a>
                  <Link href="/solutions/livreur-inscription" className="inline-flex items-center justify-center px-8 h-14 text-secondary dark:text-white hover:bg-gray-100 dark:hover:bg-white/5 rounded-full transition-colors border border-transparent hover:border-gray-200 dark:hover:border-white/10">
                    {t('livraisons.hero.cta.delivery')} <ArrowRight className="size-4" />
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Mission statuses — visual flow */}
        <section className="py-20 bg-background-3 dark:bg-background-7">
          <div className="main-container">
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <FadeIn>
                <h2 className="text-heading-3 mb-4">{t('livraisons.steps.title')}</h2>
                <p className="text-secondary/60 dark:text-accent/60">{t('livraisons.steps.subtitle')}</p>
              </FadeIn>
            </div>
            <div className="grid md:grid-cols-5 gap-4">
              {steps.map((step, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="p-6 rounded-[32px] bg-white dark:bg-background-6 border border-stroke-1 dark:border-white/5 text-center space-y-4 h-full">
                    <step.icon className={`size-8 mx-auto ${step.color}`} />
                    <p className=" text-sm text-black">{step.label}</p>
                    <p className="text-xs text-secondary/50 dark:text-accent/50">{step.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Deux types de livreurs */}
        <section className="py-24">
          <div className="main-container">
            <div className="text-center mb-16">
              <FadeIn>
                <h2 className="text-heading-3 mb-4">{t('livraisons.types.title')}</h2>
                <p className="text-secondary/60 dark:text-accent/60 max-w-xl mx-auto">{t('livraisons.types.subtitle')}</p>
              </FadeIn>
            </div>
            <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
              <FadeIn delay={0.1}>
                <div className="p-10 rounded-[48px] bg-background-3 dark:bg-background-7 border border-stroke-1 dark:border-white/5 space-y-6">
                  <Users className="size-10 text-primary-500" />
                  <h3 className="text-heading-5">{t('livraisons.types.independant.title')}</h3>
                  <ul className="space-y-3">
                    {(t('livraisons.types.independant.list', { returnObjects: true }) as string[]).map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-secondary/70 dark:text-accent/70">
                        <CheckCircle className="size-4 text-primary-500 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="p-10 rounded-[48px] bg-background-3 dark:bg-background-7 border border-stroke-1 dark:border-white/5 space-y-6">
                  <Building2 className="size-10 text-primary-500" />
                  <h3 className="text-heading-5">{t('livraisons.types.compagnie.title')}</h3>
                  <ul className="space-y-3">
                    {(t('livraisons.types.compagnie.list', { returnObjects: true }) as string[]).map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-secondary/70 dark:text-accent/70">
                        <CheckCircle className="size-4 text-primary-500 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Pricing & Zones */}
        <section className="py-24 bg-background-3 dark:bg-background-7">
          <div className="main-container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <FadeIn delay={0.1}>
                <div className="space-y-8">
                  <h2 className="text-heading-3">{t('livraisons.pricing.title')}</h2>
                  <p className="text-secondary/70 dark:text-accent/70 leading-relaxed">
                    {t('livraisons.pricing.subtitle')}
                  </p>
                  <div className="grid grid-cols-2 gap-6">
                    {(t('livraisons.pricing.items', { returnObjects: true }) as any[]).map((stat, i) => (
                      <div key={i} className="p-6 rounded-[24px] bg-white dark:bg-background-6 border border-stroke-1 dark:border-white/5">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-secondary/40 mb-1">{stat.label}</p>
                        <p className="font-bold text-lg text-primary-500">{stat.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="space-y-8">
                  <h2 className="text-heading-3">{t('livraisons.coverage.title')}</h2>
                  <p className="text-secondary/70 dark:text-accent/70 leading-relaxed">
                    {t('livraisons.coverage.subtitle')}
                  </p>
                  <div className="space-y-4">
                    {(t('livraisons.coverage.cities', { returnObjects: true }) as any[]).map((area, i) => (
                      <div key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-white dark:bg-background-6 border border-stroke-1 dark:border-white/5">
                        <MapPin className="size-5 text-primary-500 shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm text-black">{area.city}</p>
                          <p className="text-xs text-secondary/50 dark:text-accent/50 mt-1">{area.zones}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Features grid */}
        <section className="py-24">
          <div className="main-container">
            <div className="text-center mb-16">
              <FadeIn>
                <h2 className="text-heading-3 mb-4">{t('livraisons.features.title')}</h2>
              </FadeIn>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feat, i) => (
                <FadeIn key={i} delay={i * 0.08}>
                  <div className="p-8 rounded-[32px] bg-background-3 dark:bg-background-7 border border-stroke-1 dark:border-white/5 space-y-4">
                    <feat.icon className="size-7 text-primary-500" />
                    <h3 className="text-lg">{feat.title}</h3>
                    <p className="text-secondary/60 dark:text-accent/60 text-sm leading-relaxed">{feat.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* CTA - Unified Split */}
        <section className="py-24">
          <div className="bg-gray-50 dark:bg-background-7 rounded-[48px] border border-gray-100 dark:border-white/5 p-12 md:p-16 lg:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-500/5 blur-3xl pointer-events-none" />
            
            <div className="grid lg:grid-cols-2 gap-20 items-stretch relative z-10">
              {/* Left: Merchants */}
              <div className="space-y-8 flex flex-col justify-between">
                <div>
                  <span className="cb-badge">{t('livraisons.cta.marchand.badge')}</span>
                  <h2 className="text-heading-3 text-secondary dark:text-white mt-6 leading-[1.1]">
                    {t('livraisons.cta.marchand.title')}
                  </h2>
                  <p className="text-secondary/60 dark:text-accent/60 mt-4 max-w-md leading-relaxed">
                    {t('livraisons.cta.marchand.desc')}
                  </p>
                </div>
                <div className="pt-8">
                  <a
                    href={REGISTER_URL_FREE}
                    className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 transition-all text-white px-8 h-14 rounded-full active:scale-95 shadow-lg shadow-primary-500/10"
                  >
                    {t('livraisons.cta.marchand.button')} <ArrowRight className="size-4" />
                  </a>
                </div>
              </div>

              {/* Right: Couriers (Divider integrated visually) */}
              <div className="lg:border-l border-gray-200 dark:border-white/10 lg:pl-20 space-y-8 flex flex-col justify-between">
                <div>
                  <span className="cb-badge bg-secondary/10 text-secondary dark:text-white/60">{t('livraisons.cta.livreur.badge')}</span>
                  <h2 className="text-heading-3 text-secondary dark:text-white mt-6 leading-[1.1]">
                    {t('livraisons.cta.livreur.title')}
                  </h2>
                  <p className="text-secondary/60 dark:text-accent/60 mt-4 max-w-md leading-relaxed">
                    {t('livraisons.cta.livreur.desc')}
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link 
                    href="/solutions/livreur-inscription" 
                    className="flex-1 p-6 bg-white dark:bg-background-6 rounded-3xl border border-gray-100 dark:border-white/5 hover:border-primary-500/30 transition-all group"
                  >
                    <Users className="size-6 text-primary-500 mb-3" />
                    <p className="font-bold text-sm text-secondary dark:text-white group-hover:text-primary-500 transition-colors">{t('livraisons.cta.livreur.independant')}</p>
                  </Link>
                  <Link 
                    href="/solutions/entreprise-livraison" 
                    className="flex-1 p-6 bg-white dark:bg-background-6 rounded-3xl border border-gray-100 dark:border-white/5 hover:border-primary-500/30 transition-all group"
                  >
                    <Building2 className="size-6 text-primary-500 mb-3" />
                    <p className="font-bold text-sm text-secondary dark:text-white group-hover:text-primary-500 transition-colors">{t('livraisons.cta.livreur.compagnie')}</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
