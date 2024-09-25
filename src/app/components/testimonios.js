'use client'
import React, { useState, useEffect } from "react";
import { FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { fraunces } from "../fonts/fraunces";

const Testimonios = () => {

  const testimonials = [
    {
      id: 1,
      content:
        "Excelente en cuanto a presentación, prolijidad. Hermoso el sillón, tal cual lo describen, muy recomendado.",
      rating: 5,
    },
    {
      id: 2,
      content:
        "Me encantó. Muy conforme con la compra, es lo que esperaba! recomiendo!!!",
      rating: 5,
    },
    {
      id: 3,
      content:
        "Divino la verdad que muy acorde a la foto y me gustó más que puedes pedir el almohadón también.",
      rating: 5,
    },
    {
      id: 4,
      content:
        "Excelente compra, muy buena madera.",
      rating: 5,
    },
    {
      id: 5,
      content:
        "Muy prácticos y cómodos. Buen precio.",
      rating: 5,
    },
    {
      id: 6,
      content:
        "Excelente y recomendables los sillones.",
      rating: 5,
    },
    {
      id: 7,
      content:
        "Muy lindo.",
      rating: 4,
    },
    {
      id: 8,
      content:
        "Excelente.",
      rating: 5,
    },
    {
      id: 9,
      content:
        "Muy buen producto. Buena terminación.",
      rating: 5,
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const [testimonialsPerPage, setTestimonialsPerPage] = useState(3);

  // Hook para manejar el número de testimonios a mostrar dependiendo del tamaño de la pantalla
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setTestimonialsPerPage(1);
      } else {
        setTestimonialsPerPage(3);
      }
    };

    window.addEventListener("resize", handleResize);

    // Configurar el valor inicial
    handleResize();

    // Cleanup listener al desmontar el componente
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  const prevPage = () => {
    setCurrentPage((prevPage) => (prevPage === 0 ? totalPages - 1 : prevPage - 1));
  };

  const nextPage = () => {
    setCurrentPage((prevPage) => (prevPage === totalPages - 1 ? 0 : prevPage + 1));
  };

  const currentTestimonials = testimonials.slice(
    currentPage * testimonialsPerPage,
    (currentPage + 1) * testimonialsPerPage
  );

  return (
    <section id="testimonios" className="relative container px-6 py-12 mx-auto text-center">
       <h2 className="text-3xl font-bold text-center mb-12">Clientes satisfechos</h2>
      <div className="relative flex items-center justify-center px-6">
        {/* Flecha Izquierda */}
        <button
          onClick={prevPage}
          className="absolute left-0 p-3 bg-gray-200 text-gray-600 rounded-full shadow-md hover:bg-gray-300 transition transform -translate-x-4 lg:-translate-x-8"
        >
          <FaArrowLeft className="w-5 h-5" />
        </button>
        {/* Grid de Testimonios */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {currentTestimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="mb-4">
                <h3 className="font-semibold flex justify-center">{testimonial.name}</h3>
              </div>
              <p className="text-gray-700 mb-4 ">{testimonial.content}</p>
              <div className="flex justify-center">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`w-5 h-5 ${i < testimonial.rating ? "text-yellow-400" : "text-gray-300"}`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
        {/* Flecha Derecha */}
        <button
          onClick={nextPage}
          className="absolute right-0 p-3 bg-gray-200 text-gray-600 rounded-full shadow-md hover:bg-gray-300 transition transform translate-x-4 lg:translate-x-8"
        >
          <FaArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default Testimonios;
