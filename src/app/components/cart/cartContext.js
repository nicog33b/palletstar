'use client'
import { createContext, useState, useEffect } from 'react';

// Crear el contexto
export const CartContext = createContext();

// Proveedor de contexto
export const CartProvider = ({ children }) => {
  // Estado para almacenar los productos en el carrito
  const [cart, setCart] = useState([]);

  // Efecto para cargar el carrito desde localStorage cuando la aplicación se monta
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);

  // Función para guardar el carrito en localStorage
  const saveCartToLocalStorage = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  // Función para agregar un producto al carrito
  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    saveCartToLocalStorage(updatedCart);
  };

  // Función para eliminar un producto del carrito
  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
    saveCartToLocalStorage(updatedCart);
  };

  // Función para vaciar el carrito
  const clearCart = () => {
    setCart([]);
    saveCartToLocalStorage([]);
  };

  // Proveer el estado y las funciones a los componentes hijos
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
