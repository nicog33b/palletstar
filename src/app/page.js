
import FAQ from "./components/FAQ";
import PergolasFunnel from "./components/pergolas";
import ProductCard from "./components/productCard";
import Testimonios from "./components/testimonios";
import Banner from "./gui/banner";
import WhatsAppButton from "./components/whatsapp";


export default function Home() {
  return(
  <section id="landing">
  <WhatsAppButton phoneNumber="59899310309" />
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
