'use client';

import { FadeIn } from '@/components/animations/FadeIn';
import { SlideIn } from '@/components/animations/SlideIn';
import { useTranslation } from 'react-i18next';

export default function Services() {
  const { t } = useTranslation();

  return (
    <section className="xl:py-[100px] lg:py-[90px] md:py-20 py-16 bg-background-3 dark:bg-background-7">
      <div className="main-container">
        <div className="text-center space-y-3 mb-10 md:mb-[70px]">
          <SlideIn direction="down" delay={0.1}>
            <h2>{t('home.services.title')}</h2>
          </SlideIn>
          <SlideIn direction="down" delay={0.2}>
            <p className="max-w-[776px] mx-auto">
              {t('home.services.subtitle')}
            </p>
          </SlideIn>
        </div>
        <div className="mb-[72px]">
          <div className="grid grid-cols-12 sm:gap-8 gap-y-8">
            <div className="col-span-12 lg:col-span-4 sm:col-span-6">
              <FadeIn delay={0.3}>
                <div className="bg-white dark:bg-background-8 rounded-[20px] md:p-8 p-6 space-y-6">
                  <div className="space-y-1">
                    <h3 className="text-heading-6 md:text-heading-5">{t('home.services.items.free.title')}</h3>
                    <p>{t('home.services.items.free.description')}</p>
                  </div>
                  <div>
                    <figure className="sm:max-w-[345px] max-w-full w-full rounded-2xl overflow-hidden">
                      <img
                        src="/img/43425.jpg"
                        alt="services"
                        className="w-full h-full object-cover"
                      />
                    </figure>
                  </div>
                </div>
              </FadeIn>
            </div>
            <div className="col-span-12 lg:col-span-4 sm:col-span-6">
              <FadeIn delay={0.4}>
                <div className="bg-white dark:bg-background-8 rounded-[20px] md:p-8 p-6 space-y-6">
                  <div className="space-y-1">
                    <h3 className="text-heading-6 md:text-heading-5">{t('home.services.items.payments.title')}</h3>
                    <p>{t('home.services.items.payments.description')}</p>
                  </div>
                  <div>
                    <figure className="sm:max-w-[345x] max-w-full w-full">
                      <img
                        src="/img/29734.jpg"
                        alt="services"
                        className="w-full h-full object-cover rounded-[20px]"
                      />
                    </figure>
                  </div>
                </div>
              </FadeIn>
            </div>
            <div className="col-span-12 lg:col-span-4 sm:col-span-6">
              <FadeIn delay={0.5}>
                <div className="bg-white dark:bg-background-8 rounded-[20px] md:p-8 p-6 space-y-6">
                  <div className="space-y-1">
                    <h3 className="text-heading-6 md:text-heading-5">{t('home.services.items.delivery.title')}</h3>
                    <p>{t('home.services.items.delivery.description')}</p>
                  </div>
                  <div>
                    <figure className="sm:max-w-[345px] w-full">
                      <img
                        src="/img/livraison.png"
                        alt="services"
                        className="w-full h-full object-cover rounded-[20px]"
                      />
                    </figure>
                  </div>
                </div>
              </FadeIn>
            </div>
            <div className="col-span-12 lg:col-span-4 sm:col-span-6">
              <FadeIn delay={0.6}>
                <div className="bg-white dark:bg-background-8 rounded-[20px] md:p-8 p-6 space-y-6">
                  <div className="space-y-1">
                    <h3 className="text-heading-6 md:text-heading-5">
                      {t('home.services.items.domain.title')}
                    </h3>
                    <p>{t('home.services.items.domain.description')}</p>
                  </div>
                  <div>
                    <figure className="sm:max-w-[345px] max-w-full w-full overflow-hidden rounded-2xl">
                      <img
                        src="/img/domain.png"
                        alt="services"
                        className="w-full h-full object-cover"
                      />
                    </figure>
                  </div>
                </div>
              </FadeIn>
            </div>
            <div className="col-span-12 lg:col-span-8">
              <FadeIn delay={0.7}>
                <div className="bg-white dark:bg-background-8 rounded-[20px] md:p-8 p-6 space-y-6">
                  <div className="space-y-1">
                    <h3 className="text-heading-6 md:text-heading-5">{t('home.services.items.management.title')}</h3>
                    <p>{t('home.services.items.management.description')}</p>
                  </div>
                  <div>
                    <figure className="max-w-[784px] max-h-[260px] overflow-hidden rounded-2xl w-full">
                      <img
                        src="/img/order.png"
                        alt="services"
                        className="w-full h-full object-cover dark:hidden"
                      />
                      <img
                        src="/images/ns-img-dark-101.png"
                        alt="services"
                        className="w-full h-full object-cover hidden dark:block"
                      />
                    </figure>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
        <FadeIn delay={0.8}>
          <div className="flex flex-col md:flex-row items-center gap-y-5 md:gap-x-3 justify-center">
            <a
              href="/signup"
              className="btn btn-primary dark:btn-accent btn-md hover:btn-white dark:hover:btn-white-dark w-[90%] md:w-auto"
            >
              <span>{t('home.services.cta.create')}</span>
            </a>
            <a
              href="/contact"
              className="btn hover:btn-secondary dark:btn-transparent btn-white btn-md dark:hover:btn-accent w-[90%] md:w-auto"
            >
              <span>{t('home.services.cta.contact')}</span>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
