'use client';

import {Sparkles} from "lucide-react";
import {REGISTER_URL_FREE} from "@/lib/utls";

export default function HeroShopify() {
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
        <div className="relative h-full flex justify-start" style={{ paddingTop: '25vh' }}>
            <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 xl:px-16">
                <div className="max-w-7xl mx-auto  space-y-8 pt-10">
                    <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/5 border border-primary/10 text-white ">
                        <Sparkles className="w-4 h-4 text-primary" />
                        <span className="text-xs font-body text-foreground"> Conçu pour chaque type de boutique</span>
                    </div>

                    <h4 className="text-7xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-tight ">
                        Créez votre boutique en ligne <br/> en quelques minutes
                    </h4>

                    <p className="text-lg md:text-xl lg:text-2xl text-white mt-20">
                        Rêvez plus grand, développez votre activité plus vite et allez plus loin avec Kiiako
                    </p>

                    <div className="pt-2">
                        <a href={REGISTER_URL_FREE}
                           className="inline-block px-8 py-3 bg-primary-500 font-semibold text-lg text-white rounded-full hover:bg-gray-100 transition-colors shadow-xl">
                            Démarrez gratuitement
                        </a>
                    </div>

                    <div className="flex items-center justify-end gap-2 -mt-16 text-white">
                        <div className="flex items-center gap-0.5">
                            <svg className="text-brand-colors-primary w-5 h-5" width="14" height="14"
                                 viewBox="0 0 24 24" fill="#D5722F" stroke="none" stroke-width="0">
                                <path
                                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <svg className="text-brand-colors-primary w-5 h-5" width="14" height="14"
                                 viewBox="0 0 24 24" fill="#D5722F" stroke="none" stroke-width="0">
                                <path
                                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <svg className="text-brand-colors-primary w-5 h-5" width="14" height="14"
                                 viewBox="0 0 24 24" fill="#D5722F" stroke="none" stroke-width="0">
                                <path
                                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <svg className="text-brand-colors-primary w-5 h-5" width="14" height="14"
                                 viewBox="0 0 24 24" fill="#D5722F" stroke="none" stroke-width="0">
                                <path
                                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                            <svg className="text-brand-colors-primary w-5 h-5" width="14" height="14"
                                 viewBox="0 0 24 24" fill="#D5722F" stroke="none" stroke-width="0">
                                <path
                                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                        </div>
                        <span className="text-sm font-semibold text-content-white-accent">4.9 étoiles sur 5</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
