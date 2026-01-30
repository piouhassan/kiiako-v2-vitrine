'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { useMobileMenu } from '@/hooks/useMobileMenu';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import Link from "next/link";
import {
  Store, Wand2, Globe, Languages, Lock, Package, Cloud,
  Wallet, Ticket, Star, Users, BarChart3, BookOpen, Video,
  HelpCircle, Newspaper, Truck, Building2, ChevronDown, ArrowRight
} from 'lucide-react';
import ThemeToggle from '@/components/ui/ThemeToggle';

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
  '/assets/icons/guides.svg': BookOpen,
  '/assets/icons/videos.svg': Video,
  '/assets/icons/faq.svg': HelpCircle,
  '/assets/icons/blog.svg': Newspaper,
};

export default function Header() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const { isOpen, toggle, close } = useMobileMenu();
  const { isScrolled } = useScrollPosition();
  const menuTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Check if a path is active
  const isActivePath = (path: string) => pathname === path;
  const isActiveSection = (paths: string[]) => paths.some(path => pathname.startsWith(path));

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
        <header className="overflow-visible">
          <div className={`header-one overflow-visible w-full mx-auto fixed left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-8 xl:py-0 py-3 transition-all duration-500 ${
              isScrolled
                  ? 'bg-white/14 dark:bg-background-8/80 backdrop-blur-xl shadow-sm !border-none dark:border-stroke-7'
                  : 'bg-transparent border-transparent'
          }`}>
            <div className="max-w-[1400px] w-full mx-auto flex items-center justify-between">
              <div className='p-2'>
                <Link href="/" className="flex items-center">
                  <span className="sr-only">Home</span>
                  <figure className="lg:max-w-[150px] lg:block hidden">
                    <img src="/logo.png" alt="Kiiako" className="dark:hidden block" />
                    <img src="/logo_kiiako_white@150x.png" alt="Kiiako" className="dark:block hidden" />
                  </figure>
                  <figure className="max-w-[44px] sm:max-w-[150px] max-w-[120px] lg:hidden block">
                    <img src="/logo.png" alt="Kiiako" className="w-full dark:hidden block" />
                    <img src="/logo_kiiako_white@150x.png" alt="Kiiako" className="w-full dark:block hidden" />
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
                    <a href="#" className={`flex items-center gap-1 px-4 py-2 border rounded-full text-tagline-1 font-normal transition-all duration-200 ${
                        isSolutionsActive
                            ? 'border-primary-500  text-primary-500 dark:text-primary-400'
                            : 'border-transparent hover:border-stroke-2 dark:hover:border-stroke-7 text-secondary hover:text-secondary dark:text-accent dark:hover:text-accent'
                    }`}>
                      <span>Solutions</span>
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
                        style={{ width: 'calc(70vw)', marginLeft : "10vw" }}
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
                                      `}>{feature.title}</p>
                                        <ArrowRight className={`w-4 h-4  group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-primary-500 
                                       ${isActivePath(feature.link) ? 'text-primary-500 opacity-100' : 'opacity-0'}
                                      `} />
                                      </div>
                                      <p className={`font-normal  dark:text-accent/60 ${isActivePath(feature.link) ? "text-primary-500" : "text-secondary/60"}`}
                                       style={{fontSize : "14px"}}
                                      >
                                        {feature.description}
                                      </p>
                                    </div>
                                  </Link>
                                </div>
                            );
                          })}
                        </div>
                        <div className="w-[200px] shrink-0 space-y-3">
                          <h3 className="text-tagline-1 font-semibold text-secondary dark:text-accent px-3">Liens utiles</h3>
                          <ul className="space-y-1">
                            {links.map((link) => (
                                <li key={link.id}>
                                  <Link
                                      href={link.href}
                                      className="p-3 rounded-xl flex items-center gap-2 transition-all duration-300 relative group"
                                  >
                                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-background-3 dark:bg-background-7 opacity-0 group-hover:opacity-100 rounded-[10px] z-0 transition-all duration-400"></div>
                                    <p className="text-tagline-2 font-normal text-secondary dark:text-accent relative z-10">{link.label}</p>
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
                    <a href="#" className={`flex items-center gap-1 px-4 py-2 border rounded-full text-tagline-1 font-normal transition-all duration-200 ${
                        isRessourcesActive
                            ? 'border-primary-500 bg-primary-500/10 text-primary-500 dark:text-primary-400'
                            : 'border-transparent hover:border-stroke-2 dark:hover:border-stroke-7 text-secondary hover:text-secondary dark:text-accent dark:hover:text-accent'
                    }`}>
                      <span>Ressources</span>
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
                        style={{ width: 'calc(60vw)' }}
                    >
                      <div className="flex items-start gap-8">
                        {pagesDataRessources.map((section, sectionIndex) => {
                          const SectionIcon = resourceIconMap[section.icon] || BookOpen;
                          return (
                              <div key={sectionIndex} className="flex-1 space-y-3">
                                <div className="flex items-center gap-2 px-3">
                                  <SectionIcon className="w-5 h-5 text-primary-500" />
                                  <h3 className="text-tagline-1 font-semibold text-secondary dark:text-accent">{section.section}</h3>
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
                                          }`}>{item.label}</p>
                                          <p className="text-tagline-2 font-normal text-secondary/60 dark:text-accent/60 relative z-10">
                                            {item.description}
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
                    <a href="#" className={`flex items-center gap-1 px-4 py-2 border rounded-full text-tagline-1 font-normal transition-all duration-200 ${
                        isServicesActive
                            ? 'border-primary-500 bg-primary-500/10 text-primary-500 dark:text-primary-400'
                            : 'border-transparent hover:border-stroke-2 dark:hover:border-stroke-7 text-secondary hover:text-secondary dark:text-accent dark:hover:text-accent'
                    }`}>
                      <span>Services</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openMenu === 'services' ? 'rotate-180' : ''}`} />
                    </a>
                    <div
                        className={`dropdown-menu-bridge absolute left-1/2 -translate-x-1/2 top-full w-full h-3 z-40 min-w-[320px] bg-transparent transition-all duration-300 ${openMenu === 'services' ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                        onMouseEnter={cancelHideMenu}
                        onMouseLeave={scheduleHideMenu}
                    ></div>
                    <div
                        id="services-mega-menu"
                        className={`dropdown-menu absolute left-1/2 -translate-x-1/2 top-full mt-2 transition-all duration-300 w-[320px] bg-white dark:bg-background-6 border border-stroke-1 dark:border-white/10 z-50 rounded-[20px] p-4 ${openMenu === 'services' ? 'active' : ''}`}
                        onMouseEnter={cancelHideMenu}
                        onMouseLeave={scheduleHideMenu}
                    >
                      <ul className="space-y-1">
                        {services.map((service) => (
                            <li key={service.id}>
                              <Link
                                  href={service.href}
                                  className={`p-3 rounded-2xl flex items-start gap-3 transition-all duration-300 relative group ${
                                      isActivePath(service.href) ? 'is-active' : ''
                                  }`}
                              >
                                <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-[10px] z-0 transition-all duration-400 ${
                                    isActivePath(service.href)
                                        ? 'bg-primary-500/10 opacity-100'
                                        : 'bg-background-3 dark:bg-background-7 opacity-0 group-hover:opacity-100'
                                }`}></div>
                                <div className="size-11 p-3 rounded-[10px] bg-white dark:bg-background-6 relative z-10 shadow-14 border border-stroke-1 dark:border-background-7 flex items-center justify-center">
                                  {service.id === 1 ? (
                                      <Truck className="w-5 h-5 stroke-secondary dark:stroke-accent" />
                                  ) : (
                                      <Building2 className="w-5 h-5 stroke-secondary dark:stroke-accent" />
                                  )}
                                </div>
                                <div className="relative z-10">
                                  <p className={`text-tagline-1 font-normal ${
                                      isActivePath(service.href)
                                          ? 'text-primary-500 dark:text-primary-400'
                                          : 'text-secondary dark:text-accent'
                                  }`}>{service.label}</p>
                                </div>
                              </Link>
                            </li>
                        ))}
                      </ul>
                    </div>
                  </li>

                  {/* Tarifs Link */}
                  <li className="relative nav-item cursor-pointer py-2.5">
                    <Link href="/tarifs" className={`flex items-center gap-1 px-4 py-2 border rounded-full text-tagline-1 font-normal transition-all duration-200 ${
                        isTarifsActive
                            ? 'border-primary-500 bg-primary-500/10 text-primary-500 dark:text-primary-400'
                            : 'border-transparent hover:border-stroke-2 dark:hover:border-stroke-7 text-secondary hover:text-secondary dark:text-accent dark:hover:text-accent'
                    }`}>
                      <span>Tarifs</span>
                    </Link>
                  </li>
                </ul>
              </nav>



              <div className="xl:flex hidden items-center justify-center gap-3">
                <ThemeToggle />
                <Link href="/signup" className="btn btn-md btn-primary dark:btn-accent hover:btn-primary">
                  <span>Commencer maintenant</span>
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

        {/* Mobile Menu */}
        <aside className={`sidebar fixed top-0 right-0 w-full sm:w-1/2 transition-all duration-300 h-screen bg-white dark:bg-background-8 rounded-l-3xl xl:hidden z-[9999] overflow-y-auto ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="lg:p-9 sm:p-8 p-5 space-y-4">
            <div className="flex items-center justify-between">
              <Link href="/">
                <span className="sr-only">Home</span>
                <figure className="max-w-[44px]">
                  <img src="/images/shared/logo.svg" alt="Kiiako" className="w-full dark:hidden block" />
                  <img src="/images/shared/logo-dark.svg" alt="Kiiako" className="w-full dark:block hidden" />
                </figure>
              </Link>
              <button onClick={close} className="nav-hamburger-close flex flex-col gap-1.5 size-10 bg-background-4 dark:bg-background-9 rounded-full items-center justify-center cursor-pointer relative">
                <span className="sr-only">Close Menu</span>
                <span className="block w-4 h-0.5 bg-stroke-9/60 dark:bg-stroke-1 rotate-45 absolute"></span>
                <span className="block w-4 h-0.5 bg-stroke-9/60 dark:bg-stroke-1 -rotate-45 absolute"></span>
              </button>
            </div>
            <div className="mt-6 h-[85vh] w-full overflow-y-auto overflow-x-hidden pb-10">
              <p className="text-secondary dark:text-accent font-normal text-tagline-1 block mb-2">Menu</p>
              <ul className="space-y-2">
                <li className="space-y-2">
                  <Link href="/solutions/creer-boutique" className="text-tagline-1 font-normal text-secondary dark:text-accent transition-all duration-200 py-2.5 text-left block">Solutions</Link>
                </li>
                <li className="space-y-2">
                  <a href="/ressources" className="text-tagline-1 font-normal text-secondary dark:text-accent transition-all duration-200 py-2.5 text-left block">Ressources</a>
                </li>
                <li className="space-y-2">
                  <a href="/services" className="text-tagline-1 font-normal text-secondary dark:text-accent transition-all duration-200 py-2.5 text-left block">Services</a>
                </li>
                <li className="space-y-2">
                  <a href="/tarifs" className="text-tagline-1 font-normal text-secondary dark:text-accent transition-all duration-200 py-2.5 text-left block">Tarifs</a>
                </li>
              </ul>
            </div>
          </div>
        </aside>
      </>
  );
}
