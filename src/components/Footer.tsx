import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d97706' fill-opacity='0.1'%3E%3Cpath d='M20 20c0 11.046-8.954 20-20 20v20h40V20H20z'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 py-12 lg:py-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Company Info */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-amber-600 to-amber-700 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg lg:text-xl">C</span>
              </div>
              <div>
                <h3 className="text-xl lg:text-2xl font-bold">CraftedWood</h3>
                <p className="text-xs lg:text-sm text-gray-400">Furniture Manufacturing</p>
              </div>
            </div>
            <p className="text-sm lg:text-base text-gray-300 leading-relaxed">
              Creating beautiful, handcrafted furniture since 1985. 
              Every piece tells a story of quality, craftsmanship, and attention to detail.
            </p>
            <div className="flex space-x-3 lg:space-x-4">
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base lg:text-lg font-semibold mb-4 lg:mb-6 text-amber-500">Quick Links</h4>
            <ul className="space-y-2 lg:space-y-3">
              <li><a href="#home" className="text-sm lg:text-base text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="text-sm lg:text-base text-gray-300 hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="text-sm lg:text-base text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#portfolio" className="text-sm lg:text-base text-gray-300 hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="text-sm lg:text-base text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base lg:text-lg font-semibold mb-4 lg:mb-6 text-amber-500">Our Services</h4>
            <ul className="space-y-2 lg:space-y-3">
              <li><a href="#" className="text-sm lg:text-base text-gray-300 hover:text-white transition-colors">Custom Furniture</a></li>
              <li><a href="#" className="text-sm lg:text-base text-gray-300 hover:text-white transition-colors">Kitchen Cabinets</a></li>
              <li><a href="#" className="text-sm lg:text-base text-gray-300 hover:text-white transition-colors">Restoration</a></li>
              <li><a href="#" className="text-sm lg:text-base text-gray-300 hover:text-white transition-colors">Interior Woodwork</a></li>
              <li><a href="#" className="text-sm lg:text-base text-gray-300 hover:text-white transition-colors">Installation</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base lg:text-lg font-semibold mb-4 lg:mb-6 text-amber-500">Contact Info</h4>
            <div className="space-y-3 lg:space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-amber-500 mt-1 flex-shrink-0" />
                <div className="text-sm lg:text-base text-gray-300">
                  <p>123 Craftsman Avenue</p>
                  <p>Woodville, NY 12345</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-amber-500 flex-shrink-0" />
                <p className="text-sm lg:text-base text-gray-300">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-amber-500 flex-shrink-0" />
                <p className="text-sm lg:text-base text-gray-300">info@craftedwood.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 py-4 lg:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-xs lg:text-sm text-center md:text-left">
              © {currentYear} CraftedWood Furniture Manufacturing. All rights reserved.
            </p>
            <div className="flex space-x-4 lg:space-x-6 text-xs lg:text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Warranty</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;