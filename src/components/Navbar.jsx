import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo/Nombre */}
          <div className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Carmen Moscoso
          </div>

          {/* Links de navegación */}
          <div className="hidden md:flex gap-6">
            <a href="#sobre-mi" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">
              Sobre mí
            </a>
            <a href="#unete-equipo" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">
              Únete al Equipo
            </a>
            <a href="#mi-tienda-online" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">
              Comprar Online
            </a>
            <a href="#galeria" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">
              Galería
            </a>
            <a href="#contactame" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">
              Contacto
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}