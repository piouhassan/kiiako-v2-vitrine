'use client';

import { useState } from 'react';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { FadeIn } from '@/components/animations/FadeIn';
import { Lightbulb, Wallet } from 'lucide-react';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

export default function GuideDemarragePage() {
  const [open, setOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const images = [
    '/img/dashboard.png',
    '/hero/1.jpg',
    '/hero/2.jpg',
    '/img/order_detail.png',
    '/hero/5.jpg',
    '/hero/6.jpg',
    '/img/order.png',
    '/hero/7.jpg',
    '/hero/8.jpg',
    '/img/domain.png',
    '/hero/3.jpg',
    '/hero/4.jpg',
    '/img/livraison.png',
  ];

  const slides = images.map(src => ({ src }));

  const openLightbox = (index: number) => {
    setPhotoIndex(index);
    setOpen(true);
  };

  return (
    <div className="bg-background-1 dark:bg-background-6">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="xl:pt-[180px] md:pt-42 sm:pt-36 pt-32 xl:pb-28 pb-24">
          <div className="main-container space-y-14">
            {/* Page Title */}
            <div className="max-w-4xl">
              <FadeIn delay={0.1}>
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-px w-12 bg-primary-500"></div>
                  <span className="text-primary-500 text-sm font-medium tracking-wide uppercase">
                    Guide de démarrage
                  </span>
                </div>
              </FadeIn>

              <div className="space-y-6">
                <FadeIn delay={0.2}>
                  <h1 className="text-heading-5 md:text-heading-4 lg:text-heading-3">
                    Lancez votre boutique en ligne
                  </h1>
                </FadeIn>
                <FadeIn delay={0.3}>
                  <p className="text-secondary/60 dark:text-accent/60">
                    Un guide complet pour créer, configurer et publier votre boutique avec Kiiako
                  </p>
                </FadeIn>
              </div>
            </div>

            {/* Créer votre boutique */}
            <div className="flex justify-between flex-col md:flex-row gap-y-4 md:gap-x-16 lg:gap-x-10">
              <FadeIn delay={0.1}>
                <div>
                  <p className="text-heading-4 md:text-heading-5 text-secondary dark:text-accent sticky top-20">
                    Créer votre boutique
                  </p>
                </div>
              </FadeIn>

              <div className="lg:max-w-[808px] space-y-8">
                <FadeIn delay={0.1}>
                  <h2 className="text-heading-5 md:text-heading-4">
                    Sur Kiiako, vous avez deux façons de créer votre boutique, selon vos besoins
                  </h2>
                </FadeIn>

                <FadeIn delay={0.2}>
                  <p className="text-secondary/70 dark:text-accent/70">
                    Deux options s'offrent à vous selon votre niveau d'ambition et vos besoins.
                  </p>
                </FadeIn>

                <FadeIn delay={0.3}>
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-heading-6 md:text-heading-5 font-semibold text-secondary dark:text-accent mb-4">
                        Boutique gratuite
                      </h3>
                      <div className="space-y-4 text-secondary/70 dark:text-accent/70">
                        <p>
                          Vous pouvez créer une boutique gratuite en quelques minutes. Elle est idéale pour commencer, tester la solution et mettre vos premiers produits en ligne.
                        </p>
                        <p>
                          La boutique gratuite vous permet déjà de vendre et de gérer l'essentiel.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-heading-6 md:text-heading-5 font-semibold text-secondary dark:text-accent mb-4">
                        Boutique payante
                      </h3>
                      <div className="space-y-4 text-secondary/70 dark:text-accent/70">
                        <p>
                          Si vous voulez aller plus loin, vous pouvez suivre un onboarding guidé pour créer une boutique payante.
                        </p>
                        <div className="space-y-3">
                          <p className="text-secondary dark:text-accent font-medium">Cette option vous donne accès à :</p>
                          <ul className="space-y-2 pl-4">
                            <li>• Plus de fonctionnalités</li>
                            <li>• Plus de personnalisation</li>
                            <li>• Plus de moyens de paiement</li>
                            <li>• Une boutique plus avancée</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn delay={0.4}>
                  <div className="flex items-start gap-3 text-secondary/60 dark:text-accent/60">
                    <Lightbulb className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                    <p>
                      Vous choisissez l'option qui correspond à votre niveau et à vos objectifs. Et vous pouvez évoluer à tout moment.
                    </p>
                  </div>
                </FadeIn>

                <FadeIn delay={0.5}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <figure
                      className="rounded-[20px] overflow-hidden border border-stroke-1 dark:border-stroke-6 cursor-pointer hover:opacity-90 transition-opacity"
                      onClick={() => openLightbox(0)}
                    >
                      <Image
                        src="/img/dashboard.png"
                        alt="Tableau de bord Kiiako"
                        width={400}
                        height={300}
                        className="w-full h-auto"
                      />
                    </figure>
                    <figure
                      className="rounded-[20px] overflow-hidden border border-stroke-1 dark:border-stroke-6 cursor-pointer hover:opacity-90 transition-opacity"
                      onClick={() => openLightbox(1)}
                    >
                      <Image
                        src="/hero/1.jpg"
                        alt="Interface de création de boutique"
                        width={400}
                        height={300}
                        className="w-full h-auto object-cover"
                      />
                    </figure>
                  </div>
                </FadeIn>

                <FadeIn delay={0.6}>
                  <figure
                    className="rounded-[20px] overflow-hidden border border-stroke-1 dark:border-stroke-6 cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => openLightbox(2)}
                  >
                    <Image
                      src="/hero/2.jpg"
                      alt="Personnalisation de votre boutique"
                      width={808}
                      height={400}
                      className="w-full h-auto object-cover"
                    />
                  </figure>
                </FadeIn>
              </div>
            </div>

            {/* Ajouter vos produits */}
            <div className="flex justify-between flex-col md:flex-row gap-y-4 md:gap-x-16 lg:gap-x-10">
              <FadeIn delay={0.1}>
                <div>
                  <p className="text-heading-4 md:text-heading-5 text-secondary dark:text-accent sticky top-20">
                    Ajouter vos produits
                  </p>
                </div>
              </FadeIn>

              <div className="lg:max-w-[808px] space-y-8">
                <FadeIn delay={0.1}>
                  <h2 className="text-heading-5 md:text-heading-4">
                    L'ajout de produits sur Kiiako est pensé pour tous les types de vendeurs
                  </h2>
                </FadeIn>

                <FadeIn delay={0.2}>
                  <p className="text-secondary/70 dark:text-accent/70">
                    Le processus est complet et flexible.
                  </p>
                </FadeIn>

                <FadeIn delay={0.3}>
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-heading-6 md:text-heading-5 font-semibold text-secondary dark:text-accent mb-4">
                        Fonctionnalités complètes
                      </h3>
                      <ul className="space-y-2 text-secondary/70 dark:text-accent/70">
                        <li>• Produits simples</li>
                        <li>• Produits avec variantes</li>
                        <li>• Gestion du stock</li>
                        <li>• Images, prix, descriptions, etc.</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-heading-6 md:text-heading-5 font-semibold text-secondary dark:text-accent mb-4">
                        Assistant IA
                      </h3>
                      <div className="space-y-4 text-secondary/70 dark:text-accent/70">
                        <p>
                          En activant l'assistant IA, vous pouvez générer automatiquement des descriptions de produits à partir du nom du produit et de quelques mots-clés.
                        </p>
                        <p className="text-secondary dark:text-accent font-medium">
                          Un vrai gain de temps, surtout si vous avez beaucoup de produits à ajouter.
                        </p>
                      </div>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn delay={0.4}>
                  <figure
                    className="rounded-[20px] overflow-hidden border border-stroke-1 dark:border-stroke-6 cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => openLightbox(3)}
                  >
                    <Image
                      src="/img/order_detail.png"
                      alt="Détail d'un produit"
                      width={808}
                      height={400}
                      className="w-full h-auto"
                    />
                  </figure>
                </FadeIn>

                <FadeIn delay={0.5}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <figure
                      className="rounded-[20px] overflow-hidden border border-stroke-1 dark:border-stroke-6 cursor-pointer hover:opacity-90 transition-opacity"
                      onClick={() => openLightbox(4)}
                    >
                      <Image
                        src="/hero/5.jpg"
                        alt="Catalogue de produits"
                        width={400}
                        height={300}
                        className="w-full h-auto object-cover"
                      />
                    </figure>
                    <figure
                      className="rounded-[20px] overflow-hidden border border-stroke-1 dark:border-stroke-6 cursor-pointer hover:opacity-90 transition-opacity"
                      onClick={() => openLightbox(5)}
                    >
                      <Image
                        src="/hero/6.jpg"
                        alt="Gestion des variantes"
                        width={400}
                        height={300}
                        className="w-full h-auto object-cover"
                      />
                    </figure>
                  </div>
                </FadeIn>
              </div>
            </div>

            {/* Paiements */}
            <div className="flex justify-between flex-col md:flex-row gap-y-4 md:gap-x-16 lg:gap-x-10">
              <FadeIn delay={0.1}>
                <div>
                  <p className="text-heading-4 md:text-heading-5 text-secondary dark:text-accent sticky top-20">
                    Paiements
                  </p>
                </div>
              </FadeIn>

              <div className="lg:max-w-[808px] space-y-8">
                <FadeIn delay={0.1}>
                  <h2 className="text-heading-5 md:text-heading-4">
                    Tout est déjà prêt
                  </h2>
                </FadeIn>

                <FadeIn delay={0.2}>
                  <p className="text-secondary/70 dark:text-accent/70">
                    Sur Kiiako, vous n'avez rien à configurer pour commencer à vendre.
                  </p>
                </FadeIn>

                <FadeIn delay={0.3}>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-heading-6 md:text-heading-5 font-semibold text-secondary dark:text-accent mb-4">
                        Les paiements sont :
                      </h3>
                      <div className="space-y-3 text-secondary/70 dark:text-accent/70">
                        <p><strong className="text-secondary dark:text-accent">Déjà intégrés</strong> — Aucune configuration nécessaire</p>
                        <p><strong className="text-secondary dark:text-accent">Déjà fonctionnels</strong> — Prêts immédiatement</p>
                        <p><strong className="text-secondary dark:text-accent">Adaptés</strong> — Mobile Money et plus</p>
                      </div>
                    </div>

                    <p className="text-secondary/70 dark:text-accent/70">
                      Dès qu'un client paie, l'argent est enregistré sur votre compte.
                    </p>

                    <div className="space-y-6 pt-4">
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <Wallet className="w-5 h-5 text-primary-500" />
                          <h3 className="text-heading-6 md:text-heading-5 font-semibold text-secondary dark:text-accent">
                            Retrait des fonds
                          </h3>
                        </div>
                        <p className="text-secondary/70 dark:text-accent/70">
                          Quand vous avez des ventes, vous pouvez demander un retrait sans configuration technique, simplement depuis votre espace vendeur.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-heading-6 md:text-heading-5 font-semibold text-secondary dark:text-accent mb-3">
                          Moyens supplémentaires
                        </h3>
                        <p className="text-secondary/70 dark:text-accent/70">
                          Si vous êtes sur une offre payante, vous pouvez activer d'autres moyens de paiement et les rendre visibles directement au niveau de la boutique.
                        </p>
                      </div>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn delay={0.4}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <figure
                      className="rounded-[20px] overflow-hidden border border-stroke-1 dark:border-stroke-6 cursor-pointer hover:opacity-90 transition-opacity"
                      onClick={() => openLightbox(6)}
                    >
                      <Image
                        src="/img/order.png"
                        alt="Gestion des commandes"
                        width={400}
                        height={300}
                        className="w-full h-auto"
                      />
                    </figure>
                    <figure
                      className="rounded-[20px] overflow-hidden border border-stroke-1 dark:border-stroke-6 cursor-pointer hover:opacity-90 transition-opacity"
                      onClick={() => openLightbox(7)}
                    >
                      <Image
                        src="/hero/7.jpg"
                        alt="Options de paiement"
                        width={400}
                        height={300}
                        className="w-full h-auto object-cover"
                      />
                    </figure>
                  </div>
                </FadeIn>

                <FadeIn delay={0.5}>
                  <figure
                    className="rounded-[20px] overflow-hidden border border-stroke-1 dark:border-stroke-6 cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => openLightbox(8)}
                  >
                    <Image
                      src="/hero/8.jpg"
                      alt="Mobile Money et paiements sécurisés"
                      width={808}
                      height={400}
                      className="w-full h-auto object-cover"
                    />
                  </figure>
                </FadeIn>
              </div>
            </div>

            {/* Publication automatique */}
            <div className="flex justify-between flex-col md:flex-row gap-y-4 md:gap-x-16 lg:gap-x-10">
              <FadeIn delay={0.1}>
                <div>
                  <p className="text-heading-4 md:text-heading-5 text-secondary dark:text-accent sticky top-20">
                    Publication
                  </p>
                </div>
              </FadeIn>

              <div className="lg:max-w-[808px] space-y-8">
                <FadeIn delay={0.1}>
                  <h2 className="text-heading-5 md:text-heading-4">
                    Publication automatique de la boutique
                  </h2>
                </FadeIn>

                <FadeIn delay={0.2}>
                  <p className="text-secondary/70 dark:text-accent/70">
                    Bonne nouvelle : dès que votre boutique est créée, elle est automatiquement publiée.
                  </p>
                </FadeIn>

                <FadeIn delay={0.3}>
                  <div className="space-y-5 text-secondary/70 dark:text-accent/70">
                    <p>
                      Pas de bouton caché, pas d'étape compliquée, pas de configuration supplémentaire.
                    </p>
                    <p className="text-secondary dark:text-accent font-medium">
                      Votre boutique est en ligne et prête à recevoir des commandes.
                    </p>
                    <p>
                      Vous pouvez immédiatement partager le lien de votre boutique avec vos clients et commencer à vendre.
                    </p>
                  </div>
                </FadeIn>

                <FadeIn delay={0.4}>
                  <figure
                    className="rounded-[20px] overflow-hidden border border-stroke-1 dark:border-stroke-6 cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => openLightbox(9)}
                  >
                    <Image
                      src="/img/domain.png"
                      alt="Configuration du nom de domaine"
                      width={808}
                      height={400}
                      className="w-full h-auto"
                    />
                  </figure>
                </FadeIn>

                <FadeIn delay={0.5}>
                  <div className="grid md:grid-cols-3 gap-6">
                    <figure
                      className="rounded-[20px] overflow-hidden border border-stroke-1 dark:border-stroke-6 cursor-pointer hover:opacity-90 transition-opacity"
                      onClick={() => openLightbox(10)}
                    >
                      <Image
                        src="/hero/3.jpg"
                        alt="Boutique en ligne"
                        width={300}
                        height={250}
                        className="w-full h-auto object-cover"
                      />
                    </figure>
                    <figure
                      className="rounded-[20px] overflow-hidden border border-stroke-1 dark:border-stroke-6 cursor-pointer hover:opacity-90 transition-opacity"
                      onClick={() => openLightbox(11)}
                    >
                      <Image
                        src="/hero/4.jpg"
                        alt="Vue client"
                        width={300}
                        height={250}
                        className="w-full h-auto object-cover"
                      />
                    </figure>
                    <figure
                      className="rounded-[20px] overflow-hidden border border-stroke-1 dark:border-stroke-6 cursor-pointer hover:opacity-90 transition-opacity"
                      onClick={() => openLightbox(12)}
                    >
                      <Image
                        src="/img/livraison.png"
                        alt="Gestion des livraisons"
                        width={300}
                        height={250}
                        className="w-full h-auto"
                      />
                    </figure>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        index={photoIndex}
      />
    </div>
  );
}
