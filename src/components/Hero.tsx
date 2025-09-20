import React from 'react';
import { ArrowRight, Award, Users, Clock } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-4 lg:pt-0">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1920" 
          alt="Professional woodworking workshop"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 py-8 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 lg:space-y-8 relative z-10 text-center lg:text-left">
            <div className="space-y-4 lg:space-y-6">
              <div className="inline-block px-4 py-2 lg:px-6 lg:py-3 bg-amber-600/20 backdrop-blur-sm rounded-full border border-amber-400/30 mb-4">
                <span className="text-amber-300 text-sm lg:text-base font-medium">Premium Craftsmanship Since 1985</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-2xl">
                Crafting 
                <span className="text-amber-400 block bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent mt-2">Premium Furniture</span>
                That Lasts Generations
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed drop-shadow-lg max-w-2xl mx-auto lg:mx-0">
                Transform your space with handcrafted furniture that combines traditional woodworking techniques with modern design excellence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-gradient-to-r from-amber-600 to-amber-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:from-amber-700 hover:to-amber-800 transition-all duration-300 flex items-center justify-center space-x-2 font-semibold text-base sm:text-lg group shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                <span>Explore Our Work</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-amber-400 text-amber-300 px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-amber-400 hover:text-gray-900 transition-all duration-300 font-semibold text-base sm:text-lg backdrop-blur-sm bg-white/10 hover:bg-amber-400 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Get Free Quote
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 lg:pt-8">
              <div className="text-center">
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-amber-500/20 backdrop-blur-sm rounded-full mx-auto mb-2 border border-amber-400/30">
                  <Award className="text-amber-400" size={20} />
                </div>
                <div className="text-xl sm:text-2xl font-bold text-white drop-shadow-lg">40+</div>
                <div className="text-xs sm:text-sm text-gray-300">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-amber-500/20 backdrop-blur-sm rounded-full mx-auto mb-2 border border-amber-400/30">
                  <Users className="text-amber-400" size={20} />
                </div>
                <div className="text-xl sm:text-2xl font-bold text-white drop-shadow-lg">2500+</div>
                <div className="text-xs sm:text-sm text-gray-300">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-amber-500/20 backdrop-blur-sm rounded-full mx-auto mb-2 border border-amber-400/30">
                  <Clock className="text-amber-400" size={20} />
                </div>
                <div className="text-xl sm:text-2xl font-bold text-white drop-shadow-lg">5000+</div>
                <div className="text-xs sm:text-sm text-gray-300">Projects Done</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative z-10 mt-8 lg:mt-0">
            <div className="relative z-10">
              <img 
                src="https://images.pexels.com/photos/5691654/pexels-photo-5691654.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Handcrafted wooden furniture in workshop"
                className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] object-cover rounded-2xl shadow-2xl border-4 border-white/20 backdrop-blur-sm"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-2 -right-2 lg:-bottom-4 lg:-right-4 w-full h-full bg-amber-400/20 rounded-2xl backdrop-blur-sm -z-10"></div>
            <div className="absolute -top-2 -left-2 lg:-top-4 lg:-left-4 w-16 h-16 lg:w-32 lg:h-32 bg-orange-400/20 rounded-full backdrop-blur-sm -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;