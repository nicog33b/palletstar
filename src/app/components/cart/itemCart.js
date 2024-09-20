'use client'
import React from 'react';

export const CartItem = ({ id, name, price, quantity, removeFromCart }) => (
  <li className="py-6 flex">
    <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
      <img
        src={`https://via.placeholder.com/150?text=${name}`}
        alt={name}
        className="w-full h-full object-center object-cover"
      />
    </div>

    <div className="ml-4 flex-1 flex flex-col">
      <div>
        <div className="flex justify-between text-base font-medium text-gray-900">
          <h3>{name}</h3>
          <p className="ml-4">${price.toFixed(2)}</p>
        </div>
      </div>
      <div className="flex-1 flex items-end justify-between text-sm">
        <p className="text-gray-500">Cantidad {quantity}</p>
        <div className="flex">
          <button
            type="button"
            onClick={() => removeFromCart(id)}
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  </li>
);
