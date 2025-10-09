import { useState, useEffect } from 'react';
import { Menu, X, Globe, Phone, User, Bell, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Logo from '/src/Public/Logo.png';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState('bn');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { bn: 'হোম', en: 'Home', href: '#home' },
    { bn: 'সেবা', en: 'Services', href: '#services' },
    { bn: 'অর্জন', en: 'Achievements', href: '#achievements' },
    { bn: 'গ্যালারি', en: 'Gallery', href: '#gallery' },
    { bn: 'যোগাযোগ', en: 'Contact', href: '#contact' }
  ];

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
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative">
              <img 
                src={Logo} 
                alt="আপন বাংলা Logo" 
                className="h-14 w-auto transform group-hover:scale-110 transition-all duration-300"
              />
            </div>
            {/* <div>
              <h1 className="text-2xl bg-gradient-to-r from-sky-500 to-sky-700 bg-clip-text text-transparent">
                আপন বাংলা
              </h1>
              <p className="text-xs text-gray-600">West Bengal Government</p>
            </div> */}
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="relative px-4 py-2 text-gray-700 hover:text-sky-600 transition-all duration-300 group"
              >
                <span className="relative z-10">
                  {language === 'bn' ? item.bn : item.en}
                </span>
                <span className="absolute inset-0 bg-sky-50 rounded-lg transform scale-0 group-hover:scale-100 transition-transform duration-300"></span>
              </a>
            ))}
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 px-4 py-2 text-gray-700 hover:text-sky-600 transition-all duration-300">
                <span>{language === 'bn' ? 'আরও' : 'More'}</span>
                <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
              </button>
              <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                <div className="p-2 space-y-1">
                  <a href="#about" className="block px-4 py-2.5 text-gray-700 hover:bg-sky-50 hover:text-sky-600 rounded-lg transition-colors">
                    {language === 'bn' ? 'আমাদের সম্পর্কে' : 'About Us'}
                  </a>
                  <a href="#departments" className="block px-4 py-2.5 text-gray-700 hover:bg-sky-50 hover:text-sky-600 rounded-lg transition-colors">
                    {language === 'bn' ? 'বিভাগ' : 'Departments'}
                  </a>
                  <a href="#downloads" className="block px-4 py-2.5 text-gray-700 hover:bg-sky-50 hover:text-sky-600 rounded-lg transition-colors">
                    {language === 'bn' ? 'ডাউনলোড' : 'Downloads'}
                  </a>
                  <a href="#faq" className="block px-4 py-2.5 text-gray-700 hover:bg-sky-50 hover:text-sky-600 rounded-lg transition-colors">
                    {language === 'bn' ? 'FAQ' : 'FAQ'}
                  </a>
                </div>
              </div>
            </div>
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button className="bg-gradient-to-r from-sky-500 to-sky-600 text-white px-6 py-2.5 rounded-xl hover:from-sky-600 hover:to-sky-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              {language === 'bn' ? 'লগইন' : 'Login'}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-sky-600 hover:bg-sky-50 rounded-xl transition-all duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden border-t border-gray-100 bg-white"
          >
            <nav className="container mx-auto px-4 py-4 space-y-2">
              {navItems.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="block px-4 py-3 text-gray-700 hover:bg-sky-50 hover:text-sky-600 rounded-xl transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {language === 'bn' ? item.bn : item.en}
                </motion.a>
              ))}
              <div className="pt-2 border-t border-gray-100 space-y-2">
                <a
                  href="#about"
                  className="block px-4 py-3 text-gray-700 hover:bg-sky-50 hover:text-sky-600 rounded-xl transition-all duration-300"
                >
                  {language === 'bn' ? 'আমাদের সম্পর্কে' : 'About Us'}
                </a>
                <a
                  href="#departments"
                  className="block px-4 py-3 text-gray-700 hover:bg-sky-50 hover:text-sky-600 rounded-xl transition-all duration-300"
                >
                  {language === 'bn' ? 'বিভাগ' : 'Departments'}
                </a>
              </div>
              <button className="w-full bg-gradient-to-r from-sky-500 to-sky-600 text-white px-6 py-3.5 rounded-xl hover:from-sky-600 hover:to-sky-700 transition-all duration-300 shadow-lg mt-4">
                {language === 'bn' ? 'লগইন' : 'Login'}
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}