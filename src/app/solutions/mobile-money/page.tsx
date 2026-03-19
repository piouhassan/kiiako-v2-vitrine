'use client';

import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { FadeIn } from '@/components/animations/FadeIn';
import { ScaleIn } from '@/components/animations/ScaleIn';
import RegionalCoverage from '@/components/sections/RegionalCoverage';
import { Smartphone, Zap, Check, Shield, TrendingUp, Clock } from 'lucide-react';
import { REGISTER_URL_FREE } from '@/lib/utls';
import { useTranslation } from 'react-i18next';
import { Globe, ArrowRight } from 'lucide-react';
import { Wallet, ArrowDown, Building2, CheckCircle2, DollarSign, CreditCard } from 'lucide-react';

export default function MobileMoneyPage() {
  const { t } = useTranslation();
  return (
    <div className="bg-background-1 dark:bg-background-6">
      <Header />
      <main>
        {/* Premium Hero Section */}
        <section className="pt-32 md:pt-40 lg:pt-48 pb-20 relative overflow-hidden bg-background-2 dark:bg-background-5">
          {/* Background Elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-500/5 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/5 blur-[120px] rounded-full"></div>
          </div>

          <div className="main-container px-4 relative z-10">
            <div className="text-center space-y-10 max-w-4xl mx-auto mb-20">
              <FadeIn delay={0.2}>
                <span className="cb-badge">
                  {t('mobileMoney.badge')}
                </span>
              </FadeIn>
              
              <div className="space-y-8">
                <FadeIn delay={0.3}>
                  <h1 className="text-heading-2">
                    {t('mobileMoney.hero.title')}
                  </h1>
                </FadeIn>
                <FadeIn delay={0.4}>
                  <p className="text-secondary/60 dark:text-accent/60 max-w-2xl mx-auto leading-relaxed">
                    {t('mobileMoney.hero.description')}
                  </p>
                </FadeIn>
              </div>

            </div>
            
            <FadeIn delay={0.6}>
              <div className="relative group">
                <div className="absolute inset-0 bg-primary-500/5 blur-[100px] rounded-full opacity-50"></div>
                <RegionalCoverage />
              </div>
            </FadeIn>
          </div>
        </section>

      
        {/* Premium Features Section */}
        <section className="py-32 bg-background-3 dark:bg-background-7 relative overflow-hidden">
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary-500/5 blur-[130px] rounded-full pointer-events-none"></div>

          <div className="main-container px-4">
            <div className="text-center max-w-3xl mx-auto mb-24">
              <FadeIn delay={0.1}>
                <h2 className="text-heading-3 mb-8 text-secondary dark:text-white">
                  {t('mobileMoney.features.title')}
                </h2>
              </FadeIn>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                { icon: Smartphone, title: t('mobileMoney.features.items.mobileFirst.title'), desc: t('mobileMoney.features.items.mobileFirst.description') },
                { icon: Zap, title: t('mobileMoney.features.items.instantConfirmation.title'), desc: t('mobileMoney.features.items.instantConfirmation.description') },
                { icon: Shield, title: t('mobileMoney.features.items.security.title'), desc: t('mobileMoney.features.items.security.description') },
                { icon: TrendingUp, title: t('mobileMoney.features.items.dashboard.title'), desc: t('mobileMoney.features.items.dashboard.description') },
                { icon: Check, title: t('mobileMoney.features.items.highSuccessRate.title'), desc: t('mobileMoney.features.items.highSuccessRate.description') },
                { icon: Clock, title: t('mobileMoney.features.items.support.title'), desc: t('mobileMoney.features.items.support.description') }
              ].map((feat, i) => (
                <FadeIn key={i} delay={0.1 + (i * 0.05)}>
                  <div className="p-10 bg-white/40 dark:bg-white/[0.02] backdrop-blur-xl rounded-[48px] border border-white/20 dark:border-white/5 transition-all duration-500 hover:shadow-2xl hover:bg-white/60 dark:hover:bg-white/[0.04] group hover:-translate-y-3">
                    <div className="size-16 rounded-2xl bg-primary-500/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-all duration-500">
                      <feat.icon className="size-8 text-primary-500" />
                    </div>
                    <h3 className="text-xl  mb-4 text-secondary dark:text-white">{feat.title}</h3>
                    <p className=" text-secondary/60 dark:text-accent/60 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2: Global Collection (Pay-In) */}
        <section className="py-32 bg-background-1 dark:bg-background-6 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-500/5 blur-[150px] rounded-full pointer-events-none"></div>

          <div className="main-container px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
              
              {/* Content */}
              <div className="order-2 lg:order-1 space-y-10">
                <FadeIn delay={0.2}>
                  <span className="cb-badge">
                    {t('mobileMoney.payIn.badge')}
                  </span>
                </FadeIn>
                
                <div className="space-y-8">
                  <FadeIn delay={0.3}>
                    <h2 className="text-heading-3 text-secondary dark:text-white  leading-tight">
                      {t('mobileMoney.payIn.title')}
                    </h2>
                  </FadeIn>
                  <FadeIn delay={0.4}>
                    <p className="text-secondary/60 dark:text-accent/60 leading-relaxed">
                      {t('mobileMoney.payIn.description')}
                    </p>
                  </FadeIn>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                  <FadeIn delay={0.5}>
                    <div className="group flex items-center gap-5 p-6 bg-white/40 dark:bg-white/[0.02] backdrop-blur-xl rounded-[32px] border border-white/20 dark:border-white/5 transition-all duration-500 hover:bg-white/60 dark:hover:bg-white/[0.04]">
                      <div className="size-14 rounded-full bg-background-2 dark:bg-white/10 flex items-center justify-center text-3xl shadow-soft group-hover:scale-110 transition-transform">🇧🇯</div>
                      <div>
                        <div className=" text-secondary dark:text-white capitalize">{t('mobileMoney.payIn.benin.title')}</div>
                        <div className="text-sm opacity-60 dark:opacity-40">{t('mobileMoney.payIn.benin.description')}</div>
                      </div>
                    </div>
                  </FadeIn>
                  <FadeIn delay={0.6}>
                    <div className="group flex items-center gap-5 p-6 bg-white/40 dark:bg-white/[0.02] backdrop-blur-xl rounded-[32px] border border-white/20 dark:border-white/5 transition-all duration-500 hover:bg-white/60 dark:hover:bg-white/[0.04]">
                      <div className="size-14 rounded-full bg-background-2 dark:bg-white/10 flex items-center justify-center text-3xl shadow-soft group-hover:scale-110 transition-transform">🇸🇳</div>
                      <div>
                        <div className=" text-secondary dark:text-white capitalize">{t('mobileMoney.payIn.senegal.title')}</div>
                        <div className="text-sm  opacity-50">{t('mobileMoney.payIn.senegal.description')}</div>
                      </div>
                    </div>
                  </FadeIn>
                </div>
              </div>

              {/* Visual: Connection Map */}
              <div className="order-1 lg:order-2 relative">
                <ScaleIn delay={0.4}>
                  <div className="relative z-10 bg-white/40 dark:bg-white/[0.02] backdrop-blur-[100px] p-10 rounded-[64px] border border-white/30 dark:border-white/5 shadow-2xl overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/10 to-transparent opacity-50" />
                    
                    <div className="relative z-10 flex flex-col items-center text-center">
                      <div className="size-24 bg-primary-500 rounded-[32px] flex items-center justify-center mb-8 shadow-2xl shadow-primary-500/30 transform group-hover:rotate-6 transition-transform duration-700">
                        <span className="text-white font-black text-5xl">K</span>
                      </div>
                      <h3 className="text-2xl  text-secondary dark:text-white mb-3">{t('mobileMoney.payIn.visual.title')}</h3>
                      <p className="text-lg opacity-60 dark:opacity-40 mb-10">{t('mobileMoney.payIn.visual.subtitle')}</p>
                      
                      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-10" />
                      
                      <div className="flex justify-between items-end w-full">
                        <div className="text-left">
                          <p className="text-xs uppercase tracking-widest opacity-60 dark:opacity-40 mb-1">{t('mobileMoney.payIn.visual.totalLabel')}</p>
                          <p className="text-3xl  text-primary-500">+ 1,250,500 F</p>
                        </div>
                        <div className="size-12 rounded-full bg-primary-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <TrendingUp className="size-6 text-primary-500" />
                        </div>
                      </div>
                    </div>

                    {/* Animated Decorative Floating Dots */}
                    <div className="absolute top-10 right-10 size-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center animate-bounce duration-[3000ms]">
                       <DollarSign className="size-7 text-primary-500" />
                    </div>
                    <div className="absolute bottom-20 left-10 size-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center animate-bounce duration-[4000ms] delay-500">
                       <CreditCard className="size-5 text-primary-500" />
                    </div>
                  </div>
                </ScaleIn>

                {/* Background Glows */}
                <div className="absolute -top-10 -right-10 size-72 bg-primary-500/10 blur-[100px] rounded-full z-0"></div>
                <div className="absolute -bottom-10 -left-10 size-80 bg-secondary/5 blur-[120px] rounded-full z-0"></div>
              </div>

            </div>
          </div>
        </section>

        {/* Section 3: Direct Settlement (Pay-Out) */}
        <section className="py-32 bg-background-3 dark:bg-background-7 relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 blur-[150px] rounded-full pointer-events-none"></div>

          <div className="main-container px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
              
              {/* Visual: Money Flow */}
              <div className="relative">
                 <ScaleIn delay={0.3}>
                    <div className="relative z-10 bg-white/40 dark:bg-white/[0.02] backdrop-blur-[100px] p-10 rounded-[64px] border border-white/30 dark:border-white/5 shadow-xl group">
                       {/* Source */}
                       <div className="flex items-center justify-between mb-12 opacity-50">
                          <div className="flex items-center gap-4">
                            <div className="size-12 rounded-full bg-primary-500/10 flex items-center justify-center">
                              <Building2 className="size-6 text-primary-500" />
                            </div>
                            <span className="font-black text-secondary dark:text-white">{t('mobileMoney.payOut.visual.kiiakoBalance')}</span>
                          </div>
                          <span className="font-mono text-sm opacity-50">XKii-8821</span>
                       </div>

                       {/* Animated Flow Arrow */}
                       <div className="flex justify-center -my-8 relative z-20">
                          <div className="size-16 bg-primary-500 rounded-full flex items-center justify-center text-white shadow-2xl shadow-primary-500/40 transform group-hover:scale-110 transition-transform duration-500">
                            <ArrowDown className="size-8 animate-bounce" />
                          </div>
                       </div>

                       {/* Destination Card */}
                       <div className="mt-12 p-8 bg-primary-500/10 dark:bg-primary-500/5 rounded-[40px]">
                          <div className="flex items-center justify-between">
                             <div className="flex items-center gap-5">
                               <div className="size-16 rounded-[24px] bg-white dark:bg-background-9 flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform">
                                 <Wallet className="size-8 text-primary-500" />
                               </div>
                               <div>
                                 <div className=" text-xl text-secondary dark:text-white">{t('mobileMoney.payOut.visual.mobileMoney')}</div>
                                 <div className="text-sm  text-primary-500/70">{t('mobileMoney.payOut.visual.transferLabel')}</div>
                               </div>
                             </div>
                             <span className="text-2xl  text-secondary dark:text-white">150,000 F</span>
                          </div>
                       </div>
                    </div>
                 </ScaleIn>

                 {/* Decorative background glow */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-80 bg-primary-500/5 blur-[100px] rounded-full"></div>
              </div>

              {/* Content */}
              <div className="space-y-10">
                <FadeIn delay={0.2}>
                  <span className="cb-badge">
                    {t('mobileMoney.payOut.badge')}
                  </span>
                </FadeIn>
                
                <div className="space-y-8">
                  <FadeIn delay={0.3}>
                    <h2 className="text-heading-4 text-secondary dark:text-white  leading-tight">
                      {t('mobileMoney.payOut.title')}
                    </h2>
                  </FadeIn>
                  <FadeIn delay={0.4}>
                    <p className="text-secondary/60 dark:text-accent/60 leading-relaxed">
                      {t('mobileMoney.payOut.description')}
                    </p>
                  </FadeIn>
                </div>

                <ul className="grid grid-cols-1 gap-5">
                  {[
                    t('mobileMoney.payOut.features.items.instantTransfer'),
                    t('mobileMoney.payOut.features.items.compatible'),
                    t('mobileMoney.payOut.features.items.security'),
                    t('mobileMoney.payOut.features.items.available')
                  ].map((item, i) => (
                    <FadeIn key={i} delay={0.5 + (i * 0.1)}>
                      <li className="flex items-center gap-4 group">
                        <div className="size-8 rounded-full bg-primary-500/10 flex items-center justify-center group-hover:bg-primary-500 transition-colors duration-300">
                          <Check className="size-5 text-primary-500 group-hover:text-white" />
                        </div>
                        <span className="text-secondary/80 dark:text-accent/80">{item}</span>
                      </li>
                    </FadeIn>
                  ))}
                </ul>
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
                  {t('mobileMoney.cta.title')}
                  </h2>
                </FadeIn>
                <FadeIn delay={0.3}>
                  <p className="cb-lead">
                    {t('mobileMoney.cta.description')}
                  </p>
                </FadeIn>
                <FadeIn delay={0.4}>
                  <div className="cb-text-center">
                    <a href={REGISTER_URL_FREE} className="cb-btn">
                      <span className="inline-block first-letter:uppercase">
                        {t('mobileMoney.cta.button')}
                      </span>
                    </a>
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
