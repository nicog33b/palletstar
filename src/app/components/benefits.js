import React from 'react';
import { FaHandPaper, FaLeaf, FaRecycle } from 'react-icons/fa';

export default function FeaturedBenefitsSection() {
  return (
    <section className="py-12 ">
      <div className="container mx-auto px-4">
       
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <FaHandPaper className="text-4xl text-amber-600 mx-auto mb-4 hover:scale-105" />
            <h3 className="text-xl font-semibold mb-2">Hechos a Mano</h3>
            <p className="text-gray-600">Cada pieza es cuidadosamente elaborada.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <FaLeaf className="text-4xl text-green-600 mx-auto mb-4 hover:scale-105" />
            <h3 className="text-xl font-semibold mb-2">Materiales de Calidad</h3>
            <p className="text-gray-600">Utilizamos pallets seleccionados y materiales de primera calidad.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <FaRecycle className="text-4xl text-blue-600 mx-auto mb-4 hover:scale-105" />
            <h3 className="text-xl font-semibold mb-2">Sostenibilidad</h3>
            <p className="text-gray-600">Nuestros productos son ecológicos y respetuosos con el medio ambiente.</p>
          </div>
        </div>
      </div>
    </section>
  );
}