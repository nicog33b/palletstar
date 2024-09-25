
import Swal from "sweetalert2";
import { useContext } from "react";
import { CartContext } from "../components/cart/cartContext";

const useSwal = () => {

    const { clearCart} = useContext(CartContext);

const seguirOBorrarCarrito = () =>{

Swal.fire({
    title: 'Carrito',
    text: 'Pudiste enviar tu pedido. ¿Deseas continuar con el carrito guardado o vaciarlo?',
    showCancelButton: true,
    confirmButtonText: 'Continuar con el carrito',
    cancelButtonText: 'Vaciar carrito',
  }).then((result) => {
    if (result.isConfirmed) {
     
    } else {
    clearCart();
    }
  });
} 

  return {
    seguirOBorrarCarrito
  };
}

export default useSwal;