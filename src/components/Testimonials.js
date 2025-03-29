import React from 'react';

const testimonials = [
  {
    name: "María Rodríguez",
    role: "Empresaria",
    text: "LegalFlow transformó completamente mi forma de manejar trámites legales.",
    image: "/testimonial1.jpg"
  },
  {
    name: "Carlos Méndez",
    role: "Emprendedor",
    text: "Un servicio profesional y rápido. Altamente recomendado.",
    image: "/testimonial2.jpg"
  }
];

const Testimonials = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-blue-900">
          Lo Que Dicen Nuestros Clientes
        </h2>
        <div className="flex justify-center space-x-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-lg max-w-md"
            >
              <img 
                src={testimonial.image} 
                alt={testimonial.name}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <p className="italic mb-4">"{testimonial.text}"</p>
              <div>
                <h3 className="font-bold">{testimonial.name}</h3>
                <p className="text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;