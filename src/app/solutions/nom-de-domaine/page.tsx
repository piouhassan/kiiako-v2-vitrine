'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { FadeIn } from '@/components/animations/FadeIn';
import { Check, Globe, Shield, TrendingUp, Zap, Lock, ArrowRight, X, Clock, Circle, ChevronLeft, ChevronRight, RotateCcw, Home, Star } from 'lucide-react';
import {REGISTER_URL_FREE} from "@/lib/utls";

export default function NomDeDomainePage() {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const shopNames = ['maboutique', 'fashionstore', 'techworld', 'artisanat', 'beautyshop','afiwashop','lolitastore','akpeneboutique','kokoutech','mardiyabeauty'];

  useEffect(() => {
    const currentName = shopNames[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < currentName.length) {
          setCurrentText(currentName.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((currentIndex + 1) % shopNames.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting]);

  return (
      <div className="bg-background-1 dark:bg-background-6">
        <Header />
        <main>
          {/* Hero Section modernisé avec démo interactive */}

          <section className="pb-20 pt-24 md:pb-24 md:pt-32 lg:pb-32 lg:pt-40">
            <div className="main-container">
              <div className="max-w-4xl mx-auto">
                <FadeIn delay={0.1}>
                  <div className="text-center mb-8">
                    <span className="badge bg-primary-500 text-white">Nom de domaine automatique</span>
                  </div>
                </FadeIn>

                <FadeIn delay={0.2}>
                  <h1 className="text-center text-heading-2 lg:text-heading-1 mb-6">
                    Votre identité professionnelle en ligne
                  </h1>
                </FadeIn>

                <FadeIn delay={0.3}>
                  <p className="text-center text-lg mb-12 max-w-2xl mx-auto dark:text-white" >
                    Chaque vendeur obtient automatiquement un nom de domaine personnalisé.
                    Aucune configuration requise.
                  </p>
                </FadeIn>

                {/* Domain Display with Safari Browser */}
                <FadeIn delay={0.4}>
                  <div className="domain-display-wrapper mb-6">
                    <div className="safari-browser">
                      {/* Safari Title Bar */}
                      <div className="safari-titlebar">
                        <div className="safari-window-controls">
                          <button className="safari-control close"></button>
                          <button className="safari-control minimize"></button>
                          <button className="safari-control maximize"></button>
                        </div>
                        <div className="safari-title">Safari</div>
                        <div style={{ width: '60px' }}></div>
                      </div>

                      {/* Safari Navigation Bar */}
                      <div className="safari-navbar">
                        <button className="safari-nav-button" disabled>
                          <ChevronLeft className="w-3 h-3" />
                        </button>
                        <button className="safari-nav-button">
                          <ChevronRight className="w-3 h-3" />
                        </button>
                        <button className="safari-nav-button">
                          <RotateCcw className="w-3 h-3" />
                        </button>
                        <button className="safari-nav-button">
                          <Home className="w-3 h-3" />
                        </button>
                        <button className="safari-nav-button">
                          <Star className="w-3 h-3" />
                        </button>
                        
                        {/* Address Bar */}
                        <div className="domain-display">
                          <Lock className="w-3 h-3 text-blue-500 opacity-70" style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', zIndex: 2 }} />
                          <span className="domain-protocol">https://</span>
                          <span className="domain-subdomain">
                            {currentText}
                            <span className="domain-cursor"></span>
                          </span>
                          <span className="domain-extension">.kiiako.shop</span>
                        </div>
                      </div>

                      {/* Safari Content Area */}
                      <div className="safari-content">
                        <div className="safari-content-placeholder">
                          <div className="safari-content-icon">
                            <Globe className="w-full h-full" />
                          </div>
                          <div className="safari-content-text">
                            Votre boutique en ligne est prête
                          </div>
                          <div className="safari-content-subtext">
                            {currentText ? `${currentText}.kiiako.shop` : 'Votre domaine personnalisé'}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </section>

          {/* Fonctionnalités principales */}
          <section className="py-20 bg-background-3 dark:bg-background-7">
            <div className="main-container">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <FadeIn delay={0.1}>
                  <h2 className="text-heading-3 lg:text-heading-2 mb-4">
                    Tout est automatique et sécurisé
                  </h2>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <p className="text-lg text-secondary/70 dark:text-accent/70">
                    Votre nom de domaine professionnel configuré instantanément, sans aucune compétence technique requise
                  </p>
                </FadeIn>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <FadeIn delay={0.2}>
                  <div className="feature-card p-6 bg-background-1 dark:bg-background-6 rounded-2xl border border-stroke-1 dark:border-stroke-7">
                    <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center mb-4">
                      <Zap className="w-6 h-6 text-primary-500 icon-bounce" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Domaine automatique</h3>
                    <p className="text-secondary/70 dark:text-accent/70">
                      Obtenez votre nom de domaine personnalisé dès l'inscription, sans configuration manuelle.
                    </p>
                  </div>
                </FadeIn>

                <FadeIn delay={0.25}>
                  <div className="feature-card p-6 bg-background-1 dark:bg-background-6 rounded-2xl border border-stroke-1 dark:border-stroke-7">
                    <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center mb-4">
                      <Globe className="w-6 h-6 text-primary-500" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Format professionnel</h3>
                    <p className="text-secondary/70 dark:text-accent/70">
                      Votre adresse personnalisée au format votreboutique.kiiako.shop pour une image professionnelle.
                    </p>
                  </div>
                </FadeIn>

                <FadeIn delay={0.3}>
                  <div className="feature-card p-6 bg-background-1 dark:bg-background-6 rounded-2xl border border-stroke-1 dark:border-stroke-7">
                    <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center mb-4">
                      <Lock className="w-6 h-6 text-primary-500" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">SSL inclus</h3>
                    <p className="text-secondary/70 dark:text-accent/70">
                      Certificat SSL gratuit inclus pour garantir la sécurité de vos clients et leur confiance.
                    </p>
                  </div>
                </FadeIn>

                <FadeIn delay={0.35}>
                  <div className="feature-card p-6 bg-background-1 dark:bg-background-6 rounded-2xl border border-stroke-1 dark:border-stroke-7">
                    <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center mb-4">
                      <Clock className="w-6 h-6 text-primary-500" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Configuration auto</h3>
                    <p className="text-secondary/70 dark:text-accent/70">
                      Configuration technique automatique, DNS et paramètres gérés par nos équipes.
                    </p>
                  </div>
                </FadeIn>

                <FadeIn delay={0.4}>
                  <div className="feature-card p-6 bg-background-1 dark:bg-background-6 rounded-2xl border border-stroke-1 dark:border-stroke-7">
                    <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center mb-4">
                      <Check className="w-6 h-6 text-primary-500" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Zéro technique</h3>
                    <p className="text-secondary/70 dark:text-accent/70">
                      Aucune connaissance technique requise, tout est géré automatiquement pour vous.
                    </p>
                  </div>
                </FadeIn>

                <FadeIn delay={0.45}>
                  <div className="feature-card p-6 bg-background-1 dark:bg-background-6 rounded-2xl border border-stroke-1 dark:border-stroke-7">
                    <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center mb-4">
                      <TrendingUp className="w-6 h-6 text-primary-500" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">SEO optimisé</h3>
                    <p className="text-secondary/70 dark:text-accent/70">
                      Nom de domaine optimisé pour le référencement naturel et meilleure visibilité en ligne.
                    </p>
                  </div>
                </FadeIn>
              </div>
            </div>
          </section>

          {/* Process - Numbered Steps */}
          <section className="py-24 lg:py-32">
            <div className="main-container">
              <div className="text-center mb-16">
                <FadeIn delay={0.1}>
                  <span className="badge-minimal mb-6">Processus</span>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <h2 className="text-heading-3 lg:text-heading-2 mb-4">
                    Comment ça fonctionne
                  </h2>
                </FadeIn>
              </div>

              <div className="max-w-3xl mx-auto grid grid-cols-1 gap-4">
                <FadeIn delay={0.3}>
                  <div className="process-step">
                    <div className="process-number">1</div>
                    <div>
                      <h3 className="text-heading-6 mb-2">Créez votre compte</h3>
                      <p style={{color: 'var(--color-secondary)', opacity: 0.6, fontSize: '0.9375rem', lineHeight: '1.6'}}>
                        Inscrivez-vous gratuitement et choisissez le nom de votre boutique
                      </p>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn delay={0.4}>
                  <div className="process-step">
                    <div className="process-number">2</div>
                    <div>
                      <h3 className="text-heading-6 mb-2">Génération automatique</h3>
                      <p style={{color: 'var(--color-secondary)', opacity: 0.6, fontSize: '0.9375rem', lineHeight: '1.6'}}>
                        Votre domaine personnalisé est créé instantanément au format votreboutique.kiiako.shop
                      </p>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn delay={0.5}>
                  <div className="process-step">
                    <div className="process-number">3</div>
                    <div>
                      <h3 className="text-heading-6 mb-2">Configuration SSL</h3>
                      <p style={{color: 'var(--color-secondary)', opacity: 0.6, fontSize: '0.9375rem', lineHeight: '1.6'}}>
                        Certificat SSL automatiquement installé pour sécuriser votre boutique
                      </p>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn delay={0.6}>
                  <div className="process-step">
                    <div className="process-number">4</div>
                    <div>
                      <h3 className="text-heading-6 mb-2">C'est prêt</h3>
                      <p style={{color: 'var(--color-secondary)', opacity: 0.6, fontSize: '0.9375rem', lineHeight: '1.6'}}>
                        Votre boutique est en ligne avec votre domaine professionnel, prête à recevoir des clients
                      </p>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </section>

          {/* Galaxie de noms de domaine */}
          <section className="py-20 bg-background-3 dark:bg-background-5">
            <div className="main-container">
              <div className="text-center mb-16">
                <FadeIn delay={0.1}>
                  <span className="badge bg-primary-500 text-white mb-6">Exemples</span>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <h2 className="text-heading-3 lg:text-heading-2 mb-4" style={{width : "70%", margin: "auto"}}>
                    Des domaines professionnels
                  </h2>
                </FadeIn>
                <FadeIn delay={0.3}>
                  <p className="text-lg max-w-2xl mx-auto dark:text-white text-secondary">
                    Votre boutique est en ligne avec votre domaine professionnel, prête à recevoir des clients
                  </p>
                </FadeIn>
              </div>

              <FadeIn delay={0.4}>
                <div className="domain-galaxy-modern">
                  <div className="domain-solar-system">
                    <div className="galaxy-hub">
                      <div className="hub-domain">🤖</div>
                    </div>

                    {/* Connection lines */}
                    <div className="connection-lines">
                      <div className="connection-line" style={{ transform: 'rotate(0deg)' }}></div>
                      <div className="connection-line" style={{ transform: 'rotate(45deg)' }}></div>
                      <div className="connection-line" style={{ transform: 'rotate(90deg)' }}></div>
                      <div className="connection-line" style={{ transform: 'rotate(135deg)' }}></div>
                      <div className="connection-line" style={{ transform: 'rotate(180deg)' }}></div>
                      <div className="connection-line" style={{ transform: 'rotate(225deg)' }}></div>
                      <div className="connection-line" style={{ transform: 'rotate(270deg)' }}></div>
                      <div className="connection-line" style={{ transform: 'rotate(315deg)' }}></div>
                    </div>

                    {/* Store cards positioned in a circle - better spacing */}
                    <div className="domain-node" style={{ '--delay': '0.2s', top: '10%', left: '43%', transform: 'translate(-50%, -50%)' } as React.CSSProperties}>
                      <div className="store-card fashion">
                        <div className="store-card-image">
                          <div className="store-card-badge">NEW</div>
                        </div>
                        <div className="store-card-content">
                          <div className="store-card-name">https://fashion.kiiako.shop</div>
                          <div className="store-card-category">Mode</div>
                          <div className="store-card-rating">
                            <span className="star"></span>
                            <span className="star"></span>
                            <span className="star"></span>
                            <span className="star"></span>
                            <span className="star empty"></span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="domain-node" style={{ '--delay': '0.4s', top: '18%', left: '65%', transform: 'translate(-50%, -50%)' } as React.CSSProperties}>
                      <div className="store-card tech">
                        <div className="store-card-image">
                          <div className="store-card-badge">TOP</div>
                        </div>
                        <div className="store-card-content">
                          <div className="store-card-name">https://maboutique.kiiako.shop</div>
                          <div className="store-card-category">Technologie</div>
                          <div className="store-card-rating">
                            <span className="star"></span>
                            <span className="star"></span>
                            <span className="star"></span>
                            <span className="star"></span>
                            <span className="star"></span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="domain-node" style={{ '--delay': '0.6s', top: '30%', left: '75%', transform: 'translate(-50%, -50%)' } as React.CSSProperties}>
                      <div className="store-card beauty">
                        <div className="store-card-image"></div>
                        <div className="store-card-content">
                          <div className="store-card-name">https://tech.kiiako.shop</div>
                          <div className="store-card-category">Beauté</div>
                          <div className="store-card-rating">
                            <span className="star"></span>
                            <span className="star"></span>
                            <span className="star"></span>
                            <span className="star empty"></span>
                            <span className="star empty"></span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="domain-node" style={{ '--delay': '0.8s', top: '45%', left: '75%', transform: 'translate(-50%, -50%)' } as React.CSSProperties}>
                      <div className="store-card artisan">
                        <div className="store-card-image">
                          <div className="store-card-badge">HOT</div>
                        </div>
                        <div className="store-card-content">
                          <div className="store-card-name">https://beauty.kiiako.shop</div>
                          <div className="store-card-category">Artisanat</div>
                          <div className="store-card-rating">
                            <span className="star"></span>
                            <span className="star"></span>
                            <span className="star"></span>
                            <span className="star"></span>
                            <span className="star empty"></span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="domain-node" style={{ '--delay': '1s', top: '60%', left: '65%', transform: 'translate(-50%, -50%)' } as React.CSSProperties}>
                      <div className="store-card sport">
                        <div className="store-card-image"></div>
                        <div className="store-card-content">
                          <div className="store-card-name">https://store.kiiako.shop</div>
                          <div className="store-card-category">Sport</div>
                          <div className="store-card-rating">
                            <span className="star"></span>
                            <span className="star"></span>
                            <span className="star"></span>
                            <span className="star"></span>
                            <span className="star"></span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="domain-node" style={{ '--delay': '1.2s', top: '72%', left: '43%', transform: 'translate(-50%, -50%)' } as React.CSSProperties}>
                      <div className="store-card home">
                        <div className="store-card-image">
                          <div className="store-card-badge">SALE</div>
                        </div>
                        <div className="store-card-content">
                          <div className="store-card-name">https://boutique.kiiako.shop</div>
                          <div className="store-card-category">Maison</div>
                          <div className="store-card-rating">
                            <span className="star"></span>
                            <span className="star"></span>
                            <span className="star"></span>
                            <span className="star empty"></span>
                            <span className="star empty"></span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="domain-node" style={{ '--delay': '1.4s', top: '60%', left: '15%', transform: 'translate(-50%, -50%)' } as React.CSSProperties}>
                      <div className="store-card fashion">
                        <div className="store-card-image"></div>
                        <div className="store-card-content">
                          <div className="store-card-name">https://artisan.kiiako.shop</div>
                          <div className="store-card-category">Mode</div>
                          <div className="store-card-rating">
                            <span className="star"></span>
                            <span className="star"></span>
                            <span className="star"></span>
                            <span className="star"></span>
                            <span className="star empty"></span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="domain-node" style={{ '--delay': '1.6s', top: '45%', left: '5%', transform: 'translate(-50%, -50%)' } as React.CSSProperties}>
                      <div className="store-card tech">
                        <div className="store-card-image">
                          <div className="store-card-badge">PRO</div>
                        </div>
                        <div className="store-card-content">
                          <div className="store-card-name">https://sport.kiiako.shop</div>
                          <div className="store-card-category">Technologie</div>
                          <div className="store-card-rating">
                            <span className="star"></span>
                            <span className="star"></span>
                            <span className="star"></span>
                            <span className="star"></span>
                            <span className="star"></span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="domain-node" style={{ '--delay': '1.8s', top: '30%', left: '5%', transform: 'translate(-50%, -50%)' } as React.CSSProperties}>
                      <div className="store-card beauty">
                        <div className="store-card-image"></div>
                        <div className="store-card-content">
                          <div className="store-card-name">https://afiwashop.kiiako.shop</div>
                          <div className="store-card-category">Beauté</div>
                          <div className="store-card-rating">
                            <span className="star"></span>
                            <span className="star"></span>
                            <span className="star"></span>
                            <span className="star"></span>
                            <span className="star empty"></span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="domain-node" style={{ '--delay': '2s', top: '18%', left: '15%', transform: 'translate(-50%, -50%)' } as React.CSSProperties}>
                      <div className="store-card artisan">
                        <div className="store-card-image">
                          <div className="store-card-badge">VIP</div>
                        </div>
                        <div className="store-card-content">
                          <div className="store-card-name">lolitastore.kiiako.shop</div>
                          <div className="store-card-category">Artisanat</div>
                          <div className="store-card-rating">
                            <span className="star"></span>
                            <span className="star"></span>
                            <span className="star"></span>
                            <span className="star"></span>
                            <span className="star"></span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Floating particles */}
                    <div className="particles">
                      <div className="particle" style={{ top: '10%', left: '15%', animationDelay: '0s' }}></div>
                      <div className="particle" style={{ top: '20%', left: '85%', animationDelay: '1s' }}></div>
                      <div className="particle" style={{ top: '70%', left: '10%', animationDelay: '2s' }}></div>
                      <div className="particle" style={{ top: '80%', left: '90%', animationDelay: '3s' }}></div>
                      <div className="particle" style={{ top: '45%', left: '5%', animationDelay: '4s' }}></div>
                      <div className="particle" style={{ top: '55%', left: '95%', animationDelay: '5s' }}></div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </section>

          {/* Comparaison - Clean Table */}
          <section className="py-24 lg:py-32">
            <div className="main-container">
              <div className="text-center mb-16">
                <FadeIn delay={0.1}>
                  <span className="badge bg-primary-500 text-white mb-6">Comparaison</span>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <h2 className="text-heading-3 lg:text-heading-2 mb-4">
                    La différence est claire
                  </h2>
                </FadeIn>
              </div>

              <FadeIn delay={0.3}>
                <div className="max-w-5xl mx-auto">
                  <div className="comparison-table">
                    <div className="comparison-column">
                      <div className="comparison-header">
                        <X className="w-5 h-5" style={{color: 'var(--color-secondary)', opacity: 0.4}} />
                        <h3 className="comparison-title">Sans domaine personnalisé</h3>
                      </div>

                      <div className="comparison-list">
                        <div className="comparison-item">
                          <X className="w-5 h-5 comparison-item-icon" style={{color: 'var(--color-secondary)', opacity: 0.3}} />
                          <span className="comparison-item-text">
                            URL longue et complexe difficile à retenir
                          </span>
                        </div>
                        <div className="comparison-item">
                          <X className="w-5 h-5 comparison-item-icon" style={{color: 'var(--color-secondary)', opacity: 0.3}} />
                          <span className="comparison-item-text">
                            Apparence non professionnelle
                          </span>
                        </div>
                        <div className="comparison-item">
                          <X className="w-5 h-5 comparison-item-icon" style={{color: 'var(--color-secondary)', opacity: 0.3}} />
                          <span className="comparison-item-text">
                            Moins de confiance des clients
                          </span>
                        </div>
                        <div className="comparison-item">
                          <X className="w-5 h-5 comparison-item-icon" style={{color: 'var(--color-secondary)', opacity: 0.3}} />
                          <span className="comparison-item-text">
                            Référencement limité
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="comparison-column">
                      <div className="comparison-header">
                        <Check className="w-5 h-5" style={{color: 'var(--color-secondary)'}} />
                        <h3 className="comparison-title">Avec votre domaine Kiiako</h3>
                      </div>

                      <div className="comparison-list">
                        <div className="comparison-item">
                          <Check className="w-5 h-5 comparison-item-icon" style={{color: 'var(--color-secondary)'}} />
                          <span className="comparison-item-text">
                            URL courte et mémorable
                          </span>
                        </div>
                        <div className="comparison-item">
                          <Check className="w-5 h-5 comparison-item-icon" style={{color: 'var(--color-secondary)'}} />
                          <span className="comparison-item-text">
                            Image professionnelle et crédible
                          </span>
                        </div>
                        <div className="comparison-item">
                          <Check className="w-5 h-5 comparison-item-icon" style={{color: 'var(--color-secondary)'}} />
                          <span className="comparison-item-text">
                            Confiance accrue des clients
                          </span>
                        </div>
                        <div className="comparison-item">
                          <Check className="w-5 h-5 comparison-item-icon" style={{color: 'var(--color-secondary)'}} />
                          <span className="comparison-item-text">
                            Optimisé pour le SEO
                          </span>
                        </div>
                        <div className="comparison-item">
                          <Check className="w-5 h-5 comparison-item-icon" style={{color: 'var(--color-secondary)'}} />
                          <span className="comparison-item-text">
                            SSL gratuit inclus
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </section>

          {/* Avantages - Simplified */}
          <section className="py-20 bg-background-3 dark:bg-background-5">
            <div className="main-container">
              <div className="text-center mb-16">
                <FadeIn delay={0.1}>
                  <span className="badge bg-primary-500 text-white mb-6">Avantages</span>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <h2 className="text-heading-3 lg:text-heading-2 mb-4">
                    Pourquoi un domaine personnalisé
                  </h2>
                </FadeIn>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                <FadeIn delay={0.3}>
                  <div className="flex gap-4">
                    <div className="icon-wrapper flex-shrink-0">
                      <Shield className="w-6 h-6" style={{color: 'var(--color-secondary)'}} />
                    </div>
                    <div>
                      <h3 className="text-heading-6 mb-2">Crédibilité instantanée</h3>
                      <p style={{color: 'var(--color-secondary)', opacity: 0.6, fontSize: '0.9375rem', lineHeight: '1.6'}}>
                        Un domaine personnalisé donne immédiatement une apparence professionnelle à votre boutique
                      </p>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn delay={0.4}>
                  <div className="flex gap-4">
                    <div className="icon-wrapper flex-shrink-0">
                      <Globe className="w-6 h-6" style={{color: 'var(--color-secondary)'}} />
                    </div>
                    <div>
                      <h3 className="text-heading-6 mb-2">Facile à retenir</h3>
                      <p style={{color: 'var(--color-secondary)', opacity: 0.6, fontSize: '0.9375rem', lineHeight: '1.6'}}>
                        Un nom court et personnalisé que vos clients peuvent mémoriser et partager facilement
                      </p>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn delay={0.5}>
                  <div className="flex gap-4">
                    <div className="icon-wrapper flex-shrink-0">
                      <Lock className="w-6 h-6" style={{color: 'var(--color-secondary)'}} />
                    </div>
                    <div>
                      <h3 className="text-heading-6 mb-2">Confiance renforcée</h3>
                      <p style={{color: 'var(--color-secondary)', opacity: 0.6, fontSize: '0.9375rem', lineHeight: '1.6'}}>
                        Les clients font davantage confiance aux boutiques avec leur propre domaine sécurisé
                      </p>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn delay={0.6}>
                  <div className="flex gap-4">
                    <div className="icon-wrapper flex-shrink-0">
                      <TrendingUp className="w-6 h-6" style={{color: 'var(--color-secondary)'}} />
                    </div>
                    <div>
                      <h3 className="text-heading-6 mb-2">Meilleur référencement</h3>
                      <p style={{color: 'var(--color-secondary)', opacity: 0.6, fontSize: '0.9375rem', lineHeight: '1.6'}}>
                        Un domaine personnalisé améliore votre visibilité sur Google et les moteurs de recherche
                      </p>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="cb-cta-section">
            <div className="cb-container">
              <div className="cb-max-w-4xl cb-text-center space-y-8">
                <FadeIn delay={0.2}>
                  <h2 className="text-heading-2">
                    Commencez dès maintenant
                  </h2>
                </FadeIn>
                <FadeIn delay={0.3}>
                  <p className="cb-lead">
                    Votre domaine personnalisé est configuré automatiquement à la création de votre boutique
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
                      <span>Gratuit</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary-500" />
                      <span>SSL inclus</span>
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