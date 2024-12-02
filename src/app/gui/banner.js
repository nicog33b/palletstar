'use client'

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

export default function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const banners = [
    {
      image: "/bannerr1.jpg",
      title: "Diseño y Confort para tu Hogar",
      description: "Descubre nuestra nueva colección de muebles",
      link: "/#catalogo",
    },
    {
      image: "/banerr2.jpg",
      title: "Innovación y Estilo en Cada Pieza",
      description: "Encuentra muebles que se adapten a tu estilo de vida",
      link: "/#catalogo",
    },
    {
      image: "/banerr3.jpg",
      title: "Calidad y Durabilidad Garantizadas",
      description: "Muebles hechos para durar toda la vida",
      link: "/#catalogo",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [banners.length])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + banners.length) % banners.length)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length)
  }

  return (
    <div className="relative h-[60vh] md:h-[80vh] overflow-hidden">
      <div className="absolute inset-0 flex justify-between items-center z-10 px-4">
        <button
          onClick={goToPrevious}
          className="text-white bg-black/50 hover:bg-black/75 p-2 rounded-full transition-colors duration-300"
          aria-label="Previous banner"
        >
          <FaChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={goToNext}
          className="text-white bg-black/50 hover:bg-black/75 p-2 rounded-full transition-colors duration-300"
          aria-label="Next banner"
        >
          <FaChevronRight className="w-6 h-6" />
        </button>
      </div>
      {banners.map((banner, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="relative w-full h-full">
            <Image
              src={banner.image}
              alt={`Banner ${index + 1}`}
              fill
              sizes="100vw"
              priority={index === 0}
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center max-w-4xl ff-1">{banner.title}</h1>
            <p className="text-xl md:text-2xl mb-8 text-center max-w-2xl">{banner.description}</p>
            <Link
              href={banner.link}
              className="z-20 bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors duration-300 cursor-pointer"
            >
              Ver Catalogo
            </Link>
          </div>
        </div>
      ))}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-10">
        {banners.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-white/50"
            } focus:outline-none transition-colors duration-300`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to banner ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}