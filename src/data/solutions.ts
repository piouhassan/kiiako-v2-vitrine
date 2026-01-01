import {
  Store, Wand2, Globe, Languages, Lock, Package, Cloud,
  Wallet, Ticket, Star, Users, BarChart3
} from 'lucide-react';

export interface Solution {
  slug: string;
  title: string;
  description: string;
  icon: any;
  heroTitle: string;
  heroDescription: string;
  features: {
    title: string;
    description: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  benefits: {
    title: string;
    items: string[];
  };
  useCases: {
    title: string;
    description: string;
    cases: {
      title: string;
      description: string;
    }[];
  };
  cta: {
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
  };
}

export const solutions: Solution[] = [
  {
    slug: 'creer-boutique',
    title: 'Créer votre boutique',
    description: 'Lancez votre activité en ligne avec Kiiako',
    icon: Store,
    heroTitle: 'Créez votre boutique en ligne en quelques minutes',
    heroDescription: 'Avec Kiiako, lancez votre activité e-commerce facilement. Pas besoin de compétences techniques, notre solution intuitive vous accompagne à chaque étape.',
    features: {
      title: 'Tout ce dont vous avez besoin pour démarrer',
      description: 'Une solution complète pour créer et gérer votre boutique en ligne',
      items: [
        {
          title: 'Interface intuitive',
          description: 'Créez votre boutique sans aucune compétence technique grâce à notre interface simple et guidée.',
        },
        {
          title: 'Templates personnalisables',
          description: 'Choisissez parmi nos modèles professionnels et adaptez-les à votre marque en quelques clics.',
        },
        {
          title: 'Mise en ligne rapide',
          description: 'Votre boutique est prête à vendre en moins de 30 minutes. Commencez à générer des ventes rapidement.',
        },
        {
          title: 'Sans engagement',
          description: 'Commencez gratuitement, évoluez à votre rythme. Pas de frais cachés, pas de commission sur vos ventes.',
        },
      ],
    },
    benefits: {
      title: 'Pourquoi choisir Kiiako pour créer votre boutique ?',
      items: [
        'Créez votre boutique en ligne en quelques clics, sans compétences techniques',
        'Commencez gratuitement et évoluez selon vos besoins',
        'Bénéficiez d\'une solution adaptée aux réalités du marché africain',
        'Profitez d\'un support réactif et de guides détaillés',
        'Intégrez facilement les paiements Mobile Money',
        'Gérez tout depuis un tableau de bord centralisé',
      ],
    },
    useCases: {
      title: 'Parfait pour tous types d\'activités',
      description: 'Que vous vendiez des produits physiques ou digitaux, Kiiako s\'adapte à votre business',
      cases: [
        {
          title: 'Commerçants',
          description: 'Vendez vos produits physiques en ligne : vêtements, accessoires, produits alimentaires, cosmétiques...',
        },
        {
          title: 'Créateurs de contenu',
          description: 'Monétisez votre expertise : ebooks, formations, templates, photos, vidéos...',
        },
        {
          title: 'Artisans',
          description: 'Exposez et vendez vos créations artisanales : bijoux, décorations, art...',
        },
        {
          title: 'Entrepreneurs',
          description: 'Lancez votre startup e-commerce et testez votre marché rapidement.',
        },
      ],
    },
    cta: {
      title: 'Prêt à créer votre boutique ?',
      description: 'Rejoignez des milliers d\'entrepreneurs qui ont choisi Kiiako',
      buttonText: 'Créer ma boutique gratuitement',
      buttonLink: 'https://app.kiiako.io/register',
    },
  },
  {
    slug: 'personnalisation',
    title: 'Personnaliser l\'apparence',
    description: 'Choisissez un thème qui reflète votre marque',
    icon: Wand2,
    heroTitle: 'Personnalisez votre boutique à votre image',
    heroDescription: 'Créez une expérience unique pour vos clients avec des options de personnalisation complètes. Reflétez l\'identité de votre marque sans toucher une ligne de code.',
    features: {
      title: 'Des options de personnalisation avancées',
      description: 'Contrôlez chaque aspect visuel de votre boutique',
      items: [
        {
          title: 'Thèmes professionnels',
          description: 'Choisissez parmi notre collection de thèmes modernes, optimisés pour la conversion et responsive.',
        },
        {
          title: 'Couleurs et polices',
          description: 'Personnalisez les couleurs, polices et styles pour correspondre parfaitement à votre identité visuelle.',
        },
        {
          title: 'Logo et bannières',
          description: 'Ajoutez votre logo, bannières et images pour créer une boutique unique et professionnelle.',
        },
        {
          title: 'Mise en page flexible',
          description: 'Organisez vos sections comme vous le souhaitez avec notre éditeur visuel intuitif.',
        },
      ],
    },
    benefits: {
      title: 'Une boutique à votre image',
      items: [
        'Créez une identité visuelle forte qui vous distingue',
        'Modifiez l\'apparence en temps réel sans coder',
        'Adaptez automatiquement votre boutique à tous les écrans',
        'Changez de thème quand vous voulez sans perdre vos données',
        'Testez différents designs pour optimiser vos conversions',
        'Gardez une cohérence avec votre marque sur tous les canaux',
      ],
    },
    useCases: {
      title: 'Personnalisation pour chaque secteur',
      description: 'Des designs adaptés à votre domaine d\'activité',
      cases: [
        {
          title: 'Mode et accessoires',
          description: 'Thèmes élégants et minimalistes qui mettent en valeur vos produits.',
        },
        {
          title: 'Alimentation',
          description: 'Designs chaleureux et appétissants pour vos produits alimentaires.',
        },
        {
          title: 'Technologie',
          description: 'Templates modernes et épurés pour produits tech et digitaux.',
        },
        {
          title: 'Artisanat',
          description: 'Mises en page créatives qui reflètent l\'authenticité de vos créations.',
        },
      ],
    },
    cta: {
      title: 'Créez votre boutique unique',
      description: 'Personnalisez votre boutique et démarquez-vous de la concurrence',
      buttonText: 'Commencer gratuitement',
      buttonLink: 'https://app.kiiako.io/register',
    },
  },
  {
    slug: 'mobile-money',
    title: 'Paiement Mobile Money',
    description: 'Encaissez via des moyens de paiement adaptés à l\'Afrique',
    icon: Wallet,
    heroTitle: 'Acceptez les paiements Mobile Money facilement',
    heroDescription: 'Kiiako intègre les principaux moyens de paiement Mobile Money en Afrique. Vos clients paient comme ils en ont l\'habitude, vous recevez vos fonds rapidement.',
    features: {
      title: 'Paiements adaptés au marché africain',
      description: 'Une solution de paiement complète et sécurisée',
      items: [
        {
          title: 'Tous les opérateurs',
          description: 'Orange Money, MTN Mobile Money, Moov Money, Wave... Acceptez tous les moyens de paiement populaires.',
        },
        {
          title: 'Zéro commission',
          description: 'Kiiako ne prend aucune commission sur vos transactions. Vous gardez 100% de vos revenus.',
        },
        {
          title: 'Paiements sécurisés',
          description: 'Toutes les transactions sont sécurisées et cryptées pour protéger vos clients et votre entreprise.',
        },
        {
          title: 'Décaissement rapide',
          description: 'Recevez vos fonds directement sur votre compte Mobile Money ou bancaire sous 24-48h.',
        },
      ],
    },
    benefits: {
      title: 'Pourquoi intégrer Mobile Money ?',
      items: [
        'Touchez plus de clients avec leur moyen de paiement préféré',
        'Réduisez les abandons de panier grâce à des paiements familiers',
        'Éliminez les frais de commission sur vos ventes',
        'Recevez vos paiements rapidement et en toute sécurité',
        'Simplifiez la gestion de votre trésorerie',
        'Offrez une expérience de paiement locale et rassurante',
      ],
    },
    useCases: {
      title: 'Mobile Money pour tous les business',
      description: 'Une solution adaptée à chaque modèle d\'affaires',
      cases: [
        {
          title: 'E-commerce',
          description: 'Vendez vos produits en ligne et acceptez les paiements instantanés via Mobile Money.',
        },
        {
          title: 'Services digitaux',
          description: 'Monétisez vos formations, contenus et services avec des paiements simples.',
        },
        {
          title: 'Abonnements',
          description: 'Gérez des paiements récurrents pour vos services par abonnement.',
        },
        {
          title: 'Événements',
          description: 'Vendez des billets et acceptez les paiements Mobile Money en temps réel.',
        },
      ],
    },
    cta: {
      title: 'Activez Mobile Money sur votre boutique',
      description: 'Commencez à accepter les paiements dès aujourd\'hui',
      buttonText: 'Créer ma boutique',
      buttonLink: 'https://app.kiiako.io/register',
    },
  },
  {
    slug: 'rapports',
    title: 'Rapports détaillés',
    description: 'Analysez vos ventes et performances pour mieux piloter',
    icon: BarChart3,
    heroTitle: 'Pilotez votre activité avec des données précises',
    heroDescription: 'Prenez des décisions éclairées grâce à des rapports détaillés et des statistiques en temps réel. Suivez vos performances et optimisez votre croissance.',
    features: {
      title: 'Des insights pour développer votre business',
      description: 'Analysez, comprenez et optimisez vos performances',
      items: [
        {
          title: 'Tableau de bord en temps réel',
          description: 'Visualisez vos ventes, commandes et revenus en temps réel depuis un tableau de bord clair et intuitif.',
        },
        {
          title: 'Rapports de ventes',
          description: 'Analysez vos ventes par période, produit, région pour identifier vos best-sellers et opportunités.',
        },
        {
          title: 'Comportement clients',
          description: 'Comprenez vos clients : produits populaires, paniers moyens, taux de conversion, fidélité...',
        },
        {
          title: 'Gestion du stock',
          description: 'Suivez vos niveaux de stock, prévoyez les ruptures et optimisez vos approvisionnements.',
        },
      ],
    },
    benefits: {
      title: 'Les avantages de nos rapports',
      items: [
        'Prenez des décisions basées sur des données réelles',
        'Identifiez rapidement vos produits les plus rentables',
        'Optimisez votre stratégie marketing grâce aux insights clients',
        'Anticipez les tendances et adaptez votre offre',
        'Suivez votre croissance et fixez des objectifs mesurables',
        'Exportez vos données pour des analyses personnalisées',
      ],
    },
    useCases: {
      title: 'Des rapports adaptés à vos besoins',
      description: 'Suivez les métriques qui comptent pour votre business',
      cases: [
        {
          title: 'Analyse des ventes',
          description: 'Chiffre d\'affaires, nombre de commandes, panier moyen, évolution temporelle...',
        },
        {
          title: 'Performance produits',
          description: 'Produits les plus vendus, marges, rotations de stock, saisonnalité...',
        },
        {
          title: 'Insights clients',
          description: 'Nouveaux clients, clients récurrents, valeur vie client, segmentation...',
        },
        {
          title: 'Rapports financiers',
          description: 'Revenus, coûts, marges, paiements en attente, flux de trésorerie...',
        },
      ],
    },
    cta: {
      title: 'Accédez à vos rapports détaillés',
      description: 'Pilotez votre croissance avec des données précises',
      buttonText: 'Découvrir les rapports',
      buttonLink: 'https://app.kiiako.io/register',
    },
  },
  {
    slug: 'nom-de-domaine',
    title: 'Nom de domaine personnalisé',
    description: 'Rendez votre boutique unique avec un domaine à votre nom',
    icon: Globe,
    heroTitle: 'Un nom de domaine professionnel pour votre boutique',
    heroDescription: 'Renforcez votre crédibilité avec un nom de domaine personnalisé. Construisez votre marque et facilitez la mémorisation de votre boutique.',
    features: {
      title: 'Votre boutique, votre domaine',
      description: 'Une présence professionnelle en ligne',
      items: [
        {
          title: 'Domaine personnalisé',
          description: 'Utilisez votre propre nom de domaine (exemple: votreboutique.com) au lieu d\'un sous-domaine.',
        },
        {
          title: 'Configuration simple',
          description: 'Connectez votre domaine en quelques clics, nous nous occupons de la configuration technique.',
        },
        {
          title: 'Certificat SSL inclus',
          description: 'Sécurisez votre boutique avec un certificat SSL gratuit et rassurez vos clients.',
        },
        {
          title: 'Emails professionnels',
          description: 'Créez des adresses email professionnelles liées à votre domaine (contact@votreboutique.com).',
        },
      ],
    },
    benefits: {
      title: 'Pourquoi avoir un domaine personnalisé ?',
      items: [
        'Renforcez votre crédibilité et votre image professionnelle',
        'Facilitez la mémorisation de votre boutique par vos clients',
        'Améliorez votre référencement sur les moteurs de recherche',
        'Construisez une marque forte et indépendante',
        'Gardez le contrôle total de votre présence en ligne',
        'Créez des adresses email professionnelles associées',
      ],
    },
    useCases: {
      title: 'Un domaine pour chaque business',
      description: 'Renforcez votre présence en ligne',
      cases: [
        {
          title: 'Nouvelles boutiques',
          description: 'Démarrez avec une image professionnelle dès le premier jour.',
        },
        {
          title: 'Marques établies',
          description: 'Consolidez votre identité de marque avec un domaine cohérent.',
        },
        {
          title: 'Multi-boutiques',
          description: 'Gérez plusieurs domaines pour différentes lignes de produits.',
        },
        {
          title: 'Expansion internationale',
          description: 'Utilisez des domaines locaux pour toucher différents marchés.',
        },
      ],
    },
    cta: {
      title: 'Obtenez votre domaine personnalisé',
      description: 'Renforcez votre marque avec un domaine professionnel',
      buttonText: 'Configurer mon domaine',
      buttonLink: 'https://app.kiiako.io/register',
    },
  },
  {
    slug: 'multilingue',
    title: 'Boutique multilingue',
    description: 'Touchez une clientèle internationale grâce à plusieurs langues',
    icon: Languages,
    heroTitle: 'Vendez dans plusieurs langues',
    heroDescription: 'Élargissez votre marché en proposant votre boutique dans différentes langues. Offrez une expérience localisée à vos clients partout en Afrique et au-delà.',
    features: {
      title: 'Une boutique, plusieurs langues',
      description: 'Touchez plus de clients avec une expérience multilingue',
      items: [
        {
          title: 'Langues multiples',
          description: 'Proposez votre boutique en français, anglais, et autres langues selon vos besoins.',
        },
        {
          title: 'Traduction facile',
          description: 'Traduisez vos produits, descriptions et pages en quelques clics depuis votre tableau de bord.',
        },
        {
          title: 'Détection automatique',
          description: 'La langue s\'adapte automatiquement selon la localisation de vos visiteurs.',
        },
        {
          title: 'Sélecteur de langue',
          description: 'Vos clients peuvent facilement changer de langue via un sélecteur visible.',
        },
      ],
    },
    benefits: {
      title: 'Les avantages du multilingue',
      items: [
        'Touchez des clients dans toute l\'Afrique francophone et anglophone',
        'Augmentez vos ventes en proposant une expérience localisée',
        'Améliorez votre référencement dans différentes régions',
        'Réduisez les barrières linguistiques et facilitez l\'achat',
        'Développez votre marque à l\'international',
        'Offrez une meilleure expérience client',
      ],
    },
    useCases: {
      title: 'Le multilingue pour tous',
      description: 'Adaptez votre boutique à vos marchés cibles',
      cases: [
        {
          title: 'Commerce transfrontalier',
          description: 'Vendez dans plusieurs pays africains avec des langues adaptées.',
        },
        {
          title: 'Produits digitaux',
          description: 'Touchez une audience internationale pour vos formations et contenus.',
        },
        {
          title: 'Expansion régionale',
          description: 'Commencez local puis étendez-vous progressivement.',
        },
        {
          title: 'Marchés bilingues',
          description: 'Servez efficacement les zones francophones et anglophones.',
        },
      ],
    },
    cta: {
      title: 'Activez le multilingue',
      description: 'Élargissez votre marché avec plusieurs langues',
      buttonText: 'Découvrir le multilingue',
      buttonLink: 'https://app.kiiako.io/register',
    },
  },
];

export function getSolutionBySlug(slug: string): Solution | undefined {
  return solutions.find(solution => solution.slug === slug);
}

export function getAllSolutionSlugs(): string[] {
  return solutions.map(solution => solution.slug);
}
