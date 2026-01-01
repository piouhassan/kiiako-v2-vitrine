'use client';

import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { FadeIn } from '@/components/animations/FadeIn';
import { SlideIn } from '@/components/animations/SlideIn';
import { Check, Cloud, Lock, Download, RefreshCw, FileText, Music, Video, Image as ImageIcon } from 'lucide-react';

export default function ProduitsDigitauxPage() {
  return (
    <div className="bg-background-1 dark:bg-background-6">
      <Header />
      <main>
        {/* Hero Section avec split */}
        <section className="pb-14 pt-18 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[120px] xl:pb-[100px] xl:pt-[160px]">
          <div className="main-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="space-y-6">
                <FadeIn delay={0.2}>
                  <span className="badge bg-primary-500 text-white">Produits digitaux</span>
                </FadeIn>
                <FadeIn delay={0.3}>
                  <h1 className="text-heading-2 lg:text-heading-1">
                    Vendez vos créations numériques
                  </h1>
                </FadeIn>
                <FadeIn delay={0.4}>
                  <p className="text-lg text-secondary/80 dark:text-accent/80">
                    Vendez ebooks, cours, musique, logiciels et plus. Livraison automatique instantanée.
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
              <div className="relative">
                <SlideIn direction="right" delay={0.4}>
                  <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
                      alt="Produits digitaux"
                      className="w-full h-full object-cover aspect-[4/3]"
                    />
                  </div>
                </SlideIn>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl"></div>
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Fonctionnalités */}
        <section className="bg-background-2 dark:bg-background-5 py-[100px]">
          <div className="main-container">
            <div className="text-center space-y-3 mb-[70px]">
              <FadeIn delay={0.2}>
                <span className="badge bg-primary-500 text-white">Fonctionnalités puissantes</span>
              </FadeIn>
              <FadeIn delay={0.3}>
                <h2 className="xl:max-w-[878px] max-w-[600px] mx-auto">
                  Vendez et livrez vos produits digitaux facilement
                </h2>
              </FadeIn>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <FadeIn delay={0.4}>
                <div className="space-y-6 p-8 rounded-2xl bg-background-1 dark:bg-background-6 border border-stroke-1 dark:border-stroke-7 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500">
                    <Cloud className="w-8 h-8 text-white" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-heading-5">Upload de fichiers jusqu'à 2GB</h3>
                    <p className="text-secondary/80 dark:text-accent/80">
                      Uploadez vos fichiers volumineux en toute sécurité. Stockage illimité pour vos produits digitaux.
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.5}>
                <div className="space-y-6 p-8 rounded-2xl bg-background-1 dark:bg-background-6 border border-stroke-1 dark:border-stroke-7 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500">
                    <FileText className="w-8 h-8 text-white" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-heading-5">Formats multiples supportés</h3>
                    <p className="text-secondary/80 dark:text-accent/80">
                      PDF, MP3, MP4, ZIP, EPUB et tous les formats courants sont supportés sans restriction.
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.6}>
                <div className="space-y-6 p-8 rounded-2xl bg-background-1 dark:bg-background-6 border border-stroke-1 dark:border-stroke-7 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500">
                    <Download className="w-8 h-8 text-white" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-heading-5">Livraison automatique par email</h3>
                    <p className="text-secondary/80 dark:text-accent/80">
                      Vos clients reçoivent instantanément leur lien de téléchargement par email après l'achat.
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.7}>
                <div className="space-y-6 p-8 rounded-2xl bg-background-1 dark:bg-background-6 border border-stroke-1 dark:border-stroke-7 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500">
                    <Lock className="w-8 h-8 text-white" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-heading-5">Liens de téléchargement sécurisés</h3>
                    <p className="text-secondary/80 dark:text-accent/80">
                      Protection anti-piratage avec liens sécurisés et limite de téléchargements par achat.
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.8}>
                <div className="space-y-6 p-8 rounded-2xl bg-background-1 dark:bg-background-6 border border-stroke-1 dark:border-stroke-7 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-500">
                    <Lock className="w-8 h-8 text-white" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-heading-5">Protection anti-piratage</h3>
                    <p className="text-secondary/80 dark:text-accent/80">
                      Système de sécurité avancé pour protéger vos créations contre le téléchargement non autorisé.
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.9}>
                <div className="space-y-6 p-8 rounded-2xl bg-background-1 dark:bg-background-6 border border-stroke-1 dark:border-stroke-7 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-500">
                    <RefreshCw className="w-8 h-8 text-white" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-heading-5">Mises à jour automatiques</h3>
                    <p className="text-secondary/80 dark:text-accent/80">
                      Mettez à jour vos fichiers et tous vos clients reçoivent automatiquement la nouvelle version.
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Types de produits */}
        <section className="py-[100px] lg:py-[150px]">
          <div className="main-container">
            <div className="text-center space-y-3 mb-[70px]">
              <FadeIn delay={0.2}>
                <span className="badge bg-primary-500 text-white">Types de produits</span>
              </FadeIn>
              <FadeIn delay={0.3}>
                <h2 className="xl:max-w-[878px] max-w-[600px] mx-auto">
                  Vendez tout type de contenu digital
                </h2>
              </FadeIn>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { icon: FileText, label: 'Ebooks & PDF', color: 'from-blue-500 to-cyan-500' },
                { icon: Video, label: 'Cours en ligne', color: 'from-purple-500 to-pink-500' },
                { icon: Music, label: 'Musique & Audio', color: 'from-green-500 to-emerald-500' },
                { icon: Video, label: 'Vidéos & Films', color: 'from-orange-500 to-red-500' },
                { icon: Cloud, label: 'Logiciels', color: 'from-indigo-500 to-purple-500' },
                { icon: ImageIcon, label: 'Photos & Designs', color: 'from-pink-500 to-rose-500' },
                { icon: FileText, label: 'Templates', color: 'from-teal-500 to-cyan-500' },
                { icon: Cloud, label: 'Et plus encore', color: 'from-violet-500 to-purple-500' },
              ].map((item, index) => (
                <FadeIn key={index} delay={0.4 + index * 0.1}>
                  <div className="text-center space-y-4 p-6 rounded-2xl bg-background-2 dark:bg-background-5 hover:shadow-lg transition-all duration-300">
                    <div className="flex justify-center">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                        <item.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <h3 className="text-heading-6 font-bold">{item.label}</h3>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-background-2 dark:bg-background-5 py-[100px] lg:py-[150px]">
          <div className="main-container">
            <div className="max-w-4xl mx-auto text-center space-y-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl p-12 lg:p-16">
              <FadeIn delay={0.2}>
                <h2 className="text-heading-2 text-white">
                  Commencez à vendre vos produits digitaux
                </h2>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p className="text-lg text-white/90 max-w-2xl mx-auto">
                  Créez votre boutique en ligne et vendez vos créations numériques avec livraison automatique instantanée.
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
                    <span>Livraison instantanée</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5" />
                    <span>Fichiers jusqu'à 2GB</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5" />
                    <span>Protection anti-piratage</span>
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
