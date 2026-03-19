'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { useMobileMenu } from '@/hooks/useMobileMenu';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import Link from "next/link";
import {
  Store, Wand2, Globe, Languages, Lock, Package, Cloud,
  Wallet, Ticket, Star, Users, BarChart3, BookOpen, Video,
  HelpCircle, Newspaper, Truck, Building2, ChevronDown, ArrowRight,
  GraduationCap, Layout, LifeBuoy, MapPin, MessageSquare
} from 'lucide-react';
import ThemeToggle from '@/components/ui/ThemeToggle';
import LanguageSwitcher from '@/components/ui/LanguageSwitcher';
import { useTranslation } from 'react-i18next';

import { features, pagesDataRessources, services, links } from '@/data/menu';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'unicon-store': Store,
  'unicon-magic-wand-filled': Wand2,
  'unicon-blog': Globe,
  'unicon-wikis': Languages,
  'unicon-locked': Lock,
  'unicon-box': Package,
  'unicon-cloud-upload': Cloud,
  'unicon-wallet': Wallet,
  'unicon-ticket': Ticket,
  'unicon-star': Star,
  'unicon-user': Users,
  'unicon-report-data': BarChart3,
};

const resourceIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'academy': GraduationCap,
  'help': LifeBuoy,
  'tools': Layout,
  'guides': BookOpen,
  'videos': Video,
  'faq': HelpCircle,
  'blog': Newspaper,
};

export default function Header() {
  const pathname = usePathname();
  const { t } = useTranslation();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [openMobileSubMenu, setOpenMobileSubMenu] = useState<string | null>(null);
  const { isOpen, toggle, close } = useMobileMenu();
  const { isScrolled } = useScrollPosition();
  const menuTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Check if a path is active
  const isActivePath = (path: string) => pathname === path;
  const isActiveSection = (paths: string[]) => paths.some(path => pathname.startsWith(path));

  // Check if we are on the WhatsApp bot page
  const isBotPage = pathname === '/solutions/bot-whatsapp';

  // Check active sections
  const isSolutionsActive = isActiveSection(features.map(f => f.link));
  const isRessourcesActive = isActiveSection(
      pagesDataRessources.flatMap(section => section.items.map(item => item.href))
  );
  const isServicesActive = isActiveSection(services.map(s => s.href));
  const isTarifsActive = isActivePath('/tarifs');

  const cancelHideMenu = () => {
    if (menuTimeoutRef.current) {
      clearTimeout(menuTimeoutRef.current);
      menuTimeoutRef.current = null;
    }
  };

  const scheduleHideMenu = () => {
    cancelHideMenu();
    menuTimeoutRef.current = setTimeout(() => {
      setOpenMenu(null);
    }, 200);
  };

  useEffect(() => {
    return () => {
      if (menuTimeoutRef.current) {
        clearTimeout(menuTimeoutRef.current);
      }
    };
  }, []);

  return (
      <>
        {/* Full-screen blur overlay when a mega menu is active 
        <div 
          className={`fixed inset-0 z-40 bg-white/[0.08] dark:bg-black/20 backdrop-blur-sm transition-all duration-300 pointer-events-none ${
            openMenu ? 'opacity-100' : 'opacity-0'
          }`}
        />
        */}
        

        <header className="overflow-visible">
          <div className={`header-one overflow-visible w-full mx-auto fixed left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-8 xl:py-0 py-3 transition-all duration-500 ${
              isScrolled
                  ? 'bg-white/80 dark:bg-background-8 backdrop-blur-xl shadow-sm !border-none dark:border-stroke-7'
                  : 'bg-transparent border-transparent'
          }`}>
            <div className="max-w-[1400px] w-full mx-auto flex items-center justify-between">
              <div className='p-2'>
                <Link href="/" className="flex items-center">
                  <span className="sr-only">Home</span>
                  <figure className="lg:max-w-[150px] lg:block hidden">
                    <img src={isBotPage ? "/logo_vert.png" : "/logo.png"} alt="Kiiako" className="dark:hidden block" />
                    <img src={isBotPage ? "/logo_vert.png" : "/logo_blanc.png"} alt="Kiiako" className="dark:block hidden" />
                  </figure>
                  <figure className="max-w-[44px] sm:max-w-[150px] max-w-[120px] lg:hidden block">
                    <img src={isBotPage ? "/logo_vert.png" : "/logo.png"} alt="Kiiako" className="w-full dark:hidden block" />
                    <img src={isBotPage ? "/logo_vert.png" : "/logo_blanc.png"} alt="Kiiako" className="w-full dark:block hidden" />
                  </figure>
                </Link>
              </div>

              <nav className="hidden xl:flex items-center overflow-visible">
                <ul className="flex items-center overflow-visible">
                  {/* Solutions Menu */}
                  <li
                      className={`relative nav-item cursor-pointer py-2.5 px-1 overflow-visible ${openMenu === 'solutions' ? 'active' : ''}`}
                      onMouseEnter={() => {
                        cancelHideMenu();
                        setOpenMenu('solutions');
                      }}
                      onMouseLeave={scheduleHideMenu}
                  >
                    <a href="#" className={`flex items-center gap-1 px-4 py-2 border-b-2 text-tagline-1 font-normal transition-all duration-200 ${
                        isSolutionsActive
                            ? 'border-primary-500 text-primary-500 dark:text-primary-400'
                            : 'border-transparent hover:border-primary-500 text-secondary hover:text-secondary dark:text-accent dark:hover:text-accent'
                    }`}>
                      <span>{t('header.nav.solutions')}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openMenu === 'solutions' ? 'rotate-180' : ''}`} />
                    </a>
                    <div
                        className={`dropdown-menu-bridge absolute left-1/2 -translate-x-1/2 top-full w-full h-3 z-40 min-w-[970px] bg-transparent transition-all duration-300 ${openMenu === 'solutions' ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                        onMouseEnter={cancelHideMenu}
                        onMouseLeave={scheduleHideMenu}
                    ></div>
                    <div
                        id="solutions-mega-menu"
                        className={`dropdown-menu absolute left-1/2 -translate-x-1/2 top-full mt-2 transition-all duration-300 bg-white dark:bg-background-6 border border-stroke-1 dark:border-white/10 z-50 rounded-[20px] p-6 ${openMenu === 'solutions' ? 'active' : ''}`}
                        onMouseEnter={cancelHideMenu}
                        onMouseLeave={scheduleHideMenu}
                        style={{ width: 'calc(68vw)', marginLeft : "10vw" }}
                    >
                      <div className="flex items-start gap-8">
                        <div className="flex-1 grid grid-cols-12 gap-x-6 gap-y-3">
                          {features.map((feature) => {
                            const Icon = iconMap[feature.iconClass] || Store;
                            return (
                                <div key={feature.id} className="col-span-4">
                                  <Link
                                      href={feature.link}
                                      className={`rounded-xl p-3 flex items-start gap-2 group transition-all duration-300 relative ${
                                          isActivePath(feature.link) ? 'is-active' : ''
                                      }`}
                                  >
                                    <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-[10px] z-0 transition-all duration-400 border ${
                                        isActivePath(feature.link)
                                            ? 'bg-primary-500/10 opacity-100 border-primary-500 dark:border-primary-500'
                                            : 'bg-background-3 dark:bg-background-7 opacity-0 group-hover:opacity-100 group-hover:bg-primary-500/10 border-transparent group-hover:border-primary-200 dark:group-hover:border-primary-500'
                                    }`}></div>
                                    <div className={`mt-1 size-9 rounded-lg border  dark:border-background-7  dark:bg-background-6 flex items-center justify-center shrink-0 p-2 shadow-14 transition-all duration-300 relative z-10 ${
                                        isActivePath(feature.link) ? 'bg-primary-500 border-primary-500' : 'group-hover:bg-primary-500 border-stroke-1 bg-white'
                                    }`}>
                                      <Icon className={`w-4 h-4 transition-all duration-300 ${
                                          isActivePath(feature.link)
                                              ? 'text-white'
                                              : 'stroke-secondary dark:stroke-accent group-hover:stroke-white'
                                      }`} />
                                    </div>
                                    <div className="relative z-10 flex-1">
                                      <div className="flex items-center justify-between gap-2">
                                        <p className={`
                                      text-tagline-1 font-normal  dark:text-accent ${isActivePath(feature.link) ? "text-primary-500" : "text-secondary"}
                                      `}>{t(feature.title)}</p>
                                        <ArrowRight className={`w-4 h-4  group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-primary-500 
                                       ${isActivePath(feature.link) ? 'text-primary-500 opacity-100' : 'opacity-0'}
                                      `} />
                                      </div>
                                      <p className={`font-normal  dark:text-accent/60 ${isActivePath(feature.link) ? "text-primary-500" : "text-secondary/60"}`}
                                       style={{fontSize : "14px"}}
                                      >
                                        {t(feature.description)}
                                      </p>
                                    </div>
                                  </Link>
                                </div>
                            );
                          })}
                        </div>
                        <div className="w-[200px] shrink-0 space-y-3">
                          <h3 className="text-tagline-1 font-semibold text-secondary dark:text-accent px-3">{t('header.menu.usefulLinks')}</h3>
                          <ul className="space-y-1">
                            {links.map((link) => (
                                <li key={link.id}>
                                  <Link
                                      href={link.href}
                                      className="p-3 rounded-xl flex items-center gap-2 transition-all duration-300 relative group"
                                  >
                                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-background-3 dark:bg-background-7 opacity-0 group-hover:opacity-100 rounded-[10px] z-0 transition-all duration-400"></div>
                                    <p className="text-tagline-2 font-normal text-secondary dark:text-accent relative z-10">{t(link.label)}</p>
                                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-primary-500 relative z-10" />
                                  </Link>
                                </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>

                  {/* Ressources Menu */}
                  <li
                      className={`relative nav-item cursor-pointer py-2.5 overflow-visible ${openMenu === 'ressources' ? 'active' : ''}`}
                      onMouseEnter={() => {
                        cancelHideMenu();
                        setOpenMenu('ressources');
                      }}
                      onMouseLeave={scheduleHideMenu}
                  >
                    <a href="#" className={`flex items-center gap-1 px-4 py-2 border-b-2 text-tagline-1 font-normal transition-all duration-200 ${
                        isRessourcesActive
                            ? 'border-primary-500 text-primary-500 dark:text-primary-400'
                            : 'border-transparent hover:border-primary-500 text-secondary hover:text-secondary dark:text-accent dark:hover:text-accent'
                    }`}>
                      <span>{t('header.nav.resources')}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openMenu === 'ressources' ? 'rotate-180' : ''}`} />
                    </a>
                    <div
                        className={`dropdown-menu-bridge absolute left-1/2 -translate-x-1/2 top-full w-full h-3 z-40 min-w-[752px] bg-transparent transition-all duration-300 ${openMenu === 'ressources' ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                        onMouseEnter={cancelHideMenu}
                        onMouseLeave={scheduleHideMenu}
                    ></div>
                    <div
                        id="ressources-mega-menu"
                        className={`dropdown-menu absolute left-1/2 -translate-x-1/2 top-full mt-2 transition-all duration-300 bg-white dark:bg-background-6 border border-stroke-1 dark:border-white/10 z-50 rounded-[20px] p-6 ${openMenu === 'ressources' ? 'active' : ''}`}
                        onMouseEnter={cancelHideMenu}
                        onMouseLeave={scheduleHideMenu}
                        style={{ width: 'calc(35vw)' }}
                    >
                      <div className="flex items-start gap-8">
                        {pagesDataRessources.map((section, sectionIndex) => {
                          const SectionIcon = resourceIconMap[section.icon] || BookOpen;
                          return (
                              <div key={sectionIndex} className="flex-1 space-y-3">
                                <div className="flex items-center gap-2 px-3">
                                  <SectionIcon className="w-5 h-5 text-primary-500" />
                                  <h3 className="text-tagline-1 font-semibold text-secondary dark:text-accent">{t(section.section)}</h3>
                                </div>
                                <ul className="space-y-1">
                                  {section.items.map((item, itemIndex) => (
                                      <li key={itemIndex}>
                                        <Link
                                            href={item.href}
                                            className={`p-3 rounded-xl flex flex-col gap-1 transition-all duration-300 relative group ${
                                                isActivePath(item.href) ? 'is-active' : ''
                                            }`}
                                        >
                                          <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-[10px] z-0 transition-all duration-400 ${
                                              isActivePath(item.href)
                                                  ? 'bg-primary-500/10 opacity-100'
                                                  : 'bg-background-3 dark:bg-background-7 opacity-0 group-hover:opacity-100'
                                          }`}></div>
                                          <p className={`text-tagline-1 font-normal relative z-10 ${
                                              isActivePath(item.href)
                                                  ? 'text-primary-500 dark:text-primary-400'
                                                  : 'text-secondary dark:text-accent'
                                          }`}>{t(item.label)}</p>
                                          <p className="text-tagline-2 font-normal text-secondary/60 dark:text-accent/60 relative z-10">
                                            {t(item.description)}
                                          </p>
                                        </Link>
                                      </li>
                                  ))}
                                </ul>
                              </div>
                          );
                        })}
                      </div>
                    </div>
                  </li>

                  {/* Services Menu */}
                  <li
                      className={`relative nav-item cursor-pointer py-2.5 overflow-visible ${openMenu === 'services' ? 'active' : ''}`}
                      onMouseEnter={() => {
                        cancelHideMenu();
                        setOpenMenu('services');
                      }}
                      onMouseLeave={scheduleHideMenu}
                  >
                    <a href="#" className={`flex items-center gap-1 px-4 py-2 border-b-2 text-tagline-1 font-normal transition-all duration-200 ${
                        isServicesActive
                            ? 'border-primary-500 text-primary-500 dark:text-primary-400'
                            : 'border-transparent hover:border-primary-500 text-secondary hover:text-secondary dark:text-accent dark:hover:text-accent'
                    }`}>
                      <span>{t('header.nav.services')}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openMenu === 'services' ? 'rotate-180' : ''}`} />
                    </a>
                    <div
                        className={`dropdown-menu-bridge absolute left-1/2 -translate-x-1/2 top-full w-full h-3 z-40 min-w-[320px] bg-transparent transition-all duration-300 ${openMenu === 'services' ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                        onMouseEnter={cancelHideMenu}
                        onMouseLeave={scheduleHideMenu}
                    ></div>
                    <div
                        id="services-mega-menu"
                        className={`dropdown-menu absolute left-1/2 -translate-x-1/2 top-full mt-2 transition-all duration-300 w-[640px] bg-white dark:bg-background-6 border border-stroke-1 dark:border-white/10 z-50 rounded-[20px] p-5 ${openMenu === 'services' ? 'active' : ''}`}
                        onMouseEnter={cancelHideMenu}
                        onMouseLeave={scheduleHideMenu}
                    >
                      <div className="flex gap-5">

                        {/* Colonne Livraisons */}
                        <div className="flex-1 space-y-1">
                          <p className="text-tagline-2 font-medium text-secondary/50 dark:text-accent/50 px-1 mb-2">{t('header.menu.services.3')}</p>
                          {[
                            { href: '/solutions/livreur-inscription', icon: Truck, labelKey: 'header.menu.services.1', descKey: 'header.menu.services.1_desc' },
                            { href: '/solutions/entreprise-livraison', icon: Building2, labelKey: 'header.menu.services.2', descKey: 'header.menu.services.2_desc' },
                            { href: '/solutions/livraisons', icon: MapPin, labelKey: 'header.menu.services.3', descKey: 'header.menu.services.3_desc' }
                          ].map((item) => {
                            const Icon = item.icon;
                            const active = isActivePath(item.href);
                            const label = ('label' in item ? (typeof item.label === 'string' && item.label.includes('.') ? t(item.label) : item.label) : t(item.labelKey)) as string;
                            const desc = ('desc' in item ? item.desc : t(item.descKey)) as string;
                            return (
                              <Link key={item.href} href={item.href} className={`p-3 rounded-2xl flex items-start gap-3 transition-all duration-300 relative group ${active ? 'is-active' : ''}`}>
                                <div className={`absolute inset-0 rounded-2xl z-0 transition-all duration-300 ${active ? 'bg-primary-500/10 opacity-100' : 'bg-background-3 dark:bg-background-7 opacity-0 group-hover:opacity-100'}`} />
                                <div className={`relative z-10 size-9 rounded-[8px] flex items-center justify-center border shrink-0 shadow-14 transition-all duration-300 ${active ? 'bg-primary-500 border-primary-500' : 'bg-white dark:bg-background-6 border-stroke-1 dark:border-background-7 group-hover:bg-primary-500 group-hover:border-primary-500'}`}>
                                  <Icon className={`w-4 h-4 transition-colors duration-300 ${active ? 'stroke-white' : 'stroke-secondary dark:stroke-accent group-hover:stroke-white'}`} />
                                </div>
                                <div className="relative z-10 flex-1">
                                  <p className={`text-tagline-1 font-normal mb-0.5 ${active ? 'text-primary-500' : 'text-secondary dark:text-accent'}`}>{label}</p>
                                  <p className="text-[14px] text-secondary/50 dark:text-accent/50 leading-snug">{desc}</p>
                                </div>
                                <ArrowRight className={`w-3.5 h-3.5 shrink-0 mt-1 text-primary-500 transition-all duration-300 relative z-10 ${active ? 'opacity-100' : 'opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'}`} />
                              </Link>
                            );
                          })}
                        </div>

                        {/* Séparateur */}
                        <div className="w-px bg-stroke-1 dark:bg-white/5 shrink-0" />

                        {/* Colonne Bot WhatsApp */}
                        <div className="w-[240px] shrink-0">
                          <p className="text-tagline-2 font-medium text-secondary/50 dark:text-accent/50 px-1 mb-2">{t('header.menu.whatsapp.badge')}</p>
                          
                          <Link href="/solutions/bot-whatsapp" className="block bg-[#EFEAE2] dark:bg-[#0B141A] rounded-[20px] p-3.5 border border-stroke-1 dark:border-white/5 relative overflow-hidden group hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                            {/* WhatsApp Pattern Background */}
                            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02] bg-[url('https://i.pinimg.com/originals/8c/98/99/8c98994518b575bfd8c949e91d20548b.jpg')] bg-cover mix-blend-multiply dark:mix-blend-lighten pointer-events-none"></div>

                            <div className="flex items-center gap-2.5 relative z-10 mb-3">
                              <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm border border-black/5 dark:border-white/10 overflow-hidden">
                                <img src="/logo_vert.png" alt="Kiiako Logo" className="w-[65%] h-[65%] object-contain" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <h4 className="font-semibold text-[13.5px] text-[#111B21] dark:text-white leading-tight group-hover:text-[#00A884] transition-colors truncate">Kiiako Bot</h4>
                                <p className="text-[10.5px] text-[#00A884] font-medium">{t('header.menu.whatsapp.status')}</p>
                              </div>
                            </div>
                            
                            <div className="relative z-10 space-y-2 mt-1">
                              {/* Bot Message Bubble */}
                              <div className="bg-white dark:bg-[#202C33] p-2.5 rounded-2xl rounded-tl-sm shadow-[0_1px_2px_rgba(0,0,0,0.05)] text-[12px] text-[#111B21] dark:text-[#E9EDEF] border border-black/5 dark:border-white/5 leading-snug w-[85%] relative before:absolute before:-left-2 before:top-0 before:w-0 before:h-0 before:border-[6px] before:border-transparent before:border-t-white dark:before:border-t-[#202C33] before:border-r-white dark:before:border-r-[#202C33]">
                                {t('header.menu.whatsapp.message1')}
                              </div>
                              
                              {/* User Message Bubble */}
                              <div className="bg-[#D9FDD3] dark:bg-[#005C4B] p-2.5 rounded-2xl rounded-tr-sm shadow-[0_1px_2px_rgba(0,0,0,0.05)] text-[11.5px] text-[#111B21] dark:text-[#E9EDEF] border border-black/5 dark:border-white/5 ml-auto w-[85%] relative before:absolute before:-right-2 before:top-0 before:w-0 before:h-0 before:border-[6px] before:border-transparent before:border-t-[#D9FDD3] dark:before:border-t-[#005C4B] before:border-l-[#D9FDD3] dark:before:border-l-[#005C4B]">
                                <p className="font-semibold text-[10.5px] text-[#00A884] dark:text-[#53bdeb] mb-1">{t('header.menu.whatsapp.title_commands')}</p>
                                <ul className="space-y-0.5 font-mono text-[10.5px] opacity-80 pl-0.5">
                                  <li>→ missions</li>
                                  <li>→ solde</li>
                                  <li>→ livré CODE</li>
                                </ul>
                                <div className="mt-2 text-[10.5px] font-bold text-[#00A884] flex items-center justify-end gap-1 group-hover:gap-2 transition-all">
                                  {t('header.menu.whatsapp.view_all')} <ArrowRight className="w-3 h-3" />
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>

                      </div>
                    </div>
                  </li>

                  {/* Tarifs Link */}
                  <li className="relative nav-item cursor-pointer py-2.5">
                    <Link href="/tarifs" className={`flex items-center gap-1 px-4 py-2 border-b-2 text-tagline-1 font-normal transition-all duration-200 ${
                        isTarifsActive
                            ? 'border-primary-500 text-primary-500 dark:text-primary-400'
                            : 'border-transparent hover:border-primary-500 text-secondary hover:text-secondary dark:text-accent dark:hover:text-accent'
                    }`}>
                      <span>{t('header.nav.pricing')}</span>
                    </Link>
                  </li>
                </ul>
              </nav>



              <div className="xl:flex hidden items-center justify-center gap-3">
                <LanguageSwitcher />
                <ThemeToggle />
                <Link 
                  href="/signup" 
                  className={`btn btn-md ${isBotPage ? 'bg-[#25D366] text-white hover:bg-[#20BE5A] border-none' : 'btn-primary dark:btn-accent hover:btn-primary'}`}
                >
                  <span>{t('header.nav.start')}</span>
                </Link>
              </div>
              <div className="xl:hidden flex items-center gap-2">
                <ThemeToggle />
                <button onClick={toggle} className="nav-hamburger flex flex-col gap-[5px] size-12 bg-background-4 dark:bg-background-6 rounded-full items-center justify-center cursor-pointer">
                  <span className="sr-only">Menu</span>
                  <span className="block w-6 h-0.5 bg-stroke-9 dark:bg-stroke-1"></span>
                  <span className="block w-6 h-0.5 bg-stroke-9 dark:bg-stroke-1"></span>
                  <span className="block w-6 h-0.5 bg-stroke-9 dark:bg-stroke-1"></span>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Mobile Menu Overlay */}
        <div 
          className={`fixed inset-0 z-[9998] bg-black/40 backdrop-blur-sm transition-opacity duration-300 xl:hidden ${
            isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
          onClick={close}
        />

        {/* Mobile Menu */}
        <aside className={`sidebar fixed top-0 right-0 w-full sm:w-[400px] transition-all duration-300 h-screen bg-white dark:bg-background-8 sm:rounded-l-3xl xl:hidden z-[9999] flex flex-col ${isOpen ? 'translate-x-0 shadow-2xl' : 'translate-x-full'}`}>
          <div className="lg:p-9 sm:p-8 p-5 shrink-0">
            <div className="flex items-center justify-between">
              <Link href="/" onClick={close}>
                <span className="sr-only">Home</span>
                <figure className="max-w-[120px]">
                  <img src="/logo.png" alt="Kiiako" className="w-full dark:hidden block" />
                  <img src="/logo_blanc.png" alt="Kiiako" className="w-full dark:block hidden" />
                </figure>
              </Link>
              <button onClick={close} className="nav-hamburger-close flex flex-col gap-1.5 size-10 bg-background-4 dark:bg-background-9 rounded-full items-center justify-center cursor-pointer relative hover:bg-stroke-1 dark:hover:bg-stroke-1/10 transition-colors">
                <span className="sr-only">Close Menu</span>
                <span className="block w-4 h-0.5 bg-stroke-9/60 dark:bg-stroke-1 rotate-45 absolute"></span>
                <span className="block w-4 h-0.5 bg-stroke-9/60 dark:bg-stroke-1 -rotate-45 absolute"></span>
              </button>
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto px-5 sm:px-8 pb-10">
            <p className="text-secondary/50 dark:text-accent/50 font-semibold text-[13px] uppercase tracking-wider block mb-4 px-2">Navigation</p>
            <ul className="space-y-1">
              {/* Accordion Solutions */}
              <li>
                <button 
                  onClick={() => setOpenMobileSubMenu(openMobileSubMenu === 'solutions' ? null : 'solutions')}
                  className="w-full flex items-center justify-between p-3 rounded-2xl hover:bg-background-3 dark:hover:bg-background-7 transition-colors text-tagline-1 font-semibold text-secondary dark:text-accent"
                >
                  {t('header.nav.solutions')}
                  <ChevronDown className={`w-5 h-5 text-secondary/50 transition-transform duration-300 ${openMobileSubMenu === 'solutions' ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openMobileSubMenu === 'solutions' ? 'max-h-[1000px] opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                  <ul className="pl-4 space-y-1 border-l-2 border-stroke-1 dark:border-white/5 ml-3">
                    {features.map((feature, idx) => {
                      const Icon = iconMap[feature.iconClass] || Store;
                      return (
                        <li key={idx}>
                          <Link href={feature.link} onClick={close} className="flex items-center gap-3 p-3 rounded-xl hover:bg-background-3 dark:hover:bg-background-7 transition-colors text-secondary dark:text-accent">
                            <div className="size-8 rounded-lg bg-white dark:bg-background-6 border border-stroke-1 dark:border-background-7 flex items-center justify-center shrink-0 shadow-sm">
                              <Icon className="w-4 h-4 text-primary-500" />
                            </div>
                            <span className="font-medium text-sm">{t(feature.title)}</span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </li>

              {/* Accordion Ressources */}
              <li>
                <button 
                  onClick={() => setOpenMobileSubMenu(openMobileSubMenu === 'ressources' ? null : 'ressources')}
                  className="w-full flex items-center justify-between p-3 rounded-2xl hover:bg-background-3 dark:hover:bg-background-7 transition-colors text-tagline-1 font-semibold text-secondary dark:text-accent"
                >
                  {t('header.nav.resources')}
                  <ChevronDown className={`w-5 h-5 text-secondary/50 transition-transform duration-300 ${openMobileSubMenu === 'ressources' ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openMobileSubMenu === 'ressources' ? 'max-h-[1000px] opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                  <div className="pl-4 border-l-2 border-stroke-1 dark:border-white/5 ml-3 space-y-4 py-2">
                    {pagesDataRessources.map((section, sIdx) => {
                      const SectionIcon = resourceIconMap[section.icon] || BookOpen;
                      return (
                        <div key={sIdx} className="space-y-1">
                          <p className="px-3 text-xs font-bold text-secondary/40 dark:text-accent/40 uppercase mb-2 flex items-center gap-2">
                            <SectionIcon className="w-3.5 h-3.5" />
                            {t(section.section)}
                          </p>
                          <ul className="space-y-1">
                            {section.items.map((item, iIdx) => (
                              <li key={iIdx}>
                                <Link href={item.href} onClick={close} className="block p-2.5 rounded-xl hover:bg-background-3 dark:hover:bg-background-7 transition-colors text-secondary dark:text-accent font-medium text-sm">
                                  {t(item.label)}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </li>

              {/* Accordion Services */}
              <li>
                <button 
                  onClick={() => setOpenMobileSubMenu(openMobileSubMenu === 'services' ? null : 'services')}
                  className="w-full flex items-center justify-between p-3 rounded-2xl hover:bg-background-3 dark:hover:bg-background-7 transition-colors text-tagline-1 font-semibold text-secondary dark:text-accent"
                >
                  {t('header.nav.services')}
                  <ChevronDown className={`w-5 h-5 text-secondary/50 transition-transform duration-300 ${openMobileSubMenu === 'services' ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openMobileSubMenu === 'services' ? 'max-h-[1000px] opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                  <ul className="pl-4 space-y-1 border-l-2 border-stroke-1 dark:border-white/5 ml-3 pb-2 pt-1">
                    {[
                      { href: '/solutions/livreur-inscription', icon: Truck, labelKey: 'header.menu.services.1' },
                      { href: '/solutions/entreprise-livraison', icon: Building2, labelKey: 'header.menu.services.2' },
                      { href: '/solutions/livraisons', icon: MapPin, labelKey: 'header.menu.services.3' }
                    ].map((item, idx) => {
                      const Icon = item.icon;
                      const lbl = t(item.labelKey);
                      return (
                        <li key={idx}>
                          <Link href={item.href} onClick={close} className="flex items-center gap-3 p-3 rounded-xl hover:bg-background-3 dark:hover:bg-background-7 transition-colors text-secondary dark:text-accent">
                            <div className="size-8 rounded-lg bg-green-500/10 flex items-center justify-center shrink-0">
                              <Icon className="w-4 h-4 text-green-600" />
                            </div>
                            <span className="font-medium text-sm">{lbl}</span>
                          </Link>
                        </li>
                      );
                    })}
                    <li>
                      <Link href="/solutions/bot-whatsapp" onClick={close} className="flex items-center gap-3 p-3 rounded-xl hover:bg-background-3 dark:hover:bg-background-7 transition-colors text-secondary dark:text-accent mt-2 border border-stroke-1 dark:border-white/5 bg-[#EFEAE2] dark:bg-[#0B141A]">
                        <img src="/logo_vert.png" alt="Bot" className="w-8 h-8 rounded-full border border-black/5 bg-white p-1" />
                        <div>
                          <p className="font-bold text-[13px] text-[#111B21] dark:text-white leading-tight">{t('header.menu.whatsapp.label', 'Missions WhatsApp')}</p>
                          <p className="text-[11px] text-[#00A884] font-medium">{t('header.menu.whatsapp.view_sim', 'Voir le simulateur')}</p>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              {/* Direct Links */}
              <li>
                <Link href="/tarifs" onClick={close} className="w-full flex items-center justify-between p-3 rounded-2xl hover:bg-background-3 dark:hover:bg-background-7 transition-colors text-tagline-1 font-semibold text-secondary dark:text-accent">
                  {t('header.nav.pricing')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Mobile Footer CTA */}
          <div className="p-5 sm:p-8 shrink-0 border-t border-stroke-1 dark:border-white/10 bg-background-3 dark:bg-background-8">
            <Link 
              href="/signup" 
              onClick={close}
              className={`btn btn-md w-full shadow-lg ${isBotPage ? 'bg-[#25D366] text-white hover:bg-[#20BE5A] border-none' : 'btn-primary dark:btn-accent hover:btn-primary'}`}
            >
              <span>{t('header.nav.start')}</span>
            </Link>
          </div>
        </aside>
      </>
  );
}
