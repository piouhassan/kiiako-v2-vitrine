'use client';

import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { FadeIn } from '@/components/animations/FadeIn';
import { Check, Users, Shield, UserPlus, FileText, Lock, Eye, ArrowRight } from 'lucide-react';
import {REGISTER_URL_FREE} from "@/lib/utls";
import { useTranslation } from 'react-i18next';

export default function EquipePage() {
  const { t } = useTranslation();
  return (
    <div className="bg-background-1 dark:bg-background-6">
      <Header />
      <main>
        {/* Section 1: Hero - Premium Design */}
        <section className="relative pb-14 pt-18 md:pb-16 md:pt-16 lg:pb-24 lg:pt-[120px] xl:pb-32 xl:pt-[160px] overflow-hidden bg-background-2 dark:bg-background-5">
          {/* Decorative background gradients */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-500/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

          <div className="main-container relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              {/* Text Content */}
              <div className="space-y-10 text-center lg:text-left">
                <FadeIn delay={0.2}>
                  <span className="cb-badge">
                  {t('equipe.hero.badge')}
                  </span>
                </FadeIn>
                
                <div className="space-y-8">
                  <FadeIn delay={0.3}>
                    <h2 className="text-heading-2">
                      {t('equipe.hero.title')}
                    </h2>
                  </FadeIn>
                  
                  <FadeIn delay={0.4}>
                    <p className="text-secondary/60 dark:text-accent/60 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                      {t('equipe.hero.subtitle')}
                    </p>
                  </FadeIn>
                </div>

                <FadeIn delay={0.5}>
                  <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start pt-4">
                    <a
                      href={REGISTER_URL_FREE}
                      className="cb-btn"
                    >
                      <span className="relative z-10">{t('equipe.hero.button')}</span>
                      <ArrowRight className="size-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </FadeIn>
              </div>

              {/* Visual Element - Premium UI Mockup */}
              <FadeIn delay={0.6} className="relative mt-12 lg:mt-0">
                <div className="relative z-10 rounded-[3rem] overflow-hidden border-8 border-white dark:border-background-7 bg-white/40 dark:bg-white/[0.02] backdrop-blur-2xl shadow-2xl p-4 lg:p-6 transition-all duration-700 hover:scale-[1.02]">
                    <div className="rounded-[2rem] bg-background-1 dark:bg-background-6 border border-stroke-1 dark:border-stroke-7 p-6 md:p-8 space-y-8">
                      {/* Header Mockup */}
                      <div className="flex justify-between items-center border-b border-stroke-1 dark:border-stroke-7 pb-8">
                        <div className="flex items-center gap-5">
                          <div className="size-14 rounded-2xl bg-primary-500/10 flex items-center justify-center">
                            <Users className="size-7 text-primary-500" />
                          </div>
                          <div className="text-left">
                            <div className="text-xl text-secondary dark:text-white leading-tight">{t('equipe.visual.collaborators.title')}</div>
                            <div className="text-sm text-secondary/50 dark:text-accent/50 font-medium">{t('equipe.visual.collaborators.active')}</div>
                          </div>
                        </div>
                        <div className="hidden sm:flex px-4 py-1.5 text-[10px] font-black rounded-full bg-green-500/10 text-green-500 border border-green-500/20 uppercase tracking-widest shadow-sm">
                          {t('equipe.visual.secure')}
                        </div>
                      </div>
                      
                      {/* List Mockup */}
                      <div className="space-y-4">
                        {[
                          { name: 'Sarah M.', role: t('equipe.visual.roles.owner'), icon: Shield, color: 'text-primary-500', bg: 'bg-primary-500/10' },
                          { name: 'Alex D.', role: t('equipe.visual.roles.admin'), icon: Lock, color: 'text-amber-500', bg: 'bg-amber-500/10' },
                          { name: 'Marie L.', role: t('equipe.visual.roles.support'), icon: Eye, color: 'text-blue-500', bg: 'bg-blue-500/10' }
                        ].map((member, idx) => (
                          <div key={idx} className="flex items-center justify-between p-5 rounded-2xl bg-background-2 dark:bg-background-7 border border-stroke-1/50 dark:border-white/5 transition-all hover:bg-white dark:hover:bg-background-8 hover:shadow-lg group">
                            <div className="flex items-center gap-4">
                              <div className="size-11 rounded-full bg-background-1 dark:bg-background-9 flex items-center justify-center border border-stroke-1 dark:border-stroke-8 shadow-inner">
                                <span className="text-sm  text-secondary dark:text-accent">{member.name[0]}</span>
                              </div>
                              <span className=" text-secondary dark:text-white">{member.name}</span>
                            </div>
                            <div className={`flex items-center gap-2 px-4 py-2 rounded-xl border border-stroke-1 dark:border-stroke-7 ${member.bg} ${member.color}`}>
                              <member.icon className="size-4" />
                              <span className="text-[11px] font-black uppercase tracking-wider">{member.role}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                </div>
                {/* Decorative background glow behind mockup */}
                <div className="absolute -inset-10 bg-primary-500/10 blur-[100px] rounded-full -z-10 opacity-50"></div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Rôles disponibles - Premium Glassmorphism Design */}
        <section className="bg-background-3 dark:bg-background-7 py-24 md:py-32 relative overflow-hidden">
          {/* Section Background Glows */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary-500/10 blur-[130px] rounded-full pointer-events-none"></div>
          
          <div className="main-container relative z-10 px-4">
            <div className="text-center space-y-4 mb-20 max-w-3xl mx-auto">
              <FadeIn delay={0.2}>
                <span className="cb-badge">
                  {t('equipe.roles.badge')}
                </span>
              </FadeIn>
              <FadeIn delay={0.3}>
                <h2 className="text-heading-3 mb-6 text-secondary dark:text-white">
                  {t('equipe.roles.title')}
                </h2>
              </FadeIn>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { key: 'owner', icon: Shield },
                { key: 'admin', icon: Lock },
                { key: 'manager', icon: FileText },
                { key: 'staff', icon: Eye }
              ].map((role, i) => (
                <FadeIn key={role.key} delay={0.4 + (i * 0.1)}>
                  <div className="group relative p-10 rounded-[48px] bg-white/40 dark:bg-white/[0.02] backdrop-blur-xl border border-white/20 dark:border-white/5 transition-all duration-700 hover:shadow-2xl hover:bg-white/60 dark:hover:bg-white/[0.04] hover:-translate-y-3 flex flex-col items-center text-center">
                    <div className="size-20 rounded-3xl bg-primary-500/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-primary-500 group-hover:text-white transition-all duration-500 shadow-sm">
                      <role.icon className="size-9 text-primary-500 group-hover:text-white transition-colors duration-500" />
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-2xl text-secondary dark:text-white tracking-tight">
                        {t(`equipe.roles.items.${role.key}.title`)}
                      </h3>
                      <p className="text-secondary/60 dark:text-accent/60 font-medium leading-relaxed text-base">
                        {t(`equipe.roles.items.${role.key}.description`)}
                      </p>
                    </div>
                    {/* Decorative dot */}
                    <div className="absolute bottom-6 size-1.5 rounded-full bg-primary-500/20 group-hover:bg-primary-500 transition-colors duration-500"></div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Fonctionnalités - Premium Neutral Design */}
        <section className="py-[100px] lg:py-[150px] bg-background-1 dark:bg-background-6 relative">
          <div className="main-container">
            <div className="text-center space-y-4 mb-20 max-w-3xl mx-auto">
              <FadeIn delay={0.2}>
                <span className="cb-badge">
                  {t('equipe.features.badge')}
                </span>
              </FadeIn>
              <FadeIn delay={0.3}>
                <h2 className="text-heading-3 text-secondary dark:text-white">
                  {t('equipe.features.title')}
                </h2>
              </FadeIn>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { key: 'unlimited', icon: UserPlus },
                { key: 'roles', icon: Shield },
                { key: 'custom', icon: Lock },
                { key: 'history', icon: FileText },
                { key: 'deletion', icon: Users },
                { key: 'predefined', icon: Check }
              ].map((feature, i) => (
                <FadeIn key={feature.key} delay={0.4 + (i * 0.1)}>
                  <div className="group h-full p-10 rounded-[40px] bg-background-2 dark:bg-background-8/30 border border-stroke-1 dark:border-white/5 hover:border-primary-500/50 transition-all duration-500 hover:shadow-xl flex flex-col items-start text-left">
                    <div className="size-16 rounded-2xl bg-primary-500/10 border border-stroke-1 dark:border-white/5 flex items-center justify-center mb-8 group-hover:bg-primary-500 group-hover:text-white transition-all duration-500">
                      <feature.icon className="size-7 text-primary-500 group-hover:text-white transition-colors duration-500" />
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-xl text-secondary dark:text-white tracking-tight">
                        {t(`equipe.features.items.${feature.key}.title`)}
                      </h3>
                      <p className="text-secondary/60 dark:text-accent/60 font-medium leading-relaxed text-base">
                        {t(`equipe.features.items.${feature.key}.description`)}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Workflow (Premium Split Layout) */}
        <section className="bg-background-3 dark:bg-background-7 py-[100px] lg:py-[150px] relative overflow-hidden">
          {/* Decorative gradients */}
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

          <div className="main-container relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div className="space-y-10 lg:pr-10">
                <FadeIn delay={0.2}>
                  <span className="cb-badge">
                    {t('equipe.workflow.badge')}
                  </span>
                </FadeIn>
                <div className="space-y-6">
                  <FadeIn delay={0.3}>
                    <h2 className="text-heading-3 text-secondary dark:text-white">
                      {t('equipe.workflow.title')}
                    </h2>
                  </FadeIn>
                  <FadeIn delay={0.4}>
                    <p className=" text-secondary/60 dark:text-accent/60 max-w-xl font-medium leading-relaxed">
                      {t('equipe.workflow.subtitle')}
                    </p>
                  </FadeIn>
                </div>
                <div className="pt-8 space-y-5">
                  {['access', 'interface', 'focus'].map((item, idx) => (
                    <FadeIn key={item} delay={0.5 + (idx * 0.1)}>
                      <div className="flex items-center gap-5 group">
                        <div className="size-10 rounded-full bg-primary-500/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-all duration-300">
                          <Check className="size-5 text-primary-500 group-hover:text-white transition-colors" />
                        </div>
                        <span className=" text-secondary/80 dark:text-accent/80 group-hover:text-secondary dark:group-hover:text-white transition-colors">
                          {t(`equipe.workflow.list.${item}`)}
                        </span>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>
              
              {/* UI Mockup - Premium Side-by-Side User Focus */}
              <FadeIn delay={0.5} className="relative">
                <div className="relative z-10 rounded-[3rem] bg-white/40 dark:bg-white/[0.02] backdrop-blur-2xl border-8 border-white dark:border-background-8 shadow-2xl p-6 lg:p-8 transition-all duration-700 hover:rotate-1">
                  <div className="grid sm:grid-cols-2 gap-6">
                    {/* Mockup 1: Support Focus */}
                    <div className="rounded-3xl bg-background-1 dark:bg-background-6 border border-stroke-1 dark:border-stroke-7 p-6 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-4 mb-8 pb-5 border-b border-stroke-1 dark:border-stroke-7">
                        <div className="size-10 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                          <span className="text-blue-500 font-black text-sm">A</span>
                        </div>
                        <div>
                          <div className="text-sm font-black text-secondary dark:text-white uppercase tracking-wider">Alice (Support)</div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="h-2.5 w-full bg-background-3 dark:bg-background-9 rounded-full overflow-hidden">
                           <div className="h-full w-2/3 bg-blue-500/30 rounded-full"></div>
                        </div>
                        <div className="h-2.5 w-3/4 bg-background-3 dark:bg-background-9 rounded-full"></div>
                        <div className="h-20 w-full border border-dashed border-stroke-1 dark:border-stroke-7 rounded-2xl mt-6 flex items-center justify-center text-xs text-secondary/30 dark:text-accent/30 font-black uppercase tracking-[0.2em]">
                          {t('equipe.visual.interfaces.support')}
                        </div>
                      </div>
                    </div>
                    
                    {/* Mockup 2: Manager Focus */}
                    <div className="rounded-3xl bg-background-1 dark:bg-background-6 border border-stroke-1 dark:border-stroke-7 p-6 shadow-sm hover:shadow-md transition-shadow mt-8 sm:mt-16">
                      <div className="flex items-center gap-4 mb-8 pb-5 border-b border-stroke-1 dark:border-stroke-7">
                        <div className="size-10 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                          <span className="text-emerald-500 font-black text-sm">M</span>
                        </div>
                        <div>
                          <div className="text-sm font-black text-secondary dark:text-white uppercase tracking-wider">Marc (Manager)</div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="h-2.5 w-full bg-background-3 dark:bg-background-9 rounded-full overflow-hidden">
                           <div className="h-full w-full bg-emerald-500/30 rounded-full"></div>
                        </div>
                        <div className="h-2.5 w-1/2 bg-background-3 dark:bg-background-9 rounded-full"></div>
                        <div className="h-20 w-full border border-dashed border-stroke-1 dark:border-stroke-7 rounded-2xl mt-6 flex items-center justify-center text-xs text-secondary/30 dark:text-accent/30 font-black uppercase tracking-[0.2em]">
                          {t('equipe.visual.interfaces.dashboard')}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Background decorative elements */}
                <div className="absolute -top-12 -right-12 size-48 bg-primary-500/10 blur-[80px] rounded-full -z-10"></div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Section 5: Onboarding (Premium Centered Design) */}
        <section className="py-[100px] lg:py-[150px] bg-background-1 dark:bg-background-6 relative overflow-hidden">
          <div className="main-container">
            <div className="text-center space-y-4 mb-20 max-w-3xl mx-auto">
              <FadeIn delay={0.1}>
                <span className="cb-badge">
                  {t('equipe.onboarding.badge')}
                </span>
              </FadeIn>
              <FadeIn delay={0.2}>
                <h2 className="text-heading-3 text-secondary dark:text-white">
                  {t('equipe.onboarding.title')}
                </h2>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p className=" text-secondary/60 dark:text-accent/60 font-medium leading-relaxed">
                  {t('equipe.onboarding.subtitle')}
                </p>
              </FadeIn>
            </div>
            
            <FadeIn delay={0.4}>
              <div className="max-w-5xl mx-auto relative z-10 px-4">
                {/* Connection line */}
                <div className="hidden md:block absolute top-[60px] left-24 right-24 h-px bg-gradient-to-r from-transparent via-stroke-1 dark:via-stroke-7 to-transparent -z-10"></div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  {[
                    { key: 'invite', icon: UserPlus },
                    { key: 'role', icon: Shield },
                    { key: 'work', icon: Check }
                  ].map((step, idx) => (
                    <div key={idx} className="group flex flex-col items-center text-center p-10 rounded-[48px] bg-background-2 dark:bg-background-8/40 border border-stroke-1 dark:border-white/5 hover:border-primary-500/50 transition-all duration-500 hover:shadow-2xl">
                      <div className="size-28 rounded-[32px] bg-background-1 dark:bg-background-9 border border-stroke-1 dark:border-stroke-7 flex items-center justify-center mb-10 shrink-0 relative group-hover:scale-110 transition-transform duration-500 shadow-sm">
                        {/* Step indicator bubble */}
                        <div className="absolute -top-4 -right-4 size-10 rounded-full bg-primary-500 text-white flex items-center justify-center text-sm font-black shadow-xl shadow-primary-500/40 border-4 border-white dark:border-background-8">
                          {idx + 1}
                        </div>
                        <step.icon className="size-10 text-primary-500 group-hover:rotate-12 transition-transform" />
                      </div>
                      <h3 className="text-2xl text-secondary dark:text-white tracking-tight">
                        {t(`equipe.onboarding.steps.${step.key}`).replace(/^\d+\.\s*/, '')}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Section 6: FAQ (Premium Glassmorphism) */}
        <section className="py-[100px] lg:py-[150px] bg-background-3 dark:bg-background-7 relative overflow-hidden">
          <div className="main-container max-w-4xl relative z-10 px-4">
            <div className="text-center space-y-4 mb-20">
              <FadeIn delay={0.1}>
                <span className="cb-badge">
                  {t('equipe.faq.badge')}
                </span>
              </FadeIn>
              <FadeIn delay={0.2}>
                <h2 className="text-heading-3 text-secondary dark:text-white">
                  {t('equipe.faq.title')}
                </h2>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p className="text-xl text-secondary/60 dark:text-accent/60 font-medium">
                  {t('equipe.faq.subtitle')}
                </p>
              </FadeIn>
            </div>
            
            <div className="space-y-6">
              {['limits', 'roles', 'billing'].map((faq, idx) => (
                <FadeIn key={faq} delay={0.4 + (idx * 0.1)}>
                  <div className="p-8 md:p-10 rounded-[32px] bg-white/40 dark:bg-white/[0.02] backdrop-blur-xl border border-white/20 dark:border-white/5 hover:border-primary-500/50 transition-all duration-500 hover:shadow-xl group">
                    <h3 className="text-xl md:text-2xl  text-secondary dark:text-white mb-6 group-hover:text-primary-500 transition-colors tracking-tight">
                      {t(`equipe.faq.items.${faq}.question`)}
                    </h3>
                    <p className="text-lg text-secondary/60 dark:text-accent/60 leading-relaxed font-medium">
                      {t(`equipe.faq.items.${faq}.answer`)}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cb-cta-section">
          <div className="cb-container">
            <div className="cb-max-w-4xl cb-text-center space-y-8">
              <FadeIn delay={0.2}>
                <h2 className="text-heading-3">
                  {t('equipe.cta.title')}
                </h2>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p className="cb-lead">
                   {t('equipe.cta.description')}
                </p>
              </FadeIn>
              <FadeIn delay={0.4}>
                <div className="cb-text-center">
                  <a href={REGISTER_URL_FREE} className="cb-btn">
                    <span className="inline-block first-letter:uppercase">
                      {t('equipe.cta.button')}
                    </span>
                  </a>
                </div>
              </FadeIn>
              <FadeIn delay={0.5}>
                <ul className="cb-footer-list">
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-primary-500" />
                    <span>{t('equipe.cta.features.unlimited')}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-primary-500" />
                    <span>{t('equipe.cta.features.roles')}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-primary-500" />
                    <span>{t('equipe.cta.features.history')}</span>
                  </li>
                </ul>
              </FadeIn>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
