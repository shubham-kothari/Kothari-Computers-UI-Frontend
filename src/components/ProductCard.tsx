import React from 'react';
import { useTheme } from '../hooks/useTheme';

interface ProductCardProps {
  title: string;
  price: number;
  image: string;
  description: string;
}

function ProductCard({ title, price, image, description }: ProductCardProps) {
  const { isDarkMode } = useTheme();
  
  return (
    <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105`}>
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-blue-600">₹{price.toLocaleString('en-IN')}</span>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;