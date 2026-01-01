'use client';

import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { FadeIn } from '@/components/animations/FadeIn';
import { SlideIn } from '@/components/animations/SlideIn';
import { Check, Star, MessageSquare, Image as ImageIcon, ShieldCheck, TrendingUp, BarChart } from 'lucide-react';

export default function AvisClientsPage() {
  return (
    <div className="bg-background-1 dark:bg-background-6">
      <Header />
      <main>
        {/* Hero Section avec split */}
        <section className="pb-14 pt-18 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[120px] xl:pb-[100px] xl:pt-[160px]">
          <div className="main-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="order-2 lg:order-1 relative">
                <SlideIn direction="left" delay={0.4}>
                  <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop"
                      alt="Avis clients satisfaits"
                      className="w-full h-full object-cover aspect-[4/3]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background-2/95 dark:from-background-5/95 via-background-2/80 dark:via-background-5/80 to-transparent flex items-end p-8">
                      <div className="space-y-4 w-full">
                        {[5, 4, 5].map((stars, i) => (
                          <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-background-1/90 dark:bg-background-6/90 backdrop-blur-sm">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white font-bold">
                              {String.fromCharCode(65 + i)}
                            </div>
                            <div className="flex-1">
                              <div className="flex gap-1 mb-2">
                                {[...Array(stars)].map((_, j) => (
                                  <Star key={j} className="w-4 h-4 fill-amber-500 text-amber-500" />
                                ))}
                              </div>
                              <div className="h-2 bg-stroke-1 dark:bg-stroke-7 rounded w-full mb-1"></div>
                              <div className="h-2 bg-stroke-1 dark:bg-stroke-7 rounded w-3/4"></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </SlideIn>
              </div>
              <div className="order-1 lg:order-2 space-y-6">
                <FadeIn delay={0.2}>
                  <span className="badge bg-primary-500 text-white">Avis clients</span>
                </FadeIn>
                <FadeIn delay={0.3}>
                  <h1 className="text-heading-2 lg:text-heading-1">
                    Montrez la confiance de vos clients
                  </h1>
                </FadeIn>
                <FadeIn delay={0.4}>
                  <p className="text-lg text-secondary/80 dark:text-accent/80">
                    Collectez et affichez les avis de vos clients pour booster vos ventes.
                  </p>
                </FadeIn>
                <FadeIn delay={0.5}>
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <a
                      href="#"
                      className="inline-flex items-center justify-center rounded-full cursor-pointer gap-2.5 bg-secondary hover:scale-101 text-center transition-all duration-500 ease-in-out font-medium text-nowrap lowercase hover:bg-primary-500 text-accent hover:text-accent text-tagline-1 md:px-6 px-4 md:py-3.5 py-2.5"
                    >
                      <span className="inline-block first-letter:uppercase">
                        Activer les avis
                      </span>
                    </a>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* Fonctionnalités */}
        <section className="bg-background-2 dark:bg-background-5 py-[100px]">
          <div className="main-container">
            <div className="text-center space-y-3 mb-[70px]">
              <FadeIn delay={0.2}>
                <span className="badge bg-primary-500 text-white">Fonctionnalités complètes</span>
              </FadeIn>
              <FadeIn delay={0.3}>
                <h2 className="xl:max-w-[878px] max-w-[600px] mx-auto">
                  Système d'avis complet et automatisé
                </h2>
              </FadeIn>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <FadeIn delay={0.4}>
                <div className="space-y-6 p-8 rounded-2xl bg-background-1 dark:bg-background-6 border border-stroke-1 dark:border-stroke-7 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500">
                    <MessageSquare className="w-8 h-8 text-white" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-heading-5">Collecte automatique d'avis</h3>
                    <p className="text-secondary/80 dark:text-accent/80">
                      Envoi automatique d'emails après chaque achat pour demander un avis à vos clients.
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.5}>
                <div className="space-y-6 p-8 rounded-2xl bg-background-1 dark:bg-background-6 border border-stroke-1 dark:border-stroke-7 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-500 to-amber-500">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-heading-5">Système de notation par étoiles</h3>
                    <p className="text-secondary/80 dark:text-accent/80">
                      Notation de 1 à 5 étoiles avec commentaires détaillés de vos clients.
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.6}>
                <div className="space-y-6 p-8 rounded-2xl bg-background-1 dark:bg-background-6 border border-stroke-1 dark:border-stroke-7 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500">
                    <ImageIcon className="w-8 h-8 text-white" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-heading-5">Avis avec photos et vidéos</h3>
                    <p className="text-secondary/80 dark:text-accent/80">
                      Vos clients peuvent ajouter des photos et vidéos pour illustrer leurs avis.
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.7}>
                <div className="space-y-6 p-8 rounded-2xl bg-background-1 dark:bg-background-6 border border-stroke-1 dark:border-stroke-7 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500">
                    <ShieldCheck className="w-8 h-8 text-white" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-heading-5">Modération des avis</h3>
                    <p className="text-secondary/80 dark:text-accent/80">
                      Validez manuellement ou automatiquement les avis avant leur publication sur votre boutique.
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.8}>
                <div className="space-y-6 p-8 rounded-2xl bg-background-1 dark:bg-background-6 border border-stroke-1 dark:border-stroke-7 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-heading-5">Widget d'affichage personnalisable</h3>
                    <p className="text-secondary/80 dark:text-accent/80">
                      Affichez les avis partout sur votre boutique avec un widget entièrement personnalisable.
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.9}>
                <div className="space-y-6 p-8 rounded-2xl bg-background-1 dark:bg-background-6 border border-stroke-1 dark:border-stroke-7 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-500">
                    <BarChart className="w-8 h-8 text-white" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-heading-5">Statistiques de satisfaction</h3>
                    <p className="text-secondary/80 dark:text-accent/80">
                      Suivez le niveau de satisfaction de vos clients avec des statistiques détaillées.
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Bénéfices */}
        <section className="py-[100px] lg:py-[150px]">
          <div className="main-container">
            <div className="text-center space-y-3 mb-[70px]">
              <FadeIn delay={0.2}>
                <span className="badge bg-primary-500 text-white">Bénéfices</span>
              </FadeIn>
              <FadeIn delay={0.3}>
                <h2 className="xl:max-w-[878px] max-w-[600px] mx-auto">
                  Pourquoi les avis clients sont essentiels ?
                </h2>
              </FadeIn>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <FadeIn delay={0.4}>
                <div className="text-center space-y-4">
                  <div className="flex justify-center">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                      <TrendingUp className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  <h3 className="text-heading-5">Augmente la confiance</h3>
                  <p className="text-secondary/80 dark:text-accent/80">
                    Les avis authentiques rassurent vos nouveaux visiteurs et augmentent leur confiance.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.5}>
                <div className="text-center space-y-4">
                  <div className="flex justify-center">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                      <Check className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  <h3 className="text-heading-5">Améliore les conversions</h3>
                  <p className="text-secondary/80 dark:text-accent/80">
                    Les boutiques avec avis clients convertissent jusqu'à 270% plus que celles sans avis.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.6}>
                <div className="text-center space-y-4">
                  <div className="flex justify-center">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                      <ShieldCheck className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  <h3 className="text-heading-5">Réduit les hésitations</h3>
                  <p className="text-secondary/80 dark:text-accent/80">
                    Les avis positifs aident vos prospects à prendre leur décision d'achat plus rapidement.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.7}>
                <div className="text-center space-y-4">
                  <div className="flex justify-center">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center">
                      <Star className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  <h3 className="text-heading-5">Meilleur référencement</h3>
                  <p className="text-secondary/80 dark:text-accent/80">
                    Les avis améliorent votre SEO et vos étoiles apparaissent dans les résultats Google.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-background-2 dark:bg-background-5 py-[100px] lg:py-[150px]">
          <div className="main-container">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <FadeIn delay={0.2}>
                <h2 className="text-heading-2">
                  Commencez à collecter des avis dès aujourd'hui
                </h2>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p className="text-lg max-w-2xl mx-auto">
                  Augmentez vos ventes en montrant la satisfaction de vos clients avec un système d'avis automatisé.
                </p>
              </FadeIn>
              <FadeIn delay={0.4}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center rounded-full cursor-pointer gap-2.5 bg-secondary hover:scale-101 text-center transition-all duration-500 ease-in-out font-medium text-nowrap lowercase hover:bg-primary-500 text-accent hover:text-accent text-tagline-1 md:px-8 px-6 md:py-4 py-3"
                  >
                    <span className="inline-block first-letter:uppercase">
                      Créer ma boutique gratuite
                    </span>
                  </a>
                </div>
              </FadeIn>
              <FadeIn delay={0.5}>
                <ul className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-primary-500" />
                    <span>Collecte automatique</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-primary-500" />
                    <span>Widget personnalisable</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-primary-500" />
                    <span>Modération incluse</span>
                  </li>
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
