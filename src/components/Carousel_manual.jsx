/*CARRUCEL  */
import React, { useState } from 'react';
import { Carousel } from '@material-tailwind/react';

import images from '../assets/data';

export function CarouselManual() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  //Logica para scrolear imagenes a la izquierda
  // Si el índice actual es 0 (es decir, estamos en la primera imagen), queremos ir a la penúltima imagen. De lo contrario, simplemente restamos 2 al índice actual para retroceder dos imágenes.
  const goToPrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 2 : prevIndex - 2
    );
  };

  ////Logica para scrolear imagenes a la derecha
  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 2 ? 0 : prevIndex + 2
    );
  };

  return (
    <div className="relative bottom-0 left-0 w-full">
      <Carousel className="rounded-xl">
        <img
          src={images[currentImageIndex]}
          alt={`slide ${currentImageIndex + 1}`}
          className="h-full w-full object-cover"
        />
        <img
          src={images[currentImageIndex + 1]}
          alt={`slide ${currentImageIndex + 2}`}
          className="h-full w-full object-cover"
        />
      </Carousel>

      <div
        //flecha izq
        className="leftArrow absolute top-1/2 left-4 transform -translate-y-1/2 text-black text-8xl cursor-pointer"
        onClick={goToPrevImage}
      >
        &#10092;
      </div>
      <div
        //flecha der
        className="rightArrow absolute top-1/2 right-4 transform -translate-y-1/2 text-black text-8xl cursor-pointer"
        onClick={goToNextImage}
      >
        &#10093; {/* Esto es una flecha en HTML */}
      </div>
    </div>
  );
}
