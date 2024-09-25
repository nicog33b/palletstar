'use client'

import { useState, useEffect } from 'react'
import DesktopCheckout from "../components/cart/checkoutDesktop"
import MobileCheckout from "../components/cart/checkoutMobile"

// Custom hook to get the window size
const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    
    // Add event listener
    window.addEventListener("resize", handleResize);
    
    // Call handler right away so state gets updated with initial window size
    handleResize();
    
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}

export default function Checkout() {
  const { width } = useWindowSize();
  const isMobile = width < 768; // Adjust this breakpoint as needed

  return (
    <>
      {isMobile ? <MobileCheckout /> : <DesktopCheckout />}
    </>
  )
}