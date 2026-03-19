'use client';

import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { FadeIn } from '@/components/animations/FadeIn';
import { useTranslation } from 'react-i18next';
import { Facebook, Instagram, Youtube, Linkedin, Dribbble, Globe } from 'lucide-react';

export default function TeamPage() {
  const { t } = useTranslation();

  const members = [
    { name: 'Hassan PIOU', role: 'CEO & Dev', img: '/teams/01.jpg?w=400&h=500&fit=crop' },
    { name: 'Michel Djreke', role: 'Marketing Manager', img: '/teams/02.jpg?w=400&h=500&fit=crop' },
    { name: 'William Finley', role: 'Product Manager', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop' },
    { name: 'Micheal Jordan', role: 'Lead Designer', img: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=500&fit=crop' },
  ];

  return (
    <div className="bg-background-1 dark:bg-background-6">
      <Header />

      <main>
        {/* Team Members section */}
        <section className="md:pt-[160px] pt-[120px] pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px]">
          <div className="main-container space-y-14 md:space-y-20">
            <div className="text-center space-y-5">
              <FadeIn delay={0.1}>
                <span className="badge bg-primary-500 text-white px-5 py-1.5 rounded-full">
                  {t('teamSolution.hero.badge')}
                </span>
              </FadeIn>
              <div className="max-w-2xl mx-auto space-y-3">
                <FadeIn delay={0.2}>
                  <h1 className="text-3xl md:text-5xl text-secondary dark:text-accent font-normal leading-tight">
                    {t('teamSolution.hero.title')}
                  </h1>
                </FadeIn>
                <FadeIn delay={0.3}>
                  <p className="text-lg text-secondary/70 dark:text-accent/70 font-medium">
                    {t('teamSolution.hero.subtitle')}
                  </p>
                </FadeIn>
              </div>
            </div>

            <FadeIn delay={0.4}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {members.map((member, index) => (
                  <TeamMemberCard 
                    key={index} 
                    name={member.name} 
                    role={member.role} 
                    img={member.img} 
                  />
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

     
        
      </main>

      <Footer />
    </div>
  );
}

function TeamMemberCard({ img, name, role }: { img: string; name: string; role: string }) {
  return (
    <article className="group bg-background-2 dark:bg-background-7 border border-stroke-1 dark:border-stroke-6 rounded-[20px] p-3 transition-all duration-500 hover:border-primary-500/30">
      <div className="relative overflow-hidden rounded-[16px]">
        <img
          src={img}
          alt={name}
          className="w-full  transition-all duration-500 scale-100 "
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
           <div className="flex gap-4 items-center justify-center translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
             <SocialIcon Icon={Facebook} />
             <SocialIcon Icon={Instagram} />
             <SocialIcon Icon={Linkedin} />
           </div>
        </div>
      </div>
      <div className="mt-5 mb-2 text-center">
        <h3 className="text-xl font-normal text-secondary dark:text-accent">{name}</h3>
        <p className="text-sm text-secondary/50 dark:text-accent/50 flex items-center justify-center gap-1">
          <Globe className="size-3" />
          {role}
        </p>
      </div>
    </article>
  );
}

function SocialIcon({ Icon }: { Icon: any }) {
  return (
    <a href="#" className="p-2 bg-white/10 hover:bg-primary-500 rounded-full text-white transition-colors duration-300 backdrop-blur-sm border border-white/20">
      <Icon className="size-4" />
    </a>
  );
}
