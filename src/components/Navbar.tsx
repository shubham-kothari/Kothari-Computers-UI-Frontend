import React from 'react';
import { Monitor, Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

function Navbar() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <nav className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} shadow-lg`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Monitor className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-bold">TechStore</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#" className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-blue-600'}`}>Home</a>
            <a href="#products" className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-blue-600'}`}>Products</a>
            <a href="#services" className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-blue-600'}`}>Services</a>
            <a href="#contact" className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-blue-600'}`}>Contact</a>
            <a href="https://www.jainuniversity.ac.in/result" target="_blank" rel="noopener noreferrer" className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-blue-600'}`}>
              Jain Exam Result
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Get Quote
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;