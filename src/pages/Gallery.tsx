import React, { useState } from 'react';
import { Search, Filter, Heart, Share2, ZoomIn, Calendar, MapPin } from 'lucide-react';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const galleryItems = [
    {
      id: 1,
      title: "Luxury Dining Room Set",
      category: "dining",
      location: "Manhattan, NY",
      date: "2024-01-15",
      image: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Handcrafted mahogany dining table with 8 matching chairs, featuring intricate wood inlays"
    },
    {
      id: 2,
      title: "Modern Kitchen Cabinets",
      category: "kitchen",
      location: "Brooklyn, NY",
      date: "2024-01-10",
      image: "https://images.pexels.com/photos/279618/pexels-photo-279618.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Contemporary white oak kitchen with soft-close drawers and integrated LED lighting"
    },
    {
      id: 3,
      title: "Executive Office Suite",
      category: "office",
      location: "Queens, NY",
      date: "2024-01-05",
      image: "https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Premium walnut executive desk with matching bookshelf and filing cabinets"
    },
    {
      id: 4,
      title: "Custom Library Shelving",
      category: "builtin",
      location: "Westchester, NY",
      date: "2023-12-28",
      image: "https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Floor-to-ceiling cherry wood library with rolling ladder and hidden compartments"
    },
    {
      id: 5,
      title: "Luxury Bedroom Set",
      category: "bedroom",
      location: "Long Island, NY",
      date: "2023-12-20",
      image: "https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "King-size bed frame with matching nightstands and dresser in rich mahogany"
    },
    {
      id: 6,
      title: "Artisan Coffee Table",
      category: "living",
      location: "Staten Island, NY",
      date: "2023-12-15",
      image: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Live-edge walnut coffee table with steel hairpin legs and glass inlay"
    },
    {
      id: 7,
      title: "Bathroom Vanity Cabinet",
      category: "bathroom",
      location: "Bronx, NY",
      date: "2023-12-10",
      image: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Custom teak vanity with vessel sink, marble countertop, and hidden storage"
    },
    {
      id: 8,
      title: "Entertainment Center",
      category: "living",
      location: "Albany, NY",
      date: "2023-12-05",
      image: "https://images.pexels.com/photos/6474471/pexels-photo-6474471.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Built-in entertainment center with cable management and ambient lighting"
    },
    {
      id: 9,
      title: "Rustic Farmhouse Table",
      category: "dining",
      location: "Rochester, NY",
      date: "2023-11-30",
      image: "https://images.pexels.com/photos/5691654/pexels-photo-5691654.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Reclaimed barn wood dining table with industrial steel base"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects', count: galleryItems.length },
    { id: 'kitchen', name: 'Kitchen', count: galleryItems.filter(item => item.category === 'kitchen').length },
    { id: 'dining', name: 'Dining Room', count: galleryItems.filter(item => item.category === 'dining').length },
    { id: 'living', name: 'Living Room', count: galleryItems.filter(item => item.category === 'living').length },
    { id: 'bedroom', name: 'Bedroom', count: galleryItems.filter(item => item.category === 'bedroom').length },
    { id: 'office', name: 'Office', count: galleryItems.filter(item => item.category === 'office').length },
    { id: 'bathroom', name: 'Bathroom', count: galleryItems.filter(item => item.category === 'bathroom').length },
    { id: 'builtin', name: 'Built-ins', count: galleryItems.filter(item => item.category === 'builtin').length }
  ];

  const filteredItems = galleryItems.filter(item => {
    const matchesFilter = activeFilter === 'all' || item.category === activeFilter;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-20 lg:pt-24">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1920" 
            alt="Woodworking gallery"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center text-white">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 lg:mb-6 drop-shadow-2xl">
              Our <span className="text-amber-400">Gallery</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl max-w-3xl mx-auto drop-shadow-lg">
              Explore our collection of completed projects showcasing exceptional craftsmanship 
              and attention to detail in every piece we create.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-6 lg:py-8 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-end">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-3 sm:px-4 py-2 rounded-full font-medium transition-all duration-300 text-xs sm:text-sm flex items-center space-x-1 ${
                    activeFilter === category.id
                      ? 'bg-amber-700 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-amber-100 hover:text-amber-700'
                  }`}
                >
                  <span>{category.name}</span>
                  <span className="text-xs opacity-75">({category.count})</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-8 lg:py-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {filteredItems.map((item) => (
              <div 
                key={item.id} 
                className="group bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200/50 transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-48 sm:h-56 lg:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-3">
                      <button className="p-3 bg-white/90 backdrop-blur-sm rounded-full text-amber-700 hover:bg-amber-700 hover:text-white transition-colors shadow-lg">
                        <ZoomIn size={20} />
                      </button>
                      <button className="p-3 bg-white/90 backdrop-blur-sm rounded-full text-amber-700 hover:bg-amber-700 hover:text-white transition-colors shadow-lg">
                        <Heart size={20} />
                      </button>
                      <button className="p-3 bg-white/90 backdrop-blur-sm rounded-full text-amber-700 hover:bg-amber-700 hover:text-white transition-colors shadow-lg">
                        <Share2 size={20} />
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 lg:p-6">
                  <h3 className="text-lg lg:text-xl font-bold text-gray-800 mb-2 group-hover:text-amber-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-xs lg:text-sm leading-relaxed mb-3">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center space-x-1">
                      <MapPin size={14} />
                      <span>{item.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>{new Date(item.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Filter size={48} className="mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No projects found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Gallery;