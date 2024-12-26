'use client';
import React, { useRef } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";


const PergolaForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
  .sendForm(
    "service_5vdse79", // Service ID
    "template_zspgclp", // Template ID
    form.current,
    "bzvpY5ZGwsqDu3T_3" // Public Key
  )
  .then(
    (result) => {
      Swal.fire({
        title: "¡Mensaje Enviado!",
        text: "Gracias por contactarnos. Te responderemos pronto.",
        icon: "success",
        confirmButtonText: "Aceptar",
      });
      console.log(result.text);
    },
    (error) => {
      Swal.fire({
        title: "Error",
        text: "Ocurrió un problema al enviar el mensaje. Inténtalo nuevamente.",
        icon: "error",
        confirmButtonText: "Cerrar",
      });
      console.error(error.text);
    }
  );
e.target.reset();
  };

  return (
    <section id="pergola-form" className="py-16 px-4 bg-white">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h3 className="text-3xl font-bold text-center mb-6 ff-1 text-[#F4A261]">
          ¡Comienza ya la pérgola de tus sueños!
        </h3>

        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div>
            <label
              htmlFor="type"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Que eres...
            </label>
            <select
              id="type"
              name="user_type"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Selecciona.</option>
              <option value="Propietario">Propietario</option>
              <option value="Constructor">Constructor</option>
              <option value="Arquitecto">Arquitecto</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Nombre
              </label>
              <input
                type="text"
                id="firstName"
                name="user_name"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Apellido
              </label>
              <input
                type="text"
                id="lastName"
                name="user_lastname"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email*
              </label>
              <input
                type="email"
                id="email"
                name="user_email"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Número de teléfono
              </label>
              <input
                type="tel"
                id="phone"
                name="user_phone"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Descripción de proyecto
            </label>
            <textarea
              id="description"
              name="message"
              rows={4}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#F4A261] font-bold hover:bg-[#F48C32] py-3 px-6 rounded-md transition-colors"
          >
            CONTACTA PALLETSTARS
          </button>
        </form>
      </div>
    </section>
  );
};

export default PergolaForm;
