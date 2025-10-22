import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';
import { NotificationProvider } from './components/NotificationSystem';
import CookieConsent from './components/CookieConsent';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Services from './pages/Services';
import News from './pages/News';
import NewsArticle from './pages/NewsArticle';
import Careers from './pages/Careers';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { NavigationProvider } from './context/NavigationContext';
import OrganizationSchema from './components/OrganizationSchema';
import WebsiteSchema from './components/WebsiteSchema';

// Component to scroll to top on route change
const ScrollToTop: React.FC = () => {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  return null;
};

function App() {
  return (
    <HelmetProvider>
      <NotificationProvider>
        <NavigationProvider>
          <Router>
            <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
              <OrganizationSchema />
              <WebsiteSchema />
              <Navbar />
              <ScrollToTop />
              <main>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/news" element={<News />} />
                  <Route path="/news/:slug" element={<NewsArticle />} />
                  {/* <Route path="/blogs" element={<Blogs />} /> */}
                  <Route path="/careers" element={<Careers />} />
                  <Route path="/contact" element={<Contact />} />
                  {/* Catch all other routes and redirect to home */}
                  <Route path="*" element={<Home />} />
                </Routes>
              </main>
              <Footer />
              <CookieConsent />
            </div>
          </Router>
        </NavigationProvider>
      </NotificationProvider>
    </HelmetProvider>
  );
}

export default App;