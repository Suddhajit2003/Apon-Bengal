import { useState, useEffect } from 'react';
import { Globe, Phone, User, Bell } from 'lucide-react';
import HeaderLogo from '/src/Public/Header_Logo.png';

export default function Header() {
  const [language, setLanguage] = useState('en');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-lg'
          : 'bg-white/90 backdrop-blur-sm shadow-md'
      }`}
    >
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-sky-500 to-sky-600 text-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-2">
            {/* Left Side */}
            <div className="flex items-center gap-6">
              <a
                href="tel:1800-XXX-XXXX"
                className="flex items-center gap-2 hover:text-sky-100 transition-colors group"
              >
                <Phone className="w-4 h-4 group-hover:animate-pulse" />
                <span className="text-sm hidden sm:inline">হেল্পলাইন: 1800-XXX-XXXX</span>
              </a>
              <a
                href="#notifications"
                className="flex items-center gap-2 hover:text-sky-100 transition-colors group"
              >
                <Bell className="w-4 h-4 group-hover:animate-bounce" />
                <span className="text-sm hidden lg:inline">নোটিফিকেশন</span>
              </a>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setLanguage(language === 'bn' ? 'en' : 'bn')}
                className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded-full transition-all duration-300 hover:scale-105"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm">{language === 'bn' ? 'English' : 'বাংলা'}</span>
              </button>
              <button className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-all duration-300 hover:scale-105">
                <User className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <img 
                src={HeaderLogo} 
                alt="আপন বাংলা Logo" 
                className="h-20 w-auto transform group-hover:scale-110 transition-all duration-300"
              />
            </div>
            {/* <div>
              <h1 className="text-2xl bg-gradient-to-r from-sky-500 to-sky-700 bg-clip-text text-transparent">
                আপন বাংলা
              </h1>
              <p className="text-xs text-gray-600">West Bengal Government</p>
            </div> */}
          </a>


          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button className="bg-gradient-to-r from-sky-500 to-sky-600 text-white px-6 py-2.5 rounded-xl hover:from-sky-600 hover:to-sky-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              {language === 'bn' ? 'লগইন' : 'Login'}
            </button>
          </div>

        </div>
      </div>

    </header>
  );
}