import React, { useState } from 'react';
import { MapPin, ShoppingBag, Users, Award, TrendingUp, Clock, Gift, Star, MessageCircle, Camera, HelpCircle } from 'lucide-react';

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);

  const testimonios = [
    {
      nombre: "María López",
      texto: "Gracias a Carmen empecé mi negocio hace 2 años. Ahora tengo ingresos extras y horarios flexibles. ¡Lo mejor que he hecho!",
      rol: "Consultora Ésika"
    },
    {
      nombre: "Lucía Torres",
      texto: "Carmen es una líder increíble, siempre nos apoya y motiva. He logrado mis metas y conocido personas maravillosas.",
      rol: "Consultora Ésika"
    },
    {
      nombre: "Rosa Medina",
      texto: "Trabajo desde casa, cuido a mis hijos y genero ingresos. Carmen me enseñó todo lo necesario para tener éxito.",
      rol: "Consultora Ésika"
    }
  ];

  const faqs = [
    {
      pregunta: "¿Necesito inversión inicial para ser consultora?",
      respuesta: "No necesitas una gran inversión. Ésika tiene kits de inicio accesibles y puedes comenzar con un catálogo digital. Te explico todo en detalle cuando nos contactemos."
    },
    {
      pregunta: "¿Por qué solo consultoras de La Victoria?",
      respuesta: "Como líder del sector La Victoria, puedo brindarte mejor apoyo, capacitación presencial y formar parte activa de nuestro equipo local. Así garantizo tu éxito."
    },
    {
      pregunta: "¿Cuánto tiempo debo dedicar?",
      respuesta: "Tú decides tu horario. Puedes dedicar desde 2-3 horas diarias hasta tiempo completo. La flexibilidad es una de las mejores ventajas de este negocio."
    },
    {
      pregunta: "¿Qué gano al comprar en tu tienda online?",
      respuesta: "Al comprar con mi link, me apoyas directamente con comisiones. Además, recibes asesoría personalizada y productos originales Ésika con garantía."
    },
    {
      pregunta: "¿Puedo trabajar desde casa?",
      respuesta: "¡Por supuesto! Muchas consultoras trabajan 100% desde casa, vendiendo por redes sociales, WhatsApp y con el catálogo digital de Ésika."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Líder Ésika - La Victoria
                </span>
              </div>
              <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                Hola, mi nombre es <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Carmen Moscoso</span>
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed">
                Soy líder en la empresa de cosmética Ésika en el sector de La Victoria. Con más de 6 años de experiencia, ayudo a mujeres a descubrir su belleza, alcanzar sus metas y emprender su propio negocio.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a 
                  href="https://wa.me/51XXXXXXXXX?text=Hola%20Carmen,%20soy%20de%20La%20Victoria%20y%20quiero%20ser%20consultora%20Ésika" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all transform hover:scale-105 text-center flex items-center justify-center gap-2"
                >
                  <MapPin size={20} />
                  Quiero ser Consultora (La Victoria)
                </a>
                <a 
                  href="https://esika.tiendabelcorp.com.pe/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-pink-600 text-pink-600 px-8 py-3 rounded-full font-semibold hover:bg-pink-50 transition-all text-center flex items-center justify-center gap-2"
                >
                  <ShoppingBag size={20} />
                  Comprar Online
                </a>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                💝 Al comprar en mi tienda online me apoyas directamente
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-purple-400 rounded-3xl transform rotate-6"></div>
              <div className="relative bg-gradient-to-br from-pink-500 to-purple-500 rounded-3xl p-1">
                <div className="bg-white rounded-3xl p-8 text-center">
                  <div className="w-48 h-48 mx-auto bg-gradient-to-br from-pink-200 to-purple-200 rounded-full flex items-center justify-center">
                    <Users size={80} className="text-pink-600" />
                  </div>
                  <p className="mt-6 text-gray-600 font-medium">Líder Ésika</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre mí */}
      <section id="sobre-mi" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Sobre mí
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-600 to-purple-600 mx-auto mb-12"></div>
          
          {/* Estadísticas */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-600 mb-2">6+</div>
              <p className="text-gray-600">Años de Experiencia</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-600 mb-2">50+</div>
              <p className="text-gray-600">Consultoras Activas</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-600 mb-2">1000+</div>
              <p className="text-gray-600">Productos Vendidos</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-600 mb-2">100%</div>
              <p className="text-gray-600">Compromiso</p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-8 rounded-2xl hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center mb-4">
                <Award size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">+6 Años de Experiencia</h3>
              <p className="text-gray-600">
                Construyendo relaciones duraderas y ayudando a mujeres a alcanzar sus sueños en el mundo de la belleza.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-8 rounded-2xl hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center mb-4">
                <Users size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Empoderamiento Femenino</h3>
              <p className="text-gray-600">
                Ayudo a mujeres a descubrir su belleza interior y exterior, desarrollando su confianza y potencial.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-8 rounded-2xl hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center mb-4">
                <ShoppingBag size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Oportunidad de Negocio</h3>
              <p className="text-gray-600">
                Te acompaño en cada paso para que empieces tu propio emprendimiento con Ésika y logres independencia financiera.
              </p>
            </div>
          </div>

          <div className="mt-16 bg-gradient-to-r from-pink-600 to-purple-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Mi Misión</h3>
            <p className="text-lg leading-relaxed">
              Mi pasión es ayudar a mujeres emprendedoras a construir sus propios negocios mientras descubren productos de belleza de calidad. Creo firmemente en el poder transformador de la confianza y la independencia económica. Con Ésika, no solo vendemos cosméticos, sino que creamos oportunidades de crecimiento personal y profesional.
            </p>
          </div>
        </div>
      </section>

      {/* Únete al Equipo */}
      <section id="unete-equipo" className="py-20 px-6 bg-gradient-to-br from-pink-100 via-purple-100 to-pink-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
            ¿Por qué unirte a mi equipo? 🌟
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-600 to-purple-600 mx-auto mb-8"></div>
          
          <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-3xl p-8 mb-12 text-center">
            <MapPin size={48} className="mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-4">📍 Solo busco consultoras de La Victoria</h3>
            <p className="text-xl text-pink-50">
              Necesito que seas del distrito de La Victoria para brindarte mejor capacitación, apoyo presencial y ser parte activa de nuestro equipo local
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <TrendingUp size={40} className="text-pink-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Gana Dinero Extra</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-pink-600 font-bold">✓</span>
                  <span>Comisiones desde el primer día</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-600 font-bold">✓</span>
                  <span>Bonos por desempeño mensuales</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-600 font-bold">✓</span>
                  <span>Promociones y ofertas exclusivas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-600 font-bold">✓</span>
                  <span>Tú decides cuánto ganar</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <Clock size={40} className="text-purple-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Flexibilidad Total</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold">✓</span>
                  <span>Trabaja desde casa</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold">✓</span>
                  <span>Elige tus propios horarios</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold">✓</span>
                  <span>Compatibiliza con otras actividades</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold">✓</span>
                  <span>Sin jefes, tú eres tu propia jefa</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <Gift size={40} className="text-pink-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Beneficios Exclusivos</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-pink-600 font-bold">✓</span>
                  <span>Viajes de incentivo nacionales e internacionales</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-600 font-bold">✓</span>
                  <span>Regalos y premios por metas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-600 font-bold">✓</span>
                  <span>Descuentos especiales en productos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-600 font-bold">✓</span>
                  <span>Reconocimientos y ascensos</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <Award size={40} className="text-purple-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Capacitación Continua</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold">✓</span>
                  <span>Talleres de ventas y liderazgo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold">✓</span>
                  <span>Asesoría personalizada de mi parte</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold">✓</span>
                  <span>Material digital y catálogos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold">✓</span>
                  <span>Grupo de apoyo con el equipo</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Testimonios */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-center mb-8 text-gray-900">
              Lo que dicen mis consultoras 💬
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonios.map((testimonio, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-4">"{testimonio.texto}"</p>
                  <div>
                    <p className="font-bold text-gray-900">{testimonio.nombre}</p>
                    <p className="text-sm text-pink-600">{testimonio.rol}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 text-center shadow-xl">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              ¿Lista para comenzar tu negocio? 🚀
            </h3>
            <p className="text-xl text-gray-700 mb-6">
              Si eres de La Victoria y quieres emprender, contáctame ahora y agenda una reunión informativa sin compromiso
            </p>
            <a 
              href="https://wa.me/51XXXXXXXXX?text=Hola%20Carmen,%20soy%20de%20La%20Victoria%20y%20quiero%20información%20para%20ser%20consultora%20Ésika" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 to-purple-600 text-white px-12 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              <MessageCircle size={24} />
              Quiero ser parte del equipo
            </a>
          </div>
        </div>
      </section>

      {/* Mi Tienda Online */}
      <section id="mi-tienda-online" className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Mi Tienda Online
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-600 to-purple-600 mx-auto mb-8"></div>
          
          <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
            Descubre los mejores productos de belleza de Ésika. Maquillaje, skincare, fragancias y más para realzar tu belleza natural.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="text-5xl mb-4">💄</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Maquillaje</h3>
              <p className="text-gray-600">Labiales, bases, sombras y más para crear tu look perfecto</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="text-5xl mb-4">✨</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Skincare</h3>
              <p className="text-gray-600">Productos para el cuidado de la piel que realzan tu belleza natural</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="text-5xl mb-4">🌸</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fragancias</h3>
              <p className="text-gray-600">Perfumes exclusivos que complementan tu personalidad</p>
            </div>
          </div>

          <a 
            href="https://esika.tiendabelcorp.com.pe/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-pink-600 to-purple-600 text-white px-12 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all transform hover:scale-105"
          >
            Visitar mi Tienda Ésika
          </a>
        </div>
      </section>

      {/* Galería */}
      <section id="galeria" className="py-20 px-6 bg-gradient-to-br from-purple-50 via-pink-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Galería de Experiencias 📸
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-600 to-purple-600 mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-pink-300 to-purple-300 rounded-2xl h-64 flex items-center justify-center text-white shadow-lg">
              <div className="text-center">
                <Camera size={48} className="mx-auto mb-2" />
                <p className="font-semibold">Conferencias Belcorp</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-300 to-pink-300 rounded-2xl h-64 flex items-center justify-center text-white shadow-lg">
              <div className="text-center">
                <Award size={48} className="mx-auto mb-2" />
                <p className="font-semibold">Premios y Reconocimientos</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-pink-400 to-purple-400 rounded-2xl h-64 flex items-center justify-center text-white shadow-lg">
              <div className="text-center">
                <Users size={48} className="mx-auto mb-2" />
                <p className="font-semibold">Reuniones de Equipo</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl h-64 flex items-center justify-center text-white shadow-lg">
              <div className="text-center">
                <Gift size={48} className="mx-auto mb-2" />
                <p className="font-semibold">Regalos e Incentivos</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-pink-300 to-purple-400 rounded-2xl h-64 flex items-center justify-center text-white shadow-lg">
              <div className="text-center">
                <Star size={48} className="mx-auto mb-2" />
                <p className="font-semibold">Viajes de Incentivo</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-300 to-pink-400 rounded-2xl h-64 flex items-center justify-center text-white shadow-lg">
              <div className="text-center">
                <TrendingUp size={48} className="mx-auto mb-2" />
                <p className="font-semibold">Capacitaciones</p>
              </div>
            </div>
          </div>

          <p className="text-center text-gray-600 italic">
            💡 Estas son solo algunas de las experiencias que vivirás al ser parte de mi equipo Ésika
          </p>
        </div>
      </section>

      {/* Preguntas Frecuentes */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Preguntas Frecuentes ❓
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-600 to-purple-600 mx-auto mb-12"></div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-white/50 transition-colors"
                >
                  <span className="font-bold text-gray-900 text-lg pr-4">{faq.pregunta}</span>
                  <HelpCircle 
                    size={24} 
                    className={`text-pink-600 flex-shrink-0 transition-transform ${openFaq === index ? 'rotate-180' : ''}`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-700">{faq.respuesta}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}