'use client';

import { useState } from 'react';
import { useMobileMenu } from '@/hooks/useMobileMenu';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import Link from "next/link";

export default function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const { isOpen, toggle, close } = useMobileMenu();
  const { isScrolled } = useScrollPosition();

  return (
    <>
      <header>
        <div className={`header-one opacity-100 rounded-full xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] max-w-[450px] mx-auto w-full fixed left-1/2 -translate-x-1/2 z-50 flex items-center justify-between px-2.5 xl:py-0 py-2.5 bg-white/60 backdrop-blur-[25px] top-5 dark:border dark:border-stroke-7 dark:bg-background-7 ${isScrolled ? 'scroll-header' : ''}`}>
        <div>
          <Link href="/" className="flex items-center">
            <span className="sr-only">Home</span>
            <figure className="max-w-[44px]">
              <img src="/images/shared/logo.svg" alt="NextSaaS" className="w-full dark:hidden block" />
              <img src="/images/shared/logo-dark.svg" alt="NextSaaS" className="w-full dark:block hidden" />
            </figure>
          </Link>
        </div>

        <nav className="hidden xl:flex items-center">
          <ul className="flex items-center">
            <li
              className={`relative nav-item cursor-pointer py-2.5 ${openMenu === 'company' ? 'active' : ''}`}
              onMouseEnter={() => setOpenMenu('company')}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <a href="#" className="flex items-center gap-1 px-4 py-2 border border-transparent hover:border-stroke-2 dark:hover:border-stroke-7 rounded-full text-tagline-1 font-normal text-secondary/60 hover:text-secondary transition-all duration-200 dark:text-accent/60 dark:hover:text-accent">
                <span>Company</span>
                <span className="nav-arrow block origin-center transition-all duration-300 translate-y-px">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M5 7.5L10 12.5L15 7.5" className="stroke-secondary/60 dark:stroke-accent/60" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </a>
              <div>
                <div className="dropdown-menu-bridge absolute left-1/2 -translate-x-1/2 top-full w-full h-3 z-40 min-w-[752px] pointer-events-none bg-transparent opacity-0"></div>
                <div id="company-mega-menu" className={`dropdown-menu ${openMenu === 'company' ? 'active' : ''} absolute left-1/2 -translate-x-1/2 top-full mt-2 pointer-events-none transition-all duration-300 opacity-0 md:w-[752px] w-full bg-white dark:bg-background-6 border border-stroke-1 dark:border-white/10 z-50 rounded-[20px] p-4 flex items-start md:gap-x-6 gap-y-6`}>
                  <ul id="product-dropdown-menu" className="space-y-1 flex-1">
                    <li>
                      <a href="creative-portfolio-about.html" className="p-3 rounded-2xl flex items-start gap-3 transition-all duration-300 relative group">
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-background-3 dark:bg-background-7 opacity-0 group-hover:opacity-100 rounded-[10px] z-0 transition-all duration-400"></div>
                        <div className="size-11 p-3 rounded-[10px] bg-white dark:bg-background-6 relative z-10 shadow-14 border border-stroke-1 dark:border-background-7 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M10.0003 18.3334C14.6027 18.3334 18.3337 14.6024 18.3337 10C18.3337 5.39765 14.6027 1.66669 10.0003 1.66669C5.39795 1.66669 1.66699 5.39765 1.66699 10C1.66699 14.6024 5.39795 18.3334 10.0003 18.3334Z" className="stroke-secondary dark:stroke-accent" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M10 13.3333H10.0083" className="stroke-secondary dark:stroke-accent" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M10 6.66669V10" className="stroke-secondary dark:stroke-accent" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        <div className="relative z-10">
                          <p className="text-tagline-1 font-normal text-secondary dark:text-accent">About Us</p>
                          <p className="text-tagline-2 font-normal text-secondary/60 dark:text-accent/60">See how others are using NextSaaS</p>
                        </div>
                      </a>
                    </li>
                    <li><div className="h-[1px] bg-stroke-4 dark:bg-background-7 w-[calc(100%-16px)] mx-auto"></div></li>
                    <li>
                      <a href="creative-portfolio-services.html" className="p-3 rounded-2xl flex items-start gap-3 transition-all duration-300 relative group">
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-background-3 dark:bg-background-7 opacity-0 group-hover:opacity-100 rounded-[10px] z-0 transition-all duration-400"></div>
                        <div className="size-11 p-3 rounded-[10px] bg-white dark:bg-background-6 relative z-10 shadow-14 border border-stroke-1 dark:border-background-7 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M10 13.75C12.0711 13.75 13.75 12.0711 13.75 10C13.75 7.92893 12.0711 6.25 10 6.25C7.92893 6.25 6.25 7.92893 6.25 10C6.25 12.0711 7.92893 13.75 10 13.75Z" className="stroke-secondary dark:stroke-accent" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M9.59975 3.4495L8.12557 2.34419C8.04647 2.28469 7.95437 2.24484 7.85685 2.22792C7.75933 2.211 7.65918 2.2175 7.56467 2.24688C7.1081 2.38985 6.66515 2.57312 6.24103 2.79452C6.15323 2.84057 6.07765 2.90685 6.02051 2.98787C5.96338 3.06889 5.92633 3.16233 5.91242 3.26049L5.65182 5.08478C5.55248 5.17284 5.45523 5.26442 5.36007 5.35953C5.26493 5.45467 5.17332 5.55195 5.08525 5.65136L5.08521 5.65139L3.26124 5.91223C3.16324 5.92608 3.06993 5.96303 2.98901 6.02002C2.90809 6.07702 2.84187 6.15242 2.79581 6.24003C2.57407 6.66397 2.39044 7.10678 2.2471 7.56323C2.21759 7.65787 2.211 7.75818 2.22789 7.85587C2.24478 7.95356 2.28466 8.04584 2.34423 8.12508L3.44993 9.59932C3.44195 9.73182 3.43794 9.86535 3.4379 9.9999C3.4379 10.1344 3.44191 10.268 3.44993 10.4006L3.44993 10.4006L2.34462 11.8748C2.28512 11.9539 2.24527 12.046 2.22835 12.1435C2.21143 12.241 2.21793 12.3412 2.2473 12.4357C2.39028 12.8923 2.57355 13.3352 2.79495 13.7593C2.841 13.8471 2.90727 13.9227 2.98829 13.9799C3.06931 14.037 3.16276 14.074 3.26092 14.088L5.08521 14.3486C5.17326 14.4479 5.26484 14.5451 5.35996 14.6403C5.45509 14.7354 5.55237 14.827 5.65179 14.9151L5.65182 14.9152L5.91265 16.7391C5.92651 16.8371 5.96345 16.9304 6.02045 17.0114C6.07744 17.0923 6.15285 17.1585 6.24046 17.2046C6.66439 17.4263 7.1072 17.6099 7.56365 17.7533C7.6583 17.7828 7.7586 17.7894 7.8563 17.7725C7.95399 17.7556 8.04626 17.7157 8.1255 17.6561L9.59974 16.5504C9.73225 16.5584 9.86577 16.5624 10.0003 16.5625C10.1349 16.5625 10.2684 16.5585 10.401 16.5504L10.4011 16.5504L11.8752 17.6558C11.9543 17.7153 12.0464 17.7551 12.144 17.772C12.2415 17.7889 12.3416 17.7824 12.4361 17.7531C12.8927 17.6101 13.3357 17.4268 13.7598 17.2054C13.8476 17.1594 13.9232 17.0931 13.9803 17.0121C14.0374 16.9311 14.0745 16.8376 14.0884 16.7395L14.349 14.9152C14.4483 14.8271 14.5456 14.7355 14.6407 14.6404C14.7359 14.5453 14.8275 14.448 14.9156 14.3486L14.9156 14.3486L16.7396 14.0877C16.8376 14.0739 16.9309 14.0369 17.0118 13.9799C17.0927 13.9229 17.1589 13.8475 17.205 13.7599C17.4267 13.336 17.6104 12.8932 17.7537 12.4367C17.7832 12.3421 17.7898 12.2418 17.7729 12.1441C17.756 12.0464 17.7161 11.9541 17.6566 11.8749L16.5509 10.4006C16.5589 10.2681 16.5629 10.1346 16.5629 10.0001C16.5629 9.86551 16.5589 9.73195 16.5509 9.59937L16.5509 9.59932L17.6562 8.12514C17.7157 8.04605 17.7555 7.95394 17.7725 7.85642C17.7894 7.7589 17.7829 7.65876 17.7535 7.56424C17.6105 7.10767 17.4273 6.66472 17.2059 6.2406C17.1598 6.15281 17.0935 6.07722 17.0125 6.02008C16.9315 5.96295 16.838 5.9259 16.7399 5.91199L14.9156 5.65139C14.8275 5.55206 14.736 5.45481 14.6408 5.35964C14.5457 5.2645 14.4484 5.1729 14.349 5.08482L14.349 5.08478L14.0881 3.26082C14.0743 3.16281 14.0373 3.06951 13.9804 2.98858C13.9234 2.90766 13.848 2.84144 13.7603 2.79539C13.3364 2.57364 12.8936 2.39002 12.4371 2.24668C12.3425 2.21716 12.2422 2.21057 12.1445 2.22746C12.0468 2.24435 11.9545 2.28423 11.8753 2.34381L10.4011 3.4495C10.2685 3.44152 10.135 3.43751 10.0005 3.43747C9.86593 3.43747 9.73237 3.44148 9.5998 3.4495L9.59975 3.4495Z" className="stroke-secondary dark:stroke-accent" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        <div className="relative z-10">
                          <p className="text-tagline-1 font-normal text-secondary dark:text-accent">Services</p>
                          <p className="text-tagline-2 font-normal text-secondary/60 dark:text-accent/60">See how others are using NextSaaS</p>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="relative nav-item cursor-pointer py-2.5">
              <a href="/pricing" className="flex items-center gap-1 px-4 py-2 border border-transparent hover:border-stroke-2 dark:hover:border-stroke-7 rounded-full text-tagline-1 font-normal text-secondary/60 hover:text-secondary transition-all duration-200 dark:text-accent/60 dark:hover:text-accent">
                <span>Pricing</span>
              </a>
            </li>
          </ul>
        </nav>

        <div className="xl:flex hidden items-center justify-center">
          <a href="/signup" className="btn btn-md btn-secondary dark:btn-accent hover:btn-primary">
            <span>Get started</span>
          </a>
        </div>
        <div className="xl:hidden block">
          <button onClick={toggle} className="nav-hamburger flex flex-col gap-[5px] size-12 bg-background-4 dark:bg-background-6 rounded-full items-center justify-center cursor-pointer">
            <span className="sr-only">Menu</span>
            <span className="block w-6 h-0.5 bg-stroke-9 dark:bg-stroke-1"></span>
            <span className="block w-6 h-0.5 bg-stroke-9 dark:bg-stroke-1"></span>
            <span className="block w-6 h-0.5 bg-stroke-9 dark:bg-stroke-1"></span>
          </button>
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
                <img src="/images/shared/logo.svg" alt="NextSaaS" className="w-full dark:hidden block" />
                <img src="/images/shared/logo-dark.svg" alt="NextSaaS" className="w-full dark:block hidden" />
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
                <a href="/about" className="text-tagline-1 font-normal text-secondary dark:text-accent transition-all duration-200 py-2.5 text-left block">About Us</a>
              </li>
              <li className="space-y-2">
                <a href="/services" className="text-tagline-1 font-normal text-secondary dark:text-accent transition-all duration-200 py-2.5 text-left block">Services</a>
              </li>
              <li className="space-y-2">
                <a href="/pricing" className="text-tagline-1 font-normal text-secondary dark:text-accent transition-all duration-200 py-2.5 text-left block">Pricing</a>
              </li>
              <li className="space-y-2">
                <a href="/blog" className="text-tagline-1 font-normal text-secondary dark:text-accent transition-all duration-200 py-2.5 text-left block">Blog</a>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </>
  );
}
