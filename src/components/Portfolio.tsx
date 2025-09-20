import React, { useState } from 'react';
import { ExternalLink, ZoomIn } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Modern Kitchen Cabinets",
      category: "kitchen",
      image: "https://images.pexels.com/photos/279618/pexels-photo-279618.jpeg?auto=compress&cs=tinysrgb&w=500",
      description: "Custom white oak kitchen cabinets with soft-close hardware"
    },
    {
      id: 2,
      title: "Executive Office Desk",
      category: "furniture",
      image: "https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=500",
      description: "Handcrafted walnut executive desk with built-in storage"
    },
    {
      id: 3,
      title: "Built-in Library Shelves",
      category: "builtin",
      image: "https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=500",
      description: "Floor-to-ceiling cherry wood library with integrated lighting"
    },
    {
      id: 4,
      title: "Dining Room Set",
      category: "furniture",
      image: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=500",
      description: "8-person mahogany dining table with matching chairs"
    },
    {
      id: 5,
      title: "Luxury Bathroom Vanity",
      category: "bathroom",
      image: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=500",
      description: "Custom teak vanity with vessel sink and marble top"
    },
    {
      id: 6,
      title: "Entertainment Center",
      category: "builtin",
      image: "https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=500",
      description: "Built-in entertainment center with hidden wire management"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'kitchen', name: 'Kitchen' },
    { id: 'furniture', name: 'Furniture' },
    { id: 'builtin', name: 'Built-ins' },
    { id: 'bathroom', name: 'Bathroom' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-amber-50/30"></div>
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d97706' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 lg:mb-16 relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Our <span className="text-amber-700">Portfolio</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto mb-6 lg:mb-8 px-4">
            Explore our collection of handcrafted furniture and custom woodwork projects 
            that showcase our commitment to excellence and attention to detail.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 lg:mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-4 sm:px-6 py-2 rounded-full font-medium transition-all duration-300 text-sm sm:text-base ${
                  activeFilter === category.id
                    ? 'bg-amber-700 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-amber-100 hover:text-amber-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 relative z-10">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200/50 transform hover:-translate-y-1 lg:hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-4">
                    <button className="p-3 bg-white/90 backdrop-blur-sm rounded-full text-amber-700 hover:bg-amber-700 hover:text-white transition-colors shadow-lg">
                      <ZoomIn size={20} />
                    </button>
                    <button className="p-3 bg-white/90 backdrop-blur-sm rounded-full text-amber-700 hover:bg-amber-700 hover:text-white transition-colors shadow-lg">
                      <ExternalLink size={20} />
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-4 lg:p-6">
                <h3 className="text-lg lg:text-xl font-bold text-gray-800 mb-2 group-hover:text-amber-700 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-xs lg:text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 lg:mt-12 relative z-10">
          <button className="bg-gradient-to-r from-amber-600 to-amber-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:from-amber-700 hover:to-amber-800 transition-all duration-300 font-semibold text-base sm:text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
            View Full Portfolio
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;