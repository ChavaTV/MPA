import React from 'react';
import imagenPrueba from '../assets/imagenes/1.svg'; // Tercer Forma de tener una imagen

const Contacto = () => {
    return (
        <div className="bg-black text-white text-center py-8">
            <h1 className="text-4xl font-bold">Contáctanos</h1>
            <div className='relative'>
                <img src={imagenPrueba} alt="Imagen de prueba"/>
            </div>
        </div>
    );
}

export default Contacto;
