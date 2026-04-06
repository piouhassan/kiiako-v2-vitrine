'use client';

import { useEffect, useRef, useState } from 'react';
import { FadeIn } from '@/components/animations/FadeIn';
import { SlideIn } from '@/components/animations/SlideIn';
import { useTranslation } from 'react-i18next';

export default function Testimonials() {
  const { t } = useTranslation();
  const trackRef = useRef<HTMLDivElement>(null);
  const offset = useRef(0);
  const [paused, setPaused] = useState(false);

  const testimonials = t('home.testimonials.items', { returnObjects: true }) as Array<{
    name: string;
    company: string;
    avatar?: string;
    text: string;
  }>;

  const testimonialItems = testimonials;

  useEffect(() => {
    const scrollSpeed = -0.5; // Vitesse de défilement vers la gauche

    const animate = () => {
      if (!paused && trackRef.current) {
        offset.current += scrollSpeed;

        // Boucle infinie
        const trackWidth = trackRef.current.scrollWidth / 6;
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
     <section className="xl:py-[100px] lg:py-[90px] md:py-20 py-16 bg-secondary dark:bg-background-7 ">
      <div className="mb-14 text-center">
        <div className="space-y-5">
          <FadeIn delay={0.1}>
            <span className="badge badge-blur-light dark:!text-accent">{t('home.testimonials.badge')}</span>
          </FadeIn>
          <SlideIn direction="down" delay={0.2}>
            <h2 className="text-white">{t('home.testimonials.title')}</h2>
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
            {[...testimonialItems, ...testimonialItems, ...testimonialItems, ...testimonialItems, ...testimonialItems, ...testimonialItems].map((item, index) => (
              <div
                key={index}
                className="w-[320px] max-w-[85vw] min-h-[240px] p-8 md:p-10 rounded-[20px] backdrop-blur-[22px] flex flex-col justify-between bg-white/5 hover:bg-white/10 border border-white/10 transition-colors duration-300 ease-linear flex-shrink-0"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <h3 className="text-tagline-2 font-medium lg:text-tagline-1 text-white">{item.name}</h3>
                      <p className="text-tagline-3 text-accent/60">{item.company}</p>
                    </div>
                    <div>
                      <div className="px-2.5 py-1 rounded-full md:w-[74px] md:h-11 h-8 w-14 flex items-center justify-center bg-white/5">
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
                      </div>
                    </div>
                  </div>
                  <p className="text-tagline-1 sm:text-tagline-1 text-accent/60 line-clamp-4">
                    {item.text}
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
