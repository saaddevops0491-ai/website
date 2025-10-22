import React, { useState, useEffect } from 'react';
import { Cookie, Settings, X, Check, Shield, Eye, BarChart3, ExternalLink } from 'lucide-react';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

const CookieConsent: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always true, can't be disabled
    analytics: false,
    marketing: false,
    functional: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    } else {
      // Load saved preferences
      try {
        const savedPreferences = JSON.parse(consent);
        setPreferences(savedPreferences);
        applyCookieSettings(savedPreferences);
      } catch (error) {
        console.error('Error parsing cookie preferences:', error);
      }
    }
  }, []);

  const applyCookieSettings = (prefs: CookiePreferences) => {
    // Apply analytics cookies
    if (prefs.analytics) {
      // Enable Google Analytics or other analytics
      console.log('Analytics cookies enabled');
      // Example: gtag('consent', 'update', { analytics_storage: 'granted' });
    }

    // Apply marketing cookies
    if (prefs.marketing) {
      // Enable marketing/advertising cookies
      console.log('Marketing cookies enabled');
    }

    // Apply functional cookies
    if (prefs.functional) {
      // Enable functional cookies (chat widgets, etc.)
      console.log('Functional cookies enabled');
    }
  };

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
    };
    
    setPreferences(allAccepted);
    localStorage.setItem('cookie-consent', JSON.stringify(allAccepted));
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    applyCookieSettings(allAccepted);
    setShowBanner(false);
  };

  const acceptNecessaryOnly = () => {
    const necessaryOnly = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false,
    };
    
    setPreferences(necessaryOnly);
    localStorage.setItem('cookie-consent', JSON.stringify(necessaryOnly));
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    applyCookieSettings(necessaryOnly);
    setShowBanner(false);
  };

  const saveCustomPreferences = () => {
    localStorage.setItem('cookie-consent', JSON.stringify(preferences));
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    applyCookieSettings(preferences);
    setShowBanner(false);
    setShowSettings(false);
  };

  const togglePreference = (key: keyof CookiePreferences) => {
    if (key === 'necessary') return; // Can't disable necessary cookies
    
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Cookie Banner */}
      <div className={`
        fixed bottom-0 left-0 right-0 z-[9998] 
        transform transition-all duration-500 ease-out
        ${showBanner ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}
      `}>
        <div className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 shadow-2xl">
          <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-6">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-6">
              {/* Icon and Content */}
              <div className="flex items-start gap-4 flex-1">
                <div className="p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg flex-shrink-0">
                  <Cookie className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    We value your privacy
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    We use cookies to enhance your browsing experience, provide personalized content, and analyze our traffic. 
                    By clicking "Accept All", you consent to our use of cookies. You can customize your preferences or learn more in our{' '}
                    <button 
                      onClick={() => setShowSettings(true)}
                      className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                    >
                      Cookie Settings
                    </button>
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto lg:flex-shrink-0">
                <button
                  onClick={() => setShowSettings(true)}
                  className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-sm font-medium"
                >
                  <Settings className="w-4 h-4" />
                  Customize
                </button>
                
                <button
                  onClick={acceptNecessaryOnly}
                  className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-sm font-medium"
                >
                  Necessary Only
                </button>
                
                <button
                  onClick={acceptAll}
                  className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm"
                >
                  <Check className="w-4 h-4" />
                  Accept All
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cookie Settings Modal */}
      {showSettings && (
        <>
          {/* Settings Modal Overlay */}
          <div 
            className="fixed inset-0 z-[9997] bg-black/30 backdrop-blur-sm"
            onClick={() => setShowSettings(false)}
          />
          
          {/* Settings Modal */}
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
            <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Cookie Preferences</h2>
                  <button
                    onClick={() => setShowSettings(false)}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              <div className="p-6 space-y-6">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  We use different types of cookies to optimize your experience on our website. 
                  You can choose which categories you'd like to allow.
                </p>

                {/* Cookie Categories */}
                <div className="space-y-4">
                  {/* Necessary Cookies */}
                  <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <Shield className="w-5 h-5 text-green-500" />
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Necessary Cookies</h3>
                      </div>
                      <div className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                        Always Active
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                      These cookies are essential for the website to function properly. They enable basic features like page navigation and access to secure areas.
                    </p>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Examples: Session management, security tokens, user preferences
                    </div>
                  </div>

                  {/* Analytics Cookies */}
                  <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <BarChart3 className="w-5 h-5 text-blue-500" />
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Analytics Cookies</h3>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={preferences.analytics}
                          onChange={() => togglePreference('analytics')}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                      Help us understand how visitors interact with our website by collecting and reporting information anonymously.
                    </p>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Examples: Google Analytics, page views, user behavior
                    </div>
                  </div>

                  {/* Marketing Cookies */}
                  <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <Eye className="w-5 h-5 text-purple-500" />
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Marketing Cookies</h3>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={preferences.marketing}
                          onChange={() => togglePreference('marketing')}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
                      </label>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                      Used to track visitors across websites to display relevant advertisements and measure campaign effectiveness.
                    </p>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Examples: LinkedIn Insight Tag, Facebook Pixel, Google Ads
                    </div>
                  </div>

                  {/* Functional Cookies */}
                  <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <Settings className="w-5 h-5 text-orange-500" />
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Functional Cookies</h3>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={preferences.functional}
                          onChange={() => togglePreference('functional')}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300 dark:peer-focus:ring-orange-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-orange-600"></div>
                      </label>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                      Enable enhanced functionality like chat widgets, social media features, and personalized content.
                    </p>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Examples: Chat widgets, social media embeds, language preferences
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <button
                    onClick={acceptNecessaryOnly}
                    className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors font-medium"
                  >
                    Necessary Only
                  </button>
                  <button
                    onClick={saveCustomPreferences}
                    className="flex-1 bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Save Preferences
                  </button>
                  <button
                    onClick={acceptAll}
                    className="flex-1 bg-green-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                  >
                    Accept All
                  </button>
                </div>

            
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CookieConsent;