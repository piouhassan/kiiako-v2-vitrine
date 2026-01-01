'use client';

import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { FadeIn } from '@/components/animations/FadeIn';
import { SlideIn } from '@/components/animations/SlideIn';
import { Check, Store, Globe, Palette, ShoppingBag, Users, Zap } from 'lucide-react';

export default function CreerBoutiquePage() {
  return (
    <div className="bg-background-1 dark:bg-background-6">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pb-14 pt-18 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[120px] xl:pb-[100px] xl:pt-[160px]">
          <div className="main-container">
            <div className="text-center space-y-6 mb-[70px]">
              <FadeIn delay={0.2}>
                <span className="badge bg-primary-500 text-white">Créer votre boutique</span>
              </FadeIn>
              <FadeIn delay={0.3}>
                <h1 className="xl:max-w-[878px] max-w-[700px] mx-auto text-heading-2 lg:text-heading-1">
                  Lancez votre boutique en ligne en quelques minutes
                </h1>
              </FadeIn>
              <FadeIn delay={0.4}>
                <p className="xl:max-w-[700px] max-w-[600px] mx-auto text-lg">
                  Créez une boutique professionnelle sans compétences techniques. Interface intuitive, templates modernes et personnalisation complète.
                </p>
              </FadeIn>
              <FadeIn delay={0.5}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center rounded-full cursor-pointer gap-2.5 bg-secondary group-hover:scale-101 text-center transition-all duration-500 ease-in-out font-medium text-nowrap lowercase hover:bg-primary-500 text-accent hover:text-accent text-tagline-1 md:px-6 px-4 md:py-3.5 py-2.5"
                  >
                    <span className="inline-block first-letter:uppercase">
                      Créer ma boutique gratuite
                    </span>
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center rounded-full cursor-pointer gap-2.5 border border-stroke-1 hover:bg-secondary text-center transition-all duration-500 ease-in-out font-medium text-nowrap lowercase bg-background-1 text-secondary hover:text-accent text-tagline-1 md:px-6 px-4 md:py-3.5 py-2.5"
                  >
                    <span className="inline-block first-letter:uppercase">
                      Voir une démo
                    </span>
                  </a>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Fonctionnalités principales */}
        <section className="bg-background-2 dark:bg-background-5 py-[100px]">
          <div className="main-container">
            <div className="text-center space-y-3 mb-[70px]">
              <FadeIn delay={0.2}>
                <span className="badge bg-primary-500 text-white">Fonctionnalités</span>
              </FadeIn>
              <FadeIn delay={0.3}>
                <h2 className="xl:max-w-[878px] max-w-[600px] mx-auto">
                  Tout ce dont vous avez besoin pour réussir
                </h2>
              </FadeIn>
            </div>
            <div className="grid grid-cols-12 gap-y-12 md:gap-8 lg:gap-10">
              <FadeIn delay={0.4} className="col-span-12 md:col-span-6 lg:col-span-4">
                <div className="space-y-6 p-8 rounded-2xl bg-background-1 dark:bg-background-6 border border-stroke-1 dark:border-stroke-7 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary-500/10">
                    <Zap className="w-7 h-7 text-primary-500" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-heading-5">Inscription gratuite en 30 secondes</h3>
                    <p>Démarrez immédiatement sans aucun frais initial. Aucune carte bancaire requise.</p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.5} className="col-span-12 md:col-span-6 lg:col-span-4">
                <div className="space-y-6 p-8 rounded-2xl bg-background-1 dark:bg-background-6 border border-stroke-1 dark:border-stroke-7 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary-500/10">
                    <Globe className="w-7 h-7 text-primary-500" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-heading-5">Nom de domaine personnalisé automatique</h3>
                    <p>Obtenez automatiquement votre propre nom de domaine professionnel (votreboutique.kiiako.shop).</p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.6} className="col-span-12 md:col-span-6 lg:col-span-4">
                <div className="space-y-6 p-8 rounded-2xl bg-background-1 dark:bg-background-6 border border-stroke-1 dark:border-stroke-7 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary-500/10">
                    <Palette className="w-7 h-7 text-primary-500" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-heading-5">Builder visuel drag-and-drop</h3>
                    <p>Personnalisez votre boutique facilement avec notre éditeur visuel intuitif sans aucun code.</p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.7} className="col-span-12 md:col-span-6 lg:col-span-4">
                <div className="space-y-6 p-8 rounded-2xl bg-background-1 dark:bg-background-6 border border-stroke-1 dark:border-stroke-7 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary-500/10">
                    <Store className="w-7 h-7 text-primary-500" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-heading-5">Templates professionnels inclus</h3>
                    <p>Choisissez parmi une sélection de templates modernes et professionnels prêts à l'emploi.</p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.8} className="col-span-12 md:col-span-6 lg:col-span-4">
                <div className="space-y-6 p-8 rounded-2xl bg-background-1 dark:bg-background-6 border border-stroke-1 dark:border-stroke-7 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary-500/10">
                    <ShoppingBag className="w-7 h-7 text-primary-500" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-heading-5">Nombre illimité de boutiques</h3>
                    <p>Créez autant de boutiques que vous le souhaitez, gratuites ou payantes, selon vos besoins.</p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.9} className="col-span-12 md:col-span-6 lg:col-span-4">
                <div className="space-y-6 p-8 rounded-2xl bg-background-1 dark:bg-background-6 border border-stroke-1 dark:border-stroke-7 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary-500/10">
                    <Users className="w-7 h-7 text-primary-500" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-heading-5">Gestion multi-boutiques depuis un seul compte</h3>
                    <p>Gérez toutes vos boutiques facilement depuis un tableau de bord centralisé.</p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Comment ça marche */}
        <section className="py-[100px] lg:py-[150px]">
          <div className="main-container">
            <div className="text-center space-y-3 mb-[70px]">
              <FadeIn delay={0.2}>
                <span className="badge bg-primary-500 text-white">Comment ça marche</span>
              </FadeIn>
              <FadeIn delay={0.3}>
                <h2 className="xl:max-w-[878px] max-w-[600px] mx-auto">
                  5 étapes simples pour lancer votre boutique
                </h2>
              </FadeIn>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              <FadeIn delay={0.4}>
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-500 text-white flex items-center justify-center font-bold text-xl">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="text-heading-5 mb-2">Créez votre compte gratuitement</h3>
                    <p className="text-secondary/80 dark:text-accent/80">
                      Inscrivez-vous en quelques secondes sans aucun frais. Aucune carte bancaire n'est requise pour commencer.
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.5}>
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-500 text-white flex items-center justify-center font-bold text-xl">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="text-heading-5 mb-2">Choisissez votre nom de domaine</h3>
                    <p className="text-secondary/80 dark:text-accent/80">
                      Obtenez automatiquement un nom de domaine personnalisé pour votre boutique (votreboutique.kiiako.shop).
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.6}>
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-500 text-white flex items-center justify-center font-bold text-xl">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="text-heading-5 mb-2">Personnalisez votre boutique avec le builder</h3>
                    <p className="text-secondary/80 dark:text-accent/80">
                      Utilisez notre builder visuel drag-and-drop pour créer une boutique unique qui vous ressemble.
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.7}>
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-500 text-white flex items-center justify-center font-bold text-xl">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="text-heading-5 mb-2">Ajoutez vos produits</h3>
                    <p className="text-secondary/80 dark:text-accent/80">
                      Créez votre catalogue de produits avec des photos, descriptions, prix et variations.
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.8}>
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-500 text-white flex items-center justify-center font-bold text-xl">
                    5
                  </div>
                  <div className="flex-1">
                    <h3 className="text-heading-5 mb-2">Commencez à vendre</h3>
                    <p className="text-secondary/80 dark:text-accent/80">
                      Votre boutique est prête ! Partagez votre lien et commencez à recevoir des commandes dès aujourd'hui.
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Avantages */}
        <section className="bg-background-2 dark:bg-background-5 py-[100px]">
          <div className="main-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20">
              <div className="space-y-6">
                <FadeIn delay={0.2}>
                  <span className="badge bg-primary-500 text-white">Pourquoi Kiiako</span>
                </FadeIn>
                <FadeIn delay={0.3}>
                  <h2 className="max-w-[592px]">
                    Une solution complète pour votre réussite en ligne
                  </h2>
                </FadeIn>
                <FadeIn delay={0.4}>
                  <p className="text-lg">
                    Kiiako vous offre tous les outils nécessaires pour créer, gérer et développer votre boutique en ligne avec succès. Aucune compétence technique requise.
                  </p>
                </FadeIn>
                <ul className="space-y-4 mt-8">
                  <FadeIn delay={0.5}>
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-500/10 flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-primary-500" />
                      </div>
                      <span>100% gratuit pour démarrer, aucune carte bancaire requise</span>
                    </li>
                  </FadeIn>
                  <FadeIn delay={0.6}>
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-500/10 flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-primary-500" />
                      </div>
                      <span>Configuration en quelques minutes, pas en quelques jours</span>
                    </li>
                  </FadeIn>
                  <FadeIn delay={0.7}>
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-500/10 flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-primary-500" />
                      </div>
                      <span>Interface intuitive conçue pour le marché africain</span>
                    </li>
                  </FadeIn>
                  <FadeIn delay={0.8}>
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-500/10 flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-primary-500" />
                      </div>
                      <span>Support client disponible pour vous accompagner</span>
                    </li>
                  </FadeIn>
                  <FadeIn delay={0.9}>
                    <li className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-500/10 flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-primary-500" />
                      </div>
                      <span>Paiement Mobile Money et livraison intégrés</span>
                    </li>
                  </FadeIn>
                </ul>
              </div>
              <div className="relative">
                <FadeIn delay={0.4}>
                  <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800&h=600&fit=crop"
                      alt="Boutique en ligne"
                      className="w-full h-full object-cover aspect-[4/3]"
                    />
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-[100px] lg:py-[150px]">
          <div className="main-container">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <FadeIn delay={0.2}>
                <h2 className="text-heading-2">
                  Prêt à lancer votre boutique en ligne ?
                </h2>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p className="text-lg max-w-2xl mx-auto">
                  Rejoignez des milliers de vendeurs qui ont choisi Kiiako pour développer leur activité en ligne. Commencez gratuitement dès aujourd'hui.
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
                    <span>100% gratuit pour démarrer</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-primary-500" />
                    <span>Aucune carte bancaire requise</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-primary-500" />
                    <span>Support disponible 24/7</span>
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
