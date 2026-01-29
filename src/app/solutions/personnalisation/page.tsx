'use client';

import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { FadeIn } from '@/components/animations/FadeIn';
import { SlideIn } from '@/components/animations/SlideIn';
import { Check, Paintbrush, Eye, Layout, Palette, Image, Sun, Moon } from 'lucide-react';
import {REGISTER_URL_FREE} from "@/lib/utls";

export default function PersonnalisationPage() {
  return (
      <div className="bg-background-1 dark:bg-background-6">
        <Header />
        <main>
          {/* Hero Section avec image */}
          <section className="pb-14 pt-18 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[120px] xl:pb-[100px] xl:pt-[160px]">
            <div className="main-container">
              <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 lg:gap-20 items-center">
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
                </div>
              </div>
              
              <div className="mt-20">
                
                <FadeIn delay={0.5}>
                  <div className="animate-glass-bounce glass-card  rounded-2xl overflow-hidden bg-primary-500"  style={{ '--animation-delay': '0s' } as React.CSSProperties}>
                    <img
                        src="/builder/builder_2.png"
                        alt={""}
                        className="rounded-lg w-full"
                    />
                  </div>
                </FadeIn>

              </div>
            </div>
          </section>

          {/* Fonctionnalités principales */}
          <section id="fonctionnalites" className="py-20 bg-background-3 dark:bg-background-7">
            <div className="main-container">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <FadeIn delay={0.2}>
                  <span className="badge bg-primary-500 text-white">Fonctionnalités puissantes</span>
                </FadeIn>
                <FadeIn delay={0.3}>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Créez l'expérience parfaite pour vos clients
                  </h2>
                </FadeIn>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <FadeIn delay={0.4}>
                  <div className="p-6 bg-background-1 dark:bg-background-6 rounded-2xl border border-stroke-1 dark:border-stroke-7 transition-all hover:border-primary-500/50">
                    <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center mb-4">
                      <Layout className="w-6 h-6 text-primary-500" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold mb-2">Builder de pages visuel</h3>
                      <p className="text-secondary/70 dark:text-accent/70">
                        Créez vos pages par simple glisser-déposer. Aucune compétence nécessaire pour créer une boutique professionnelle.
                      </p>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn delay={0.5}>
                  <div className="p-6 bg-background-1 dark:bg-background-6 rounded-2xl border border-stroke-1 dark:border-stroke-7 transition-all hover:border-primary-500/50">
                    <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center mb-4">
                      <Palette className="w-6 h-6 text-primary-500" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold mb-2">Personnalisation couleurs</h3>
                      <p className="text-secondary/70 dark:text-accent/70">
                        Choisissez vos couleurs de marque, vos polices préférées et créez une identité visuelle unique qui reflète votre entreprise.
                      </p>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn delay={0.6}>
                  <div className="p-6 bg-background-1 dark:bg-background-6 rounded-2xl border border-stroke-1 dark:border-stroke-7 transition-all hover:border-primary-500/50">
                    <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center mb-4">
                      <Image className="w-6 h-6 text-primary-500" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold mb-2">Upload de logo et images</h3>
                      <p className="text-secondary/70 dark:text-accent/70">
                        Importez votre logo, vos images de produits et créez une galerie visuelle qui capte l'attention de vos clients.
                      </p>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn delay={0.7}>
                  <div className="p-6 bg-background-1 dark:bg-background-6 rounded-2xl border border-stroke-1 dark:border-stroke-7 transition-all hover:border-primary-500/50">
                    <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center mb-4">
                      <Eye className="w-6 h-6 text-primary-500" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold mb-2">Prévisualisation realtime</h3>
                      <p className="text-secondary/70 dark:text-accent/70">
                        Visualisez instantanément vos modifications. Ce que vous voyez est exactement ce que vos clients verront.
                      </p>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn delay={0.8}>
                  <div className="p-6 bg-background-1 dark:bg-background-6 rounded-2xl border border-stroke-1 dark:border-stroke-7 transition-all hover:border-primary-500/50">
                    <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center mb-4">
                      <Layout className="w-6 h-6 text-primary-500" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold mb-2">Sections personnalisables</h3>
                      <p className="text-secondary/70 dark:text-accent/70">
                        Personnalisez chaque section de votre boutique : header, footer, pages produits, catégories et bien plus encore.
                      </p>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn delay={0.9}>
                  <div className="p-6 bg-background-1 dark:bg-background-6 rounded-2xl border border-stroke-1 dark:border-stroke-7 transition-all hover:border-primary-500/50">
                    <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center mb-4">
                      <div className="flex gap-1">
                        <Sun className="w-5 h-5 text-primary-500" />
                        <Moon className="w-5 h-5 text-primary-500" />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold mb-2">Mode sombre/clair</h3>
                      <p className="text-secondary/70 dark:text-accent/70">
                        Offrez à vos clients le choix entre le mode sombre et clair pour une expérience de navigation optimale.
                      </p>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </section>

          {/* Section Flexible - deux sens */}
          <section className="py-[100px] lg:py-[150px] bg-background-1 dark:bg-background-7">
            <div className="main-container">
              {/* Premier sens : image à gauche, texte à droite */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
                <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
                  <FadeIn delay={0.2}>
                    <div className="glass-sidebar-container to-right">
                      {/* Effet Glass Background */}
                      <div className="glass-sidebar-background" />
                      
                      <div className="glass-sidebar-content">
                        <img
                            src="/builder/left_panel.png"
                            alt="Design personnalisé"
                            className="glass-sidebar-image"
                            style={{height : "500px", minWidth: "280px"}}
                        />
                        
                        {/* Overlay subtil au survol */}
                        <div className="glass-sidebar-overlay" />
                      </div>
                    </div>
                  </FadeIn>
                </div>
                <div className="order-1 lg:order-2 space-y-6">
                  <FadeIn delay={0.3}>
                    <span className="badge bg-primary-500 text-white">Sections Prêtes à l'Emploi</span>
                  </FadeIn>
                  <FadeIn delay={0.4}>
                    <h2>
                      Composez votre boutique en un clin d'œil
                    </h2>
                  </FadeIn>
                  <FadeIn delay={0.5}>
                    <p className="text-lg text-secondary/80 dark:text-accent/80">
                      Profitez d'une vaste bibliothèque de sections pré-conçues (Héros, Témoignages, FAQ, Grilles de produits) qu'il ne vous reste plus qu'à personnaliser selon vos envies.
                    </p>
                  </FadeIn>
                  <ul className="space-y-4">
                    <FadeIn delay={0.6}>
                      <li className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-500/10 flex items-center justify-center mt-1">
                          <Check className="w-4 h-4 text-primary-500" />
                        </div>
                        <span>Plus de 90 blocs de sections personnalisables</span>
                      </li>
                    </FadeIn>
                    <FadeIn delay={0.7}>
                      <li className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-500/10 flex items-center justify-center mt-1">
                          <Check className="w-4 h-4 text-primary-500" />
                        </div>
                        <span>Glisser-déposer intuitif</span>
                      </li>
                    </FadeIn>
                  </ul>
                </div>
              </div>

              {/* Second sens : texte à gauche, image à droite */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div className="space-y-6">
                  <FadeIn delay={0.8}>
                    <span className="badge bg-purple-500 text-white">Prise en main facile</span>
                  </FadeIn>
                  <FadeIn delay={0.9}>
                    <h2>
                      Personnalisez chaque détail en quelques clics
                    </h2>
                  </FadeIn>
                  <FadeIn delay={1.0}>
                    <p className="text-lg text-secondary/80 dark:text-accent/80">
                      Modifiez les textes, les images et les couleurs de vos sections directement depuis l'interface. Grâce à nos champs de saisie intuitifs, mettre à jour votre contenu n'a jamais été aussi simple.
                    </p>
                  </FadeIn>
                  <ul className="space-y-4">
                    <FadeIn delay={1.1}>
                      <li className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500/10 flex items-center justify-center mt-1">
                          <Check className="w-4 h-4 text-purple-500" />
                        </div>
                        <span>Champs de saisie intuitifs pour vos textes</span>
                      </li>
                    </FadeIn>
                    <FadeIn delay={1.2}>
                      <li className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500/10 flex items-center justify-center mt-1">
                          <Check className="w-4 h-4 text-purple-500" />
                        </div>
                        <span>Modification en temps réel</span>
                      </li>
                    </FadeIn>
                  </ul>
                </div>
                <div className="flex justify-center lg:justify-end">
                  <FadeIn delay={1.0}>
                    <div className="glass-sidebar-container to-left">
                      {/* Effet Glass Background */}
                      <div className="glass-sidebar-background" />

                      <div className="glass-sidebar-content">
                        <img
                            src="/builder/right_panel.png"
                            alt="Personnalisation facile"
                            className="glass-sidebar-image"
                            style={{height : "500px", minWidth: "280px"}}
                        />

                        {/* Overlay subtil au survol */}
                        <div className="glass-sidebar-overlay" />
                      </div>
                    </div>
                  </FadeIn>
                </div>
              </div>
            </div>
          </section>

          {/* Section Avantages avec layout alternatif */}
          <section className="py-[100px] lg:py-[150px] bg-secondary">
            <div className="main-container">
              <div className="max-w-4xl mx-auto">
                <div className="text-center space-y-3 mb-[70px] " >
                  <FadeIn delay={0.2}>
                    <span className="badge bg-primary-500 text-white">Avantages</span>
                  </FadeIn>
                  <FadeIn delay={0.3}>
                    <h2 className="text-white">
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
                      <h3 className="text-heading-5 text-white">Démarquez-vous de la concurrence</h3>
                      <p className="text-white dark:text-accent/80">
                        Créez une boutique unique qui se distingue et attire l'attention de vos clients potentiels.
                      </p>
                    </div>
                  </FadeIn>

                  <FadeIn delay={0.5}>
                    <div className="text-center space-y-4">
                      <div className="flex justify-center">
                        <div className="w-20 h-20 rounded-full bg-primary-500/10 flex items-center justify-center">
                          <Paintbrush className="w-10 h-10 text-white" />
                        </div>
                      </div>
                      <h3 className="text-heading-5 text-white">Renforcez votre identité de marque</h3>
                      <p className="text-white dark:text-accent/80">
                        Alignez votre boutique en ligne avec votre image de marque pour une cohérence parfaite.
                      </p>
                    </div>
                  </FadeIn>

                  <FadeIn delay={0.6}>
                    <div className="text-center space-y-4">
                      <div className="flex justify-center">
                        <div className="w-20 h-20 rounded-full bg-primary-500/10 flex items-center justify-center">
                          <Eye className="w-10 h-10 text-white" />
                        </div>
                      </div>
                      <h3 className="text-heading-5 text-white">Offrez une expérience expérience unique</h3>
                      <p className="text-white dark:text-accent/80">
                        Créez une expérience d'achat mémorable qui fidélise vos clients et booste vos ventes.
                      </p>
                    </div>
                  </FadeIn>
                </div>
              </div>
            </div>
          </section>

          {/* Section Templates */}
          <section className="bg-background-3 dark:bg-background-7 py-[100px]">
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
          <section className="cb-cta-section">
            <div className="cb-container">
              <div className="cb-max-w-4xl cb-text-center space-y-8">
                <FadeIn delay={0.2}>
                  <h2 className="text-heading-2">
                    Prêt à lancer votre boutique en ligne ?
                  </h2>
                </FadeIn>
                <FadeIn delay={0.3}>
                  <p className="cb-lead">
                    Rejoignez des milliers de vendeurs qui ont choisi Kiiako pour développer leur activité en ligne. Commencez gratuitement dès aujourd'hui.
                  </p>
                </FadeIn>
                <FadeIn delay={0.4}>
                  <div className="cb-text-center">
                    <a href={REGISTER_URL_FREE} className="cb-btn">
                      <span className="inline-block first-letter:uppercase">
                        Créer ma boutique gratuite
                      </span>
                    </a>
                  </div>
                </FadeIn>
                <FadeIn delay={0.5}>
                  <ul className="cb-footer-list">
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
