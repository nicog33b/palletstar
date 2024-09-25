'use client';
import { createContext, useState, useEffect } from 'react';

// Crear el contexto
export const CartContext = createContext();

// Proveedor de contexto
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0); // Estado para el total del carrito

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
    calculateCartTotal(savedCart); // Calcular el total al cargar el carrito desde localStorage
  }, []);

  const saveCartToLocalStorage = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  // Función para calcular el total del carrito
  const calculateCartTotal = (cart) => {
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    localStorage.setItem('cartTotal', total.toFixed(2)); // Guardar el total en localStorage
    setCartTotal(total.toFixed(2)); // Actualizar el estado del total
    return total;
  };

  // Función para agregar un producto al carrito o actualizar su cantidad
  const addToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    let updatedCart;
    if (existingProduct) {
      updatedCart = cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + product.quantity } : item
      );
    } else {
      updatedCart = [...cart, product];
    }
    setCart(updatedCart);
    saveCartToLocalStorage(updatedCart);
    calculateCartTotal(updatedCart); // Calcular y actualizar el total
  };

  // Función para actualizar la cantidad de un producto
  const updateQuantity = (productId, quantity) => {
    const updatedCart = cart.map(item =>
      item.id === productId ? { ...item, quantity: Math.max(1, quantity) } : item
    );
    setCart(updatedCart);
    saveCartToLocalStorage(updatedCart);
    calculateCartTotal(updatedCart); // Calcular y actualizar el total
  };

  // Función para eliminar un producto del carrito
  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
    saveCartToLocalStorage(updatedCart);
    calculateCartTotal(updatedCart); // Calcular y actualizar el total
  };

  // Función para vaciar el carrito
  const clearCart = () => {
    setCart([]);
    saveCartToLocalStorage([]);
    setCartTotal(0); // Reiniciar el total del carrito
    localStorage.removeItem('cartTotal'); // Remover el total del carrito de localStorage
  };

  return (
    <CartContext.Provider value={{ cart, cartTotal, addToCart, updateQuantity, removeFromCart, clearCart, calculateCartTotal }}>
      {children}
    </CartContext.Provider>
  );
};
