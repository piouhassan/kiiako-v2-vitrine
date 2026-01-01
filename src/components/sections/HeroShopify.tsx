'use client';

import {Sparkles} from "lucide-react";

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
      <div className="absolute inset-0 bg-black/40"></div>


        <div className="relative h-full flex items-center justify-center pt-36">
            <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 xl:px-16">
                <div className="max-w-7xl mx-auto text-center space-y-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-white ">
                        <Sparkles className="w-4 h-4 text-primary" />
                        <span className="text-sm font-body text-foreground">Découvrez la 2.0</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-7xl xl:text-7xl text-white leading-tight">
                        Créez votre boutique en ligne en quelques minutes
                    </h1>

                    <p className="text-lg md:text-xl lg:text-2xl text-white mt-20">
                        Rêvez plus grand, développez votre activité plus vite et allez plus loin avec Kiiako
                    </p>

                    <div className="pt-2">
                        <a
                            href="/signup"
                            className="inline-block px-8 py-3 bg-white font-semibold text-lg rounded-full hover:bg-gray-100 transition-colors shadow-xl"
                        >
                            Démarrez gratuitement
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
