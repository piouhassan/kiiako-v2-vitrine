'use client';

import { useState } from 'react';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { FadeIn } from '@/components/animations/FadeIn';
import { SlideIn } from '@/components/animations/SlideIn';

export default function TarifsPage() {
  const [activeAccordion, setActiveAccordion] = useState(0);

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? -1 : index);
  };
  return (
    <div className="bg-background-1 dark:bg-background-6">
      <Header />
      <main>
        <section className="pb-20 md:pb-[100px] lg:pb-[150px] xl:pb-[200px]">
          <div className="max-w-[1440px] w-full mx-auto rounded-2xl space-y-[70px] bg-background-1 dark:bg-black py-[100px] px-5 md:px-6 lg:px-10 xl:px-16">
            {/* En-tête */}
            <div className="max-w-2xl mx-auto text-center space-y-3 mt-20">
              <SlideIn direction="down" delay={0.2}>
                <h2 className="text-heading-2">
                  Sélectionnez le plan tarifaire qui correspond le mieux à vos besoins.
                </h2>
              </SlideIn>
            </div>

            {/* Grille de tarification */}
            <div className="grid grid-cols-12 gap-y-8">
              {/* Colonne 1: Liste des fonctionnalités */}
              <FadeIn delay={0.3} className="col-span-12 md:col-span-6 xl:col-span-3">
                <div>
                  <div className="h-[201px] w-[290px] hidden md:block"></div>
                  <div className="space-y-[10px]">
                    <h3 className="text-heading-6">Ce qui est inclus</h3>
                    <ul>
                      <li className="h-14 px-0 py-4 border-b border-b-stroke-4 dark:border-stroke-7">
                        <p className="font-normal text-secondary/60 dark:text-accent/60 text-tagline-1">
                          Pages incluses
                        </p>
                      </li>
                      <li className="h-14 px-0 py-4 border-b border-b-stroke-4 dark:border-stroke-7">
                        <p className="font-normal text-secondary/60 dark:text-accent/60 text-tagline-1">
                          Services de personnalisation
                        </p>
                      </li>
                      <li className="h-14 px-0 py-4 border-b border-b-stroke-4 dark:border-stroke-7">
                        <p className="font-normal text-secondary/60 dark:text-accent/60 text-tagline-1">
                          Design personnalisé
                        </p>
                      </li>
                      <li className="h-14 px-0 py-4 border-b border-b-stroke-4 dark:border-stroke-7">
                        <p className="font-normal text-secondary/60 dark:text-accent/60 text-tagline-1">
                          Solutions de marque complètes
                        </p>
                      </li>
                      <li className="h-14 px-0 py-4 border-b border-b-stroke-4 dark:border-stroke-7">
                        <p className="font-normal text-secondary/60 dark:text-accent/60 text-tagline-1">
                          Optimisation SEO
                        </p>
                      </li>
                      <li className="h-14 px-0 py-4 border-b border-b-stroke-4 dark:border-stroke-7">
                        <p className="font-normal text-secondary/60 dark:text-accent/60 text-tagline-1">
                          Support de marque
                        </p>
                      </li>
                      <li className="h-14 px-0 py-4 border-b border-b-stroke-4 dark:border-stroke-7">
                        <p className="font-normal text-secondary/60 dark:text-accent/60 text-tagline-1">
                          Assistance personnalisée
                        </p>
                      </li>
                      <li className="h-14 px-0 py-4 border-b border-b-stroke-4 dark:border-stroke-7">
                        <p className="font-normal text-secondary/60 dark:text-accent/60 text-tagline-1">
                          Conseils d'experts
                        </p>
                      </li>
                      <li className="h-14 px-0 py-4 border-b border-b-stroke-4 dark:border-stroke-7">
                        <p className="font-normal text-secondary/60 dark:text-accent/60 text-tagline-1">
                          Support stratégique
                        </p>
                      </li>
                      <li className="h-14 px-0 py-4 border-b border-b-stroke-4 dark:border-stroke-7">
                        <p className="font-normal text-secondary/60 dark:text-accent/60 text-tagline-1">
                          Aide professionnelle
                        </p>
                      </li>
                      <li className="h-14 px-0 py-4 border-b border-b-stroke-4 dark:border-stroke-7">
                        <p className="font-normal text-secondary/60 dark:text-accent/60 text-tagline-1">
                          Stratégies innovantes
                        </p>
                      </li>
                      <li className="h-14 px-0 py-4 border-b border-b-stroke-4 dark:border-stroke-7">
                        <p className="font-normal text-secondary/60 dark:text-accent/60 text-tagline-1">
                          Solutions efficaces
                        </p>
                      </li>
                      <li className="h-14 px-0 py-4 border-b border-b-stroke-4 dark:border-stroke-7">
                        <p className="font-normal text-secondary/60 dark:text-accent/60 text-tagline-1">
                          Support holistique
                        </p>
                      </li>
                      <li className="h-14 px-0 py-4 border-b border-b-stroke-4 dark:border-stroke-7">
                        <p className="font-normal text-secondary/60 dark:text-accent/60 text-tagline-1">
                          Options dynamiques
                        </p>
                      </li>
                      <li className="h-14 px-0 py-4 border-b border-b-stroke-4 dark:border-stroke-7">
                        <p className="font-normal text-secondary/60 dark:text-accent/60 text-tagline-1">
                          Conseils perspicaces
                        </p>
                      </li>
                      <li className="h-14 px-0 py-4 border-b border-b-stroke-4 dark:border-stroke-7">
                        <p className="font-normal text-secondary/60 dark:text-accent/60 text-tagline-1">
                          Support axé sur la valeur
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </FadeIn>

              {/* Plan Essential */}
              <FadeIn delay={0.4} className="col-span-12 md:col-span-6 xl:col-span-3">
                <div>
                  <div className="px-4">
                    <div className="rounded-[20px] py-8 px-6 bg-background-3 dark:bg-background-8 space-y-8">
                      <div>
                        <p className="text-tagline-1 text-secondary/60 dark:text-accent/60 font-medium mb-3">
                          Essential
                        </p>
                        <h3 className="text-heading-5 font-normal text-secondary dark:text-accent/60">Gratuit</h3>
                        <p className="text-secondary/60 dark:text-accent/60">Plan gratuit pour tous les utilisateurs</p>
                      </div>
                      <a
                        href="/contact"
                        className="btn btn-white hover:btn-primary dark:btn-white-dark btn-md w-full before:content-none first-letter:uppercase"
                      >
                        Commencer
                      </a>
                    </div>
                  </div>

                  <div className="rounded-[20px] flex flex-col space-y-8">
                    <ul>
                      <li className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-7">
                        <p className="font-medium text-secondary/60 dark:text-accent/60">Jusqu'à 5</p>
                      </li>
                      {[true, true, false, false, true, true, false, false, true, true, false, true, false, true, false].map((isEnabled, index) => (
                        <li
                          key={index}
                          className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-7 flex items-center justify-center"
                        >
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="shrink-0"
                          >
                            <rect
                              width="18"
                              height="18"
                              rx="9"
                              className={isEnabled ? "fill-secondary dark:fill-accent" : "fill-secondary/20 dark:fill-accent/20"}
                            />
                            <path
                              d="M8.31661 12.7561L13.7491 7.42144C14.0836 7.0959 14.0836 6.5697 13.7491 6.24416C13.4145 5.91861 12.8736 5.91861 12.539 6.24416L7.7116 10.9901L5.46096 8.78807C5.12636 8.46253 4.58554 8.46253 4.25095 8.78807C3.91635 9.11362 3.91635 9.63982 4.25095 9.96536L7.1066 12.7561C7.27347 12.9184 7.49253 13 7.7116 13C7.93067 13 8.14974 12.9184 8.31661 12.7561Z"
                              className="fill-white dark:fill-black"
                            />
                          </svg>
                        </li>
                      ))}
                    </ul>
                    <div className="text-center group">
                      <div className="group/btn-v2 inline-block w-[85%] rounded-full md:w-auto mx-auto md:mx-0 duration-500 transition-transform ease-in-out">
                        <a
                          href="/contact"
                          className="inline-flex items-center justify-center rounded-full cursor-pointer gap-1.5 btn-lg-v2 btn-primary-v2 group-hover/btn-v2:btn-secondary-v2 text-center transition-all duration-500 ease-in-out font-medium text-nowrap lowercase w-full md:w-auto mx-auto md:mx-0 h-12 md:h-auto"
                        >
                          <span className="inline-block transition-transform duration-300 ease-in-out first-letter:uppercase">
                            Commencer
                          </span>
                          <div className="relative overflow-hidden size-6">
                            <span className="group-hover/btn-v2:translate-x-1 -translate-x-6 absolute inset-0 transition-all duration-300 ease-in-out size-6 btn-v2-icon">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M11 5H13V7H11V5Z" />
                                <path d="M5 5H7V7H5V5Z" />
                                <path d="M14 8H16V10H14V8Z" />
                                <path d="M8 8H10V10H8V8Z" />
                                <path d="M17 11H19V13H17V11Z" />
                                <path d="M11 11H13V13H11V11Z" />
                                <path d="M14 14H16V16H14V14Z" />
                                <path d="M8 14H10V16H8V14Z" />
                                <path d="M11 17H13V19H11V17Z" />
                                <path d="M5 17H7V19H5V17Z" />
                              </svg>
                            </span>
                            <span className="group-hover/btn-v2:translate-x-6 absolute -translate-x-2 transition-all duration-300 ease-in-out size-6 btn-v2-icon">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M11 5H13V7H11V5Z" />
                                <path d="M5 5H7V7H5V5Z" />
                                <path d="M14 8H16V10H14V8Z" />
                                <path d="M8 8H10V10H8V8Z" />
                                <path d="M17 11H19V13H17V11Z" />
                                <path d="M11 11H13V13H11V11Z" />
                                <path d="M14 14H16V16H14V14Z" />
                                <path d="M8 14H10V16H8V14Z" />
                                <path d="M11 17H13V19H11V17Z" />
                                <path d="M5 17H7V19H5V17Z" />
                              </svg>
                            </span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Plan Advanced */}
              <FadeIn delay={0.5} className="col-span-12 md:col-span-6 xl:col-span-3">
                <div>
                  <div className="px-4 relative z-10">
                    <div className="rounded-[20px] relative py-8 px-6 bg-secondary overflow-hidden">
                      <div className="absolute z-20 h-full w-full -top-28 -right-20">
                        <img src="images/ns-img-496.png" alt="pricing bg" />
                      </div>
                      <div className="relative z-30 space-y-8">
                        <div>
                          <p className="text-tagline-1 text-accent/60 font-medium mb-3">Advanced</p>
                          <h3 className="text-heading-5 font-normal text-accent">15 000 FCFA</h3>
                          <p className="text-accent/60">Plans pour utilisateurs avancés</p>
                        </div>
                        <a
                          href="/contact"
                          className="btn btn-primary hover:btn-white dark:hover:btn-accent btn-md w-full before:content-none first-letter:uppercase"
                        >
                          Commencer
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[20px] flex flex-col space-y-8">
                    <ul>
                      <li className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-7">
                        <p className="font-medium text-secondary/60 dark:text-accent/60">Jusqu'à 10</p>
                      </li>
                      {[true, true, true, false, true, false, false, false, true, false, true, false, true, false, true].map((isEnabled, index) => (
                        <li
                          key={index}
                          className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-7 flex items-center justify-center"
                        >
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="shrink-0"
                          >
                            <rect
                              width="18"
                              height="18"
                              rx="9"
                              className={isEnabled ? "fill-secondary dark:fill-accent" : "fill-secondary/20 dark:fill-accent/20"}
                            />
                            <path
                              d="M8.31661 12.7561L13.7491 7.42144C14.0836 7.0959 14.0836 6.5697 13.7491 6.24416C13.4145 5.91861 12.8736 5.91861 12.539 6.24416L7.7116 10.9901L5.46096 8.78807C5.12636 8.46253 4.58554 8.46253 4.25095 8.78807C3.91635 9.11362 3.91635 9.63982 4.25095 9.96536L7.1066 12.7561C7.27347 12.9184 7.49253 13 7.7116 13C7.93067 13 8.14974 12.9184 8.31661 12.7561Z"
                              className="fill-white dark:fill-black"
                            />
                          </svg>
                        </li>
                      ))}
                    </ul>
                    <div className="text-center group">
                      <div className="group/btn-v2 inline-block w-[85%] rounded-full md:w-auto mx-auto md:mx-0 duration-500 transition-transform ease-in-out">
                        <a
                          href="/contact"
                          className="inline-flex items-center justify-center rounded-full cursor-pointer gap-1.5 btn-lg-v2 btn-primary-v2 group-hover/btn-v2:btn-secondary-v2 text-center transition-all duration-500 ease-in-out font-medium text-nowrap lowercase w-full md:w-auto mx-auto md:mx-0 h-12 md:h-auto"
                        >
                          <span className="inline-block transition-transform duration-300 ease-in-out first-letter:uppercase">
                            Commencer
                          </span>
                          <div className="relative overflow-hidden size-6">
                            <span className="group-hover/btn-v2:translate-x-1 -translate-x-6 absolute inset-0 transition-all duration-300 ease-in-out size-6 btn-v2-icon">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M11 5H13V7H11V5Z" />
                                <path d="M5 5H7V7H5V5Z" />
                                <path d="M14 8H16V10H14V8Z" />
                                <path d="M8 8H10V10H8V8Z" />
                                <path d="M17 11H19V13H17V11Z" />
                                <path d="M11 11H13V13H11V11Z" />
                                <path d="M14 14H16V16H14V14Z" />
                                <path d="M8 14H10V16H8V14Z" />
                                <path d="M11 17H13V19H11V17Z" />
                                <path d="M5 17H7V19H5V17Z" />
                              </svg>
                            </span>
                            <span className="group-hover/btn-v2:translate-x-6 absolute -translate-x-2 transition-all duration-300 ease-in-out size-6 btn-v2-icon">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M11 5H13V7H11V5Z" />
                                <path d="M5 5H7V7H5V5Z" />
                                <path d="M14 8H16V10H14V8Z" />
                                <path d="M8 8H10V10H8V8Z" />
                                <path d="M17 11H19V13H17V11Z" />
                                <path d="M11 11H13V13H11V11Z" />
                                <path d="M14 14H16V16H14V14Z" />
                                <path d="M8 14H10V16H8V14Z" />
                                <path d="M11 17H13V19H11V17Z" />
                                <path d="M5 17H7V19H5V17Z" />
                              </svg>
                            </span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Plan Enterprise */}
              <FadeIn delay={0.6} className="col-span-12 md:col-span-6 xl:col-span-3">
                <div>
                  <div className="px-4">
                    <div className="rounded-[20px] py-8 px-6 bg-background-3 dark:bg-background-8 space-y-8">
                      <div>
                        <p className="text-tagline-1 text-secondary/60 dark:text-accent/60 font-medium mb-3">
                          Enterprise
                        </p>
                        <h3 className="text-heading-5 font-normal text-secondary dark:text-accent/60">
                          Sur mesure
                        </h3>
                        <p className="text-secondary/60 dark:text-accent/60">Contactez-nous pour les grandes entreprises</p>
                      </div>
                      <a
                        href="/contact"
                        className="btn dark:btn-white-dark hover:btn-primary btn-white btn-md w-full before:content-none first-letter:uppercase"
                      >
                        Commencer
                      </a>
                    </div>
                  </div>
                  <div className="rounded-[20px] flex flex-col space-y-8">
                    <ul>
                      <li className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-7">
                        <p className="font-medium text-secondary/60 dark:text-accent/60">Illimité</p>
                      </li>
                      {[true, true, true, true, true, false, false, true, false, true, true, true, false, true, true].map((isEnabled, index) => (
                        <li
                          key={index}
                          className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-7 flex items-center justify-center"
                        >
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              width="18"
                              height="18"
                              rx="9"
                              className={isEnabled ? "fill-secondary dark:fill-accent" : "fill-secondary/20 dark:fill-accent/20"}
                            />
                            <path
                              d="M8.31661 12.7561L13.7491 7.42144C14.0836 7.0959 14.0836 6.5697 13.7491 6.24416C13.4145 5.91861 12.8736 5.91861 12.539 6.24416L7.7116 10.9901L5.46096 8.78807C5.12636 8.46253 4.58554 8.46253 4.25095 8.78807C3.91635 9.11362 3.91635 9.63982 4.25095 9.96536L7.1066 12.7561C7.27347 12.9184 7.49253 13 7.7116 13C7.93067 13 8.14974 12.9184 8.31661 12.7561Z"
                              className="fill-white dark:fill-black"
                            />
                          </svg>
                        </li>
                      ))}
                    </ul>
                    <div className="text-center group">
                      <div className="group/btn-v2 inline-block w-[85%] rounded-full md:w-auto mx-auto md:mx-0 duration-500 transition-transform ease-in-out">
                        <a
                          href="/contact"
                          className="inline-flex items-center justify-center rounded-full cursor-pointer gap-1.5 btn-lg-v2 btn-primary-v2 group-hover/btn-v2:btn-secondary-v2 text-center transition-all duration-500 ease-in-out font-medium text-nowrap lowercase w-full md:w-auto mx-auto md:mx-0 h-12 md:h-auto"
                        >
                          <span className="inline-block transition-transform duration-300 ease-in-out first-letter:uppercase">
                            Commencer
                          </span>
                          <div className="relative overflow-hidden size-6">
                            <span className="group-hover/btn-v2:translate-x-1 -translate-x-6 absolute inset-0 transition-all duration-300 ease-in-out size-6 btn-v2-icon">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M11 5H13V7H11V5Z" />
                                <path d="M5 5H7V7H5V5Z" />
                                <path d="M14 8H16V10H14V8Z" />
                                <path d="M8 8H10V10H8V8Z" />
                                <path d="M17 11H19V13H17V11Z" />
                                <path d="M11 11H13V13H11V11Z" />
                                <path d="M14 14H16V16H14V14Z" />
                                <path d="M8 14H10V16H8V14Z" />
                                <path d="M11 17H13V19H11V17Z" />
                                <path d="M5 17H7V19H5V17Z" />
                              </svg>
                            </span>
                            <span className="group-hover/btn-v2:translate-x-6 absolute -translate-x-2 transition-all duration-300 ease-in-out size-6 btn-v2-icon">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M11 5H13V7H11V5Z" />
                                <path d="M5 5H7V7H5V5Z" />
                                <path d="M14 8H16V10H14V8Z" />
                                <path d="M8 8H10V10H8V8Z" />
                                <path d="M17 11H19V13H17V11Z" />
                                <path d="M11 11H13V13H11V11Z" />
                                <path d="M14 14H16V16H14V14Z" />
                                <path d="M8 14H10V16H8V14Z" />
                                <path d="M11 17H13V19H11V17Z" />
                                <path d="M5 17H7V19H5V17Z" />
                              </svg>
                            </span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Client Feedback section */}
        <section>
          <FadeIn delay={0.7}>
            <div className="main-container text-center rounded-4xl py-[100px] -z-0 bg-background-3 dark:bg-background-5 overflow-hidden relative">
              <div
                className="absolute -top-[164%] rotate-[21deg] -left-[35%] w-full h-full -z-10 select-none pointer-events-none"
                aria-hidden="true"
              >
                <img
                  src="images/ns-img-498.png"
                  alt="Decorative gradient background overlay"
                  className="scale-[60%]"
                />
              </div>

              {/* Customer Testimonial */}
              <article className="text-center space-y-4 pb-10">
                {/* Customer Avatars */}
                <div
                  className="flex justify-center -space-x-2.5 cursor-pointer"
                  role="group"
                  aria-label="Customer avatars"
                >
                  <img
                    className="inline-block size-[38px] rounded-full ring-2 ring-accent dark:ring-black bg-ns-yellow"
                    src="images/ns-avatar-1.png"
                    alt="Customer avatar 1"
                    width="38"
                    height="38"
                  />
                  <img
                    className="inline-block size-[38px] rounded-full ring-2 ring-accent dark:ring-black bg-ns-red"
                    src="images/ns-avatar-2.png"
                    alt="Customer avatar 2"
                    width="38"
                    height="38"
                  />
                  <img
                    className="inline-block size-[38px] rounded-full relative z-0 ring-2 ring-accent dark:ring-black bg-ns-green"
                    src="images/ns-avatar-3.png"
                    alt="Customer avatar 3"
                    width="38"
                    height="38"
                  />
                  <div className="inline-flex items-center relative z-10 justify-center size-[38px] bg-ns-cyan rounded-full ring-2 ring-accent dark:ring-black text-secondary/80 dark:text-accent/80 text-tagline-3 font-medium">
                    99+
                  </div>
                </div>

                {/* Trust Metrics */}
                <div>
                  <p className="text-tagline-2 text-secondary dark:text-accent font-medium">Tushed by 20k+</p>
                  <p className="text-tagline-3">Customers Across the Globe</p>
                </div>
              </article>

              {/* Client Logos */}
              <div className="max-w-[1130px] mx-auto relative">
                <div className="absolute left-0 top-5 h-full w-[7%] bg-gradient-to-r from-background-3 to-transparent dark:from-background-5 z-40"></div>
                <div className="absolute right-0 top-5 h-full w-[7%] bg-gradient-to-l from-background-3 to-transparent dark:from-background-5 z-40"></div>

                <div className="logos-marquee-container">
                  <div
                    className="flex items-center justify-center border-t border-secondary/10 dark:border-accent/10 pt-10 gap-8"
                    role="group"
                  >
                    <figure className="min-w-[140px] md:min-w-[201px] ml-8">
                      <img
                        src="images/icons/client-logo-6.svg"
                        alt="Client company logo 1"
                        className="lg:w-auto inline-block dark:hidden"
                        width="120"
                        height="40"
                      />
                      <img
                        src="images/icons/client-logo-6-dark.svg"
                        alt="Client company logo 1"
                        className="lg:w-auto hidden dark:block"
                        width="120"
                        height="40"
                      />
                    </figure>
                    <figure className="min-w-[140px] md:min-w-[201px]">
                      <img
                        src="images/icons/client-logo-7.svg"
                        alt="Client company logo 2"
                        className="lg:w-auto inline-block dark:hidden"
                        width="120"
                        height="40"
                      />
                      <img
                        src="images/icons/client-logo-7-dark.svg"
                        alt="Client company logo 2"
                        className="lg:w-auto hidden dark:block"
                        width="120"
                        height="40"
                      />
                    </figure>
                    <figure className="min-w-[140px] md:min-w-[201px]">
                      <img
                        src="images/icons/client-logo-8.svg"
                        alt="Client company logo 3"
                        className="lg:w-auto inline-block dark:hidden"
                        width="120"
                        height="40"
                      />
                      <img
                        src="images/icons/client-logo-8-dark.svg"
                        alt="Client company logo 3"
                        className="lg:w-auto hidden dark:block"
                        width="120"
                        height="40"
                      />
                    </figure>
                    <figure className="min-w-[140px] md:min-w-[201px]">
                      <img
                        src="images/icons/client-logo-9.svg"
                        alt="Client company logo 4"
                        className="lg:w-auto inline-block dark:hidden"
                        width="120"
                        height="40"
                      />
                      <img
                        src="images/icons/client-logo-9-dark.svg"
                        alt="Client company logo 4"
                        className="lg:w-auto hidden dark:block"
                        width="120"
                        height="40"
                      />
                    </figure>
                    <figure className="min-w-[140px] md:min-w-[201px]">
                      <img
                        src="images/icons/client-logo-10.svg"
                        alt="Client company logo 5"
                        className="lg:w-auto inline-block dark:hidden"
                        width="120"
                        height="40"
                      />
                      <img
                        src="images/icons/client-logo-10-dark.svg"
                        alt="Client company logo 5"
                        className="lg:w-auto hidden dark:block"
                        width="120"
                        height="40"
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* FAQ section */}
        <section
          className="py-[50px] md:py-[70px] lg:py-[85px] xl:pb-[100px] xl:pt-[200px]"
          aria-label="Frequently Asked Questions"
        >
          <div className="main-container">
            <div className="flex items-center flex-col gap-8 lg:gap-0 lg:flex-row justify-between">
              {/* faq content */}
              <div className="space-y-14 text-center lg:text-left flex-1">
                {/* faq heading */}
                <div className="space-y-5">
                  <SlideIn direction="down" delay={0.2}>
                    <span className="badge badge-yellow-v2">FAQ</span>
                  </SlideIn>
                  <SlideIn direction="down" delay={0.3}>
                    <h2 className="lg:max-w-[439px] mx-auto lg:mx-0" id="faq-heading">
                      Common inquiries from clients
                    </h2>
                  </SlideIn>
                </div>

                {/* faq accordion */}
                <FadeIn delay={0.4}>
                  <div className="accordion max-w-[576px] mx-auto lg:mx-0 w-full" role="region">
                    <div className={`accordion-item ${activeAccordion === 0 ? 'active-accordion' : ''}`}>
                      <button
                        className="accordion-action flex items-center cursor-pointer justify-between pt-6 pb-6 w-full"
                        onClick={() => toggleAccordion(0)}
                      >
                        <span className="flex-1 text-left xl:text-heading-6 text-tagline-1 font-normal text-secondary dark:text-accent">
                          What is the primary role of a business agency?
                        </span>
                        <span className="sm:ml-auto ml-2.5 block accordion-arrow">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            width="16"
                            height="16"
                          >
                            <path
                              strokeOpacity="0.8"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m19.5 8.25-7.5 7.5-7.5-7.5"
                              className="stroke-secondary dark:stroke-accent"
                            />
                          </svg>
                        </span>
                      </button>
                      <div className="accordion-content">
                        <div className="border-t border-t-stroke-3 dark:border-t-stroke-7 pt-6 pb-6">
                          <p>
                            When collaborating with a business agency, you can generally expect an extensive
                            array of services designed to not only support your current operations but also to
                            foster growth and innovation within your business. These services often include
                            strategic planning, marketing solutions, financial consulting, and operational
                            improvements.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className={`accordion-item ${activeAccordion === 1 ? 'active-accordion' : ''}`}>
                      <button
                        className="accordion-action flex items-center cursor-pointer justify-between pt-6 pb-6 w-full"
                        onClick={() => toggleAccordion(1)}
                      >
                        <span className="flex-1 text-left xl:text-heading-6 text-tagline-1 font-normal text-secondary dark:text-accent">
                          What kinds of services should I anticipate ?
                        </span>
                        <span className="sm:ml-auto ml-2.5 block accordion-arrow">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            width="16"
                            height="16"
                          >
                            <path
                              strokeOpacity="0.8"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m19.5 8.25-7.5 7.5-7.5-7.5"
                              className="stroke-secondary dark:stroke-accent"
                            />
                          </svg>
                        </span>
                      </button>
                      <div className="accordion-content">
                        <div className="border-t border-t-stroke-3 dark:border-t-stroke-7 pt-6 pb-6">
                          <p>
                            When working with a business agency, you can typically anticipate a wide range of
                            services tailored to support and grow your business.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className={`accordion-item ${activeAccordion === 2 ? 'active-accordion' : ''}`}>
                      <button
                        className="accordion-action flex items-center cursor-pointer justify-between pt-6 pb-6 w-full"
                        onClick={() => toggleAccordion(2)}
                      >
                        <span className="flex-1 text-left xl:text-heading-6 text-tagline-1 font-normal text-secondary dark:text-accent">
                          How often should I consider updating my website?
                        </span>
                        <span className="sm:ml-auto ml-2.5 block accordion-arrow">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            width="16"
                            height="16"
                          >
                            <path
                              strokeOpacity="0.8"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m19.5 8.25-7.5 7.5-7.5-7.5"
                              className="stroke-secondary dark:stroke-accent"
                            />
                          </svg>
                        </span>
                      </button>
                      <div className="accordion-content">
                        <div className="border-t border-t-stroke-3 dark:border-t-stroke-7 pt-6 pb-6">
                          <p>
                            When collaborating with a business agency, you can generally expect an extensive
                            array of services designed to not only support your current operations but also to
                            foster growth and innovation within your business. These services often include
                            strategic planning, marketing solutions, financial consulting, and operational
                            improvements.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className={`accordion-item ${activeAccordion === 3 ? 'active-accordion' : ''}`}>
                      <button
                        className="accordion-action flex items-center cursor-pointer justify-between pt-6 pb-6 w-full"
                        onClick={() => toggleAccordion(3)}
                      >
                        <span className="flex-1 text-left xl:text-heading-6 text-tagline-1 font-normal text-secondary dark:text-accent">
                          How often is it recommended to refresh my website?
                        </span>
                        <span className="sm:ml-auto ml-2.5 block accordion-arrow">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            width="16"
                            height="16"
                          >
                            <path
                              strokeOpacity="0.8"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m19.5 8.25-7.5 7.5-7.5-7.5"
                              className="stroke-secondary dark:stroke-accent"
                            />
                          </svg>
                        </span>
                      </button>
                      <div className="accordion-content">
                        <div className="border-t border-t-stroke-3 dark:border-t-stroke-7 pt-6 pb-6">
                          <p>
                            When collaborating with a business agency, you can generally expect an extensive
                            array of services designed to not only support your current operations but also to
                            foster growth and innovation within your business. These services often include
                            strategic planning, marketing solutions, financial consulting, and operational
                            improvements.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </div>

              {/* faq image */}
              <FadeIn delay={0.3}>
                <figure className="w-full relative max-w-[684px] overflow-hidden flex-1">
                  <img
                    className="size-full object-cover dark:hidden"
                    src="images/ns-img-52.png"
                    alt="Business agency services illustration"
                    loading="lazy"
                  />
                  <img
                    className="size-full object-cover dark:inline-block hidden"
                    src="images/ns-img-dark-31.png"
                    alt="Business agency services illustration"
                    loading="lazy"
                  />
                </figure>
              </FadeIn>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
