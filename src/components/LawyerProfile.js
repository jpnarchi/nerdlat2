import React from 'react';

const LawyerProfile = ({ name, specialty, image, experience, description }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg transform transition hover:scale-105">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800">{name}</h3>
        <p className="text-blue-600 mb-2 font-semibold">{specialty}</p>
        <p className="text-gray-600 mb-4">{experience} años de experiencia</p>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="flex space-x-4">
          <button className="flex-1 bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700">
            Agendar Consulta
          </button>
          <button className="flex-1 border border-blue-600 text-blue-600 py-2 rounded-full hover:bg-blue-50">
            Ver Perfil
          </button>
        </div>
      </div>
    </div>
  );
};

export default LawyerProfile;