'use client';

import { useState, useEffect, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaShoppingCart, FaBars } from "react-icons/fa";
import { Cart } from "../components/cart/cart";
import { CartContext } from "../components/cart/cartContext";

const navLinks = [
  { href: "/#catalogo", label: "Catalogo" },
  { href: "/#preguntas", label: "Preguntas" },
  { href: "/amedida", label: "Pide a Medida" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => setIsCartOpen((prev) => !prev);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navHeight = isScrolled ? 'h-16' : 'h-24';
  const logoSize = isScrolled ? 'h-12 w-12' : 'h-20 w-20';
  const bgOpacity = isScrolled ? 'bg-opacity-65' : 'bg-opacity-95';
  const rounded = isScrolled ? 'rounded-b-3xl' : 'rounded';
  // Acceso al contexto del carrito
  const { cart } = useContext(CartContext);

  // Calcular numero de items en el carrito
  const cartItemCount = cart.length;

  return (
    <nav className={`sticky top-0 z-50 transition-all bg duration-1000 ${navHeight} ${bgOpacity} ${rounded} bg-[#d7d4c4] shadow-md `}>
      <div className="relative container mx-auto p-2">
        <div className="flex justify-between items-center mx-6">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/logo.jpg"
              alt="Logo"
              width={600}
              height={600}
              className={`rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 mr-2 ${logoSize}`}
            />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex space-x-8">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-[#8B5E3C] font-semibold hover:text-black transition-colors duration-200 border-b-2 border-transparent hover:border-black pb-1"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Icons */}
          <div className="flex space-x-6 text-[#1e1b1b] items-center">
            <div className="relative">
              <FaShoppingCart
                className="h-6 w-6 hover:text-black transition-colors duration-200 cursor-pointer"
                onClick={toggleCart}
                aria-label="Toggle Cart"
              />
              <span className="absolute -top-2 -right-2 bg-red-400 text-white text-xs font-bold px-1.5 py-0.5 rounded-full flex items-center justify-center">
                {cartItemCount}
              </span>
            </div>
            <button onClick={toggleMenu} className="lg:hidden flex items-center" aria-label="Toggle Menu">
              <FaBars className="h-6 w-6 text-[#1e1b1b]" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 transition-all duration-300 ease-in-out bg-zinc-600">
            <div className="flex flex-col space-y-2">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-white font-semibold py-2 px-4 rounded-md hover:bg-[#a4a65d] transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
      <Cart isOpen={isCartOpen} toggleCart={toggleCart} />
    </nav>
  );
}
