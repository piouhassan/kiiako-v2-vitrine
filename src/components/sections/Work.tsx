'use client';

import { FadeIn } from '@/components/animations/FadeIn';
import { SlideIn } from '@/components/animations/SlideIn';

export default function Work() {
  return (
    <section className="w-full xl:py-[100px] lg:py-[90px] md:py-20 py-16">
      <div className="w-full xl:px-0 px-5">
        <div className="text-center space-y-3 mb-10 md:mb-[70px]">
          <SlideIn direction="down" delay={0.1}>
            <h2>Des outils puissants pour votre réussite</h2>
          </SlideIn>
          <SlideIn direction="down" delay={0.2}>
            <p className="max-w-[680px] mx-auto">
              Kiiako vous offre une suite complète d&apos;outils professionnels pour gérer votre activité
              en ligne. De la création à la livraison, tout est centralisé dans une interface intuitive.
            </p>
          </SlideIn>
        </div>
        <div className="mb-14 px-6">
          <div className="grid grid-cols-12 lg:gap-14 gap-y-12">
            <div className="col-span-12 lg:col-span-8">
                <FadeIn delay={0.6}>
                  <figure className="space-y-6">
                    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[580px] xl:h-[620px] rounded-[20px] overflow-hidden group">
                      <div className="absolute inset-0 bg-black/40 z-10 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"></div>
                      <img
                          src="/images/builder.png"
                          className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500 ease-in-out"
                          alt="portfolio"
                      />
                      <a
                          href="/features"
                          className="group-hover:opacity-100 opacity-0 transition-all duration-500 ease-in-out absolute top-[55%] group-hover:top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 btn btn-md btn-white dark:btn-accent hover:!btn-white dark:hover:!btn-white-dark group-hover:shadow-3 border-0 transform hover:scale-[102%] z-20"
                      >
                        <span>Explorer la fonctionnalité</span>
                      </a>
                    </div>
                    <div className="flex sm:items-center sm:flex-row flex-col sm:gap-4 gap-2 sm:justify-between justify-start">
                      <h3 className="text-heading-6 sm:text-heading-5">Personnalisation boutique</h3>
                      <p className="max-w-[257px] sm:text-right text-left">
                        Créez une boutique unique qui reflète votre identité de marque
                      </p>
                    </div>
                  </figure>
                </FadeIn>
            </div>
            <div className="col-span-12 lg:col-span-4">
              <div className="grid grid-cols-1 gap-y-6 h-full">
                <FadeIn delay={0.4}>
                  <figure className="space-y-2">
                    <div className="relative w-full h-[250px] sm:h-[280px] md:h-[320px] lg:h-[280px] xl:h-[280px] rounded-[20px] overflow-hidden group">
                      <div className="absolute inset-0 bg-black/40 z-10 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"></div>
                      <img
                        src="/img/order_detail.png"
                        className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500 ease-in-out"
                        alt="portfolio"
                      />
                      <a
                        href="/features"
                        className="group-hover:opacity-100 opacity-0 transition-all duration-500 ease-in-out absolute top-[55%] group-hover:top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 btn btn-md btn-white dark:btn-accent hover:!btn-white dark:hover:!btn-white-dark group-hover:shadow-3 border-0 transform hover:scale-[102%] z-20"
                      >
                        <span>Explorer la fonctionnalité</span>
                      </a>
                    </div>
                    <div className="flex sm:items-center sm:flex-row flex-col sm:gap-4 gap-2 sm:justify-between justify-start">
                      <h6>Gestion des commandes</h6>
                      <p className="max-w-[257px] sm:text-right text-left">
                        Suivez et traitez toutes vos commandes en temps réel
                      </p>
                    </div>
                  </figure>
                </FadeIn>
                <FadeIn delay={0.5}>
                  <figure className="space-y-2">
                    <div className="relative w-full h-[250px] sm:h-[280px] md:h-[320px] lg:h-[280px] xl:h-[280px] rounded-[20px] overflow-hidden group">
                      <div className="absolute inset-0 bg-black/40 z-10 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"></div>
                      <img
                        src="/img/dashboard.png"
                        alt="portfolio"
                        className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500 ease-in-out"
                      />
                      <a
                        href="/features"
                        className="group-hover:opacity-100 opacity-0 transition-all duration-500 ease-in-out absolute top-[55%] group-hover:top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 btn btn-md btn-white dark:btn-accent hover:!btn-white dark:hover:!btn-white-dark group-hover:shadow-3 border-0 transform hover:scale-[102%] z-20"
                      >
                        <span>Explorer la fonctionnalité</span>
                      </a>
                    </div>
                    <div className="flex sm:items-center sm:flex-row flex-col sm:gap-4 gap-2 sm:justify-between justify-start">
                      <h6>Analytics & Statistiques</h6>
                      <p className="max-w-[257px] sm:text-right text-left">
                        Analysez vos performances et optimisez vos ventes
                      </p>
                    </div>
                  </figure>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
        <FadeIn delay={0.7}>
          <div className="text-center">
            <a
              href="/features"
              className="btn btn-secondary btn-xl dark:btn-transparent hover:btn-white dark:hover:btn-accent w-[90%] md:w-auto"
            >
              <span>Découvrir toutes les fonctionnalités</span>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
