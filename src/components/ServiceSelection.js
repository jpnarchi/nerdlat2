import React, { useState } from 'react';
import ServiceCard from './ServiceCard';
import { 
  ContractIcon, 
  BuildingIcon, 
  LitigationIcon, 
  ConsultationIcon 
} from './Icons';

const services = [
  {
    id: 1,
    title: 'Asesoría Contractual',
    description: 'Revisión y elaboración de contratos profesionales',
    icon: <ContractIcon />,
    price: 150
  },
  {
    id: 2,
    title: 'Derecho Corporativo',
    description: 'Soluciones legales para empresas',
    icon: <BuildingIcon />,
    price: 300
  },
  {
    id: 3,
    title: 'Litigios',
    description: 'Representación legal en procesos judiciales',
    icon: <LitigationIcon />,
    price: 250
  },
  {
    id: 4,
    title: 'Consultoría Legal',
    description: 'Asesoramiento integral en diferentes áreas',
    icon: <ConsultationIcon />,
    price: 200
  }
];

const ServiceSelection = ({ onServiceSelect }) => {
  const [selectedServices, setSelectedServices] = useState([]);

  const toggleService = (service) => {
    setSelectedServices(prev => 
      prev.includes(service) 
        ? prev.filter(s => s.id !== service.id)
        : [...prev, service]
    );
  };

  return (
    <div className="container mx-auto py-16 px-4">
      <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">
        Nuestros Servicios Legales
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map(service => (
          <ServiceCard 
            key={service.id}
            title={service.title}
            description={service.description}
            icon={service.icon}
            onClick={() => toggleService(service)}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceSelection;