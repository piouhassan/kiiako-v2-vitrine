'use client';

import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { FadeIn } from '@/components/animations/FadeIn';
import {
  Truck, MapPin, Star, Shield, Wallet, Smartphone, Clock,
  CheckCircle, ArrowRight, User, FileText, ToggleRight, ChevronRight
} from 'lucide-react';
import Link from 'next/link';
import { useTranslation, Trans } from 'react-i18next';
import { REGISTER_URL_DELIVERY } from '@/lib/utls';

export default function LivreurInscriptionPage() {
  const { t } = useTranslation();

  const stepsTexts = t('livreurInscription.howItWorks.steps', { returnObjects: true }) as any[];
  const steps = [
    { icon: User, ...stepsTexts[0] },
    { icon: FileText, ...stepsTexts[1] },
    { icon: MapPin, ...stepsTexts[2] },
    { icon: ToggleRight, ...stepsTexts[3] },
    { icon: Truck, ...stepsTexts[4] },
    { icon: Wallet, ...stepsTexts[5] },
  ];

  const faqs = t('livreurInscription.faq.items', { returnObjects: true }) as any[];

  const advTexts = t('livreurInscription.advantages.items', { returnObjects: true }) as any[];
  const advantages = [
    { icon: Wallet, ...advTexts[0] },
    { icon: MapPin, ...advTexts[1] },
    { icon: Clock, ...advTexts[2] },
    { icon: Star, ...advTexts[3] },
    { icon: Shield, ...advTexts[4] },
    { icon: Smartphone, ...advTexts[5] },
  ];

  const missionTexts = t('livreurInscription.mission.items', { returnObjects: true }) as any[];
  const missions = [
    { color: "bg-blue-500", ...missionTexts[0] },
    { color: "bg-primary-500", ...missionTexts[1] },
    { color: "bg-emerald-500", ...missionTexts[2] },
    { color: "bg-yellow-500", ...missionTexts[3] },
  ];

  const perksTexts = t('livreurInscription.cta.perks', { returnObjects: true }) as any[];
  const ctaPerks = [
    { icon: Wallet, ...perksTexts[0] },
    { icon: MapPin, ...perksTexts[1] },
    { icon: Clock, ...perksTexts[2] },
    { icon: Shield, ...perksTexts[3] },
  ];

  return (
    <div className="bg-background-1 dark:bg-background-6">
      <Header />
      <main>

        {/* Hero */}
        <section className="pb-20 pt-24 md:pb-28 md:pt-36 lg:pt-44">
          <div className="main-container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <FadeIn delay={0.1} className="space-y-8">
                <span className="cb-badge">{t('livreurInscription.hero.badge')}</span>
                <h2 className="text-heading-2 leading-tight">
                  <Trans i18nKey="livreurInscription.hero.title" components={{ 1: <span className="text-primary-500" /> }} />
                </h2>
                <p className="text-secondary/70 dark:text-accent/70 leading-relaxed">
                  {t('livreurInscription.hero.subtitle')}
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href={REGISTER_URL_DELIVERY} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 transition-colors text-white  px-7 h-13 rounded-full">
                    {t('livreurInscription.hero.cta.primary')}
                  </a>
                  <Link href="/solutions/livraisons" className="inline-flex items-center gap-2 bg-white transition-colors text-primary-500  px-7 h-13 rounded-full">
                    {t('livreurInscription.hero.cta.secondary')} <ArrowRight className="size-4" />
                  </Link>
                </div>
              </FadeIn>

              {/* Stats */}
              <FadeIn delay={0.2}>
                <div className="grid grid-cols-2 gap-4">
                  {Object.values(t('livreurInscription.stats', { returnObjects: true }) as Record<string, any>).map((s, i) => (
                    <div key={i} className="p-6 rounded-[32px] bg-background-3 dark:bg-background-7 border border-stroke-1 dark:border-white/5 space-y-1">
                      <p className="text-[11px] font-bold uppercase tracking-widest text-secondary/40 dark:text-accent/40">{s.label}</p>
                      <p className="text-2xl font-bold text-primary-500">{s.value}</p>
                      <p className="text-xs text-secondary/50 dark:text-accent/50">{s.sub}</p>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-24 bg-background-3 dark:bg-background-7">
          <div className="main-container">
            <div className="text-center mb-16">
              <FadeIn>
                <h2 className="text-heading-3 mb-4">{t('livreurInscription.howItWorks.title')}</h2>
                <p className="text-secondary/60 dark:text-accent/60 max-w-xl mx-auto">{t('livreurInscription.howItWorks.subtitle')}</p>
              </FadeIn>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {steps.map((step, i) => (
                <FadeIn key={i} delay={i * 0.08}>
                  <div className="p-8 rounded-[32px] bg-white dark:bg-background-6 border border-stroke-1 dark:border-white/5 h-full space-y-5 relative overflow-hidden">
                    <span className="absolute top-6 right-6 text-5xl font-black text-primary-500/8 dark:text-primary-500/10 leading-none">{step.num}</span>
                    <step.icon className="size-7 text-primary-500" />
                    <div>
                      <h3 className="text-lg mb-2">{step.title}</h3>
                      <p className="text-secondary/60 dark:text-accent/60 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Avantages */}
        <section className="py-24">
          <div className="main-container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <FadeIn delay={0.1} className="space-y-6">
                <h2 className="text-heading-3">{t('livreurInscription.advantages.title')}</h2>
                <div className="space-y-4">
                  {advantages.map((a, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="size-10 rounded-xl bg-primary-500/10 flex items-center justify-center shrink-0">
                        <a.icon className="size-5 text-primary-500" />
                      </div>
                      <div>
                        <p className="font-semibold mb-0.5">{a.title}</p>
                        <p className="text-sm text-secondary/60 dark:text-accent/60">{a.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </FadeIn>

              {/* Mission flow */}
              <FadeIn delay={0.2}>
                <div className="p-8 rounded-[48px] bg-background-3 dark:bg-background-7 border border-stroke-1 dark:border-white/5 space-y-6">
                  <h3 className="font-bold text-xl">{t('livreurInscription.mission.title')}</h3>
                  <div className="space-y-4">
                    {missions.map((m, i) => (
                      <div key={i} className="flex items-start gap-4">
                        <div className={`size-2.5 mt-2 rounded-full shrink-0 ${m.color}`} />
                        <div>
                          <p className="font-semibold text-sm">{m.step}</p>
                          <p className="text-xs text-secondary/50 dark:text-accent/50 mt-0.5">{m.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section className="py-20 bg-background-3 dark:bg-background-7">
          <div className="main-container max-w-3xl">
            <FadeIn>
              <div className="text-center mb-12">
                <h2 className="text-heading-4 mb-3">{t('livreurInscription.requirements.title')}</h2>
                <p className="text-secondary/60 dark:text-accent/60">{t('livreurInscription.requirements.subtitle')}</p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {(t('livreurInscription.requirements.items', { returnObjects: true }) as string[]).map((r, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-white dark:bg-background-6 border border-stroke-1 dark:border-white/5">
                    <CheckCircle className="size-5 text-primary-500 shrink-0" />
                    <span className="text-sm text-secondary/80 dark:text-accent/80">{r}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24">
          <div className="main-container max-w-3xl">
            <FadeIn>
              <h2 className="text-heading-3 mb-10 text-center">{t('livreurInscription.faq.title')}</h2>
              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <FadeIn key={i} delay={i * 0.07}>
                    <div className="p-6 rounded-[24px] bg-background-3 dark:bg-background-7 border border-stroke-1 dark:border-white/5">
                      <p className="font-semibold mb-2 flex items-start gap-2">
                        <ChevronRight className="size-4 text-primary-500 shrink-0 mt-0.5" />
                        {faq.q}
                      </p>
                      <p className="text-secondary/60 dark:text-accent/60 text-sm pl-6 leading-relaxed">{faq.a}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* CTA - Iteration 2: Modern Split */}
        <section className="py-24">
          <div className="">
            <FadeIn>
              <div className="bg-gray-50 dark:bg-background-7 rounded-[48px] border border-gray-100 dark:border-white/5 p-12 md:p-16 lg:p-20 relative overflow-hidden">
                {/* Subtle background accent */}
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl pointer-events-none" />
                
                <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
                  {/* Left: Content */}
                  <div className="space-y-8 text-left">
                    <span className="cb-badge">
                      {t('livreurInscription.cta.badge')}
                    </span>
                    
                    <h2 className="text-heading-3 text-secondary dark:text-white leading-[1.1] tracking-tight">
                      <Trans i18nKey="livreurInscription.cta.title" components={{ 1: <span className="text-primary-500" /> }} />
                    </h2>
                    
                    <p className="text-secondary/60 dark:text-accent/60 max-w-lg leading-relaxed">
                      {t('livreurInscription.cta.desc')}
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                      <a
                        href={REGISTER_URL_DELIVERY} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 transition-all text-white  px-8 h-14 rounded-full active:scale-95  shadow-primary-500/20"
                      >
                        {t('livreurInscription.cta.button')} <ArrowRight className="size-4" />
                      </a>
                      <Link href="/solutions/livraisons" className="inline-flex items-center justify-center px-8 h-14 text-secondary dark:text-white hover:bg-gray-100 dark:hover:bg-white/5 rounded-full transition-colors border border-transparent hover:border-gray-200 dark:hover:border-white/10">
                        {t('livreurInscription.cta.secondary')}
                      </Link>
                    </div>
                  </div>

                  {/* Right: Perks Card */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    {ctaPerks.map((perk, i) => (
                      <div key={i} className="p-6 bg-white dark:bg-background-6 rounded-[32px] border border-gray-100 dark:border-white/5 shadow-sm space-y-3 hover:translate-y-[-4px] transition-transform duration-300">
                        <div className="size-10 rounded-2xl bg-primary-500/5 flex items-center justify-center">
                          <perk.icon className="size-5 text-primary-500" />
                        </div>
                        <div>
                          <p className="text-sm text-secondary dark:text-white">{perk.title}</p>
                          <p className="text-xs text-secondary/50 dark:text-accent/50">{perk.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
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
