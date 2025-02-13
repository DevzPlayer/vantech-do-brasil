'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Vídeo de fundo local */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video
            className="absolute top-0 left-0 w-full h-full"
            autoPlay
            loop
            muted
            playsInline
            style={{ objectFit: "cover" }}
          >
            <source src="/torre.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Overlay escuro */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Conteúdo Hero */}
      <motion.div
        className="relative z-10 text-center text-white max-w-4xl px-4 sm:px-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1
          className="text-4xl md:text-7xl font-extrabold leading-tight sm:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Construindo o Futuro <br />
          <span className="text-red-500">da Conectividade</span>.
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl mt-4 opacity-80 sm:text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          Inovação, tecnologia e engenharia para um mundo mais conectado.
        </motion.p>

        <motion.button
          className="mt-6 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Saiba Mais
        </motion.button>
      </motion.div>
    </section>
  );
}
