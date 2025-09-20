import React from 'react';
import { Hammer, Home, Wrench, Palette, ShoppingCart, Truck } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Hammer size={32} />,
      title: "Custom Furniture Design",
      description: "Bespoke furniture pieces tailored to your specific needs, style, and space requirements.",
      features: ["Unique designs", "Quality materials", "Expert craftsmanship"]
    },
    {
      icon: <Home size={32} />,
      title: "Kitchen Cabinets",
      description: "Premium kitchen cabinetry that combines functionality with stunning visual appeal.",
      features: ["Modern designs", "Durable hardware", "Custom sizing"]
    },
    {
      icon: <Wrench size={32} />,
      title: "Furniture Restoration",
      description: "Breathe new life into your cherished furniture pieces with our restoration services.",
      features: ["Antique restoration", "Wood refinishing", "Hardware replacement"]
    },
    {
      icon: <Palette size={32} />,
      title: "Interior Woodwork",
      description: "Complete interior woodwork solutions including built-ins and architectural details.",
      features: ["Built-in storage", "Crown molding", "Wainscoting"]
    },
    {
      icon: <ShoppingCart size={32} />,
      title: "Ready-Made Furniture",
      description: "High-quality furniture pieces ready for immediate delivery to your home.",
      features: ["In-stock items", "Quick delivery", "Quality guarantee"]
    },
    {
      icon: <Truck size={32} />,
      title: "Installation Service",
      description: "Professional installation and setup of all furniture pieces in your space.",
      features: ["Expert installation", "Careful handling", "Satisfaction guarantee"]
    }
  ];

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/6474471/pexels-photo-6474471.jpeg?auto=compress&cs=tinysrgb&w=1920" 
          alt="Woodworking tools and materials"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-white"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 lg:mb-16 relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Our <span className="text-amber-700">Services</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            From custom designs to restoration, we provide comprehensive woodworking solutions 
            that exceed expectations and stand the test of time.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 relative z-10">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white/80 backdrop-blur-sm p-6 lg:p-8 rounded-xl hover:bg-amber-50/90 transition-all duration-300 hover:shadow-2xl border border-gray-200/50 hover:border-amber-200 transform hover:-translate-y-2"
            >
              <div className="text-amber-700 mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-lg lg:text-xl font-bold text-gray-800 mb-3 lg:mb-4 group-hover:text-amber-800 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-sm lg:text-base text-gray-600 mb-4 lg:mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-1 lg:space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-xs lg:text-sm text-gray-500 flex items-center">
                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 lg:mt-12 relative z-10">
          <button className="bg-gradient-to-r from-amber-600 to-amber-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:from-amber-700 hover:to-amber-800 transition-all duration-300 font-semibold text-base sm:text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;