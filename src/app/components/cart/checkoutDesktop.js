'use client'

import { useContext } from 'react'
import { CartContext } from './cartContext'

import { FaWhatsapp,FaTrash, FaMinus, FaPlus, FaShoppingCart } from 'react-icons/fa'

import Link from 'next/link'
import Image from 'next/image'

import useWhatsApp from '@/app/hooks/useWhatsapp'
import useSwal from '@/app/hooks/useSwal'
export default function CheckoutDesktop() {
  const { cart, updateQuantity, removeFromCart, clearCart } = useContext(CartContext)


  const {sendCart} = useWhatsApp();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const { seguirOBorrarCarrito} = useSwal();

  const buyNow=()=>{
    sendCart(cart)
    seguirOBorrarCarrito();
  }



  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center max-w-md w-full bg-white rounded-lg shadow-lg p-8">
          <FaShoppingCart className="mx-auto text-gray-400 w-16 h-16 mb-4" />
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Tu carrito está vacío</h2>
          <p className="text-gray-600 mb-8">¡Agrega productos al carrito!</p>
          <Link href="/#catalogo" className="inline-block bg-amber-200 text-zinc-600 font-semibold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none ">
            Explorar productos
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold mb-8 text-center text-gray-800">Carrito de compras</h2>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-100 text-center">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Producto</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Precio</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Cantidad</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Total</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"></th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {cart.map((item) => (
              <tr key={item.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-24 w-24">
                      <Image className="h-24 w-24 rounded-md object-cover" width={600} height={600} src={item.images[0]} alt={item.name} />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{item.name}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-semibold text-gray-900">${item.price}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex text-left">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full p-1"
                    >
                      <FaMinus className="h-4 w-4" />
                    </button>
                    <span className="mx-2 text-sm text-gray-700 w-8 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full p-1"
                    >
                      <FaPlus className="h-4 w-4" />
                    </button>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-semibold text-gray-900">${(item.price * item.quantity).toFixed(2)}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-600 hover:text-red-900 focus:outline-none focus:ring-2 focus:ring-red-500 rounded-full p-1"
                  >
                    <FaTrash className="h-4 w-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
      <div className="mt-8 flex flex-col md:flex-row justify-end items-center">
        <div className="text-2xl font-bold text-gray-800">
          Total: ${total.toFixed(2)}
        </div>
      </div>
      <div className="mt-8 flex justify-center md:justify-end">
        <button 
        onClick={buyNow}
        className="flex justify-center md:w-4/12  lg:w-3/12 bg-green-400 text-center hover:bg-green-600 text-white font-bold py-2 px-2 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
          Proceder al Pago
          <FaWhatsapp className=" text-2xl ml-3" />
        </button>
      </div>
    </div>
  )
}