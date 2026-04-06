'use client';

import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { FadeIn } from '@/components/animations/FadeIn';
import { useTranslation, Trans } from 'react-i18next';
import { Lock } from 'lucide-react';
import { highlightText } from '@/lib/highlightLegal';

export default function PrivacyPage() {
  const { t } = useTranslation();
  const sections = t('legalPages.privacy.sections', { returnObjects: true }) as { title: string; content: string }[];

  return (
    <div className="bg-background-1 dark:bg-background-6 min-h-screen selection:bg-primary-500/30">
      <Header />
      <main>
        {/* --- Simple Editorial Hero --- */}
        <section className="xl:pt-[180px] md:pt-42 sm:pt-36 pt-32">
          <div className="main-container max-w-4xl mx-auto text-center space-y-8">
            <FadeIn>
              <span className="cb-badge">
                {t('legalPages.privacy.badge')}
              </span>
            </FadeIn>
            <div className="space-y-6">
              <FadeIn delay={0.1}>
                <h1 className="text-heading-2 font-bold leading-tight tracking-tight">
                  <Trans i18nKey="legalPages.privacy.title" components={{ 1: <span className="text-primary-500 italic" /> }} />
                </h1>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-secondary/50 dark:text-accent/50 text-xl leading-relaxed font-light italic">
                  {t('legalPages.privacy.subtitle')}
                </p>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* --- Legal Content --- */}
        <section className="py-24">
          <div className="main-container max-w-4xl mx-auto">
            <div className="space-y-16">
              {sections.map((section, idx) => (
                <FadeIn key={idx} delay={0.1 * idx}>
                  <div className="group space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="size-1 rounded-full bg-primary-500"></div>
                      <h2 className="text-2xl font-bold tracking-tight text-secondary dark:text-white">
                        {section.title}
                      </h2>
                    </div>
                    <p className="text-lg leading-relaxed text-black dark:text-white font-light pl-5 border-l border-stroke-1 dark:border-white/5 whitespace-pre-wrap">
                      {highlightText(section.content)}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* --- Security Note --- */}
        <section className="pb-32">
          <div className="main-container max-w-4xl mx-auto">
            <FadeIn delay={0.5}>
              <div className="p-10 rounded-[40px] bg-background-2 dark:bg-background-8 border border-stroke-1 dark:border-gray-100 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                <div className="size-16 rounded-2xl bg-primary-500/10 flex items-center justify-center shrink-0">
                  <Lock className="size-8 text-primary-500" />
                </div>
                <p className="text-sm font-medium leading-relaxed italic">
                  {t('legalPages.privacy.note')}
                </p>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
