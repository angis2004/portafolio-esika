import React from "react";
import { MessageCircle, Phone, Mail } from "lucide-react";

export default function Contacto() {
  return (
    <section id="contactame" className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
          Contáctame
        </h2>

        <div className="w-24 h-1 bg-gradient-to-r from-pink-600 to-purple-600 mx-auto mb-8"></div>

        <p className="text-center text-xl text-gray-700 mb-12">
          ¿Lista para descubrir tu belleza o empezar tu negocio? ¡Hablemos!
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <a
            href="https://wa.me/51XXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-br from-green-500 to-green-600 text-white p-8 rounded-2xl hover:shadow-xl transition-all transform hover:scale-105 text-center"
          >
            <MessageCircle size={48} className="mx-auto mb-4" />
            <h3 className="font-bold text-xl mb-2">WhatsApp</h3>
            <p className="text-sm">Chatea conmigo</p>
          </a>

          <a
            href="tel:+51XXXXXXXXX"
            className="bg-gradient-to-br from-pink-500 to-purple-500 text-white p-8 rounded-2xl hover:shadow-xl transition-all transform hover:scale-105 text-center"
          >
            <Phone size={48} className="mx-auto mb-4" />
            <h3 className="font-bold text-xl mb-2">Teléfono</h3>
            <p className="text-sm">Llámame directamente</p>
          </a>

          <a
            href="mailto:carmen@ejemplo.com"
            className="bg-gradient-to-br from-purple-500 to-pink-500 text-white p-8 rounded-2xl hover:shadow-xl transition-all transform hover:scale-105 text-center"
          >
            <Mail size={48} className="mx-auto mb-4" />
            <h3 className="font-bold text-xl mb-2">Email</h3>
            <p className="text-sm">Escríbeme un correo</p>
          </a>
        </div>

        <div className="mt-12 bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            ¿Quieres unirte a mi equipo?
          </h3>
          <p className="text-gray-700 mb-6">
            Si estás interesada en emprender tu propio negocio con Ésika, agenda
            una reunión conmigo y te cuento todo sobre esta increíble
            oportunidad.
          </p>
          <button className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all">
            Quiero ser parte del equipo
          </button>
        </div>
      </div>
    </section>
  );
}
