export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
  bgColor: string;
  badgeColor: string;
}

export const paymentProcessSteps: ProcessStep[] = [
  {
    id: 1,
    title: "Client",
    description: "Sélectionne & confirme",
    icon: "Smartphone",
    color: "blue",
    bgColor: "bg-blue-100 dark:bg-blue-900/20",
    badgeColor: "bg-blue-500"
  },
  {
    id: 2,
    title: "Paydunya",
    description: "Redirection sécurisée",
    icon: "CreditCard",
    color: "purple",
    bgColor: "bg-purple-100 dark:bg-purple-900/20",
    badgeColor: "bg-purple-500"
  },
  {
    id: 3,
    title: "USSD",
    description: "Paiement mobile",
    icon: "Smartphone",
    color: "pink",
    bgColor: "bg-pink-100 dark:bg-pink-900/20",
    badgeColor: "bg-pink-500"
  },
  {
    id: 4,
    title: "Confirmation",
    description: "Instantanée",
    icon: "Check",
    color: "orange",
    bgColor: "bg-orange-100 dark:bg-orange-900/20",
    badgeColor: "bg-orange-500"
  },
  {
    id: 5,
    title: "Validation",
    description: "Commande validée",
    icon: "FileCheck",
    color: "teal",
    bgColor: "bg-teal-100 dark:bg-teal-900/20",
    badgeColor: "bg-teal-500"
  }
];

export const processFlowColors = [
  "from-blue-400 to-purple-400",
  "from-purple-400 to-pink-400", 
  "from-pink-400 to-orange-400",
  "from-orange-400 to-teal-400"
];

export const processConfig = {
  centralShield: {
    size: "w-48 h-48",
    gradient: "from-green-400 to-emerald-500",
    innerSize: "inset-2",
    icon: "Shield",
    iconSize: "w-12 h-12",
    text: "SÉCURITÉ"
  },
  stepCircle: {
    size: "w-16 h-16",
    badgeSize: "w-5 h-5",
    borderWidth: "border-4",
    shadow: "shadow-lg"
  },
  flowLine: {
    height: "h-1",
    dotSize: "w-2 h-2",
    gap: "gap-2"
  },
  message: {
    text: "Processus Paydunya sécurisé en 5 étapes",
    bgColor: "bg-green-50 dark:bg-green-900/20",
    borderColor: "border-green-200 dark:border-green-800",
    textColor: "text-green-700 dark:text-green-300",
    dotSize: "w-2 h-2"
  }
};
