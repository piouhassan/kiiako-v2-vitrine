'use client';

import { FadeIn } from '@/components/animations/FadeIn';
import { useTranslation } from 'react-i18next';
import { Check } from 'lucide-react';
import { REGISTER_URL_FREE } from '@/lib/utls';

export default function CTA() {
  const { t } = useTranslation();

  return (
    <section className="cb-cta-section relative overflow-hidden py-24 lg:py-32">
      {/* Glow background */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-30 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary-500/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[40%] bg-primary-500/15 blur-[100px] rounded-full" />
      </div>

      <div className="main-container px-4">
        <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">

          {/* Title + Description */}
          <div className="space-y-6">
            <FadeIn delay={0.2}>
              <h2 className="text-heading-3 text-secondary dark:text-white leading-tight">
                {t('creerBoutique.cta.title')}
              </h2>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="text-xl text-secondary/60 dark:text-accent/60 max-w-2xl mx-auto leading-relaxed">
                {t('creerBoutique.cta.description')}
              </p>
            </FadeIn>
          </div>

          {/* CTA Button + Benefits */}
          <FadeIn delay={0.4}>
            <div className="flex flex-col items-center gap-10">
              <a
                href={REGISTER_URL_FREE}
                className="cb-btn px-12 py-6 text-lg group shadow-2xl shadow-primary-500/20"
              >
                <span className="relative z-10">
                  {t('creerBoutique.cta.button')}
                </span>
              </a>

              <ul className="flex flex-wrap justify-center gap-x-12 gap-y-6">
                <li className="flex items-center gap-3">
                  <div className="size-6 rounded-full bg-primary-500/10 flex items-center justify-center">
                    <Check className="size-3.5 text-primary-500" />
                  </div>
                  <span className="text-secondary/80 dark:text-accent/80 text-[10px]">
                    {t('creerBoutique.cta.benefits.free')}
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="size-6 rounded-full bg-primary-500/10 flex items-center justify-center">
                    <Check className="size-3.5 text-primary-500" />
                  </div>
                  <span className="text-secondary/80 dark:text-accent/80 text-[10px]">
                    {t('creerBoutique.cta.benefits.noCard')}
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="size-6 rounded-full bg-primary-500/10 flex items-center justify-center">
                    <Check className="size-3.5 text-primary-500" />
                  </div>
                  <span className="text-secondary/80 dark:text-accent/80 text-[10px]">
                    {t('creerBoutique.cta.benefits.support')}
                  </span>
                </li>
              </ul>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
