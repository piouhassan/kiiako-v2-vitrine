'use client';

import { I18nextProvider } from 'react-i18next';
import i18n from '@/lib/locales/i18n';
import { ReactNode, useEffect, useState } from 'react';

export default function ClientI18nProvider({ children }: { children: ReactNode }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    // Optional: Return children without provider during SSR to avoid mismatch if needed, 
    // or just return null if we want to wait for hydration (but better to show something).
    // Returning children is usually safe if no translation is needed for initial paint layout parts 
    // that are server rendered, but here we want translations.
    // However, since i18n is client-only initialized, SSR won't have it. 
    // We stick to rendering children to allow pre-rendering.
    return <>{children}</>;
  }

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
