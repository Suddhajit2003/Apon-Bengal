import { Facebook, Twitter, Instagram, Youtube, Mail, MapPin, Phone } from 'lucide-react';
import Logo from '/Logo.png';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-sky-900 to-sky-700 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={Logo} 
                alt="আপন বাংলা Logo" 
                className="h-16 w-auto"
              />
              {/* <div>
                <h3 className="text-white">আপন বাংলা</h3>
              </div> */}
            </div>
            {/* <p className="text-sky-100 text-sm mb-4">
              West Bengal Government's digital initiative for transparent and efficient public services.
            </p> */}
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-4">XXXX</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sky-100 hover:text-white transition-colors text-sm">XXX</a></li>
              <li><a href="#" className="text-sky-100 hover:text-white transition-colors text-sm">XXX</a></li>
              <li><a href="#" className="text-sky-100 hover:text-white transition-colors text-sm">XXX</a></li>
              <li><a href="#" className="text-sky-100 hover:text-white transition-colors text-sm">XXX</a></li>
              <li><a href="#" className="text-sky-100 hover:text-white transition-colors text-sm">XXX</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white mb-4">XXXX</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sky-100 hover:text-white transition-colors text-sm">XXX</a></li>
              <li><a href="#" className="text-sky-100 hover:text-white transition-colors text-sm">XXX</a></li>
              <li><a href="#" className="text-sky-100 hover:text-white transition-colors text-sm">XXX</a></li>
              <li><a href="#" className="text-sky-100 hover:text-white transition-colors text-sm">XXX</a></li>
              <li><a href="#" className="text-sky-100 hover:text-white transition-colors text-sm">XXX</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white mb-4">address</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sky-100 text-sm">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>West Bengal Secretariat, Kolkata - 700001</span>
              </li>
              <li className="flex items-center gap-2 text-sky-100 text-sm">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>1800-XXX-XXXX</span>
              </li>
              <li className="flex items-center gap-2 text-sky-100 text-sm">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>support@aponbangla.gov.in</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-sky-600 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sky-100 text-sm text-center md:text-left">
              © 2024 আপন বাংলা | Government of West Bengal. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sky-100 hover:text-white transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-sky-100 hover:text-white transition-colors text-sm">Terms of Service</a>
              <a href="#" className="text-sky-100 hover:text-white transition-colors text-sm">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
