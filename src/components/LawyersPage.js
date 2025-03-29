import React from 'react';
import LawyerProfile from './LawyerProfile';

const lawyers = [
  {
    id: 1,
    name: "María González",
    specialty: "Derecho Corporativo",
    image: "/lawyer1.jpg",
    experience: 12,
    description: "Experta en asesoramiento legal para empresas, con amplia trayectoria en derecho mercantil y societario."
  },
  {
    id: 2,
    name: "Carlos Ramírez",
    specialty: "Litigios",
    image: "/lawyer2.jpg",
    experience: 15,
    description: "Abogado especializado en representación judicial con más de 100 casos exitosos en diferentes tribunales."
  },
  {
    id: 3,
    name: "Ana Martínez",
    specialty: "Derecho Laboral",
    image: "/lawyer3.jpg",
    experience: 10,
    description: "Consultora líder en resolución de conflictos laborales y asesoramiento en legislación laboral."
  },
  {
    id: 4,
    name: "Roberto Sánchez",
    specialty: "Derecho Civil",
    image: "/lawyer4.jpg",
    experience: 18,
    description: "Especialista en derecho civil con vasta experiencia en mediación y resolución de conflictos."
  }
];

const LawyersPage = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">
        Nuestro Equipo de Abogados
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {lawyers.map(lawyer => (
          <LawyerProfile 
            key={lawyer.id}
            name={lawyer.name}
            specialty={lawyer.specialty}
            image={lawyer.image}
            experience={lawyer.experience}
            description={lawyer.description}
          />
        ))}
      </div>
    </div>
  );
};

export default LawyersPage;