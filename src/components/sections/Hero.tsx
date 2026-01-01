'use client';

import { FadeIn } from '@/components/animations/FadeIn';
import { SlideIn } from '@/components/animations/SlideIn';
import HeroAutoScrollGallery from "@/components/elements/HeroAutoScrollGallery";

export default function Hero() {
  return (
    <section className="lg:pb-[100px] pb-16 lg:pt-[234px] pt-[150px] relative overflow-hidden" id="hero">
      <div className="absolute -z-10 top-5 left-1/2 -translate-x-1/2 h-full max-w-[1290px] flex justify-between lg:gap-[239px] sm:gap-[200px] gap-[150px]">
        <div className="lp:block hidden w-px h-full bg-gradient-to-b from-[#DFE4EB] to-transparent dark:from-[#2A333E] animate-line-grow"></div>
        <div className="lp:block hidden w-px h-full bg-gradient-to-b from-[#DFE4EB] to-transparent dark:from-[#2A333E] animate-line-grow [animation-delay:100ms]"></div>
        <div className="lg:block hidden w-px h-full bg-gradient-to-b from-[#DFE4EB] to-transparent dark:from-[#2A333E] animate-line-grow [animation-delay:200ms]"></div>
        <div className="w-px h-full bg-gradient-to-b from-[#DFE4EB] to-transparent dark:from-[#2A333E] animate-line-grow [animation-delay:300ms]"></div>
        <div className="w-px h-full bg-gradient-to-b from-[#DFE4EB] to-transparent dark:from-[#2A333E] animate-line-grow [animation-delay:400ms]"></div>
        <div className="w-px h-full bg-gradient-to-b from-[#DFE4EB] to-transparent dark:from-[#2A333E] animate-line-grow [animation-delay:500ms]"></div>
      </div>

      <div className="main-container mb-[100px]">
        <div className="space-y-14 text-center">
          <div className="space-y-4">
            <SlideIn direction="down" delay={0.2}>
              <h1 className="mx-auto max-w-[886px]  w-full">
                La solution complète pour vendre et livrer en ligne
              </h1>
            </SlideIn>
            <SlideIn direction="down" delay={0.4}>
              <p className="mx-auto max-w-[700px] w-full">
                Avec Kiiako, créer et gérer votre boutique en ligne n&apos;a jamais été aussi simple et flexible.
                Que vous soyez commerçant, artisan ou entrepreneur, lancez votre activité digitale gratuitement
                et commencez à vendre immédiatement.
              </p>
            </SlideIn>
          </div>
          <FadeIn delay={0.6}>
            <ul className="flex flex-col md:flex-row items-center justify-center gap-4">
              <li className="w-full sm:w-auto">
                <a
                  href="/signup"
                  className="btn dark:btn-accent btn-md md:btn-xl btn-primary hover:btn-white dark:hover:btn-white-dark w-[90%] md:w-auto"
                >
                  <span>Créer ma boutique gratuite</span>
                </a>
              </li>
              <li className="w-full sm:w-auto">
                <a
                  href="/demo"
                  className="btn hover:btn-secondary btn-md md:btn-xl btn-white dark:btn-white-dark dark:hover:btn-accent w-[90%] md:w-auto"
                >
                  <span>Voir une démo</span>
                </a>
              </li>
            </ul>
          </FadeIn>
        </div>
      </div>

      <FadeIn delay={0.8}>
        <HeroAutoScrollGallery speed={0.2} direction="left" />
      </FadeIn>
    </section>
  );
}
