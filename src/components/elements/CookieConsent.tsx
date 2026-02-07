
'use client';

import React, { useState, useEffect } from 'react';
import { Check, ChevronRight, Cookie, InfoIcon } from "lucide-react";

interface CookieOption {
  id: string;
  name: string;
  description: string;
  required: boolean;
  enabled: boolean;
}

const CookieConsent: React.FC = () => {
  const [showConsent, setShowConsent] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [cookieOptions, setCookieOptions] = useState<CookieOption[]>([
    {
      id: 'necessary',
      name: 'Essentiels',
      description: 'Indispensables au bon fonctionnement du site.',
      required: true,
      enabled: true
    },
    {
      id: 'functional',
      name: 'Fonctionnels',
      description: 'Permettent des fonctionnalités personnalisées et améliorées.',
      required: false,
      enabled: false
    },
    {
      id: 'analytics',
      name: 'Analytiques',
      description: 'Nous aident à comprendre comment les visiteurs interagissent avec notre site.',
      required: false,
      enabled: false
    },
    {
      id: 'marketing',
      name: 'Marketing',
      description: 'Utilisés pour afficher des publicités pertinentes et suivre nos campagnes.',
      required: false,
      enabled: false
    }
  ]);

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem('cookieConsent');
    if (!hasConsented) {
      // Delay showing the consent to allow page to load first
      const timer = setTimeout(() => {
        setShowConsent(true);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    setCookieOptions(prevOptions =>
      prevOptions.map(option => ({ ...option, enabled: true }))
    );
    
    saveConsent(true);
  };

  const handleAcceptNecessary = () => {
    setCookieOptions(prevOptions =>
      prevOptions.map(option => ({ 
        ...option, 
        enabled: option.required
      }))
    );
    
    saveConsent(false);
  };

  const saveConsent = (allAccepted: boolean) => {
    // Save consent preferences to localStorage
    localStorage.setItem('cookieConsent', 'true');
    localStorage.setItem('cookiePreferences', JSON.stringify(cookieOptions));
    
    setShowConsent(false);
  };

  const handleToggleOption = (id: string) => {
    setCookieOptions(prevOptions =>
      prevOptions.map(option => 
        option.id === id && !option.required
          ? { ...option, enabled: !option.enabled }
          : option
      )
    );
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookieConsent', 'true');
    localStorage.setItem('cookiePreferences', JSON.stringify(cookieOptions));
    
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <>
      <div className="cookie-consent-backdrop" onClick={() => !expanded && setExpanded(true)} />
      <div className="cookie-consent-container">
        <div className="cookie-consent-card">
          {!expanded ? (
            <div className="cookie-consent-simple">
              <div className="cookie-consent-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <div className="cookie-consent-icon">
                    <Cookie size={24} color="white" />
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 className="cookie-consent-title">Confidentialité & Cookies</h3>
                    <p className="cookie-consent-description">
                      Nous utilisons des cookies pour améliorer votre expérience et analyser notre trafic. Votre vie privée compte.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="cookie-consent-simple-buttons">
                <button 
                  className="cookie-consent-button cookie-consent-button-secondary"
                  onClick={() => setExpanded(true)}
                >
                  <ChevronRight size={16} />
                  Personnaliser
                </button>
                <button 
                  className="cookie-consent-button cookie-consent-button-secondary"
                  onClick={handleAcceptNecessary}
                >
                  Essentiels uniquement
                </button>
                <button 
                  className="cookie-consent-button cookie-consent-button-primary"
                  onClick={handleAcceptAll}
                >
                  Tout accepter
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="cookie-consent-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div className="cookie-consent-icon">
                    <Cookie size={24} color="white" />
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 className="cookie-consent-title">Préférences Cookies</h3>
                    <p className="cookie-consent-description">
                      Choisissez les cookies que vous souhaitez autoriser. Vous pouvez modifier ces paramètres à tout moment.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="cookie-consent-body">
                <div className="cookie-consent-options">
                  {cookieOptions.map((option) => (
                    <div key={option.id} className="cookie-consent-option">
                      <div className="cookie-consent-option-info">
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <span className="cookie-consent-option-name">{option.name}</span>
                          {option.required && (
                            <span className="cookie-consent-badge">Obligatoire</span>
                          )}
                        </div>
                        <p className="cookie-consent-option-desc">{option.description}</p>
                      </div>
                      
                      <div 
                        className={`cookie-consent-toggle ${option.enabled ? 'active' : ''} ${option.required ? 'disabled' : ''}`}
                        onClick={() => !option.required && handleToggleOption(option.id)}
                      >
                        <div className="cookie-consent-toggle-thumb" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="cookie-consent-footer">
                <button 
                  className="cookie-consent-button cookie-consent-button-secondary"
                  onClick={() => setExpanded(false)}
                >
                  Retour
                </button>
                <button 
                  className="cookie-consent-button cookie-consent-button-secondary"
                  onClick={handleAcceptNecessary}
                >
                  Essentiels uniquement
                </button>
                <button 
                  className="cookie-consent-button cookie-consent-button-primary"
                  onClick={handleSavePreferences}
                >
                  <Check size={16} />
                  Enregistrer
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CookieConsent;
