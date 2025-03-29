import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ServiceSelection from './components/ServiceSelection';
import Testimonials from './components/Testimonials';
import LawyersPage from './components/LawyersPage';
import ContactPage from './components/ContactPage';

function App() {
  const [currentView, setCurrentView] = useState('home');

  const handleNavChange = (view) => {
    setCurrentView(view);
  };

  const handleStartConsultation = () => {
    setCurrentView('services');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onNavChange={handleNavChange} />
      {currentView === 'home' && (
        <>
          <Hero onStartConsultation={handleStartConsultation} />
          <ServiceSelection />
          <Testimonials />
        </>
      )}
      {currentView === 'services' && (
        <ServiceSelection />
      )}
      {currentView === 'lawyers' && (
        <LawyersPage />
      )}
      {currentView === 'contact' && (
        <ContactPage />
      )}
    </div>
  );
}

export default App;

// DONE