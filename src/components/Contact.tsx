import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const contactInfo = [
    {
      icon: <MapPin size={24} />,
      title: "Our Location",
      details: ["123 Craftsman Avenue", "Woodville, NY 12345"],
      color: "text-blue-600"
    },
    {
      icon: <Phone size={24} />,
      title: "Phone Number",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
      color: "text-green-600"
    },
    {
      icon: <Mail size={24} />,
      title: "Email Address",
      details: ["info@craftedwood.com", "orders@craftedwood.com"],
      color: "text-red-600"
    },
    {
      icon: <Clock size={24} />,
      title: "Working Hours",
      details: ["Mon-Fri: 8:00 AM - 6:00 PM", "Sat: 9:00 AM - 4:00 PM"],
      color: "text-purple-600"
    }
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=1920" 
          alt="Modern furniture showroom"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/95 via-white/90 to-amber-50/95"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 lg:mb-16 relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Get In <span className="text-amber-700">Touch</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            Ready to start your custom furniture project? Contact us today for a free consultation 
            and let's bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 relative z-10">
          {/* Contact Information */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <div className="bg-white/90 backdrop-blur-sm p-6 lg:p-8 rounded-xl shadow-2xl border border-gray-200/50">
              <div className="flex items-center space-x-2 mb-4 lg:mb-6">
                <MessageSquare className="text-amber-700" size={24} />
                <h3 className="text-xl lg:text-2xl font-bold text-gray-800">Contact Info</h3>
              </div>
              
              <div className="space-y-4 lg:space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className={`${info.color} mt-1`}>
                      <div className="w-6 h-6">{info.icon}</div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1 text-sm lg:text-base">{info.title}</h4>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-600 text-xs lg:text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 lg:mt-8 p-4 lg:p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg border border-amber-200/50 backdrop-blur-sm">
                <h4 className="font-semibold text-amber-800 mb-2 text-sm lg:text-base">Quick Response Guarantee</h4>
                <p className="text-xs lg:text-sm text-amber-700">
                  We respond to all inquiries within 24 hours. For urgent projects, 
                  please call us directly.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            <div className="bg-white/90 backdrop-blur-sm p-6 lg:p-8 rounded-xl shadow-2xl border border-gray-200/50">
              <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 lg:mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 lg:px-4 py-2 lg:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors text-sm lg:text-base"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 lg:mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 lg:px-4 py-2 lg:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors text-sm lg:text-base"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1 lg:mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 lg:px-4 py-2 lg:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors text-sm lg:text-base"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1 lg:mb-2">
                      Service Needed
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-3 lg:px-4 py-2 lg:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors text-sm lg:text-base"
                    >
                      <option value="">Select a service</option>
                      <option value="custom-furniture">Custom Furniture</option>
                      <option value="kitchen-cabinets">Kitchen Cabinets</option>
                      <option value="restoration">Furniture Restoration</option>
                      <option value="interior-woodwork">Interior Woodwork</option>
                      <option value="consultation">Consultation</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1 lg:mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-3 lg:px-4 py-2 lg:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors text-sm lg:text-base resize-none"
                    placeholder="Tell us about your project, timeline, budget, and any specific requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-600 to-amber-700 text-white py-3 lg:py-4 px-6 lg:px-8 rounded-xl hover:from-amber-700 hover:to-amber-800 transition-all duration-300 font-semibold text-base lg:text-lg flex items-center justify-center space-x-2 group shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                >
                  <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;