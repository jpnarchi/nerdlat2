import React from 'react';

const ServiceCard = ({ icon, title, description, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl 
      transition transform hover:-translate-y-2 cursor-pointer group"
    >
      <div className="text-4xl text-blue-600 mb-4 group-hover:text-blue-800 transition">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceCard;