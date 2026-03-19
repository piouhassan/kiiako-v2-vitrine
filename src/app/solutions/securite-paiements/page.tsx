'use client';

import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { FadeIn } from '@/components/animations/FadeIn';
import { SlideIn } from '@/components/animations/SlideIn';
import { Check, Shield, Lock, FileCheck, AlertTriangle, BarChart3, ArrowRight, Eye, Key, Smartphone, CreditCard, Server, Building2 } from 'lucide-react';
import {REGISTER_URL_FREE} from "@/lib/utls";
import { useTranslation } from 'react-i18next';

export default function SecuritePaiementsPage() {
  const { t } = useTranslation();
  return (
      <div className="bg-background-1 dark:bg-background-6">
        <Header />
        <main>
          {/* Hero Section - Premium Security Design */}
          <section className="relative pb-14 pt-18 md:pb-16 md:pt-16 lg:pb-24 lg:pt-[120px] xl:pb-32 xl:pt-[160px] overflow-hidden bg-background-2 dark:bg-background-5">
            {/* Decorative background gradients */}
            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary-500/5 rounded-full blur-[100px] translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

            <div className="main-container relative z-10">
              <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                {/* Text Content */}
                <div className="space-y-10 text-center lg:text-left">
                  <FadeIn delay={0.2}>
                    <span className="cb-badge">
                      {t('securitePaiements.badge')}
                    </span>
                  </FadeIn>
                  
                  <div className="space-y-8">
                    <FadeIn delay={0.3}>
                      <h2 className="text-heading-2">
                        {t('securitePaiements.hero.title')}
                      </h2>
                    </FadeIn>
                    
                    <FadeIn delay={0.4}>
                      <p className="text-secondary/60 dark:text-accent/60 max-w-xl mx-auto lg:mx-0  leading-relaxed">
                        {t('securitePaiements.hero.description')}
                      </p>
                    </FadeIn>
                  </div>

                  <FadeIn delay={0.5}>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start pt-4">
                      <a
                        href={REGISTER_URL_FREE}
                        className="cb-btn"
                      >
                        <span className="relative z-10">{t('securitePaiements.cta.button')}</span>
                        <ArrowRight className="size-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </FadeIn>
                </div>

                {/* Visual Element - Premium Security UI Mockup */}
                <FadeIn delay={0.6} className="relative mt-12 lg:mt-0">
                  <div className="relative z-10 rounded-[3rem] overflow-hidden border-8 border-white dark:border-background-7 bg-white/40 dark:bg-white/[0.02] backdrop-blur-2xl shadow-2xl p-4 lg:p-6 transition-all duration-700 hover:scale-[1.02]">
                      <div className="rounded-[2rem] bg-background-1 dark:bg-background-6 border border-stroke-1 dark:border-stroke-7 p-6 md:p-8 space-y-8">
                        {/* Header Mockup */}
                        <div className="flex justify-between items-center border-b border-stroke-1 dark:border-stroke-7 pb-8">
                          <div className="flex items-center gap-5">
                            <div className="size-14 rounded-2xl bg-primary-500/10 flex items-center justify-center">
                              <Shield className="size-7 text-primary-500" />
                            </div>
                            <div className="text-left">
                              <div className="text-xl text-secondary dark:text-white leading-tight">Transactions</div>
                              <div className="text-sm text-secondary/50 dark:text-accent/50 font-medium tracking-tight">Sécurité Active v2.4</div>
                            </div>
                          </div>
                          <div className="hidden sm:flex px-4 py-2 text-[10px] font-black rounded-full bg-primary-500 text-white shadow-lg shadow-blue-500/30 uppercase tracking-widest transition-transform hover:scale-110">
                            Certifié
                          </div>
                        </div>
                        
                        {/* Security Stats Mockup */}
                        <div className="grid grid-cols-2 gap-4">
                          <div className="p-4 rounded-2xl bg-background-2 dark:bg-background-7 border border-stroke-1/50 dark:border-white/5">
                            <div className="text-[10px] font-black uppercase tracking-widest text-secondary/40 dark:text-accent/40 mb-2">Chiffrement</div>
                            <div className="text-lg font-bold text-primary-500">AES-256</div>
                          </div>
                          <div className="p-4 rounded-2xl bg-background-2 dark:bg-background-7 border border-stroke-1/50 dark:border-white/5">
                            <div className="text-[10px] font-black uppercase tracking-widest text-secondary/40 dark:text-accent/40 mb-2">Status SSL</div>
                            <div className="text-lg font-bold text-primary-500 flex items-center gap-2">
                              Actif <div className="size-2 rounded-full bg-primary-500 animate-pulse"></div>
                            </div>
                          </div>
                        </div>

                        {/* Logs Mockup */}
                        <div className="space-y-3 opacity-60">
                           <div className="h-2 w-full bg-background-3 dark:bg-background-9 rounded-full"></div>
                           <div className="h-2 w-2/3 bg-background-3 dark:bg-background-9 rounded-full"></div>
                           <div className="h-2 w-3/4 bg-background-3 dark:bg-background-9 rounded-full"></div>
                        </div>
                      </div>
                  </div>
                  {/* Decorative background glow behind mockup */}
                  <div className="absolute -inset-10 bg-blue-500/10 blur-[100px] rounded-full -z-10 opacity-50"></div>
                </FadeIn>
              </div>
            </div>
          </section>

          {/* Fonctionnalités de sécurité - Uniformized with Produits Digitaux */}
          <section id="securite" className="py-24 bg-background-3 dark:bg-background-7">
            <div className="main-container px-4">
              <div className="text-center max-w-3xl mx-auto mb-20">
                <FadeIn delay={0.1}>
                  <h2 className="text-heading-3 mb-6 text-secondary dark:text-white">
                    {t('securitePaiements.features.title')}
                  </h2>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <p className="text-secondary/60 dark:text-accent/60 leading-relaxed">
                    {t('securitePaiements.features.description')}
                  </p>
                </FadeIn>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { key: 'paydunya', icon: Shield },
                  { key: 'ssl', icon: Lock },
                  { key: 'validation', icon: Check },
                  { key: 'antifraud', icon: AlertTriangle },
                  { key: 'history', icon: Smartphone },
                  { key: 'reports', icon: BarChart3 }
                ].map((feature, i) => (
                  <FadeIn key={feature.key} delay={0.1 + (i * 0.05)}>
                    <div className="p-8 bg-white/40 dark:bg-white/[0.02] backdrop-blur-xl rounded-[32px] border border-white/20 dark:border-white/5 transition-all duration-500 hover:shadow-2xl hover:bg-white/60 dark:hover:bg-white/[0.04] group hover:-translate-y-2">
                      <div className="w-14 h-14 rounded-2xl bg-primary-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                        <feature.icon className="w-7 h-7 text-primary-500" />
                      </div>
                      <h3 className="text-xl mb-3 text-secondary dark:text-white">
                        {t(`securitePaiements.features.items.${feature.key}.title`)}
                      </h3>
                      <p className="text-secondary/60 dark:text-accent/60 leading-relaxed font-medium">
                        {t(`securitePaiements.features.items.${feature.key}.description`)}
                      </p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </section>

          {/* Engagements de sécurité - Premium List */}
          <section className="py-[100px] lg:py-[150px] bg-background-1 dark:bg-background-6">
            <div className="main-container">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div className="space-y-10">
                  <FadeIn delay={0.2}>
                    <span className="cb-badge">
                      {t('securitePaiements.commitments.badge')}
                    </span>
                  </FadeIn>
                  <div className="space-y-4">
                    <FadeIn delay={0.3}>
                      <h2 className="text-heading-3 text-secondary dark:text-white">
                        {t('securitePaiements.commitments.title')}
                      </h2>
                    </FadeIn>
                    <FadeIn delay={0.4}>
                      <p className="text-secondary/60 dark:text-accent/60  leading-relaxed">
                        {t('securitePaiements.commitments.description')}
                      </p>
                    </FadeIn>
                  </div>
                </div>

                <div className="space-y-6">
                  {['traceability', 'alerts', 'experience'].map((item, idx) => (
                    <FadeIn key={item} delay={0.4 + (idx * 0.1)}>
                      <div className="group flex gap-6 p-8 rounded-[32px] bg-background-2 dark:bg-background-8/30 border border-stroke-1 dark:border-white/5 hover:border-blue-500/50 transition-all duration-500 hover:shadow-xl">
                        <div className="size-14 rounded-2xl bg-primary-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-500 group-hover:text-white transition-all duration-500 shadow-sm">
                          <Check className="size-6 text-primary-500 group-hover:text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl text-secondary dark:text-white mb-2 tracking-tight">
                            {t(`securitePaiements.commitments.items.${item}.title`)}
                          </h3>
                          <p className="text-secondary/60 dark:text-accent/60 leading-relaxed">
                            {t(`securitePaiements.commitments.items.${item}.description`)}
                          </p>
                        </div>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>
            </div>
          </section>

           {/* Custom Security Section - Premium Split Layout */}
          <section className="bg-background-3 dark:bg-background-7 py-[100px] lg:py-[150px] relative overflow-hidden">
            <div className="main-container relative z-10">
              <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                <div className="space-y-10 lg:pr-10">
                  <FadeIn delay={0.2}>
                    <span className="cb-badge">
                      <span>{t('securitePaiements.custom.title')}</span>
                    </span>
                  </FadeIn>
                  <div className="space-y-6">
                    <FadeIn delay={0.3}>
                      <h2 className="text-heading-3 text-secondary dark:text-white">
                        {t('securitePaiements.custom.title')}
                      </h2>
                    </FadeIn>
                    <FadeIn delay={0.4}>
                      <p className=" text-secondary/60 dark:text-accent/60 max-w-xl leading-relaxed">
                        {t('securitePaiements.custom.description')}
                      </p>
                    </FadeIn>
                  </div>
                  <div className="pt-2 space-y-5">
                    {['adapted', 'customizable', 'realtime', 'monitoring'].map((item, idx) => (
                      <FadeIn key={item} delay={0.5 + (idx * 0.1)}>
                        <div className="flex items-center gap-5 group">
                          <div className="size-10 rounded-full bg-primary-500/10 flex items-center justify-center shrink-0 transition-all duration-300">
                            <Check className="size-5 text-primary-500 group-hover:text-white transition-colors" />
                          </div>
                          <span className=" text-secondary/80 dark:text-accent/80 group-hover:text-secondary dark:group-hover:text-white transition-colors">
                            {t(`securitePaiements.custom.items.${item}`)}
                          </span>
                        </div>
                      </FadeIn>
                    ))}
                  </div>
                </div>
                
                <FadeIn delay={0.5} className="relative">
                  <div className="relative z-10 rounded-[3rem] bg-white/40 dark:bg-white/[0.02] backdrop-blur-2xl border-8 border-white dark:border-background-8 shadow-2xl p-6 lg:p-8 transition-all duration-700 hover:rotate-1">
                    <div className="rounded-3xl bg-background-1 dark:bg-background-6 border border-stroke-1 dark:border-stroke-7 p-8 shadow-sm">
                      <div className="flex items-center gap-5 mb-10 pb-6 border-b border-stroke-1 dark:border-stroke-7">
                        <div className="size-12 rounded-2xl bg-primary-500/10 flex items-center justify-center">
                          <Lock className="size-6 text-primary-500" />
                        </div>
                        <div>
                          <div className="text-sm font-black text-secondary dark:text-white uppercase tracking-wider">Protection Avancée</div>
                          <div className="text-xs text-secondary/40 font-medium">Monitoring 24/7</div>
                        </div>
                      </div>
                      <div className="space-y-6">
                        <div className="flex justify-between items-end">
                           <div className="space-y-2">
                             <div className="h-2 w-32 bg-background-3 dark:bg-background-9 rounded-full"></div>
                             <div className="h-2 w-24 bg-background-3 dark:bg-background-9 rounded-full opacity-50"></div>
                           </div>
                           <div className="text-2xl font-black text-primary-500">100%</div>
                        </div>
                        <div className="h-3 w-full bg-background-3 dark:bg-background-9 rounded-full overflow-hidden">
                           <div className="h-full w-full bg-primary-500/30 rounded-full relative">
                              <div className="absolute inset-y-0 left-0 w-full bg-primary-500 animate-progress origin-left"></div>
                           </div>
                        </div>
                        <div className="grid grid-cols-3 gap-4 pt-4">
                           {[1,2,3].map(i => (
                             <div key={i} className="h-12 rounded-xl border border-dashed border-stroke-1 dark:border-stroke-7"></div>
                           ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </section>

          {/* FAQ Sécurité - Premium Glassmorphism */}
          <section className="py-[100px] lg:py-[150px] bg-background-2 dark:bg-background-8/30">
            <div className="main-container">
              <div className="text-center space-y-4 mb-20 max-w-3xl mx-auto">
                <FadeIn delay={0.1}>
                  <span className="cb-badge">
                    Sécurité FAQ
                  </span>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <h2 className="text-heading-3 text-secondary dark:text-white">
                    {t('securitePaiements.faq.title')}
                  </h2>
                </FadeIn>
                <FadeIn delay={0.3}>
                  <p className="text-secondary/60 dark:text-accent/60  leading-relaxed">
                    {t('securitePaiements.faq.description')}
                  </p>
                </FadeIn>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {['protection', 'anomaly', 'history', 'confirmation'].map((item, idx) => (
                  <FadeIn key={item} delay={0.3 + (idx * 0.1)}>
                    <div className="group p-10 rounded-[40px] bg-background-1 dark:bg-background-6 border border-stroke-1 dark:border-white/5 hover:border-primary-500/50 transition-all duration-500 hover:shadow-2xl">
                      <h3 className="text-xl text-secondary dark:text-white mb-4 tracking-tight group-hover:text-primary-500 transition-colors">
                        {t(`securitePaiements.faq.items.${item}.title`)}
                      </h3>
                      <p className="text-secondary/60 dark:text-accent/60">
                        {t(`securitePaiements.faq.items.${item}.description`)}
                      </p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </section>

          {/* Processus sécurisé - Premium Horizontal/Vertical Steps */}
          <section className="py-[120px] lg:py-[200px] bg-background-1 dark:bg-background-6 overflow-hidden">
            <div className="main-container">
              <div className="text-center space-y-6 mb-24 max-w-4xl mx-auto">
                <FadeIn delay={0.2}>
                  <span className="cb-badge">
                    {t('securitePaiements.process.badge')}
                  </span>
                </FadeIn>
                <FadeIn delay={0.3}>
                  <h2 className="text-heading-3 text-secondary dark:text-white tracking-tight">
                    {t('securitePaiements.process.title')}
                  </h2>
                </FadeIn>
              </div>

              <div className="relative">
                {/* Horizontal Desktop Line */}
                <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-stroke-1 dark:via-stroke-7 to-transparent z-0"></div>
                
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 relative z-10">
                  {['client', 'redirection', 'ussd', 'confirmation', 'validation'].map((step, idx) => (
                    <FadeIn key={step} delay={0.4 + (idx * 0.1)}>
                      <div className="flex lg:flex-col items-center lg:items-center gap-8 lg:gap-10 text-left lg:text-center group">
                        <div className="relative">
                           <div className="size-24 lg:size-32 rounded-[40px] bg-background-1 dark:bg-background-5 border-2 border-stroke-1 dark:border-stroke-7 flex items-center justify-center text-3xl font-black text-secondary/20 dark:text-white/10 group-hover:border-primary-500 group-hover:text-primary-500 transition-all duration-500 shadow-xl group-hover:shadow-primary-500/20 group-hover:-translate-y-2">
                             {idx + 1}
                           </div>
                           {/* Step indicator dot */}
                           <div className="hidden lg:block absolute -top-4 left-1/2 -translate-x-1/2 size-3 rounded-full bg-stroke-1 dark:bg-stroke-7 group-hover:bg-primary-500 transition-colors"></div>
                        </div>
                        <div className="space-y-4 flex-1">
                          <h3 className="text-xl text-secondary dark:text-white tracking-tight group-hover:text-primary-500 transition-colors">
                            {t(`securitePaiements.process.items.${step}.title`)}
                          </h3>
                          <p className="text-secondary/60 dark:text-accent/60 text-sm">
                            {t(`securitePaiements.process.items.${step}.description`)}
                          </p>
                        </div>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="cb-cta-section">
            <div className="cb-container">
              <div className="cb-max-w-4xl cb-text-center space-y-8">
                <FadeIn delay={0.2}>
                  <h2 className="text-heading-3">
                    {t('securitePaiements.cta.title')}
                  </h2>
                </FadeIn>
                <FadeIn delay={0.3}>
                  <p className="cb-lead">
                    {t('securitePaiements.cta.description')}
                  </p>
                </FadeIn>
                <FadeIn delay={0.4}>
                  <div className="cb-text-center">
                    <a href={REGISTER_URL_FREE} className="cb-btn">
                      <span className="inline-block first-letter:uppercase">
                        {t('securitePaiements.cta.button')}
                      </span>
                    </a>
                  </div>
                </FadeIn>
                <FadeIn delay={0.5}>
                  <ul className="cb-footer-list">
                    <li className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary-500" />
                      <span>{t('securitePaiements.cta.benefits.ssl')}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary-500" />
                      <span>{t('securitePaiements.cta.benefits.antifraud')}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary-500" />
                      <span>{t('securitePaiements.cta.benefits.certified')}</span>
                    </li>
                  </ul>
                </FadeIn>
              </div>
            </div>
          </section>
        </main>
        <Footer/>
      </div>
  );
}
