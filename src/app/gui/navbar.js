'use client';

import { useState, useEffect, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaShoppingCart, FaBars } from "react-icons/fa";
import { Cart } from "../components/cart/cart";
import { CartContext } from "../components/cart/cartContext";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/#catalogo", label: "Catalogo" },
  { href:"/blog/pergola", label: "Pergolas"},
  { href: "/#preguntas", label: "Preguntas" },
  { href: "/amedida", label: "Contratar servicio" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cart } = useContext(CartContext);
  const cartItemCount = cart.length;

  const toggleCart = () => setIsCartOpen((prev) => !prev);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const logoSize = isScrolled ? 'h-12 w-12' : 'h-16 w-16';

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`sticky top-0 z-50 transition-all duration-500 
        ${isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-lg' 
          : 'bg-white shadow-md'}`}
    >
      <div className="relative container mx-auto p-2">
        <div className="flex justify-between items-center mx-6">
          {/* Logo */}
          <Link href="/" className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-yellow-600 
              rounded-lg blur opacity-0 group-hover:opacity-50 transition duration-500"></div>
            <Image
              src="/logo.jpg"
              alt="Logo"
              width={600}
              height={600}
              className={`relative rounded-lg shadow-md transform transition-all duration-300 
                group-hover:shadow-xl group-hover:scale-105 ${logoSize}`}
            />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex space-x-8">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="relative group px-4 py-2 text-zinc-700 font-bold 
                  hover:text-[#f4ad32] transition-colors duration-300"
              >
                {label}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#f4ad32] transform scale-x-0 
                  group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Icons */}
          <div className="flex space-x-6 items-center">
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaShoppingCart
                className="h-6 w-6 text-zinc-700 hover:text-[#f4ad32] 
                  transition-colors duration-300 cursor-pointer"
                onClick={toggleCart}
                aria-label="Toggle Cart"
              />
              <AnimatePresence>
                {cartItemCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute -top-2 -right-2 bg-red-400 text-white text-xs 
                      font-bold px-1.5 py-0.5 rounded-full flex items-center justify-center"
                  >
                    {cartItemCount}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleMenu}
              className="lg:hidden flex items-center"
              aria-label="Toggle Menu"
            >
              <FaBars className="h-6 w-6 text-zinc-700 hover:text-[#f4ad32] transition-colors duration-300" />
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden mt-4 overflow-hidden bg-gradient-to-r from-zinc-700 to-zinc-600 rounded-xl shadow-lg"
            >
              <div className="flex flex-col space-y-1 p-2">
                {navLinks.map(({ href, label }) => (
                  <motion.div
                    key={href}
                    whileHover={{ scale: 1.02, x: 10 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      href={href}
                      className="block text-white font-semibold py-3 px-4 rounded-lg
                        hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <Cart isOpen={isCartOpen} toggleCart={toggleCart} />
    </motion.nav>
  );
}
