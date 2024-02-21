import React from 'react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

//ejemplo de un footer generico para poner redes sociales

function Footer() {
  return (
    <footer className="text-center bg-black text-white ">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Compañia</h3>
            <ul>
              <li><a href="#">Acerca de</a></li>
              <li><a href="#">Carrera</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Centro de ayuda</h3>
            <ul>
              <li><a href="#">Discord</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Contáctanos</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Legal</h3>
            <ul>
              <li><a href="#">Politica de Privacidad </a></li>
              <li><a href="#">Licencia</a></li>
              <li><a href="#">Términos &amp; Conditions</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col items-center md:flex-row md:justify-between">
          <p className="text-sm">© 2024 More Pepper Agency. All rights reserved.</p>
          <div className="mt-4 flex space-x-6">
            <a href="#" className="text-white hover:text-gray-300"><BsFacebook /></a>
            <a href="#" className="text-white hover:text-gray-300"><BsInstagram /></a>
            <a href="#" className="text-white hover:text-gray-300"><BsTwitter /></a>
            <a href="#" className="text-white hover:text-gray-300"><BsGithub /></a>
            <a href="#" className="text-white hover:text-gray-300"><BsDribbble /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
