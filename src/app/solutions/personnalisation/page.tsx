'use client';

import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { FadeIn } from '@/components/animations/FadeIn';
import { SlideIn } from '@/components/animations/SlideIn';
import { Check, Paintbrush, Eye, Layout, Palette, Image, Sun, Moon } from 'lucide-react';

export default function PersonnalisationPage() {
  return (
      <div className="bg-background-1 dark:bg-background-6">
        <Header />
        <main>
          {/* Hero Section avec image */}
          <section className="pb-14 pt-18 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[120px] xl:pb-[100px] xl:pt-[160px]">
            <div className="main-container">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div className="space-y-6">
                  <FadeIn delay={0.2}>
                    <span className="badge bg-primary-500 text-white">Personnalisation</span>
                  </FadeIn>
                  <FadeIn delay={0.3}>
                    <h1 className="text-heading-2 lg:text-heading-1">
                      Une boutique unique qui vous ressemble
                    </h1>
                  </FadeIn>
                  <FadeIn delay={0.4}>
                    <p className="text-lg text-secondary/80 dark:text-accent/80">
                      Builder visuel puissant pour créer l'expérience parfaite pour vos clients. Contrôle total sur le design, les couleurs et la mise en page.
                    </p>
                  </FadeIn>
                  <FadeIn delay={0.5}>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <a
                          href="#"
                          className="inline-flex items-center justify-center rounded-full cursor-pointer gap-2.5 bg-primary-500 hover:scale-101 text-center transition-all duration-500 ease-in-out font-medium text-nowrap lowercase hover:bg-primary-500 text-accent hover:text-accent text-tagline-1 md:px-6 px-4 md:py-3.5 py-2.5"
                      >
                      <span className="inline-block first-letter:uppercase">
                        Commencer gratuitement
                      </span>
                      </a>
                    </div>
                  </FadeIn>
                </div>
                <div className="relative">
                  <SlideIn direction="right" delay={0.4}>
                    <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                      <img
                          src="/images/builder.png"
                          alt="Design personnalisé"
                          className="w-full h-full object-cover aspect-[4/3]"
                      />
                    </div>
                  </SlideIn>
                  <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary-500/20 rounded-full blur-3xl"></div>
                  <div className="absolute -top-6 -right-6 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl"></div>
                </div>
              </div>
            </div>
          </section>

          {/* Fonctionnalités en 2 colonnes */}
          <section className="bg-background-2 dark:bg-background-5 py-[100px]">
            <div className="main-container">
              <div className="text-center space-y-3 mb-[70px]">
                <FadeIn delay={0.2}>
                  <span className="badge bg-primary-500 text-white">Fonctionnalités puissantes</span>
                </FadeIn>
                <FadeIn delay={0.3}>
                  <h2 className="xl:max-w-[878px] max-w-[600px] mx-auto">
                    Créez l'expérience parfaite pour vos clients
                  </h2>
                </FadeIn>
              </div>
              <div className="grid grid-cols-4 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <FadeIn delay={0.4}>
                  <div className="space-y-6 p-8 rounded-2xl bg-background-1 dark:bg-background-6 border border-stroke-1 dark:border-stroke-7 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-purple-500">
                      <Layout className="w-8 h-8" style={{color : "#299cdb"}} />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-heading-5">Builder de pages visuel</h3>
                      <p className="text-secondary/80 dark:text-accent/80">
                        Créez vos pages par simple glisser-déposer. Aucune compétence  nécessaire pour créer une boutique professionnelle.
                      </p>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn delay={0.5}>
                  <div className="space-y-6 p-8 rounded-2xl bg-background-1 dark:bg-background-6 border border-stroke-1 dark:border-stroke-7 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500">
                      <Palette className="w-8 h-8" style={{color : "#299cdb"}} />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-heading-5">Personnalisation couleurs</h3>
                      <p className="text-secondary/80 dark:text-accent/80">
                        Choisissez vos couleurs de marque, vos polices préférées et créez une identité visuelle unique qui reflète votre entreprise.
                      </p>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn delay={0.6}>
                  <div className="space-y-6 p-8 rounded-2xl bg-background-1 dark:bg-background-6 border border-stroke-1 dark:border-stroke-7 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500">
                      <Image className="w-8 h-8" style={{color : "#299cdb"}} />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-heading-5">Upload de logo et images</h3>
                      <p className="text-secondary/80 dark:text-accent/80">
                        Importez votre logo, vos images de produits et créez une galerie visuelle qui capte l'attention de vos clients.
                      </p>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn delay={0.7}>
                  <div className="space-y-6 p-8 rounded-2xl bg-background-1 dark:bg-background-6 border border-stroke-1 dark:border-stroke-7 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500">
                      <Eye className="w-8 h-8" style={{color : "#299cdb"}} />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-heading-5">Prévisualisation realtime</h3>
                      <p className="text-secondary/80 dark:text-accent/80">
                        Visualisez instantanément vos modifications . Ce que vous voyez est exactement ce que vos clients verront.
                      </p>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn delay={0.8}>
                  <div className="space-y-6 p-8 rounded-2xl bg-background-1 dark:bg-background-6 border border-stroke-1 dark:border-stroke-7 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500">
                      <Layout className="w-8 h-8" style={{color : "#299cdb"}} />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-heading-5">Sections personnalisables</h3>
                      <p className="text-secondary/80 dark:text-accent/80">
                        Personnalisez chaque section de votre boutique : header, footer, pages produits, catégories et bien plus encore.
                      </p>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn delay={0.9}>
                  <div className="space-y-6 p-8 rounded-2xl bg-background-1 dark:bg-background-6 border border-stroke-1 dark:border-stroke-7 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-500">
                      <div className="flex gap-1">
                        <Sun className="w-5 h-5" style={{color : "#299cdb"}} />
                        <Moon className="w-5 h-5" style={{color : "#299cdb"}} />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-heading-5">Mode sombre/clair</h3>
                      <p className="text-secondary/80 dark:text-accent/80">
                        Offrez à vos clients le choix entre le mode sombre et clair pour une expérience de navigation optimale.
                      </p>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </section>

          {/* Section Avantages avec layout alternatif */}
          <section className="py-[100px] lg:py-[150px]">
            <div className="main-container">
              <div className="max-w-4xl mx-auto">
                <div className="text-center space-y-3 mb-[70px]">
                  <FadeIn delay={0.2}>
                    <span className="badge bg-primary-500 text-white">Avantages</span>
                  </FadeIn>
                  <FadeIn delay={0.3}>
                    <h2>
                      Pourquoi personnaliser votre boutique ?
                    </h2>
                  </FadeIn>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <FadeIn delay={0.4}>
                    <div className="text-center space-y-4">
                      <div className="flex justify-center">
                        <div className="w-20 h-20 rounded-full bg-primary-500/10 flex items-center justify-center">
                          <Check className="w-10 h-10 text-primary-500" />
                        </div>
                      </div>
                      <h3 className="text-heading-5">Démarquez-vous de la concurrence</h3>
                      <p className="text-secondary/80 dark:text-accent/80">
                        Créez une boutique unique qui se distingue et attire l'attention de vos clients potentiels.
                      </p>
                    </div>
                  </FadeIn>

                  <FadeIn delay={0.5}>
                    <div className="text-center space-y-4">
                      <div className="flex justify-center">
                        <div className="w-20 h-20 rounded-full bg-purple-500/10 flex items-center justify-center">
                          <Paintbrush className="w-10 h-10 text-purple-500" />
                        </div>
                      </div>
                      <h3 className="text-heading-5">Renforcez votre identité de marque</h3>
                      <p className="text-secondary/80 dark:text-accent/80">
                        Alignez votre boutique en ligne avec votre image de marque pour une cohérence parfaite.
                      </p>
                    </div>
                  </FadeIn>

                  <FadeIn delay={0.6}>
                    <div className="text-center space-y-4">
                      <div className="flex justify-center">
                        <div className="w-20 h-20 rounded-full bg-pink-500/10 flex items-center justify-center">
                          <Eye className="w-10 h-10 text-pink-500" />
                        </div>
                      </div>
                      <h3 className="text-heading-5">Offrez une expérience unique</h3>
                      <p className="text-secondary/80 dark:text-accent/80">
                        Créez une expérience d'achat mémorable qui fidélise vos clients et booste vos ventes.
                      </p>
                    </div>
                  </FadeIn>
                </div>
              </div>
            </div>
          </section>

          {/* Section Templates */}
          <section className="bg-background-2 dark:bg-background-5 py-[100px]">
            <div className="main-container">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div className="order-2 lg:order-1 relative">
                  <FadeIn delay={0.4}>
                    <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                      <img
                          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop"
                          alt="Templates professionnels"
                          className="w-full h-full object-cover aspect-[4/3]"
                      />
                    </div>
                  </FadeIn>
                </div>
                <div className="order-1 lg:order-2 space-y-6">
                  <FadeIn delay={0.2}>
                    <span className="badge bg-primary-500 text-white">Templates professionnels</span>
                  </FadeIn>
                  <FadeIn delay={0.3}>
                    <h2>
                      Démarrez avec un template prêt à l'emploi
                    </h2>
                  </FadeIn>
                  <FadeIn delay={0.4}>
                    <p className="text-lg text-secondary/80 dark:text-accent/80">
                      Choisissez parmi notre collection de templates professionnels conçus par des designers experts. Chaque template est entièrement personnalisable selon vos besoins.
                    </p>
                  </FadeIn>
                  <ul className="space-y-4">
                    <FadeIn delay={0.5}>
                      <li className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-500/10 flex items-center justify-center mt-1">
                          <Check className="w-4 h-4 text-primary-500" />
                        </div>
                        <span>Templates modernes et responsive</span>
                      </li>
                    </FadeIn>
                    <FadeIn delay={0.6}>
                      <li className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-500/10 flex items-center justify-center mt-1">
                          <Check className="w-4 h-4 text-primary-500" />
                        </div>
                        <span>Optimisés pour la conversion</span>
                      </li>
                    </FadeIn>
                    <FadeIn delay={0.7}>
                      <li className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-500/10 flex items-center justify-center mt-1">
                          <Check className="w-4 h-4 text-primary-500" />
                        </div>
                        <span>Installation en un clic</span>
                      </li>
                    </FadeIn>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-[100px] lg:py-[150px]">
            <div className="main-container">
              <div className="max-w-4xl mx-auto text-center space-y-8 bg-gradient-to-br from-primary-500 to-purple-600 rounded-3xl p-12 lg:p-16">
                <FadeIn delay={0.2}>
                  <h2 className="text-heading-2 text-white">
                    Prêt à créer votre boutique unique ?
                  </h2>
                </FadeIn>
                <FadeIn delay={0.3}>
                  <p className="text-lg text-white/90 max-w-2xl mx-auto">
                    Commencez à personnaliser votre boutique dès aujourd'hui avec notre builder intuitif. Aucune compétence technique requise.
                  </p>
                </FadeIn>
                <FadeIn delay={0.4}>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a
                        href="#"
                        className="inline-flex items-center justify-center rounded-full cursor-pointer gap-2.5 bg-white hover:scale-101 text-center transition-all duration-500 ease-in-out font-medium text-nowrap lowercase hover:bg-white/90 text-secondary text-tagline-1 md:px-8 px-6 md:py-4 py-3"
                    >
                    <span className="inline-block first-letter:uppercase">
                      Commencer gratuitement
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
