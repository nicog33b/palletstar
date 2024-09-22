import "./globals.css";
import Banner from "./gui/banner";
import Footer from "./gui/footer";
import Navbar from "./gui/navbar";
import ShippingBanner from "./gui/shippingBanner";
import { CartProvider } from "./components/cart/cartContext";

import { Montserrat } from "next/font/google";
import { montserrat } from "./fonts/montserrat";


export const metadata = {
  title: "Palletstars",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html >
      <body className={montserrat.className}>
      <CartProvider>
        <ShippingBanner/>


        <Navbar/>
        {children}
        <Footer/>
        </CartProvider>
      </body>
    </html>
  );
}

