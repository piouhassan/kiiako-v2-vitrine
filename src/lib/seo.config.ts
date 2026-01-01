import { Metadata } from 'next';

export const SITE_CONFIG = {
  name: 'Kiiako',
  url: 'https://www.kiiako.io',
  ogImage: '/og-image.png',
  description:
    'Kiiako est une solution de création et de gestion de sites e-commerce conçue pour les entrepreneurs et commerçants en Afrique. Créez votre propre site de vente en ligne, personnalisez votre boutique, gérez produits, commandes, paiements Mobile Money, livraisons et stock depuis un seul espace.',
  keywords: [
    'solution de création de site e-commerce',
    'créer site de vente en ligne Afrique',
    'outil e-commerce Afrique',
    'plateforme de création de boutique en ligne',
    'paiement Mobile Money',
    'gestion de stock',
    'site marchand Afrique',
    'Kiiako',
    'boutique en ligne Afrique',
    'e-commerce Afrique',
    'vente en ligne',
  ],
};

export function constructMetadata({
  title = SITE_CONFIG.name,
  description = SITE_CONFIG.description,
  image = SITE_CONFIG.ogImage,
  url = SITE_CONFIG.url,
  keywords = SITE_CONFIG.keywords,
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  keywords?: string[];
  noIndex?: boolean;
} = {}): Metadata {
  const fullTitle = title === SITE_CONFIG.name ? title : `${title} | ${SITE_CONFIG.name}`;

  return {
    title: fullTitle,
    description,
    keywords,
    authors: [{ name: SITE_CONFIG.name }],
    creator: SITE_CONFIG.name,
    publisher: SITE_CONFIG.name,

    metadataBase: new URL(SITE_CONFIG.url),

    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-snippet': -1,
        'max-image-preview': 'large',
        'max-video-preview': -1,
      },
    },

    alternates: {
      canonical: url,
      languages: {
        'fr-FR': url,
        'en': url.replace('kiiako.io', 'kiiako.io/en'),
      },
    },

    openGraph: {
      type: 'website',
      locale: 'fr_FR',
      url,
      title: fullTitle,
      description,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },

    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
      creator: '@kiiako',
    },

    icons: {
      icon: [
        { url: '/logo.png' },
        { url: '/favicon.png', type: 'image/png', sizes: '512x512' },
      ],
      apple: [{ url: '/logo.png', sizes: '180x180' }],
    },

    category: 'technology',
  };
}

export const PAGE_SEO = {
  home: {
    title: 'Kiiako – Solution de création et de gestion de sites e-commerce en Afrique',
    description:
      'Kiiako est une solution de création et de gestion de sites e-commerce conçue pour les entrepreneurs et commerçants en Afrique. Créez votre propre site de vente en ligne, personnalisez votre boutique, gérez produits, commandes, paiements Mobile Money, livraisons et stock depuis un seul espace.',
    url: SITE_CONFIG.url,
  },
  tarifs: {
    title: 'Tarifs et plans – Kiiako',
    description:
      'Découvrez nos plans tarifaires adaptés à vos besoins. Du plan gratuit Essential au plan Enterprise sur mesure, trouvez la solution idéale pour votre boutique en ligne avec Kiiako.',
    url: `${SITE_CONFIG.url}/tarifs`,
    keywords: [
      'tarifs kiiako',
      'prix boutique en ligne',
      'plan e-commerce Afrique',
      'abonnement site marchand',
      'tarification e-commerce',
    ],
  },
  solutions: {
    creerBoutique: {
      title: 'Créer votre boutique en ligne – Kiiako',
      description:
        'Lancez votre boutique en ligne en quelques minutes avec Kiiako. Interface intuitive, templates modernes et personnalisation complète sans compétences techniques requises.',
      url: `${SITE_CONFIG.url}/solutions/creer-boutique`,
      keywords: [
        'créer boutique en ligne',
        'lancer site e-commerce',
        'boutique en ligne gratuite',
        'créer site de vente',
        'templates boutique',
      ],
    },
    mobileMoney: {
      title: 'Paiement Mobile Money – Orange Money, MTN, Moov – Kiiako',
      description:
        'Acceptez les paiements Mobile Money de toute l\'Afrique. Intégration complète avec Orange Money, MTN, Moov et tous les principaux opérateurs via Paydunya.',
      url: `${SITE_CONFIG.url}/solutions/mobile-money`,
      keywords: [
        'paiement mobile money',
        'orange money',
        'mtn mobile money',
        'moov money',
        'paiement mobile Afrique',
        'paydunya',
      ],
    },
    nomDeDomaine: {
      title: 'Nom de domaine personnalisé – Kiiako',
      description:
        'Obtenez votre nom de domaine personnalisé automatiquement avec Kiiako. Profitez d\'une adresse professionnelle pour votre boutique en ligne.',
      url: `${SITE_CONFIG.url}/solutions/nom-de-domaine`,
      keywords: [
        'nom de domaine',
        'domaine personnalisé',
        'adresse boutique en ligne',
        'domaine e-commerce',
      ],
    },
    personnalisation: {
      title: 'Personnalisation de boutique – Builder drag-and-drop – Kiiako',
      description:
        'Personnalisez votre boutique en ligne avec notre builder visuel drag-and-drop. Créez un design unique sans aucune compétence technique.',
      url: `${SITE_CONFIG.url}/solutions/personnalisation`,
      keywords: [
        'personnalisation boutique',
        'builder visuel',
        'drag and drop',
        'design boutique en ligne',
        'éditeur visuel',
      ],
    },
    produitsPhysiques: {
      title: 'Vente de produits physiques – Kiiako',
      description:
        'Vendez vos produits physiques en ligne avec Kiiako. Gestion des stocks, variations de produits, livraison intégrée et suivi des commandes.',
      url: `${SITE_CONFIG.url}/solutions/produits-physiques`,
      keywords: [
        'vente produits physiques',
        'gestion stock',
        'livraison produits',
        'e-commerce produits',
      ],
    },
    produitsDigitaux: {
      title: 'Vente de produits digitaux – Kiiako',
      description:
        'Vendez vos produits digitaux facilement avec Kiiako. Ebooks, formations, logiciels, musique - livraison automatique après paiement.',
      url: `${SITE_CONFIG.url}/solutions/produits-digitaux`,
      keywords: [
        'vente produits digitaux',
        'produits numériques',
        'ebook vente en ligne',
        'formations en ligne',
      ],
    },
    securitePaiements: {
      title: 'Sécurité des paiements – Transactions sécurisées – Kiiako',
      description:
        'Garantissez la sécurité des paiements de vos clients avec le cryptage SSL, la conformité PCI DSS et la protection contre la fraude.',
      url: `${SITE_CONFIG.url}/solutions/securite-paiements`,
      keywords: [
        'sécurité paiements',
        'paiement sécurisé',
        'SSL e-commerce',
        'PCI DSS',
        'protection fraude',
      ],
    },
    avisClients: {
      title: 'Avis clients et témoignages – Kiiako',
      description:
        'Collectez et affichez les avis de vos clients pour renforcer la confiance et augmenter vos ventes avec le système d\'avis clients de Kiiako.',
      url: `${SITE_CONFIG.url}/solutions/avis-clients`,
      keywords: [
        'avis clients',
        'témoignages clients',
        'reviews produits',
        'social proof',
      ],
    },
    blog: {
      title: 'Blog intégré – Content marketing – Kiiako',
      description:
        'Développez votre visibilité avec le blog intégré de Kiiako. Publiez du contenu, améliorez votre SEO et engagez vos clients.',
      url: `${SITE_CONFIG.url}/solutions/blog`,
      keywords: [
        'blog e-commerce',
        'content marketing',
        'SEO boutique',
        'blog intégré',
      ],
    },
    equipe: {
      title: 'Gestion d\'équipe – Collaborateurs – Kiiako',
      description:
        'Gérez votre équipe efficacement avec les rôles et permissions. Ajoutez des collaborateurs et attribuez des accès selon les besoins.',
      url: `${SITE_CONFIG.url}/solutions/equipe`,
      keywords: [
        'gestion équipe',
        'collaborateurs e-commerce',
        'rôles permissions',
        'multi-utilisateurs',
      ],
    },
    contact: {
      title: 'Contactez-nous – Support Kiiako',
      description:
        'Besoin d\'aide ou d\'informations ? Contactez notre équipe support Kiiako. Nous sommes là pour répondre à toutes vos questions.',
      url: `${SITE_CONFIG.url}/solutions/contact`,
      keywords: [
        'contact kiiako',
        'support client',
        'aide e-commerce',
        'service client',
      ],
    },
    career: {
      title: 'Carrières – Rejoignez l\'équipe Kiiako',
      description:
        'Rejoignez l\'équipe Kiiako et participez à la révolution du e-commerce en Afrique. Découvrez nos opportunités de carrière.',
      url: `${SITE_CONFIG.url}/solutions/career`,
      keywords: [
        'carrières kiiako',
        'emploi e-commerce',
        'jobs tech Afrique',
        'recrutement',
      ],
    },
    team: {
      title: 'Notre équipe – Kiiako',
      description:
        'Découvrez l\'équipe passionnée derrière Kiiako, dédiée à révolutionner le e-commerce en Afrique.',
      url: `${SITE_CONFIG.url}/solutions/team`,
      keywords: [
        'équipe kiiako',
        'qui sommes-nous',
        'à propos',
      ],
    },
  },
};
