import React from "react";
import Image from "next/image";
import './pergola.css';
import PergolaForm from "./pergola-form";


const PergolaPost = () => {

  const GaleryList = [
    { name: "Imagen 1", images: ["/blog/pergola/42467f95-7502-4073-bcfb-9decb2216a26.webp"] },
    { name: "Imagen 2", images: ["/blog/pergola/IMG_20241108_152705.jpg"] },
    { name: "Imagen 3", images: ["/blog/pergola/WhatsApp Image 2024-11-19 at 11.52.58 PM.jpeg"] },
    { name: "Imagen 4", images: ["/blog/pergola/WhatsApp Image 2024-11-20 at 11.05.24 PM (1).jpeg"] },
    { name: "Imagen 5", images: ["/blog/pergola/WhatsApp Image 2024-11-20 at 11.05.24 PM.jpeg"] },
    { name: "Imagen 6", images: ["/blog/pergola/WhatsApp Image 2024-11-20 at 11.05.25 PM.jpeg"] },
    { name: "Imagen 7", images: ["/blog/pergola/IMG_20241116_150204.jpg"] },
    { name: "Imagen 8", images: ["/blog/pergola/IMG_20241116_150448.jpg"] },
  ];


  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold  text-zinc-900  ff-1 text-center">
          Descubrí por qué necesitás una pérgola en tu casa      
          </h1>
        <hr className="border-t-2 border-gray-300 w-16 mx-auto mb-8" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-xl font-bold text-[#F4A261] mb-4 ff-1" >¿Qué es una pérgola?</h2>
            <p className="text-gray-600 mb-6  text-justify">
              Es la solución perfecta para disfrutar al aire libre con sombra y estilo. Una pérgola transforma tu jardín o terraza en el lugar ideal para compartir buenos momentos.
            </p>
            <Image
              width={900}
              height={900}
              src="/blog/pergola/42467f95-7502-4073-bcfb-9decb2216a26.webp"
              alt="Grupo disfrutando bajo una pérgola"
              className="w-full rounded-lg shadow-md"
            />
          </div>

          <div>
            <Image
              width={900}
              height={900}
              src="/blog/pergola/IMG_20241116_144338.jpg"
              alt="Pergola design"
              className="w-full rounded-lg shadow-md mb-6 lg:mb-0"
            />
            <h2 className="text-xl font-bold text-[#F4A261] mb-4 mt-3 ff-1 ">Origen de la pérgola</h2>
            <p className="text-gray-600 mb-3 text-justify">
              Desde la antigua Roma hasta hoy, las pérgolas son sinónimo de elegancia y practicidad. Hoy, son el toque que tu espacio necesita para ganar comodidad y diseño.
            </p>
            <Image
              width={900}
              height={900}
              src="/blog/pergola/IMG_20241116_150448.jpg"
              alt="Pergola design"
              className="w-full rounded-lg shadow-md mb-6 lg:mb-0"
              style={{ height: 450 }}
            />
          </div>
        </div>

   
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#F4A261] mb-6 ff-1">Beneficios de las pérgolas</h2>
          <p className="">
            Una pérgola puede aumentar el valor de tu propiedad al añadir un espacio atractivo y funcional al aire libre. Además, una pérgola ofrece un área versátil que puede adaptarse para diversas actividades, como reuniones sociales, cenas al aire libre o simplemente un lugar de descanso. También, una pérgola puede servir como una extensión de tu espacio habitable, creando una transición armoniosa entre el interior y el exterior de tu hogar. La instalación de una pérgola puede mejorar la eficiencia energética al proporcionar sombra, reduciendo la necesidad de climatización en áreas adyacentes. Por último, una pérgola bien diseñada puede aportar privacidad, creando un refugio íntimo en tu jardín o terraza.
          </p>
        </section>




        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#F4A261] mb-6">Galería</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-9">
            {GaleryList.map((image, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative cursor-pointer">
                  <Image
                    className="w-full h-64 object-cover transition-transform duration-300 transform hover:scale-105"
                    width={300}
                    height={300}
                    src={image.images[0]}
                    alt={image.name}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>


        <section className="py-8 px-4 text-center">
          <h1 className="text-4xl font-bold mb-6 ff-1 text-[#F4A261]">Porque elegir Palletstars?</h1>
          <p className="max-w-4xl mx-auto text-lg">
            En PalletStars, no solo fabricamos pérgolas; creamos experiencias únicas. Nuestro compromiso con la calidad, la rapidez y la personalización garantiza que cada pérgola sea más que una estructura: es una mejora para tu estilo de vida.
          </p>
        </section>

        <section className="relative py-20 px-4">
          {/* Imagen de fondo */}
          <Image
            width={1200}
            height={1200}
            alt="Inicia con PalletStars"
            className="absolute inset-0 w-full h-full object-cover"
            src="/blog/pergola/WhatsApp Image 2024-11-20 at 11.05.24 PM.jpeg"
          />

          {/* Superposición de degradado */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>

          {/* Contenido */}
          <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-6 ff-1 bg-black/90">
              ¿Estás listo para una experiencia diferente con PALLETSTARS?
            </h2>
          </div>
        </section>


        <PergolaForm></PergolaForm>
      
      </div>
    </div>
  );
}

export default PergolaPost;