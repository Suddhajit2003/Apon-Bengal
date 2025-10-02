import { useState, useEffect } from 'react';
import PageLoader from './components/PageLoader';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import QuickServices from './components/QuickServices';
import StatsCounter from './components/StatsCounter';
import VideoShowcase from './components/VideoShowcase';
import EmergencyServices from './components/EmergencyServices';
import AboutUs from './components/AboutUs';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    // Prevent scrolling while loading
    document.body.style.overflow = 'hidden';

    // Set a minimum time to show the loader (4.5 seconds to match slower progress)
    const minLoadTime = 4500;
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
    <>
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
        <HeroSection />
        <QuickServices />
        <StatsCounter />
        <VideoShowcase />
        <EmergencyServices />
        <AboutUs />
        <FAQ />
        <Footer />
      </div>
    </>
  );
}
