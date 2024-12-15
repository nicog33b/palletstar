'use client';
import Carousel from "./pergolas/carrousel-pergola";
import motionTitle from "../hooks/gui-hook";
import Link from "next/link";

export default function PergolasFunnel() {
  const { titleh1 } = motionTitle();

  return (
    <section id="pergolas" className="py-24 mt-12 px-6  relative">
      <div className="container mx-auto flex-col flex p-0">
        <div className="text-left">
        {titleh1("Pérgolas de calidad superior")} {/* Renderiza el título con animación */}
        <div className="text-justify py-6 mb-4 text-[#666666] text-lg">
        Es la solución perfecta para disfrutar al aire libre con sombra y estilo. Una pérgola transforma tu jardín o terraza en el lugar ideal para compartir buenos momentos... <span className="text-blue-600 font-light text-base hover:cursor-pointer hover:duration-300"><Link className="text-[#F4A261] hover:text-[#F48C32]" href="/blog/pergola">Seguir leyendo</Link></span>
        </div>
        </div>
        <div className="">
      <Carousel />
      </div>
      <Link className="text-center" href='/blog/pergola/#pergola-form'><button className="mt-16 bg-[#F4A261] hover:bg-[#F48C32] text-white mx-auto p-4 rounded-md">Pedir presupuesto</button></Link>
      </div>
    </section>
  );
}
