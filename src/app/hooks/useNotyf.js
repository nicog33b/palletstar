import { useEffect, useState } from 'react';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css'; // Asegúrate de importar el CSS necesario para el estilo de las notificaciones

const useNotyf = () => {
  const [notyf, setNotyf] = useState(null);

  useEffect(() => {
    // Solo se ejecuta en el lado del cliente
    const notyfInstance = new Notyf({
      duration: 3000, // Duración predeterminada de 3 segundos
      position: {
        x: 'center',
        y: 'bottom',
      },
      types: [
        {
          type: 'success',
          background: 'green',
          icon: {
            className: 'material-icons',
            tagName: 'i',
            text: 'check_circle',
          },
        },
        {
          type: 'error',
          background: 'red',
          icon: {
            className: 'material-icons',
            tagName: 'i',
            text: 'error',
          },
        },
      ],
    });

    setNotyf(notyfInstance);

    return () => {
      notyfInstance.dismissAll(); // Limpia todas las notificaciones al desmontar el componente
    };
  }, []); // Solo se ejecuta una vez en el montaje del componente

  // Función para mostrar notificación de éxito
  const notifySuccess = (message) => {
    if (notyf) {
      notyf.success(message);
    }
  };

  // Función para mostrar notificación de error
  const notifyError = (message) => {
    if (notyf) {
      notyf.error(message);
    }
  };

  // Retornamos las funciones que nos interesan del hook
  return {
    notifySuccess,
    notifyError,
  };
};

export default useNotyf;
