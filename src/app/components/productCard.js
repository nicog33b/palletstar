'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { productos as productList } from '../services/grid-producto';
import Link from 'next/link';
import { priceFont } from '../fonts/price';
import { motion } from 'framer-motion';
import motionTitle from "../hooks/gui-hook";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function ProductGrid() {
  const { titleh1 } = motionTitle();
  const [dragging, setDragging] = useState(false);

  const sendEncargue = (product) => {
    const phoneNumber = '59899310309';
    const consultaCliente = `Hola, quiero más información de ${product.productName}`;
    const urlEncodedMessage = encodeURIComponent(consultaCliente);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${urlEncodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleBeforeChange = () => {
    setDragging(true);
  };

  const handleAfterChange = () => {
    setDragging(false);
  };

  const handleOnClick = (e, product) => {
    if (dragging) {
      e.preventDefault();
    } else {
      window.location.href = `/pdp/${product.id}`;
    }
  };

  const settings = {
    dots: true,
    arrows:false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    beforeChange: handleBeforeChange,
    afterChange: handleAfterChange,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="catalogo" className="bg-[#f5f4ed] py-12">
      <div className="container mx-auto px-4">
        <div className='text-left mb-8'>
          {titleh1("Nuestro Catálogo")}
        </div>
        <Slider {...settings}>
          {productList.map((product, index) => (
            <div key={index} className="px-6">
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
                onClick={(e) => handleOnClick(e, product)}
              >
               <div className="relative w-full h-64">
                  <Image
                    src={product.images[0]}
                    alt={product.productName}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 transform hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 truncate">{product.productName}</h3>
                  <div className="mt-4 flex items-center justify-between">
                    {product.price === 'Consultar' ? (
                      <span className="text-sm font-medium text-gray-600">Precio a consultar</span>
                    ) : (
                      <span className={`${priceFont.className} text-xl font-bold text-gray-800`}>
                        $ {product.price}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex border-t border-gray-200">
                  <Link
                    href={`/pdp/${product.id}`}
                    className="flex-1 py-3 px-4 bg-[#F4A261] text-white text-center font-medium transition-colors duration-300"
                  >
                    Ver detalles
                  </Link>
                  {product.price === 'Consultar' && (
                    <button
                      onClick={() => sendEncargue(product)}
                      className="flex-1 py-3 px-4 bg-green-500 text-white text-center font-medium hover:bg-green-600 transition-colors duration-300 flex items-center justify-center"
                    >
                      <FaWhatsapp className="mr-2" />
                      Consultar
                    </button>
                  )}
                </div>
              </motion.div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

