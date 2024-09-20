// components/Footer.js
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'; // Importar iconos específicos de react-icons

const Footer = () => {
  return (
    <footer className="bg-white text-zinc-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo reducido */}
          <div className="mb-4 md:mb-0">
            <Image
              src="/logo.jpg" // Reemplaza con la ruta de tu logo
              alt="Logo"
              width={80}
              height={80}
            />
          </div>
          {/* Menú de enlaces */}
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
            <Link href="/sillon" className="hover:text-yellow-500">
              Sillón
            </Link>
            <Link href="/mesa" className="hover:text-yellow-500">
              Mesa
            </Link>
            <Link href="/combo" className="hover:text-yellow-500">
              Combo
            </Link>
          </div>
          {/* Redes Sociales */}
          <div className="flex flex-row space-x-4 mt-4 md:mt-0">
            <Link href="https://www.facebook.com/tu_pagina" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={24} className="hover:text-blue-600" />
            </Link>
            <Link href="https://www.instagram.com/tu_perfil" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} className="hover:text-pink-500" />
            </Link>
            <Link href="https://wa.me/tu_numero" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp size={24} className="hover:text-green-500" />
            </Link>
          </div>
        </div>
        {/* Separador */}
        <hr className="my-6 border-gray-700" />
        {/* Información adicional */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; 2024 PalletStars. Todos los derechos reservados.</p>
          <div className="flex space-x-4">
            <Link href="/terminos" className="hover:text-yellow-500">
              Términos de Servicio
            </Link>
            <Link href="/privacidad" className="hover:text-yellow-500">
              Política de Privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
