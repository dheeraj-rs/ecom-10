import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, Clock } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Top contact bar - Hidden on mobile, visible on tablet+ */}
      <div className="hidden md:block bg-gradient-to-r from-amber-900 via-amber-800 to-amber-900 text-white py-3 px-4 text-sm shadow-lg relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        <div className="container mx-auto flex justify-between items-center relative z-10">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 hover:text-amber-200 transition-colors">
              <Phone size={16} className="text-amber-300" />
              <span className="font-medium">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2 hover:text-amber-200 transition-colors">
              <Mail size={16} className="text-amber-300" />
              <span className="font-medium">info@craftedwood.com</span>
            </div>
            <div className="flex items-center space-x-2 hover:text-amber-200 transition-colors">
              <MapPin size={16} className="text-amber-300" />
              <span className="font-medium">Woodville, NY</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Clock size={16} className="text-amber-300" />
            <span className="font-medium">Mon-Fri: 8AM-6PM | Sat: 9AM-4PM</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-amber-100' 
          : 'bg-white/90 backdrop-blur-md shadow-xl'
      }`}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-4 lg:py-6">
            {/* Logo - Enhanced for mobile */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-amber-600 via-amber-700 to-amber-800 rounded-xl flex items-center justify-center shadow-xl transform hover:scale-105 transition-transform duration-300">
                  <span className="text-white font-bold text-xl lg:text-2xl">C</span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gradient-to-br from-orange-400 to-red-500 rounded-full shadow-lg"></div>
              </div>
              <div>
                <h1 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                  CraftedWood
                </h1>
                <p className="text-xs lg:text-sm text-amber-700 font-medium">Premium Furniture Manufacturing</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {[
                { name: 'Home', path: '/' },
                { name: 'Gallery', path: '/gallery' },
                { name: 'Shop', path: '/shop' },
                { name: 'Custom Order', path: '/custom-order' }
              ].map((item) => (
                <Link 
                  key={item.name}
                  to={item.path}
                  className={`relative transition-all duration-300 font-medium text-lg group ${
                    location.pathname === item.path 
                      ? 'text-amber-700' 
                      : 'text-gray-700 hover:text-amber-700'
                  }`}
                >
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-amber-600 to-amber-700 transition-all duration-300 ${
                    location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </Link>
              ))}
            </nav>

            {/* CTA Button Desktop */}
            <div className="hidden lg:flex items-center space-x-4">
              <button className="bg-gradient-to-r from-amber-600 to-amber-700 text-white px-8 py-3 rounded-xl hover:from-amber-700 hover:to-amber-800 transition-all duration-300 font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 text-lg">
                Get Free Quote
              </button>
            </div>

            {/* Mobile Menu Button - Enhanced */}
            <button 
              onClick={toggleMenu}
              className="lg:hidden relative w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-700 rounded-xl flex items-center justify-center text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative">
                {isMenuOpen ? (
                  <X size={24} className="transform rotate-0 transition-transform duration-300" />
                ) : (
                  <Menu size={24} className="transform rotate-0 transition-transform duration-300" />
                )}
              </div>
            </button>
          </div>

          {/* Mobile Navigation - Completely redesigned */}
          <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMenuOpen ? 'max-h-screen opacity-100 pb-6' : 'max-h-0 opacity-0'
          }`}>
            <div className="bg-gradient-to-br from-white to-amber-50/50 rounded-2xl shadow-2xl border border-amber-100 p-6 mx-2 mb-4 backdrop-blur-xl">
              {/* Mobile Contact Info */}
              <div className="grid grid-cols-1 gap-4 mb-6 p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-200/50">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-amber-600 to-amber-700 rounded-lg flex items-center justify-center">
                    <Phone size={16} className="text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-amber-600 to-amber-700 rounded-lg flex items-center justify-center">
                    <Mail size={16} className="text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">info@craftedwood.com</span>
                </div>
              </div>

              {/* Mobile Navigation Links */}
              <nav className="space-y-3">
                {[
                  { name: 'Home', path: '/' },
                  { name: 'Gallery', path: '/gallery' },
                  { name: 'Shop', path: '/shop' },
                  { name: 'Custom Order', path: '/custom-order' }
                ].map((item, index) => (
                  <Link 
                    key={item.name}
                    to={item.path}
                    className={`flex items-center justify-between p-4 backdrop-blur-sm rounded-xl transition-all duration-300 font-medium shadow-sm hover:shadow-lg transform hover:scale-[1.02] border ${
                      location.pathname === item.path
                        ? 'bg-gradient-to-r from-amber-50 to-orange-50 text-amber-700 border-amber-200'
                        : 'bg-white/80 text-gray-700 hover:text-amber-700 border-gray-100 hover:border-amber-200 hover:bg-gradient-to-r hover:from-amber-50 hover:to-orange-50'
                    }`}
                    onClick={toggleMenu}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <span className="text-lg">{item.name}</span>
                    <div className={`w-2 h-2 rounded-full ${
                      location.pathname === item.path
                        ? 'bg-gradient-to-br from-amber-600 to-orange-600'
                        : 'bg-gradient-to-br from-amber-400 to-orange-500'
                    }`}></div>
                  </Link>
                ))}
              </nav>

              {/* Mobile CTA Button */}
              <div className="mt-6 space-y-3">
                <Link 
                  to="/custom-order"
                  className="block w-full bg-gradient-to-r from-amber-600 to-amber-700 text-white py-4 px-6 rounded-xl hover:from-amber-700 hover:to-amber-800 transition-all duration-300 font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 text-center"
                  onClick={toggleMenu}
                >
                  Get Free Quote
                </Link>
                <Link 
                  to="/gallery"
                  className="block w-full border-2 border-amber-600 text-amber-700 py-4 px-6 rounded-xl hover:bg-amber-600 hover:text-white transition-all duration-300 font-semibold text-lg text-center"
                  onClick={toggleMenu}
                >
                  View Portfolio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;