import Image from 'next/image';
import React from 'react';
import { FaLeaf, FaRecycle, FaHandPaper } from 'react-icons/fa';

const products = [
  {
    name: 'Eco-friendly Sofa',
    description: 'A comfortable and stylish sofa made from recycled materials.',
    price: 350,
    imageUrl: '/sofa.jpg',
  },
  {
    name: 'Wooden Coffee Table',
    description: 'A handmade coffee table crafted from reclaimed wood.',
    price: 150,
    imageUrl: '/coffee-table.jpg',
  },
  {
    name: 'Organic Planter Box',
    description: 'A beautiful planter box made from sustainable wood.',
    price: 80,
    imageUrl: '/planter.jpg',
  }
];

export default function ProductGrid() {
  return (
    <div className=" py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {products.map((product, index) => (
            <div
              key={index}
              className="max-w-sm rounded overflow-hidden shadow-lg hover:bg-amber-100 hover:bg-opacity-75 hover:rounded-md transition-transform duration-300 hover:scale-105"
            >
              <Image
                className="w-full h-64 object-cover cursor-pointer"
                width={300}
                height={300}
                src='/product.jpg'
                alt={product.name}
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-amber-800">
                  {product.name}
                </div>
                <p className="text-gray-700 text-base">{product.description}</p>
              </div>
              <div className="px-6 pt-4 pb-2 flex justify-between items-center">
                <span className="inline-block bg-amber-200 rounded-full px-3 py-1 text-sm font-semibold text-amber-800 mr-2">
                  ${product.price}
                </span>
                <div className="flex space-x-2">
                  <FaLeaf className="text-green-600" />
                  <FaRecycle className="text-blue-600" />
                  <FaHandPaper className="text-amber-600" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
