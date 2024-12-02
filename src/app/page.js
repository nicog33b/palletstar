import FeaturedBenefitsSection from "./components/benefits";
import FAQ from "./components/FAQ";
import ProductCard from "./components/productCard";
import Testimonios from "./components/testimonios";
import Banner from "./gui/banner";



export default function Home() {
  return(
   <>
   <Banner/>
   <FeaturedBenefitsSection/>
   <ProductCard/>
  <section id='catalogo mb-2'></section>
   <Testimonios/>
   <FAQ/>
   </>
  );
}
