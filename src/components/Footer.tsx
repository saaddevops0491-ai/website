import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Youtube, 
  Twitter, 
  Send,
  ExternalLink,
  FileText,
  Users,
  Settings,
  MessageCircle,
  CheckCircle,
  Facebook
} from 'lucide-react';
import NewsletterSubscription from './NewsletterSubscription';

const Footer: React.FC = () => {

  const quickLinks = [
    { name: 'About Us', href: '/' },
    { name: 'Expert Blog', href: '/blogs' },
    { name: 'Case Studies', href: '/news' },
    { name: 'Support Center', href: '/contact' },
    { name: 'Product Catalog', href: 'https://saherflow.com/wp-content/uploads/2025/01/Saher-Products-Broucher-2025-01.pdf', external: true },
    { name: 'Services Brochure', href: 'https://saherflow.com/wp-content/uploads/2025/02/SaherBrochure-Vertical-English_MAK.pdf', external: true },
  ];

  const services = [
    { name: 'Water Cut Meters', href: '/products' },
    { name: 'Multiphase Flow Meters', href: '/products' },
    { name: 'Skid-Mounted Solutions', href: '/products' },
    { name: 'Digital Twin Services', href: '/services' },
    { name: 'Calibration Services', href: '/services' },
    { name: 'Technical Support', href: '/contact' },
  ];

  const resources = [
    { name: 'Product Brochures', href: '/products' },
    { name: 'Technology Blog', href: '/blogs' },
    { name: 'Technical Papers', href: '/news' },
    { name: 'Webinars & Events', href: '/news' },
    { name: 'Industry Insights', href: '/news' },
    { name: 'White Papers', href: '/news' },
    { name: 'FAQs', href: '/contact' },
  ];

  return (
    <footer className="bg-navy-900 dark:bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 pt-16 pb-8">
        <div className="grid lg:grid-cols-10 gap-12">
          {/* Company Info - Takes 4 columns */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="https://res.cloudinary.com/drnak5yb2/image/upload/v1756278804/light_mode_logo_saher_btbdos.svg"
                alt="Saher Flow Solutions"
                className="h-12 w-auto"
              />
            </div>
            
            <p className="text-gray-300 leading-relaxed text-lg">
              Leading provider of real-time multiphase flow measurement solutions for the oil and gas industry. 
              Our revolutionary DMOR technology delivers 24/7 trusted measurements with minimal calibration requirement.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-yellow-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-300 font-medium">Headquarters</p>
                  <p className="text-gray-400 text-sm">
                    KAUST, Office 2112, Olayan Building 40 King Abdulla University of Science and Technology, Thuwal 23955, Saudi Arabia
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-yellow-500 flex-shrink-0" />
                <div>
                  <a href="tel:+966542862009" className="text-gray-300 hover:text-white transition-colors">
                    +966 54 286 2009
                  </a>
                  <p className="text-gray-400 text-sm">Sun-Thu 8:00 AM - 5:00 PM AST</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-yellow-500 flex-shrink-0" />
                <div>
                  <a href="mailto:contact@saherflow.com" className="text-gray-300 hover:text-white transition-colors">
                    contact@saherflow.com
                  </a>
                  <p className="text-gray-400 text-sm">Response within 24 hours</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a 
                href="https://www.linkedin.com/company/saherflow" 
                className="p-3 bg-white/10 rounded-lg hover:bg-yellow-500 hover:text-navy-900 transition-all duration-300 group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links - 2 columns */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-xl font-bold text-yellow-500 flex items-center gap-2 mb-6">
              <Settings size={20} />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  {link.external ? (
                    <a 
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-200 flex items-center gap-2 group"
                    >
                      <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </a>
                  ) : (
                    <a 
                      href={link.href}
                      className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-200 flex items-center gap-2 group"
                    >
                      <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Stay Connected Newsletter - Expanded to 4 columns */}
          <div className="lg:col-span-4">
            <div className="bg-gradient-to-br from-navy-800/50 to-navy-700/30 dark:from-gray-700/50 dark:to-gray-600/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10 dark:border-gray-600/20 h-full">
              <NewsletterSubscription />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-center md:text-left">
              <p>&copy; 2025 Saher Flow Solutions. All rights reserved.</p>
              <p className="text-sm mt-1">Innovating flow measurement technology from Saudi Arabia for the world</p>
            </div>
       
          </div>
          
          {/* Certifications and Location */}
          <div className="mt-8 pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              {/* Certifications */}
              <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-white/20 rounded border border-white/30 flex items-center justify-center">
                    <span className="text-xs font-bold">ISO</span>
                  </div>
                  <span>ISO 9001:2015</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-white/20 rounded border border-white/30 flex items-center justify-center">
                    <span className="text-xs font-bold">API</span>
                  </div>
                  <span>API Approved</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-white/20 rounded border border-white/30 flex items-center justify-center">
                    <span className="text-xs font-bold">CE</span>
                  </div>
                  <span>CE Compliant</span>
                </div>
           <div className="flex items-center gap-2">
  <div className="w-8 h-8  rounded border border-white/30 flex items-center justify-center overflow-hidden">
    <img
      src="https://res.cloudinary.com/drnak5yb2/image/upload/v1756467074/WhatsApp_Image_2025-08-28_at_20.36.54_4cca8ab0_gzgchd.jpg"
      alt="IECEx/ATEX logo"
      loading="lazy"
      className="w-6 h-6 object-contain"
    />
  </div>
  <span>IECEx/ATEX certified</span>
</div>

                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-white/20 rounded border border-white/30 flex items-center justify-center">
                    <span className="text-xs font-bold">KSA</span>
                  </div>
                  <span>Made in Saudia Arabia</span>
                </div>
              </div>

              {/* Vision 2030 Badge */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 bg-green-600/20 border border-green-500/30 rounded-lg px-3 py-2">
                  <div className="w-6 h-6 bg-green-600 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">2030</span>
                  </div>
                  <span className="text-green-400 font-medium text-sm">Supporting Vision 2030</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;