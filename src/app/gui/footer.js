import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const socialLinks = [
  {
    href: 'https://www.facebook.com/Palletstars',
    icon: <FaFacebook size={24} className="hover:text-blue-600" />,
  },
  {
    href: 'https://www.instagram.com/palletstars/',
    icon: <FaInstagram size={24} className="hover:text-pink-500" />,
  },
  {
    href: 'https://wa.me/tu_numero',
    icon: <FaWhatsapp size={24} className="hover:text-green-500" />,
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
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/logo.jpg"
              alt="Logo"
              width={60}
              height={60}
              className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 mr-2"
            />
          </Link>

          {/* Redes Sociales */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            {socialLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
              </Link>
            ))}
          </div>
        </div>

        {/* Separador */}
        <hr className="my-6 border-gray-700" />

        {/* Información adicional */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="ff-1">&copy; 2024 PalletStars. Desarrollado por <span className='text-blue-950 brightness-125 text-md text-bold'> KuberaLabs </span> Crea tu pagina web <Link href='https://wa.me/59894272390?text=Hola,%20estoy%20interesado%20en%20crear%20una%20página%20web.' className='text-blue-600'>Aqui</Link> </p>
          <div className="flex space-x-4">
            {policyLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="hover:text-yellow-500"
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
