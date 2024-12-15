'use client';

import React from "react";
//icons
import { FaStar } from "react-icons/fa";

//slick.js
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import motionTitle from "../hooks/gui-hook";

const Testimonios = () => {

const { titleh1} = motionTitle();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const currentTestimonials = [
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
      content: "Excelente compra, muy buena madera.",
      rating: 5,
    },
    {
      id: 5,
      content: "Muy prácticos y cómodos. Buen precio.",
      rating: 5,
    },
    {
      id: 6,
      content: "Excelente y recomendables los sillones.",
      rating: 5,
    },
    {
      id: 7,
      content: "Muy lindo.",
      rating: 4,
    },
    {
      id: 8,
      content: "Excelente.",
      rating: 5,
    },
    {
      id: 9,
      content: "Muy buen producto. Buena terminación.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonios" className="py-24 pt-24 mb-12 mx-auto relative container">
      <div className="text-center">
      {titleh1("Testimonios")}
      <Slider {...settings}>
        {currentTestimonials.map((testimonial) => (
          <div key={testimonial.id} className="px-4" >
            <div className="bg-white rounded-lg p-6">
              <p className="text-gray-700 mb-4">{testimonial.content}</p>
              <div className="flex justify-center">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </Slider>
      </div>
    </section>
  );
};

export default Testimonios;
