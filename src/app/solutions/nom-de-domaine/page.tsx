'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { FadeIn } from '@/components/animations/FadeIn';
import { useTranslation } from 'react-i18next';
import { Check, Globe, Shield, TrendingUp, Zap, Lock, ArrowRight, X, Clock, Circle, ChevronLeft, ChevronRight, RotateCcw, Home, Star, Wrench, Settings } from 'lucide-react';
import {REGISTER_URL_FREE} from "@/lib/utls";

export default function NomDeDomainePage() {
  const { t } = useTranslation();
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const shopNames = ['maboutique', 'fashionstore', 'techworld', 'artisanat', 'beautyshop','afiwashop','lolitastore','akpeneboutique','kokoutech','mardiyabeauty'];

  useEffect(() => {
    const currentName = shopNames[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < currentName.length) {
          setCurrentText(currentName.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((currentIndex + 1) % shopNames.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting]);

  return (
      <div className="bg-background-1 dark:bg-background-6">
        <Header />
        <main>
          {/* Hero Section modernisé avec démo interactive */}

          <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
              <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-500/10 blur-[120px] rounded-full"></div>
              <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full"></div>
            </div>

            <div className="main-container relative z-10 px-4">
              <div className="max-w-4xl mx-auto text-center">
                <FadeIn delay={0.2}>
                  <span className="cb-badge mb-8">
                    {t('nomDeDomaine.hero.badge')}
                  </span>
                </FadeIn>

                <div className="space-y-8 mb-16">
                  <FadeIn delay={0.3}>
                    <h1 className="text-heading-2 text-secondary dark:text-white leading-tight">
                      {t('nomDeDomaine.hero.title')}
                    </h1>
                  </FadeIn>

                  <FadeIn delay={0.4}>
                    <p className="text-secondary/60 dark:text-accent/60 max-w-2xl mx-auto leading-relaxed">
                      {t('nomDeDomaine.hero.subtitle')}
                    </p>
                  </FadeIn>
                </div>

                {/* Safari Browser Mockup - Premium Refinement */}
                <FadeIn delay={0.5}>
                  <div className="relative group">
                    {/* Decorative glow behind browser */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 to-blue-500/20 blur-2xl rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    
                    <div className="relative bg-white dark:bg-background-8 rounded-3xl border border-stroke-1 dark:border-white/5 shadow-2xl overflow-hidden backdrop-blur-xl">
                      {/* Safari Title Bar */}
                      <div className="flex items-center justify-between px-6 py-4 border-b border-stroke-1 dark:border-white/5 bg-background-3/50 dark:bg-white/[0.02]">
                        <div className="flex gap-2">
                          <div className="size-3 rounded-full bg-[#FF5F56]"></div>
                          <div className="size-3 rounded-full bg-[#FFBD2E]"></div>
                          <div className="size-3 rounded-full bg-[#27C93F]"></div>
                        </div>
                        <div className="text-[11px] font-medium text-secondary/40 dark:text-accent/40 tracking-widest uppercase">Safari</div>
                        <div className="w-12"></div>
                      </div>

                      {/* Safari Toolbar */}
                      <div className="flex items-center gap-4 px-6 py-3 bg-background-2/50 dark:bg-white/[0.01] border-b border-stroke-1 dark:border-white/5">
                        <div className="flex gap-3 text-secondary/40 dark:text-accent/40">
                          <ChevronLeft className="size-4" />
                          <ChevronRight className="size-4" />
                        </div>
                        
                        {/* Premium Address Bar */}
                        <div className="flex-1 relative flex items-center justify-center h-10 bg-white dark:bg-background-7 rounded-xl border border-stroke-1 dark:border-white/5 px-4">
                          <Lock className="absolute left-4 size-3.5 text-primary-500" />
                          <div className="flex items-center gap-0.5 text-sm font-medium tracking-tight">
                            <span className="text-secondary/30 dark:text-accent/30">https://</span>
                            <span className="text-secondary dark:text-white lowercase">
                              {currentText}
                              <span className="inline-block w-0.5 h-4 bg-primary-500 ml-0.5 animate-pulse align-middle"></span>
                            </span>
                            <span className="text-primary-500 font-bold">.kiiako.shop</span>
                          </div>
                        </div>

                        <div className="flex gap-3 text-secondary/40 dark:text-accent/40">
                          <RotateCcw className="size-4" />
                          <Star className="size-4" />
                        </div>
                      </div>

                      {/* Browser Content */}
                      <div className="aspect-[16/9] flex items-center justify-center bg-background-1 dark:bg-background-6 relative">
                        {/* Content Placeholder with Glassmorphism */}
                        <div className="text-center space-y-6">
                          <div className="size-20 lg:size-24 rounded-3xl bg-primary-500/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-700">
                            <Globe className="size-10 lg:size-12 text-primary-500" />
                          </div>
                          <div className="space-y-2">
                            <h3 className="text-xl lg:text-2xl text-secondary dark:text-white tracking-tight">
                              {t('nomDeDomaine.hero.browser_title')}
                            </h3>
                            <p className="text-primary-500 font-bold">
                              {currentText ? `${currentText}.kiiako.shop` : 'votre-domaine.kiiako.shop'}
                            </p>
                          </div>
                        </div>

                        {/* Floating elements for depth */}
                        <div className="absolute top-10 left-10 size-12 rounded-2xl bg-white/50 dark:bg-white/[0.05] border border-white/20 backdrop-blur-md animate-float"></div>
                        <div className="absolute bottom-10 right-10 size-16 rounded-3xl bg-white/50 dark:bg-white/[0.05] border border-white/20 backdrop-blur-md animate-float" style={{ animationDelay: '1s' }}></div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </section>

          <section className="py-24 lg:py-32 bg-background-3 dark:bg-background-7 relative overflow-hidden">
             {/* Decorative background glows */}
             <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary-500/5 blur-[120px] rounded-full pointer-events-none"></div>
             
            <div className="main-container relative z-10 px-4">
              <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
                <FadeIn delay={0.1}>
                  <h2 className="text-heading-3 text-secondary dark:text-white">
                    {t('nomDeDomaine.features.title')}
                  </h2>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <p className="text-secondary/60 dark:text-accent/60 leading-relaxed">
                    {t('nomDeDomaine.features.subtitle')}
                  </p>
                </FadeIn>
              </div>
 
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { key: 'automatic', icon: Zap },
                  { key: 'professional', icon: Globe },
                  { key: 'ssl', icon: Lock },
                  { key: 'config', icon: Clock },
                  { key: 'zero', icon: Check },
                  { key: 'seo', icon: TrendingUp }
                ].map((feature, idx) => (
                  <FadeIn key={feature.key} delay={0.2 + (idx * 0.1)}>
                    <div className="group p-8 bg-white/40 dark:bg-white/[0.02] backdrop-blur-xl rounded-[32px] border border-white/20 dark:border-white/5 hover:border-primary-500/50 transition-all duration-500 hover:shadow-2xl">
                      <div className="w-14 h-14 rounded-2xl bg-primary-500/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-sm">
                        <feature.icon className="size-7 text-primary-500" />
                      </div>
                      <h3 className="text-xl text-secondary dark:text-white mb-4 tracking-tight">
                        {t(`nomDeDomaine.features.items.${feature.key}.title`)}
                      </h3>
                      <p className="text-secondary/60 dark:text-accent/60 leading-relaxed">
                        {t(`nomDeDomaine.features.items.${feature.key}.description`)}
                      </p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </section>

          {/* Galaxie de noms de domaine - Premium Solar System */}
          <section className="py-24 lg:py-32 bg-background-2 dark:bg-background-8 relative overflow-hidden">
            <div className="main-container relative z-10 px-4">
              <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
                <FadeIn delay={0.1}>
                  <span className="cb-badge">
                    {t('nomDeDomaine.galaxy.badge')}
                  </span>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <h2 className="text-heading-3 text-secondary dark:text-white">
                    {t('nomDeDomaine.galaxy.title')}
                  </h2>
                </FadeIn>
                <FadeIn delay={0.3}>
                  <p className="text-secondary/60 dark:text-accent/60 leading-relaxed">
                    {t('nomDeDomaine.galaxy.subtitle')}
                  </p>
                </FadeIn>
              </div>

              <FadeIn delay={0.4}>
                <div className="domain-galaxy-modern">
                  <div className="domain-solar-system">
                    <div className="galaxy-hub">
                      <div className="hub-domain text-3xl">🤖</div>
                    </div>

                    {/* Connection lines */}
                    <div className="connection-lines opacity-20">
                      {[0, 45, 90, 135, 180, 225, 270, 315].map(deg => (
                        <div key={deg} className="connection-line" style={{ transform: `rotate(${deg}deg)` }}></div>
                      ))}
                    </div>

                    {/* Store cards - Refined styling */}
                    {[
                      { delay: '0.2s', top: '10%', left: '43%', name: 'fashion.kiiako.shop', cat: 'Mode', badge: 'NEW', type: 'fashion' },
                      { delay: '0.4s', top: '18%', left: '65%', name: 'maboutique.kiiako.shop', cat: 'Tech', badge: 'TOP', type: 'tech' },
                      { delay: '0.6s', top: '30%', left: '75%', name: 'tech.kiiako.shop', cat: 'Beauté', type: 'beauty' },
                      { delay: '0.8s', top: '45%', left: '75%', name: 'beauty.kiiako.shop', cat: 'Artisanat', badge: 'HOT', type: 'artisan' },
                      { delay: '1s', top: '60%', left: '65%', name: 'store.kiiako.shop', cat: 'Sport', type: 'sport' },
                      { delay: '1.2s', top: '72%', left: '43%', name: 'boutique.kiiako.shop', cat: 'Maison', badge: 'SALE', type: 'home' },
                      { delay: '1.4s', top: '60%', left: '15%', name: 'artisan.kiiako.shop', cat: 'Mode', type: 'fashion' },
                      { delay: '1.6s', top: '45%', left: '5%', name: 'sport.kiiako.shop', cat: 'Tech', badge: 'PRO', type: 'tech' },
                      { delay: '1.8s', top: '30%', left: '5%', name: 'afiwashop.kiiako.shop', cat: 'Beauté', type: 'beauty' },
                      { delay: '2s', top: '18%', left: '15%', name: 'lolitastore.kiiako.shop', cat: 'Artisanat', badge: 'VIP', type: 'artisan' }
                    ].map((node, i) => (
                      <div key={i} className="domain-node" style={{ '--delay': node.delay, top: node.top, left: node.left, transform: 'translate(-50%, -50%)' } as React.CSSProperties}>
                        <div className={`store-card ${node.type} bg-white/80 dark:bg-background-8/80 backdrop-blur-md border border-white/20 dark:border-white/5 shadow-xl`}>
                          <div className="store-card-image bg-background-3 dark:bg-background-7">
                            {node.badge && <div className="store-card-badge bg-primary-500 text-white font-bold">{node.badge}</div>}
                          </div>
                          <div className="store-card-content">
                            <div className="store-card-name text-xs font-bold text-secondary dark:text-white truncate">https://{node.name}</div>
                            <div className="store-card-category text-[10px] text-primary-500 uppercase font-black">{node.cat}</div>
                            <div className="store-card-rating">
                              {[1, 2, 3, 4, 5].map(s => <span key={s} className={`star ${s > 4 ? 'empty' : ''}`}></span>)}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}

                    {/* Floating particles */}
                    <div className="particles">
                      {[...Array(6)].map((_, i) => (
                        <div key={i} className="particle" style={{ 
                          top: `${Math.random() * 80 + 10}%`, 
                          left: `${Math.random() * 80 + 10}%`, 
                          animationDelay: `${i}s` 
                        }}></div>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </section>

          {/* Section Domaine Externe - New */}
          <section className="py-24 lg:py-32 bg-background-3 dark:bg-background-7 relative overflow-hidden">
            <div className="main-container relative z-10 px-4">
              <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
                <FadeIn delay={0.1}>
                  <span className="cb-badge">
                    {t('nomDeDomaine.external.badge')}
                  </span>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <h2 className="text-heading-3 text-secondary dark:text-white">
                    {t('nomDeDomaine.external.title')}
                  </h2>
                </FadeIn>
                <FadeIn delay={0.3}>
                  <p className="text-secondary/60 dark:text-accent/60 leading-relaxed">
                    {t('nomDeDomaine.external.subtitle')}
                  </p>
                </FadeIn>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* Option 1: Self Config */}
                <FadeIn delay={0.4}>
                  <div className="group p-8 lg:p-10 bg-white/40 dark:bg-white/[0.02] backdrop-blur-xl rounded-[40px] border border-white/20 dark:border-white/5 hover:border-primary-500/50 transition-all duration-500">
                    <div className="w-16 h-16 rounded-2xl bg-primary-500/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                      <Settings className="size-8 text-primary-500" />
                    </div>
                    <h3 className="text-2xl text-secondary dark:text-white mb-4 tracking-tight">
                      {t('nomDeDomaine.external.cards.self.title')}
                    </h3>
                    <p className="text-secondary/60 dark:text-accent/60 leading-relaxed">
                      {t('nomDeDomaine.external.cards.self.description')}
                    </p>
                  </div>
                </FadeIn>

                {/* Option 2: Assisted Config */}
                <FadeIn delay={0.5}>
                  <div className="group p-8 lg:p-10 bg-background-2 dark:bg-white/[0.02] backdrop-blur-xl rounded-[40px] border border-stroke-1 dark:border-white/5 hover:border-primary-500/50 transition-all duration-500  relative overflow-hidden">
                    {/* Badge for paid option */}
                    <div className="absolute top-0 right-0 p-4">
                      <div className="px-3 py-1 bg-primary-500 dark:bg-primary-500 text-white dark:text-white text-[10px] font-semibold rounded-full">
                        {t('nomDeDomaine.external.cards.assisted.badge')}
                      </div>
                    </div>
                    
                    <div className="w-16 h-16 rounded-2xl bg-primary-500/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                      <Wrench className="size-8 text-primary-500" />
                    </div>
                    <h3 className="text-2xl text-secondary dark:text-white mb-4 tracking-tight">
                      {t('nomDeDomaine.external.cards.assisted.title')}
                    </h3>
                    <p className="text-secondary/60 dark:text-accent/60 leading-relaxed">
                      {t('nomDeDomaine.external.cards.assisted.description')}
                    </p>
                  </div>
                </FadeIn>
              </div>
            </div>
          </section>

          {/* Comparaison - Premium Table */}
          <section className="py-24 lg:py-32 bg-background-1 dark:bg-background-6 relative">
            <div className="main-container relative z-10 px-4">
              <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
                <FadeIn delay={0.1}>
                  <span className="cb-badge">
                    {t('nomDeDomaine.comparison.badge')}
                  </span>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <h2 className="text-heading-3 text-secondary dark:text-white">
                    {t('nomDeDomaine.comparison.title')}
                  </h2>
                </FadeIn>
              </div>

              <FadeIn delay={0.3}>
                <div className="max-w-7xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Without custom domain */}
                    <div className="group p-8 lg:p-12 bg-white/40 dark:bg-white/[0.02] backdrop-blur-xl rounded-[40px] border border-white/20 dark:border-white/5 hover:border-secondary/20 transition-all duration-500">
                      <div className="flex items-center gap-4 mb-10">
                        <div className="size-12 rounded-2xl bg-secondary/5 dark:bg-white/5 flex items-center justify-center">
                          <X className="size-6 text-secondary/40 dark:text-accent/40" />
                        </div>
                        <h3 className="text-lg text-secondary dark:text-white font-bold tracking-tight">
                          {t('nomDeDomaine.comparison.without.title')}
                        </h3>
                      </div>

                      <div className="space-y-6">
                        {(t('nomDeDomaine.comparison.without.items', { returnObjects: true }) as string[]).map((item, idx) => (
                          <div key={idx} className="flex items-start gap-4">
                            <X className="size-5 text-secondary/20 dark:text-accent/20 mt-1 flex-shrink-0" />
                            <span className="text-secondary/60 dark:text-accent/60 leading-relaxed font-medium">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Marketplaces */}
                    <div className="group p-8 lg:p-12 bg-white/40 dark:bg-white/[0.02] backdrop-blur-xl rounded-[40px] border border-white/20 dark:border-white/5 hover:border-secondary/20 transition-all duration-500">
                      <div className="flex items-center gap-4 mb-10">
                        <div className="size-12 rounded-2xl bg-secondary/5 dark:bg-white/5 flex items-center justify-center">
                          <X className="size-6 text-secondary/40 dark:text-accent/40" />
                        </div>
                        <h3 className="text-lg text-secondary dark:text-white font-bold tracking-tight">
                          {t('nomDeDomaine.comparison.marketplaces.title')}
                        </h3>
                      </div>

                      <div className="space-y-6">
                        {(t('nomDeDomaine.comparison.marketplaces.items', { returnObjects: true }) as string[]).map((item, idx) => (
                          <div key={idx} className="flex items-start gap-4">
                            <X className="size-5 text-secondary/20 dark:text-accent/20 mt-1 flex-shrink-0" />
                            <span className="text-secondary/60 dark:text-accent/60 leading-relaxed font-medium">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* With custom domain */}
                    <div className="group p-8 lg:p-12 bg-primary-500/5 backdrop-blur-xl rounded-[40px] border border-blue-500/30 hover:border-blue-500 transition-all duration-500 relative overflow-hidden">
                      <div className="flex justify-center items-center  text-center mb-4 z-50">
                        <div className="p-2 text-primary-500 border-primary-500  w-fit border rounded-full  text-xs">RECOMMANDÉ</div>
                      </div>
                      
                      <div className="flex items-center gap-4 mb-10">
                        <div className="size-12 rounded-2xl bg-primary-500/10 flex items-center justify-center">
                          <Check className="size-6 text-primary-500" />
                        </div>
                        <h3 className="text-lg text-secondary dark:text-white font-bold tracking-tight">
                          {t('nomDeDomaine.comparison.with.title')}
                        </h3>
                      </div>

                      <div className="space-y-6">
                        {(t('nomDeDomaine.comparison.with.items', { returnObjects: true }) as string[]).map((item, idx) => (
                          <div key={idx} className="flex items-start gap-4">
                            <div className="size-5 rounded-full bg-primary-500/10 flex items-center justify-center mt-1 flex-shrink-0">
                              <Check className="size-3.5 text-primary-500" />
                            </div>
                            <span className="text-secondary dark:text-white leading-relaxed font-bold">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </section>

          {/* Avantages - Simplified & Clean */}
          <section className="py-24 lg:py-32 bg-background-3 dark:bg-background-7 relative">
            <div className="main-container relative z-10 px-4">
              <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
                <FadeIn delay={0.1}>
                  <span className="cb-badge">
                    {t('nomDeDomaine.advantages.badge')}
                  </span>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <h2 className="text-heading-3  text-secondary dark:text-white">
                    {t('nomDeDomaine.advantages.title')}
                  </h2>
                </FadeIn>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                {[
                  { key: 'credibility', icon: Shield },
                  { key: 'memorable', icon: Globe },
                  { key: 'trust', icon: Lock },
                  { key: 'seo', icon: TrendingUp }
                ].map((adv, idx) => (
                  <FadeIn key={adv.key} delay={0.3 + (idx * 0.1)}>
                    <div className="flex gap-6 group">
                      <div className="size-14 rounded-2xl bg-white dark:bg-background-8 border border-stroke-1 dark:border-white/5 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:bg-primary-500 group-hover:border-primary-500 transition-all duration-500">
                        <adv.icon className="size-7 text-secondary dark:text-white group-hover:text-white transition-colors" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg text-secondary dark:text-white tracking-tight font-bold">
                          {t(`nomDeDomaine.advantages.items.${adv.key}.title`)}
                        </h3>
                        <p className="text-secondary/60 dark:text-accent/60 leading-relaxed">
                          {t(`nomDeDomaine.advantages.items.${adv.key}.description`)}
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="cb-cta-section relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-30">
              <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary-500/20 blur-[120px] rounded-full"></div>
            </div>
            
            <div className="cb-container">
              <div className="cb-max-w-4xl cb-text-center space-y-12 relative z-10">
                <div className="space-y-6">
                  <FadeIn delay={0.2}>
                    <h2 className="text-heading-3 text-secondary dark:text-white">
                      {t('nomDeDomaine.cta.title')}
                    </h2>
                  </FadeIn>
                  <FadeIn delay={0.3}>
                    <p className="text-xl text-secondary/60 dark:text-accent/60 max-w-2xl mx-auto leading-relaxed">
                      {t('nomDeDomaine.cta.subtitle')}
                    </p>
                  </FadeIn>
                </div>

                <FadeIn delay={0.4}>
                  <div className="flex flex-col items-center gap-8">
                    <a href={REGISTER_URL_FREE} className="cb-btn px-10 py-5 text-lg group">
                      <span className="inline-block first-letter:uppercase relative z-10">
                        {t('nomDeDomaine.cta.button')}
                      </span>
                    </a>
                    
                    <ul className="flex flex-wrap justify-center gap-x-12 gap-y-4">
                      {(t('nomDeDomaine.cta.benefits', { returnObjects: true }) as string[]).map((benefit, idx) => (
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