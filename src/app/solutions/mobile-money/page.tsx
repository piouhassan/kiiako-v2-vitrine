'use client';

import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { FadeIn } from '@/components/animations/FadeIn';
import { Check, Smartphone, Zap, TrendingUp, Shield, Clock } from 'lucide-react';

export default function MobileMoneyPage() {
  return (
    <div className="bg-background-1 dark:bg-background-6">
      <Header />
      <main>
        {/* Hero Section centré */}
        <section className="pb-14 pt-18 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[120px] xl:pb-[100px] xl:pt-[160px]">
          <div className="main-container">
            <div className="text-center space-y-6 mb-[70px]">
              <FadeIn delay={0.2}>
                <span className="badge bg-primary-500 text-white">Paiement Mobile Money</span>
              </FadeIn>
              <FadeIn delay={0.3}>
                <h1 className="xl:max-w-[878px] max-w-[700px] mx-auto text-heading-2 lg:text-heading-1">
                  Acceptez le paiement de toute l'Afrique
                </h1>
              </FadeIn>
              <FadeIn delay={0.4}>
                <p className="xl:max-w-[700px] max-w-[600px] mx-auto text-lg">
                  Intégration complète Mobile Money via Paydunya. Orange Money, MTN, Moov et plus.
                </p>
              </FadeIn>
              <FadeIn delay={0.5}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center rounded-full cursor-pointer gap-2.5 bg-secondary hover:scale-101 text-center transition-all duration-500 ease-in-out font-medium text-nowrap lowercase hover:bg-primary-500 text-accent hover:text-accent text-tagline-1 md:px-6 px-4 md:py-3.5 py-2.5"
                  >
                    <span className="inline-block first-letter:uppercase">
                      Activer Mobile Money
                    </span>
                  </a>
                </div>
              </FadeIn>
            </div>
            {/* Operators visual */}
            <FadeIn delay={0.6}>
              <div className="max-w-4xl mx-auto">
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=400&fit=crop"
                    alt="Mobile Money paiements"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600/80 to-amber-600/80 flex items-center justify-center p-8">
                    <div className="grid grid-cols-3 md:grid-cols-6 gap-4 w-full">
                      {[
                        { name: 'Orange Money', color: 'from-orange-500 to-orange-600' },
                        { name: 'MTN', color: 'from-yellow-400 to-yellow-500' },
                        { name: 'Moov', color: 'from-blue-500 to-blue-600' },
                        { name: 'Wave', color: 'from-pink-500 to-pink-600' },
                        { name: 'Wizall', color: 'from-green-500 to-green-600' },
                        { name: 'Free', color: 'from-red-500 to-red-600' },
                      ].map((operator, i) => (
                        <div key={i} className={`rounded-xl overflow-hidden shadow-lg bg-gradient-to-br ${operator.color} p-4 aspect-square flex items-center justify-center backdrop-blur-sm`}>
                          <Smartphone className="w-8 h-8 text-white" />
                        </div>
                      ))}
                    </div>
                  </div>
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
                <span className="badge bg-primary-500 text-white">Fonctionnalités</span>
              </FadeIn>
              <FadeIn delay={0.3}>
                <h2 className="xl:max-w-[878px] max-w-[600px] mx-auto">
                  Paiements mobiles simplifiés
                </h2>
              </FadeIn>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <FadeIn delay={0.4}>
                <div className="space-y-6 p-8 rounded-2xl bg-background-1 dark:bg-background-6 border border-stroke-1 dark:border-stroke-7 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500">
                    <Smartphone className="w-8 h-8 text-white" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-heading-5">Tous les opérateurs supportés</h3>
                    <p className="text-secondary/80 dark:text-accent/80">
                      Orange Money, MTN, Moov Money, Wave, Wizall, Free Money et tous les principaux opérateurs africains.
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.5}>
                <div className="space-y-6 p-8 rounded-2xl bg-background-1 dark:bg-background-6 border border-stroke-1 dark:border-stroke-7 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-heading-5">Paiement instantané</h3>
                    <p className="text-secondary/80 dark:text-accent/80">
                      Vos clients paient en quelques secondes directement depuis leur téléphone mobile via USSD.
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.6}>
                <div className="space-y-6 p-8 rounded-2xl bg-background-1 dark:bg-background-6 border border-stroke-1 dark:border-stroke-7 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500">
                    <Check className="w-8 h-8 text-white" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-heading-5">Confirmation automatique</h3>
                    <p className="text-secondary/80 dark:text-accent/80">
                      Les commandes sont automatiquement confirmées dès réception du paiement Mobile Money.
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.7}>
                <div className="space-y-6 p-8 rounded-2xl bg-background-1 dark:bg-background-6 border border-stroke-1 dark:border-stroke-7 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-heading-5">Pas de retrait manuel</h3>
                    <p className="text-secondary/80 dark:text-accent/80">
                      Les fonds sont automatiquement crédités sur votre compte sans intervention manuelle.
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
                    <h3 className="text-heading-5">Statistiques en temps réel</h3>
                    <p className="text-secondary/80 dark:text-accent/80">
                      Suivez tous vos paiements Mobile Money en temps réel avec des statistiques détaillées.
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.9}>
                <div className="space-y-6 p-8 rounded-2xl bg-background-1 dark:bg-background-6 border border-stroke-1 dark:border-stroke-7 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-500">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-heading-5">Disponible 24/7</h3>
                    <p className="text-secondary/80 dark:text-accent/80">
                      Vos clients peuvent payer à tout moment, de jour comme de nuit, 7 jours sur 7.
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Processus de paiement */}
        <section className="py-[100px] lg:py-[150px]">
          <div className="main-container">
            <div className="text-center space-y-3 mb-[70px]">
              <FadeIn delay={0.2}>
                <span className="badge bg-primary-500 text-white">Processus de paiement</span>
              </FadeIn>
              <FadeIn delay={0.3}>
                <h2 className="xl:max-w-[878px] max-w-[600px] mx-auto">
                  Comment vos clients paient en Mobile Money
                </h2>
              </FadeIn>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              <FadeIn delay={0.4}>
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 text-white flex items-center justify-center font-bold text-xl">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="text-heading-5 mb-2">Client choisit Mobile Money</h3>
                    <p className="text-secondary/80 dark:text-accent/80">
                      Au moment du paiement, le client sélectionne Mobile Money et son opérateur préféré.
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.5}>
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-yellow-500 to-orange-500 text-white flex items-center justify-center font-bold text-xl">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="text-heading-5 mb-2">Saisit son numéro</h3>
                    <p className="text-secondary/80 dark:text-accent/80">
                      Le client entre son numéro de téléphone Mobile Money pour initier la transaction.
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.6}>
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 text-white flex items-center justify-center font-bold text-xl">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="text-heading-5 mb-2">Reçoit notification USSD</h3>
                    <p className="text-secondary/80 dark:text-accent/80">
                      Une notification USSD apparaît automatiquement sur le téléphone du client avec les détails de la transaction.
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.7}>
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 text-white flex items-center justify-center font-bold text-xl">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="text-heading-5 mb-2">Confirme avec code PIN</h3>
                    <p className="text-secondary/80 dark:text-accent/80">
                      Le client entre son code PIN Mobile Money pour autoriser et sécuriser le paiement.
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.8}>
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-white flex items-center justify-center font-bold text-xl">
                    5
                  </div>
                  <div className="flex-1">
                    <h3 className="text-heading-5 mb-2">Paiement validé instantanément</h3>
                    <p className="text-secondary/80 dark:text-accent/80">
                      La transaction est confirmée immédiatement et la commande est automatiquement validée dans votre boutique.
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
            <div className="max-w-4xl mx-auto text-center space-y-8 bg-gradient-to-br from-orange-500 to-amber-600 rounded-3xl p-12 lg:p-16">
              <FadeIn delay={0.2}>
                <h2 className="text-heading-2 text-white">
                  Activez Mobile Money sur votre boutique
                </h2>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p className="text-lg text-white/90 max-w-2xl mx-auto">
                  Facilitez les paiements pour vos clients africains avec Mobile Money. Configuration en quelques clics.
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
                    <span>Tous les opérateurs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5" />
                    <span>Paiement instantané</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5" />
                    <span>Sans frais cachés</span>
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
