'use client';

import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { FadeIn } from '@/components/animations/FadeIn';
import {
  Building2, MapPin, Star, Shield, Wallet, Users,
  CheckCircle, ArrowRight, FileText, Mail, Globe, ChevronRight, BarChart3, Truck
} from 'lucide-react';
import Link from 'next/link';
import { useTranslation, Trans } from 'react-i18next';
import { KIIAKO_EMAIL, REGISTER_URL_DELIVERY } from '@/lib/utls';

export default function EntrepriseLivraisonPage() {
  const { t } = useTranslation();

  const iconMap: Record<string, any> = {
    dossier: FileText,
    validation: Shield,
    zones: MapPin,
    invitation: Mail,
    missions: Truck,
    wallet: Wallet,
    flotte: Users,
    reputation: Star,
    stats: BarChart3,
    badge: Shield,
    comparison: Globe
  };

  const stats = [
    { label: t('entrepriseLivraison.stats.commission.label'), value: t('entrepriseLivraison.stats.commission.value'), sub: t('entrepriseLivraison.stats.commission.sub') },
    { label: t('entrepriseLivraison.stats.livreurs.label'), value: t('entrepriseLivraison.stats.livreurs.value'), sub: t('entrepriseLivraison.stats.livreurs.sub') },
    { label: t('entrepriseLivraison.stats.zones.label'), value: t('entrepriseLivraison.stats.zones.value'), sub: t('entrepriseLivraison.stats.zones.sub') },
    { label: t('entrepriseLivraison.stats.retrait.label'), value: t('entrepriseLivraison.stats.retrait.value'), sub: t('entrepriseLivraison.stats.retrait.sub') },
  ];

  const stepsData = t('entrepriseLivraison.steps.list', { returnObjects: true }) as Record<string, any>;
  const steps = [
    { num: '01', icon: iconMap.dossier, ...stepsData.dossier },
    { num: '02', icon: iconMap.validation, ...stepsData.validation },
    { num: '03', icon: iconMap.zones, ...stepsData.zones },
    { num: '04', icon: iconMap.invitation, ...stepsData.invitation },
    { num: '05', icon: iconMap.missions, ...stepsData.missions },
    { num: '06', icon: iconMap.wallet, ...stepsData.wallet },
  ];

  const advantagesData = t('entrepriseLivraison.advantages.items', { returnObjects: true }) as Record<string, any>;
  const advantages = [
    { icon: iconMap.flotte, ...advantagesData.flotte },
    { icon: Globe, ...advantagesData.zones },
    { icon: iconMap.wallet, ...advantagesData.wallet },
    { icon: iconMap.badge, ...advantagesData.badge },
    { icon: iconMap.reputation, ...advantagesData.reputation },
    { icon: iconMap.stats, ...advantagesData.stats },
  ];

  const requirements = t('entrepriseLivraison.requirements.list', { returnObjects: true }) as string[];
  const faqs = t('entrepriseLivraison.faq.items', { returnObjects: true }) as Array<{ q: string; a: string }>;

  return (
    <div className="bg-background-1 dark:bg-background-6">
      <Header />
      <main>

        {/* Hero */}
        <section className="pb-20 pt-24 md:pb-28 md:pt-36 lg:pt-44">
          <div className="main-container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <FadeIn delay={0.1} className="space-y-8">
                <span className="badge bg-primary-500/10 text-primary-500">{t('entrepriseLivraison.hero.badge')}</span>
                <h1 className="text-heading-2 leading-tight">
                  <Trans i18nKey="entrepriseLivraison.hero.title" components={{ 1: <span className="text-primary-500" /> }} />
                </h1>
                <p className="text-secondary/70 dark:text-accent/70 leading-relaxed">
                  {t('entrepriseLivraison.hero.subtitle')}
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href={REGISTER_URL_DELIVERY} target="_blank" rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 transition-colors text-white  px-7 h-13 rounded-full">
                    {t('entrepriseLivraison.hero.cta.register')}
                  </a>
                  <Link href="/solutions/livreur-inscription" className="inline-flex items-center justify-center px-8 h-14 text-secondary dark:text-white hover:bg-gray-100 dark:hover:bg-white/5 rounded-full transition-colors border border-transparent hover:border-gray-200 dark:hover:border-white/10">
                    {t('entrepriseLivraison.hero.cta.independent')} <ArrowRight className="size-4" />
                  </Link>
                </div>
              </FadeIn>

              {/* Stats */}
              <FadeIn delay={0.2}>
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((s, i) => (
                    <div key={i} className="p-6 rounded-[32px] bg-background-3 dark:bg-background-7 border border-stroke-1 dark:border-white/5 space-y-1">
                      <p className="text-[11px] font-bold uppercase tracking-widest text-secondary/40 dark:text-accent/40">{s.label}</p>
                      <p className="text-2xl  text-primary-500">{s.value}</p>
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
          <div className="main-container max-w-4xl">
            <div className="text-center mb-16">
              <FadeIn>
                <h2 className="text-heading-3 mb-4">{t('entrepriseLivraison.steps.title')}</h2>
                <p className="text-secondary/60 dark:text-accent/60 max-w-xl mx-auto">{t('entrepriseLivraison.steps.subtitle')}</p>
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

        {/* Advantages */}
        <section className="py-24">
          <div className="main-container">
            <div className="text-center mb-16">
              <FadeIn>
                <h2 className="text-heading-3 mb-4">{t('entrepriseLivraison.advantages.title')}</h2>
                <p className="text-secondary/60 dark:text-accent/60 max-w-xl mx-auto">{t('entrepriseLivraison.advantages.subtitle')}</p>
              </FadeIn>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {advantages.map((a, i) => (
                <FadeIn key={i} delay={i * 0.08}>
                  <div className="p-8 rounded-[32px] bg-background-3 dark:bg-background-7 border border-stroke-1 dark:border-white/5 space-y-4 h-full">
                    <div className="size-11 rounded-2xl bg-primary-500/10 flex items-center justify-center">
                      <a.icon className="size-5 text-primary-500" />
                    </div>
                    <h3 className="text-lg">{a.title}</h3>
                    <p className="text-secondary/60 dark:text-accent/60 text-sm leading-relaxed">{a.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-background-3 dark:bg-background-7">
          <div className="main-container max-w-3xl">
            <FadeIn>
              <h2 className="text-heading-4 mb-10 text-center">{t('entrepriseLivraison.comparison.title')}</h2>
              <div className="rounded-[32px] border border-stroke-1 dark:border-white/5 overflow-hidden">
                <div className="grid grid-cols-3 bg-primary-500 text-white text-sm font-bold">
                  <div className="p-4">{t('entrepriseLivraison.comparison.headers.criteria')}</div>
                  <div className="p-4 text-center border-l border-white/20">{t('entrepriseLivraison.comparison.headers.independent')}</div>
                  <div className="p-4 text-center border-l border-white/20">{t('entrepriseLivraison.comparison.headers.company')}</div>
                </div>
                {Object.values(t('entrepriseLivraison.comparison.items', { returnObjects: true }) as Record<string, any>).map((row, i) => (
                  <div key={i} className={`grid grid-cols-3 text-sm ${i % 2 === 0 ? 'bg-white dark:bg-background-6' : 'bg-background-3 dark:bg-background-7'}`}>
                    <div className="p-4 font-medium text-secondary/70 dark:text-accent/70">{row.crit}</div>
                    <div className="p-4 text-center border-l border-stroke-1 dark:border-white/5 text-secondary/80 dark:text-accent/80">{row.ind}</div>
                    <div className="p-4 text-center border-l border-stroke-1 dark:border-white/5 font-semibold text-primary-500">{row.comp}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Requirements */}
        <section className="py-24">
          <div className="main-container max-w-3xl">
            <FadeIn>
              <div className="text-center mb-12">
                <h2 className="text-heading-4 mb-3">{t('entrepriseLivraison.requirements.title')}</h2>
                <p className="text-secondary/60 dark:text-accent/60">{t('entrepriseLivraison.requirements.subtitle')}</p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {requirements.map((r, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-background-3 dark:bg-background-7 border border-stroke-1 dark:border-white/5">
                    <CheckCircle className="size-5 text-primary-500 shrink-0" />
                    <span className="text-sm text-secondary/80 dark:text-accent/80">{r}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-background-3 dark:bg-background-7">
          <div className="main-container max-w-3xl">
            <FadeIn>
              <h2 className="text-heading-3 mb-10 text-center">{t('entrepriseLivraison.faq.title')}</h2>
              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <FadeIn key={i} delay={i * 0.07}>
                    <div className="p-6 rounded-[24px] bg-white dark:bg-background-6 border border-stroke-1 dark:border-white/5">
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

        {/* CTA - Modern Split */}
        <section className="py-24">
          <div className="bg-gray-50 dark:bg-background-7 rounded-[48px] border border-gray-100 dark:border-white/5 p-12 md:p-16 lg:p-20 relative overflow-hidden">
            {/* Subtle background accent */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
              {/* Left: Content */}
              <div className="space-y-8 text-left">
                <span className="cb-badge">{t('entrepriseLivraison.cta.badge')}</span>
                                <h2 className="text-heading-3 text-secondary dark:text-white leading-[1.1] tracking-tight">
                      {t('entrepriseLivraison.cta.title')}
                    </h2>
                    
                    <p className="text-secondary/60 dark:text-accent/60 max-w-lg leading-relaxed">
                      {t('entrepriseLivraison.cta.subtitle')}
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                      <a
                        href={REGISTER_URL_DELIVERY}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 transition-all text-white px-8 h-14 rounded-full active:scale-95 shadow-lg shadow-primary-500/20"
                      >
                        {t('entrepriseLivraison.cta.button')} <ArrowRight className="size-4" />
                      </a>
                      <a href={`mailto:${KIIAKO_EMAIL}`} className="inline-flex items-center justify-center px-8 h-14 text-secondary dark:text-white hover:bg-gray-100 dark:hover:bg-white/5 rounded-full transition-colors border border-transparent hover:border-gray-200 dark:hover:border-white/10">
                        {t('entrepriseLivraison.hero.cta.secondary') || 'Nous contacter'}
                      </a>
                </div>
              </div>

              {/* Right: Perks Grid */}
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: Users, ...advantagesData.flotte },
                  { icon: Wallet, ...advantagesData.wallet },
                  { icon: BarChart3, ...advantagesData.stats },
                  { icon: Building2, title: t('header.menu.services.2'), desc: t('header.menu.services.2_desc') },
                ].map((perk, i) => (
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
        </section>

      </main>
      <Footer />
    </div>
  );
}
