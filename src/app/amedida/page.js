'use client'
import React, { useState } from "react";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";
import useWhatsApp from "../hooks/useWhatsapp";
import motionTitle from "../hooks/gui-hook";
import { motion } from "framer-motion";
import Image from "next/image";

const Amedida = () => {
  const { titleh1 } = motionTitle();
  const [customOrder, setCustomOrder] = useState("");
  const { sendMessage } = useWhatsApp();

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(customOrder);
    setCustomOrder("");
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Grid de imágenes de fondo */}
      <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
        <div className="relative">
          <Image
            src="/pergola/p1.jpeg"
            alt="Sillón de palets"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative">
          <Image
            src="/pergola/p2.jpeg"
            alt="Pérgola"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative">
          <Image
            src="/pergola/p3.jpeg"
            alt="Mesa ratona de pallets"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative">
          <Image
            src="/bannerr1.jpg"
            alt="Deck de pallets"
            fill
            className="object-cover"
          />
        </div>
        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-]" />
      </div>

      {/* Contenido */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative container mx-auto max-w-4xl py-16 px-4 z-10"
      >
        <div className="text-center mb-12">
          <h1 className="text-white">{titleh1('Trabaja con Pallet Stars')}</h1>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="h-1 w-24 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mt-4"
          />
        </div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          onSubmit={handleSubmit}
          className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-8 md:p-10 
            transform hover:shadow-2xl transition-all duration-300"
        >
          <p className="text-justify mb-6 text-gray-700 leading-relaxed">
            Especialistas en Uruguay en sillones de palets para exterior, pérgolas y mesas ratonas de pallets. 
            En Pallet Stars diseñamos y fabricamos mobiliario de alta calidad: sillones pallet personalizados, 
            decks y estructuras para eventos. Cada proyecto refleja nuestra experiencia y el compromiso con la 
            satisfacción del cliente.
          </p>

          <div className="relative group mb-8">
            <textarea
              className="w-full p-4 border-2 border-gray-200 rounded-xl mb-2 
                focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent
                transition-all duration-300 ease-in-out
                bg-gray-50/90 hover:bg-white
                min-h-[150px] resize-y"
              placeholder="No dudes en consultar, contestaremos enseguida."
              value={customOrder}
              onChange={(e) => setCustomOrder(e.target.value)}
              required
            />
            <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600 
              w-0 group-hover:w-full transition-all duration-500 ease-in-out" />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="group relative overflow-hidden bg-green-500 text-white font-semibold py-4 px-6 
                rounded-xl flex items-center justify-center transition-all duration-300
                hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-400 opacity-0 
                group-hover:opacity-100 transition-opacity duration-300" />
              <FaWhatsapp className="mr-3 text-2xl relative z-10 group-hover:animate-bounce" />
              <span className="relative z-10">Enviar por WhatsApp</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="group relative overflow-hidden bg-gray-100 text-gray-700 font-semibold py-4 px-6 
                rounded-xl flex items-center justify-center transition-all duration-300
                hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-100 opacity-0 
                group-hover:opacity-100 transition-opacity duration-300" />
              <FaEnvelope className="mr-3 text-2xl relative z-10 group-hover:animate-bounce" />
              <span className="relative z-10">Enviar por Email</span>
            </motion.button>
          </div>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default Amedida;
