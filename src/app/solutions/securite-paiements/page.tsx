'use client';

import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { FadeIn } from '@/components/animations/FadeIn';
import { SlideIn } from '@/components/animations/SlideIn';
import { Check, Shield, Lock, FileCheck, AlertTriangle, BarChart3, TrendingUp, Eye, Key, Smartphone, CreditCard, Server, Building2 } from 'lucide-react';

export default function SecuritePaiementsPage() {
  return (
      <div className="bg-background-1 dark:bg-background-6">
        <Header />
        <main>
          {/* Hero Section - Design sécurité renforcée */}
          <section className="security-hero-bg relative overflow-hidden pb-14 pt-18 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[120px] xl:pb-[100px] xl:pt-[160px]">
            {/* Background pattern de sécurité */}
            <div
                className="absolute inset-0 bg-gradient-to-br from-green-50/30 via-transparent to-emerald-50/20 dark:from-green-900/10 dark:via-transparent dark:to-emerald-900/10"></div>
            <div
                className="absolute top-20 right-10 w-64 h-64 bg-green-500/5 rounded-full blur-3xl security-float"></div>
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl security-float"
                 style={{animationDelay: '2s'}}></div>

            <div className="main-container relative z-10">

              {/* Contenu textuel centré en dessous */}
              <div className="text-center max-w-4xl mx-auto space-y-8">
                <FadeIn delay={0.4}>
                  <div className="flex items-center justify-center gap-3">
                    <span className="badge bg-green-500 text-white">Système de paiement certifié</span>
                  </div>
                </FadeIn>

                <FadeIn delay={0.5}>
                  <h1 className="text-heading-2 lg:text-heading-1 font-bold">
                    La sécurité de vos paiements, <span className="text-primary-500">notre priorité absolue</span>
                  </h1>
                </FadeIn>

                <FadeIn delay={0.6}>
                  <p className="text-lg text-secondary/80 dark:text-accent/80 leading-relaxed">
                    Protégez vos clients avec un système de paiement bancaire et Mobile Money entièrement sécurisé.
                    Chaque transaction est cryptée, vérifiée et validée par notre partenaire Paydunya,
                    garantissant une confiance totale à chaque étape.
                  </p>
                </FadeIn>
              </div>

              {/* Schéma visuel : Approche circulaire améliorée avec lignes de connexion */}
              <div className="mb-16">
                <SlideIn direction="up" delay={0.8}>
                  <div className="max-w-4xl mx-auto">

                    {/* Design circulaire avec flux central et lignes */}
                    <div className="relative mt-20">

                      {/* Trait incurvé entre étape 1 et 4 */}
                      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
                        <defs>
                          <marker
                            id="arrowhead"
                            markerWidth="10"
                            markerHeight="7"
                            refX="9"
                            refY="3.5"
                            orient="auto"
                          >
                            <polygon
                              points="0 0, 10 3.5, 0 7"
                              fill="rgba(59, 130, 246, 0.5)"
                            />
                          </marker>
                        </defs>
                        <path
                          d="M 120 100 L 280 200"
                          stroke="rgba(59, 130, 246, 0.3)"
                          strokeWidth="2"
                          fill="none"
                          strokeDasharray="5,5"
                          markerEnd="url(#arrowhead)"
                        />
                      </svg>

                      {/* 5 étapes du processus réel */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8" style={{ position: 'relative', zIndex: 2 }}>

                        {/* Étape 1 - Client */}
                        <div className="text-center">
                          <div className="relative inline-block mb-4">
                            <div className="process-step-circle">
                              <Smartphone className="w-6 h-6 text-blue-500" />
                            </div>
                            <div className="process-badge blue">
                              <span>1</span>
                            </div>
                          </div>
                          <h4 className="font-semibold mb-1 text-sm">Client</h4>
                          <p className="text-xs text-slate-600 dark:text-slate-400">
                            Sélectionne & confirme
                          </p>
                        </div>

                        {/* Étape 4 - Paydunya (anciennement étape 2) */}
                        <div className="text-center">
                          <div className="relative inline-block mb-4">
                            <div className="process-step-circle">
                              <CreditCard className="w-6 h-6 text-blue-500" />
                            </div>
                            <div className="process-badge blue">
                              <span>3</span>
                            </div>
                          </div>
                          <h4 className="font-semibold mb-1 text-sm">Paydunya</h4>
                          <p className="text-xs text-slate-600 dark:text-slate-400">
                            Redirection sécurisée
                          </p>
                        </div>


                        {/* Étape 3 - Confirmation */}
                        <div className="text-center">
                          <div className="relative inline-block mb-4">
                            <div className="process-step-circle">
                              <Check className="w-6 h-6 text-blue-500" />
                            </div>
                            <div className="process-badge blue">
                              <span>5</span>
                            </div>
                          </div>
                          <h4 className="font-semibold mb-1 text-sm">Confirmation</h4>
                          <p className="text-xs text-slate-600 dark:text-slate-400">
                            Instantanée
                          </p>
                        </div>


                      </div>

                      {/* Deuxième rangée */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-md mx-auto mb-8">

                        {/* Étape 5 - Validation */}
                        <div className="text-center">
                          <div className="relative inline-block mb-4">
                            <div className="process-step-circle">
                              <FileCheck className="w-6 h-6 text-blue-500" />
                            </div>
                            <div className="process-badge blue">
                              <span>2</span>
                            </div>
                          </div>
                          <h4 className="font-semibold mb-1 text-sm">Kiiako</h4>
                          <p className="text-xs text-slate-600 dark:text-slate-400">
                            Paiement initialisé
                          </p>
                        </div>


                        {/* Étape 2 - USSD */}
                        <div className="text-center">
                          <div className="relative inline-block mb-4">
                            <div className="process-step-circle">
                              <Smartphone className="w-6 h-6 text-blue-500" />
                            </div>
                            <div className="process-badge blue">
                              <span>4</span>
                            </div>
                          </div>
                          <h4 className="font-semibold mb-1 text-sm">USSD</h4>
                          <p className="text-xs text-slate-600 dark:text-slate-400">
                            Paiement mobile
                          </p>
                        </div>


                      </div>

                      {/* Flux de connexion horizontal amélioré */}
                      <div className="relative mt-8">
                        <div className="flex justify-center items-center gap-2">
                          <div className="flex-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                          <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                          <div className="flex-1 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                          <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"></div>
                          <div className="flex-1 h-1 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full"></div>
                          <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                          <div className="flex-1 h-1 bg-gradient-to-r from-orange-400 to-teal-400 rounded-full"></div>
                        </div>
                      </div>

                      {/* Message final amélioré */}
                      <div className="text-center mt-12">
                        <div
                            className="inline-flex items-center gap-2 px-6 py-3 bg-green-50 dark:bg-green-900/20 rounded-full border border-green-200 dark:border-green-800">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                          <span className="text-sm font-medium text-green-700 dark:text-green-300">
                            Processus Paydunya sécurisé en 5 étapes
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SlideIn>
              </div>
            </div>
          </section>

          {/* Fonctionnalités de sécurité */}
          <section id="securite" className="py-20 bg-background-3 dark:bg-background-7">
            <div className="main-container">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <FadeIn delay={0.1}>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Des paiements sécurisés de bout en bout
                  </h2>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <p className="text-lg dark:text-accent/70">
                    Kiiako protège chaque transaction avec des contrôles clairs, un suivi précis et une intégration
                    Paydunya fiable.
                  </p>
                </FadeIn>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <FadeIn delay={0.2}>
                  <div
                      className="p-6 bg-background-1 dark:bg-background-6 rounded-2xl border border-stroke-1 dark:border-stroke-7 transition-all hover:border-primary-500/50">
                    <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center mb-4">
                      <Shield className="w-6 h-6 text-primary-500"/>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Intégration Paydunya</h3>
                    <p className="text-secondary/70 dark:text-accent/70">
                      Connectez vos paiements à un partenaire reconnu pour garantir la confiance de vos clients.
                    </p>
                  </div>
                </FadeIn>

                <FadeIn delay={0.25}>
                  <div
                      className="p-6 bg-background-1 dark:bg-background-6 rounded-2xl border border-stroke-1 dark:border-stroke-7 transition-all hover:border-primary-500/50">
                    <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center mb-4">
                      <Lock className="w-6 h-6 text-primary-500"/>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Chiffrement SSL/TLS</h3>
                    <p className="text-secondary/70 dark:text-accent/70">
                      Les données sensibles sont protégées pendant tout le parcours de paiement.
                    </p>
                  </div>
                </FadeIn>

                <FadeIn delay={0.3}>
                  <div
                      className="p-6 bg-background-1 dark:bg-background-6 rounded-2xl border border-stroke-1 dark:border-stroke-7 transition-all hover:border-primary-500/50">
                    <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center mb-4">
                      <FileCheck className="w-6 h-6 text-primary-500"/>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Validation automatique</h3>
                    <p className="text-secondary/70 dark:text-accent/70">
                      Chaque paiement est vérifié automatiquement avant d'être confirmé.
                    </p>
                  </div>
                </FadeIn>

                <FadeIn delay={0.35}>
                  <div
                      className="p-6 bg-background-1 dark:bg-background-6 rounded-2xl border border-stroke-1 dark:border-stroke-7 transition-all hover:border-primary-500/50">
                    <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center mb-4">
                      <AlertTriangle className="w-6 h-6 text-primary-500"/>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Protection anti-fraude</h3>
                    <p className="text-secondary/70 dark:text-accent/70">
                      Détection proactive pour limiter les transactions à risque.
                    </p>
                  </div>
                </FadeIn>

                <FadeIn delay={0.4}>
                  <div
                      className="p-6 bg-background-1 dark:bg-background-6 rounded-2xl border border-stroke-1 dark:border-stroke-7 transition-all hover:border-primary-500/50">
                    <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center mb-4">
                      <TrendingUp className="w-6 h-6 text-primary-500"/>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Historique complet</h3>
                    <p className="text-secondary/70 dark:text-accent/70">
                      Suivez vos transactions et retrouvez facilement chaque paiement.
                    </p>
                  </div>
                </FadeIn>

                <FadeIn delay={0.45}>
                  <div
                      className="p-6 bg-background-1 dark:bg-background-6 rounded-2xl border border-stroke-1 dark:border-stroke-7 transition-all hover:border-primary-500/50">
                    <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center mb-4">
                      <BarChart3 className="w-6 h-6 text-primary-500"/>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Rapports clairs</h3>
                    <p className="text-secondary/70 dark:text-accent/70">
                      Analysez vos paiements avec des rapports simples et exploitables.
                    </p>
                  </div>
                </FadeIn>
              </div>
            </div>
          </section>

          <section className="lg:py-[100px] pt-16 md:pt-20 lg:pb-[200px] md:pb-[100px] pb-16">
            <div className="main-container">
              <div className="grid grid-cols-12 xl:gap-[100px] lg:gap-20 gap-y-16 items-center">
                <div className="col-span-12 lg:col-span-6">
                  <div className="sm:space-y-8 space-y-5 lg:mx-0 mx-auto lg:max-w-full max-w-[500px]">
                    <div className="space-y-3">
                      <FadeIn delay={0.2}>
                        <h2>Une sécurité sur mesure pour vos transactions</h2>
                      </FadeIn>
                      <FadeIn delay={0.3}>
                        <p>
                          Chaque entreprise a des besoins uniques—votre système de paiement doit l'être aussi. 
                          Notre solution s'adapte à votre activité en analysant vos flux, en expliquant vos options 
                          et en vous guidant à chaque étape pour une protection optimale.
                        </p>
                      </FadeIn>
                    </div>
                    <div>
                      <ul className="sm:space-y-2 space-y-1">
                        <FadeIn delay={0.4}>
                          <li className="p-2 flex items-center gap-4">
                            <Shield className="w-6 h-6 text-primary-500" />
                            <span className="text-tagline-1 font-medium text-secondary dark:text-accent">
                              Protection adaptée à votre activité
                            </span>
                          </li>
                        </FadeIn>
                        <FadeIn delay={0.5}>
                          <li className="p-2 flex items-center gap-4">
                            <Lock className="w-6 h-6 text-primary-500" />
                            <span className="text-tagline-1 font-medium text-secondary dark:text-accent">
                              Contrôles de sécurité personnalisables
                            </span>
                          </li>
                        </FadeIn>
                        <FadeIn delay={0.6}>
                          <li className="p-2 flex items-center gap-4">
                            <Check className="w-6 h-6 text-primary-500" />
                            <span className="text-tagline-1 font-medium text-secondary dark:text-accent">
                              Validation des paiements en temps réel
                            </span>
                          </li>
                        </FadeIn>
                        <FadeIn delay={0.7}>
                          <li className="p-2 flex items-center gap-4">
                            <Eye className="w-6 h-6 text-primary-500" />
                            <span className="text-tagline-1 font-medium text-secondary dark:text-accent">
                              Surveillance depuis n'importe quel appareil
                            </span>
                          </li>
                        </FadeIn>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-6">
                  <SlideIn direction="right" delay={0.2}>
                    <figure className="lg:max-w-[669px] max-w-[500px] lg:mx-0 mx-auto w-full">
                    <img
                        src="/images/ns-img-208.png"
                        alt="select-us-reason"
                        className="size-full dark:hidden"
                    />
                    <img
                        src="/images/ns-img-dark-141.png"
                        alt="select-us-reason"
                        className="size-full dark:block hidden"
                    />
                    </figure>
                  </SlideIn>
                </div>
              </div>
            </div>
          </section>

          {/* Engagements de sécurité */}
          <section className="py-20">
            <div className="main-container">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <FadeIn delay={0.2}>
                    <span className="badge bg-primary-500 text-white">Engagements Kiiako</span>
                  </FadeIn>
                  <FadeIn delay={0.3}>
                    <h2 className="text-3xl md:text-4xl font-bold">
                      Une sécurité pensée pour la confiance client
                    </h2>
                  </FadeIn>
                  <FadeIn delay={0.4}>
                    <p className="text-lg text-secondary/80 dark:text-accent/80">
                      Nous mettons en place des garde-fous simples à comprendre pour rassurer vos clients à chaque
                      étape.
                    </p>
                  </FadeIn>
                </div>

                <div className="space-y-4">
                  <FadeIn delay={0.45}>
                    <div
                        className="flex gap-4 p-5 rounded-2xl bg-background-2 dark:bg-background-5 border border-stroke-1 dark:border-stroke-7">
                      <div
                          className="w-10 h-10 rounded-full bg-primary-500/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-5 h-5 text-primary-500"/>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1">Traçabilité complète</h3>
                        <p className="text-secondary/70 dark:text-accent/70">
                          Chaque paiement laisse une trace claire pour un suivi rapide et transparent.
                        </p>
                      </div>
                    </div>
                  </FadeIn>

                  <FadeIn delay={0.5}>
                    <div
                        className="flex gap-4 p-5 rounded-2xl bg-background-2 dark:bg-background-5 border border-stroke-1 dark:border-stroke-7">
                      <div
                          className="w-10 h-10 rounded-full bg-primary-500/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-5 h-5 text-primary-500"/>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1">Alertes et contrôles</h3>
                        <p className="text-secondary/70 dark:text-accent/70">
                          Des vérifications automatiques pour limiter les anomalies et sécuriser les opérations.
                        </p>
                      </div>
                    </div>
                  </FadeIn>

                  <FadeIn delay={0.55}>
                    <div
                        className="flex gap-4 p-5 rounded-2xl bg-background-2 dark:bg-background-5 border border-stroke-1 dark:border-stroke-7">
                      <div
                          className="w-10 h-10 rounded-full bg-primary-500/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-5 h-5 text-primary-500"/>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1">Expérience fluide</h3>
                        <p className="text-secondary/70 dark:text-accent/70">
                          Un parcours de paiement simple, tout en gardant un haut niveau de sécurité.
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Sécurité */}
          <section className="py-20 bg-background-2 dark:bg-background-5">
            <div className="main-container">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <FadeIn delay={0.1}>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Questions fréquentes sur la sécurité
                  </h2>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <p className="text-lg text-secondary/80 dark:text-accent/80">
                    Les réponses essentielles pour rassurer vos clients et votre équipe.
                  </p>
                </FadeIn>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FadeIn delay={0.25}>
                  <div
                      className="p-6 bg-background-1 dark:bg-background-6 rounded-2xl border border-stroke-1 dark:border-stroke-7">
                    <h3 className="text-xl font-bold mb-2">Comment le paiement est-il protégé ?</h3>
                    <p className="text-secondary/70 dark:text-accent/70">
                      Le parcours est chiffré et chaque transaction passe par des contrôles automatiques.
                    </p>
                  </div>
                </FadeIn>

                <FadeIn delay={0.3}>
                  <div
                      className="p-6 bg-background-1 dark:bg-background-6 rounded-2xl border border-stroke-1 dark:border-stroke-7">
                    <h3 className="text-xl font-bold mb-2">Que se passe-t-il en cas d'anomalie ?</h3>
                    <p className="text-secondary/70 dark:text-accent/70">
                      Les transactions suspectes sont signalées pour vérification avant confirmation.
                    </p>
                  </div>
                </FadeIn>

                <FadeIn delay={0.35}>
                  <div
                      className="p-6 bg-background-1 dark:bg-background-6 rounded-2xl border border-stroke-1 dark:border-stroke-7">
                    <h3 className="text-xl font-bold mb-2">Puis-je suivre l'historique ?</h3>
                    <p className="text-secondary/70 dark:text-accent/70">
                      Oui, l'historique des paiements est accessible pour un contrôle rapide.
                    </p>
                  </div>
                </FadeIn>

                <FadeIn delay={0.4}>
                  <div
                      className="p-6 bg-background-1 dark:bg-background-6 rounded-2xl border border-stroke-1 dark:border-stroke-7">
                    <h3 className="text-xl font-bold mb-2">Le client reçoit-il une confirmation ?</h3>
                    <p className="text-secondary/70 dark:text-accent/70">
                      Une confirmation est envoyée dès que le paiement est validé.
                    </p>
                  </div>
                </FadeIn>
              </div>
            </div>
          </section>

          {/* Processus sécurisé en timeline */}
          <section className="py-[100px] lg:py-[150px]">
            <div className="main-container">
              <div className="text-center space-y-3 mb-[70px]">
                <FadeIn delay={0.2}>
                  <span className="badge bg-primary-500 text-white">Processus sécurisé</span>
                </FadeIn>
                <FadeIn delay={0.3}>
                  <h2 className="xl:max-w-[878px] max-w-[600px] mx-auto">
                    Comment fonctionne un paiement sécurisé ?
                  </h2>
                </FadeIn>
              </div>

              <div className="max-w-4xl mx-auto space-y-8">
                <FadeIn delay={0.4}>
                  <div className="flex gap-6 items-start">
                    <div
                        className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-blue-500 text-white flex items-center justify-center font-bold text-xl">
                      1
                    </div>
                    <div className="flex-1">
                      <h3 className="text-heading-5 mb-2">Client choisit Mobile Money</h3>
                      <p className="text-secondary/80 dark:text-accent/80">
                        Le client sélectionne son opérateur Mobile Money préféré (Orange Money, MTN, Moov, etc.) pour
                        effectuer le paiement.
                      </p>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn delay={0.5}>
                  <div className="flex gap-6 items-start">
                    <div
                        className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 text-white flex items-center justify-center font-bold text-xl">
                      2
                    </div>
                    <div className="flex-1">
                      <h3 className="text-heading-5 mb-2">Redirection sécurisée vers Paydunya</h3>
                      <p className="text-secondary/80 dark:text-accent/80">
                        La transaction est redirigée vers la plateforme sécurisée Paydunya avec cryptage SSL/TLS.
                      </p>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn delay={0.6}>
                  <div className="flex gap-6 items-start">
                    <div
                        className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-white flex items-center justify-center font-bold text-xl">
                      3
                    </div>
                    <div className="flex-1">
                      <h3 className="text-heading-5 mb-2">Paiement via USSD sur le mobile</h3>
                      <p className="text-secondary/80 dark:text-accent/80">
                        Le client reçoit un code USSD sur son téléphone pour confirmer le paiement de manière sécurisée.
                      </p>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn delay={0.7}>
                  <div className="flex gap-6 items-start">
                    <div
                        className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 text-white flex items-center justify-center font-bold text-xl">
                      4
                    </div>
                    <div className="flex-1">
                      <h3 className="text-heading-5 mb-2">Confirmation instantanée</h3>
                      <p className="text-secondary/80 dark:text-accent/80">
                        Le paiement est confirmé instantanément et de manière sécurisée par Paydunya.
                      </p>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn delay={0.8}>
                  <div className="flex gap-6 items-start">
                    <div
                        className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 text-white flex items-center justify-center font-bold text-xl">
                      5
                    </div>
                    <div className="flex-1">
                      <h3 className="text-heading-5 mb-2">Commande validée automatiquement</h3>
                      <p className="text-secondary/80 dark:text-accent/80">
                        La commande est automatiquement validée et vous recevez une notification. Le client reçoit
                        également sa confirmation.
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
              <div
                  className="max-w-4xl mx-auto text-center space-y-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-12 lg:p-16">
                <FadeIn delay={0.2}>
                  <h2 className="text-heading-2 text-white">
                    Protégez vos clients dès aujourd'hui
                  </h2>
                </FadeIn>
                <FadeIn delay={0.3}>
                  <p className="text-lg text-white/90 max-w-2xl mx-auto">
                    Offrez à vos clients une expérience de paiement 100% sécurisée avec Kiiako et Paydunya.
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
                <FadeIn delay={0.5}>
                  <ul className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-white">
                    <li className="flex items-center gap-2">
                      <Check className="w-5 h-5"/>
                      <span>Cryptage SSL/TLS inclus</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-5 h-5"/>
                      <span>Protection anti-fraude</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-5 h-5"/>
                      <span>Paydunya certifié</span>
                    </li>
                  </ul>
                </FadeIn>
              </div>
            </div>
          </section>
        </main>
        <Footer/>
      </div>
  );
}
