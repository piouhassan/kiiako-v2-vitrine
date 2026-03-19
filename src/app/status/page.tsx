'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Clock, Activity, Loader2, Server, Layout, ShoppingBag, MessageSquare, ArrowRight } from 'lucide-react';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { FadeIn } from '@/components/animations/FadeIn';

interface ServiceHealth {
  status: 'connected' | 'disconnected' | 'operational' | 'degraded' | 'error';
  responseTime?: number;
}

interface HealthData {
  status: 'ok' | 'degraded' | 'error';
  timestamp: string;
  uptime: number;
  responseTime: number;
  services: {
    client?: ServiceHealth;
    admin?: ServiceHealth;
    stores?: ServiceHealth;
    bot?: ServiceHealth;
  };
}

export default function StatusPage() {
  const { t } = useTranslation();
  const [data, setData] = useState<HealthData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        setLoading(true);
        const apiUrl = process.env.NEXT_PUBLIC_API_URL?.replace(/\/api\/?$/, '/') || 'https://api.kiiako.io/';
        const response = await fetch(apiUrl);
        if (!response.ok && response.status !== 503) throw new Error('Failed to fetch');
        const health = await response.json();
        setData(health);
        setError(false);
      } catch (err) {
        console.error('Status fetch error:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchStatus();
    const interval = setInterval(fetchStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  const getStatusLabel = (status: string | undefined) => {
    if (!status || status === 'ok' || status === 'operational' || status === 'connected') return t('status.labels.operational');
    if (status === 'degraded') return t('status.labels.degraded');
    return t('status.labels.outage');
  };

  const servicesUI = [
    { 
      key: 'api', 
      icon: Server,
      name: "API Principale",
      desc: "Moteur central et gestion des flux de données",
      status: data?.status || 'ok'
    },
    { 
      key: 'client', 
      icon: Layout,
      name: "Vitrine Kiiako",
      desc: "Portail public et expérience utilisateur",
      status: data?.services.client?.status
    },
    { 
      key: 'admin', 
      icon: Layout, 
      name: "Gestion de Boutique", 
      desc: "Espace d'administration multi-boutiques",
      status: data?.services.admin?.status
    },
    { 
      key: 'stores', 
      icon: ShoppingBag,
      name: "Boutiques Clients",
      desc: "Réseau mondial de boutiques marchandes",
      status: data?.services.stores?.status
    },
    { 
      key: 'bot', 
      icon: MessageSquare,
      name: "Bot WhatsApp",
      desc: "Système de notification et suivi logistique",
      status: data?.services.bot?.status
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#050505] selection:bg-primary-500/30">
      <Header />
      
      <main className="relative pt-40 pb-40 lg:pt-52 overflow-hidden">
        {/* Cinematic Glows */}
        <div className="absolute top-[-10%] right-[-10%] w-[70%] h-[70%] bg-primary-500/5 blur-[180px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-primary-500/5 blur-[180px] rounded-full pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 xl:px-16 relative z-10">
          
          {/* Hero Section - Sovereign Style */}
          <div className="max-w-5xl mb-32">
            <FadeIn>
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
                <span className="relative flex h-2 w-2">
                  <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-60 ${error ? 'bg-red-500' : 'bg-emerald-500'}`}></span>
                  <span className={`relative inline-flex rounded-full h-2 w-2 ${error ? 'bg-red-500' : 'bg-emerald-500'}`}></span>
                </span>
                <span className="text-[13px] ">Live Intelligence</span>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <h1 className="text-heading-1 tracking-tighter text-secondary dark:text-white leading-[0.9] mb-8">
                {error ? "Connexion Interrompue." : (data?.status === 'ok' ? "Systèmes Opérationnels." : "Performance Dégradée.")}
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <p className="text-secondary/60 dark:text-white/40 max-w-3xl leading-relaxed">
                Surveillance souveraine de l'écosystème Kiiako. Disponibilité garantie par une infrastructure de classe mondiale.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="flex flex-wrap items-center gap-12 mt-16 text-secondary/40 dark:text-white/30">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-black uppercase tracking-widest opacity-60">Latence</span>
                  <span className="text-2xl font-medium text-secondary dark:text-white">
                    {loading ? "---" : (data ? `${Math.round(data.responseTime)}ms` : "0ms")}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-black uppercase tracking-widest opacity-60">Disponibilité</span>
                  <span className="text-2xl font-medium text-secondary dark:text-white">
                    {error ? "0%" : "100%"}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-black uppercase tracking-widest opacity-60">Dernier Check</span>
                  <span className="text-2xl font-medium text-secondary dark:text-white">
                    {data ? new Date(data.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : "--:--"}
                  </span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Majestic Service List */}
          <div className="space-y-4">
            <FadeIn delay={0.4}>
              <div className="flex items-center gap-4 mb-12">
                <span className="text-[13px] font-medium text-primary-500">Service Status</span>
                <div className="h-px flex-1 bg-gray-200 dark:bg-white/5" />
              </div>
            </FadeIn>

            <div className="divide-y divide-gray-200 dark:divide-white/5 border-t border-b border-gray-200 dark:border-white/5">
              {servicesUI.map((service, i) => (
                <FadeIn key={service.key} delay={0.5 + (i * 0.1)}>
                  <div className="group py-12 flex flex-col md:flex-row md:items-center justify-between gap-8 hover:bg-white/[0.02] transition-all duration-500 px-4 -mx-4 rounded-xl">
                    <div className="flex items-start gap-8">
                      <div className="size-12 rounded-2xl bg-secondary/5 dark:bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-primary-500/10 group-hover:scale-110 transition-all duration-500">
                        <service.icon className="size-5 text-secondary dark:text-white group-hover:text-primary-500" />
                      </div>
                      <div>
                        <h3 className="text-2xl  text-secondary dark:text-white mb-2 group-hover:translate-x-1 transition-transform inline-block lowercase first-letter:uppercase">
                          {service.name}
                        </h3>
                        <p className="text-secondary/40 dark:text-white/30">
                          {service.desc}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-6 self-end md:self-center">
                      <div className="flex items-center gap-3">
                        <div className={`size-1.5 rounded-full shadow-[0_0_8px] ${
                          !service.status || service.status === 'ok' || service.status === 'operational' || service.status === 'connected'
                            ? 'bg-emerald-500 shadow-emerald-500/50' 
                            : service.status === 'degraded' 
                            ? 'bg-amber-500 shadow-amber-500/50' 
                            : 'bg-red-500 shadow-red-500/50'
                        }`} />
                        <span className={`text-sm  lowercase tracking-tight ${
                          !service.status || service.status === 'ok' || service.status === 'operational' || service.status === 'connected'
                            ? 'text-emerald-500/80' 
                            : service.status === 'degraded' 
                            ? 'text-amber-500/80' 
                            : 'text-red-500/80'
                        }`}>
                          {loading ? "Analyse..." : getStatusLabel(service.status)}
                        </span>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Simple Premium Footer */}
          <FadeIn delay={1.2}>
            <div className="mt-20 pt-10 flex flex-col md:flex-row items-center justify-end gap-12">
               <a href="/ressources/aide" className="group flex items-center gap-4 text-xl  text-secondary dark:text-white hover:text-primary-500 transition-colors">
                  Besoin d'aide technique
                  <ArrowRight className="size-6 group-hover:translate-x-2 transition-transform" />
               </a>
            </div>
          </FadeIn>

        </div>
      </main>

      <Footer />
    </div>
  );
}
