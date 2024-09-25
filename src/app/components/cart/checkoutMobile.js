'use client'

import { useContext, useState } from 'react'
import { CartContext } from './cartContext'
import { FaWhatsapp,FaTrash, FaMinus, FaPlus, FaShoppingCart, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import useWhatsApp from '@/app/hooks/useWhatsapp'
import useSwal from '@/app/hooks/useSwal'

export default function MobileCheckout() {
  const { cart, updateQuantity, removeFromCart } = useContext(CartContext)
  const [currentIndex, setCurrentIndex] = useState(0)
  

  const { seguirOBorrarCarrito} = useSwal();

  const buyNow=()=>{
    sendCart(cart)
    seguirOBorrarCarrito();
  }

  const {sendCart} = useWhatsApp();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const nextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cart.length)
  }

  const prevItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cart.length) % cart.length)
  }

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
        <div className="text-center w-full bg-white rounded-lg shadow-lg p-8">
          <FaShoppingCart className="mx-auto text-gray-400 w-16 h-16 mb-4" />
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Tu carrito está vacío</h2>
          <p className="text-gray-600 mb-8">¡Agrega productos al carrito!</p>
          <Link href="/#catalogo" className="inline-block bg-amber-200 text-zinc-600 font-semibold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none">
            Explorar productos
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Carrito de compras</h2>
      <div className="flex-grow flex flex-col justify-between">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="p-4"
            >
              {cart[currentIndex] && (
                <div className="flex flex-col items-center">
                  <Image
                    className="h-48 w-48 rounded-md object-cover mb-4"
                    width={600}
                    height={600}
                    src={cart[currentIndex].images[0]}
                    alt={cart[currentIndex].name}
                  />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{cart[currentIndex].name}</h3>
                  <div className="text-sm font-semibold text-gray-900 mb-4">${cart[currentIndex].price.toFixed(2)}</div>
                  <div className="flex items-center mb-4">
                    <button
                      onClick={() => updateQuantity(cart[currentIndex].id, cart[currentIndex].quantity - 1)}
                      className="text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full p-2"
                    >
                      <FaMinus className="h-4 w-4" />
                    </button>
                    <span className="mx-4 text-sm text-gray-700">{cart[currentIndex].quantity}</span>
                    <button
                      onClick={() => updateQuantity(cart[currentIndex].id, cart[currentIndex].quantity + 1)}
                      className="text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full p-2"
                    >
                      <FaPlus className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="text-sm font-semibold text-gray-900 mb-4">
                    Total: ${(cart[currentIndex].price * cart[currentIndex].quantity).toFixed(2)}
                  </div>
                  <button
                    onClick={() => removeFromCart(cart[currentIndex].id)}
                    className="text-red-600 hover:text-red-900 focus:outline-none focus:ring-2 focus:ring-red-500 rounded-full p-2"
                  >
                    <FaTrash className="h-5 w-5" />
                  </button>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-between px-4 py-2 bg-gray-100">
            <button onClick={prevItem} className="text-gray-600 focus:outline-none">
              <FaChevronLeft className="h-6 w-6" />
            </button>
            <span className="text-sm text-gray-600">
              {currentIndex + 1} / {cart.length}
            </span>
            <button onClick={nextItem} className="text-gray-600 focus:outline-none">
              <FaChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
        <div className="mt-auto">
          <div className="text-2xl font-bold text-gray-800 text-center mb-4">
            Total: ${total.toFixed(2)}
          </div>
          <button 
          onClick={buyNow}
          className="w-full flex justify-center  bg-green-400 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
            Proceder al Pago
            <FaWhatsapp className="ml-3 text-2xl" />
          </button>
        </div>
      </div>
    </div>
  )
}