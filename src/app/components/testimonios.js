'use client'
import React, { useState, useEffect } from "react";
import { FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { fraunces } from "../fonts/fraunces";

const Testimonios = () => {
  const testimonials = [
    {
      id: 1,
      name: "María García",
      role: "Diseñadora de Interiores",
      content:
        "Los muebles de pallets son increíbles. La calidad y el diseño superaron mis expectativas. Definitivamente los recomendaré a mis clientes.",
      avatar: "/images/avatar-maria.jpg",
      rating: 5,
    },
    {
      id: 2,
      name: "Juan Pérez",
      role: "Propietario de Café",
      content:
        "Compramos varios juegos de sillas y mesas para nuestro café al aire libre. Son resistentes, cómodos y nuestros clientes los adoran.",
      avatar: "/images/avatar-juan.jpg",
      rating: 4,
    },
    {
      id: 3,
      name: "Ana Martínez",
      role: "Ama de Casa",
      content:
        "El sofá esquinero que compré es perfecto para mi terraza. Es cómodo, duradero y fácil de mantener. ¡Estoy encantada con mi compra!",
      avatar: "/images/avatar-ana.jpg",
      rating: 5,
    },
    {
      id: 4,
      name: "Pedro López",
      role: "Gerente de Restaurante",
      content:
        "Los muebles de pallets han transformado nuestro espacio exterior. Son resistentes y tienen un estilo único. Estamos muy satisfechos.",
      avatar: "/images/avatar-pedro.jpg",
      rating: 5,
    },
    {
      id: 5,
      name: "Laura Sánchez",
      role: "Jardinera",
      content:
        "Las huertas de pallets son perfectas para mi jardín. Son prácticas y muy bonitas. ¡Recomiendo a todos que las prueben!",
      avatar: "/images/avatar-laura.jpg",
      rating: 4,
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
