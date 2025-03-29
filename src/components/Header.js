import React from 'react';

const Header = ({ onNavChange }) => {
  return (
    <header className="bg-blue-900 text-white p-4 flex justify-between items-center shadow-lg">
      <div className="flex items-center space-x-4">
        <img 
          src="/logo-legalflow.png" 
          alt="LegalFlow Logo" 
          className="h-10 w-10 rounded-full"
        />
        <h1 className="text-2xl font-bold">LegalFlow</h1>
      </div>
      <nav className="space-x-6">
        <button 
          onClick={() => onNavChange('home')}
          className="hover:text-blue-300 transition-colors"
        >
          Inicio
        </button>
        <button 
          onClick={() => onNavChange('services')}
          className="hover:text-blue-300 transition-colors"
        >
          Servicios
        </button>
        <button 
          onClick={() => onNavChange('lawyers')}
          className="hover:text-blue-300 transition-colors"
        >
          Abogados
        </button>
        <button 
          onClick={() => onNavChange('contact')}
          className="hover:text-blue-300 transition-colors"
        >
          Contacto
        </button>
      </nav>
    </header>
  );
};

export default Header;