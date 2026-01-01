'use client';

import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { FadeIn } from '@/components/animations/FadeIn';
import { Check, Globe, Shield, TrendingUp, Zap, Lock } from 'lucide-react';

export default function NomDeDomainePage() {
  return (
    <div className="bg-background-1 dark:bg-background-6">
      <Header />
      <main>
        {/* Hero Section centré */}
        <section className="pb-14 pt-18 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[120px] xl:pb-[100px] xl:pt-[160px]">
          <div className="main-container">
            <div className="text-center space-y-6 mb-[70px]">
              <FadeIn delay={0.2}>
                <span className="badge bg-primary-500 text-white">Nom de domaine</span>
              </FadeIn>
              <FadeIn delay={0.3}>
                <h1 className="xl:max-w-[878px] max-w-[700px] mx-auto text-heading-2 lg:text-heading-1">
                  Votre identité en ligne professionnelle
                </h1>
              </FadeIn>
              <FadeIn delay={0.4}>
                <p className="xl:max-w-[700px] max-w-[600px] mx-auto text-lg">
                  Chaque vendeur obtient automatiquement un nom de domaine personnalisé. Format: votreboutique.kiiako.shop
                </p>
              </FadeIn>
              <FadeIn delay={0.5}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center rounded-full cursor-pointer gap-2.5 bg-secondary hover:scale-101 text-center transition-all duration-500 ease-in-out font-medium text-nowrap lowercase hover:bg-primary-500 text-accent hover:text-accent text-tagline-1 md:px-6 px-4 md:py-3.5 py-2.5"
                  >
                    <span className="inline-block first-letter:uppercase">
                      Obtenir mon domaine
                    </span>
                  </a>
                </div>
              </FadeIn>
            </div>
            {/* Domain visual */}
            <FadeIn delay={0.6}>
              <div className="max-w-4xl mx-auto">
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/img/domain.png"
                    alt="Exemple de nom de domaine personnalisé"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Fonctionnalités en ligne */}
        <section className="bg-background-2 dark:bg-background-5 py-[100px]">
          <div className="main-container">
            <div className="text-center space-y-3 mb-[70px]">
              <FadeIn delay={0.2}>
                <span className="badge bg-primary-500 text-white">Fonctionnalités</span>
              </FadeIn>
              <FadeIn delay={0.3}>
                <h2 className="xl:max-w-[878px] max-w-[600px] mx-auto">
                  Tout est automatique et sécurisé
                </h2>
              </FadeIn>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
              <FadeIn delay={0.4}>
                <div className="text-center space-y-4 p-6 rounded-2xl bg-background-1 dark:bg-background-6 border border-stroke-1 dark:border-stroke-7 hover:shadow-lg transition-all duration-300">
                  <div className="flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary-500/10 flex items-center justify-center">
                      <Zap className="w-8 h-8 text-primary-500" />
                    </div>
                  </div>
                  <h3 className="text-heading-6 font-bold">Domaine automatique</h3>
                  <p className="text-sm text-secondary/80 dark:text-accent/80">
                    Lors de l'inscription
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.5}>
                <div className="text-center space-y-4 p-6 rounded-2xl bg-background-1 dark:bg-background-6 border border-stroke-1 dark:border-stroke-7 hover:shadow-lg transition-all duration-300">
                  <div className="flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center">
                      <Globe className="w-8 h-8 text-emerald-500" />
                    </div>
                  </div>
                  <h3 className="text-heading-6 font-bold">Format professionnel</h3>
                  <p className="text-sm text-secondary/80 dark:text-accent/80">
                    yourshop.kiiako.shop
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.6}>
                <div className="text-center space-y-4 p-6 rounded-2xl bg-background-1 dark:bg-background-6 border border-stroke-1 dark:border-stroke-7 hover:shadow-lg transition-all duration-300">
                  <div className="flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center">
                      <Lock className="w-8 h-8 text-blue-500" />
                    </div>
                  </div>
                  <h3 className="text-heading-6 font-bold">SSL inclus</h3>
                  <p className="text-sm text-secondary/80 dark:text-accent/80">
                    Pour la sécurité
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.7}>
                <div className="text-center space-y-4 p-6 rounded-2xl bg-background-1 dark:bg-background-6 border border-stroke-1 dark:border-stroke-7 hover:shadow-lg transition-all duration-300">
                  <div className="flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-purple-500/10 flex items-center justify-center">
                      <Zap className="w-8 h-8 text-purple-500" />
                    </div>
                  </div>
                  <h3 className="text-heading-6 font-bold">Configuration auto</h3>
                  <p className="text-sm text-secondary/80 dark:text-accent/80">
                    Automatique
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.8}>
                <div className="text-center space-y-4 p-6 rounded-2xl bg-background-1 dark:bg-background-6 border border-stroke-1 dark:border-stroke-7 hover:shadow-lg transition-all duration-300">
                  <div className="flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-pink-500/10 flex items-center justify-center">
                      <Check className="w-8 h-8 text-pink-500" />
                    </div>
                  </div>
                  <h3 className="text-heading-6 font-bold">Sans technique</h3>
                  <p className="text-sm text-secondary/80 dark:text-accent/80">
                    Aucune configuration requise
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Avantages */}
        <section className="py-[100px] lg:py-[150px]">
          <div className="main-container">
            <div className="text-center space-y-3 mb-[70px]">
              <FadeIn delay={0.2}>
                <span className="badge bg-primary-500 text-white">Avantages</span>
              </FadeIn>
              <FadeIn delay={0.3}>
                <h2 className="xl:max-w-[878px] max-w-[600px] mx-auto">
                  Pourquoi un nom de domaine personnalisé ?
                </h2>
              </FadeIn>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
              <FadeIn delay={0.4}>
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-blue-500 flex items-center justify-center">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-heading-5">Image professionnelle instantanée</h3>
                    <p className="text-secondary/80 dark:text-accent/80">
                      Donnez à votre boutique une apparence crédible et professionnelle dès le premier jour avec votre propre nom de domaine.
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.5}>
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                      <Globe className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-heading-5">Mémorisation facile pour vos clients</h3>
                    <p className="text-secondary/80 dark:text-accent/80">
                      Un nom de domaine court et personnalisé est plus facile à retenir et à partager avec vos clients.
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.6}>
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                      <Lock className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-heading-5">Confiance et crédibilité accrues</h3>
                    <p className="text-secondary/80 dark:text-accent/80">
                      Les clients font plus confiance aux boutiques avec leur propre domaine, ce qui augmente les conversions.
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.7}>
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center">
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-heading-5">SEO optimisé</h3>
                    <p className="text-secondary/80 dark:text-accent/80">
                      Un nom de domaine personnalisé améliore votre référencement naturel sur Google et les autres moteurs de recherche.
                    </p>
                  </div>
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
                  Obtenez votre nom de domaine dès aujourd'hui
                </h2>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p className="text-lg max-w-2xl mx-auto">
                  Votre nom de domaine personnalisé est automatiquement configuré lors de la création de votre boutique. Commencez gratuitement !
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
                    <span>Domaine automatique inclus</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-primary-500" />
                    <span>SSL gratuit</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-primary-500" />
                    <span>Configuration automatique</span>
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
