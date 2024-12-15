import "./globals.css";
import "./styles/global.scss";
import Footer from "./gui/footer";
import Navbar from "./gui/navbar";
import ShippingBanner from "./gui/shippingBanner";
import { CartProvider } from "./components/cart/cartContext";
import { montserrat } from "./fonts/montserrat";
import {GoogleAnalytics} from '@next/third-parties/google'

export const metadata = {
  title: "Palletstars - Sillones de Pallets, Decks y Pérgolas para Uruguayos!",
  description: "Palletstars, trabajamos con pallet de alta calidad, brindamos la mejor durabilidad del mercado, sillones de pallets, pergolas y decks.",
  keywords: ["Palletstars", "sillones de uno y dos cuerpos", "pérgolas", "sillones de pallets", "sillon de pallet con mesa", "muebles artesanales", "pérgolas personalizadas","decks de madera","deck madera","Uruguay"],
  author: "@KuberaLabs",
  charset: "UTF-8",
  robots: "index, follow",
  og: {
    title: "Palletstars - Sillones Artesanales de Palets y Pérgolas",
    description: "Palletstars, trabajamos con pallet de alta calidad, brindamos la mejor durabilidad del mercado, sillones de pallets, pergolas y decks.",
    image: "https://www.palletstars.uy/favicon.ico",
    url: "https://www.palletstars.uy",
    type: "website"
  },

};



export default function RootLayout({ children }) {
  return (
    <html >
      <body>
      <CartProvider>
        <ShippingBanner/>
        <Navbar/>
        {children}
        <Footer/>
        </CartProvider>
      </body>
      <GoogleAnalytics gaId="G-Y0E6BF5QBZ" />
    </html>
  );
}

