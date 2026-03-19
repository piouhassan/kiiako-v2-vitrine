"use client"
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { FadeIn } from '@/components/animations/FadeIn';
import { SlideIn } from '@/components/animations/SlideIn';
import { REGISTER_URL_FREE, REGISTER_URL_PREMIUM } from '@/lib/utls';

// Feature labels mapping
const featureLabels: Record<string, string> = {
  nom_de_domaine: "Nom de domaine personnalisé",
  theme_personnalisable: "Thème personnalisable",
  multi_langue: "Support multi-langue",
  parrainage: "Système de parrainage",
  assistance: "Assistance technique",
  modules_supplementaires: "Modules supplémentaires",
  stockage: "Stockage",
  collaborateur: "Collaborateur"
};

// List of all possible features to display in the first column
const allFeatures = [
  'nom_de_domaine',
  'theme_personnalisable',
  'multi_langue',
  'livreurs',
  'parrainage',
  'assistance',
  'modules_supplementaires',
  'stockage',
  'collaborateur'
];

interface PricingPlan {
  id: string;
  name: string;
  price: number;
  description: string;
  color: string;
  year_reduce: number;
  features: Record<string, boolean>;
  storage: string;
}

export default function TarifsPage() {
  const { t } = useTranslation();
  
  // Feature labels mapping from i18n
  const allFeatures = [
    'nom_de_domaine',
    'theme_personnalisable',
    'multi_langue',
    'livreurs',
    'parrainage',
    'assistance',
    'modules_supplementaires',
    'stockage',
    'collaborateur'
  ];

  const [activeAccordion, setActiveAccordion] = useState(0);
  const [isYearly, setIsYearly] = useState(false);
  const [pricingPlans, setPricingPlans] = useState<PricingPlan[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPricings = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/public/pricing`,
          {
            headers: {
              "Content-Type": "application/json",
              "x-api-key": "A/=h6eucodZfZVqgC3G`=>L=M]/$j}8*0o[lZ!ER@Y",
            },
          }
        );
        const result = await response.json();
        if (result.data) {
          const sortedData = result.data
            .map((plan: any) => ({
              ...plan,
              features: typeof plan.features === 'string' ? JSON.parse(plan.features) : plan.features,
            }))
            .sort((a: PricingPlan, b: PricingPlan) => a.price - b.price);
          setPricingPlans(sortedData);
        }
      } catch (error) {
        console.error("Error fetching pricing plans:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPricings();
  }, []);

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? -1 : index);
  };

  const toggleBilling = () => {
    setIsYearly(!isYearly);
  };

  const calculatePriceValue = (basePrice: number, reduction: number) => {
    if (basePrice === 0) return 0;
    if (isYearly) {
      const yearlyPrice = basePrice * 12;
      return Math.round(yearlyPrice * (1 - reduction / 100));
    }
    return basePrice;
  };

  const formatPrice = (price: number) => {
    if (price === 0) return t('pricing.plans.free');
    return price.toLocaleString('fr-FR') + " " + t('pricing.plans.currency');
  };

  return (
      <div className="bg-background-1 dark:bg-background-6">
        <Header />
        <main>
          <section className="pb-20">
            <div className="max-w-[1600px] w-full mx-auto rounded-2xl space-y-[70px] bg-background-1 dark:bg-black py-[100px] px-5 md:px-6 lg:px-10 xl:px-16">
              {/* En-tête */}
              <div className="max-w-2xl mx-auto text-center space-y-3 mt-20">
                <SlideIn direction="down" delay={0.2}>
                  <h2 className="text-heading-2">
                    {t('pricing.hero.title')}
                  </h2>
                </SlideIn>

                <SlideIn direction="down" delay={0.2}>
                  <p className="">
                    {t('pricing.hero.subtitle')}
                  </p>
                </SlideIn>
              </div>

              {/* Billing Toggle */}
              <div className="flex justify-center mb-8">
                <div className="inline-flex items-center bg-background-3 dark:bg-background-8 rounded-full p-1">
                  <button
                    onClick={toggleBilling}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                      !isYearly
                        ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/20'
                        : 'text-secondary/60 dark:text-accent/60 hover:text-primary-500 dark:hover:text-primary-400'
                    }`}
                  >
                    {t('pricing.billing.monthly')}
                  </button>
                  <button
                    onClick={toggleBilling}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                      isYearly
                        ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/20'
                        : 'text-secondary/60 dark:text-accent/60 hover:text-primary-500 dark:hover:text-primary-400'
                    }`}
                  >
                    {t('pricing.billing.yearly')}
                    <span className={`ml-2 text-[10px] font-bold px-2 py-0.5 rounded-full  text-white ${isYearly ? 'bg-white/20' : 'bg-primary-500'}`}>{t('pricing.billing.discount')}</span>
                  </button>
                </div>
              </div>

              {/* Grille de tarification */}
              <div className="grid grid-cols-15 gap-y-8">
                {/* Colonne 1: Liste des fonctionnalités */}
                <FadeIn delay={0.3} className="hidden xl:col-span-3 xl:block">
                  <div>
                    <div className=" w-[290px]  md:block" style={{height : "210px"}}></div>
                    <div className="space-y-[10px]">
                      <h3 className="text-heading-6">{t('pricing.features.title')}</h3>
                      <ul>
                        {allFeatures.map((featureKey) => (
                          <li key={featureKey} className="h-14 px-0 py-4 border-b border-b-stroke-4 dark:border-stroke-7">
                            <p className="font-normal text-secondary/60 dark:text-accent/60 text-tagline-1">
                              {t(`pricing.features.items.${featureKey}`)}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </FadeIn>

                {loading ? (
                  <div className="col-span-12 xl:col-span-12 py-20 text-center">
                    <div className="inline-block animate-spin size-8 border-4 border-primary-500 border-t-transparent rounded-full mb-4"></div>
                    <p className="animate-pulse">{t('pricing.plans.loading')}</p>
                  </div>
                ) : (
                  pricingPlans.map((plan, planIndex) => {
                    const isPremium = plan.name.toLowerCase() === 'premium';
                    const isShop = plan.name.toLowerCase() === 'shop';
                    
                    return (
                      <FadeIn key={plan.id} delay={0.4 + planIndex * 0.1} className="col-span-12 md:col-span-6 xl:col-span-3">
                        <div>
                          <div className="px-4 relative z-10">
                            <div 
                              className={`rounded-[20px] relative py-8 px-6 overflow-hidden ${isShop ? 'bg-primary-500' : 'bg-background-3 dark:bg-background-8'}`}
                              style={isShop && plan.color ? { backgroundColor: "#299cdb" } : {}}
                            >
                              <div className="relative z-30 space-y-8">
                                <div>
                                  <p className={`text-tagline-1 font-medium mb-3 ${isShop ? 'text-accent/60' : 'text-secondary/60 dark:text-accent/60'}`}>
                                    {plan.name}
                                  </p>
                                  <h3 className={`text-heading-5 font-normal ${isShop ? 'text-accent' : 'text-secondary dark:text-accent/60'}`}>
                                    {formatPrice(calculatePriceValue(plan.price, plan.year_reduce))}
                                  </h3>
                                </div>
                                <a
                                  href={REGISTER_URL_PREMIUM}
                                  className={`btn text-center btn-md w-full before:content-none first-letter:uppercase ${
                                    isShop 
                                      ? 'bg-white text-primary-500 hover:bg-background-2 dark:hover:bg-background-8' 
                                      : 'bg-primary-500 text-white hover:bg-primary-600 dark:hover:bg-primary-400'
                                  }`}
                                >
                                  {t('pricing.plans.choose', { name: plan.name })}
                                </a>
                              </div>
                            </div>
                          </div>

                          <div className="rounded-[20px] flex flex-col space-y-8 mt-8">
                            <ul>
                              {allFeatures.map((featureKey) => {
                                if (featureKey === 'collaborateur') {
                                  const userFeature = Object.keys(plan.features).find(k => k.startsWith('utilisateurs_') && plan.features[k]);
                                  const userCount = userFeature ? userFeature.split('_')[1] : null;
                                  return (
                                    <li key={featureKey} className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-7">
                                      <p className="font-medium text-secondary/60 dark:text-accent/60">
                                        {userCount || (isPremium ? t('pricing.plans.unlimited') : '1')}
                                      </p>
                                    </li>
                                  );
                                }

                                if (featureKey === 'stockage') {
                                  const storageFeature = Object.keys(plan.features).find(k => k.startsWith('stockage_') && plan.features[k]);
                                  let storageValue = storageFeature ? storageFeature.split('_')[1].toUpperCase() : null;
                                  if (storageValue) storageValue = storageValue.replace(/(\d+)([MG]B)/, '$1 $2');
                                  
                                  return (
                                    <li key={featureKey} className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-7">
                                      <p className="font-medium text-secondary/60 dark:text-accent/60">
                                        {storageValue || (isPremium ? t('pricing.plans.unlimited') : '512 MB')}
                                      </p>
                                    </li>
                                  );
                                }

                                const isEnabled = plan.features[featureKey] || featureKey === 'livreurs';
                                return (
                                  <li
                                    key={featureKey}
                                    className="h-14 px-6 py-4 text-center border-b border-b-stroke-4 dark:border-stroke-7 flex items-center justify-center"
                                  >
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 18 18"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="shrink-0"
                                    >
                                      <rect
                                          width="18"
                                          height="18"
                                          rx="9"
                                          className={isEnabled ? "fill-primary-500" : "fill-secondary/20 dark:fill-accent/20"}
                                      />
                                      <path
                                          d="M8.31661 12.7561L13.7491 7.42144C14.0836 7.0959 14.0836 6.5697 13.7491 6.24416C13.4145 5.91861 12.8736 5.91861 12.539 6.24416L7.7116 10.9901L5.46096 8.78807C5.12636 8.46253 4.58554 8.46253 4.25095 8.78807C3.91635 9.11362 3.91635 9.63982 4.25095 9.96536L7.1066 12.7561C7.27347 12.9184 7.49253 13 7.7116 13C7.93067 13 8.14974 12.9184 8.31661 12.7561Z"
                                          className="fill-white dark:fill-black"
                                      />
                                    </svg>
                                  </li>
                                );
                              })}
                            </ul>
                            
                          </div>
                        </div>
                      </FadeIn>
                    );
                  })
                )}
              </div>

              {/* Free Plan Horizontal Card */}
              {!loading && (
                <div className="mt-16 w-full mx-auto bg-background-2 dark:bg-background-8 border border-stroke-1 dark:border-stroke-7 rounded-3xl p-8 lg:p-10 flex flex-col md:flex-row items-center gap-8 xl:gap-12 hover:border-primary-500/50 transition-colors">
                  <div className="flex-1 space-y-3 text-center md:text-left">
                    <p className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-primary-500/10 text-primary-500 tracking-wider uppercase">
                        {t('pricing.plans.free')}
                    </p>
                    <h3 className="text-3xl font-bold text-secondary dark:text-accent">0 <span className="text-xl font-normal text-secondary/60 dark:text-accent/60">{t('pricing.plans.currency')}</span></h3>
                    <p className="text-secondary/70 dark:text-accent/70 pt-2 lg:max-w-xs text-sm leading-relaxed">
                        {t('pricing.plans.free_desc')}
                    </p>
                  </div>
                  
                  <div className="flex-[1.5] grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 text-sm font-medium text-secondary/80 dark:text-accent/80">
                    <div className="flex items-center gap-3">
                       <div className="size-6 shrink-0 rounded-full bg-primary-500/10 text-primary-500 flex items-center justify-center">
                         <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                       </div>
                       {t('pricing.features.items.nom_de_domaine')}
                    </div>
                    <div className="flex items-center gap-3">
                       <div className="size-6 shrink-0 rounded-full bg-primary-500/10 text-primary-500 flex items-center justify-center">
                         <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                       </div>
                       1 {t('pricing.features.items.collaborateur')}
                    </div>
                    <div className="flex items-center gap-3 text-secondary/40 dark:text-accent/40">
                       <div className="size-6 shrink-0 rounded-full bg-secondary/10 dark:bg-accent/10 text-secondary/30 dark:text-accent/30 flex items-center justify-center">
                         <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                       </div>
                       <span>{t('pricing.features.items.theme_personnalisable')}</span>
                    </div>
                    <div className="flex items-center gap-3">
                       <div className="size-6 shrink-0 rounded-full bg-primary-500/10 text-primary-500 flex items-center justify-center">
                         <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                       </div>
                       100 MB {t('pricing.features.items.stockage')}
                    </div>
                    <div className="flex items-center gap-3 sm:col-span-2">
                       <div className="size-6 shrink-0 rounded-full bg-primary-500/10 text-primary-500 flex items-center justify-center">
                         <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                       </div>
                       {t('pricing.features.items.livreurs')}
                    </div>
                  </div>

                  <div className="shrink-0 w-full md:w-auto pt-4 md:pt-0">
                    <a href={REGISTER_URL_FREE} 
                     className={`btn text-center btn-md w-full before:content-none first-letter:uppercase bg-primary-500 text-white hover:bg-primary-600 dark:hover:bg-primary-400`}
                    >
                        {t('pricing.plans.start')}
                    </a>
                  </div>
                </div>
              )}
            </div>

          </section>

        

          {/* Inclus dans tous les plans Section */}
          <section className="bg-background-3 dark:bg-background-6 py-20 pb-40">
            <div className="max-w-[1600px] w-full mx-auto px-5 md:px-6 lg:px-10 xl:px-16">
              <div className="text-center mb-16">
                <FadeIn delay={0.2}>
                  <h2 className="text-heading-3 text-secondary dark:text-white mb-4">{t('pricing.common.title')}</h2>
                  <p className="text-secondary/70 dark:text-accent/70 max-w-2xl mx-auto">{t('pricing.common.subtitle')}</p>
                </FadeIn>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { key: 'ssl', icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" },
                  { key: 'support', icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" },
                  { key: 'backup', icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" },
                  { key: 'cloud', icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" }
                ].map((item, i) => {
                  const data = t(`pricing.common.items.${item.key}`, { returnObjects: true }) as any;
                  return (
                    <FadeIn key={i} delay={0.3 + i * 0.1}>
                      <div className="p-10 rounded-[32px] bg-background-2 dark:bg-background-8 border border-stroke-1 dark:border-stroke-7 text-center group hover:border-primary-500/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                        <div className="size-16 rounded-3xl bg-primary-500/10 flex items-center justify-center mx-auto mb-8 group-hover:bg-primary-500 transition-all duration-500">
                          <svg className="size-8 text-primary-500 group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-secondary dark:text-white mb-4">{data.title}</h3>
                        <p className="text-secondary/60 dark:text-accent/60 leading-relaxed text-sm">{data.desc}</p>
                      </div>
                    </FadeIn>
                  );
                })}
              </div>
            </div>
          </section>

        

          {/* FAQ section */}
          <section
              className="py-[22px] bg-background-2 dark:bg-background-5"
              aria-label="Frequently Asked Questions"
          >
            <div className="main-container">
              <div className="flex items-center flex-col gap-8 lg:gap-0 lg:flex-row justify-between">
                {/* faq content */}
                <div className="space-y-14 text-center lg:text-left flex-1 lg:max-w-[600px]">
                  {/* faq heading */}
                  <div className="space-y-5">
                    <SlideIn direction="down" delay={0.2}>
                      <span className="badge bg-primary-500/10 text-primary-500 font-medium mb-2">FAQ</span>
                    </SlideIn>
                    <SlideIn direction="down" delay={0.3}>
                      <h2 className="lg:max-w-[439px] mx-auto lg:mx-0" id="faq-heading">
                        {t('pricing.faq.title')}
                      </h2>
                    </SlideIn>
                  </div>

                  {/* faq accordion */}
                  <FadeIn delay={0.4}>
                    <div className="accordion max-w-[576px] mx-auto lg:mx-0 w-full" role="region">
                      {['payments', 'domain', 'withdrawals', 'commitment', 'commission'].map((key, index) => (
                        <div 
                          key={key} 
                          className={`accordion-item ${activeAccordion === index ? 'active-accordion' : ''} ${index > 0 ? 'mt-4' : ''}`}
                        >
                          <button
                            className="accordion-action flex items-center cursor-pointer justify-between pt-6 pb-6 w-full group"
                            onClick={() => toggleAccordion(index)}
                            aria-expanded={activeAccordion === index}
                          >
                            <span className="flex-1 text-left xl:text-heading-6 text-tagline-1 font-semibold text-secondary dark:text-accent group-hover:text-primary-500 transition-colors">
                              {t(`pricing.faq.items.${key}.question`)}
                            </span>
                            <span className="sm:ml-auto ml-2.5 block accordion-arrow transition-transform duration-300">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                width="16"
                                height="16"
                                className={`transition-transform duration-300 ${activeAccordion === index ? 'rotate-180' : ''}`}
                              >
                                <path
                                  strokeOpacity="0.8"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                                  className="stroke-secondary dark:stroke-accent"
                                />
                              </svg>
                            </span>
                          </button>
                          <div 
                            className={`accordion-content overflow-hidden transition-all duration-300 ${activeAccordion === index ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}
                          >
                            <div className="border-t border-t-stroke-3 dark:border-stroke-7 pt-6 pb-6">
                              <p className="text-secondary/70 dark:text-accent/70 leading-relaxed">
                                {t(`pricing.faq.items.${key}.answer`)}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </FadeIn>
                </div>

                {/* faq image */}
                <div className="flex-1 xl:max-w-[500px] lg:max-w-[450px]">
                  <SlideIn direction="right" delay={0.4}>
                    <div className="relative rounded-[32px] overflow-hidden  dark:border-stroke-7 group">
                      <img 
                        src="/img/faq.png" 
                        alt="FAQ Kiiako Support" 
                        className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </SlideIn>
                </div>
              </div>
            </div>
          </section>

          {/* Enterprise CTA Section - Light Card Approach */}
            <section className="py-32 bg-background-3 dark:bg-background-8/50">
            <div className="main-container">
              <FadeIn>
                <div className="relative overflow-hidden p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-10">
                  {/* Subtle decorative glow */}
                  <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl pointer-events-none"></div>

                  <div className="flex-1 space-y-6 text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 text-primary-500 text-sm font-semibold mx-auto lg:mx-0">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
                      </span>
                      {t('pricing.enterprise.badge')}
                    </div>
                    <div className="space-y-4">
                      <h2 className="text-heading-2 text-secondary dark:text-accent leading-tight">
                        {t('pricing.enterprise.title')}
                      </h2>
                      <p className="text-lg text-secondary/70 dark:text-accent/70 max-w-2xl mx-auto lg:mx-0">
                        {t('pricing.enterprise.desc')}
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0 w-full lg:w-auto">
                    <a 
                      href="/contact" 
                      className="flex btn text-center btn-md w-full before:content-none first-letter:uppercase bg-primary-500 text-white hover:bg-primary-600 dark:hover:bg-primary-400"
                    >
                      <span>{t('pricing.enterprise.button')}</span>
                    </a>
                  </div>
                </div>
              </FadeIn>
            </div>
          </section>
          
        </main>
        
        <Footer />
      </div>
  );
}
