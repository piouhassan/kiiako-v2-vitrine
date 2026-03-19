'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone, Shield, Zap, Globe } from 'lucide-react';

const countries = [
  {
    country: 'Togo',
    flag: '🇹🇬',
    operators: [
      { name: 'Moov', url: '/money/moov.png' },
      { name: 'Mixx by Yas', url: '/money/mixx.png' },
    ]
  },
  {
    country: 'Bénin',
    flag: '🇧🇯',
    operators: [
      { name: 'MTN MoMo', url: 'https://upload.wikimedia.org/wikipedia/commons/9/93/New-mtn-logo.jpg' },
      { name: 'Moov', url: '/money/moov.png' },
    ]
  },
  {
    country: 'Sénégal',
    flag: '🇸🇳',
    operators: [
      { name: 'Orange Money', url: '/money/orange.png' },
      { name: 'Wave', url: '/money/wave.png' },
      { name: 'Free Money', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Free_Senegal_Logo.png/200px-Free_Senegal_Logo.png' },
      { name: 'Expresso', url: '/money/expresso.jpg' },
      { name: 'Wizall', url: '/money/wizall.jpg' },
    ]
  },
  {
    country: "Côte d'Ivoire",
    flag: '🇨🇮',
    operators: [
      { name: 'Orange Money', url: '/money/orange.png' },
      { name: 'MTN MoMo', url: 'https://upload.wikimedia.org/wikipedia/commons/9/93/New-mtn-logo.jpg' },
      { name: 'Moov', url: '/money/moov.png' },
      { name: 'Wave', url: '/money/wave.png' },
    ]
  },
  {
    country: 'Mali',
    flag: '🇲🇱',
    operators: [
      { name: 'Orange Money', url: '/money/orange.png' },
      { name: 'Moov', url: '/money/moov.png' },
    ]
  },
  {
    country: 'Burkina Faso',
    flag: '🇧🇫',
    operators: [
      { name: 'Orange Money', url: '/money/orange.png' },
      { name: 'Moov', url: '/money/moov.png' },
    ]
  }
];

export default function RegionalCoverage() {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  return (
    <div className="max-w-7xl mx-auto px-4 mt-20 mb-32">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {countries.map((item, index) => (
          <motion.div
            key={item.country}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            className="group flex flex-col p-6 bg-white dark:bg-background-7 rounded-lg border border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20 transition-all duration-200"
          >
            {/* Header: Tech-first, restrained */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <span className="text-2xl filter drop-shadow-sm">{item.flag}</span>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white tracking-tight">
                  {item.country}
                </h3>
              </div>
              <div className="flex gap-2">
                <span className="px-2.5 py-1 bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-accent/60 text-[10px] font-medium uppercase tracking-wider rounded-md">
                  Active
                </span>
              </div>
            </div>

            {/* Operators: Infrastructure style */}
            <div className="flex flex-wrap gap-4 mt-auto pt-4 border-t border-gray-50 dark:border-white/5">
              {item.operators.map((op) => (
                <div 
                  key={op.name}
                  className="relative h-8 flex items-center justify-center transition-transform duration-300 hover:scale-105"
                  title={op.name}
                >
                  <img 
                    src={op.url} 
                    alt={op.name} 
                    className="h-full w-auto object-contain max-w-[80px]"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                      (e.target as HTMLImageElement).parentElement!.innerText = op.name;
                      (e.target as HTMLImageElement).parentElement!.classList.add('text-xs', 'font-medium', 'text-gray-500');
                    }} 
                  />
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Footer: Technical Micro-copy */}
       <div className="mt-12 flex items-center justify-center gap-2 text-gray-400 dark:text-accent/40">
         <Globe className="w-4 h-4" />
         <span className="text-sm font-medium">Infrastructure de paiement régionale unifiée.</span>
       </div>
    </div>
  );
}
