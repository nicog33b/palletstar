'use client';
import React from 'react';
import Image from 'next/image';
import { FiMinus, FiPlus } from 'react-icons/fi';

export const CartItem = ({ id, images, name, price, quantity, removeFromCart, updateQuantity }) => {
  
  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity > 0) {
      updateQuantity(id, newQuantity);
    }
  };

  return (
    <li className="py-6 flex">
      <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
        <Image
          src={images[0]}
          alt={name + " nuestros productos tienen la maxima calidad de madera, totalmente hecho a mano en uruguay, con envio directo a tu casa"}
          className="w-full h-full object-center object-cover"
          width={300}
          height={300}
        />
      </div>

      <div className="ml-4 flex-1 flex flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>{name}</h3>
            <p className="ml-4">${price}</p>
          </div>
        </div>
        <div className="flex-1 flex items-end justify-between text-sm">
          <div className="flex items-center">
            <button
              type="button"
              onClick={() => handleQuantityChange(-1)}
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              <FiMinus />
            </button>
            <span className="mx-2">{quantity}</span>
            <button
              type="button"
              onClick={() => handleQuantityChange(1)}
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              <FiPlus />
            </button>
          </div>
          <div className="flex">
            <button
              type="button"
              onClick={() => removeFromCart(id)}
              className="font-medium text-red-600 hover:text-red-500"
            >
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};
