import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const socialLinks = [
  {
    href: 'https://www.facebook.com/Palletstars',
    icon: <FaFacebook size={24} />,
    label: 'Facebook',
    hoverColor: 'hover:text-blue-600',
  },
  {
    href: 'https://www.instagram.com/palletstars/',
    icon: <FaInstagram size={24} />,
    label: 'Instagram',
    hoverColor: 'hover:text-pink-500',
  },
  {
    href: 'https://wa.me/tu_numero',
    icon: <FaWhatsapp size={24} />,
    label: 'WhatsApp',
    hoverColor: 'hover:text-green-500',
  },
];

const policyLinks = [
  {
    href: '/terminos',
    text: 'Términos de Servicio',
  },
  {
    href: '/privacidad',
    text: 'Política de Privacidad',
  },
];

const Footer = () => {
  return (
    <footer className="text-zinc-800 py-12 bg-gradient-to-b from-[#f5f4ed] to-[#e8e7e0]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-8 sm:flex-row sm:justify-between sm:space-y-0">
          {/* Logo */}
          <Link 
            href="/" 
            className="group relative inline-block transform hover:scale-105 transition-all duration-300"
          >
            <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-600 opacity-0 group-hover:opacity-50 blur transition duration-300"></div>
            <Image
              src="/logo.jpg"
              alt="Logo"
              width={70}
              height={70}
              className="relative rounded-lg shadow-lg"
            />
          </Link>

          {/* Redes Sociales */}
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`transform hover:scale-110 transition-all duration-300 ${link.hoverColor}`}
                aria-label={link.label}
              >
                <div className="p-2 rounded-full hover:bg-white/10 transition-colors duration-300">
                  {link.icon}
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Separador */}
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

        {/* Información adicional */}
        <div className="flex flex-col items-center space-y-6 text-sm sm:flex-row sm:justify-between sm:space-y-0">
          <div className="text-center sm:text-left space-y-3">
            <p className="ff-1 text-lg font-semibold">&copy; 2024 PalletStars.</p>
            <Link 
              href="https://wa.me/59894272390?text=Hola,%20quiero%20hacer%20una%20consulta" 
              target="_blank" 
              className="group flex items-center font-roboto text-zinc-800 hover:text-zinc-900 transition-colors duration-300"
            >
              <span className="mr-2">Creado por</span>
              <span className="font-medium border-b border-transparent group-hover:border-zinc-800 transition-all duration-300">
                Nicolás García
              </span>
              <FaWhatsapp className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1 text-green-600" />
            </Link>
          </div>

          <div className="flex flex-col space-y-3 text-center sm:flex-row sm:space-y-0 sm:space-x-6 sm:text-right">
            {policyLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="relative group"
              >
                <span className="relative inline-block transform transition-transform duration-300 group-hover:-translate-y-1">
                  {link.text}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
