import React from 'react';
import { Monitor, Laptop, Printer, Network, HardDrive, Phone, Mail, MapPin } from 'lucide-react';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import ServiceCard from './components/ServiceCard';
import { useTheme } from './hooks/useTheme';

function App() {
  const { isDarkMode } = useTheme();

  const products = [
    {
      title: 'Gaming PC',
      price: 124999,
      image: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&q=80&w=800',
      description: 'High-performance gaming PC with RTX 4070, 32GB RAM'
    },
    {
      title: 'Business Laptop',
      price: 82999,
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=800',
      description: 'Lightweight laptop perfect for business professionals'
    },
    {
      title: 'Color Printer',
      price: 24999,
      image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&q=80&w=800',
      description: 'High-quality color printer for home and office'
    }
  ];

  const services = [
    {
      title: 'PC Building',
      icon: <Monitor className="w-8 h-8" />,
      description: 'Custom PC building services tailored to your needs'
    },
    {
      title: 'Laptop Repair',
      icon: <Laptop className="w-8 h-8" />,
      description: 'Professional laptop repair and maintenance'
    },
    {
      title: 'Printer Service',
      icon: <Printer className="w-8 h-8" />,
      description: 'Printer installation and troubleshooting'
    },
    {
      title: 'Network Setup',
      icon: <Network className="w-8 h-8" />,
      description: 'Home and office network installation'
    },
    {
      title: 'Software Installation',
      icon: <HardDrive className="w-8 h-8" />,
      description: 'OS and software installation services'
    }
  ];

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <Navbar />
      
      {/* Hero Section */}
      <div className={`${isDarkMode ? 'bg-blue-800' : 'bg-blue-600'} text-white py-20`}>
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Kothari Computers</h1>
          <p className="text-xl mb-8">Premium computers, laptops, and IT services</p>
          <button className={`${isDarkMode ? 'bg-gray-900 hover:bg-gray-800' : 'bg-white hover:bg-blue-50'} text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors`}>
            Shop Now
          </button>
        </div>
      </div>

      {/* Products Section */}
      <section className="py-16" id="products">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={`py-16 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`} id="services">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16" id="contact">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-blue-600" />
                <span>+91 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-blue-600" />
                <span>contact@techstore.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6 text-blue-600" />
                <span>123 Tech Street, Bangalore, Karnataka 560001</span>
              </div>
            </div>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className={`w-full px-4 py-2 rounded-lg border ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              <input
                type="email"
                placeholder="Your Email"
                className={`w-full px-4 py-2 rounded-lg border ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className={`w-full px-4 py-2 rounded-lg border ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
              ></textarea>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;