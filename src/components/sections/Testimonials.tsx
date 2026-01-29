'use client';

import { useEffect, useRef, useState } from 'react';
import { FadeIn } from '@/components/animations/FadeIn';
import { SlideIn } from '@/components/animations/SlideIn';

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const offset = useRef(0);
  const [paused, setPaused] = useState(false);

  const testimonials = [
    {
      name: "Marie Mumbanza",
      company: "BeautyShop Kinshasa",
      avatar: "/images/ns-avatar-2.png",
      testimonial: "Kiiako a transformé mon activité. En 6 mois, j'ai triplé mon chiffre d'affaires. La livraison intégrée et les paiements Mobile Money rendent tout tellement simple. Mes clients adorent la fluidité de ma boutique en ligne."
    },
    {
      name: "Jean-Pierre Okonda",
      company: "Tech Accessories Pro",
      avatar: "/images/ns-avatar-3.png",
      testimonial: "Je vends maintenant dans toute la RDC grâce au système de livraison de Kiiako. Le support client est exceptionnel et le tableau de bord me permet de tout gérer facilement. Je recommande vivement cette plateforme."
    },
    {
      name: "Fatou Diallo",
      company: "Mode & Style Afrique",
      avatar: "/images/ns-avatar-4.png",
      testimonial: "Avec mon nom de domaine personnalisé et mes multiples boutiques sur Kiiako, j'ai pu professionnaliser mon image. Je gère maintenant plus de 500 commandes par mois et mes revenus ont explosé."
    }
  ];

  useEffect(() => {
    const scrollSpeed = -0.5; // Vitesse de défilement vers la gauche

    const animate = () => {
      if (!paused && trackRef.current) {
        offset.current += scrollSpeed;

        // Boucle infinie
        const trackWidth = trackRef.current.scrollWidth / 2;
        if (Math.abs(offset.current) >= trackWidth) {
          offset.current = 0;
        }

        trackRef.current.style.transform = `translateX(${offset.current}px)`;
      }

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [paused]);

  return (
     <section className="xl:py-[100px] lg:py-[90px] md:py-20 py-16 bg-background-3 dark:bg-background-7 bg-secondary">
      <div className="mb-14 text-center">
        <div className="space-y-5">
          <FadeIn delay={0.1}>
            <span className="badge badge-blur-light dark:!text-accent">Témoignages</span>
          </FadeIn>
          <SlideIn direction="down" delay={0.2}>
            <h2 className="text-white">Ce que disent nos vendeurs</h2>
          </SlideIn>
        </div>
      </div>
      <FadeIn delay={0.3}>
        <div className="overflow-hidden">
          <article className="cards-marquee-container">
          <div
            ref={trackRef}
            className="flex items-center gap-6"
            style={{ willChange: 'transform' }}
          >
            {[...testimonials, ...testimonials].map((item, index) => (
              <div
                key={index}
                className="min-w-sm sm:min-w-[360px] md:min-w-[722px] p-8 md:p-14 rounded-[20px] backdrop-blur-[22px] space-y-6 sm:space-y-8 md:space-y-10 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors duration-300 ease-linear flex-shrink-0"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <figure className="size-12 md:size-[84px] rounded-full overflow-hidden bg-gradient-to-r from-primary-500 to-primary-600">
                      <img src={item.avatar} alt="avatar" className="w-full h-full object-cover" />
                    </figure>
                    <div className="space-y-1">
                      <h3 className="text-tagline-2 font-medium lg:text-tagline-1 text-white">{item.name}</h3>
                      <p className="text-tagline-3 text-accent/60">{item.company}</p>
                    </div>
                  </div>
                  <div>
                    <a
                      href="#"
                      className="px-2.5 py-1 rounded-full md:w-[74px] md:h-11 h-8 w-14 flex items-center justify-center bg-white/5"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <g clipPath="url(#clip0_1182_25010)">
                          <path
                            d="M9.45202 0H11.2924L7.27177 5.08308L12.0017 12H8.29819L5.3975 7.80492L2.07844 12H0.236996L4.53741 6.56308L0 0H3.7975L6.41947 3.83446L9.45202 0ZM8.80612 10.7815H9.82587L3.24339 1.15446H2.1491L8.80612 10.7815Z"
                            className="fill-white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1182_25010">
                            <rect width="12" height="12" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </div>
                </div>
                <div>
                  <p className="max-w-[610px] md:text-heading-6 sm:text-tagline-1 text-tagline-2 text-wrap text-accent/60">
                    {item.testimonial}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </article>
        </div>
      </FadeIn>
    </section>
  );
}
