"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';

interface FullscreenLoaderProps {
  minDisplayTime?: number;
  showProgress?: boolean;
  message?: string;
}

export default function FullscreenLoader({ 
  minDisplayTime = 1500,
  showProgress = true,
  message = "CHARGEMENT"
}: FullscreenLoaderProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  useEffect(() => {
    const startTime = Date.now();
    
    // Eased count-up
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const diff = 100 - prev;
        const inc = Math.max(0.5, diff * 0.1); 
        return Math.min(prev + inc, 100);
      });
    }, 30);

    const checkComplete = () => {
      const elapsed = Date.now() - startTime;
      if (elapsed >= minDisplayTime && progress >= 100) {
        setFadeOut(true);
        setTimeout(() => { document.body.style.overflow = ''; }, 600);
        setTimeout(() => setIsLoading(false), 800); 
      } else if (progress >= 100) {
        setTimeout(checkComplete, 50);
      }
    };

    const timeout = setTimeout(checkComplete, 50);
    const safetyTimeout = setTimeout(() => {
      setFadeOut(true);
      document.body.style.overflow = '';
      setTimeout(() => setIsLoading(false), 800);
      clearInterval(interval);
    }, minDisplayTime + 4000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
      clearTimeout(safetyTimeout);
    };
  }, [minDisplayTime, progress]);

  if (!isLoading) return null;

  return (
    <>
      <div 
        className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white transition-opacity duration-700 ease-in-out ${fadeOut ? 'opacity-0' : 'opacity-100'}`}
        aria-busy="true"
        aria-label="Chargement en cours"
      >
        {/* Background - Technical Swiss Grid (Light Grey) */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.4]">
            {/* Horizontal Lines */}
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:100%_4rem]"></div>
            {/* Vertical Lines */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:4rem_100%]"></div>
        </div>

        {/* LOGO - Fixed Top Left Anchor - Colored Logo */}
        <div className="absolute top-8 left-8 md:top-12 md:left-12 z-20">
           <div className="relative w-30 h-30 md:w-30 md:h-30">
              <Image
                src="/logo.png"
                alt="Kiiako"
                fill
                className="object-contain" 
                priority
              />
           </div>
        </div>

        {/* STATUS - Fixed Bottom Right Anchor - Dark Text */}
        <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 z-20 flex items-center gap-2">
            <span className="w-2 h-2 bg-[#299cdb] rounded-full animate-pulse"></span>
            <span className="text-slate-900 font-mono text-xs tracking-[0.2em] uppercase">{message}</span>
        </div>

        {/* CENTERPIECE - Giant Typography - Brand Blue */}
        <div className="relative z-10 flex items-baseline leading-none select-none mix-blend-multiply">
           <span className="text-[20vw] font-bold text-[#299cdb] tracking-tighter">
             {Math.floor(progress)}
           </span>
           <span className="text-[4vw] font-medium text-[#299cdb]/60 ml-2">
             %
           </span>
        </div>

        {/* PROGRESS BAR - Minimalist Line at bottom */}
         <div className="absolute bottom-0 left-0 h-1 bg-slate-100 w-full">
            <div 
              className="h-full bg-[#299cdb] transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
         </div>

      </div>
    </>
  );
}
