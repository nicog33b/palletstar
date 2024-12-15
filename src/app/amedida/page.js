'use client'
import React, { useState } from "react";
import { FaEnvelope, FaVoicemail, FaWhatsapp } from "react-icons/fa";
import useWhatsApp from "../hooks/useWhatsapp";
import motionTitle from "../hooks/gui-hook";


const Amedida = () => {

  const {titleh1} = motionTitle();
  const [customOrder, setCustomOrder] = useState("");
  const { sendMessage} = useWhatsApp();
  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(customOrder);
    setCustomOrder("")
  };

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="text-3xl font-bold mb-8 text-center text-gray-800">
        {titleh1('Trabaja con nosotros')}
        </div>
        <form
          onSubmit={handleSubmit}
          className="bg-white max-w-2xl mx-auto rounded-lg shadow-lg p-8"
        >
          <p className="text-justify mb-4 ">
          Con años de experiencia en Uruguay, nos especializamos en diseñar y fabricar sillones de pallets, pérgolas, decks, estructuras para eventos y proyectos a medida, generando confianza y plena satisfacción en nuestros clientes.</p>
          <textarea
            className="w-full p-4 border border-gray-300 rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-yellow-600"
            rows={6}
            placeholder="No dudes en consultar, contestaremos enseguida."
            value={customOrder}
            onChange={(e) => setCustomOrder(e.target.value)}
            required
          ></textarea>
          <div className="md:flex flex-auto md:py-0 md:space-x-3 ">
          <button
            type="submit"
            className="w-full md:mb-0 mb-1 bg-green-500 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center hover:bg-green-600 transition duration-300 hover:border hover:border-black"
          >
            <FaWhatsapp className="mr-3 text-2xl" />
            Enviar por WhatsApp
          </button>
          <button
            type="submit"
            className="w-full  bg-gray-100 text-zinc-700 font-semibold py-3 px-6 rounded-lg flex items-center justify-center hover:bg-white hover:border hover:border-black transition duration-300"
          >
            <FaEnvelope className="mr-3 text-2xl" />
            Enviar por Email
          </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Amedida;
