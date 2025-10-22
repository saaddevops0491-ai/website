import React, { useState } from 'react';
import { Mail, Send, CheckCircle, AlertCircle, Bell, Users, TrendingUp } from 'lucide-react';
import { useNotifications } from './NotificationSystem';


interface NewsletterSubscriptionProps {
  variant?: 'default' | 'compact' | 'footer';
  className?: string;
}

const NewsletterSubscription: React.FC<NewsletterSubscriptionProps> = ({ 
  variant = 'default',
  className = '' 
}) => {
  const { addNotification } = useNotifications();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscriptionSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      addNotification({
        type: 'error',
        title: 'Invalid Email',
        message: 'Please enter a valid email address.',
        duration: 4000
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      addNotification({
        type: 'error',
        title: 'Invalid Email Format',
        message: 'Please enter a valid email address format.',
        duration: 4000
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate backend maintenance
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      addNotification({
        type: 'warning',
        title: 'Newsletter Maintenance',
        message: 'Our newsletter system is temporarily under maintenance. Please email us at contact@saherflow.com to subscribe manually.',
        duration: 8000,
        action: {
          label: 'Send Email',
          onClick: () => window.open(`mailto:contact@saherflow.com?subject=Newsletter Subscription&body=Please subscribe ${email.trim()} to your newsletter.`)
        }
      });
      
      setEmail('');
    } catch (error) {
      console.error('Subscription error:', error);
      addNotification({
        type: 'error',
        title: 'Subscription Failed',
        message: 'Failed to subscribe. Please try again or contact us directly.',
        duration: 6000
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (variant === 'compact') {
    return (
      <div className={`${className}`}>
        <form onSubmit={handleSubscriptionSubmit} className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-navy-500 dark:focus:ring-yellow-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            placeholder="your.email@company.com"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-navy-900 dark:bg-yellow-500 text-white dark:text-navy-900 px-6 py-2 rounded-lg font-semibold hover:bg-navy-800 dark:hover:bg-yellow-400 transition-colors disabled:opacity-50"
          >
            {isSubmitting ? '...' : 'Subscribe'}
          </button>
        </form>
      </div>
    );
  }

  // Default variant - full featured
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 ${className}`}>
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="p-3 bg-yellow-500 rounded-full">
            <Bell className="w-6 h-6 text-navy-900" />
          </div>
          <h3 className="text-2xl font-bold text-navy-900 dark:text-white">Stay Updated</h3>
        </div>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          Get the latest news, product updates, and industry insights delivered to your inbox
        </p>
      </div>

      <form onSubmit={handleSubscriptionSubmit} className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Email Address *
          </label>
          <div className="relative">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 pr-12 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-navy-500 dark:focus:ring-yellow-500 focus:border-transparent transition-colors duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="your.email@company.com"
            />
            <Mail size={20} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-navy-900 dark:bg-yellow-500 text-white dark:text-navy-900 py-4 px-8 rounded-lg font-semibold text-lg hover:bg-navy-800 dark:hover:bg-yellow-400 transition-colors duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-2 border-white dark:border-navy-900 border-t-transparent" />
              Subscribing...
            </>
          ) : (
            <>
              <Send size={20} />
              Subscribe to Newsletter
            </>
          )}
        </button>
      </form>

      {/* Trust Indicators */}
      <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
  <div className="grid grid-cols-2 gap-8 justify-center text-center">
    
    {/* Monthly Updates */}
    <div className="flex flex-col items-center">
      <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-2">
        <TrendingUp className="w-6 h-6 text-green-600 dark:text-green-400" />
      </div>
      <div className="text-sm font-semibold text-gray-900 dark:text-white">Monthly</div>
      <div className="text-xs text-gray-500 dark:text-gray-400">Updates</div>
    </div>

    {/* No Spam */}
    <div className="flex flex-col items-center">
      <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-2">
        <Mail className="w-6 h-6 text-purple-600 dark:text-purple-400" />
      </div>
      <div className="text-sm font-semibold text-gray-900 dark:text-white">No Spam</div>
      <div className="text-xs text-gray-500 dark:text-gray-400">Promise</div>
    </div>
  </div>
        
        <div className="mt-4 text-center">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            🔒 Your privacy is protected. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSubscription;