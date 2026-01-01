'use client';

import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { FadeIn } from '@/components/animations/FadeIn';
import { Check, Package, Image as ImageIcon, Layers, TrendingUp, AlertCircle, Barcode, FileSpreadsheet } from 'lucide-react';

export default function ProduitsPhysiquesPage() {
  return (
    <div className="bg-background-1 dark:bg-background-6">
      <Header />
      <main>
        {/* Hero Section centré avec visual */}
        <section className="pb-14 pt-18 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[120px] xl:pb-[100px] xl:pt-[160px]">
          <div className="main-container">
            <div className="text-center space-y-6 mb-[70px]">
              <FadeIn delay={0.2}>
                <span className="badge bg-primary-500 text-white">Produits physiques</span>
              </FadeIn>
              <FadeIn delay={0.3}>
                <h1 className="xl:max-w-[878px] max-w-[700px] mx-auto text-heading-2 lg:text-heading-1">
                  Vendez vos produits avec simplicité
                </h1>
              </FadeIn>
              <FadeIn delay={0.4}>
                <p className="xl:max-w-[700px] max-w-[600px] mx-auto text-lg">
                  Créez votre catalogue, gérez vos stocks et expédiez vos commandes en toute simplicité.
                </p>
              </FadeIn>
              <FadeIn delay={0.5}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center rounded-full cursor-pointer gap-2.5 bg-secondary hover:scale-101 text-center transition-all duration-500 ease-in-out font-medium text-nowrap lowercase hover:bg-primary-500 text-accent hover:text-accent text-tagline-1 md:px-6 px-4 md:py-3.5 py-2.5"
                  >
                    <span className="inline-block first-letter:uppercase">
                      Créer mon catalogue
                    </span>
                  </a>
                </div>
              </FadeIn>
            </div>
            {/* Products Grid Visual */}
            <FadeIn delay={0.6}>
              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { name: 'Sac à dos Premium', price: '45', image: 'photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop', badge: 'Nouveau' },
                    { name: 'Montre Élégante', price: '120', image: 'photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop', badge: '-20%' },
                    { name: 'Basket Confort', price: '85', image: 'photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop', badge: 'Populaire' },
                    { name: 'Lunettes de Soleil', price: '65', image: 'photo-1572635196237-14b3f281503f?w=600&h=600&fit=crop', badge: 'Tendance' },
                  ].map((product, i) => (
                    <div key={i} className="group rounded-2xl overflow-hidden bg-white dark:bg-background-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                      <div className="relative aspect-square overflow-hidden bg-background-2 dark:bg-background-5">
                        <img
                          src={`https://images.unsplash.com/${product.image}`}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-3 right-3">
                          <div className="h-6 w-16 bg-stroke-1/50 dark:bg-stroke-7/50 backdrop-blur-sm rounded-full animate-pulse"></div>
                        </div>
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                      </div>
                      <div className="p-5 space-y-3">
                        <div className="space-y-2">
                          <div className="h-4 bg-stroke-1 dark:bg-stroke-7 rounded w-3/4 animate-pulse"></div>
                          <div className="h-3 bg-stroke-1 dark:bg-stroke-7 rounded w-1/2 animate-pulse"></div>
                        </div>
                        <div className="flex items-center justify-between pt-2">
                          <div className="flex flex-col gap-2">
                            <div className="h-7 bg-stroke-1 dark:bg-stroke-7 rounded w-20 animate-pulse"></div>
                            <div className="h-3 bg-stroke-1 dark:bg-stroke-7 rounded w-24 animate-pulse"></div>
                          </div>
                          <div className="size-10 bg-stroke-1 dark:bg-stroke-7 rounded-full animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
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
                  Tout pour gérer vos produits physiques
                </h2>
              </FadeIn>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <FadeIn delay={0.4}>
                <div className="space-y-4 p-6 rounded-2xl bg-background-1 dark:bg-background-6 border border-stroke-1 dark:border-stroke-7 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-primary-500">
                    <Package className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-heading-6 font-bold">Catalogue illimité</h3>
                  <p className="text-sm text-secondary/80 dark:text-accent/80">
                    Créez autant de produits que vous le souhaitez
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.5}>
                <div className="space-y-4 p-6 rounded-2xl bg-background-1 dark:bg-background-6 border border-stroke-1 dark:border-stroke-7 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-pink-500">
                    <ImageIcon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-heading-6 font-bold">Photos multiples</h3>
                  <p className="text-sm text-secondary/80 dark:text-accent/80">
                    Ajoutez plusieurs photos par produit
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.6}>
                <div className="space-y-4 p-6 rounded-2xl bg-background-1 dark:bg-background-6 border border-stroke-1 dark:border-stroke-7 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-purple-500">
                    <Layers className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-heading-6 font-bold">Variations</h3>
                  <p className="text-sm text-secondary/80 dark:text-accent/80">
                    Tailles, couleurs et options
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.7}>
                <div className="space-y-4 p-6 rounded-2xl bg-background-1 dark:bg-background-6 border border-stroke-1 dark:border-stroke-7 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-emerald-500">
                    <TrendingUp className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-heading-6 font-bold">Suivi stocks</h3>
                  <p className="text-sm text-secondary/80 dark:text-accent/80">
                    Gestion en temps réel
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.8}>
                <div className="space-y-4 p-6 rounded-2xl bg-background-1 dark:bg-background-6 border border-stroke-1 dark:border-stroke-7 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-orange-500">
                    <AlertCircle className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-heading-6 font-bold">Alertes rupture</h3>
                  <p className="text-sm text-secondary/80 dark:text-accent/80">
                    Notifications automatiques
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.9}>
                <div className="space-y-4 p-6 rounded-2xl bg-background-1 dark:bg-background-6 border border-stroke-1 dark:border-stroke-7 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-cyan-500">
                    <Barcode className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-heading-6 font-bold">Codes-barres</h3>
                  <p className="text-sm text-secondary/80 dark:text-accent/80">
                    SKU et codes-barres
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={1.0}>
                <div className="space-y-4 p-6 rounded-2xl bg-background-1 dark:bg-background-6 border border-stroke-1 dark:border-stroke-7 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-violet-500">
                    <FileSpreadsheet className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-heading-6 font-bold">Import/Export</h3>
                  <p className="text-sm text-secondary/80 dark:text-accent/80">
                    CSV pour vos produits
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={1.1}>
                <div className="space-y-4 p-6 rounded-2xl bg-background-1 dark:bg-background-6 border border-stroke-1 dark:border-stroke-7 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-green-500">
                    <Check className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-heading-6 font-bold">Facile à utiliser</h3>
                  <p className="text-sm text-secondary/80 dark:text-accent/80">
                    Interface intuitive
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Processus */}
        <section className="py-[100px] lg:py-[150px]">
          <div className="main-container">
            <div className="text-center space-y-3 mb-[70px]">
              <FadeIn delay={0.2}>
                <span className="badge bg-primary-500 text-white">Comment ça marche</span>
              </FadeIn>
              <FadeIn delay={0.3}>
                <h2 className="xl:max-w-[878px] max-w-[600px] mx-auto">
                  Vendez en 5 étapes simples
                </h2>
              </FadeIn>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              <FadeIn delay={0.4}>
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-blue-500 text-white flex items-center justify-center font-bold text-xl">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="text-heading-5 mb-2">Ajoutez vos produits avec photos</h3>
                    <p className="text-secondary/80 dark:text-accent/80">
                      Créez vos fiches produits avec titre, description, prix et photos de qualité.
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.5}>
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 text-white flex items-center justify-center font-bold text-xl">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="text-heading-5 mb-2">Définissez prix et variations</h3>
                    <p className="text-secondary/80 dark:text-accent/80">
                      Configurez les prix, promotions et variations (tailles, couleurs) pour chaque produit.
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.6}>
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 text-white flex items-center justify-center font-bold text-xl">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="text-heading-5 mb-2">Gérez votre stock</h3>
                    <p className="text-secondary/80 dark:text-accent/80">
                      Suivez vos stocks en temps réel avec des alertes automatiques en cas de rupture.
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.7}>
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 text-white flex items-center justify-center font-bold text-xl">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="text-heading-5 mb-2">Recevez les commandes</h3>
                    <p className="text-secondary/80 dark:text-accent/80">
                      Les commandes arrivent automatiquement dans votre tableau de bord avec toutes les informations.
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.8}>
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 text-white flex items-center justify-center font-bold text-xl">
                    5
                  </div>
                  <div className="flex-1">
                    <h3 className="text-heading-5 mb-2">Expédiez et suivez les livraisons</h3>
                    <p className="text-secondary/80 dark:text-accent/80">
                      Gérez l'expédition et le suivi de livraison directement depuis votre interface.
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
                  Commencez à vendre vos produits dès maintenant
                </h2>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p className="text-lg max-w-2xl mx-auto">
                  Créez votre boutique gratuitement et ajoutez vos premiers produits en quelques minutes.
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
                    <span>Produits illimités</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-primary-500" />
                    <span>Gestion de stock incluse</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-primary-500" />
                    <span>Support 24/7</span>
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
