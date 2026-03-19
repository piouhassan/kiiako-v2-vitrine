'use client';

import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { FadeIn } from '@/components/animations/FadeIn';
import { SlideIn } from '@/components/animations/SlideIn';
import { Check, Star, MessageSquare, Image as ImageIcon, ShieldCheck, TrendingUp, BarChart, ArrowRight, FileText, Zap, Globe, ShoppingBag } from 'lucide-react';
import { REGISTER_URL_FREE } from "@/lib/utls";
import { useTranslation } from 'react-i18next';

export default function AvisClientsPage() {
  const { t } = useTranslation();

  const testimonials = (t('home.testimonials.items', { returnObjects: true }) as Array<{name: string, company: string, text: string}>) || [];
  // Cycle through testimonials to fill 6 slots for the desktop design
  const displayTestimonials = testimonials.length > 0 
    ? [...testimonials, ...testimonials, ...testimonials].slice(0, 6)
    : [];

  return (
    <div className="bg-background-1 dark:bg-background-6 min-h-screen">
      <Header />
      <main>
        
        {/* Hero Section - Refined & Premium */}
        <section className="relative pb-14 pt-18 md:pb-16 md:pt-16 lg:pb-24 lg:pt-[120px] xl:pb-32 xl:pt-[160px] overflow-hidden bg-background-2 dark:bg-background-5">
          {/* Decorative background gradients */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-500/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

          <div className="main-container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div className="space-y-10 text-center lg:text-left">
                <FadeIn delay={0.2}>
                  <span className="cb-badge">
                    {t('avisClients.hero.badge')}
                  </span>
                </FadeIn>
                <div className="space-y-8">
                  <FadeIn delay={0.3}>
                    <h1 className="text-heading-2">
                      {t('avisClients.hero.title')}
                    </h1>
                  </FadeIn>
                  <FadeIn delay={0.4}>
                    <p className="text-secondary/60 dark:text-accent/60 max-w-xl mx-auto lg:mx-0  leading-relaxed">
                      {t('avisClients.hero.subtitle')}
                    </p>
                  </FadeIn>
                </div>
                <FadeIn delay={0.5}>
                  <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start pt-4">
                    <a
                      href={REGISTER_URL_FREE}
                      className="cb-btn"
                    >
                      <span className="relative z-10">{t('avisClients.hero.cta')}</span>
                      <ArrowRight className="size-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </FadeIn>
              </div>

              <div className="relative group">
                <SlideIn direction="right" delay={0.4}>
                  <div className="relative z-10 rounded-[3rem] overflow-hidden border-8 border-white dark:border-background-7 aspect-[4/3] shadow-2xl shadow-black/10">
                    <img
                      src="/img/29734.jpg"
                      alt="Customer satisfaction"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 to-transparent"></div>
                  </div>

                  {/* Floating Testimonial Cards */}
                  <div className="absolute -left-12 top-1/4 z-20 hidden md:block w-72 translate-x-1/2 lg:-translate-x-4 animate-float">
                    <div className="bg-white/80 dark:bg-background-7/80 backdrop-blur-xl p-5 rounded-[2rem] border border-white/40 shadow-2xl">
                    <div className="flex items-center gap-4 mb-3">
                        <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-600 font-bold text-lg shadow-inner">M</div>
                        <div>
                          <p className="font-bold text-secondary dark:text-accent">{t('avisClients.visual.marie.name')}</p>
                          <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />)}
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-secondary/70 dark:text-accent/60 font-medium italic leading-relaxed">"{t('avisClients.visual.marie.text')}"</p>
                    </div>
                  </div>

                  <div className="absolute -right-12 bottom-1/4 z-20 hidden md:block w-80 lg:translate-x-4 animate-float-delayed-1">
                    <div className="bg-white/80 dark:bg-background-7/80 backdrop-blur-xl p-6 rounded-[2rem] border border-white/40 shadow-2xl">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-600 font-bold text-lg shadow-inner">P</div>
                        <div>
                          <p className="font-bold text-secondary dark:text-accent">{t('avisClients.visual.paul.name')}</p>
                          <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />)}
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-secondary/70 dark:text-accent/60 font-medium italic leading-relaxed">"{t('avisClients.visual.paul.text')}"</p>
                    </div>
                  </div>
                </SlideIn>
              </div>
            </div>
          </div>
        </section>

        {/* Digital Model - Features Section */}
        <section className="py-24 bg-background-3 dark:bg-background-7">
          <div className="main-container px-4">
            <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
              <FadeIn delay={0.1}>
                <h2 className="text-heading-3  mb-6 text-secondary dark:text-white">
                  {t('avisClients.features.title')}
                </h2>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-secondary/60 dark:text-accent/60 leading-relaxed">
                  {t('avisClients.features.subtitle')}
                </p>
              </FadeIn>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { key: 'collect', icon: MessageSquare },
                { key: 'rating', icon: Star },
                { key: 'media', icon: ImageIcon },
                { key: 'moderation', icon: ShieldCheck },
                { key: 'widget', icon: Star },
                { key: 'stats', icon: BarChart },
              ].map((item, i) => (
                <FadeIn key={i} delay={0.1 + (i * 0.05)}>
                  <div className="p-8 bg-white/40 dark:bg-white/[0.02] backdrop-blur-xl rounded-[32px] border border-white/20 dark:border-white/5 transition-all duration-500 hover:shadow-2xl hover:bg-white/60 dark:hover:bg-white/[0.04] group hover:-translate-y-2">
                    <div className="w-14 h-14 rounded-2xl bg-primary-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                      <item.icon className="w-7 h-7 text-primary-500" />
                    </div>
                    <h3 className="text-xl mb-3 text-secondary dark:text-white leading-tight">
                        {t(`avisClients.features.items.${item.key}.title`)}
                    </h3>
                    <p className="text-secondary/60 dark:text-accent/60 leading-relaxed">
                      {t(`avisClients.features.items.${item.key}.description`)}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Bénéfices Section */}
        <section className="py-[100px] lg:py-[150px] bg-background-2 dark:bg-background-8/30">
          <div className="main-container px-4">
            <div className="text-center space-y-6 mb-[70px]">
              <FadeIn delay={0.2}>
                <span className="cb-badge">
                  {t('avisClients.benefits.badge')}
                </span>
              </FadeIn>
              <FadeIn delay={0.3}>
                <h2 className="text-heading-3  xl:max-w-[878px] max-w-[600px] mx-auto tracking-tight">
                  {t('avisClients.benefits.title')}
                </h2>
              </FadeIn>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { key: 'trust', icon: TrendingUp },
                { key: 'conversion', icon: Check },
                { key: 'hesitation', icon: ShieldCheck },
                { key: 'seo', icon: Star }
              ].map((item, i) => (
                <FadeIn key={item.key} delay={0.4 + i * 0.1}>
                  <div className="p-10 rounded-[32px] bg-background-1 dark:bg-background-7 border border-stroke-1 dark:border-stroke-7 text-center group hover:border-primary-500 transition-all duration-500 translate-y-0 hover:-translate-y-2">
                    <div className="size-16 rounded-3xl bg-primary-500/5 flex items-center justify-center mx-auto mb-8 group-hover:bg-primary-500 group-hover:text-white transition-all duration-500">
                      <item.icon className="size-8 text-primary-500 group-hover:text-white" />
                    </div>
                    <h3 className="text-xl text-secondary dark:text-accent mb-4 capitalize">
                      {t(`avisClients.benefits.items.${item.key}.title`)}
                    </h3>
                    <p className="text-secondary/60 dark:text-accent/60 leading-relaxed text-sm">
                      {t(`avisClients.benefits.items.${item.key}.description`)}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

      
        {/* Testimonials Section - Restored Original Design with Rotated Cards */}
        <section className="py-24 bg-background-3 dark:bg-background-7 relative overflow-hidden text-center">
          {/* Decorative background glow */}
          <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary-500/5 blur-[120px] rounded-full pointer-events-none translate-y-[-50%]"></div>
          
          <div className="main-container relative z-10 px-4">
            <div className="max-w-3xl mx-auto mb-16 space-y-4">
              <FadeIn delay={0.1}>
                <h2 className="text-heading-3 mb-6 text-secondary dark:text-white">
                  {t('home.testimonials.title')}
                </h2>
              </FadeIn>
            </div>

            {/* Desktop: Rotated Cards Animation */}
            {displayTestimonials.length > 0 && (
              <div className="relative h-[550px] hidden lg:block perspective-1000">
                {displayTestimonials.map((testimonial, i) => {
                  const positions = [
                    "rotate-[-14deg] top-[20px] left-0",
                    "rotate-[5deg] left-[320px] top-0",
                    "rotate-[-5deg] right-[275px] top-0",
                    "rotate-[7deg] right-0 top-[50px]",
                    "rotate-[-7deg] right-[195px] bottom-[20px]",
                    "rotate-[3deg] left-[320px] bottom-[30px]"
                  ];
                  return (
                    <div 
                      key={i}
                      className={`absolute ${positions[i]} hover:rotate-0 hover:z-[100] hover:scale-105 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] cursor-default group`}
                      style={{ zIndex: 10 + i }}
                    >
                      <div className="p-8 bg-white/90 dark:bg-white/[0.03] backdrop-blur-2xl rounded-[32px] border border-white/40 dark:border-white/10 shadow-xl w-[380px] space-y-6 group-hover:shadow-3xl transition-all duration-500 text-left">
                        <div className="flex items-center gap-4">
                          <div className="size-14 rounded-2xl bg-primary-500/10 flex items-center justify-center text-primary-500 font-black text-xl shadow-inner uppercase">
                            {testimonial.name?.charAt(0) || 'K'}
                          </div>
                          <div>
                            <h4 className="text-secondary dark:text-white uppercase leading-tight tracking-wide text-base">{testimonial.name}</h4>
                            <p className="text-sm text-secondary/50 dark:text-accent/40">{testimonial.company}</p>
                          </div>
                        </div>
                        
                        <div className="space-y-4">
                          <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map(s => (
                              <Star key={s} className="size-4 fill-primary-500 text-primary-500" />
                            ))}
                          </div>
                          <blockquote className="text-secondary/70 dark:text-accent/60 italic leading-relaxed text-sm line-clamp-4">
                            "{testimonial.text}"
                          </blockquote>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Mobile/Tablet: Responsive Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:hidden">
              {displayTestimonials.slice(0, 3).map((testimonial, i) => (
                <FadeIn key={i} delay={0.2 + i * 0.1}>
                  <div className="p-8 bg-white/40 dark:bg-white/[0.02] backdrop-blur-xl rounded-[32px] border border-white/20 dark:border-white/5 space-y-6 h-full flex flex-col text-left">
                    <div className="flex items-center gap-4">
                      <div className="size-12 rounded-2xl bg-primary-500/10 flex items-center justify-center text-primary-500 font-bold text-lg uppercase">
                        {testimonial.name?.charAt(0) || 'K'}
                      </div>
                      <div>
                        <h4 className="font-bold text-secondary dark:text-white leading-tight">{testimonial.name}</h4>
                        <p className="text-sm text-secondary/50 dark:text-accent/40 font-medium">{testimonial.company}</p>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map(s => (
                        <Star key={s} className="size-4 fill-primary-500 text-primary-500" />
                      ))}
                    </div>
                    <p className="text-secondary/70 dark:text-accent/60 font-medium italic leading-relaxed flex-1">
                      "{testimonial.text}"
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Widget Showcase */}
        <section className="py-[100px] lg:py-[150px] bg-background-1 dark:bg-background-7">
          <div className="main-container px-4">
            <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
              <FadeIn delay={0.2}>
                <span className="cb-badge">
                  {t('avisClients.showcase.badge')}
                </span>
              </FadeIn>
              <FadeIn delay={0.3}>
                <h2 className="text-heading-3 mb-6 text-secondary dark:text-accent tracking-tight">
                  {t('avisClients.showcase.title')}
                </h2>
              </FadeIn>
              <FadeIn delay={0.4}>
                <p className="text-secondary/60 dark:text-accent/60">
                  {t('avisClients.showcase.subtitle')}
                </p>
              </FadeIn>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                {['grid', 'list', 'carousel'].map((type, i) => (
                  <FadeIn key={type} delay={0.5 + i * 0.1}>
                    <div className="p-6 rounded-2xl bg-background-1 dark:bg-background-6 border border-stroke-1 dark:border-stroke-7 flex items-center gap-6 group hover:border-primary-500 transition-all duration-300">
                      <div className="size-12 rounded-xl bg-primary-500/10 flex items-center justify-center text-primary-500">
                        {type === 'grid' && <BarChart className="size-6" />}
                        {type === 'list' && <FileText className="size-6" />}
                        {type === 'carousel' && <Zap className="size-6" />}
                      </div>
                      <span className="text-lg text-secondary dark:text-accent">{t(`avisClients.showcase.items.${type}`)}</span>
                      <Check className="ml-auto size-6 text-green-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </FadeIn>
                ))}
              </div>

              <div className="relative">
                <FadeIn delay={0.6}>
                  <div className="py-18 rounded-[32px] overflow-hidden border-8 border-white dark:border-background-8 bg-background-2 dark:bg-background-9/50 p-8 flex items-center justify-center">
                     <div className="w-full space-y-4">
                        {[1, 2].map((_, i) => (
                          <div key={i} className="p-4 rounded-xl bg-white dark:bg-background-7 border border-stroke-1 dark:border-stroke-7 flex gap-4">
                             <div className="size-10 rounded-full bg-gray-100 dark:bg-background-8"></div>
                             <div className="space-y-2 flex-1">
                                <div className="h-4 w-24 bg-gray-100 dark:bg-background-8 rounded"></div>
                                <div className="flex gap-1">
                                   {[1, 2, 3, 4, 5].map(s => <Star key={s} className="size-3 fill-amber-500 text-amber-500" />)}
                                </div>
                                <div className="h-3 w-full bg-gray-100/50 dark:bg-background-8/50 rounded"></div>
                             </div>
                          </div>
                        ))}
                     </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* Trust & Conversion - Dark Section */}
        <section className="py-[120px] bg-secondary dark:bg-background-9 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 size-96 bg-primary-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="main-container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div className="space-y-8 text-center lg:text-left">
                <FadeIn delay={0.2}>
                  <h2 className="text-heading-3 text-white leading-tight tracking-tight">
                    {t('avisClients.trust.title')}
                  </h2>
                </FadeIn>
                <FadeIn delay={0.3}>
                  <p className="text-white dark:text-accent/60 max-w-xl mx-auto lg:mx-0  leading-relaxed">
                    {t('avisClients.trust.subtitle')}
                  </p>
                </FadeIn>
                
                <div className="grid grid-cols-2 gap-8 pt-6">
                  {['conversion', 'trust'].map((stat, i) => (
                    <FadeIn key={stat} delay={0.4 + i * 0.1}>
                      <div className="space-y-2">
                        <div className="text-5xl md:text-6xl  text-primary-500">
                          {t(`avisClients.trust.stats.${stat}.value`)}
                        </div>
                        <div className="text-lg  uppercase tracking-widest text-white/50">
                          {t(`avisClients.trust.stats.${stat}.label`)}
                        </div>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>

              <div className="relative">
                <FadeIn delay={0.5}>
                  <div className="bg-white/5 backdrop-blur-sm rounded-[40px] border border-white/10 p-12 flex flex-col justify-center gap-6 max-w-md mx-auto">
                     {[1, 2, 3].map((_, i) => (
                       <div key={i} className={`flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 transition-all hover:scale-105 ${i === 1 ? 'ml-12' : ''}`}>
                          <div className="size-10 rounded-full bg-primary-500 flex items-center justify-center font-bold">A</div>
                          <div className="flex-1 space-y-1">
                             <div className="flex gap-1">
                                {[1, 2, 3, 4, 5].map(s => <Star key={s} className="size-3 fill-amber-500 text-amber-500" />)}
                             </div>
                             <div className="h-2 w-full bg-white/20 rounded-full"></div>
                          </div>
                       </div>
                     ))}
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Advantage Section */}
        <section className="py-[100px] lg:py-[150px] overflow-hidden bg-background-3 dark:bg-background-7">
          <div className="main-container px-4">
            <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">
               <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
                  {['snippets', 'ranking'].map((item, i) => (
                    <FadeIn key={item} delay={0.4 + (i * 0.1)}>
                      <div className="p-8 rounded-[32px] bg-background-2 dark:bg-background-8/50 border border-stroke-1 dark:border-stroke-7 space-y-4 group hover:border-primary-500 transition-all duration-300">
                        <div className="size-12 rounded-2xl bg-primary-500/10 flex items-center justify-center text-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                          {item === 'snippets' ? <Star className="size-6" /> : <TrendingUp className="size-6" />}
                        </div>
                        <h3 className="text-lg text-secondary dark:text-accent">{t(`avisClients.seo.items.${item}.title`)}</h3>
                        <p className="text-secondary/60 dark:text-accent/60 font-medium text-sm leading-relaxed">{t(`avisClients.seo.items.${item}.description`)}</p>
                      </div>
                    </FadeIn>
                  ))}
               </div>

               <div className="lg:w-1/2 space-y-8">
                  <FadeIn delay={0.2}>
                    <span className="cb-badge">{t('avisClients.seo.badge')}</span>
                  </FadeIn>
                  <FadeIn delay={0.3}>
                    <h2 className="text-heading-3 leading-tight tracking-tight">
                      {t('avisClients.seo.title')}
                    </h2>
                  </FadeIn>
                  <FadeIn delay={0.4}>
                    <p className="text-secondary/60 dark:text-accent/60 font-medium leading-relaxed">
                      {t('avisClients.seo.subtitle')}
                    </p>
                  </FadeIn>
                  <FadeIn delay={0.5}>
                     <div className="flex items-center gap-4 p-6 rounded-3xl bg-background-1 dark:bg-background-8 border border-stroke-1 dark:border-stroke-7">
                        <div className="size-12 rounded-xl bg-white dark:bg-background-7 flex items-center justify-center shadow-sm">
                           <Globe className="size-6 text-blue-500" />
                        </div>
                        <div className="flex-1">
                           <div className="text-xs text-secondary/50 font-mono mb-1">google.com/search?q=produit-kiiako</div>
                           <div className="flex gap-1 text-amber-500">
                              {[1, 2, 3, 4, 5].map(s => <Star key={s} className="size-3 fill-current" />)}
                              <span className="text-[10px] items-center flex ml-1 text-secondary/50 font-bold uppercase tracking-tighter">4.9 (1,250 votes)</span>
                           </div>
                        </div>
                     </div>
                  </FadeIn>
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
                  {t('avisClients.cta.title')}
                </h2>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p className="cb-lead">
                  {t('avisClients.cta.subtitle')}
                </p>
              </FadeIn>
              <FadeIn delay={0.4}>
                <div className="cb-text-center">
                  <a href={REGISTER_URL_FREE} className="cb-btn">
                    <span className="inline-block first-letter:uppercase">
                      {t('avisClients.cta.button')}
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
