import React from 'react';

const Hero = ({ onStartConsultation }) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-blue-600">
      <div className="absolute inset-0 opacity-10 bg-cover bg-center" 
           style={{backgroundImage: "url('/legal-background.jpg')"}}
      ></div>
      <div className="relative z-10 text-center max-w-4xl p-8 bg-white/20 backdrop-blur-sm rounded-2xl shadow-2xl">
        <h2 className="text-5xl font-extrabold text-white mb-6 drop-shadow-lg">
          Asesoría Legal Profesional
        </h2>
        <p className="text-2xl text-white mb-10 font-light">
          Transforma tus desafíos legales con asesoramiento especializado, 
          rápido y completamente digital.
        </p>
        <div className="flex justify-center space-x-6">
          <button 
            onClick={onStartConsultation}
            className="bg-white text-blue-900 px-10 py-4 rounded-full text-lg 
            font-semibold hover:bg-blue-100 transition transform hover:scale-105 
            shadow-xl"
          >
            Iniciar Consulta
          </button>
          <button 
            className="border-2 border-white text-white px-10 py-4 rounded-full 
            text-lg hover:bg-white hover:text-blue-900 transition transform 
            hover:scale-105"
          >
            Conocer Más
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;