'use client';

import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { FadeIn } from '@/components/animations/FadeIn';
import { ScaleIn } from '@/components/animations/ScaleIn';
import {
  MessageSquare, Truck, Store, User, CheckCircle, Zap,
  Wallet, MapPin, ArrowRight, ShieldCheck, BarChart3, Package,
  Plus, Phone, Users, Settings
} from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import WhatsAppSimulator from '@/components/ui/WhatsAppSimulator';
import { useTranslation, Trans } from 'react-i18next';

const PHONE = '+228 98 28 65 54';
const WA_LINK = `https://wa.me/22898286554`;

function TypewriterText({ phrases }: { phrases: string[] }) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!phrases || phrases.length === 0) return;
    const current = phrases[phraseIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 55);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 30);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setPhraseIndex((i) => (i + 1) % phrases.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, phraseIndex, phrases]);

  return (
    <span className="text-green-500">
      {displayed}
      <span className="animate-pulse font-thin">|</span>
    </span>
  );
}

const commands = [
  { cmd: "bonjour", desc: "Menu de bienvenue et liste de toutes les commandes disponibles" },
  { cmd: "missions", desc: "Voir toutes vos missions assignées en attente" },
  { cmd: "mission CODE", desc: "Voir les détails complets d'une mission spécifique" },
  { cmd: "livraison CODE", desc: "Signaler la prise en charge du colis — reçoit l'adresse GPS du client" },
  { cmd: "livré CODE", desc: "Confirmer la livraison — déclenche la demande de confirmation au client" },
  { cmd: "historique", desc: "Voir vos 10 dernières missions terminées" },
  { cmd: "solde", desc: "Consulter votre solde wallet en temps réel" },
  { cmd: "retrait MONTANT", desc: "Initier un retrait Mobile Money avec sélection de l'opérateur" },
  { cmd: "info", desc: "Voir votre profil, votre note, vos statistiques et votre solde" },
  { cmd: "disponible", desc: "Activer votre disponibilité pour recevoir des missions" },
  { cmd: "indisponible", desc: "Mettre en pause — vous ne recevez plus de missions" },
  { cmd: "boutiques", desc: "Voir les boutiques associées à vos zones de livraison" },
];

type RegistrationMessage = {
  step: string;
  who: string;
  msg: string;
  type: string;
  btns?: string[];
};

const registrationFlow: RegistrationMessage[] = [
  { step: "1", who: "Bot", msg: "Bienvenue chez Kiiako 🚀\nQue souhaitez-vous faire ?", type: "btn", btns: ["Devenir Livreur", "Inscrire ma Boutique"] },
  { step: "2", who: "Vous", msg: "Devenir Livreur", type: "reply" },
  { step: "3", who: "Bot", msg: "Quel est votre prénom ?", type: "text" },
  { step: "4", who: "Vous", msg: "Jean-Marc", type: "reply" },
  { step: "5", who: "Bot", msg: "Envoyez une photo de vous (portrait)", type: "text" },
  { step: "6", who: "Vous", msg: "📷 Photo envoyée", type: "reply" },
  { step: "7", who: "Bot", msg: "Envoyez votre pièce d'identité", type: "text" },
  { step: "8", who: "Bot", msg: "✅ Compte créé ! Votre dossier est en cours de vérification.", type: "success" },
];

const shopCommands = [
  { icon: Package, label: "Mes Produits", detail: "Liste de vos produits actifs avec prix et stock" },
  { icon: ArrowRight, label: "Mes Commandes", detail: "Vos 10 commandes récentes avec statuts et montants" },
  { icon: Wallet, label: "Mon Solde", detail: "Solde disponible et montants bloqués de votre wallet" },
  { icon: Store, label: "Mon Site", detail: "Lien direct vers votre boutique e-commerce en ligne" },
];

export default function BotWhatsAppPage() {
  const { t } = useTranslation();

  const cyclingPhrases = t('botWhatsApp.phrases', { returnObjects: true }) as string[];

  const inscriptionItemsText = t('botWhatsApp.inscription.items', { returnObjects: true }) as any[];
  const inscriptionItemsList = [
    { icon: Truck, ...inscriptionItemsText[0] },
    { icon: Store, ...inscriptionItemsText[1] }
  ];

  const shopCommandsList = [
    { icon: Package, label: t('botWhatsApp.marchands.items.0.label'), detail: t('botWhatsApp.marchands.items.0.detail') },
    { icon: ArrowRight, label: t('botWhatsApp.marchands.items.1.label'), detail: t('botWhatsApp.marchands.items.1.detail') },
    { icon: Wallet, label: t('botWhatsApp.marchands.items.2.label'), detail: t('botWhatsApp.marchands.items.2.detail') },
    { icon: Store, label: t('botWhatsApp.marchands.items.3.label'), detail: t('botWhatsApp.marchands.items.3.detail') },
  ];

  const securityItemsText = t('botWhatsApp.security.items', { returnObjects: true }) as any[];
  const securityItemsList = [
    { icon: ShieldCheck, ...securityItemsText[0] },
    { icon: Zap, ...securityItemsText[1] },
    { icon: BarChart3, ...securityItemsText[2] },
    { icon: MapPin, ...securityItemsText[3] },
  ];

  const litigeStepsList = t('botWhatsApp.litiges.steps', { returnObjects: true }) as string[];

  return (
    <div className="bg-background-1 dark:bg-background-6">
      <Header />
      <main>

        {/* Hero */}
        <section className="pb-20 pt-24 md:pb-28 md:pt-36 lg:pt-44">
          <div className="main-container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <FadeIn delay={0.1}>
                  <span className="badge bg-green-500/10 text-green-600 dark:text-green-400">{t('botWhatsApp.hero.badge')}</span>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <h1 className="text-heading-2 lg:text-heading-1">
                    {t('botWhatsApp.hero.title')}
                    <span className="block">
                      <TypewriterText phrases={cyclingPhrases} />
                    </span>
                  </h1>
                </FadeIn>
                <FadeIn delay={0.3}>
                  <p className="text-lg text-secondary/70 dark:text-accent/70 leading-relaxed">
                    {t('botWhatsApp.hero.subtitle')}
                  </p>
                  <p className="mt-4 text-sm font-medium text-green-600 dark:text-green-400 flex items-center gap-2">
                    <span className="inline-block size-2 rounded-full bg-green-500 animate-pulse" />
                    {t('botWhatsApp.hero.available')}{' '}
                    <a href={WA_LINK} target="_blank" rel="noreferrer" className="underline underline-offset-2 hover:text-green-500 transition-colors">{PHONE}</a>
                  </p>
                  <div className="mt-6">
                    <a href={WA_LINK} target="_blank" rel="noreferrer"
                     className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 transition-colors text-white  px-7 h-13 rounded-full">
                      <MessageSquare className="size-5" /> {t('botWhatsApp.hero.try')}
                    </a>
                  </div>
                </FadeIn>
              </div>
              <FadeIn delay={0.3} className="flex items-center justify-center">
                <img
                  src="/images/wa-bot-phone.png"
                  alt="Kiiako Bot sur WhatsApp"
                  className="max-w-[500px] w-full"
                />
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Qui peut l'utiliser */}
        <section className="py-20 bg-background-3 dark:bg-background-7">
          <div className="main-container">
            <div className="text-center mb-14">
              <FadeIn>
                <h2 className="text-heading-3  mb-4">{t('botWhatsApp.usage.title')}</h2>
                <p className="text-secondary/60 dark:text-accent/60 max-w-xl mx-auto">{t('botWhatsApp.usage.subtitle')}</p>
              </FadeIn>
            </div>
            <div className="max-w-3xl mx-auto">
              <div className="bg-[#F6F6F6] dark:bg-[#111B21] rounded-[36px] overflow-hidden shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-stroke-1 dark:border-white/5 relative">
                
                {/* iOS Navigation Bar */}
                <div className="bg-[#F6F6F6]/90 dark:bg-[#111B21]/90 backdrop-blur-md px-6 pt-6 pb-3 flex items-center justify-between border-b border-gray-300 dark:border-white/10 sticky top-0 z-10">
                  <span className="text-[#007AFF] text-[17px]">{t('botWhatsApp.usage.ios.edit', 'Modifier')}</span>
                  <span className="font-bold text-[17px]">{t('botWhatsApp.usage.ios.title', 'Discussions')}</span>
                  <span className="text-[#007AFF] text-[17px]"><Plus className="w-6 h-6" /></span>
                </div>

                {/* Discussions List */}
                <div className="bg-white dark:bg-[#111B21] pl-6">
                  {[
                    {
                      icon: Truck,
                      color: "text-white",
                      bg: "bg-[#25D366]",
                      key: "livreurs",
                      time: "10:42",
                      unread: 2,
                    },
                    {
                      icon: Store,
                      color: "text-white",
                      bg: "bg-[#34B7F1]",
                      key: "marchands",
                      time: t('common.dates.yesterday', 'Hier'),
                      unread: 0,
                    },
                    {
                      icon: User,
                      color: "text-white",
                      bg: "bg-[#8E8E93]",
                      key: "nouveaux",
                      time: t('common.dates.monday', 'Lundi'),
                      unread: 1,
                    },
                  ].map((chat, i) => (
                    <FadeIn key={i} delay={i * 0.1}>
                      <div className={`flex items-start gap-4 py-4 pr-6 cursor-pointer hover:bg-black/5 dark:hover:bg-white/5 transition-colors ${i !== 2 ? 'border-b border-gray-200 dark:border-white/10' : ''}`}>
                        {/* Avatar */}
                        <div className={`w-[52px] h-[52px] rounded-full ${chat.bg} flex items-center justify-center shrink-0 shadow-sm`}>
                          <chat.icon className={`w-7 h-7 ${chat.color}`} />
                        </div>
                        
                        {/* Message Content */}
                        <div className="flex-1 min-w-0 pt-0.5">
                          <div className="flex items-center justify-between mb-0.5">
                            <h3 className="font-semibold text-[17px] text-black dark:text-white truncate pr-2">{t(`botWhatsApp.usage.items.${chat.key}.title`)}</h3>
                            <span className={`text-[15px] shrink-0 ${chat.unread > 0 ? 'text-[#007AFF]' : 'text-[#8E8E93] dark:text-[#8696A0]'}`}>{chat.time}</span>
                          </div>
                          
                          <div className="flex items-start justify-between gap-2">
                            <p className="text-[15px] text-[#8E8E93] dark:text-[#8696A0] line-clamp-2 leading-snug pr-4">
                              {t(`botWhatsApp.usage.items.${chat.key}.desc`)}
                            </p>
                            {chat.unread > 0 && (
                              <div className="bg-[#007AFF] text-white text-[13px] font-bold px-2 py-0.5 rounded-full flex items-center justify-center shrink-0 mt-1">
                                {chat.unread}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </FadeIn>
                  ))}
                </div>

                {/* Bottom Bar iOS */}
                <div className="bg-[#F6F6F6]/90 dark:bg-[#111B21]/90 backdrop-blur-md border-t border-gray-300 dark:border-white/10 flex justify-around items-center pt-2 pb-6 px-4">
                   {[
                     t('botWhatsApp.usage.ios.status', 'Statut'),
                     t('botWhatsApp.usage.ios.calls', 'Appels'),
                     t('botWhatsApp.usage.ios.community', 'Communauté'),
                     t('botWhatsApp.usage.ios.chats', 'Discussions'),
                     t('botWhatsApp.usage.ios.settings', 'Réglages')
                   ].map((tab, idx) => (
                     <div key={idx} className={`flex flex-col items-center gap-1 ${idx === 3 ? 'text-[#007AFF]' : 'text-[#8E8E93]'}`}>
                       <div className={`w-7 h-7 rounded-full flex items-center justify-center ${idx === 3 ? 'bg-[#007AFF]/10' : ''}`}>
                         {idx === 0 && <div className="w-5 h-5 rounded-full border-2 border-current border-dashed" />}
                         {idx === 1 && <Phone className="w-5 h-5" />}
                         {idx === 2 && <Users className="w-6 h-6" />}
                         {idx === 3 && <MessageSquare className="w-5 h-5" fill="currentColor" />}
                         {idx === 4 && <Settings className="w-5 h-5" />}
                       </div>
                       <span className="text-[10px] font-medium">{tab}</span>
                     </div>
                   ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Livreurs : commandes */}
        <section className="py-24">
          <div className="main-container">
            <div className="grid lg:grid-cols-2 gap-16 items-start relative">
              <div className="lg:sticky lg:top-32 z-10">
                <FadeIn delay={0.1} className="space-y-6">
                  <span className="badge bg-primary-500/10 text-primary-500">{t('botWhatsApp.livreurs.badge')}</span>
                <h2 className="text-heading-3">{t('botWhatsApp.livreurs.title')}</h2>
                <p className="text-secondary/70 dark:text-accent/70 leading-relaxed">
                  {t('botWhatsApp.livreurs.desc')}
                </p>
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-green-500/5 border border-green-500/20">
                  <Zap className="size-5 text-green-500 shrink-0" />
                  <p className="text-sm text-secondary/70 dark:text-accent/70">{t('botWhatsApp.livreurs.counter')}</p>
                </div>
              </FadeIn>
              </div>
              <FadeIn delay={0.2}>
                <div className="space-y-2">
                  {commands.map((c, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-background-3 dark:bg-background-7 border border-stroke-1 dark:border-white/5">
                      <code className="text-[12px] font-bold text-green-600 dark:text-green-400 bg-green-500/10 px-2.5 py-1 rounded-lg whitespace-nowrap shrink-0">{c.cmd}</code>
                      <p className="text-sm text-secondary/70 dark:text-accent/70">{c.desc}</p>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Mission flow — livreur */}
        <section className="py-20 bg-background-3 dark:bg-background-7">
          <div className="main-container max-w-4xl">
            <div className="text-center mb-14">
              <FadeIn>
                <h2 className="text-heading-3  mb-3">{t('botWhatsApp.flux.title')}</h2>
                <p className="text-secondary/60 dark:text-accent/60 max-w-xl mx-auto">{t('botWhatsApp.flux.subtitle')}</p>
              </FadeIn>
            </div>
            <div className="columns-1 md:columns-2 gap-6 w-full">
              {[
                {
                  who: "🚚 Livreur",
                  msg: `livraison CMD-2024`,
                  response: "Mission prise en charge ✅\n👤 Client : Ama Koné\n📞 +229 97 00 00 00\n📍 Adresse : Akpakpa, Bâtiment Bleu\n📏 Distance : 3.2 km\n💰 Frais : 1 040 FCFA\n\n📍 [Localisation GPS envoyée]",
                  color: "border-primary-500/30"
                },
                {
                  who: "🚚 Livreur",
                  msg: `livré CMD-2024`,
                  response: "Livraison enregistrée.\nLe client va recevoir une demande de confirmation.",
                  color: "border-blue-500/30"
                },
                {
                  who: "👤 Client (Ama)",
                  msg: "[Bouton] ✅ Oui, bien reçu",
                  response: "Merci. Votre confirmation a été enregistrée.",
                  color: "border-emerald-500/30"
                },
                {
                  who: "🚚 Livreur (en retour)",
                  msg: "",
                  response: "Mission CMD-2024 confirmée ✅\nVotre gain a été crédité.\n\nTapez solde pour consulter votre solde.",
                  color: "border-yellow-500/30"
                },
              ].map((step, i) => (
                <FadeIn key={i} delay={i * 0.1} className="break-inside-avoid mb-6">
                  <div className={`p-6 rounded-[24px] bg-white dark:bg-background-6  space-y-3`}>
                    <p className="text-xs font-bold text-secondary/40 dark:text-accent/40 uppercase tracking-widest">{step.who}</p>
                    {step.msg && (
                      <div className="bg-green-500/10 border border-green-500/20 rounded-xl px-4 py-2.5 text-sm font-mono text-green-700 dark:text-green-400 inline-block">
                        {step.msg}
                      </div>
                    )}
                    <div className="bg-background-3 dark:bg-background-7 rounded-xl px-4 py-3 text-sm text-secondary/70 dark:text-accent/70 whitespace-pre-line">
                      {step.response}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Section Inscription */}
        <section className="py-24">
          <div className="main-container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <FadeIn delay={0.1} className="space-y-6">
                <span className="badge bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">{t('botWhatsApp.inscription.badge')}</span>
                <h2 className="text-heading-3 ">{t('botWhatsApp.inscription.title')}</h2>
                <p className="text-secondary/70 dark:text-accent/70 leading-relaxed">
                  {t('botWhatsApp.inscription.desc')}
                </p>
                <div className="space-y-4">
                  {inscriptionItemsList.map((item, i) => (
                    <div key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-background-3 dark:bg-background-7 border border-stroke-1 dark:border-white/5">
                      <div className="size-10 rounded-xl bg-green-500/10 flex items-center justify-center shrink-0">
                        <item.icon className="size-5 text-green-500" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm mb-1">{item.label}</p>
                        <p className="text-xs text-secondary/60 dark:text-accent/60">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </FadeIn>

              {/* Chat simulation */}
              <FadeIn delay={0.2}>
                <div className="bg-[#ECE5DD] dark:bg-[#1a1a1a] rounded-[32px] p-6 space-y-3 max-w-sm mx-auto shadow-xl">
                  <div className="text-center text-xs text-gray-500 mb-4">Kiiako Bot • WhatsApp</div>
                  {registrationFlow.map((msg, i) => (
                    <div key={i} className={`flex ${msg.who === "Vous" ? "justify-end" : "justify-start"}`}>
                      <div className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm shadow-sm ${
                        msg.who === "Vous"
                          ? "bg-[#DCF8C6] dark:bg-green-900 text-gray-800 dark:text-white rounded-br-md"
                          : msg.type === "success"
                          ? "bg-white dark:bg-background-6 text-emerald-600 border border-emerald-200 dark:border-emerald-800 rounded-bl-md"
                          : "bg-white dark:bg-background-6 text-gray-800 dark:text-white rounded-bl-md"
                      }`}>
                        {msg.type === "btn" ? (
                          <div className="space-y-2">
                            <p className="text-xs">{msg.msg}</p>
                            <div className="flex flex-col gap-1.5 mt-2">
                              {msg.btns?.map((btn, j) => (
                                <div key={j} className="text-center text-xs text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800 rounded-lg py-1.5 px-3">{btn}</div>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <p className="text-xs whitespace-pre-line">{msg.msg}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Section Marchands */}
        <section className="py-20 bg-background-3 dark:bg-background-7">
          <div className="main-container">
            <div className="text-center mb-14">
              <FadeIn>
                <span className="badge bg-blue-500/10 text-blue-600 dark:text-blue-400 mb-4 inline-block">{t('botWhatsApp.marchands.badge')}</span>
                <h2 className="text-heading-3  mb-3">{t('botWhatsApp.marchands.title')}</h2>
                <p className="text-secondary/60 dark:text-accent/60 max-w-xl mx-auto">{t('botWhatsApp.marchands.subtitle')}</p>
              </FadeIn>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
              {shopCommandsList.map((cmd, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="p-7 rounded-[24px] bg-white dark:bg-background-6 border border-stroke-1 dark:border-white/5 space-y-4 h-full text-center">
                    <div className="size-11 rounded-2xl bg-green-500/10 flex items-center justify-center mx-auto">
                      <cmd.icon className="size-5 text-green-500" />
                    </div>
                    <p className="font-bold text-sm">{cmd.label}</p>
                    <p className="text-xs text-secondary/55 dark:text-accent/55 leading-relaxed">{cmd.detail}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Sécurité & Technique */}
        <section className="py-24">
          <div className="main-container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <FadeIn delay={0.1} className="space-y-6">
                <h2 className="text-heading-3">{t('botWhatsApp.security.title')}</h2>
                <p className="text-secondary/70 dark:text-accent/70 leading-relaxed">
                  {t('botWhatsApp.security.desc')}
                </p>
                <div className="space-y-4">
                  {securityItemsList.map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="size-9 rounded-xl bg-green-500/10 flex items-center justify-center shrink-0">
                        <item.icon className="size-4 text-green-500" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm">{item.title}</p>
                        <p className="text-xs text-secondary/60 dark:text-accent/60 mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="space-y-4">
                  <div className="p-8 rounded-[32px] bg-background-3 dark:bg-background-7 border border-stroke-1 dark:border-white/5 space-y-5">
                    <h3 className="text-lg">{t('botWhatsApp.litiges.title')}</h3>
                    <p className="text-sm text-secondary/60 dark:text-accent/60 leading-relaxed">
                      {t('botWhatsApp.litiges.desc')}
                    </p>
                    <div className="space-y-3">
                      {litigeStepsList.map((step, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <CheckCircle className="size-4 text-green-500 shrink-0" />
                          <p className="text-sm text-secondary/70 dark:text-accent/70">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Section Simulateur Interactif */}
        <section className="py-32 bg-primary-500/5 dark:bg-primary-500/10 relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/20 blur-[120px] rounded-full pointer-events-none"></div>
          
          <div className="main-container relative z-10">
            <div className="text-center mb-16">
              <FadeIn>
                <span className="badge bg-green-500/10 text-green-600 dark:text-green-400 mb-4 inline-block">{t('botWhatsApp.simulator.badge')}</span>
                <h2 className="text-heading-3  mb-4">{t('botWhatsApp.simulator.title')}</h2>
                <p className="text-secondary/70 dark:text-accent/70 leading-relaxed text-lg max-w-2xl mx-auto">
                  {t('botWhatsApp.simulator.desc')}
                </p>
              </FadeIn>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
              {/* Left feature */}
              <FadeIn delay={0.2} className="order-2 lg:order-1 flex justify-end">
                <div className="bg-white/80 dark:bg-background-6/80 backdrop-blur-xl rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-none border border-stroke-1/50 dark:border-white/5 w-full lg:max-w-sm relative z-20">
                    <div className="size-14 rounded-2xl bg-green-500/10 flex items-center justify-center mb-6">
                      <MessageSquare className="size-7 text-green-600" />
                    </div>
                    <h4 className="text-xl mb-3">{t('botWhatsApp.simulator.keyword.title')}</h4>
                    <p className="text-[15px] text-secondary/70 dark:text-accent/70 leading-relaxed">
                      <Trans i18nKey="botWhatsApp.simulator.keyword.desc" components={{ 1: <code className="bg-background-3 dark:bg-background-7 px-2 py-1 rounded-md italic font-semibold text-green-600 dark:text-green-400" />, 2: <code className="bg-background-3 dark:bg-background-7 px-2 py-1 rounded-md italic font-semibold text-green-600 dark:text-green-400" /> }} />
                    </p>
                </div>
              </FadeIn>

              {/* Center Phone */}
              <ScaleIn delay={0.2} duration={1} initialScale={0.85} className="flex justify-center order-1 lg:order-2 z-30">
                <div className="transform hover:scale-[1.02] transition-transform duration-500">
                  <WhatsAppSimulator />
                </div>
              </ScaleIn>

              {/* Right feature */}
              <FadeIn delay={0.4} className="order-3 lg:order-3 flex justify-start">
                <div className="bg-white/80 dark:bg-background-6/80 backdrop-blur-xl rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-none border border-stroke-1/50 dark:border-white/5 w-full lg:max-w-sm relative z-20">
                    <div className="size-14 rounded-2xl bg-green-500/10 flex items-center justify-center mb-6">
                      <CheckCircle className="size-7 text-green-600" />
                    </div>
                    <h4 className="text-xl mb-3">{t('botWhatsApp.simulator.interactions.title')}</h4>
                    <p className="text-[15px] text-secondary/70 dark:text-accent/70 leading-relaxed">
                      {t('botWhatsApp.simulator.interactions.desc')}
                    </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>


        {/* CTA */}
        <section className="py-20 bg-background-3 dark:bg-background-7">
          <div className="main-container">
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <FadeIn delay={0.1}>
                <div className="p-8 rounded-[32px] bg-primary-500/5 dark:bg-primary-500/10 border border-gray-500/20 space-y-4 text-center">
                  <div className="size-14 mx-auto bg-primary-500/10 dark:bg-primary-500/20 flex items-center justify-center rounded-2xl">
                    <Truck className="size-6 text-primary-500" />
                  </div>
                  <h3 className="font-bold text-lg text-secondary dark:text-accent">{t('botWhatsApp.cta.livreur.title')}</h3>
                  <p className="text-secondary/70 dark:text-accent/70 text-sm">{t('botWhatsApp.cta.livreur.description')}</p>
                  <Link href="/solutions/livreur-inscription" className="inline-flex items-center justify-center gap-2 bg-primary-500 text-white font-bold text-sm px-5 h-10 w-full rounded-xl hover:bg-primary-600 transition-colors">
                    {t('botWhatsApp.cta.livreur.button')} <ArrowRight className="size-4" />
                  </Link>
                </div>
              </FadeIn>
              <FadeIn delay={0.15}>
                <div className="p-8 rounded-[32px] bg-primary-500/5 dark:bg-primary-500/10 border border-gray-500/20 space-y-4 text-center">
                   <div className="size-14 mx-auto bg-primary-500/10 dark:bg-primary-500/20 flex items-center justify-center rounded-2xl">
                    <Store className="size-6 text-primary-500" />
                  </div>
                  <h3 className="font-bold text-lg text-secondary dark:text-accent">{t('botWhatsApp.cta.marchand.title')}</h3>
                  <p className="text-secondary/70 dark:text-accent/70 text-sm">{t('botWhatsApp.cta.marchand.description')}</p>
                  <Link href="/solutions/creer-boutique" className="inline-flex items-center justify-center gap-2 bg-primary-500 text-white font-bold text-sm px-5 h-10 w-full rounded-xl hover:bg-primary-600 transition-colors">
                    {t('botWhatsApp.cta.marchand.button')} <ArrowRight className="size-4" />
                  </Link>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="p-8 rounded-[32px] bg-green-500/5 dark:bg-green-500/10 border border-green-500/20 space-y-4 text-center">
                  <div className="size-14 mx-auto bg-green-500/10 dark:bg-green-500/20 flex items-center justify-center rounded-2xl">
                    <MessageSquare className="size-6 text-green-500" />
                  </div>
                  <h3 className="font-bold text-lg text-secondary dark:text-accent">{t('botWhatsApp.cta.test.title')}</h3>
                  <p className="text-secondary/70 dark:text-accent/70 text-sm"><Trans i18nKey="botWhatsApp.cta.test.description" components={{ 1: <b /> }} /></p>
                  <a href={WA_LINK} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-green-500 text-white font-bold text-sm px-5 h-10 w-full rounded-xl hover:bg-green-600 transition-colors">
                    Au {PHONE} <ArrowRight className="size-4" />
                  </a>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
