import About from '@/components/sections/About';
import ImageGallery from '@/components/sections/ImageGallery';
import Work from '@/components/sections/Work';
import Services from '@/components/sections/Services';
import Process from '@/components/sections/Process';
import Testimonials from '@/components/sections/Testimonials';
import Blog from '@/components/sections/Blog';
import CTA from '@/components/sections/CTA';
import Footer from '@/components/sections/Footer';
import HeaderHome from "@/components/sections/HeaderHome";
import HeroHome from "@/components/sections/HeroHome";

export default function Home() {
  return (
    <div className="bg-background-2 dark:bg-background-5 overflow-x-hidden">

      <HeaderHome />
      <main>
        <HeroHome />
        <About />
        <ImageGallery />
        <Work />
        <Services />
        <Process />
        <Testimonials />
        <Blog />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
