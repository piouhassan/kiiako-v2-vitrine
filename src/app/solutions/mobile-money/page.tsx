'use client';

import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { FadeIn } from '@/components/animations/FadeIn';
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
        {/* Hero Section */}
        <section className="pb-14 pt-18 md:pb-16 md:pt-16 lg:pb-22 lg:pt-30 xl:pb-25 xl:pt-40">
          <div className="main-container">
            <div className="text-center space-y-6 mb-17.5">
              <FadeIn delay={0.2}>
                <span className="badge bg-primary-500 text-white">{t('mobileMoney.badge')}</span>
              </FadeIn>
              <FadeIn delay={0.3}>
                <h1 className="xl:max-w-[878px] max-w-[700px] mx-auto text-heading-2 lg:text-heading-1">
                  {t('mobileMoney.hero.title')}
                </h1>
              </FadeIn>
              <FadeIn delay={0.4}>
                <p className="xl:max-w-[700px] max-w-[600px] mx-auto text-lg">
                  {t('mobileMoney.hero.description')}
                </p>
              </FadeIn>
            </div>
            
           <FadeIn delay={0.5}>
             <RegionalCoverage />
           </FadeIn>
          </div>
        </section>

      
        <section className="py-20 bg-background-3 dark:bg-background-7">
          <div className="main-container">
             <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4">{t('mobileMoney.features.title')}</h2>
             </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: <Smartphone />, title: t('mobileMoney.features.items.mobileFirst.title'), desc: t('mobileMoney.features.items.mobileFirst.description') },
                { icon: <Zap />, title: t('mobileMoney.features.items.instantConfirmation.title'), desc: t('mobileMoney.features.items.instantConfirmation.description') },
                { icon: <Shield />, title: t('mobileMoney.features.items.security.title'), desc: t('mobileMoney.features.items.security.description') },
                { icon: <TrendingUp />, title: t('mobileMoney.features.items.dashboard.title'), desc: t('mobileMoney.features.items.dashboard.description') },
                { icon: <Check />, title: t('mobileMoney.features.items.highSuccessRate.title'), desc: t('mobileMoney.features.items.highSuccessRate.description') },
                { icon: <Clock />, title: t('mobileMoney.features.items.support.title'), desc: t('mobileMoney.features.items.support.description') }
              ].map((feat, i) => (
                <div key={i} className="feature-card p-6 bg-background-1 dark:bg-background-6 rounded-2xl border border-stroke-1 dark:border-stroke-7">
                  <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center mb-4">
                    <span className="text-primary-500">{feat.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feat.title}</h3>
                  <p className="text-secondary/70 dark:text-accent/70">{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

          {/* Section 2: Global Collection (Pay-In) */}
        <FadeIn delay={0.2}>
        <section className="py-24 bg-white dark:bg-background-6 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              {/* Content */}
              <div className="order-2 lg:order-1 space-y-8">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
                  <Globe className="w-3 h-3" />
                  {t('mobileMoney.payIn.badge')}
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-secondary dark:text-white tracking-tight">
                  {t('mobileMoney.payIn.title')}
                </h2>
                <p className="text-lg text-secondary/70 dark:text-accent/70 leading-relaxed">
                  {t('mobileMoney.payIn.description')}
                </p>
                
                <div className="space-y-4 pt-4">
                  <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-background-7 rounded-xl border border-gray-100 dark:border-white/5">
                    <div className="w-10 h-10 rounded-full bg-white dark:bg-white/10 flex items-center justify-center text-xl shadow-sm">🇧🇯</div>
                    <div>
                      <div className="font-bold text-gray-900 dark:text-white">{t('mobileMoney.payIn.benin.title')}</div>
                      <div className="text-sm text-gray-500">{t('mobileMoney.payIn.benin.description')}</div>
                    </div>
                    <ArrowRight className="ml-auto w-5 h-5 text-gray-400" />
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-background-7 rounded-xl border border-gray-100 dark:border-white/5">
                    <div className="w-10 h-10 rounded-full bg-white dark:bg-white/10 flex items-center justify-center text-xl shadow-sm">🇸🇳</div>
                    <div>
                      <div className="font-bold text-gray-900 dark:text-white">{t('mobileMoney.payIn.senegal.title')}</div>
                      <div className="text-sm text-gray-500">{t('mobileMoney.payIn.senegal.description')}</div>
                    </div>
                    <ArrowRight className="ml-auto w-5 h-5 text-gray-400" />
                  </div>
                </div>
              </div>

              {/* Visual: Connection Map */}
              <div className="order-1 lg:order-2 relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/10 to-transparent rounded-full blur-3xl" />
                
                {/* Central Hub Visual */}
                <div className="relative z-10 bg-white dark:bg-background-7 p-8 rounded-2xl border border-gray-200 dark:border-white/10 shadow-xl">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 bg-primary-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-primary-500/20">
                      <span className="text-white font-bold text-3xl">K</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{t('mobileMoney.payIn.visual.title')}</h3>
                    <p className="text-sm text-gray-500 mb-6">{t('mobileMoney.payIn.visual.subtitle')}</p>
                    
                    <div className="w-full h-px bg-gray-100 dark:bg-white/10 mb-6" />
                    
                    <div className="flex justify-between w-full text-sm">
                      <span className="text-gray-400">{t('mobileMoney.payIn.visual.totalLabel')}</span>
                      <span className="font-bold text-blue-500">+ 1,250,000 FCFA</span>
                    </div>
                  </div>

                  {/* Connected Dots Animation (Simplified CSS) */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-white dark:bg-background-8 rounded-full border border-gray-100 dark:border-white/10 flex items-center justify-center shadow-lg animate-bounce duration-[3000ms]">
                    <span className="text-xl">
                      <DollarSign className='w-5 h-5 text-primary-500' />
                    </span>
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-white dark:bg-background-8 rounded-full border border-gray-100 dark:border-white/10 flex items-center justify-center shadow-lg animate-bounce duration-[2500ms]">
                    <span className="text-xl">
                      <CreditCard className='w-5 h-5 text-primary-500' />
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
        </FadeIn>

         {/* Section 3: Direct Settlement (Pay-Out) */}
        <FadeIn delay={0.3}>
        <section className="py-24 bg-background-3 dark:bg-background-7">
      <div className="main-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Visual: Money Flow */}
          <div className="relative">
             <div className="bg-background-1 dark:bg-background-6 p-8 rounded-3xl border border-stroke-1 dark:border-stroke-7 shadow-lg relative z-10">
                {/* Source */}
                <div className="flex items-center justify-between mb-8 opacity-50">
                   <div className="flex items-center gap-3">
                     <div className="w-10 h-10 rounded-full bg-primary-500/10 flex items-center justify-center">
                       <Building2 className="w-5 h-5 text-primary-500" />
                     </div>
                     <span className="font-medium text-secondary dark:text-white">{t('mobileMoney.payOut.visual.kiiakoBalance')}</span>
                   </div>
                   <span className="font-mono text-secondary/50">XKii-8821</span>
                </div>

                {/* Arrow */}
                <div className="flex justify-center -my-5 relative z-20">
                   <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                     <ArrowDown className="w-5 h-5 animate-pulse" />
                   </div>
                </div>

                {/* Destination */}
                <div className="flex items-center justify-between mt-8 p-4 bg-blue-50 dark:bg-blue-900/10 rounded-xl border border-blue-100 dark:border-blue-500/20">
                   <div className="flex items-center gap-3">
                     <div className="w-10 h-10 rounded-full bg-white dark:bg-background-7 flex items-center justify-center shadow-sm">
                       <Wallet className="w-5 h-5 text-blue-600" />
                     </div>
                     <div>
                       <div className="font-bold text-secondary dark:text-white">{t('mobileMoney.payOut.visual.mobileMoney')}</div>
                       <div className="text-xs text-blue-600 dark:text-blue-400">{t('mobileMoney.payOut.visual.transferLabel')}</div>
                     </div>
                   </div>
                   <span className="font-bold text-lg text-secondary dark:text-white">150,000 FCFA</span>
                </div>
             </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider">
              <Wallet className="w-3 h-3" />
              {t('mobileMoney.payOut.badge')}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary dark:text-white tracking-tight">
              {t('mobileMoney.payOut.title')}
            </h2>
            <p className="text-lg text-secondary/70 dark:text-accent/70 leading-relaxed">
              {t('mobileMoney.payOut.description')}
            </p>

            <ul className="space-y-4">
              {[
                t('mobileMoney.payOut.features.items.instantTransfer'),
                t('mobileMoney.payOut.features.items.compatible'),
                t('mobileMoney.payOut.features.items.security'),
                t('mobileMoney.payOut.features.items.available')
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <span className="text-secondary/80 dark:text-accent/80 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
        </FadeIn>

        {/* CTA Section */}
        <section className="cb-cta-section">
            <div className="cb-container">
              <div className="cb-max-w-4xl cb-text-center space-y-8">
                <FadeIn delay={0.2}>
                  <h2 className="text-heading-2">
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
