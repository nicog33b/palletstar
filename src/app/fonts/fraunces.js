import { Fraunces } from 'next/font/google';

export const fraunces = Fraunces({
  weight: ['400'], // Puedes agregar más pesos si los necesitas
  style: ['normal'], // Puedes agregar 'italic' si es necesario
  subsets: ['latin'], // Puedes agregar más subsets si los necesitas
  display: 'swap', // Esto asegura que la fuente se cargue de forma accesible
});
