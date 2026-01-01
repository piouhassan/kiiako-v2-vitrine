export default function Footer() {
  return (
    <footer className="bg-secondary dark:bg-background-8 relative overflow-hidden">
      <figure className="pointer-events-none select-none absolute size-[550px] top-[-17%] md:top-[-25%] xl:top-[-32%] max-[376px]:right-[-83%] right-[-64%] md:right-[-30%] lg:right-[-19%] xl:right-[-9%] bg-top-right rotate-[-30deg]">
        <img
          className="size-full object-cover object-top"
          src="/images/ns-img-493.png"
          alt="Decorative gradient background"
        />
      </figure>

      <figure className="pointer-events-none select-none absolute size-[728px] md:size-[870px] bottom-[-33%] md:bottom-[-60%] xl:bottom-[-77%] left-[-83%] md:left-[-52%] lg:left-[-38%] xl:left-[-30%] 2xl:left-[-22%] min-[2559px]:!left-[-16%]">
        <img
          className="size-full object-bottom"
          src="/images/ns-img-494.png"
          alt="Decorative gradient background"
        />
      </figure>
      <div className="main-container px-5">
        <div className="grid grid-cols-12 xl:pt-[90px] gap-x-0 gap-y-16 pt-16 pb-12 justify-between">
          <div className="col-span-12 xl:col-span-4">
            <div className="max-w-[306px]">
              <figure>
                <img src="/logo_kiiako_white@150x.png" alt="Kiiako" className="h-8" />
              </figure>
              <p className="text-accent/60 font-normal text-tagline-1 mt-4 mb-7">
                La plateforme e-commerce qui permet aux vendeurs de créer leur boutique en ligne, vendre et livrer partout en Afrique.
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
                <div className="h-6 w-px bg-stroke-1/20"></div>
                <a href="#" className="footer-social-link">
                  <span className="sr-only">Dribbble</span>
                  <img className="size-6" src="/images/icons/dribbble.svg" alt="Dribbble" />
                </a>
                <div className="h-6 w-px bg-stroke-1/20"></div>
                <a href="#" className="footer-social-link">
                  <span className="sr-only">Behance</span>
                  <img className="size-6" src="/images/icons/behance.svg" alt="Behance" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-span-12 xl:col-span-8 grid grid-cols-12 gap-x-0 gap-y-8">
            <div className="col-span-12 md:col-span-4">
              <div className="space-y-8">
                <p className="sm:text-heading-6 text-tagline-1 font-normal text-primary-50">Solutions</p>
                <ul className="sm:space-y-5 space-y-3">
                  <li>
                    <a href="/solutions/creer-boutique" className="footer-link">Créer une boutique</a>
                  </li>
                  <li>
                    <a href="/solutions/nom-de-domaine" className="footer-link">Nom de domaine</a>
                  </li>
                  <li>
                    <a href="/solutions/mobile-money" className="footer-link">Mobile Money</a>
                  </li>
                  <li>
                    <a href="/solutions/produits-digitaux" className="footer-link">Produits digitaux</a>
                  </li>
                  <li>
                    <a href="/solutions/produits-physiques" className="footer-link">Produits physiques</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-span-12 md:col-span-4">
              <div className="space-y-8">
                <p className="sm:text-heading-6 text-tagline-1 font-normal text-primary-50">Ressources</p>
                <ul className="sm:space-y-5 space-y-3">
                  <li>
                    <a href="/solutions/blog" className="footer-link">Blog</a>
                  </li>
                  <li>
                    <a href="/features" className="footer-link">Fonctionnalités</a>
                  </li>
                  <li>
                    <a href="/pricing" className="footer-link">Tarifs</a>
                  </li>
                  <li>
                    <a href="/solutions/avis-clients" className="footer-link">Avis clients</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-span-12 md:col-span-4">
              <div className="space-y-8">
                <p className="sm:text-heading-6 text-tagline-1 font-normal text-primary-50">
                  Entreprise
                </p>
                <ul className="sm:space-y-5 space-y-3">
                  <li>
                    <a href="/solutions/team" className="footer-link">À propos</a>
                  </li>
                  <li>
                    <a href="/solutions/career" className="footer-link">Carrières</a>
                  </li>
                  <li>
                    <a href="/solutions/contact" className="footer-link">Contact</a>
                  </li>
                  <li>
                    <a href="/privacy" className="footer-link">Confidentialité</a>
                  </li>
                  <li>
                    <a href="/terms" className="footer-link">Conditions d'utilisation</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-[26px] pb-[100px] text-center relative">
          <div className="footer-divider absolute top-0 left-0 right-0 w-0 origin-center mx-auto h-px bg-accent/10 dark:bg-stroke-4/10"></div>
          <p className="text-tagline-1 font-normal text-primary-50">
            Copyright &copy; {new Date().getFullYear()} Kiiako – La plateforme e-commerce pour vendeurs en Afrique
          </p>
        </div>
      </div>
    </footer>
  );
}
