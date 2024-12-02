import { useCallback, useContext } from 'react';
import { CartContext } from '@/app/components/cart/cartContext'; // Importar el contexto

const useWhatsApp = () => {
  const phoneNumber = '59899310309'; // Número de WhatsApp sin el +
  const { cartTotal } = useContext(CartContext); // Obtener el total del carrito del contexto
  
  const sendCart = useCallback((cartItems) => {
    const greeting = "Hola, quiero encargar los productos de mi carrito:";
    const message = cartItems.map(item =>  
      `*Producto:* ${item.productName}\n*Cantidad:* ${item.quantity}`
    ).join('\n\n');

    const fullMessage = `${greeting}\n\n${message}\n\n*Total:* $${cartTotal}`;
    const urlEncodedMessage = encodeURIComponent(fullMessage);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${urlEncodedMessage}`;

    window.open(whatsappUrl, '_blank');
  }, [phoneNumber, cartTotal]); 

  const sendProduct = useCallback((product) => {
    const greeting = "Hola, quiero encargar el siguiente producto:";
    console.log(product)
    const message = `*Producto:* ${product.name}\n*Cantidad:* ${product.quantity}`;
    const totalProduct = product.price * product.quantity
    const fullMessage = `${greeting}\n\n${message}\n\n*Total:* $${totalProduct.toFixed(2)}`;
    const urlEncodedMessage = encodeURIComponent(fullMessage);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${urlEncodedMessage}`;

    window.open(whatsappUrl, '_blank');
  }, [phoneNumber]);


  const sendMessage = useCallback((message) => {

    const fullMessage = message;
    const urlEncodedMessage = encodeURIComponent(fullMessage);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${urlEncodedMessage}`;

    window.open(whatsappUrl, '_blank');
  }, [phoneNumber]);

  return { sendCart, sendProduct, sendMessage };
};

export default useWhatsApp;
