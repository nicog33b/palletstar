import "./globals.css";
import "./styles/global.scss";
import Footer from "./gui/footer";
import Navbar from "./gui/navbar";
import ShippingBanner from "./gui/shippingBanner";
import { CartProvider } from "./components/cart/cartContext";
import {GoogleAnalytics} from '@next/third-parties/google'


export const metadata = {
  title: "Pallet Stars - Sillones de Palets, Mesas Ratonas y Pérgolas en Uruguay",
  description: "Descubre en Pallet Stars sillones de palets para exterior, mesas ratonas hechas con pallets y pérgolas personalizadas de alta calidad en Uruguay. ¡Durabilidad y estilo para tu jardín!",
  keywords: [
    "PalletStars",
    "palletstars",
    "sillones de palets",
    "sillones de pallets",
    "sillon de pallets",
    "sillones de pallets para exterior",
    "mesa ratona palets",
    "pérgolas de palets",
    "pergolas a medida",
    "decks de palets",
    "decks a medida",
    "muebles de pallets",
    "sillón de palet",
    "decks de madera",
    "muebles artesanales",
    "Uruguay",
    "precios de sillones de palets",
  ],
  author: "@KuberaLabs",
  charset: "UTF-8",
  robots: "index, follow",
  og: {
    title: "Pallet Stars - Sillones de Palets y Muebles para Exterior",
    description: "Sillones de palets, mesas ratonas y pérgolas de alta calidad en Pallet Stars. ¡Muebles artesanales duraderos para tu jardín o living en Uruguay!",
    image: "https://www.palletstars.uy/images/og-image.jpg", // Cambia a una imagen representativa, no favicon
    url: "https://www.palletstars.uy",
    type: "website",
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

