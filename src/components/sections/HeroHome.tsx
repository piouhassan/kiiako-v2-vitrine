'use client';

import {Sparkles} from "lucide-react";
import {REGISTER_URL_FREE} from "@/lib/utls";
import { useTranslation, Trans } from 'react-i18next';

export default function HeroHome() {
  const { t } = useTranslation();

  return (
    <section className="relative w-full overflow-hidden" style={{ minHeight: '85vh' }}>

        <video
            className="absolute inset-0 w-full h-full object-cover"
            src="/hero/video.mp4"
            preload="none"
            loop
            autoPlay
            poster="/hero/2150171831.jpg"
            muted
            playsInline
            data-uc-cover
            data-uc-video="autoplay: true;"
        />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

        {/*Content */}
        <div className="relative h-full flex justify-center lg:justify-start" style={{ paddingTop: '25vh' }}>
            <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 xl:px-16">
                <div className="max-w-7xl mx-auto space-y-8 pt-10 text-center lg:text-left flex flex-col items-center lg:items-start">
                    <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/5 border border-primary/10 text-white ">
                        <Sparkles className="w-4 h-4 text-primary" />
                        <span className="text-xs font-body text-foreground"> {t('home.hero.videoBadge')}</span>
                    </div>

                    <h4 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-tight tracking-tight">
                        <Trans i18nKey="home.hero.title" components={{ 1: <br/> }} />
                    </h4>

                    <p className="text-lg md:text-xl lg:text-2xl text-white mt-12 max-w-2xl opacity-90 mx-auto lg:mx-0">
                        {t('home.hero.subtitle')}
                    </p>

                    <div className="pt-6">
                        <a href={REGISTER_URL_FREE}
                           className="inline-block px-10 py-4 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-all duration-300 shadow-2xl hover:scale-105 active:scale-95">
                            {t('home.hero.cta')}
                        </a>
                    </div>

                    <div className="hidden lg:block w-full">
                        <div className="flex items-center justify-end gap-3 -mt-16 text-white">
                            <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 drop-shadow-[0_0_8px_rgba(249,235,87,0.4)]" width="14" height="14"
                                         viewBox="0 0 24 24" fill="#f9eb57" stroke="none">
                                        <path
                                            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                ))}
                            </div>
                            <span className="text-sm font-semibold text-content-white-accent">{t('home.hero.rating')}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
