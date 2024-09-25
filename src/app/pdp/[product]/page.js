'use client';

import React, { useState, useEffect, useContext } from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import {  FiMinus, FiPlus } from 'react-icons/fi';
import { CartContext } from '@/app/components/cart/cartContext';
import { productos } from '@/app/services/products';

import useWhatsApp from '@/app/hooks/useWhatsapp';
import useNotyf from '@/app/hooks/useNotyf';


export default function ProductDetailPage() {
  const { product } = useParams();
  const [productDetail, setProductDetail] = useState(null);
  const [mainImage, setMainImage] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0)

  const { sendProduct } = useWhatsApp();

  const { addToCart } = useContext(CartContext);
  const { notifySuccess, notifyError} = useNotyf();

  useEffect(() => {
    if (product) {
      const productData = productos.find((producto) => producto.id === Number(product));
      if (productData) {
        setProductDetail(productData);
        setMainImage(productData.images[0]);
        setPrice(productData.price)
      }
    }
  }, [product]);

  if (!productDetail) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  const handleQuantityChange = (change) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + change));
  };

  const handleAddToCart = () => {
    notifySuccess("Agregado al carrito");
    addToCart({ ...productDetail, quantity });
  };

  const buyNow = () =>{

    sendProduct({name:productDetail.productName, quantity, price})
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="flex flex-col lg:flex-row -mx-4">
        {/* Image Gallery */}
        <div className="lg:flex-1 px-4 mb-8 lg:mb-0">
          <div className="relative aspect-square overflow-hidden rounded-lg shadow-lg mb-4">
            <Image
              src={mainImage}
              alt={productDetail.productName}
              fill
              className="transition-transform duration-300 hover:scale-105 object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={100}
              priority
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {productDetail.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setMainImage(img)}
                className="relative aspect-square overflow-hidden rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                <Image
                  src={img}
                  alt={`Vista ${i + 1} de ${productDetail.productName}`}
                  fill
                  className="transition-opacity duration-300 hover:opacity-75 object-cover"
                  quality={100}
                />
              </button>
            ))}
          </div>
        </div>
        {/* Product Details */}
        <div className="lg:flex-1 px-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{productDetail.productName}</h1>
          <p className="text-gray-600 text-sm mb-4">
            SKU: {productDetail.id} | Categoría: {productDetail.tags.join(', ')}
          </p>
          <div className="mb-6">
            <span className="text-4xl font-bold text-gray-900">
              ${productDetail.price.toLocaleString()}
            </span>
            <span className="text-gray-600 ml-2 text-sm">Impuestos incluidos</span>
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Descripción del producto</h2>
            <p className="text-gray-700 leading-relaxed">{productDetail.description}</p>
          </div>
          <div className="mb-6">
            <p className="text-gray-700 leading-relaxed">{productDetail.qualityDescription}</p>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Medidas</h3>
            {Array.isArray(productDetail.measures) ? (
              productDetail.measures.map((measure, index) => (
                <p key={index} className="text-gray-600">
                  {measure}
                </p>
              ))
            ) : (
              <p className="text-gray-600">{productDetail.measures}</p>
            )}
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Cantidad</h2>
            <div className="flex items-center">
              <button
                onClick={() => handleQuantityChange(-1)}
                className="text-gray-500 focus:outline-none focus:text-gray-600"
              >
                <FiMinus />
              </button>
              <span className="mx-2 text-gray-700">{quantity}</span>
              <button
                onClick={() => handleQuantityChange(1)}
                className="text-gray-500 focus:outline-none focus:text-gray-600"
              >
                <FiPlus />
              </button>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-[#F4A261] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#F48C32] transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
            >
              Añadir al carrito
            </button>
            <button 
            onClick={buyNow}
            className="flex-1 bg-[#E0E0E0] text-gray-900 py-3 px-6 rounded-lg font-semibold hover:bg-[#B5B5B5] transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
              Comprar ahora
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
