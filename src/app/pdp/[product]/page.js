'use client';
import React, { useState, useEffect, useContext } from 'react';
import { FiStar, FiShoppingCart, FiHeart, FiShare2, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useParams } from 'next/navigation'; // O usar `useRouter` si `useParams` no funciona
import { CartContext } from '@/app/components/cart/cartContext';

// Array de productos
const productos = [
  {
    id: 1,
    productName: 'Sillón dos cuerpos',
    price: 2590,
    description: 'Sillón de dos cuerpos con madera tratada. Perfecto para exteriores.',
    measures: '1,05 m x 60 cm',
    images: ['/images/product1/img1.jpg', '/images/product1/img2.jpg', '/images/product1/img3.jpg'],
    tags: ['sillón', 'madera tratada', 'exterior'],
  },
  // Otros productos...
];

const ProductDetailPage = () => {
  const { productId } = useParams(); // O `const router = useRouter(); const { productId } = router.query;`
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState('');
  const [quantity, setQuantity] = useState(1);
  
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const productData = productos.find(producto => producto.id === Number(productId));
    console.log('Product Data:', productData); // Verifica qué se imprime aquí
    if (productData) {
      setProduct(productData);
      setMainImage(productData.images[0]);
    }
  }, [productId]);

  if (!product) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row -mx-4">
        {/* Galería de imágenes */}
        <div className="md:flex-1 px-4">
          <div className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4">
            <img
              src={mainImage}
              alt={product.productName}
              className="h-full w-full object-cover rounded-lg"
            />
          </div>
          <div className="flex -mx-2 mb-4">
            {product.images.map((img, i) => (
              <div className="flex-1 px-2" key={i}>
                <button
                  onClick={() => setMainImage(img)}
                  className="focus:outline-none w-full rounded-lg h-24 md:h-32 bg-gray-100 flex items-center justify-center"
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${i + 1}`}
                    className="h-full w-full object-cover rounded-lg"
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
        {/* Detalles del producto */}
        <div className="md:flex-1 px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">{product.productName}</h2>
          <p className="text-gray-600 text-sm mb-4">
            SKU: {product.id} | Tipo: {product.tags.join(', ')}
          </p>
          <div className="mb-4">
            <span className="font-bold text-3xl text-gray-800">${product.price}</span>
            <span className="text-gray-600 ml-2 text-sm">Impuestos incluidos</span>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Descripción del producto</h3>
            <p className="text-gray-600">{product.description}</p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Medidas</h3>
            <p className="text-gray-600">{product.measures}</p>
          </div>
          <div className="flex -mx-2 mb-4">
            <div className="w-1/2 px-2">
              <button
                onClick={() => addToCart(product)}
                className="w-full bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 focus:outline-none focus:shadow-outline"
                disabled={!product.availability}
              >
                Añadir al carrito
              </button>
            </div>
            <div className="w-1/2 px-2">
              <button
                className="w-full bg-gray-200 text-gray-800 py-2 px-4 rounded-full font-bold hover:bg-gray-300 focus:outline-none focus:shadow-outline"
                disabled={!product.availability}
              >
                Comprar ahora
              </button>
            </div>
          </div>
          <div className="flex items-center mb-4">
            <button className="mr-2 text-gray-700 hover:text-gray-900 focus:outline-none">
              <FiHeart className="h-5 w-5" />
            </button>
            <button className="text-gray-700 hover:text-gray-900 focus:outline-none">
              <FiShare2 className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
