'use client';

import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { FadeIn } from '@/components/animations/FadeIn';
import { SlideIn } from '@/components/animations/SlideIn';
import { Check, Shield, Lock, FileCheck, AlertTriangle, BarChart3, TrendingUp } from 'lucide-react';

export default function SecuritePaiementsPage() {
  return (
    <div className="bg-background-1 dark:bg-background-6">
      <Header />
      <main>
        {/* Hero Section avec split layout */}
        <section className="pb-14 pt-18 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[120px] xl:pb-[100px] xl:pt-[160px]">
          <div className="main-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="order-2 lg:order-1 relative">
                <SlideIn direction="left" delay={0.4}>
                  <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop"
                      alt="Paiements sécurisés"
                      className="w-full h-full object-cover aspect-[4/3]"
                    />
                  </div>
                </SlideIn>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-green-500/20 rounded-full blur-3xl"></div>
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-emerald-500/20 rounded-full blur-3xl"></div>
              </div>
              <div className="order-1 lg:order-2 space-y-6">
                <FadeIn delay={0.2}>
                  <span className="badge bg-primary-500 text-white">Sécurité des paiements</span>
                </FadeIn>
                <FadeIn delay={0.3}>
                  <h1 className="text-heading-2 lg:text-heading-1">
                    Paiements 100% sécurisés
                  </h1>
                </FadeIn>
                <FadeIn delay={0.4}>
                  <p className="text-lg text-secondary/80 dark:text-accent/80">
                    Transactions cryptées et protégées via Paydunya. Vos clients paient en toute confiance.
                  </p>
                </FadeIn>
                <FadeIn delay={0.5}>
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <a
                      href="#"
                      className="inline-flex items-center justify-center rounded-full cursor-pointer gap-2.5 bg-secondary hover:scale-101 text-center transition-all duration-500 ease-in-out font-medium text-nowrap lowercase hover:bg-primary-500 text-accent hover:text-accent text-tagline-1 md:px-6 px-4 md:py-3.5 py-2.5"
                    >
                      <span className="inline-block first-letter:uppercase">
                        Commencer gratuitement
                      </span>
                    </a>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* Fonctionnalités de sécurité */}
        <section className="bg-background-2 dark:bg-background-5 py-[100px]">
          <div className="main-container">
            <div className="text-center space-y-3 mb-[70px]">
              <FadeIn delay={0.2}>
                <span className="badge bg-primary-500 text-white">Fonctionnalités de sécurité</span>
              </FadeIn>
              <FadeIn delay={0.3}>
                <h2 className="xl:max-w-[878px] max-w-[600px] mx-auto">
                  Protection maximale pour vos transactions
                </h2>
              </FadeIn>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <FadeIn delay={0.4}>
                <div className="space-y-6 p-8 rounded-2xl bg-background-1 dark:bg-background-6 border border-stroke-1 dark:border-stroke-7 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-heading-5">Intégration Paydunya certifiée</h3>
                    <p className="text-secondary/80 dark:text-accent/80">
                      Partenaire officiel Paydunya avec certification de sécurité pour toutes les transactions.
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.5}>
                <div className="space-y-6 p-8 rounded-2xl bg-background-1 dark:bg-background-6 border border-stroke-1 dark:border-stroke-7 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500">
                    <Lock className="w-8 h-8 text-white" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-heading-5">Cryptage SSL/TLS</h3>
                    <p className="text-secondary/80 dark:text-accent/80">
                      Toutes les données sont cryptées avec les protocoles SSL/TLS les plus avancés.
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.6}>
                <div className="space-y-6 p-8 rounded-2xl bg-background-1 dark:bg-background-6 border border-stroke-1 dark:border-stroke-7 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500">
                    <FileCheck className="w-8 h-8 text-white" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-heading-5">Validation automatique des paiements</h3>
                    <p className="text-secondary/80 dark:text-accent/80">
                      Vérification instantanée de chaque transaction pour garantir sa validité.
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.7}>
                <div className="space-y-6 p-8 rounded-2xl bg-background-1 dark:bg-background-6 border border-stroke-1 dark:border-stroke-7 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500">
                    <AlertTriangle className="w-8 h-8 text-white" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-heading-5">Protection anti-fraude</h3>
                    <p className="text-secondary/80 dark:text-accent/80">
                      Système intelligent de détection et prévention des transactions frauduleuses.
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.8}>
                <div className="space-y-6 p-8 rounded-2xl bg-background-1 dark:bg-background-6 border border-stroke-1 dark:border-stroke-7 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-500">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-heading-5">Historique complet des transactions</h3>
                    <p className="text-secondary/80 dark:text-accent/80">
                      Accédez à l'historique détaillé de toutes vos transactions à tout moment.
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.9}>
                <div className="space-y-6 p-8 rounded-2xl bg-background-1 dark:bg-background-6 border border-stroke-1 dark:border-stroke-7 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-500">
                    <BarChart3 className="w-8 h-8 text-white" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-heading-5">Rapports de paiements détaillés</h3>
                    <p className="text-secondary/80 dark:text-accent/80">
                      Générez des rapports détaillés pour suivre vos performances financières.
                    </p>
                  </div>
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
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-blue-500 text-white flex items-center justify-center font-bold text-xl">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="text-heading-5 mb-2">Client choisit Mobile Money</h3>
                    <p className="text-secondary/80 dark:text-accent/80">
                      Le client sélectionne son opérateur Mobile Money préféré (Orange Money, MTN, Moov, etc.) pour effectuer le paiement.
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.5}>
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 text-white flex items-center justify-center font-bold text-xl">
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
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-white flex items-center justify-center font-bold text-xl">
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
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 text-white flex items-center justify-center font-bold text-xl">
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
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 text-white flex items-center justify-center font-bold text-xl">
                    5
                  </div>
                  <div className="flex-1">
                    <h3 className="text-heading-5 mb-2">Commande validée automatiquement</h3>
                    <p className="text-secondary/80 dark:text-accent/80">
                      La commande est automatiquement validée et vous recevez une notification. Le client reçoit également sa confirmation.
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
            <div className="max-w-4xl mx-auto text-center space-y-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-12 lg:p-16">
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
                    <Check className="w-5 h-5" />
                    <span>Cryptage SSL/TLS inclus</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5" />
                    <span>Protection anti-fraude</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5" />
                    <span>Paydunya certifié</span>
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
