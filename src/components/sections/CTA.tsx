'use client';

import { FadeIn } from '@/components/animations/FadeIn';
import { SlideIn } from '@/components/animations/SlideIn';

export default function CTA() {
  return (
    <section className="xl:py-[100px] lg:py-[90px] md:py-20 py-16 bg-white dark:bg-black relative overflow-hidden z-10">
      <div className="main-container">
        <div className="text-center space-y-5 mb-8">
          <FadeIn delay={0.1}>
            <span className="badge bg-primary-500 text-white">Commencez maintenant</span>
          </FadeIn>
          <div className="space-y-3">
            <SlideIn direction="down" delay={0.2}>
              <h2>Prêt à lancer votre boutique ?</h2>
            </SlideIn>
            <SlideIn direction="down" delay={0.3}>
              <p className="max-w-[568px] mx-auto">
                Rejoignez des milliers de vendeurs qui font confiance à Kiiako pour développer leur
                activité en ligne. Créez votre boutique gratuitement et commencez à vendre dès aujourd&apos;hui.
              </p>
            </SlideIn>
          </div>
        </div>
        <div className="space-y-8 mb-[38px] mx-6 sm:mx-0">
          <FadeIn delay={0.4}>
            <form className="flex sm:flex-row flex-col sm:items-center sm:justify-center gap-3">
            <fieldset>
              <input
                type="email"
                name="email"
                id="userEmail"
                placeholder="Entrez votre adresse email"
                required
                className="px-[18px] h-12 outline-none py-3 shadow-1 placeholder:text-secondary/50 rounded-full border border-stroke-1 sm:min-w-[340px] sm:max-w-[340px] w-full bg-accent dark:bg-background-6 dark:border-stroke-7 dark:placeholder:text-accent/60 block focus:ring-[0.7px] focus-within:ring-primary-500 font-normal placeholder:font-normal"
              />
            </fieldset>
            <button type="submit" className="btn btn-md btn-primary h-12">
              <span>Créer ma boutique</span>
            </button>
            </form>
          </FadeIn>
          <FadeIn delay={0.5}>
            <ul className="flex sm:items-center sm:justify-center md:gap-[42px] sm:gap-6 gap-y-3 sm:flex-row flex-col">
            <li className="flex items-center justify-center gap-2">
              <span className="size-5 bg-secondary rounded-full flex items-center justify-center dark:bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="7"
                  viewBox="0 0 10 7"
                  fill="none"
                  aria-hidden="true"
                  className="shrink-0"
                >
                  <path
                    d="M4.31661 6.75605L9.74905 1.42144C10.0836 1.0959 10.0836 0.569702 9.74905 0.244158C9.41446 -0.081386 8.87363 -0.081386 8.53904 0.244158L3.7116 4.99012L1.46096 2.78807C1.12636 2.46253 0.585538 2.46253 0.250945 2.78807C-0.0836483 3.11362 -0.0836483 3.63982 0.250945 3.96536L3.1066 6.75605C3.27347 6.91841 3.49253 7 3.7116 7C3.93067 7 4.14974 6.91841 4.31661 6.75605Z"
                    className="fill-white dark:fill-black"
                  />
                </svg>
              </span>
              <p className="text-tagline-2">100% gratuit pour démarrer</p>
            </li>

            <li className="flex items-center justify-center gap-2">
              <span className="size-5 bg-secondary rounded-full flex items-center justify-center dark:bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="7"
                  viewBox="0 0 10 7"
                  fill="none"
                  aria-hidden="true"
                  className="shrink-0"
                >
                  <path
                    d="M4.31661 6.75605L9.74905 1.42144C10.0836 1.0959 10.0836 0.569702 9.74905 0.244158C9.41446 -0.081386 8.87363 -0.081386 8.53904 0.244158L3.7116 4.99012L1.46096 2.78807C1.12636 2.46253 0.585538 2.46253 0.250945 2.78807C-0.0836483 3.11362 -0.0836483 3.63982 0.250945 3.96536L3.1066 6.75605C3.27347 6.91841 3.49253 7 3.7116 7C3.93067 7 4.14974 6.91841 4.31661 6.75605Z"
                    className="fill-white dark:fill-black"
                  />
                </svg>
              </span>
              <p className="text-tagline-2">Support disponible 24/7</p>
            </li>
            </ul>
          </FadeIn>
        </div>
      </div>
      <div>
        <figure className="lg:w-[584px] w-[200px] md:w-[300px] lg:h-[544px] h-[300px] absolute lg:-top-[60%] -top-[33%] md:-top-[35%] -left-[3%] lg:-left-[13%] xl:-left-[10%] xl:-top-[50%] -z-10 pointer-events-none select-none">
          <img src="/images/ns-img-500.png" alt="gradient" className="size-full object-cover" />
        </figure>
        <figure className="lg:w-[409px] w-[200px] lg:h-[435px] h-[200px] absolute lg:-bottom-[23%] -bottom-[10%] lg:-right-[7%] -right-[5%] -z-10 pointer-events-none select-none">
          <img src="/images/ns-img-505.png" alt="gradient" className="size-full object-cover" />
        </figure>
      </div>
    </section>
  );
}
