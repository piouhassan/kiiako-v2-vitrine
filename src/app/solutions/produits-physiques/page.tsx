'use client';

import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { FadeIn } from '@/components/animations/FadeIn';
import { ScaleIn } from '@/components/animations/ScaleIn';
import { Check, Package, Image as ImageIcon, Layers, TrendingUp, AlertCircle, Barcode, FileSpreadsheet, ShoppingBag, CheckCircle, Store, ShieldCheck, Truck, MapPin } from 'lucide-react';
import { REGISTER_URL_FREE } from "@/lib/utls";
import Link from 'next/link';
import { useTranslation, Trans } from 'react-i18next';

export default function ProduitsPhysiquesPage() {
  const { t } = useTranslation();

  const showcaseTexts = t('produitsPhysiques.showcase.products', { returnObjects: true }) as any[];
  const showcaseProducts = [
    { image: 'photo-1553062407-98eeb64c6a62?w=800&fit=crop', delay: 0.1, ...showcaseTexts[0] },
    { image: 'photo-1523275335684-37898b6baf30?w=800&fit=crop', delay: 0.2, ...showcaseTexts[1] },
    { image: 'photo-1542291026-7eec264c27ff?w=800&fit=crop', delay: 0.3, ...showcaseTexts[2] },
    { image: 'photo-1572635196237-14b3f281503f?w=800&fit=crop', delay: 0.4, ...showcaseTexts[3] },
  ];

  const featuresTexts = t('produitsPhysiques.features.items', { returnObjects: true }) as any[];
  const featuresList = [
    { icon: Package, ...featuresTexts[0] },
    { icon: ImageIcon, ...featuresTexts[1] },
    { icon: Layers, ...featuresTexts[2] },
    { icon: TrendingUp, ...featuresTexts[3] },
    { icon: AlertCircle, ...featuresTexts[4] },
    { icon: Barcode, ...featuresTexts[5] },
    { icon: FileSpreadsheet, ...featuresTexts[6] },
    { icon: CheckCircle, ...featuresTexts[7] },
  ];

  const orderTexts = t('produitsPhysiques.dashboard.window.orders', { returnObjects: true }) as any[];
  const dashboardOrders = [
    { color: "bg-primary-500/10 text-primary-500", icon: Package, ...orderTexts[0] },
    { color: "bg-blue-500/10 text-blue-500", icon: TrendingUp, ...orderTexts[1] },
    { color: "bg-green-500/10 text-green-500", icon: CheckCircle, ...orderTexts[2] },
  ];

  const processTexts = t('produitsPhysiques.process.steps', { returnObjects: true }) as any[];
  const processSteps = [
    { icon: Package, ...processTexts[0] },
    { icon: Layers, ...processTexts[1] },
    { icon: TrendingUp, ...processTexts[2] },
    { icon: ShieldCheck, ...processTexts[3] },
  ];

  return (
    <div className="bg-background-1 dark:bg-background-6 overflow-x-hidden relative">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pb-20 pt-32 md:pb-28 md:pt-40 lg:pt-48 overflow-hidden bg-background-2 dark:bg-background-5">
          {/* Decorative background gradients */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-500/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
          
          <div className="main-container relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <FadeIn delay={0.2}>
                  <span className="cb-badge">{t('produitsPhysiques.hero.badge')}</span>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <h1 className="text-heading-2">
                    <Trans i18nKey="produitsPhysiques.hero.title" components={{ 1: <span className="block text-primary-500" /> }} />
                  </h1>
                </FadeIn>
                <FadeIn delay={0.3}>
                  <p className="text-secondary/70 dark:text-accent/70 leading-relaxed">
                    {t('produitsPhysiques.hero.subtitle')}
                  </p>
                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <a href={REGISTER_URL_FREE} className="cb-btn">
                      <Store className="size-5" /> {t('produitsPhysiques.hero.button')}
                    </a>
                  </div>
                </FadeIn>
              </div>
              {/* Enhanced Hero Visual */}
              <div className="relative h-[600px] w-full hidden md:flex items-center justify-center mt-12 mb-8 z-20">
                <ScaleIn delay={0.2} duration={1} initialScale={0.8} className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="bg-white/80 dark:bg-background-7/80 backdrop-blur-2xl rounded-[36px] w-[340px] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] border border-stroke-1/50 dark:border-white/5 p-6 space-y-5">
                      {/* Fake header */}
                      <div className="flex items-center justify-between">
                        <div className="h-6 w-24 bg-background-3 dark:bg-background-8 rounded-full"></div>
                        <div className="size-8 rounded-full bg-primary-500/10 flex items-center justify-center"><Package className="size-4 text-primary-500"/></div>
                      </div>
                      {/* Product image */}
                      <div className="aspect-square rounded-2xl bg-background-3 dark:bg-background-8 overflow-hidden relative group">
                        <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop" alt="Produit" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
                        <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs  text-white shadow-sm border border-white/20">{t('produitsPhysiques.hero.visual.stock')}</div>
                      </div>
                      {/* Info */}
                      <div className="space-y-3">
                        <h3 className=" text-lg text-secondary dark:text-white">{t('produitsPhysiques.hero.visual.productName')}</h3>
                        <div className="flex justify-between items-end">
                          <p className="font-black text-xl text-primary-500">{t('produitsPhysiques.hero.visual.price')}</p>
                          <div className="bg-foreground text-background dark:bg-white dark:text-black text-xs px-4 py-2 rounded-xl">{t('produitsPhysiques.hero.visual.add')}</div>
                        </div>
                      </div>
                    </div>
                </ScaleIn>
                
                {/* Floating elements behind */}
                <ScaleIn delay={0.4} duration={1} initialScale={0.7} className="absolute top-10 right-0 z-0">
                  <div className="bg-white/60 dark:bg-background-6/60 backdrop-blur-md rounded-2xl p-4 shadow-xl flex items-center gap-3">
                    <div className="size-10 rounded-full bg-green-500/10 flex items-center justify-center"><CheckCircle className="size-5 text-green-500"/></div>
                    <div>
                      <p className="font-bold text-sm text-secondary dark:text-white">{t('produitsPhysiques.hero.visual.payment.title')}</p>
                      <p className="text-xs text-secondary/60 dark:text-accent/60">{t('produitsPhysiques.hero.visual.payment.amount')}</p>
                    </div>
                  </div>
                </ScaleIn>

                <ScaleIn delay={0.5} duration={1} initialScale={0.7} className="absolute bottom-20 -left-6 z-20">
                  <div className="bg-white/90 dark:bg-background-8/90 backdrop-blur-xl rounded-2xl p-4 shadow-2xl flex items-center gap-4">
                    <div className="size-12 rounded-xl bg-orange-500/10 flex items-center justify-center"><AlertCircle className="size-6 text-orange-500"/></div>
                    <div>
                      <p className="font-bold text-sm text-secondary dark:text-white">{t('produitsPhysiques.hero.visual.lowStock.title')}</p>
                      <p className="text-xs text-secondary/60 dark:text-accent/60">{t('produitsPhysiques.hero.visual.lowStock.desc')}</p>
                    </div>
                  </div>
                </ScaleIn>
              </div>
             
            </div>
          </div>
        </section>

        {/* Dedicated Product Showcase Section */}
        <section className="py-24 relative overflow-hidden bg-background-7 dark:bg-background-7">
          {/* Section Background Glows */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary-500/10 blur-[130px] rounded-full pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/5 blur-[150px] rounded-full pointer-events-none"></div>

          <div className="main-container relative z-10">
            {/* Section Header */}
            <div className="text-center mb-20 max-w-3xl mx-auto space-y-4">
              <FadeIn>
                <h2 className="text-heading-3 mb-6 text-white dark:text-white">
                  <Trans i18nKey="produitsPhysiques.showcase.title" components={{ 1: <span className="text-primary-500" /> }} />
                </h2>
                <p className="text-white dark:text-accent/60 leading-relaxed">
                  {t('produitsPhysiques.showcase.subtitle')}
                </p>
              </FadeIn>
            </div>

            {/* High-End Immersive Grid */}
            <div className="w-full max-w-[1400px] mx-auto relative cursor-default">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-14 relative z-10">
                {showcaseProducts.map((product, i) => (
                  <ScaleIn key={i} delay={product.delay} duration={1.5} initialScale={0.8} className="h-full">
                    <div className="group relative h-full flex flex-col bg-white/20 dark:bg-white/[0.01] backdrop-blur-[100px] rounded-[64px] p-4 border border-white/30 dark:border-white/5 transition-all duration-1000 hover:-translate-y-6 hover:bg-white/30 dark:hover:bg-white/[0.03]">
                      
                      {/* Floating Image Container */}
                      <div className="relative aspect-square rounded-[50px] overflow-hidden bg-background-2 dark:bg-background-9/80 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] group-hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.3)] transition-all duration-1000">
                        {/* Ultra-minimal Badge */}
                        <div className="absolute top-5 left-5 z-20">
                           <div className="px-5 py-2 rounded-full bg-white/80 dark:bg-background-9/80 backdrop-blur-3xl shadow-lg border border-white/20 dark:border-white/5 text-[9px] font-black text-secondary dark:text-white uppercase tracking-[0.2em]">
                              {product.badge}
                           </div>
                        </div>

                        {/* Image with extreme slow zoom */}
                        <img
                          src={`https://images.unsplash.com/${product.image}`}
                          alt={product.name}
                          className="w-full h-full object-cover transform scale-100 group-hover:scale-125 transition-transform duration-[3000ms] ease-out opacity-90 group-hover:opacity-100"
                        />

                        {/* Soft Light Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>

                        {/* Centered Minimal Action */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 z-20">
                           <div className="size-20 rounded-full bg-white/90 dark:bg-white text-secondary shadow-2xl scale-50 group-hover:scale-100 transition-transform duration-700 flex items-center justify-center hover:scale-110 active:scale-90 cursor-pointer">
                              <ShoppingBag className="size-8" />
                           </div>
                        </div>
                      </div>

                      {/* Radical Skeleton Layout */}
                      <div className="pt-10 pb-6 px-4 flex flex-col items-center gap-5">
                         <div className="w-full space-y-3">
                            <div className="h-1.5 w-full bg-gradient-to-r from-secondary/10 via-secondary/5 to-secondary/10 dark:from-white/10 dark:via-white/5 dark:to-white/10 rounded-full animate-pulse transition-all group-hover:from-primary-500/30 group-hover:to-primary-500/30"></div>
                            <div className="h-1.5 w-2/3 mx-auto bg-gradient-to-r from-secondary/5 via-secondary/10 to-secondary/5 dark:from-white/5 dark:via-white/10 dark:to-white/5 rounded-full animate-pulse delay-75 transition-all group-hover:from-primary-500/20 group-hover:to-primary-500/20"></div>
                         </div>
                         
                         <div className="flex flex-col items-center gap-2 mt-2">
                            {/* Price Skeleton as a Glowing Bar */}
                            <div className="h-10 w-32 bg-primary-500/10 dark:bg-primary-500/20 rounded-[20px] relative overflow-hidden group-hover:bg-primary-500/20 transition-colors">
                               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-[shimmer_2s_infinite]"></div>
                            </div>
                         </div>
                      </div>

                      {/* Decorative Bottom Dot */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 size-1.5 rounded-full bg-primary-500/20 group-hover:bg-primary-500 transition-colors"></div>
                    </div>
                  </ScaleIn>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Fonctionnalités V2 (Glassmorphism) */}
        <section className="py-24 bg-background-3 dark:bg-background-8/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary-500/5 blur-[120px] rounded-full pointer-events-none"></div>
          <div className="main-container">
            <div className="text-center mb-16 space-y-4">
              <FadeIn>
                <span className="cb-badge">{t('produitsPhysiques.features.badge')}</span>
                <h2 className="text-heading-3 mb-6 text-secondary dark:text-white">{t('produitsPhysiques.features.title')}</h2>
                <p className="text-secondary/60 dark:text-accent/60 max-w-xl mx-auto leading-relaxed font-medium">{t('produitsPhysiques.features.subtitle')}</p>
              </FadeIn>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuresList.map((feat, i) => (
                <FadeIn key={i} delay={0.1 + (i * 0.05)}>
                  <div className="p-8 bg-white/40 dark:bg-white/[0.02] backdrop-blur-xl rounded-[32px] border border-white/20 dark:border-white/5 transition-all duration-500 hover:shadow-2xl hover:bg-white/60 dark:hover:bg-white/[0.04] group hover:-translate-y-2">
                    <div className="w-14 h-14 rounded-2xl bg-primary-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                      <feat.icon className="w-7 h-7 text-primary-500" />
                    </div>
                    <h3 className="text-xl mb-3 text-secondary dark:text-white">{feat.title}</h3>
                    <p className="text-secondary/60 dark:text-accent/60 leading-relaxed font-medium">
                      {feat.desc}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Dashboard Orders UI */}
        <section className="py-32 relative overflow-hidden">
          <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-primary-500/10 blur-[150px] rounded-full pointer-events-none"></div>
          <div className="main-container">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <FadeIn className="order-2 lg:order-1 relative">
                <div className="bg-white dark:bg-background-8 rounded-[36px] shadow-2xl border border-stroke-1 dark:border-white/5 overflow-hidden">
                  {/* Window Header */}
                  <div className="bg-background-3 dark:bg-background-9/50 px-6 py-4 flex items-center gap-4 border-b border-stroke-1 dark:border-white/5">
                    <div className="flex gap-2">
                      <div className="size-3 rounded-full bg-red-400"></div>
                      <div className="size-3 rounded-full bg-amber-400"></div>
                      <div className="size-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="text-xs font-semibold text-secondary/40 dark:text-accent/40">{t('produitsPhysiques.dashboard.window.title')}</div>
                  </div>
                  {/* Orders List */}
                  <div className="p-6 space-y-4">
                    {dashboardOrders.map((order, idx) => (
                      <div key={idx} className="flex items-center justify-between p-4 rounded-2xl bg-background-2 dark:bg-background-7 border border-stroke-1/50 dark:border-white/5 hover:bg-background-3 dark:hover:bg-background-6 transition-colors cursor-pointer">
                        <div className="flex items-center gap-4">
                          <div className="size-12 rounded-xl bg-white dark:bg-background-8 flex items-center justify-center shadow-sm">
                            <order.icon className="size-5 text-secondary/50 dark:text-accent/50" />
                          </div>
                          <div>
                            <p className="font-bold text-sm tracking-wide text-secondary dark:text-white">{order.num}</p>
                            <p className="text-xs text-secondary/50 mt-0.5">{order.time}</p>
                          </div>
                        </div>
                        <span className={`px-3 py-1.5 rounded-full text-[11px] font-bold ${order.color}`}>
                          {order.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
              
              <div className="order-1 lg:order-2 space-y-6">
                <FadeIn delay={0.1}>
                  <span className="badge bg-primary-500/10 text-primary-500 font-medium">{t('produitsPhysiques.dashboard.content.badge')}</span>
                  <h2 className="text-heading-4  mt-4 text-secondary dark:text-white">{t('produitsPhysiques.dashboard.content.title')}</h2>
                  <p className="text-lg text-secondary/70 dark:text-accent/70 leading-relaxed mt-4">
                    {t('produitsPhysiques.dashboard.content.desc')}
                  </p>
                  <ul className="space-y-4 mt-8">
                    {(t('produitsPhysiques.dashboard.content.features', { returnObjects: true }) as string[]).map((feat, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="size-6 rounded-full bg-primary-500/10 flex items-center justify-center shrink-0">
                          <Check className="size-4 text-primary-500" />
                        </div>
                        <span className=" text-[15px] text-secondary dark:text-white">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* Logistique & Expédition */}
        <section className="py-24 bg-white dark:bg-background-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none"></div>
          <div className="main-container relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <FadeIn delay={0.1}>
                  <span className="badge bg-blue-500/10 text-blue-500 font-medium">{t('produitsPhysiques.logistics.content.badge')}</span>
                  <h2 className="text-heading-4  mt-4 text-secondary dark:text-white">{t('produitsPhysiques.logistics.content.title')}</h2>
                  <p className=" text-secondary/70 dark:text-accent/70 leading-relaxed mt-4">
                    {t('produitsPhysiques.logistics.content.desc')}
                  </p>
                  <div className="grid grid-cols-2 gap-4 mt-8">
                    {(() => {
                      const logisticsFeatures = t('produitsPhysiques.logistics.content.features', { returnObjects: true }) as any[];
                      return (
                        <>
                          <div className="bg-background-2 dark:bg-background-7 p-5 rounded-2xl border border-stroke-1 dark:border-white/5">
                            <Truck className="size-6 text-blue-500 mb-3" />
                            <h4 className="font-bold text-sm text-secondary dark:text-white">{logisticsFeatures[0].title}</h4>
                            <p className="text-xs text-secondary/60 mt-1">{logisticsFeatures[0].desc}</p>
                          </div>
                          <div className="bg-background-2 dark:bg-background-7 p-5 rounded-2xl border border-stroke-1 dark:border-white/5">
                            <MapPin className="size-6 text-blue-500 mb-3" />
                            <h4 className="font-bold text-sm text-secondary dark:text-white">{logisticsFeatures[1].title}</h4>
                            <p className="text-xs text-secondary/60 mt-1">{logisticsFeatures[1].desc}</p>
                          </div>
                        </>
                      );
                    })()}
                  </div>
                </FadeIn>
              </div>
              <div className="relative h-[500px] flex items-center justify-center">
                 <ScaleIn delay={0.3} className="relative z-10 w-full max-w-sm">
                   <div className="bg-white/80 dark:bg-background-7/80 backdrop-blur-xl rounded-[32px] p-6 shadow-2xl border border-stroke-1/50 dark:border-white/5 space-y-6">
                     <div className="flex justify-between items-center">
                       <div>
                         <p className="text-xs text-secondary/50 font-bold uppercase tracking-wider">{t('produitsPhysiques.logistics.visual.statusLabel')}</p>
                         <p className="font-bold text-secondary dark:text-white mt-1">{t('produitsPhysiques.logistics.visual.statusValue')}</p>
                       </div>
                       <div className="size-10 rounded-full bg-blue-500/10 flex items-center justify-center"><Truck className="size-5 text-blue-500"/></div>
                     </div>
                     <div className="relative pl-6 space-y-6 border-l-2 border-stroke-1 dark:border-white/10 ml-3">
                        {(() => {
                          const steps = t('produitsPhysiques.logistics.visual.steps', { returnObjects: true }) as any[];
                          return (
                            <>
                              <div className="relative">
                                <div className="absolute -left-[31px] top-1 size-4 rounded-full bg-blue-500 border-4 border-white dark:border-background-7"></div>
                                <p className="text-sm font-bold text-secondary dark:text-white">{steps[0].title}</p>
                                <p className="text-xs text-secondary/50">{steps[0].time}</p>
                              </div>
                              <div className="relative z-10 opacity-50">
                                <div className="absolute -left-[31px] top-1 size-4 rounded-full bg-stroke-1 dark:bg-white/20 border-4 border-white dark:border-background-7"></div>
                                <p className="text-sm font-bold text-secondary dark:text-white">{steps[1].title}</p>
                                <p className="text-xs text-secondary/50">{steps[1].time}</p>
                              </div>
                            </>
                          );
                        })()}
                     </div>
                   </div>
                 </ScaleIn>
              </div>
            </div>
          </div>
        </section>

        {/* Paiement & Encaissement */}
        <section className="py-24 bg-background-3 dark:bg-background-7 relative overflow-hidden">
          <div className="main-container">
            <div className="bg-white/50 dark:bg-background-8/50 backdrop-blur-xl rounded-[40px] border border-stroke-1 dark:border-white/5 p-10 md:p-16 relative overflow-hidden">
              <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-green-500/10 blur-[100px] rounded-full"></div>
              <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
                <div className="order-2 lg:order-1 flex justify-center">
                  <ScaleIn delay={0.2} className="relative">
                    {/* Mockup tel ou carte */}
                    <div className="w-[280px] bg-white dark:bg-background-6 rounded-[32px] p-6 shadow-xl border border-stroke-1 dark:border-white/5 text-center space-y-6">
                      <div className="size-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto">
                        <ShieldCheck className="size-8 text-green-500" />
                      </div>
                      <div>
                        <p className="text-sm text-secondary/60 dark:text-accent/60">{t('produitsPhysiques.payment.visual.desc')}</p>
                        <p className="text-3xl  text-secondary dark:text-white mt-2">{t('produitsPhysiques.payment.visual.amount')}</p>
                      </div>
                      <div className="h-px w-full bg-stroke-1 dark:bg-white/10"></div>
                      <div className="flex items-center justify-center gap-2 text-sm text-green-500 font-bold">
                        <CheckCircle className="size-4" /> {t('produitsPhysiques.payment.visual.secure')}
                      </div>
                    </div>
                  </ScaleIn>
                </div>
                <div className="order-1 lg:order-2 space-y-6">
                  <FadeIn>
                    <span className="badge bg-green-500/10 text-green-600 dark:text-green-400 font-medium">{t('produitsPhysiques.payment.content.badge')}</span>
                    <h2 className="text-heading-4  mt-4 text-secondary dark:text-white">{t('produitsPhysiques.payment.content.title')}</h2>
                    <p className="text-lg text-secondary/70 dark:text-accent/70 leading-relaxed mt-4">
                      {t('produitsPhysiques.payment.content.desc')}
                    </p>
                    <ul className="space-y-3 mt-6">
                      {(t('produitsPhysiques.payment.content.features', { returnObjects: true }) as string[]).map((feat, i) => (
                        <li key={i} className="flex items-center gap-3 text-secondary/80 dark:text-accent/80 font-medium"><Check className="size-5 text-green-500" /> {feat}</li>
                      ))}
                    </ul>
                  </FadeIn>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Process */}
        <section className="py-24 bg-background-1 dark:bg-background-6 border-t border-stroke-1 dark:border-white/5">
          <div className="main-container">
            <div className="text-center mb-16">
              <FadeIn>
                <span className="badge bg-primary-500/10 text-primary-500 mb-4 inline-block">{t('produitsPhysiques.process.badge')}</span>
                <h2 className="text-heading-3  mb-4 text-secondary dark:text-white">{t('produitsPhysiques.process.title')}</h2>
                <p className="text-secondary/60 dark:text-accent/60 max-w-xl mx-auto">{t('produitsPhysiques.process.subtitle')}</p>
              </FadeIn>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                {processSteps.map((step, i) => (
                  <FadeIn key={i} delay={i * 0.1}>
                    <div className="flex gap-6 items-center p-6 bg-white dark:bg-background-8 rounded-[24px]  border border-stroke-1 dark:border-white/5 group hover:border-blue-500/30 transition-colors">
                      <div className="size-14 rounded-2xl bg-blue-500 text-white flex items-center justify-center font-bold text-xl shadow-lg shadow-blue-500/30 shrink-0">
                        {i + 1}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-1 text-secondary dark:text-white group-hover:text-blue-500 transition-colors">{step.title}</h3>
                        <p className="text-sm text-secondary/60 dark:text-accent/60 line-clamp-2 md:line-clamp-none">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-white dark:bg-background-8">
          <div className="main-container max-w-3xl">
            <div className="text-center mb-16">
              <FadeIn>
                <h2 className="text-heading-3  mb-4 text-secondary dark:text-white">{t('produitsPhysiques.faq.title')}</h2>
              </FadeIn>
            </div>
            <div className="space-y-4">
              {(t('produitsPhysiques.faq.items', { returnObjects: true }) as any[]).map((faq, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="p-6 bg-background-2 dark:bg-background-7 rounded-2xl border border-stroke-1 dark:border-white/5">
                    <h4 className="text-lg font-bold text-secondary dark:text-white mb-2">{faq.q}</h4>
                    <p className="text-secondary/70 dark:text-accent/70">{faq.a}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cb-cta-section">
          <div className="cb-container">
            <div className="cb-max-w-4xl cb-text-center space-y-8">
              <FadeIn delay={0.2}>
                <h2 className="text-heading-3">
                  {t('produitsPhysiques.cta.title')}
                </h2>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p className="">
                  {t('produitsPhysiques.cta.subtitle')}
                </p>
              </FadeIn>
              <FadeIn delay={0.4}>
                <div className="cb-text-center">
                  <a href={REGISTER_URL_FREE} className="cb-btn">
                    <span className="inline-block first-letter:uppercase">
                      {t('produitsPhysiques.cta.button')}
                    </span>
                  </a>
                </div>
              </FadeIn>
              <FadeIn delay={0.5}>
                <ul className="cb-footer-list flex flex-wrap justify-center gap-6 mt-8">
                  {(t('produitsPhysiques.cta.perks', { returnObjects: true }) as string[]).map((perk, i) => (
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
