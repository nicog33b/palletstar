//slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//main
import React from 'react';
import Image from "next/image";

//carrousel
import Slider from 'react-slick';

const CarrouselPergola = () => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
          {
            breakpoint: 1400, // Pantallas móviles
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 1024, // Pantallas móviles
            settings: {
              dots:true,
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          
        ],
      };

      const GaleriaPergolas = [
        "/blog/pergola/WhatsApp Image 2024-11-20 at 11.05.24 PM.jpeg",
        "/blog/pergola/WhatsApp Image 2024-11-20 at 11.05.24 PM (1).jpeg",
        "/blog/pergola/WhatsApp Image 2024-11-20 at 11.05.25 PM.jpeg",
        "/7del12-2024/IMG_20241207_214743_533.jpg",
        "/7del12-2024/IMG_20241207_214745_927.jpg",
        "/7del12-2024/IMG_20241207_214747_601.jpg",
        "/7del12-2024/IMG_20241207_214749_188.jpg",
        "/7del12-2024/IMG_20241207_214751_601.jpg",
        "/7del12-2024/IMG_20241207_214753_238.jpg",
        "/7del12-2024/IMG_20241207_214756_065.jpg",
      ];
      

  return (
    <section id="pergolas-carrousel">
      <div className="">
        <Slider {...settings}>
          {GaleriaPergolas.map((pergola, index) => (
            <div key={index} className="px-2">
              <Image
                className="pergola-img"
                src={pergola}
                alt={`Pergola ${index + 1}`}
                width={2000}
                height={2000}
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default CarrouselPergola;
