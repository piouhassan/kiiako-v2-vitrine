import { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo.config';

export const metadata: Metadata = constructMetadata({
  title: 'Guide de démarrage – Kiiako',
  description: 'Tout ce qu\'il faut savoir pour lancer votre boutique en ligne avec Kiiako. Guide complet étape par étape pour créer votre boutique, ajouter vos produits et commencer à vendre.',
  url: 'https://www.kiiako.io/ressources/guides/demarrage',
  keywords: [
    'guide démarrage kiiako',
    'créer boutique en ligne',
    'tutoriel boutique e-commerce',
    'lancer boutique kiiako',
    'guide kiiako',
  ],
});

export default function GuideDemarrageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
