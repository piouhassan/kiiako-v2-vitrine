'use client';

import { useState } from 'react';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { FadeIn } from '@/components/animations/FadeIn';
import { Quote, ArrowRight, Star, TrendingUp, Users, Globe, Play } from 'lucide-react';
import Link from 'next/link';
import { useTranslation, Trans } from 'react-i18next';
import { LOGIN_URL } from '@/lib/utls';

export default function SuccessStoriesPage() {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState('Tous');

  const categoryKeys = ['Tous', 'Mode', 'Tech', 'Beauté', 'Artisanat'];
  const categoriesMap = t('ressourcesHistoires.filters.categories', { returnObjects: true }) as Record<string, string>;

  const stories = [
    {
      name: "Fatou B.",
      business: "Fatou Fashion",
      location: "Dakar, Sénégal",
      impact: "Ventes x4",
      quote: "Kiiako a transformé ma boutique Instagram en une véritable marque africaine.",
      category: "Mode"
    },
    {
      name: "Mamadou L.",
      business: "Tech Gadgets",
      location: "Abidjan, Côte d'Ivoire",
      impact: "150+ commandes",
      quote: "Le Mobile Money intégré a tout changé pour la confiance de mes clients locaux.",
      category: "Tech"
    },
    {
      name: "Amina S.",
      business: "Bio Cosmetics",
      location: "Cotonou, Bénin",
      impact: "+200% croissance",
      quote: "La gestion des livraisons est devenue fluide, me permettant de me concentrer sur la création.",
      category: "Beauté"
    },
    {
      name: "Jean K.",
      business: "Wood Design",
      location: "Lomé, Togo",
      impact: "Export Régional",
      quote: "Vendre au-delà de mes frontières était un rêve, Kiiako l'a rendu possible.",
      category: "Artisanat"
    }
  ];

  const filteredStories = activeFilter === 'Tous' 
    ? stories 
    : stories.filter(s => s.category === activeFilter);

  return (
    <div className="bg-background-1 dark:bg-background-6 min-h-screen selection:bg-primary-500/30">
      <Header />
      <main>
        {/* --- Unified editorial Hero --- */}
        <section className="xl:pt-[180px] md:pt-42 sm:pt-36 pt-32 pb-32">
          <div className="main-container">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-7 space-y-10">
                <FadeIn>
                  <span className="cb-badge">
                    {t('ressourcesHistoires.hero.badge')}
                  </span>
                </FadeIn>
                <div className="space-y-8">
                  <FadeIn delay={0.1}>
                    <h1 className="text-heading-1  font-bold leading-[1.1] tracking-tight">
                       <Trans i18nKey="ressourcesHistoires.hero.title" components={{ 1: <span className="text-secondary/20 dark:text-accent/20 italic font-medium" /> }} />
                    </h1>
                  </FadeIn>
                  <FadeIn delay={0.2}>
                    <p className="text-secondary/50 dark:text-accent/50 text-xl leading-relaxed max-w-2xl font-light italic">
                       {t('ressourcesHistoires.hero.subtitle')}
                    </p>
                  </FadeIn>
                </div>
                <FadeIn delay={0.3}>
                  <div className="flex flex-wrap items-center gap-8 pt-4">
                     <Link href="/ressources/histoires/fatou-fashion" className="group flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-secondary hover:text-primary-500 transition-colors">
                        {t('ressourcesHistoires.hero.readPortrait')}
                        <div className="size-10 rounded-full border border-stroke-1 flex items-center justify-center group-hover:bg-primary-500 group-hover:border-primary-500 transition-all">
                          <ArrowRight className="w-4 h-4 group-hover:text-white" />
                        </div>
                     </Link>
                  </div>
                </FadeIn>
              </div>
              
              <FadeIn delay={0.4} className="lg:col-span-12 xl:col-span-5 relative">
                 <div className="aspect-[4/3] md:aspect-[16/9] xl:aspect-[4/5] rounded-[40px] overflow-hidden border border-stroke-1 dark:border-white/5 bg-background-2 dark:bg-background-7/30 relative group cursor-pointer transition-all duration-700">
                    <div className="absolute inset-0 bg-secondary/5 group-hover:bg-transparent transition-colors duration-500"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                       <div className="size-24 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary-500 group-hover:border-primary-500 transition-all duration-500">
                          <Play className="size-8 text-white fill-current translate-x-1" />
                       </div>
                    </div>
                    <div className="absolute bottom-10 left-10 p-6 rounded-[24px] bg-white/10 backdrop-blur-md border border-white/10 text-white max-w-xs group-hover:translate-y-2 transition-transform duration-700 hidden md:block">
                       <p className="text-sm font-medium leading-relaxed italic opacity-80">
                          {t('ressourcesHistoires.hero.atmosphereOverlay')}
                       </p>
                    </div>
                 </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* --- Voices of the Community - Atmospheric & Integrated --- */}
        <section className="py-32 bg-background-3 dark:bg-background-7">
           <div className="main-container text-center space-y-16">
              <FadeIn>
                 <Quote className="size-16 text-primary-500/10 mx-auto fill-current" />
              </FadeIn>
              <div className="max-w-4xl mx-auto">
                 <FadeIn delay={0.2}>
                    <p className="text-4xl font-light italic leading-tight text-secondary/60 dark:text-accent/60">
                       <Trans i18nKey="ressourcesHistoires.voices.quote" components={{ 1: <span className="text-secondary dark:text-white font-medium" /> }} />
                    </p>
                  </FadeIn>
              </div>
              <FadeIn delay={0.4}>
                 <div className="flex flex-wrap justify-center items-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
                    {['EcoShop', 'BioAfrica', 'TechHub', 'Daba Wax', 'Kofi Design'].map(brand => (
                       <span key={brand} className="text-xl font-bold tracking-tighter italic">{brand}</span>
                    ))}
                 </div>
              </FadeIn>
           </div>
        </section>

        {/* --- Soft Filter Bar --- */}
        <section className="pt-32 pb-16">
           <div className="main-container">
              <div className="flex flex-col md:flex-row items-baseline justify-between gap-8 pb-12">
                 <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tight">{t('ressourcesHistoires.filters.title')}</h2>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary/40">{t('ressourcesHistoires.filters.subtitle')}</p>
                 </div>
                 <div className="flex flex-wrap gap-4 pt-4">
                    {categoryKeys.map((catKey) => (
                       <button
                          key={catKey}
                          onClick={() => setActiveFilter(catKey)}
                          className={`px-8 py-3 rounded-2xl text-xs font-bold transition-all ${
                             activeFilter === catKey 
                             ? 'bg-secondary text-white dark:bg-white dark:text-black' 
                             : 'text-secondary/40 hover:text-secondary hover:bg-background-2 dark:text-accent/40 dark:hover:text-white dark:hover:bg-background-7/50'
                          }`}
                       >
                          {categoriesMap[catKey] || catKey}
                       </button>
                    ))}
                 </div>
              </div>
           </div>
        </section>

        {/* --- Modern borderless Story Grid --- */}
        <section className="pb-48">
          <div className="main-container">
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-12">
              {filteredStories.map((story, idx) => (
                <FadeIn key={idx} delay={idx * 0.1}>
                  <Link href={`/ressources/histoires/slug`} className="group flex flex-col space-y-8 h-full">
                    <div className="relative aspect-video rounded-[32px] overflow-hidden border border-stroke-1 dark:border-white/5 bg-background-3 dark:bg-background-7 transition-all duration-300 group-hover:scale-[1.02]">
                       <div className="absolute inset-0 bg-secondary/10 group-hover:bg-transparent transition-colors duration-500"></div>
                       <div className="absolute top-6 right-6 z-10 transition-transform duration-500 group-hover:-translate-y-1">
                           <span className="px-5 py-2 rounded-full bg-white/90 dark:bg-background-8/90 backdrop-blur-sm text-[8px] font-bold uppercase tracking-[0.2em] text-primary-500 leading-none border border-primary-500/10 transition-colors">
                              {categoriesMap[story.category] || story.category}
                           </span>
                       </div>
                       <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-500">
                          <div className="size-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center">
                             <Quote className="w-6 h-6 text-white fill-current" />
                          </div>
                       </div>
                       <div className="absolute bottom-6 left-6 right-6 transition-transform duration-500 group-hover:translate-y-1">
                          <span className="px-4 py-2 rounded-full bg-black/60 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-[0.1em] leading-none flex items-center gap-2">
                             <TrendingUp className="size-3" /> {story.impact}
                          </span>
                       </div>
                    </div>
                    
                    <div className="space-y-4 px-2">
                      <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] opacity-40">
                        <span>{story.location}</span>
                        <span className="size-1 rounded-full bg-primary-500"></span>
                        <span>{story.business}</span>
                      </div>
                      <h3 className="text-xl font-bold group-hover:text-primary-500 transition-colors duration-300 leading-[1.3] italic">
                         "{story.quote}"
                      </h3>
                      <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-secondary group-hover:text-primary-500 transition-colors">
                        {t('ressourcesHistoires.stories.readStory')}
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-2 transition-transform duration-500" />
                      </div>
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>
            
            {filteredStories.length === 0 && (
               <FadeIn>
                  <div className="py-32 text-center space-y-6">
                     <p className="text-xl font-light italic opacity-30">{t('ressourcesHistoires.stories.emptyText')}</p>
                     <button onClick={() => setActiveFilter('Tous')} className="text-sm font-bold uppercase tracking-widest text-primary-500 hover:tracking-[0.2em] transition-all underline underline-offset-8">{t('ressourcesHistoires.stories.resetFilter')}</button>
                  </div>
               </FadeIn>
            )}
          </div>
        </section>

        {/* --- Native integrated CTA - Natural conclusion --- */}
        <section className="pb-48 bg-background-2 dark:bg-background-7">
          <div className="main-container text-center pt-32">
            <div className="max-w-2xl mx-auto space-y-10">
              <FadeIn>
                 <TrendingUp className="size-12 text-primary-500/20 mx-auto" />
              </FadeIn>
              <div className="space-y-4">
                <FadeIn delay={0.1}>
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight"><Trans i18nKey="ressourcesHistoires.cta.title" components={{ 1: <span className="text-secondary/30 italic" /> }} /></h2>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <p className="text-secondary/50 dark:text-accent/50 text-lg leading-relaxed italic">
                     {t('ressourcesHistoires.cta.subtitle')}
                  </p>
                </FadeIn>
              </div>
              <FadeIn delay={0.3}>
                <div className="flex justify-center">
                   <a href={LOGIN_URL} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-6 text-sm font-bold uppercase tracking-[0.2em] text-secondary hover:text-primary-500 transition-all">
                      {t('ressourcesHistoires.cta.button')}
                      <div className="size-14 rounded-full border border-stroke-1 flex items-center justify-center group-hover:bg-primary-500 group-hover:border-primary-500 transition-all">
                        <ArrowRight className="w-5 h-5 group-hover:text-white" />
                      </div>
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
