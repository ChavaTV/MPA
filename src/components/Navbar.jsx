import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
//import Logo from '../assets/logo_black.png'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav);
  const handleClose = () => {
    setNav(false);
  };

  return (
    <div className='relative w-full h-[80px] flex justify-between items-center px-3 bg-black text-white'>

        {/* menu */}
        <div>
            <ul className='hidden sm:flex'>
                <li className='font-bold'>Nuestros Pilares</li>
                <li className='font-bold'>Branding & Diseño Gráfico</li>
                <li className='font-bold'>Posicionamiento Web & Marketing Digital</li>
                <li className='font-bold'>Impresión & Promocionales</li>
                <li className='font-bold'>Nuestros Clientes</li>
                <li className='font-bold'>Aviso de Privacidad</li>
            </ul>
        </div>

        {/* hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
          {!nav ? <FaBars/> : <FaTimes/>}
        </div>

        {/* Menú desplegable */}
        {nav && (
         <div className='md:hidden z-10 absolute top-0 left-0 w-full h-screen bg-white'>
          {/* Contenido del menú desplegable */}
          <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#94D0C2] flex flex-col justify-center items-center'}>
            {/* Elementos del menú */}
            <li className='py-6 text-2xl' onClick={handleClose}>Nuestros Pilares</li>
            <li className='py-6 text-2xl' onClick={handleClose}>Branding & Diseño Gráfico</li>
            <li className='py-6 text-2xl' onClick={handleClose}>Posicionamiento Web & Marketing Digital</li>
            <li className='py-6 text-2xl' onClick={handleClose}>Impresión & Promocionales</li>
            <li className='py-6 text-2xl' onClick={handleClose}>Nuestros Clientes</li>
            <li className='py-6 text-2xl' onClick={handleClose}>Aviso de Privacidad</li>
          </ul>
         </div>
        )}
    </div>
  )
}

export default Navbar