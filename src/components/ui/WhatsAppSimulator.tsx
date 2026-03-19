'use client';

import React, { useState, useEffect, useRef } from 'react';
import { User, Send, CheckCheck, Loader2, Plus, Info, ChevronLeft, Mic, Wifi, BatteryMedium, Signal, Video, Phone } from 'lucide-react';

type Message = {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  time: string;
  type?: 'text' | 'buttons' | 'image' | 'location';
  buttons?: string[];
  isTyping?: boolean;
};

// Arborescence de la simulation (très simple pour la démo)
const SCRIPT: Record<string, { botReply: string, type?: 'text' | 'buttons', buttons?: string[], delay?: number, nextExpected?: string }> = {
  'start': {
    botReply: "Bienvenue chez *Kiiako* ! 🚀\n\nVotre écosystème e-commerce et logistique tout-en-un. Vendez plus, livrez mieux et développez votre activité avec nos outils intelligents.\n\n*Que souhaitez-vous faire ?*",
    type: 'buttons',
    buttons: ['Devenir Livreur', 'Inscrire ma Boutique'],
    delay: 500
  },
  'Devenir Livreur': {
    botReply: "*Inscription Livreur*\n\nJe vais avoir besoin de quelques informations : votre nom, votre *adresse email*, une *photo de vous* et une photo de votre *pièce d'identité*.\n\nPour commencer, quel est votre *prénom* ?",
    delay: 800,
    nextExpected: 'firstname'
  },
  'Inscrire ma Boutique': {
    botReply: "*Inscription Boutique*\n\nCréons votre boutique en ligne.\n\nQuel est le *nom de votre boutique* ?",
    delay: 800,
    nextExpected: 'shopname'
  },
  'bonjour': {
    botReply: "Bienvenue sur *Kiiako* 🚀 ! Je suis votre assistant logistique et e-commerce.\n\nVoici ce que je peux faire pour vous :\n\n📦 *Livreurs*\n*missions* - Vos missions en attente\n*livraison CODE* - Démarrer une livraison\n*livré CODE* - Confirmer une livraison\n*historique* - Vos 10 dernières livraisons\n\n🏪 *Marchands*\n*boutique* - Gérer votre boutique\n*retrait* - Retirer l'argent de vos ventes\n\n💰 *Général*\n*solde* - Consulter votre portefeuille\n*info* - Vos informations\n*support* - Contacter l'assistance",
    delay: 500
  },
  'missions': {
    botReply: "📦 *Vos missions en attente (1) :*\n\n*Code: CMD-8942*\n📍 De: Haies Vives\n📍 Vers: Akpakpa\n👤 Client: Alex K.\n📊 Statut: Assigné\n\nPour démarrer la livraison de cette mission, répondez :\n*livraison CMD-8942*",
    delay: 1000
  },
  'livraison CMD-8942': {
    botReply: "✅ *Mission CMD-8942 prise en charge*\n\n📦 *Informations de la mission :*\n👤 Client: Alex K.\n📞 Téléphone: +229 00 00 00 00\n📍 Adresse: Akpakpa, pharmacie les grâces\n💰 Frais de livraison: 1 500 FCFA\n\n📍 _[Localisation GPS du client envoyée]_\n\nUne fois le colis remis au client, envoyez :\n*livré CMD-8942*",
    delay: 1200
  },
  'livré CMD-8942': {
    botReply: "Mission CMD-8942 terminée ✅.\n\nLe client a reçu une demande de confirmation. Vous recevrez une notification et votre paiement dans votre portefeuille dès sa validation.",
    delay: 1000
  },
  'solde': {
    botReply: "💰 *Portefeuille Kiiako*\n\nSolde principal: *12 500 FCFA*\nGains en attente: *1 500 FCFA*\n\nDernière mise à jour: Aujourd'hui\n\nPour effectuer un retrait, répondez: *retrait*",
    delay: 600
  }
};

const WA_BG = "https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png";

export default function WhatsAppSimulator() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isBotTyping, setIsBotTyping] = useState(false);
  const [expectedInputType, setExpectedInputType] = useState<string | null>(null);
  
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const formatTime = () => {
    return new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
  };

  const addMessage = (msg: Omit<Message, 'id' | 'time'>) => {
    const newMessage = { ...msg, id: Math.random().toString(36).substr(2, 9), time: formatTime() };
    setMessages(prev => [...prev, newMessage]);
  };

  const scrollToBottom = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    // Add a slight delay to allow React to render the new DOM node before scrolling
    requestAnimationFrame(() => scrollToBottom());
  }, [messages, isBotTyping]);

  // Initial greeting
  useEffect(() => {
    setTimeout(() => {
      triggerBotResponse('start');
    }, 500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const triggerBotResponse = (triggerKey: string, customText?: string) => {
    setIsBotTyping(true);
    
    // Check if we are in a specific flow (like asking for a name)
    let responseObj = SCRIPT[triggerKey];
    
    if (!responseObj && expectedInputType === 'firstname') {
      responseObj = {
        botReply: `Enchanté ${customText || 'utilisateur'}. Quelle est votre *adresse email* ?\nElle servira à vous connecter au tableau de bord.`,
        delay: 800,
        nextExpected: 'email'
      };
    } else if (!responseObj && expectedInputType === 'shopname') {
       responseObj = {
        botReply: `Super nom ! Quel est le *prénom* du propriétaire ?`,
        delay: 800,
        nextExpected: 'ownerFirstname'
      };
    } else if (!responseObj) {
      // Default fallback
      responseObj = {
        botReply: "Désolé, je ne reconnais pas cette commande dans le simulateur.\n\nEssayez :\n- *bonjour*\n- *missions*\n- *solde*",
        delay: 600
      };
    }

    setTimeout(() => {
      setIsBotTyping(false);
      addMessage({
        sender: 'bot',
        text: responseObj.botReply,
        type: responseObj.type || 'text',
        buttons: responseObj.buttons
      });
      setExpectedInputType(responseObj.nextExpected || null);
    }, responseObj.delay || 1000);
  };

  const handleSend = (text: string) => {
    if (!text.trim()) return;
    
    // Add user message
    addMessage({ sender: 'user', text: text.trim() });
    setInputValue('');
    
    // Trigger bot response based on exactly what was typed or clicked
    triggerBotResponse(text.trim(), text.trim());
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend(inputValue);
    }
  };

  // Format WhatsApp markdown (bold)
  const formatText = (text: string) => {
    const parts = text.split(/(\*.*?\*|_[^_]+_)/g);
    return parts.map((part, i) => {
      if (part.startsWith('*') && part.endsWith('*')) {
        return <strong key={i} className="font-bold">{part.slice(1, -1)}</strong>;
      }
      if (part.startsWith('_') && part.endsWith('_')) {
        return <em key={i} className="italic">{part.slice(1, -1)}</em>;
      }
      return <span key={i}>{part}</span>;
    });
  };

  return (
    <div className="relative mx-auto w-full max-w-[420px] z-[60]">
      {/* Side Buttons (Hardware) */}
      <div className="absolute top-[130px] -left-[3px] w-[3px] h-8 bg-[#3B3B3D] dark:bg-[#5C5C5E] rounded-l-md z-0" /> {/* Action Button */}
      <div className="absolute top-[190px] -left-[3px] w-[3px] h-[54px] bg-[#3B3B3D] dark:bg-[#5C5C5E] rounded-l-md z-0" /> {/* Volume Up */}
      <div className="absolute top-[260px] -left-[3px] w-[3px] h-[54px] bg-[#3B3B3D] dark:bg-[#5C5C5E] rounded-l-md z-0" /> {/* Volume Down */}
      <div className="absolute top-[210px] -right-[3px] w-[3px] h-[80px] bg-[#3B3B3D] dark:bg-[#5C5C5E] rounded-r-md z-0" /> {/* Power Button */}

      {/* Cadre matériel du téléphone (iPhone Pro Titanium Frame) */}
      <div className="relative border-[10px] border-[#2A2A2C] dark:border-[#1E1E20] bg-[#EFEAE2] dark:bg-[#0B141A] rounded-[52px] shadow-[0_30px_60px_-12px_rgba(0,0,0,0.6)] overflow-hidden ring-[1px] ring-white/20 dark:ring-white/10 h-[750px] flex flex-col z-10 transform-gpu">
        
        {/* Dynamic Island */}
        <div className="absolute top-2 w-[100px] h-7 bg-black rounded-3xl left-1/2 -translate-x-1/2 z-50 flex items-center justify-between px-2 shadow-sm pointer-events-none">
          <div className="w-2.5 h-2.5 rounded-full bg-[#111] opacity-60 shadow-inner"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#111] opacity-60 shadow-inner"></div>
        </div>

        {/* Status Bar */}
        <div className="h-12 w-full bg-[#F6F6F6] dark:bg-[#1C1C1E] flex justify-between items-end px-7 pb-1.5 text-[11px] font-semibold text-black dark:text-white z-40 relative shrink-0">
          <span>{formatTime()}</span>
          <div className="flex items-center gap-1.5 pb-0.5">
            <Signal className="w-3 h-3" />
            <Wifi className="w-3 h-3" />
            <BatteryMedium className="w-3.5 h-3.5 ml-0.5" />
          </div>
        </div>

        {/* WhatsApp iOS Header */}
        <div className="bg-[#F6F6F6]/95 dark:bg-[#1C1C1E]/95 backdrop-blur-md text-black dark:text-white px-1 pt-1.5 pb-2 flex items-center justify-between shrink-0 relative z-10 border-b border-gray-200/50 dark:border-white/10">
          <div className="flex items-center gap-0.5 cursor-pointer flex-1">
            <div className="flex items-center text-[#007AFF]">
              <ChevronLeft className="w-7 h-7 -ml-1" strokeWidth={2.5} />
              <div className="w-8 h-8 bg-gray-300 dark:bg-gray-700 rounded-full flex items-center justify-center overflow-hidden ml-0.5 relative">
                <img src="/favicon.png" className="w-full h-full object-cover p-1 bg-white" alt="Kiiako" />
              </div>
            </div>
            
            <div className="flex flex-col justify-center ml-2.5">
              <h3 className="font-semibold text-[14.5px] leading-tight flex items-center gap-1.5">
                Kiiako
                <div className="bg-[#25D366] rounded-full p-0.5 mt-0.5 flex items-center justify-center">
                  <CheckCheck className="w-2.5 h-2.5 text-white" strokeWidth={3} />
                </div>
              </h3>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-tight mt-0.5">Compte professionnel</p>
            </div>
          </div>

          <div className="flex items-center gap-4 px-3 text-[#007AFF]">
            <Video className="w-6 h-6" strokeWidth={1.5} />
            <Phone className="w-[22px] h-[22px]" strokeWidth={1.5} />
          </div>
        </div>

      {/* Chat Area */}
      <div 
        ref={scrollContainerRef}
        className="flex-1 overflow-y-auto p-4 space-y-4 relative z-0 scroll-smooth"
        style={{ backgroundImage: `url(${WA_BG})`, backgroundSize: '400px', opacity: 0.9 }}
      >
        <div className="flex justify-center mb-6 mt-2">
          <span className="bg-black/20 text-white text-[10px] px-2 py-0.5 rounded backdrop-blur-md shadow-sm">
            Today
          </span>
        </div>

        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`
              max-w-[82%] rounded-[16px] px-3 py-1.5 shadow-sm text-[13.5px] relative leading-snug
              ${msg.sender === 'user' 
                ? 'bg-[#E1FDD8] dark:bg-[#005C4B] text-black dark:text-[#E9EDEF] rounded-br-sm' 
                : 'bg-white dark:bg-[#202C33] text-black dark:text-[#E9EDEF] rounded-bl-sm'}
            `}>
              {msg.type === 'buttons' ? (
                <div className="space-y-3 pb-1">
                  <div className="whitespace-pre-wrap">{formatText(msg.text)}</div>
                  <div className="flex flex-col gap-0 border-t border-gray-200 dark:border-white/10 pt-1 mt-1">
                    {msg.buttons?.map((btn, idx) => (
                      <button 
                        key={idx}
                        onClick={() => handleSend(btn)}
                        className={`text-[#007AFF] font-normal text-[14px] text-center py-2 hover:bg-black/5 active:bg-black/10 transition-colors ${idx !== 0 ? 'border-t border-gray-200 dark:border-white/10' : ''}`}
                      >
                         {btn}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="whitespace-pre-wrap pb-3 pr-8">{formatText(msg.text)}</div>
              )}
              
              <div className="absolute bottom-1 right-2 flex items-center gap-1">
                <span className="text-[9px] text-[#8E8E93] dark:text-[#8696A0]">{msg.time}</span>
                {msg.sender === 'user' && (
                  <CheckCheck className="w-[11px] h-[11px] text-[#34B7F1]" />
                )}
              </div>
            </div>
          </div>
        ))}
        
        {isBotTyping && (
          <div className="flex justify-start">
            <div className="bg-white dark:bg-[#202C33] rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm flex gap-1 items-center">
              <div className="w-2 h-2 bg-[#8E8E93] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
              <div className="w-2 h-2 bg-[#8E8E93] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
              <div className="w-2 h-2 bg-[#8E8E93] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
            </div>
          </div>
        )}
      </div>

      {/* iOS Input Area */}
      <div className="bg-[#F6F6F6] dark:bg-[#1C1C1E] px-2 py-2 flex items-end gap-2 shrink-0 z-10 border-t border-gray-200 dark:border-white/10 pb-6">
        <button className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 mb-1">
          <Plus className="w-6 h-6 text-[#007AFF]" />
        </button>
        <div className="flex-1 bg-white dark:bg-[#2C2C2E] border border-gray-300 dark:border-gray-700 rounded-full min-h-[30px] flex items-center px-3 mb-1">
          <input
            type="text"
            className="w-full bg-transparent border-none focus:outline-none text-[14px] dark:text-white py-1"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
        {inputValue.trim() ? (
          <button 
            onClick={() => handleSend(inputValue)}
            className="w-8 h-8 rounded-full bg-[#007AFF] flex items-center justify-center shrink-0 mb-1 shadow-sm"
          >
            <Send className="w-4 h-4 text-white ml-0.5" />
          </button>
        ) : (
          <button className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 mb-1 text-[#007AFF] hover:bg-gray-200 dark:hover:bg-white/10">
            <Mic className="w-6 h-6" />
          </button>
        )}
      </div>
      
      {/* Home Indicator (Barre de navigation iOS en bas) */}
      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-black/20 dark:bg-white/20 rounded-full z-50 pointer-events-none"></div>
    </div>
    </div>
  );
}
