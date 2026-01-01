'use client';

import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { FadeIn } from '@/components/animations/FadeIn';
import { Check, Users, Shield, UserPlus, FileText, Lock, Eye } from 'lucide-react';

export default function EquipePage() {
  return (
    <div className="bg-background-1 dark:bg-background-6">
      <Header />
      <main>
        {/* Hero Section centré */}
        <section className="pb-14 pt-18 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[120px] xl:pb-[100px] xl:pt-[160px]">
          <div className="main-container">
            <div className="text-center space-y-6 mb-[70px]">
              <FadeIn delay={0.2}>
                <span className="badge bg-primary-500 text-white">Gestion d'équipe</span>
              </FadeIn>
              <FadeIn delay={0.3}>
                <h1 className="xl:max-w-[878px] max-w-[700px] mx-auto text-heading-2 lg:text-heading-1">
                  Gérez votre boutique en équipe
                </h1>
              </FadeIn>
              <FadeIn delay={0.4}>
                <p className="xl:max-w-[700px] max-w-[600px] mx-auto text-lg">
                  Invitez des collaborateurs et gérez leurs accès avec des rôles personnalisés.
                </p>
              </FadeIn>
              <FadeIn delay={0.5}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center rounded-full cursor-pointer gap-2.5 bg-secondary hover:scale-101 text-center transition-all duration-500 ease-in-out font-medium text-nowrap lowercase hover:bg-primary-500 text-accent hover:text-accent text-tagline-1 md:px-6 px-4 md:py-3.5 py-2.5"
                  >
                    <span className="inline-block first-letter:uppercase">
                      Inviter mon équipe
                    </span>
                  </a>
                </div>
              </FadeIn>
            </div>
            {/* Team collaboration visual */}
            <FadeIn delay={0.6}>
              <div className="max-w-4xl mx-auto">
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=500&fit=crop"
                    alt="Équipe qui collabore"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Rôles disponibles */}
        <section className="bg-background-2 dark:bg-background-5 py-[100px]">
          <div className="main-container">
            <div className="text-center space-y-3 mb-[70px]">
              <FadeIn delay={0.2}>
                <span className="badge bg-primary-500 text-white">Rôles disponibles</span>
              </FadeIn>
              <FadeIn delay={0.3}>
                <h2 className="xl:max-w-[878px] max-w-[600px] mx-auto">
                  Des rôles adaptés à chaque membre
                </h2>
              </FadeIn>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <FadeIn delay={0.4}>
                <div className="space-y-6 p-8 rounded-2xl bg-background-1 dark:bg-background-6 border border-stroke-1 dark:border-stroke-7 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-500">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-heading-5">Propriétaire</h3>
                    <p className="text-secondary/80 dark:text-accent/80">
                      Accès complet à toutes les fonctionnalités et la facturation
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
                    <h3 className="text-heading-5">Administrateur</h3>
                    <p className="text-secondary/80 dark:text-accent/80">
                      Gestion complète de la boutique sauf facturation
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.6}>
                <div className="space-y-6 p-8 rounded-2xl bg-background-1 dark:bg-background-6 border border-stroke-1 dark:border-stroke-7 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500">
                    <FileText className="w-8 h-8 text-white" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-heading-5">Manager</h3>
                    <p className="text-secondary/80 dark:text-accent/80">
                      Gestion des produits et des commandes uniquement
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.7}>
                <div className="space-y-6 p-8 rounded-2xl bg-background-1 dark:bg-background-6 border border-stroke-1 dark:border-stroke-7 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-heading-5">Staff</h3>
                    <p className="text-secondary/80 dark:text-accent/80">
                      Consultation uniquement, pas de modification
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Fonctionnalités */}
        <section className="py-[100px] lg:py-[150px]">
          <div className="main-container">
            <div className="text-center space-y-3 mb-[70px]">
              <FadeIn delay={0.2}>
                <span className="badge bg-primary-500 text-white">Fonctionnalités</span>
              </FadeIn>
              <FadeIn delay={0.3}>
                <h2 className="xl:max-w-[878px] max-w-[600px] mx-auto">
                  Gestion d'équipe simplifiée
                </h2>
              </FadeIn>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <FadeIn delay={0.4}>
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center">
                      <UserPlus className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-heading-5">Invitations illimitées</h3>
                    <p className="text-secondary/80 dark:text-accent/80">
                      Invitez autant de collaborateurs que nécessaire pour gérer votre boutique efficacement.
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.5}>
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-heading-5">Gestion des rôles et permissions</h3>
                    <p className="text-secondary/80 dark:text-accent/80">
                      Attribuez des rôles spécifiques à chaque membre avec des permissions précises.
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.6}>
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                      <Lock className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-heading-5">Permissions personnalisables</h3>
                    <p className="text-secondary/80 dark:text-accent/80">
                      Personnalisez finement les accès de chaque membre selon vos besoins spécifiques.
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.7}>
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center">
                      <FileText className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-heading-5">Historique des actions</h3>
                    <p className="text-secondary/80 dark:text-accent/80">
                      Suivez toutes les actions effectuées par chaque membre de votre équipe avec un historique complet.
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.8}>
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-heading-5">Suppression de membres</h3>
                    <p className="text-secondary/80 dark:text-accent/80">
                      Révoquez l'accès à tout moment en supprimant un membre de votre équipe en un clic.
                    </p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.9}>
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-heading-5">4 rôles prédéfinis</h3>
                    <p className="text-secondary/80 dark:text-accent/80">
                      Utilisez nos rôles prédéfinis (Propriétaire, Admin, Manager, Staff) pour une configuration rapide.
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
            <div className="max-w-4xl mx-auto text-center space-y-8 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-3xl p-12 lg:p-16">
              <FadeIn delay={0.2}>
                <h2 className="text-heading-2">
                  Développez votre boutique en équipe
                </h2>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p className="text-lg  max-w-2xl mx-auto">
                  Invitez vos collaborateurs et gérez votre boutique plus efficacement avec des rôles et permissions adaptés.
                </p>
              </FadeIn>
              <FadeIn delay={0.4}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center rounded-full cursor-pointer gap-2.5 bg-primary-500 hover:scale-101 text-center transition-all duration-500 ease-in-out font-medium text-nowrap lowercase hover:bg-secondary text-white hover:text-white text-tagline-1 md:px-8 px-6 md:py-4 py-3"
                  >
                    <span className="inline-block first-letter:uppercase">
                      Commencer gratuitement
                    </span>
                  </a>
                </div>
              </FadeIn>
              <FadeIn delay={0.5}>
                <ul className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5" />
                    <span>Invitations illimitées</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5" />
                    <span>Rôles personnalisables</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5" />
                    <span>Historique complet</span>
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
