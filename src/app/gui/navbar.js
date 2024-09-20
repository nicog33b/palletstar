'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaShoppingCart, FaBars } from "react-icons/fa";
import { Cart } from "../components/cart/cart";

const navLinks = [
  { href: "/living", label: "Sillon" },
  { href: "/comedor", label: "Mesa" },
  { href: "/sale", label: "Combo" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  useEffect(() => {
    const handleScroll = () => {
      // Si el scroll supera 50 píxeles, cambia el estado `isScrolled`
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'h-16' : 'h-24'} bg-white shadow-md`}>
      <div className="relative container mx-auto p-2">
        <div className="flex justify-between items-center mx-6">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/logo.jpg"
              alt="Logo"
              width={600}
              height={600}
              className={`rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 mr-2 ${isScrolled ? 'h-12 w-12' : 'h-20 w-20'}`}
            />
          </Link>

          {/* Iconos e íconos del Navbar */}
          <div className="hidden lg:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#1e1b1b] font-semibold hover:text-black transition-colors duration-200 border-b-2 border-transparent hover:border-black pb-1"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex space-x-6 text-[#1e1b1b]">
              <FaShoppingCart className="h-6 w-6 hover:text-black flex items-center transition-colors duration-200 cursor-pointer" onClick={toggleCart} />    
            <button onClick={toggleMenu} className="lg:hidden flex items-center">
              <FaBars className="h-6 w-6 text-[#1e1b1b]" />
            </button>
          </div>
        </div>

        {/* Menú desplegable para dispositivos móviles */}
        <div
          className={`lg:hidden mt-4 ${isMenuOpen ? "block" : "hidden"} transition-all duration-300 ease-in-out`}
        >
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#1e1b1b] font-semibold bg-[#aeb17d] py-2 px-4 rounded-md hover:bg-[#a4a65d] transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Cart isOpen={isCartOpen} toggleCart={toggleCart} /> 
    </nav>
  );
}
