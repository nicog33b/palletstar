
import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 py-6">
       <Image
              src="/logo.jpg"
              alt="Logo"
              width={600}
              height={600}
              className={` rounded-full  h-36 w-36 shadow-md hover:shadow-lg transition-shadow duration-300 mr-2 mb-3 mt-3`}
            />
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Te perdiste....</h1>
      <p className="text-gray-600 text-lg mb-8 text-center max-w-md">
        Vuelve y explora nuestro catálogo. ¿Qué estás haciendo aquí?
      </p>
      <Link className="px-6 py-3 bg-amber-200 text-zinc-600 rounded-lg hover:bg-amber-300 transition" href="/#catalogo" passHref>
                  Ver catálogo

      </Link>
    </div>
  );
}
