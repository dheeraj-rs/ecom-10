import React from 'react';
import { CheckCircle, Target, Heart, Zap } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Target size={24} />,
      title: "Precision Craftsmanship",
      description: "Every piece is meticulously crafted with attention to the finest details."
    },
    {
      icon: <Heart size={24} />,
      title: "Passion for Wood",
      description: "We love working with wood and it shows in every creation we make."
    },
    {
      icon: <CheckCircle size={24} />,
      title: "Quality Guarantee",
      description: "We stand behind our work with comprehensive warranties and support."
    },
    {
      icon: <Zap size={24} />,
      title: "Innovation",
      description: "Combining traditional techniques with modern technology and design."
    }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1920" 
          alt="Beautiful wooden furniture showcase"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-white/85"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/80 to-white/95"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center relative z-10">
          {/* Content */}
          <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 lg:mb-6 text-center lg:text-left">
                About <span className="text-amber-700">CraftedWood</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4 lg:mb-6">
                For nearly four decades, CraftedWood has been at the forefront of furniture manufacturing, 
                combining time-honored woodworking traditions with contemporary design sensibilities. 
                What started as a small workshop in 1985 has grown into a trusted name in custom furniture.
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Our master craftsmen bring decades of experience to every project, whether it's a single 
                statement piece or a complete home furnishing solution. We believe that great furniture 
                should not only be beautiful but also functional and built to last generations.
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="text-amber-700 mt-1">
                    {value.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">{value.title}</h4>
                    <p className="text-xs sm:text-sm text-gray-600">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center lg:text-left">
              <button className="bg-gradient-to-r from-amber-600 to-amber-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:from-amber-700 hover:to-amber-800 transition-all duration-300 font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
              Learn More About Us
            </button>
            </div>
          </div>

          {/* Images */}
          <div className="relative order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-3 lg:gap-4 relative z-10">
              <div className="space-y-4">
                <img 
                  src="https://images.pexels.com/photos/5691654/pexels-photo-5691654.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Craftsman working on furniture"
                  className="w-full h-32 sm:h-40 lg:h-48 object-cover rounded-lg shadow-2xl border-2 border-white/50"
                />
                <img 
                  src="https://images.pexels.com/photos/6474471/pexels-photo-6474471.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Woodworking tools"
                  className="w-full h-24 sm:h-28 lg:h-32 object-cover rounded-lg shadow-2xl border-2 border-white/50"
                />
              </div>
              <div className="pt-4 lg:pt-8">
                <img 
                  src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Beautiful wooden furniture"
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover rounded-lg shadow-2xl border-2 border-white/50"
                />
              </div>
            </div>
            <div className="absolute -bottom-2 -left-2 lg:-bottom-4 lg:-left-4 w-12 h-12 lg:w-20 lg:h-20 bg-amber-400/30 rounded-full backdrop-blur-sm"></div>
            <div className="absolute -top-2 -right-2 lg:-top-4 lg:-right-4 w-10 h-10 lg:w-16 lg:h-16 bg-orange-400/20 rounded-full backdrop-blur-sm"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;