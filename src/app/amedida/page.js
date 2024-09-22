'use client'
import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const Amedida = () => {
  const [customOrder, setCustomOrder] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappNumber = '1234567890'; // Reemplazar con el número real
    const message = encodeURIComponent(customOrder);
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
          Solicita tu Mueble a Medida
        </h2>
        <form
          onSubmit={handleSubmit}
          className="bg-white max-w-2xl mx-auto rounded-lg shadow-lg p-8"
        >
          <textarea
            className="w-full p-4 border border-gray-300 rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-yellow-600"
            rows={6}
            placeholder="Describe el mueble que necesitas..."
            value={customOrder}
            onChange={(e) => setCustomOrder(e.target.value)}
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-green-500 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center hover:bg-green-600 transition duration-300"
          >
            <FaWhatsapp className="mr-3 text-2xl" />
            Enviar por WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
};

export default Amedida;
