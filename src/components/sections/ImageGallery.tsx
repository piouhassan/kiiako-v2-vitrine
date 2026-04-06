'use client';

import { useTranslation } from 'react-i18next';

 export default function ImageGallery() {
   const { t } = useTranslation();

   return (
     <section className="image-gallery-section w-full bg-background-3 dark:bg-background-5 overflow-hidden">
       <div className="w-full py-12 md:py-16 lg:py-20">
         <div className="text-center mb-12 px-5 sm:px-8 md:px-[42px]">
           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary dark:text-accent mb-4">
             {t('home.imageGallery.title')}
           </h2>
           <p className="max-w-2xl mx-auto">
             {t('home.imageGallery.subtitle')}
           </p>
        </div>
        
        <div className="image-gallery-tilted-container w-full">
          <div className="image-gallery-row image-gallery-row-left w-full">
            <div className="image-gallery-track">
              {[...Array(48)].map((_, i) => (
                <div key={`left-${i}`} className="image-gallery-item bg-white dark:bg-black">
                  <img 
                    src={`/builder/theme${(i % 8) + 1}.png`}
                    alt={`Gallery image ${(i % 8) + 1}`}
                    className="w-full h-full object-cover object-top "
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.opacity = '0';
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
          
          <div className="image-gallery-row image-gallery-row-right w-full">
            <div className="image-gallery-track">
              {[...Array(48)].map((_, i) => (
                <div key={`right-${i}`} className="image-gallery-item bg-white dark:bg-black">
                  <img
                    src={`/builder/theme${(i % 8) + 1}.png`}
                    alt=""
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.opacity = '0';
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
