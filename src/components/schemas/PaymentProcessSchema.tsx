'use client';

import { Shield, Smartphone, CreditCard, Check, FileCheck } from 'lucide-react';

export default function PaymentProcessSchema() {
  return (
    <div className="max-w-4xl mx-auto">
      
      {/* Design circulaire avec flux central */}
      <div className="relative">
        
        {/* Cercle central avec shield */}
        <div className="relative mx-auto w-48 h-48 mb-12">
          <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full animate-pulse"></div>
          <div className="absolute inset-2 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center">
            <div className="text-center">
              <Shield className="w-12 h-12 text-green-500 mx-auto mb-2" />
              <div className="text-xs font-bold text-green-600 dark:text-green-400">SÉCURITÉ</div>
            </div>
          </div>
        </div>
        
        {/* 5 étapes du processus réel */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          
          {/* Étape 1 - Client */}
          <div className="text-center">
            <div className="relative inline-block mb-4">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center border-4 border-white dark:border-slate-800 shadow-lg">
                <Smartphone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="absolute -top-2 -right-2 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center border-2 border-white dark:border-slate-800">
                <span className="text-xs font-bold text-white">1</span>
              </div>
            </div>
            <h4 className="font-semibold mb-1 text-sm">Client</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Sélectionne & confirme
            </p>
          </div>
          
          {/* Étape 2 - Paydunya */}
          <div className="text-center">
            <div className="relative inline-block mb-4">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center border-4 border-white dark:border-slate-800 shadow-lg">
                <CreditCard className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div className="absolute -top-2 -right-2 w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center border-2 border-white dark:border-slate-800">
                <span className="text-xs font-bold text-white">2</span>
              </div>
            </div>
            <h4 className="font-semibold mb-1 text-sm">Paydunya</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Redirection sécurisée
            </p>
          </div>
          
          {/* Étape 3 - USSD */}
          <div className="text-center">
            <div className="relative inline-block mb-4">
              <div className="w-16 h-16 bg-pink-100 dark:bg-pink-900/20 rounded-full flex items-center justify-center border-4 border-white dark:border-slate-800 shadow-lg">
                <Smartphone className="w-6 h-6 text-pink-600 dark:text-pink-400" />
              </div>
              <div className="absolute -top-2 -right-2 w-5 h-5 bg-pink-500 rounded-full flex items-center justify-center border-2 border-white dark:border-slate-800">
                <span className="text-xs font-bold text-white">3</span>
              </div>
            </div>
            <h4 className="font-semibold mb-1 text-sm">USSD</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Paiement mobile
            </p>
          </div>
        </div>
        
        {/* Deuxième rangée */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-md mx-auto mb-8">
          
          {/* Étape 4 - Confirmation */}
          <div className="text-center">
            <div className="relative inline-block mb-4">
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/20 rounded-full flex items-center justify-center border-4 border-white dark:border-slate-800 shadow-lg">
                <Check className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
              <div className="absolute -top-2 -right-2 w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center border-2 border-white dark:border-slate-800">
                <span className="text-xs font-bold text-white">4</span>
              </div>
            </div>
            <h4 className="font-semibold mb-1 text-sm">Confirmation</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Instantanée
            </p>
          </div>
          
          {/* Étape 5 - Validation */}
          <div className="text-center">
            <div className="relative inline-block mb-4">
              <div className="w-16 h-16 bg-teal-100 dark:bg-teal-900/20 rounded-full flex items-center justify-center border-4 border-white dark:border-slate-800 shadow-lg">
                <FileCheck className="w-6 h-6 text-teal-600 dark:text-teal-400" />
              </div>
              <div className="absolute -top-2 -right-2 w-5 h-5 bg-teal-500 rounded-full flex items-center justify-center border-2 border-white dark:border-slate-800">
                <span className="text-xs font-bold text-white">5</span>
              </div>
            </div>
            <h4 className="font-semibold mb-1 text-sm">Validation</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Commande validée
            </p>
          </div>
        </div>
        
        {/* Flux de connexion amélioré */}
        <div className="relative mt-8">
          <div className="flex justify-center items-center gap-2">
            <div className="flex-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
            <div className="flex-1 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
            <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"></div>
            <div className="flex-1 h-1 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full"></div>
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
            <div className="flex-1 h-1 bg-gradient-to-r from-orange-400 to-teal-400 rounded-full"></div>
          </div>
        </div>
        
        {/* Message final amélioré */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-50 dark:bg-green-900/20 rounded-full border border-green-200 dark:border-green-800">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-green-700 dark:text-green-300">
              Processus Paydunya sécurisé en 5 étapes
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
