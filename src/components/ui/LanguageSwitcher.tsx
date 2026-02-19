'use client';

import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleLanguage = () => {
    const newLang = i18n.language === 'fr' ? 'en' : 'fr';
    i18n.changeLanguage(newLang);
    // Optionally force reload if hydration issues occur, 
    // but i18next-browser-languagedetector usually handles updates on next visit or via state
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center justify-center size-10 rounded-full bg-background-4 cursor-pointer dark:bg-background-6 hover:bg-background-3 dark:hover:bg-background-5 transition-all duration-300 border border-stroke-1 dark:border-stroke-7"
      aria-label="Toggle Language"
    >
      <span className="sr-only">Toggle Language</span>
      <span className="font-bold text-sm text-secondary dark:text-accent">
        {i18n.language === 'fr' ? 'EN' : 'FR'}
      </span>
    </button>
  );
}
