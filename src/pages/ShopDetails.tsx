import React, { useState } from 'react';
import { Star, ShoppingCart, Heart, Share2, Truck, Shield, Award, ChevronLeft, ChevronRight } from 'lucide-react';

const ShopDetails = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const product = {
    id: 1,
    name: "Handcrafted Oak Dining Table",
    price: 2499,
    originalPrice: 2999,
    rating: 4.9,
    reviews: 127,
    inStock: true,
    description: "This stunning handcrafted oak dining table is the perfect centerpiece for your dining room. Made from premium solid oak with a rich, natural finish that highlights the beautiful wood grain. Each table is meticulously crafted by our master woodworkers using traditional joinery techniques.",
    features: [
      "Solid oak construction",
      "Seats 6-8 people comfortably",
      "Hand-rubbed natural finish",
      "Traditional mortise and tenon joinery",
      "Dimensions: 84\" L x 42\" W x 30\" H",
      "Lifetime craftsmanship warranty"
    ],
    images: [
      "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/5691654/pexels-photo-5691654.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    specifications: {
      "Material": "Solid Oak",
      "Finish": "Natural Hand-Rubbed",
      "Dimensions": "84\" L x 42\" W x 30\" H",
      "Weight": "180 lbs",
      "Seating": "6-8 people",
      "Assembly": "Minimal assembly required",
      "Warranty": "Lifetime craftsmanship"
    }
  };

  const relatedProducts = [
    {
      id: 2,
      name: "Oak Dining Chairs (Set of 6)",
      price: 1299,
      image: "https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.8
    },
    {
      id: 3,
      name: "Oak Buffet Cabinet",
      price: 1899,
      image: "https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.7
    },
    {
      id: 4,
      name: "Oak Bar Cart",
      price: 899,
      image: "https://images.pexels.com/photos/6474471/pexels-photo-6474471.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.9
    }
  ];

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <div className="min-h-screen pt-20 lg:pt-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 py-8 lg:py-12">
        {/* Product Details */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12 lg:mb-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-2xl border border-gray-200/50">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name}
                className="w-full h-64 sm:h-80 lg:h-96 object-cover"
              />
              <button 
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-amber-700 hover:text-white transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-amber-700 hover:text-white transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </div>
            
            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-2 lg:gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index ? 'border-amber-500' : 'border-gray-200 hover:border-amber-300'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-16 sm:h-20 lg:h-24 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
                {product.name}
              </h1>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      className={i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'} 
                    />
                  ))}
                  <span className="text-sm text-gray-600 ml-2">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-2xl sm:text-3xl font-bold text-amber-700">
                  ${product.price.toLocaleString()}
                </span>
                <span className="text-lg text-gray-500 line-through">
                  ${product.originalPrice.toLocaleString()}
                </span>
                <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                  Save ${(product.originalPrice - product.price).toLocaleString()}
                </span>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl border border-gray-200/50">
              <p className="text-gray-600 leading-relaxed mb-6">
                {product.description}
              </p>

              <div className="space-y-4 mb-6">
                <h3 className="font-semibold text-gray-800">Key Features:</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quantity and Add to Cart */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <label className="font-medium text-gray-700">Quantity:</label>
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-2 hover:bg-gray-100 transition-colors"
                    >
                      -
                    </button>
                    <span className="px-4 py-2 border-x border-gray-300">{quantity}</span>
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-2 hover:bg-gray-100 transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="flex-1 bg-gradient-to-r from-amber-600 to-amber-700 text-white py-3 px-6 rounded-xl hover:from-amber-700 hover:to-amber-800 transition-all duration-300 font-semibold flex items-center justify-center space-x-2 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                    <ShoppingCart size={20} />
                    <span>Add to Cart</span>
                  </button>
                  <button className="p-3 border-2 border-gray-300 rounded-xl hover:border-amber-500 hover:text-amber-700 transition-colors">
                    <Heart size={20} />
                  </button>
                  <button className="p-3 border-2 border-gray-300 rounded-xl hover:border-amber-500 hover:text-amber-700 transition-colors">
                    <Share2 size={20} />
                  </button>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white/90 backdrop-blur-sm rounded-xl border border-gray-200/50">
                <Truck className="text-amber-700 mx-auto mb-2" size={24} />
                <p className="text-xs font-medium text-gray-700">Free Delivery</p>
              </div>
              <div className="text-center p-4 bg-white/90 backdrop-blur-sm rounded-xl border border-gray-200/50">
                <Shield className="text-amber-700 mx-auto mb-2" size={24} />
                <p className="text-xs font-medium text-gray-700">Lifetime Warranty</p>
              </div>
              <div className="text-center p-4 bg-white/90 backdrop-blur-sm rounded-xl border border-gray-200/50">
                <Award className="text-amber-700 mx-auto mb-2" size={24} />
                <p className="text-xs font-medium text-gray-700">Handcrafted</p>
              </div>
            </div>
          </div>
        </div>

        {/* Specifications */}
        <div className="bg-white/90 backdrop-blur-sm p-6 lg:p-8 rounded-xl shadow-2xl border border-gray-200/50 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(product.specifications).map(([key, value]) => (
              <div key={key} className="flex justify-between py-3 border-b border-gray-200">
                <span className="font-medium text-gray-700">{key}:</span>
                <span className="text-gray-600">{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Related Products */}
        <div>
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-8 text-center">
            Complete Your <span className="text-amber-700">Dining Set</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {relatedProducts.map((relatedProduct) => (
              <div key={relatedProduct.id} className="bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200/50 transform hover:-translate-y-2">
                <img 
                  src={relatedProduct.image} 
                  alt={relatedProduct.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-gray-800 mb-2">{relatedProduct.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-amber-700">
                      ${relatedProduct.price.toLocaleString()}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Star size={14} className="text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">{relatedProduct.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopDetails;