import { Carousel as Carousel_T } from "@material-tailwind/react";
import React, { useEffect, useState } from 'react'

// Esta es otra forma de agregar imagenes a los carousel
const images = [
  require('../assets/imagenes/4.svg').default,
  require('../assets/imagenes/6.svg').default,  
  require('../assets/imagenes/8.svg').default,
  require('../assets/imagenes/10_c.svg').default,
  require('../assets/imagenes/12_c.svg').default,
  require('../assets/imagenes/14_c.svg').default,
];

export function CarouselTransition() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Se Utiliza el hook para cambiar de imagenes cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Cambiar imagen cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black text-white text-center py-8">
      <h1 className="text-4xl font-bold">Nuestros Proyectos</h1>
      <Carousel_T className="rounded-xl">
        <img
          src={images[currentImageIndex]}
          alt={`slide ${currentImageIndex + 1}`}
          className="h-full w-full object-cover"
        />
      </Carousel_T>
    </div>
  );
}
