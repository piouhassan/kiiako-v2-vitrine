'use client';

import { FadeIn } from '@/components/animations/FadeIn';
import { SlideIn } from '@/components/animations/SlideIn';
import {REGISTER_URL_FREE} from "@/lib/utls";

export default function About() {
  return (
    <section className="w-full bg-secondary  dark:bg-background-7" >
      <div className="w-full mx-auto">
        <div className="z-10 bg-secondary overflow-hidden px-5 sm:px-8 md:px-[42px] py-12 md:py-16 lg:py-20 xl:py-[72px] relative">
          <div className="grid grid-cols-12 items-center xl:gap-[90px] gap-8 md:gap-10">
            <div className="col-span-12 xl:col-span-7">
              <div className="xl:mx-0 mx-auto space-y-6 md:space-y-8 xl:space-y-14 xl:text-left text-center">
                <SlideIn direction="left" delay={0.2}>
                  <div className="space-y-5">
                    <div className="space-y-3 md:space-y-4">
                      <h2 className="text-white text-2xl md:text-3xl lg:text-4xl">
                        Une boutique <b>Pro</b>, à votre image
                      </h2>
                      <p className="text-white text-sm md:text-base">
                        Chaque vendeur bénéficie automatiquement d&apos;un nom de domaine personnalisé et peut créer
                        un nombre illimité de boutiques, gratuites ou payantes. Vous contrôlez entièrement vos produits,
                        vos commandes et votre image.
                      </p>
                    </div>
                  </div>
                </SlideIn>
                <FadeIn delay={0.4}>
                  <div className="flex justify-center xl:justify-start">
                    <a
                      href={REGISTER_URL_FREE}
                      className="btn btn-base dark:border btn-dark dark:btn-transparent hover:btn-white w-full sm:w-auto"
                    >
                      <span>Commencer gratuitement</span>
                    </a>
                  </div>
                </FadeIn>
              </div>
            </div>
            <div className="col-span-12 xl:col-span-5">
              <SlideIn direction="right" delay={0.3}>
                <div className="flex flex-col items-center xl:items-start">
                  <ul className="space-y-5">
                  <li className="flex items-center gap-3">
                    <span className="size-6 flex items-center justify-center bg-accent/15 backdrop-blur-[15px] rounded-full shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="8" viewBox="0 0 10 8" fill="none">
                        <path
                          d="M9.125 1.375L3.875 6.62477L1.25 4"
                          stroke="#FCFCFC"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <p className="text-white">
                      Nom de domaine personnalisé pour chaque vendeur
                    </p>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="size-6 flex items-center justify-center bg-accent/15 backdrop-blur-[15px] rounded-full shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="8" viewBox="0 0 10 8" fill="none">
                        <path
                          d="M9.125 1.375L3.875 6.62477L1.25 4"
                          stroke="#FCFCFC"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <p className="text-white">Créez un nombre illimité de boutiques gratuites ou payantes</p>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="size-6 flex items-center justify-center bg-accent/15 backdrop-blur-[15px] rounded-full shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="8" viewBox="0 0 10 8" fill="none">
                        <path
                          d="M9.125 1.375L3.875 6.62477L1.25 4"
                          stroke="#FCFCFC"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <p className="text-white">
                      Contrôle total sur vos produits, commandes et image de marque
                    </p>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="size-6 flex items-center justify-center bg-accent/15 backdrop-blur-[15px] rounded-full shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="8" viewBox="0 0 10 8" fill="none">
                        <path
                          d="M9.125 1.375L3.875 6.62477L1.25 4"
                          stroke="#FCFCFC"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <p className="text-white">Expérience fluide et professionnelle pour vos clients</p>
                  </li>
                </ul>
              </div>
            </SlideIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
