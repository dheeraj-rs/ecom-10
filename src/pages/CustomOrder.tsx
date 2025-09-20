import React, { useState } from 'react';
import { Upload, X, Plus, Minus, Calculator, Send, Image as ImageIcon, FileText, Palette } from 'lucide-react';

const CustomOrder = () => {
  const [formData, setFormData] = useState({
    projectType: '',
    dimensions: { length: '', width: '', height: '' },
    material: '',
    finish: '',
    budget: '',
    timeline: '',
    description: '',
    name: '',
    email: '',
    phone: ''
  });
  
  const [uploadedImages, setUploadedImages] = useState([]);
  const [dragActive, setDragActive] = useState(false);

  const projectTypes = [
    'Custom Furniture',
    'Kitchen Cabinets',
    'Built-in Storage',
    'Dining Set',
    'Office Furniture',
    'Bedroom Set',
    'Entertainment Center',
    'Other'
  ];

  const materials = [
    'Oak', 'Maple', 'Cherry', 'Walnut', 'Mahogany', 
    'Pine', 'Cedar', 'Birch', 'Ash', 'Teak'
  ];

  const finishes = [
    'Natural/Clear', 'Stain - Light', 'Stain - Medium', 
    'Stain - Dark', 'Paint - White', 'Paint - Black', 
    'Paint - Custom Color', 'Distressed', 'Rustic'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: { ...prev[parent], [child]: value }
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleFiles = (files) => {
    Array.from(files).forEach(file => {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setUploadedImages(prev => [...prev, {
            id: Date.now() + Math.random(),
            file: file,
            preview: e.target.result,
            name: file.name
          }]);
        };
        reader.readAsDataURL(file);
      }
    });
  };

  const removeImage = (id) => {
    setUploadedImages(prev => prev.filter(img => img.id !== id));
  };

  const calculateEstimate = () => {
    const { length, width, height } = formData.dimensions;
    if (!length || !width || !height) return 0;
    
    const volume = parseFloat(length) * parseFloat(width) * parseFloat(height);
    const basePrice = volume * 15; // $15 per cubic inch estimate
    const materialMultiplier = {
      'Oak': 1.2, 'Maple': 1.1, 'Cherry': 1.5, 'Walnut': 1.8, 'Mahogany': 1.6,
      'Pine': 0.8, 'Cedar': 1.0, 'Birch': 1.1, 'Ash': 1.3, 'Teak': 2.0
    };
    
    const multiplier = materialMultiplier[formData.material] || 1;
    return Math.round(basePrice * multiplier);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Custom order submitted:', { formData, uploadedImages });
    // Handle form submission
  };

  return (
    <div className="min-h-screen pt-20 lg:pt-24">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/5691654/pexels-photo-5691654.jpeg?auto=compress&cs=tinysrgb&w=1920" 
            alt="Custom woodworking"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center text-white">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 lg:mb-6 drop-shadow-2xl">
              Custom <span className="text-amber-400">Order</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl max-w-3xl mx-auto drop-shadow-lg">
              Bring your vision to life with our custom furniture design service. 
              Upload your ideas and let our craftsmen create something truly unique.
            </p>
          </div>
        </div>
      </section>

      {/* Custom Order Form */}
      <section className="py-8 lg:py-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6">
          <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Form */}
              <div className="lg:col-span-2 space-y-8">
                {/* Project Details */}
                <div className="bg-white/90 backdrop-blur-sm p-6 lg:p-8 rounded-xl shadow-2xl border border-gray-200/50">
                  <div className="flex items-center space-x-2 mb-6">
                    <FileText className="text-amber-700" size={24} />
                    <h2 className="text-xl lg:text-2xl font-bold text-gray-800">Project Details</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Project Type *
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                      >
                        <option value="">Select project type</option>
                        {projectTypes.map(type => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Material *
                      </label>
                      <select
                        name="material"
                        value={formData.material}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                      >
                        <option value="">Select material</option>
                        {materials.map(material => (
                          <option key={material} value={material}>{material}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Finish
                      </label>
                      <select
                        name="finish"
                        value={formData.finish}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                      >
                        <option value="">Select finish</option>
                        {finishes.map(finish => (
                          <option key={finish} value={finish}>{finish}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Timeline
                      </label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                      >
                        <option value="">Select timeline</option>
                        <option value="2-4 weeks">2-4 weeks</option>
                        <option value="1-2 months">1-2 months</option>
                        <option value="2-3 months">2-3 months</option>
                        <option value="3+ months">3+ months</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>
                  </div>

                  {/* Dimensions */}
                  <div className="mt-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Dimensions (inches) *
                    </label>
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <input
                          type="number"
                          name="dimensions.length"
                          placeholder="Length"
                          value={formData.dimensions.length}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                        />
                        <label className="text-xs text-gray-500 mt-1">Length</label>
                      </div>
                      <div>
                        <input
                          type="number"
                          name="dimensions.width"
                          placeholder="Width"
                          value={formData.dimensions.width}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                        />
                        <label className="text-xs text-gray-500 mt-1">Width</label>
                      </div>
                      <div>
                        <input
                          type="number"
                          name="dimensions.height"
                          placeholder="Height"
                          value={formData.dimensions.height}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                        />
                        <label className="text-xs text-gray-500 mt-1">Height</label>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mt-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Description *
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      placeholder="Describe your vision, specific requirements, style preferences, and any special features..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors resize-none"
                    ></textarea>
                  </div>
                </div>

                {/* Image Upload */}
                <div className="bg-white/90 backdrop-blur-sm p-6 lg:p-8 rounded-xl shadow-2xl border border-gray-200/50">
                  <div className="flex items-center space-x-2 mb-6">
                    <ImageIcon className="text-amber-700" size={24} />
                    <h2 className="text-xl lg:text-2xl font-bold text-gray-800">Upload Reference Images</h2>
                  </div>

                  {/* Upload Area */}
                  <div
                    className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors ${
                      dragActive ? 'border-amber-500 bg-amber-50' : 'border-gray-300 hover:border-amber-400'
                    }`}
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                  >
                    <Upload className="mx-auto text-gray-400 mb-4" size={48} />
                    <p className="text-gray-600 mb-2">
                      Drag and drop images here, or{' '}
                      <label className="text-amber-700 hover:text-amber-800 cursor-pointer font-medium">
                        browse files
                        <input
                          type="file"
                          multiple
                          accept="image/*"
                          onChange={(e) => handleFiles(e.target.files)}
                          className="hidden"
                        />
                      </label>
                    </p>
                    <p className="text-sm text-gray-500">
                      Upload sketches, inspiration photos, or reference images
                    </p>
                  </div>

                  {/* Uploaded Images */}
                  {uploadedImages.length > 0 && (
                    <div className="mt-6">
                      <h3 className="font-medium text-gray-700 mb-4">Uploaded Images ({uploadedImages.length})</h3>
                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                        {uploadedImages.map((image) => (
                          <div key={image.id} className="relative group">
                            <img
                              src={image.preview}
                              alt={image.name}
                              className="w-full h-24 object-cover rounded-lg border border-gray-200"
                            />
                            <button
                              type="button"
                              onClick={() => removeImage(image.id)}
                              className="absolute -top-2 -right-2 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              <X size={14} />
                            </button>
                            <p className="text-xs text-gray-500 mt-1 truncate">{image.name}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Contact Information */}
                <div className="bg-white/90 backdrop-blur-sm p-6 lg:p-8 rounded-xl shadow-2xl border border-gray-200/50">
                  <h2 className="text-xl lg:text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar - Estimate & Summary */}
              <div className="space-y-6">
                {/* Price Estimate */}
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-2xl border border-gray-200/50 sticky top-24">
                  <div className="flex items-center space-x-2 mb-4">
                    <Calculator className="text-amber-700" size={20} />
                    <h3 className="text-lg font-bold text-gray-800">Price Estimate</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="text-center p-4 bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg border border-amber-200/50">
                      <p className="text-sm text-gray-600 mb-1">Estimated Price Range</p>
                      <p className="text-2xl font-bold text-amber-700">
                        ${calculateEstimate() > 0 ? `${(calculateEstimate() * 0.8).toLocaleString()} - ${(calculateEstimate() * 1.2).toLocaleString()}` : '---'}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        Final price may vary based on complexity
                      </p>
                    </div>

                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Project Type:</span>
                        <span className="font-medium">{formData.projectType || '---'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Material:</span>
                        <span className="font-medium">{formData.material || '---'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Dimensions:</span>
                        <span className="font-medium">
                          {formData.dimensions.length && formData.dimensions.width && formData.dimensions.height
                            ? `${formData.dimensions.length}"×${formData.dimensions.width}"×${formData.dimensions.height}"`
                            : '---'
                          }
                        </span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-200">
                      <p className="text-xs text-gray-500 text-center">
                        This is a preliminary estimate. We'll provide a detailed quote after reviewing your requirements.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-600 to-amber-700 text-white py-4 px-6 rounded-xl hover:from-amber-700 hover:to-amber-800 transition-all duration-300 font-semibold text-lg flex items-center justify-center space-x-2 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                >
                  <Send size={20} />
                  <span>Submit Custom Order</span>
                </button>

                <div className="text-center text-sm text-gray-500">
                  <p>We'll review your request and contact you within 24 hours with a detailed quote and timeline.</p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default CustomOrder;