'use client';

import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { Globe } from 'lucide-react';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-secondary dark:bg-[#161B22] relative overflow-hidden pt-20 pb-10 border-t border-stroke-1/10 dark:border-white/5">
      <div className="main-container">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-8 pb-16 border-b border-white/10 dark:border-white/5">
          
          {/* Brand Column */}
          <div className="lg:w-1/3 flex flex-col items-start pr-0 lg:pr-12">
            <Link href="/" className="inline-block mb-6">
              <img src="/logo_blanc.png" alt="Kiiako" className="h-[38px]" />
            </Link>
            <p className="text-[15px] font-light text-white/50 leading-relaxed mb-8 max-w-[320px]">
              {t('home.footer.tagline')}
            </p>
            
            <div className="flex items-center gap-4 mt-auto">
               <a href="#" className="text-white/40 hover:text-white transition-colors" aria-label="Facebook">
                 <svg className="w-[22px] h-[22px]" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
               </a>
               <a href="#" className="text-white/40 hover:text-white transition-colors" aria-label="Instagram">
                 <svg className="w-[22px] h-[22px]" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
               </a>
               <a href="#" className="text-white/40 hover:text-white transition-colors" aria-label="Youtube">
                  <svg className="w-[26px] h-[26px]" viewBox="0 0 24 24" fill="currentColor"><path fillRule="evenodd" clipRule="evenodd" d="M12 21.6c-5.3 0-9.6-4.3-9.6-9.6s4.3-9.6 9.6-9.6 9.6 4.3 9.6 9.6-4.3 9.6-9.6 9.6zm3.3-9.9l-5.1-3.2c-.2-.1-.4-.1-.6.1-.1.1-.1.3-.1.4v6.5c0 .2.1.4.3.5.2.1.4.1.6 0l5.1-3.2c.2-.1.2-.4.1-.6-.1-.1-.1-.3-.3-.4z"/></svg>
               </a>
               <a href="#" className="text-white/40 hover:text-white transition-colors" aria-label="LinkedIn">
                 <svg className="w-[22px] h-[22px]" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
               </a>
             </div>
          </div>

          {/* Links Columns */}
          <div className="lg:w-2/3 grid grid-cols-2 lg:grid-cols-3 gap-10">
            
            <div className="flex flex-col">
              <h3 className="text-[13px] font-semibold text-white uppercase tracking-wider mb-6 opacity-90">
                {t('home.footer.solutions.title')}
              </h3>
              <ul className="space-y-3.5">
                <li><Link href="/solutions/creer-boutique" className="text-[15px] font-light text-white/60 hover:text-white transition-colors">{t('header.menu.features.1.title')}</Link></li>
                <li><Link href="/solutions/nom-de-domaine" className="text-[15px] font-light text-white/60 hover:text-white transition-colors">{t('header.menu.features.3.title')}</Link></li>
                <li><Link href="/solutions/mobile-money" className="text-[15px] font-light text-white/60 hover:text-white transition-colors">{t('header.menu.features.8.title')}</Link></li>
                <li><Link href="/solutions/produits-physiques" className="text-[15px] font-light text-white/60 hover:text-white transition-colors">{t('header.menu.features.6.title')}</Link></li>
                <li><Link href="/solutions/produits-digitaux" className="text-[15px] font-light text-white/60 hover:text-white transition-colors">{t('header.menu.features.7.title')}</Link></li>
              </ul>
            </div>

            <div className="flex flex-col">
              <h3 className="text-[13px] font-semibold text-white uppercase tracking-wider mb-6 opacity-90">
                {t('home.footer.resources.title')}
              </h3>
              <ul className="space-y-3.5">
                <li><Link href="/solutions/blog" className="text-[15px] font-light text-white/60 hover:text-white transition-colors">{t('header.menu.links.4')}</Link></li>
                <li><Link href="/ressources/aide" className="text-[15px] font-light text-white/60 hover:text-white transition-colors">{t('header.menu.ressources.help.items.helpCenter.label')}</Link></li>
                <li><Link href="/ressources/guides" className="text-[15px] font-light text-white/60 hover:text-white transition-colors">{t('header.menu.ressources.success.items.guides.label')}</Link></li>
                <li><Link href="/ressources/histoires" className="text-[15px] font-light text-white/60 hover:text-white transition-colors">{t('header.menu.ressources.success.items.stories.label')}</Link></li>
                <li><Link href="/tarifs" className="text-[15px] font-light text-white/60 hover:text-white transition-colors">{t('header.nav.pricing')}</Link></li>
              </ul>
            </div>

            <div className="flex flex-col col-span-2 lg:col-span-1">
              <h3 className="text-[13px] font-semibold text-white uppercase tracking-wider mb-6 opacity-90">
                {t('home.footer.company.title')}
              </h3>
              <ul className="space-y-3.5">
                <li><Link href="/solutions/team" className="text-[15px] font-light text-white/60 hover:text-white transition-colors">{t('home.footer.company.about')}</Link></li>
                <li><Link href="/solutions/contact" className="text-[15px] font-light text-white/60 hover:text-white transition-colors">{t('home.footer.company.contact')}</Link></li>
                <li><Link href="/legal" className="text-[15px] font-light text-white/60 hover:text-white transition-colors">{t('home.footer.company.legal')}</Link></li>
                <li><Link href="/privacy" className="text-[15px] font-light text-white/60 hover:text-white transition-colors">{t('home.footer.company.privacy')}</Link></li>
                <li><Link href="/terms" className="text-[15px] font-light text-white/60 hover:text-white transition-colors">{t('home.footer.company.terms')}</Link></li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[14px] font-light text-white/40">
            {t('home.footer.copyright', { year: new Date().getFullYear() })}
          </p>
          <div className="flex items-center gap-5 sm:gap-6">
            <Link href="/status" className="flex items-center gap-2.5 text-[14px] font-light text-white/60 hover:text-white transition-colors group">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-40"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]"></span>
              </span>
              Systèmes opérationnels
            </Link>
            
            <div className="hidden sm:block w-px h-4 bg-white/10 cursor-default"></div>
            
            <button className="flex items-center gap-2 text-[14px] text-white/60 hover:text-white transition-colors">
               <Globe className="w-[18px] h-[18px] opacity-70" />
               <span className="font-light">Français (Afrique)</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
