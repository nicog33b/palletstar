import "./globals.css";
import Banner from "./gui/banner";
import Footer from "./gui/footer";
import Navbar from "./gui/navbar";
import ShippingBanner from "./gui/shippingBanner";
import { CartProvider } from "./components/cart/cartContext";



export const metadata = {
  title: "Palletstars",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html >
      <body>
      <CartProvider>
        <ShippingBanner/>


        <Navbar/>

        
        <Banner/>
        {children}
        <Footer/>
        </CartProvider>
      </body>
    </html>
  );
}

