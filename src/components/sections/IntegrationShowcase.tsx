'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Check, Terminal, Globe, Code2 } from 'lucide-react';

export default function IntegrationShowcase() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-background-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary dark:text-white">
              Intégration instantanée pour développeurs et marchands
            </h2>
            <p className="text-lg text-gray-500 dark:text-gray-400">
              Que vous utilisiez un CMS ou codiez votre propre solution, Kiiako s'installe en quelques minutes.
            </p>

            <div className="space-y-4">
              {[
                "Plugins officiels pour WooCommerce, Shopify, Prestashop",
                "API REST complète et bien documentée",
                "SDKs disponibles en PHP, Node.js, Python",
                "Support technique dédié aux développeurs"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <Check className="w-3 h-3 text-green-600 dark:text-green-400" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
               <button className="flex items-center gap-2 text-primary-600 dark:text-primary-400 font-semibold hover:gap-3 transition-all group">
                 <span>Voir la documentation API</span>
                 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
               </button>
            </div>
          </div>

          {/* Right Visual: Code/Platform Toggle */}
          <div className="relative">
             <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-blue-500/10 rounded-3xl blur-3xl transform rotate-3 scale-95" />
             
             <div className="relative bg-[#1E1E1E] rounded-xl shadow-2xl overflow-hidden border border-white/10">
                {/* Window Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/5">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                    <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                  </div>
                  <div className="text-xs font-mono text-gray-500">install.sh</div>
                </div>

                {/* Code Content */}
                <div className="p-6 font-mono text-sm overflow-x-auto">
                   <div className="flex gap-4 mb-2">
                     <span className="text-gray-500 select-none">1</span>
                     <span className="text-blue-400">$ npm install @kiiako/payment-sdk</span>
                   </div>
                   <div className="flex gap-4 mb-2">
                     <span className="text-gray-500 select-none">2</span>
                     <span className="text-gray-400">Installing dependencies...</span>
                   </div>
                   <div className="flex gap-4 mb-6">
                     <span className="text-gray-500 select-none">3</span>
                     <span className="text-green-400">✓ Kiiako SDK installed successfully</span>
                   </div>

                   <div className="border-t border-white/10 my-4" />

                   <div className="flex gap-4 mb-1 opacity-50">
                     <span className="text-gray-500 select-none">4</span>
                     <span className="text-purple-400">import</span> <span className="text-white">{`{ Kiiako }`}</span> <span className="text-purple-400">from</span> <span className="text-green-300">'@kiiako/sdk'</span>;
                   </div>
                   <div className="flex gap-4 mb-1">
                     <span className="text-gray-500 select-none">5</span>
                     <span className="text-blue-400">const</span> <span className="text-yellow-300">payment</span> = <span className="text-purple-400">await</span> <span className="text-white">kiiako.payment.create</span>({`{`}
                   </div>
                   <div className="flex gap-4 mb-1">
                     <span className="text-gray-500 select-none">6</span>
                     <span className="text-blue-300 pl-4">amount:</span> <span className="text-orange-400">5000</span>,
                   </div>
                   <div className="flex gap-4 mb-1">
                     <span className="text-gray-500 select-none">7</span>
                     <span className="text-blue-300 pl-4">currency:</span> <span className="text-green-300">'XOF'</span>,
                   </div>
                   <div className="flex gap-4 mb-1">
                     <span className="text-gray-500 select-none">8</span>
                     <span className="text-blue-300 pl-4">method:</span> <span className="text-green-300">'mobile_money'</span>
                   </div>
                   <div className="flex gap-4">
                     <span className="text-gray-500 select-none">9</span>
                     <span className="text-white">{'}'});</span>
                   </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
