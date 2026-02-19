'use client';

import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { FadeIn } from '@/components/animations/FadeIn';
import { SlideIn } from '@/components/animations/SlideIn';
import { Check, Shield, Lock, FileCheck, AlertTriangle, BarChart3, TrendingUp, Eye, Key, Smartphone, CreditCard, Server, Building2 } from 'lucide-react';
import {REGISTER_URL_FREE} from "@/lib/utls";
import { useTranslation } from 'react-i18next';

export default function SecuritePaiementsPage() {
  const { t } = useTranslation();
  return (
      <div className="bg-background-1 dark:bg-background-6">
        <Header />
        <main>
          {/* Hero Section - Design sécurité renforcée */}
          <section className="security-hero-bg relative overflow-hidden pb-14 pt-18 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[120px] xl:pb-[100px] xl:pt-[160px]">
            {/* Background pattern de sécurité */}
            <div
                className="absolute inset-0 bg-gradient-to-br from-green-50/30 via-transparent to-emerald-50/20 dark:from-green-900/10 dark:via-transparent dark:to-emerald-900/10"></div>
            <div
                className="absolute top-20 right-10 w-64 h-64 bg-green-500/5 rounded-full blur-3xl security-float"></div>
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl security-float"
                 style={{animationDelay: '2s'}}></div>

            <div className="main-container relative z-10">

              {/* Contenu textuel centré en dessous */}
              <div className="text-center max-w-4xl mx-auto space-y-8">
                <FadeIn delay={0.4}>
                  <div className="flex items-center justify-center gap-3">
                    <span className="badge bg-green-500 text-white">{t('securitePaiements.badge')}</span>
                  </div>
                </FadeIn>

                <FadeIn delay={0.5}>
                  <h1 className="text-heading-2 lg:text-heading-1 font-bold">
                    {t('securitePaiements.hero.title')}
                  </h1>
                </FadeIn>

                <FadeIn delay={0.6}>
                  <p className="text-lg text-secondary/80 dark:text-accent/80 leading-relaxed">
                    {t('securitePaiements.hero.description')}
                  </p>
                </FadeIn>
              </div>
            </div>
          </section>

          {/* Fonctionnalités de sécurité */}
          <section id="securite" className="py-20 bg-background-3 dark:bg-background-7">
            <div className="main-container">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <FadeIn delay={0.1}>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    {t('securitePaiements.features.title')}
                  </h2>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <p className="text-lg dark:text-accent/70">
                    {t('securitePaiements.features.description')}
                  </p>
                </FadeIn>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <FadeIn delay={0.2}>
                  <div
                      className="feature-card p-6 bg-background-1 dark:bg-background-6 rounded-2xl border border-stroke-1 dark:border-stroke-7">
                    <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center mb-4">
                      <Shield className="w-6 h-6 text-primary-500"/>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{t('securitePaiements.features.items.paydunya.title')}</h3>
                    <p className="text-secondary/70 dark:text-accent/70">
                      {t('securitePaiements.features.items.paydunya.description')}
                    </p>
                  </div>
                </FadeIn>

                <FadeIn delay={0.25}>
                  <div
                      className="feature-card p-6 bg-background-1 dark:bg-background-6 rounded-2xl border border-stroke-1 dark:border-stroke-7">
                    <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center mb-4">
                      <Lock className="w-6 h-6 text-primary-500"/>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{t('securitePaiements.features.items.ssl.title')}</h3>
                    <p className="text-secondary/70 dark:text-accent/70">
                      {t('securitePaiements.features.items.ssl.description')}
                    </p>
                  </div>
                </FadeIn>

                <FadeIn delay={0.3}>
                  <div
                      className="feature-card p-6 bg-background-1 dark:bg-background-6 rounded-2xl border border-stroke-1 dark:border-stroke-7">
                    <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center mb-4">
                      <FileCheck className="w-6 h-6 text-primary-500"/>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{t('securitePaiements.features.items.validation.title')}</h3>
                    <p className="text-secondary/70 dark:text-accent/70">
                      {t('securitePaiements.features.items.validation.description')}
                    </p>
                  </div>
                </FadeIn>

                <FadeIn delay={0.35}>
                  <div
                      className="feature-card p-6 bg-background-1 dark:bg-background-6 rounded-2xl border border-stroke-1 dark:border-stroke-7">
                    <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center mb-4">
                      <AlertTriangle className="w-6 h-6 text-primary-500"/>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{t('securitePaiements.features.items.antifraud.title')}</h3>
                    <p className="text-secondary/70 dark:text-accent/70">
                      {t('securitePaiements.features.items.antifraud.description')}
                    </p>
                  </div>
                </FadeIn>

                <FadeIn delay={0.4}>
                  <div
                      className="feature-card p-6 bg-background-1 dark:bg-background-6 rounded-2xl border border-stroke-1 dark:border-stroke-7">
                    <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center mb-4">
                      <TrendingUp className="w-6 h-6 text-primary-500"/>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{t('securitePaiements.features.items.history.title')}</h3>
                    <p className="text-secondary/70 dark:text-accent/70">
                      {t('securitePaiements.features.items.history.description')}
                    </p>
                  </div>
                </FadeIn>

                <FadeIn delay={0.45}>
                  <div
                      className="feature-card p-6 bg-background-1 dark:bg-background-6 rounded-2xl border border-stroke-1 dark:border-stroke-7">
                    <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center mb-4">
                      <BarChart3 className="w-6 h-6 text-primary-500"/>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{t('securitePaiements.features.items.reports.title')}</h3>
                    <p className="text-secondary/70 dark:text-accent/70">
                      {t('securitePaiements.features.items.reports.description')}
                    </p>
                  </div>
                </FadeIn>
              </div>
            </div>
          </section>

          <section className="lg:py-[100px] pt-16 md:pt-20 lg:pb-[200px] md:pb-[100px] pb-16">
            <div className="main-container">
              <div className="grid grid-cols-12 xl:gap-[100px] lg:gap-20 gap-y-16 items-center">
                <div className="col-span-12 lg:col-span-6">
                  <div className="sm:space-y-8 space-y-5 lg:mx-0 mx-auto lg:max-w-full max-w-[500px]">
                    <div className="space-y-3">
                      <FadeIn delay={0.2}>
                        <h2>{t('securitePaiements.custom.title')}</h2>
                      </FadeIn>
                      <FadeIn delay={0.3}>
                        <p>
                          {t('securitePaiements.custom.description')}
                        </p>
                      </FadeIn>
                    </div>
                    <div>
                      <ul className="sm:space-y-2 space-y-1">
                        <FadeIn delay={0.4}>
                          <li className="p-2 flex items-center gap-4">
                            <Shield className="w-6 h-6 text-primary-500" />
                            <span className="text-tagline-1 font-medium text-secondary dark:text-accent">
                              {t('securitePaiements.custom.items.adapted')}
                            </span>
                          </li>
                        </FadeIn>
                        <FadeIn delay={0.5}>
                          <li className="p-2 flex items-center gap-4">
                            <Lock className="w-6 h-6 text-primary-500" />
                            <span className="text-tagline-1 font-medium text-secondary dark:text-accent">
                              {t('securitePaiements.custom.items.customizable')}
                            </span>
                          </li>
                        </FadeIn>
                        <FadeIn delay={0.6}>
                          <li className="p-2 flex items-center gap-4">
                            <Check className="w-6 h-6 text-primary-500" />
                            <span className="text-tagline-1 font-medium text-secondary dark:text-accent">
                              {t('securitePaiements.custom.items.realtime')}
                            </span>
                          </li>
                        </FadeIn>
                        <FadeIn delay={0.7}>
                          <li className="p-2 flex items-center gap-4">
                            <Eye className="w-6 h-6 text-primary-500" />
                            <span className="text-tagline-1 font-medium text-secondary dark:text-accent">
                              {t('securitePaiements.custom.items.monitoring')}
                            </span>
                          </li>
                        </FadeIn>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-6">
                  <SlideIn direction="right" delay={0.2}>
                    <figure className="lg:max-w-[669px] max-w-[500px] lg:mx-0 mx-auto w-full">
                    <img
                        src="/images/ns-img-208.png"
                        alt="select-us-reason"
                        className="size-full dark:hidden"
                    />
                    <img
                        src="/images/ns-img-dark-141.png"
                        alt="select-us-reason"
                        className="size-full dark:block hidden"
                    />
                    </figure>
                  </SlideIn>
                </div>
              </div>
            </div>
          </section>

          {/* Engagements de sécurité */}
          <section className="py-20">
            <div className="main-container">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <FadeIn delay={0.2}>
                    <span className="badge bg-primary-500 text-white">{t('securitePaiements.commitments.badge')}</span>
                  </FadeIn>
                  <FadeIn delay={0.3}>
                    <h2 className="text-3xl md:text-4xl font-bold">
                      {t('securitePaiements.commitments.title')}
                    </h2>
                  </FadeIn>
                  <FadeIn delay={0.4}>
                    <p className="text-lg text-secondary/80 dark:text-accent/80">
                      {t('securitePaiements.commitments.description')}
                    </p>
                  </FadeIn>
                </div>

                <div className="space-y-4">
                  <FadeIn delay={0.45}>
                    <div
                        className="flex gap-4 p-5 rounded-2xl bg-background-2 dark:bg-background-5 border border-stroke-1 dark:border-stroke-7">
                      <div
                          className="w-10 h-10 rounded-full bg-primary-500/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-5 h-5 text-primary-500"/>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1">{t('securitePaiements.commitments.items.traceability')}</h3>
                        <p className="text-secondary/70 dark:text-accent/70">
                          {t('securitePaiements.commitments.items.traceability.description')}
                        </p>
                      </div>
                    </div>
                  </FadeIn>

                  <FadeIn delay={0.5}>
                    <div
                        className="flex gap-4 p-5 rounded-2xl bg-background-2 dark:bg-background-5 border border-stroke-1 dark:border-stroke-7">
                      <div
                          className="w-10 h-10 rounded-full bg-primary-500/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-5 h-5 text-primary-500"/>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1">{t('securitePaiements.commitments.items.alerts')}</h3>
                        <p className="text-secondary/70 dark:text-accent/70">
                          {t('securitePaiements.commitments.items.alerts.description')}
                        </p>
                      </div>
                    </div>
                  </FadeIn>

                  <FadeIn delay={0.55}>
                    <div
                        className="flex gap-4 p-5 rounded-2xl bg-background-2 dark:bg-background-5 border border-stroke-1 dark:border-stroke-7">
                      <div
                          className="w-10 h-10 rounded-full bg-primary-500/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-5 h-5 text-primary-500"/>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1">{t('securitePaiements.commitments.items.experience')}</h3>
                        <p className="text-secondary/70 dark:text-accent/70">
                          {t('securitePaiements.commitments.items.experience.description')}
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Sécurité */}
          <section className="py-20 bg-background-2 dark:bg-background-5">
            <div className="main-container">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <FadeIn delay={0.1}>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    {t('securitePaiements.faq.title')}
                  </h2>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <p className="text-lg text-secondary/80 dark:text-accent/80">
                    {t('securitePaiements.faq.description')}
                  </p>
                </FadeIn>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FadeIn delay={0.25}>
                  <div
                      className="p-6 bg-background-1 dark:bg-background-6 rounded-2xl border border-stroke-1 dark:border-stroke-7">
                    <h3 className="text-xl font-bold mb-2">{t('securitePaiements.faq.items.protection.title')}</h3>
                    <p className="text-secondary/70 dark:text-accent/70">
                      {t('securitePaiements.faq.items.protection.description')}
                    </p>
                  </div>
                </FadeIn>

                <FadeIn delay={0.3}>
                  <div
                      className="p-6 bg-background-1 dark:bg-background-6 rounded-2xl border border-stroke-1 dark:border-stroke-7">
                    <h3 className="text-xl font-bold mb-2">{t('securitePaiements.faq.items.anomaly.title')}</h3>
                    <p className="text-secondary/70 dark:text-accent/70">
                      {t('securitePaiements.faq.items.anomaly.description')}
                    </p>
                  </div>
                </FadeIn>

                <FadeIn delay={0.35}>
                  <div
                      className="p-6 bg-background-1 dark:bg-background-6 rounded-2xl border border-stroke-1 dark:border-stroke-7">
                    <h3 className="text-xl font-bold mb-2">{t('securitePaiements.faq.items.history.title')}</h3>
                    <p className="text-secondary/70 dark:text-accent/70">
                      {t('securitePaiements.faq.items.history.description')}
                    </p>
                  </div>
                </FadeIn>

                <FadeIn delay={0.4}>
                  <div
                      className="p-6 bg-background-1 dark:bg-background-6 rounded-2xl border border-stroke-1 dark:border-stroke-7">
                    <h3 className="text-xl font-bold mb-2">{t('securitePaiements.faq.items.confirmation.title')}</h3>
                    <p className="text-secondary/70 dark:text-accent/70">
                      {t('securitePaiements.faq.items.confirmation.description')}
                    </p>
                  </div>
                </FadeIn>
              </div>
            </div>
          </section>

          {/* Processus sécurisé en timeline */}
          <section className="py-[100px] lg:py-[150px]">
            <div className="main-container">
              <div className="text-center space-y-3 mb-[70px]">
                <FadeIn delay={0.2}>
                  <span className="badge bg-primary-500 text-white">{t('securitePaiements.process.badge')}</span>
                </FadeIn>
                <FadeIn delay={0.3}>
                  <h2 className="xl:max-w-[878px] max-w-[600px] mx-auto">
                    {t('securitePaiements.process.title')}
                  </h2>
                </FadeIn>
              </div>

              <div className="max-w-4xl mx-auto space-y-8">
                <FadeIn delay={0.4}>
                  <div className="flex gap-6 items-start">
                    <div
                        className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-blue-500 text-white flex items-center justify-center font-bold text-xl">
                      1
                    </div>
                    <div className="flex-1">
                      <h3 className="text-heading-5 mb-2">{t('securitePaiements.process.items.client.title')}</h3>
                      <p className="text-secondary/80 dark:text-accent/80">
                        {t('securitePaiements.process.items.client.description')}
                      </p>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn delay={0.5}>
                  <div className="flex gap-6 items-start">
                    <div
                        className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 text-white flex items-center justify-center font-bold text-xl">
                      2
                    </div>
                    <div className="flex-1">
                      <h3 className="text-heading-5 mb-2">{t('securitePaiements.process.items.redirection.title')}</h3>
                      <p className="text-secondary/80 dark:text-accent/80">
                        {t('securitePaiements.process.items.redirection.description')}
                      </p>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn delay={0.6}>
                  <div className="flex gap-6 items-start">
                    <div
                        className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-white flex items-center justify-center font-bold text-xl">
                      3
                    </div>
                    <div className="flex-1">
                      <h3 className="text-heading-5 mb-2">{t('securitePaiements.process.items.ussd.title')}</h3>
                      <p className="text-secondary/80 dark:text-accent/80">
                        {t('securitePaiements.process.items.ussd.description')}
                      </p>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn delay={0.7}>
                  <div className="flex gap-6 items-start">
                    <div
                        className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 text-white flex items-center justify-center font-bold text-xl">
                      4
                    </div>
                    <div className="flex-1">
                      <h3 className="text-heading-5 mb-2">{t('securitePaiements.process.items.confirmation.title')}</h3>
                      <p className="text-secondary/80 dark:text-accent/80">
                        {t('securitePaiements.process.items.confirmation.description')}
                      </p>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn delay={0.8}>
                  <div className="flex gap-6 items-start">
                    <div
                        className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 text-white flex items-center justify-center font-bold text-xl">
                      5
                    </div>
                    <div className="flex-1">
                      <h3 className="text-heading-5 mb-2">{t('securitePaiements.process.items.validation.title')}</h3>
                      <p className="text-secondary/80 dark:text-accent/80">
                        {t('securitePaiements.process.items.validation.description')}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="cb-cta-section">
            <div className="cb-container">
              <div className="cb-max-w-4xl cb-text-center space-y-8">
                <FadeIn delay={0.2}>
                  <h2 className="text-heading-2">
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
