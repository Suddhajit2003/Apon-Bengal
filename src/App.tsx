import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageLoader from './components/PageLoader';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Mission from './pages/Mission';
import Vision from './pages/Vision';
import Festivals from './pages/Festivals';
import StateEvents from './pages/StateEvents';
import HelpAndSupport from './pages/HelpAndSupport';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    // Prevent scrolling while loading
    document.body.style.overflow = 'hidden';

    // Set a minimum time to show the loader (6 seconds)
    const minLoadTime = 6000;
    const startTime = Date.now();

    const hideLoader = () => {
      const elapsed = Date.now() - startTime;
      const remainingTime = Math.max(0, minLoadTime - elapsed);

      setTimeout(() => {
        setIsLoading(false);
        // Allow scrolling again
        document.body.style.overflow = 'unset';
        
        // Remove loader from DOM after swipe up animation (1000ms)
        setTimeout(() => {
          setShowLoader(false);
        }, 1000);
      }, remainingTime);
    };

    // Wait for all resources to load
    if (document.readyState === 'complete') {
      hideLoader();
    } else {
      window.addEventListener('load', hideLoader);
    }

    return () => {
      window.removeEventListener('load', hideLoader);
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <Router>
      {showLoader && (
        <div
          className={`fixed inset-0 z-[9999] transition-all duration-1000 ${
            isLoading ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
          }`}
        >
          <PageLoader />
        </div>
      )}
      <div 
        className={`min-h-screen bg-white transition-all duration-1000 ${
          isLoading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
        }`}
      >
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/festivals" element={<Festivals />} />
          <Route path="/state-events" element={<StateEvents />} />
          <Route path="/help-support" element={<HelpAndSupport />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
