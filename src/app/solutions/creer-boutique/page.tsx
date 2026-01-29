'use client';

import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { FadeIn } from '@/components/animations/FadeIn';
import { SlideIn } from '@/components/animations/SlideIn';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { Check, Store, Globe, Palette, ShoppingBag, Users, Zap, ArrowRight, Sparkles, Package, Clock, TrendingUp } from 'lucide-react';
import {REGISTER_URL_FREE} from "@/lib/utls";

export default function CreerBoutiquePage() {
  return (
      <div className="bg-background-1 dark:bg-background-6">
        <Header />
        <main>
          {/* Hero Section */}
          <section className="pt-46 pb-20 md:pt-40 md:pb-28 overflow-hidden">
            <div className="min-h-screen w-full relative ">
              {/* Floating Images - Version Décorative Éparpillée */}
              <div className="hidden lg:block absolute inset-0 pointer-events-none z-0">
                {/* --- IMAGES ÉPARPILLÉES GAUCHE --- */}
                <FadeIn delay={0.6} className="scatter-img pos-1 animate-float">
                  <img src="/builder/product-timer.png" style={{width : "350px", height : "200px"}}
                       className="transform transition-transform hover:scale-110 duration-500" alt="Deco" />
                </FadeIn>

                <FadeIn delay={0.9} className="scatter-img pos-5 animate-float-delayed-1">
                  <img src="/builder/product-magazine.png" style={{width : "320px", height : "180px", paddingLeft : "4px"}}
                       className="transition-transform hover:scale-110 duration-500" alt="Deco" />
                </FadeIn>

                <FadeIn delay={1.3} className="scatter-img pos-7 animate-float-delayed-2">
                  <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=220&auto=format&fit=crop"
                       className="w-36 h-36 transform transition-transform hover:scale-110 duration-500" alt="Deco" />
                </FadeIn>

                {/*<FadeIn delay={1.4} className="scatter-img pos-9 animate-float-delayed-3">*/}
                {/*  <img src="https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=150&auto=format&fit=crop"*/}
                {/*       className="w-24 h-24 object-cover rounded-xl shadow-lg border-2 border-white transform transition-transform hover:scale-110 duration-500" alt="Deco" />*/}
                {/*</FadeIn>*/}

                {/* --- IMAGES ÉPARPILLÉES DROITE --- */}
                <FadeIn delay={0.7} className="scatter-img pos-2 animate-float-delayed-3">
                  <img src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=200&auto=format&fit=crop"
                       className="w-30 h-44 transform transition-transform hover:scale-110 duration-500" alt="Deco" />
                </FadeIn>

                <FadeIn delay={0.8} className="scatter-img pos-11 animate-float-delayed-1">
                  <img src="https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=180&auto=format&fit=crop"
                       className="w-32 h-32 transform transition-transform hover:scale-110 duration-500" alt="Deco" />
                </FadeIn>

                <FadeIn delay={1.1} className="scatter-img pos-8 animate-float">
                  <img src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=190&auto=format&fit=crop"
                       className="w-40 h-40 transform transition-transform hover:scale-110 duration-500" alt="Deco" />
                </FadeIn>


                <FadeIn delay={1.2} className="scatter-img pos-10 animate-float-delayed-1">
                  <img src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=200&auto=format&fit=crop"
                       className="w-32 h-40 transform transition-transform hover:scale-110 duration-500" alt="Deco" />
                </FadeIn>

              </div>


              <div className="main-container relative z-10">
                <div className="max-w-4xl mx-auto text-center space-y-6">


                  <FadeIn delay={0.1}>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight w-[700px] mx-auto">
                      Votre boutique en ligne en{' '}
                      <span className="text-primary-500">quelques minutes</span>
                    </h1>
                  </FadeIn>

                  <FadeIn delay={0.2}>
                    <p className="text-lg md:text-xl text-secondary/70 dark:text-accent/70 max-w-2xl mx-auto">
                      Plateforme e-commerce complète sans compétences techniques.
                      Templates modernes, personnalisation totale et nom de domaine inclus.
                    </p>
                  </FadeIn>



                  {/* Stats simples */}
                  <FadeIn delay={0.3}>
                    <div className="sp-wrapper">
                      <div className="sp-avatars">
                        <img className="sp-avatar"
                             src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=100&h=100&fit=crop"
                             alt=""/>
                        <img className="sp-avatar"
                             src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
                             alt=""/>
                        <img className="sp-avatar"
                             src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop"
                             alt=""/>
                        <img className="sp-avatar"
                             src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop"
                             alt=""/>
                        <img className="sp-avatar"
                             src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop"
                             alt=""/>
                      </div>

                      <div className="sp-rating">
                        <div className="sp-stars">★★★★★</div>
                        <div className="sp-text">1000+ utilisateurs aiment ça</div>
                      </div>
                    </div>


                  </FadeIn>
                </div>
              </div>
            </div>
          </section>

          {/* Fonctionnalités principales */}
          <section id="fonctionnalites" className="py-20 bg-background-3 dark:bg-background-7">
            <div className="main-container">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <FadeIn delay={0.1}>
                  <h2 className="text-3xl  md:text-4xl font-bold mb-4">
                    Tout ce dont vous avez besoin pour réussir
                  </h2>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <p className="text-lg  dark:text-accent/70">
                    Une plateforme complète avec tous les outils essentiels pour lancer et gérer votre boutique
                  </p>
                </FadeIn>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <FadeIn delay={0.2}>
                  <div className="p-6 bg-background-1 dark:bg-background-6 rounded-2xl border border-stroke-1 dark:border-stroke-7 transition-all hover:border-primary-500/50">
                    <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center mb-4">
                      <Zap className="w-6 h-6 text-primary-500" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Démarrage en 30 secondes</h3>
                    <p className="text-secondary/70 dark:text-accent/70">
                      Créez votre compte et lancez votre boutique immédiatement, sans aucun frais initial.
                    </p>
                  </div>
                </FadeIn>

                <FadeIn delay={0.25}>
                  <div className="p-6 bg-background-1 dark:bg-background-6 rounded-2xl border border-stroke-1 dark:border-stroke-7 transition-all hover:border-primary-500/50">
                    <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center mb-4">
                      <Globe className="w-6 h-6 text-primary-500" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Nom de domaine automatique</h3>
                    <p className="text-secondary/70 dark:text-accent/70">
                      Obtenez instantanément votre adresse professionnelle (votreboutique.kiiako.shop).
                    </p>
                  </div>
                </FadeIn>

                <FadeIn delay={0.3}>
                  <div className="p-6 bg-background-1 dark:bg-background-6 rounded-2xl border border-stroke-1 dark:border-stroke-7 transition-all hover:border-primary-500/50">
                    <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center mb-4">
                      <Palette className="w-6 h-6 text-primary-500" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Builder visuel drag-and-drop</h3>
                    <p className="text-secondary/70 dark:text-accent/70">
                      Personnalisez chaque aspect de votre boutique sans écrire une seule ligne de code.
                    </p>
                  </div>
                </FadeIn>

                <FadeIn delay={0.35}>
                  <div className="p-6 bg-background-1 dark:bg-background-6 rounded-2xl border border-stroke-1 dark:border-stroke-7 transition-all hover:border-primary-500/50">
                    <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center mb-4">
                      <Store className="w-6 h-6 text-primary-500" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Templates professionnels</h3>
                    <p className="text-secondary/70 dark:text-accent/70">
                      Choisissez parmi une collection de designs modernes optimisés pour la conversion.
                    </p>
                  </div>
                </FadeIn>

                <FadeIn delay={0.4}>
                  <div className="p-6 bg-background-1 dark:bg-background-6 rounded-2xl border border-stroke-1 dark:border-stroke-7 transition-all hover:border-primary-500/50">
                    <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center mb-4">
                      <ShoppingBag className="w-6 h-6 text-primary-500" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Boutiques illimitées</h3>
                    <p className="text-secondary/70 dark:text-accent/70">
                      Créez et gérez autant de boutiques que nécessaire pour vos différents projets.
                    </p>
                  </div>
                </FadeIn>

                <FadeIn delay={0.45}>
                  <div className="p-6 bg-background-1 dark:bg-background-6 rounded-2xl border border-stroke-1 dark:border-stroke-7 transition-all hover:border-primary-500/50">
                    <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center mb-4">
                      <Users className="w-6 h-6 text-primary-500" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Gestion centralisée</h3>
                    <p className="text-secondary/70 dark:text-accent/70">
                      Administrez toutes vos boutiques depuis un seul tableau de bord intuitif.
                    </p>
                  </div>
                </FadeIn>
              </div>
            </div>
          </section>

          {/* Section Thèmes */}
          <section className="cb-section relative overflow-hidden">
            {/* Background decorative elements for glass effect */}
            <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-secondary/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="cb-container">
              <div className="cb-text-center cb-max-w-3xl mb-16">
                <FadeIn delay={0.1}>
                  <h2 className="cb-h2">
                    Choisissez votre thème parmi tant d'autres
                  </h2>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <p className="cb-lead">
                    Des designs modernes et professionnels adaptés à tous les secteurs d'activité.
                  </p>
                </FadeIn>
              </div>

              <div className="flex justify-center items-center py-20">
                <div className="theme-stack-container">
                  {[
                    {
                      title: "Minimalist Blog",
                      image: "/builder/theme1.png",
                      type: "Creative",
                      className: "theme-card-left"
                    },
                    {
                      title: "Tech Store",
                      image: "/builder/theme1.png",
                      type: "Video/Demo",
                      className: "theme-card-right"
                    },
                    {
                      title: "Modern Fashion",
                      image: "/builder/theme1.png",
                      type: "Portrait",
                      className: "theme-card-main"
                    }
                  ].map((theme, idx) => (
                    <div key={idx} className={`transition-all duration-700 ${theme.className}`}>
                      <div className="theme-card-glass">
                        <div className="theme-card-img-wrapper">
                          <img
                              src={theme.image}
                              alt={theme.title}
                              className="theme-card-img"
                          />
                          {theme.type === "Video/Demo" && (
                            <div className="theme-card-play-btn">
                              <div className="theme-card-play-icon">
                                <div className="theme-card-play-arrow"></div>
                              </div>
                            </div>
                          )}
                        </div>
                        <div className="theme-card-footer">
                          <h3 className="theme-card-title">{theme.title}</h3>
                          <span className="theme-card-type-badge">
                            {theme.type}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Comment ça marche */}
          <section className="cb-section">
            <div className="cb-container">
              <div className="cb-text-center cb-max-w-3xl mb-16">
                <FadeIn delay={0.1}>
                  <span className="cb-badge">
                    Processus simple
                  </span>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <h2 className="cb-h2">
                    Lancez votre boutique en 5 étapes
                  </h2>
                </FadeIn>
                <FadeIn delay={0.3}>
                  <p className="cb-lead">
                    Un processus guidé et intuitif pour créer votre boutique professionnelle
                  </p>
                </FadeIn>
              </div>

              <div className="cb-max-w-4xl">
                <div className="cb-step-list">
                  {[
                    {
                      number: "1",
                      icon: Users,
                      title: "Créez votre compte",
                      description: "Inscription gratuite en quelques secondes. Aucune carte bancaire requise."
                    },
                    {
                      number: "2",
                      icon: Globe,
                      title: "Choisissez votre domaine",
                      description: "Obtenez automatiquement votre nom de domaine personnalisé (votreboutique.kiiako.shop)."
                    },
                    {
                      number: "3",
                      icon: Palette,
                      title: "Personnalisez avec le builder",
                      description: "Utilisez notre éditeur visuel pour créer un design unique qui vous ressemble."
                    },
                    {
                      number: "4",
                      icon: Package,
                      title: "Ajoutez vos produits",
                      description: "Créez votre catalogue avec photos, descriptions, prix et variations."
                    },
                    {
                      number: "5",
                      icon: TrendingUp,
                      title: "Lancez et vendez",
                      description: "Partagez votre lien et commencez à recevoir des commandes dès aujourd'hui."
                    }
                  ].map((step, index) => (
                      <FadeIn key={index} delay={0.1 + index * 0.05}>
                        <div className="cb-step-card">
                          <div className="cb-step-icon-box">
                            <step.icon className="w-7 h-7 text-white" />
                          </div>
                          <div className="flex-1 pt-1">
                            <span className="cb-step-number">Étape {step.number}</span>
                            <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                            <p className="text-secondary/70 dark:text-accent/70">{step.description}</p>
                          </div>
                        </div>
                      </FadeIn>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Pourquoi Kiiako */}
          <section className="cb-section bg-background-3 dark:bg-background-7">
            <div className="cb-container">
              <div className="cb-split-grid">
                {/* Contenu */}
                <div className="space-y-6">
                  <FadeIn delay={0.1}>
                    <span className="cb-badge">
                      Pourquoi choisir Kiiako
                    </span>
                  </FadeIn>

                  <FadeIn delay={0.2}>
                    <h2 className="cb-h2">
                      Une solution complète pensée pour votre succès
                    </h2>
                  </FadeIn>

                  <FadeIn delay={0.3}>
                    <p className="cb-lead">
                      Kiiako réunit tous les outils nécessaires pour créer, gérer et développer votre boutique en ligne.
                      Conçu spécialement pour répondre aux besoins du marché africain.
                    </p>
                  </FadeIn>

                  <div className="cb-check-list">
                    {[
                      "100% gratuit pour démarrer, sans frais cachés",
                      "Configuration complète en quelques minutes",
                      "Interface intuitive conçue pour l'Afrique",
                      "Paiement Mobile Money intégré",
                      "Support client disponible",
                      "Mises à jour régulières gratuites"
                    ].map((item, index) => (
                        <FadeIn key={index} delay={0.4 + index * 0.05}>
                          <div className="cb-check-item">
                            <div className="cb-check-icon-box">
                              <Check className="w-4 h-4 text-primary-500" />
                            </div>
                            <span className="text-secondary/80 dark:text-accent/80">{item}</span>
                          </div>
                        </FadeIn>
                    ))}
                  </div>
                </div>

                {/* Image */}
                <div className="relative">
                  <FadeIn delay={0.3}>
                    <div className="relative rounded-2xl overflow-hidden border border-stroke-1 dark:border-stroke-7 aspect-[4/3]">
                      <img
                          src="https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800&h=600&fit=crop"
                          alt="E-commerce"
                          className="w-full h-full object-cover"
                      />

                      <video
                          className="absolute inset-0 w-full h-full object-cover"
                          src="/hero/emballage_colis.mp4"
                          preload="none"
                          loop
                          autoPlay
                          poster="/hero/2150171831.jpg"
                          muted
                          playsInline
                          data-uc-cover
                          data-uc-video="autoplay: true;"
                      />
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