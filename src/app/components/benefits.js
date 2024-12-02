import React from 'react';
import { FaHandPaper, FaLeaf, FaRecycle } from 'react-icons/fa';

const benefits = [
  {
    icon: <FaHandPaper className="text-4xl text-amber-400 mx-auto mb-4 transition-transform duration-200 hover:scale-110" />,
    title: 'Hechos a Mano',
    description: 'Cada pieza es cuidadosamente elaborada.',
  },
  {
    icon: <FaLeaf className="text-4xl text-green-600 mx-auto mb-4 transition-transform duration-200 hover:scale-110" />,
    title: 'Materiales de Calidad',
    description: 'Utilizamos pallets seleccionados y materiales de primera calidad.',
  },
  {
    icon: <FaRecycle className="text-4xl text-blue-600 mx-auto mb-4 transition-transform duration-200 hover:scale-110" />,
    title: 'Sostenibilidad',
    description: 'Nuestros productos son ecológicos y respetuosos con el medio ambiente.',
  },
];

export default function FeaturedBenefitsSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
  
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
            >
              {benefit.icon}
              <h3 className="text-2xl font-semibold mb-4 ff-1">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
