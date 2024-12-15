
import FAQ from "./components/FAQ";
import PergolasFunnel from "./components/pergolas";
import ProductCard from "./components/productCard";
import Testimonios from "./components/testimonios";
import Banner from "./gui/banner";



export default function Home() {
  return(
  <section id="landing">
  <div id="bannerArea" className="">
   <Banner/>
   </div>
   <div id="bodyArea" className="bg-white overflow-hidden mx-auto">
  <section id="catalogo-productos">
   <ProductCard/>
   </section>
   <PergolasFunnel/>
   <Testimonios/>
   <FAQ/>
   </div>
   </section>
  );
}
