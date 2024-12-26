import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const socialLinks = [
  {
    href: 'https://www.facebook.com/Palletstars',
    icon: <FaFacebook size={24} className="hover:text-blue-600 transition-colors duration-300" />,
    label: 'Facebook',
  },
  {
    href: 'https://www.instagram.com/palletstars/',
    icon: <FaInstagram size={24} className="hover:text-pink-500 transition-colors duration-300" />,
    label: 'Instagram',
  },
  {
    href: 'https://wa.me/tu_numero',
    icon: <FaWhatsapp size={24} className="hover:text-green-500 transition-colors duration-300" />,
    label: 'WhatsApp',
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
    <footer className="text-zinc-800 py-8 bg-[#f5f4ed]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6 sm:flex-row sm:justify-between sm:space-y-0">
          {/* Logo */}
          <Link href="/" className="inline-block">
            <Image
              src="/logo.jpg"
              alt="Logo"
              width={60}
              height={60}
              className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            />
          </Link>

          {/* Redes Sociales */}
          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:scale-110"
                aria-label={link.label}
              >
                {link.icon}
              </Link>
            ))}
          </div>
        </div>

        {/* Separador */}
        <hr className="my-6 border-gray-300" />

        {/* Información adicional */}
        <div className="flex flex-col items-center space-y-4 text-sm sm:flex-row sm:justify-between sm:space-y-0">
          <div className="text-center sm:text-left">
            <p className="ff-1">&copy; 2024 PalletStars.</p>
            <p className="mt-1">
              Desarrollado por{' '}
              <Link 
                href="https://wa.me/59894272390?text=Hola,%20estoy%20interesado%20en%20crear%20una%20página%20web." 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-bold text-blue-950 hover:text-blue-800 transition-colors duration-300"
              >
                KuberaLabs
              </Link>
            </p>
            <p className="mt-1">
              Crea tu página web{' '}
              <Link 
                target="_blank" 
                rel="noopener noreferrer"
                href="https://wa.me/59894272390?text=Hola,%20estoy%20interesado%20en%20crear%20una%20página%20web." 
                className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
              >
                Aquí
              </Link>
            </p>
          </div>
          <div className="flex flex-col space-y-2 text-center sm:flex-row sm:space-y-0 sm:space-x-4 sm:text-right">
            {policyLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="hover:text-yellow-500 transition-colors duration-300"
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
