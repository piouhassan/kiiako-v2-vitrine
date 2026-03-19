'use client';

import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { FadeIn } from '@/components/animations/FadeIn';
import { SlideIn } from '@/components/animations/SlideIn';
import { ScaleIn } from '@/components/animations/ScaleIn';
import { Check, Cloud, Lock, Download, User, FileText, Music, Video, Image as ImageIcon, Zap, ArrowRight, Laptop, BookOpen, GraduationCap, PlayCircle, Palette, Globe, Store, ShoppingBag, Users } from 'lucide-react';
import {REGISTER_URL_FREE} from "@/lib/utls";
import { useTranslation, Trans } from 'react-i18next';

export default function ProduitsDigitauxPage() {
  const { t } = useTranslation();
  
  const productCards = [
    { title: "E-book PDF", price: "4.500", img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c", icon: BookOpen },
    { title: "Cours Vidéo", price: "25.000", img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3", icon: PlayCircle },
    { title: "Template Code", price: "15.000", img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085", icon: Laptop },
    { title: "Album Audio", price: "5.000", img: "https://images.unsplash.com/photo-1514525253361-bee8a187499b", icon: Music },
  ];

  return (
    <div className="bg-background-2 dark:bg-background-5 overflow-x-hidden">
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              
              {/* Left Column: Content */}
              <div className="space-y-10">
                <FadeIn delay={0.2}>
                  <span className="cb-badge">{t('produitsDigitaux.hero.badge')}</span>
                </FadeIn>
                
                <div className="space-y-8">
                  <FadeIn delay={0.3}>
                    <h1 className="text-heading-2">
                      <Trans i18nKey="produitsDigitaux.hero.title" components={{ 1: <span className="text-primary-500" /> }} />
                    </h1>
                  </FadeIn>
                  <FadeIn delay={0.4}>
                    <p className="text-secondary/60 dark:text-accent/60 max-w-xl leading-relaxed">
                      {t('produitsDigitaux.hero.subtitle')}
                    </p>
                  </FadeIn>
                </div>

                <FadeIn delay={0.5}>
                  <div className="flex flex-col sm:flex-row gap-6">
                    <a
                      href={REGISTER_URL_FREE}
                      className="cb-btn"
                    >
                      <span>{t('produitsDigitaux.hero.button')}</span>
                      <ArrowRight className="size-5" />
                    </a>
                  </div>
                </FadeIn>
              </div>

              {/* Right Column: Stacked Product Cards */}
              <div className="relative">
                <div className="grid grid-cols-2 gap-4 sm:gap-6 relative z-10">
                  {productCards.map((product, i) => (
                    <ScaleIn key={i} delay={0.4 + (0.1 * i)} duration={1.2} initialScale={0.8} className={i % 2 === 1 ? 'mt-8 sm:mt-12' : ''}>
                      <div className="group relative bg-white/40 dark:bg-white/[0.02] backdrop-blur-[80px] rounded-[40px] p-3 border border-white/30 dark:border-white/5 transition-all duration-1000 hover:-translate-y-4 hover:bg-white/50 dark:hover:bg-white/[0.04] shadow-xl">
                        
                        {/* Floating Image Container */}
                        <div className="relative aspect-square rounded-[30px] overflow-hidden bg-background-2 dark:bg-background-9/80 shadow-md group-hover:shadow-xl transition-all duration-1000">
                          {/* Ultra-minimal Icon Badge */}
                          <div className="absolute top-3 left-3 z-20">
                             <div className="size-8 rounded-full bg-white/80 dark:bg-background-9/80 backdrop-blur-3xl shadow-sm border border-white/20 dark:border-white/5 flex items-center justify-center">
                                <product.icon className="size-4 text-primary-500" />
                             </div>
                          </div>

                          {/* Image with extreme slow zoom */}
                          <img
                            src={`${product.img}?w=500&fit=crop`}
                            alt={product.title}
                            className="w-full h-full object-cover transform scale-100 group-hover:scale-115 transition-transform duration-[3000ms] ease-out opacity-90 group-hover:opacity-100"
                          />

                          {/* Action Button Reveal */}
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 z-20">
                             <div className="size-14 rounded-full bg-white dark:bg-white text-secondary shadow-lg scale-50 group-hover:scale-100 transition-transform duration-700 flex items-center justify-center">
                                <ShoppingBag className="size-6" />
                             </div>
                          </div>
                        </div>

                        {/* Minimal Info */}
                        <div className="pt-6 pb-4 px-2 flex flex-col items-center gap-3">
                           <div className="w-full space-y-2">
                              <div className="h-1 w-full bg-secondary/10 dark:bg-white/10 rounded-full animate-pulse group-hover:bg-primary-500/30"></div>
                              <div className="h-1 w-2/3 mx-auto bg-secondary/5 dark:bg-white/5 rounded-full animate-pulse delay-75 group-hover:bg-primary-500/20"></div>
                           </div>
                        </div>
                      </div>
                    </ScaleIn>
                  ))}
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-10 -right-10 size-40 bg-primary-500/10 blur-[80px] rounded-full z-0 animate-pulse"></div>
                <div className="absolute -bottom-10 -left-10 size-60 bg-secondary/5 blur-[100px] rounded-full z-0"></div>
              </div>

            </div>
          </div>
        </section>


        {/* Fonctionnalités principales */}
        <section id="fonctionnalites" className="py-24 bg-background-3 dark:bg-background-7">
          <div className="main-container px-4">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <FadeIn delay={0.1}>
                <h2 className="text-heading-3 mb-6 text-secondary dark:text-white">
                  <Trans i18nKey="produitsDigitaux.features.title" components={{ 1: <span className="text-primary-500" /> }} />
                </h2>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className=" text-secondary/60 dark:text-accent/60 leading-relaxed">
                  {t('produitsDigitaux.features.subtitle')}
                </p>
              </FadeIn>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(t('produitsDigitaux.features.items', { returnObjects: true }) as any[]).map((feat, i) => {
                const icons = [Cloud, FileText, Download, Lock, Zap, User];
                const Icon = icons[i];
                return (
                  <FadeIn key={i} delay={0.1 + (i * 0.05)}>
                    <div className="p-8 bg-white/40 dark:bg-white/[0.02] backdrop-blur-xl rounded-[32px] border border-white/20 dark:border-white/5 transition-all duration-500 hover:shadow-2xl hover:bg-white/60 dark:hover:bg-white/[0.04] group hover:-translate-y-2">
                      <div className="w-14 h-14 rounded-2xl bg-primary-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                        <Icon className="w-7 h-7 text-primary-500" />
                      </div>
                      <h3 className="text-xl  mb-3 text-secondary dark:text-white">{feat.title}</h3>
                      <p className="text-secondary/60 dark:text-accent/60 leading-relaxed font-medium">
                        {feat.desc}
                      </p>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-32 bg-background-2 dark:bg-background-5 relative overflow-hidden">
          {/* Decorative background blur */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-500/5 blur-[150px] rounded-full pointer-events-none"></div>
          
          <div className="main-container px-4 relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-20">
              <FadeIn delay={0.2}>
                <span className="cb-badge">{t('header.resources.categories')}</span>
                <h2 className="text-heading-3  text-secondary dark:text-white leading-tight">
                  <Trans i18nKey="produitsDigitaux.categories.title" components={{ 1: <span className="text-primary-500" /> }} />
                </h2>
              </FadeIn>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {(t('produitsDigitaux.categories.items', { returnObjects: true }) as string[]).map((label, index) => {
                const icons = [FileText, PlayCircle, Music, Video, Laptop, ImageIcon, FileText, Cloud];
                const Icon = icons[index];
                return (
                  <FadeIn key={index} delay={0.1 + index * 0.05}>
                    <div className="text-center space-y-6 p-10 rounded-[48px] bg-white/40 dark:bg-white/[0.02] backdrop-blur-xl border border-white/20 dark:border-white/5 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] hover:bg-white/60 dark:hover:bg-white/[0.04] transition-all duration-500 group">
                      <div className="flex justify-center">
                        <div className="w-20 h-20 rounded-3xl bg-primary-500 flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                          <Icon className="w-10 h-10 text-white" />
                        </div>
                      </div>
                      <h3 className="text-lg  text-secondary dark:text-white group-hover:text-primary-500 transition-colors">{label}</h3>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>


        {/* Creativity Section */}
        <section className="py-20 bg-background-1 dark:bg-background-6 overflow-hidden">
          <div className="main-container px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <div className="w-full lg:w-1/2 space-y-6">
                <FadeIn delay={0.2}>
                  <span className="cb-badge">{t('produitsDigitaux.creativity.badge')}</span>
                </FadeIn>
                <FadeIn delay={0.3}>
                  <h2 className="text-heading-3 text-secondary dark:text-white leading-tight">
                    {t('produitsDigitaux.creativity.title')}
                  </h2>
                </FadeIn>
                <FadeIn delay={0.4}>
                  <p className=" text-secondary/70 dark:text-accent/70 leading-relaxed">
                    {t('produitsDigitaux.creativity.description')}
                  </p>
                </FadeIn>
                <FadeIn delay={0.5}>
                  <div className="grid grid-cols-2 gap-4">
                    {(t('produitsDigitaux.creativity.items', { returnObjects: true }) as any[]).map((item, i) => (
                      <div key={i} className="p-4 rounded-2xl bg-background-2 dark:bg-background-7 border border-stroke-1 dark:border-stroke-7">
                        <span className="block font-bold text-primary-500">{item.title}</span>
                        <span className="text-sm opacity-70">{item.desc}</span>
                      </div>
                    ))}
                  </div>
                </FadeIn>
              </div>
              <div className="w-full lg:w-1/2">
                <FadeIn delay={0.4}>
                  <div className="relative aspect-square md:aspect-video lg:aspect-square rounded-[40px] overflow-hidden shadow-2xl border-8 border-white dark:border-background-7">
                    <img 
                      src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800" 
                      alt="Digital Creativity" 
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* Monetization Section */}
        <section className="py-20 bg-secondary text-white overflow-hidden relative">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

          <div className="main-container px-4 relative z-10">
            <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
              <div className="w-full lg:w-1/2">
                <FadeIn delay={0.3}>
                  <div className="relative aspect-square md:aspect-video lg:aspect-square rounded-[40px] overflow-hidden shadow-2xl border-8 border-white/20">
                    <img 
                      src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=800" 
                      alt="Passive Income Success" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                      <p className="text-sm font-medium mb-1 opacity-80 text-white">{t('botWhatsApp.Marchands.title', 'Nouvelle vente !')}</p>
                      <p className="text-2xl font-bold text-white">+25.000 FCFA</p>
                    </div>
                  </div>
                </FadeIn>
              </div>
              <div className="w-full lg:w-1/2 space-y-6">
                <FadeIn delay={0.2}>
                  <span className="cb-badge">{t('produitsDigitaux.monetization.badge')}</span>
                </FadeIn>
                <FadeIn delay={0.3}>
                  <h2 className="text-heading-3 text-white dark:text-white leading-tight">
                    {t('produitsDigitaux.monetization.title')}
                  </h2>
                </FadeIn>
                <FadeIn delay={0.4}>
                  <p className="text-white/80 leading-relaxed">
                    {t('produitsDigitaux.monetization.description')}
                  </p>
                </FadeIn>
                <FadeIn delay={0.5}>
                  <ul className="space-y-4">
                    {(t('produitsDigitaux.monetization.features', { returnObjects: true }) as string[]).map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="size-6 rounded-full bg-white/20 flex items-center justify-center">
                          <Check className="w-4 h-4" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* Security Section */}
        <section className="py-20 bg-background-3 dark:bg-background-7 overflow-hidden">
          <div className="main-container px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <div className="w-full lg:w-1/2 space-y-6">
                <FadeIn delay={0.2}>
                  <span className="cb-badge">{t('produitsDigitaux.security.badge')}</span>
                </FadeIn>
                <FadeIn delay={0.3}>
                  <h2 className="text-heading-3 dark:text-white leading-tight">
                    {t('produitsDigitaux.security.title')}
                  </h2>
                </FadeIn>
                <FadeIn delay={0.4}>
                  <p className="text-secondary/70 dark:text-accent/70 leading-relaxed">
                    {t('produitsDigitaux.security.description')}
                  </p>
                </FadeIn>
                <FadeIn delay={0.5}>
                  <div className="space-y-4">
                    {(t('produitsDigitaux.security.features', { returnObjects: true }) as any[]).map((feat, i) => {
                      const icons = [Zap, Cloud];
                      const Icon = icons[i];
                      return (
                        <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-white dark:bg-background-6 border border-stroke-1 dark:border-stroke-7 shadow-sm">
                          <div className={`size-10 rounded-full ${i === 0 ? 'bg-green-500/10' : 'bg-blue-500/10'} flex items-center justify-center flex-shrink-0`}>
                            <Icon className={`w-5 h-5 ${i === 0 ? 'text-green-500' : 'text-blue-500'}`} />
                          </div>
                          <div>
                            <span className="block font-bold">{feat.title}</span>
                            <span className="text-sm opacity-70">{feat.desc}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </FadeIn>
              </div>
              <div className="w-full lg:w-1/2">
                <FadeIn delay={0.4}>
                  <div className="relative aspect-square md:aspect-video lg:aspect-square rounded-[40px] overflow-hidden shadow-2xl border-8 border-white dark:border-background-8">
                    <img 
                      src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800" 
                      alt="Digital Security" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-primary-500/10 backdrop-none hover:backdrop-blur-[2px] transition-all duration-500"></div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cb-cta-section">
          <div className="cb-container px-4">
            <div className="cb-max-w-4xl cb-text-center space-y-8">
              <FadeIn delay={0.2}>
                <h2 className="text-heading-3">
                  {t('produitsDigitaux.cta.title')}
                </h2>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p className="">
                  {t('produitsDigitaux.cta.subtitle')}
                </p>
              </FadeIn>
              <FadeIn delay={0.4}>
                <div className="cb-text-center">
                  <a href={REGISTER_URL_FREE} className="cb-btn">
                    <span className="inline-block first-letter:uppercase">
                      {t('produitsDigitaux.cta.button')}
                    </span>
                  </a>
                </div>
              </FadeIn>
              <FadeIn delay={0.5}>
                <ul className="cb-footer-list">
                  {(t('produitsDigitaux.cta.perks', { returnObjects: true }) as string[]).map((perk, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary-500" />
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>
              </FadeIn>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
