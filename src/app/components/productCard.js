import Image from 'next/image';
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { productos as productList } from '../services/products';
import Link from 'next/link';
import { priceFont } from '../fonts/price';

export default function ProductGrid() {
  return (
    <section id='catalogo' className="pb-32 pt-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12 ff-1">Catálogo</h2>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-9">
          {productList.map((product, index) => (
            <div
              key={index}
              className=" rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-300"
            >
              <Link href={`/pdp/${product.id}`} passHref>
                <div className="relative cursor-pointer">
                  <Image
                    className="w-full h-64 object-cover transition-transform duration-300 transform hover:scale-105"
                    width={300}
                    height={300}
                    src={product.images[0]}
                    alt={product.name}
                  />
                </div>
              </Link>
              <div className="p-4">
                <Link href={`/pdp/${product.id}`} className='hover:text-amber-300' passHref>
                <h3 className="text-gray-900 ff-1">{product.productName}</h3>
                </Link>
                <div className="mt-4 flex items-center ">
                  <span className={`${priceFont.className} text-gray-800`}>${product.price} UYU</span>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
