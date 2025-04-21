import React, { ReactNode } from 'react';
import { useTheme } from '../hooks/useTheme';

interface ServiceCardProps {
  title: string;
  icon: ReactNode;
  description: string;
}

function ServiceCard({ title, icon, description }: ServiceCardProps) {
  const { isDarkMode } = useTheme();

  return (
    <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow`}>
      <div className="text-blue-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{description}</p>
      <button className="mt-4 text-blue-600 font-semibold hover:text-blue-700">
        Learn More →
      </button>
    </div>
  );
}

export default ServiceCard;