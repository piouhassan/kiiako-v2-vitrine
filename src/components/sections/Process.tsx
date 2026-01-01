'use client';

import { FadeIn } from '@/components/animations/FadeIn';
import { SlideIn } from '@/components/animations/SlideIn';

export default function Process() {
  return (
    <section className="xl:py-[100px] md:pt-20 pb-[100px] md:pb-[180px] lg:pb-[200px] pt-16">
      <div className="main-container">
        <div className="text-center space-y-5 mb-14 md:mb-[70px]">
          <FadeIn delay={0.1}>
            <span className="badge bg-primary-500 text-white">Comment ça marche</span>
          </FadeIn>
          <div className="space-y-3">
            <SlideIn direction="down" delay={0.2}>
              <h2>Lancez votre activité en 5 étapes simples</h2>
            </SlideIn>
            <SlideIn direction="down" delay={0.3}>
              <p className="max-w-[610px] mx-auto">
                De la création de votre compte à la livraison de vos produits, Kiiako vous accompagne
                à chaque étape pour transformer votre passion en business rentable.
              </p>
            </SlideIn>
          </div>
        </div>

        <div>
          <div className="step-container max-w-[870px] mx-auto mb-[200px]">
            {/* Step 1 */}
            <FadeIn delay={0.4}>
              <div className="relative">
                <div>
                  <div className="size-[34px] flex items-center justify-center mx-auto rounded-full bg-white drop-shadow-2xl dark:bg-black">
                    <figure className="size-7">
                      <img src="/images/ns-img-149.png" alt="step" className="w-full h-full object-cover dark:hidden" />
                      <img src="/images/ns-img-dark-103.png" alt="step" className="w-full h-full object-cover hidden dark:block" />
                    </figure>
                  </div>
                  <div className="h-[320px] lg:h-[380px] w-1 mx-auto bg-stroke-2 dark:bg-stroke-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-1 h-[0px] step-line" viewBox="0 0 2 222" fill="none">
                      <path d="M1 1L0.99999 221" stroke="url(#paint0_linear_1182_24963_step1)" strokeWidth="2" strokeLinecap="round" />
                      <defs>
                        <linearGradient id="paint0_linear_1182_24963_step1" x1="0.5" y1="1" x2="0.49999" y2="221" gradientUnits="userSpaceOnUse">
                          <stop offset="0" stopColor="#64D9FD" />
                          <stop offset="0.25" stopColor="#7E57FD" />
                          <stop offset="0.5" stopColor="white" />
                          <stop offset="1" stopColor="#B04BFD" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div className="absolute lg:left-0 lg:top-0 left-1/2 lg:translate-x-0 lg:translate-y-0 -translate-x-1/2 top-1/2 -translate-y-1/2 max-w-[370px] w-full space-y-3 lg:bg-none dark:bg-background-6 lg:dark:bg-transparent lg:p-0 lg:rounded-none p-6 rounded-[20px] max-lg:bg-background-4">
                  <p className="text-tagline-2 text-primary-500">ÉTAPE 1</p>
                  <div className="space-y-2">
                    <h3 className="text-heading-6 lg:text-heading-5">Inscription gratuite</h3>
                    <p>Créez votre compte Kiiako en quelques secondes. Aucun frais d&apos;inscription, aucune carte bancaire requise.</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Step 2 */}
            <FadeIn delay={0.5}>
              <div className="relative">
                <div>
                  <div className="size-[34px] flex items-center justify-center mx-auto rounded-full bg-white drop-shadow-2xl dark:bg-black">
                    <figure className="size-7">
                      <img src="/images/ns-img-149.png" alt="step" className="w-full h-full object-cover dark:hidden" />
                      <img src="/images/ns-img-dark-103.png" alt="step" className="w-full h-full object-cover hidden dark:block" />
                    </figure>
                  </div>
                  <div className="h-[320px] lg:h-[380px] w-1 mx-auto bg-stroke-2 dark:bg-stroke-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-1 h-[0px] step-line" viewBox="0 0 2 222" fill="none">
                      <path d="M1 1L0.99999 221" stroke="url(#paint0_linear_1182_24963_step2)" strokeWidth="2" strokeLinecap="round" />
                      <defs>
                        <linearGradient id="paint0_linear_1182_24963_step2" x1="0.5" y1="1" x2="0.49999" y2="221" gradientUnits="userSpaceOnUse">
                          <stop offset="0" stopColor="#64D9FD" />
                          <stop offset="0.25" stopColor="#7E57FD" />
                          <stop offset="0.5" stopColor="white" />
                          <stop offset="1" stopColor="#B04BFD" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div className="absolute lg:right-0 lg:top-0 right-1/2 lg:translate-x-0 lg:translate-y-0 translate-x-1/2 top-1/2 -translate-y-1/2 max-w-[370px] w-full space-y-3 lg:bg-none dark:bg-background-6 lg:dark:bg-transparent lg:p-0 lg:rounded-none p-6 rounded-[20px] max-lg:bg-background-4">
                  <p className="text-tagline-2 text-primary-500">ÉTAPE 2</p>
                  <div className="space-y-2">
                    <h3 className="text-heading-6 lg:text-heading-5 max-w-[293px]">Créez votre boutique</h3>
                    <p>Personnalisez votre boutique avec votre nom de domaine, ajoutez vos produits, définissez vos prix et vous êtes prêt à vendre.</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Step 3 */}
            <FadeIn delay={0.6}>
              <div className="relative">
                <div>
                  <div className="size-[34px] flex items-center justify-center mx-auto rounded-full bg-white drop-shadow-2xl dark:bg-black">
                    <figure className="size-7">
                      <img src="/images/ns-img-149.png" alt="step" className="w-full h-full object-cover dark:hidden" />
                      <img src="/images/ns-img-dark-103.png" alt="step" className="w-full h-full object-cover hidden dark:block" />
                    </figure>
                  </div>
                  <div className="h-[320px] lg:h-[380px] w-1 mx-auto bg-stroke-2 dark:bg-stroke-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-1 h-[0px] step-line" viewBox="0 0 2 222" fill="none">
                      <path d="M1 1L0.99999 221" stroke="url(#paint0_linear_1182_24963_step3)" strokeWidth="2" strokeLinecap="round" />
                      <defs>
                        <linearGradient id="paint0_linear_1182_24963_step3" x1="0.5" y1="1" x2="0.49999" y2="221" gradientUnits="userSpaceOnUse">
                          <stop offset="0" stopColor="#64D9FD" />
                          <stop offset="0.25" stopColor="#7E57FD" />
                          <stop offset="0.5" stopColor="white" />
                          <stop offset="1" stopColor="#B04BFD" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div className="absolute lg:left-0 lg:top-0 left-1/2 lg:translate-x-0 lg:translate-y-0 -translate-x-1/2 top-1/2 -translate-y-1/2 max-w-[370px] w-full space-y-3 lg:bg-none dark:bg-background-6 lg:dark:bg-transparent lg:p-0 lg:rounded-none p-6 rounded-[20px] max-lg:bg-background-4">
                  <p className="text-tagline-2 text-primary-500">ÉTAPE 3</p>
                  <div className="space-y-2">
                    <h3 className="text-heading-6 lg:text-heading-5 max-w-[236px]">Recevez vos commandes</h3>
                    <p>Vos clients découvrent vos produits et passent commande directement depuis votre boutique en ligne professionnelle.</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Step 4 */}
            <FadeIn delay={0.7}>
              <div className="relative">
                <div>
                  <div className="size-[34px] flex items-center justify-center mx-auto rounded-full bg-white drop-shadow-2xl dark:bg-black">
                    <figure className="size-7">
                      <img src="/images/ns-img-149.png" alt="step" className="w-full h-full object-cover dark:hidden" />
                      <img src="/images/ns-img-dark-103.png" alt="step" className="w-full h-full object-cover hidden dark:block" />
                    </figure>
                  </div>
                  <div className="h-[320px] lg:h-[380px] w-1 mx-auto bg-stroke-2 dark:bg-stroke-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-1 h-[0px] step-line" viewBox="0 0 2 222" fill="none">
                      <path d="M1 1L0.99999 221" stroke="url(#paint0_linear_1182_24963_step4)" strokeWidth="2" strokeLinecap="round" />
                      <defs>
                        <linearGradient id="paint0_linear_1182_24963_step4" x1="0.5" y1="1" x2="0.49999" y2="221" gradientUnits="userSpaceOnUse">
                          <stop offset="0" stopColor="#64D9FD" />
                          <stop offset="0.25" stopColor="#7E57FD" />
                          <stop offset="0.5" stopColor="white" />
                          <stop offset="1" stopColor="#B04BFD" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div className="absolute lg:right-0 lg:top-0 right-1/2 lg:translate-x-0 lg:translate-y-0 translate-x-1/2 top-1/2 -translate-y-1/2 max-w-[370px] w-full space-y-3 lg:bg-none dark:bg-background-6 lg:dark:bg-transparent lg:p-0 lg:rounded-none p-6 rounded-[20px] max-lg:bg-background-4">
                  <p className="text-tagline-2 text-primary-500">ÉTAPE 4</p>
                  <div className="space-y-2">
                    <h3 className="text-heading-6 lg:text-heading-5 max-w-[236px]">Encaissez vos paiements</h3>
                    <p>Recevez vos paiements instantanément via Mobile Money. Transactions sécurisées et gestion simplifiée de vos revenus.</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Step 5 */}
            <FadeIn delay={0.8}>
              <div className="relative">
                <div>
                  <div className="size-[34px] flex items-center justify-center mx-auto rounded-full bg-white drop-shadow-2xl dark:bg-black">
                    <figure className="size-7">
                      <img src="/images/ns-img-149.png" alt="step" className="w-full h-full object-cover dark:hidden" />
                      <img src="/images/ns-img-dark-103.png" alt="step" className="w-full h-full object-cover hidden dark:block" />
                    </figure>
                  </div>
                </div>
                <div className="absolute lg:left-0 lg:top-0 left-1/2 lg:translate-x-0 lg:translate-y-0 -translate-x-1/2 top-16 max-w-[370px] w-full space-y-3 lg:bg-none dark:bg-background-6 lg:dark:bg-transparent lg:p-0 lg:rounded-none p-6 rounded-[20px] max-lg:bg-background-4">
                  <p className="text-tagline-2 text-primary-500">ÉTAPE 5</p>
                  <div className="space-y-2">
                    <h3 className="text-heading-6 lg:text-heading-5 max-w-[203px]">Livraison assurée</h3>
                    <p>Notre système de livraison intégré achemine vos produits directement chez vos clients. Vous suivez tout depuis votre tableau de bord.</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
