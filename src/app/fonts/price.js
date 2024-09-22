import { Montserrat } from 'next/font/google';

export const priceFont = Montserrat({
  weight: '600', // Peso de la fuente
  subsets: ['latin'], // Puedes agregar más subsets si es necesario
  display: 'swap', // Opción recomendada para mejorar la carga de la fuente
});