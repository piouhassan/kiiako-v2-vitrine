'use client';

import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { FadeIn } from '@/components/animations/FadeIn';
import { Search, MessageSquare, Shield, CreditCard, Box, Settings, Globe, Users, ShoppingBag, Mail, Truck, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useTranslation, Trans } from 'react-i18next';

export default function HelpCenterPage() {
  const { t } = useTranslation();

  const categoriesText = t('ressourcesAide.categories', { returnObjects: true }) as any[];
  const categories = [
    { icon: Shield, ...categoriesText[0] },
    { icon: Settings, ...categoriesText[1] },
    { icon: Globe, ...categoriesText[2] },
    { icon: Box, ...categoriesText[3] },
    { icon: CreditCard, ...categoriesText[4] },
    { icon: ShoppingBag, ...categoriesText[5] },
    { icon: Truck, ...categoriesText[6] },
    { icon: Users, ...categoriesText[7] },
    { icon: Mail, ...categoriesText[8] },
  ];

  const faqs = t('ressourcesAide.popularQuestions.items', { returnObjects: true }) as string[];

  return (
    <div className="bg-background-1 dark:bg-background-6 min-h-screen">
      <Header />
      <main>
        {/* Search Hero */}
        <section className="xl:pt-[180px] md:pt-42 sm:pt-36 pt-32 pb-24 bg-gradient-to-b from-primary-500/5 to-transparent">
          <div className="main-container max-w-4xl text-center space-y-12">
            <FadeIn>
              <h1 className="text-heading-3 md:text-heading-2  mb-4">
                <Trans i18nKey="ressourcesAide.hero.title" components={{ 1: <span className="text-primary-500" /> }} />
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary/40 dark:text-accent/40" />
                <input 
                  type="text" 
                  placeholder={t('ressourcesAide.hero.placeholder')} 
                  className="w-full h-16 pl-14 pr-6 rounded-2xl bg-white dark:bg-background-7 border border-stroke-1 dark:border-white/10 shadow-2xl shadow-primary-500/5 focus:ring-2 focus:ring-primary-500 outline-none transition-all"
                />
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="py-20">
          <div className="main-container">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((cat, idx) => (
                <FadeIn key={idx} delay={idx * 0.1}>
                  <Link href={`#`} className="group p-8 rounded-[32px] bg-white dark:bg-background-7 border border-stroke-1 dark:border-white/5 hover:border-primary-500/30 transition-all duration-300 block space-y-4">
                    <div className="size-12 rounded-2xl bg-primary-500/10 flex items-center justify-center group-hover:bg-primary-500 transition-colors duration-300">
                      <cat.icon className="w-6 h-6 text-primary-500 group-hover:text-white" />
                    </div>
                    <div>
                      <h3 className="text-tagline-1 font-bold mb-1">{cat.title}</h3>
                      <p className="text-xs text-primary-500 font-medium">{cat.count}</p>
                    </div>
                    <p className="text-secondary/60 dark:text-accent/60 text-xs leading-relaxed">
                      {cat.description}
                    </p>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Questions & Contact */}
        <section className="pb-32">
          <div className="main-container">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* FAQ List */}
              <div className="space-y-8">
                <FadeIn>
                  <h2 className="text-heading-5 font-bold">{t('ressourcesAide.popularQuestions.title')}</h2>
                </FadeIn>
                <div className="space-y-4">
                  {faqs.map((q, idx) => (
                    <FadeIn key={idx} delay={idx * 0.1}>
                      <Link href={`/ressources/aide/mon-compte`} className="w-full p-6 rounded-2xl border border-stroke-1 dark:border-white/5 bg-white dark:bg-background-7 flex items-center justify-between group hover:bg-background-2 dark:hover:bg-background-8 transition-colors">
                        <span className="text-sm font-medium text-secondary/80 dark:text-accent/80">{q}</span>
                        <ArrowRight className="w-4 h-4 text-primary-500 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </FadeIn>
                  ))}
                </div>
              </div>

              {/* Support Card */}
              <FadeIn delay={0.4}>
                <div className="p-12 rounded-[48px] bg-background-3 dark:bg-background-7 border border-stroke-1 dark:border-white/5 space-y-8 relative overflow-hidden">
                  <div className="size-16 rounded-[24px] bg-white dark:bg-background-6 flex items-center justify-center shadow-14">
                    <MessageSquare className="w-8 h-8 text-primary-500" />
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-heading-4 font-bold">{t('ressourcesAide.contact.title')}</h2>
                    <p className="text-secondary/60 dark:text-accent/60 leading-relaxed">
                      {t('ressourcesAide.contact.description')}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-4 pt-4">
                    <Link href="/solutions/contact" className="btn btn-primary px-8">{t('ressourcesAide.contact.contactBtn')}</Link>
                    <button className="btn bg-white dark:bg-background-6 border border-stroke-1 dark:border-white/10 px-8">{t('ressourcesAide.contact.chatBtn')}</button>
                  </div>
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
