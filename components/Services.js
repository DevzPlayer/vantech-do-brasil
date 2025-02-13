'use client'; // Adicione essa linha se estiver usando Next.js com App Router

import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Services() {
  const services = [
    { title: 'Aquisição de Sites', description: 'Identificação e aquisição estratégica de locais.', image: '/mapa-bussola.jpg' },
    { title: 'Vistorias Especializadas', description: 'TSSR e SCI, Pré-Comar e Comar definitivo.', image: '/img2.jpg' },
    { title: 'Infraestrutura Completa', description: 'Obras civis elétricas, Alta e baixa tensão, Aterramento.', image: '/img3.jpg' },
    { title: 'Verticalidades', description: 'Construção e instalação.', image: '/img4.jpeg' },
    { title: 'Preventiva e Zeladoria', description: 'Manutenção programada, Relatórios fotográficos, Vistoria de auditoria.', image: '/img5.jpg' },
    { title: 'Construção Civil', description: 'Fundação e estruturas verticais.', image: '/img6.jpeg' },
    { title: 'Instalações Especializadas', description: 'Torres, postes, antenas, Lançamento de cabos, ajustes de azimute.', image: '/img7.jpg' },
    { title: 'Redes de Energia Elétrica', description: 'Construção de estações, Distribuição de energia elétrica.', image: '/img8.jpg' },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-5xl font-extrabold text-red-600 mb-16 tracking-wide"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
        >
          Nossos Serviços
        </motion.h2>

        <div className="bg-gray-200 p-6 rounded-3xl shadow-lg">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            className="py-6"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  className="bg-white p-8 rounded-xl shadow-xl transition-all duration-300 ease-in-out h-72 flex flex-col items-center justify-between border-2 border-gray-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1, transition: { duration: 0.6 } }}
                  whileHover={{ scale: 1.05 }}
                >
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-36 object-cover rounded-lg mb-4"
                  />

                  <motion.h3
                    className="text-lg font-bold text-gray-800 mb-2 uppercase tracking-wide"
                    whileHover={{ color: '#d32f2f' }}
                  >
                    {service.title}
                  </motion.h3>

                  <p className="text-sm text-gray-600 text-center max-w-[85%]">
                    {service.description}
                  </p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
