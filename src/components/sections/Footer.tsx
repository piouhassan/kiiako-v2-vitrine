'use client';

 import { useTranslation } from 'react-i18next';

 export default function Footer() {
   const { t } = useTranslation();

   return (
     <footer className="bg-secondary dark:bg-background-8 relative overflow-hidden">
       <div className="main-container px-5">
         <div className="grid grid-cols-12 xl:pt-[90px] gap-x-0 gap-y-16 pt-16 pb-12 justify-between">
           <div className="col-span-12 xl:col-span-5">
             <div className="">
               <figure>
                 <img src="/logo_kiiako_white@150x.png" alt="Kiiako" className="h-20" />
               </figure>
               <p className="text-accent/60 font-normal text-tagline-1 mt-4 mb-7">
                 {t('home.footer.tagline')}
               </p>
              <div className="flex items-center gap-3">
                <a href="#" className="footer-social-link">
                  <span className="sr-only">Facebook</span>
                  <img className="size-6" src="/images/icons/facebook.svg" alt="Facebook" />
                </a>
                <div className="h-6 w-px bg-stroke-1/20"></div>
                <a href="#" className="footer-social-link">
                  <span className="sr-only">Instagram</span>
                  <img className="size-6" src="/images/icons/instagram.svg" alt="Instagram" />
                </a>
                <div className="h-6 w-px bg-stroke-1/20"></div>
                <a href="#" className="footer-social-link">
                  <span className="sr-only">Youtube</span>
                  <img className="size-6" src="/images/icons/youtube.svg" alt="Youtube" />
                </a>
                <div className="h-6 w-px bg-stroke-1/20"></div>
                <a href="#" className="footer-social-link">
                  <span className="sr-only">LinkedIn</span>
                  <img className="size-6" src="/images/icons/linkedin.svg" alt="LinkedIn" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-span-12 xl:col-span-7 grid grid-cols-12 gap-x-0 gap-y-8">
            <div className="col-span-12 md:col-span-4">
               <div className="space-y-8">
                 <p className="sm:text-heading-6 text-tagline-1 font-normal text-primary-50">{t('home.footer.solutions.title')}</p>
                 <ul className="sm:space-y-5 space-y-3">
                   <li>
                     <a href="/solutions/creer-boutique" className="footer-link">{t('home.footer.solutions.createStore')}</a>
                   </li>
                   <li>
                     <a href="/solutions/nom-de-domaine" className="footer-link">{t('home.footer.solutions.domain')}</a>
                   </li>
                   <li>
                     <a href="/solutions/mobile-money" className="footer-link">{t('home.footer.solutions.mobileMoney')}</a>
                   </li>
                   <li>
                     <a href="/solutions/produits-digitaux" className="footer-link">{t('home.footer.solutions.digitalProducts')}</a>
                   </li>
                   <li>
                     <a href="/solutions/produits-physiques" className="footer-link">{t('home.footer.solutions.physicalProducts')}</a>
                   </li>
                 </ul>
               </div>
            </div>
            <div className="col-span-12 md:col-span-4">
               <div className="space-y-8">
                 <p className="sm:text-heading-6 text-tagline-1 font-normal text-primary-50">{t('home.footer.resources.title')}</p>
                 <ul className="sm:space-y-5 space-y-3">
                   <li>
                     <a href="/solutions/blog" className="footer-link">{t('home.footer.resources.blog')}</a>
                   </li>
                   <li>
                     <a href="/features" className="footer-link">{t('home.footer.resources.features')}</a>
                   </li>
                   <li>
                     <a href="/pricing" className="footer-link">{t('home.footer.resources.pricing')}</a>
                   </li>
                   <li>
                     <a href="/solutions/avis-clients" className="footer-link">{t('home.footer.resources.reviews')}</a>
                   </li>
                 </ul>
               </div>
            </div>
            <div className="col-span-12 md:col-span-4">
               <div className="space-y-8">
                 <p className="sm:text-heading-6 text-tagline-1 font-normal text-primary-50">
                   {t('home.footer.company.title')}
                 </p>
                 <ul className="sm:space-y-5 space-y-3">
                   <li>
                     <a href="/solutions/team" className="footer-link">{t('home.footer.company.about')}</a>
                   </li>
                   <li>
                     <a href="/solutions/career" className="footer-link">{t('home.footer.company.careers')}</a>
                   </li>
                   <li>
                     <a href="/solutions/contact" className="footer-link">{t('home.footer.company.contact')}</a>
                   </li>
                   <li>
                     <a href="/privacy" className="footer-link">{t('home.footer.company.privacy')}</a>
                   </li>
                   <li>
                     <a href="/terms" className="footer-link">{t('home.footer.company.terms')}</a>
                   </li>
                 </ul>
               </div>
            </div>
          </div>
        </div>
        <div className="pt-[26px] pb-[100px] text-center relative">
          <div className="footer-divider absolute top-0 left-0 right-0 w-0 origin-center mx-auto h-px bg-accent/10 dark:bg-stroke-4/10"></div>
          <p className="text-tagline-1 font-normal text-primary-50">
            {t('home.footer.copyright', { year: new Date().getFullYear() })}
          </p>
        </div>
      </div>
    </footer>
  );
}
