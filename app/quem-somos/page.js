'use client';

import { FaBuilding, FaUsers, FaChartLine, FaAward, FaMapMarkerAlt } from 'react-icons/fa'; // Ícones da biblioteca react-icons
import { motion } from 'framer-motion';

export default function QuemSomos() {
  // Variantes de animação
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="bg-gray-100 py-12 md:py-20">
      <div className="container mx-auto px-4">
        {/* Título Principal */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold text-red-900 mb-4">Quem Somos</h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            Somos uma empresa de engenharia civil com mais de uma década de experiência especializada na construção e manutenção de torres de telecomunicações. Recentemente, expandimos para obras e reformas condominiais.
          </p>
        </motion.div>

        {/* Cards de Destaque */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Card 1: Experiência */}
          <motion.div
            className="bg-white p-6 md:p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
            variants={itemVariants}
          >
            <FaBuilding className="text-red-900 text-4xl md:text-5xl mx-auto mb-4" />
            <h2 className="text-xl md:text-2xl font-bold text-red-900 mb-4">Experiência</h2>
            <p className="text-gray-700 text-sm md:text-base">
              Mais de 10 anos de atuação no mercado, entregando projetos de alta qualidade.
            </p>
          </motion.div>

          {/* Card 2: Equipe */}
          <motion.div
            className="bg-white p-6 md:p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
            variants={itemVariants}
          >
            <FaUsers className="text-red-900 text-4xl md:text-5xl mx-auto mb-4" />
            <h2 className="text-xl md:text-2xl font-bold text-red-900 mb-4">Equipe</h2>
            <p className="text-gray-700 text-sm md:text-base">
              Profissionais altamente qualificados e comprometidos com a excelência.
            </p>
          </motion.div>

          {/* Card 3: Crescimento */}
          <motion.div
            className="bg-white p-6 md:p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
            variants={itemVariants}
          >
            <FaChartLine className="text-red-900 text-4xl md:text-5xl mx-auto mb-4" />
            <h2 className="text-xl md:text-2xl font-bold text-red-900 mb-4">Crescimento</h2>
            <p className="text-gray-700 text-sm md:text-base">
              Expansão contínua e reconhecimento no setor de telecomunicações.
            </p>
          </motion.div>

          {/* Card 4: Reconhecimento */}
          <motion.div
            className="bg-white p-6 md:p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
            variants={itemVariants}
          >
            <FaAward className="text-red-900 text-4xl md:text-5xl mx-auto mb-4" />
            <h2 className="text-xl md:text-2xl font-bold text-red-900 mb-4">Reconhecimento</h2>
            <p className="text-gray-700 text-sm md:text-base">
              Premiada por inovação e qualidade em nossos projetos.
            </p>
          </motion.div>
        </motion.div>

        {/* Seção de Missão, Visão e Valores */}
        <motion.div
          className="mt-16 md:mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-red-900 text-center mb-8">Nossa Cultura</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Missão */}
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl md:text-2xl font-bold text-red-900 mb-4">Missão</h3>
              <p className="text-gray-700 text-sm md:text-base">
                Ser ágil, competitiva e inovadora, fornecendo soluções de alto valor para nossos clientes.
              </p>
            </div>

            {/* Visão */}
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl md:text-2xl font-bold text-red-900 mb-4">Visão</h3>
              <p className="text-gray-700 text-sm md:text-base">
                Ser reconhecida como referência em soluções de infraestrutura, ampliando nossa atuação de forma lucrativa e sustentável.
              </p>
            </div>

            {/* Valores */}
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl md:text-2xl font-bold text-red-900 mb-4">Valores</h3>
              <p className="text-gray-700 text-sm md:text-base">
                Qualidade, dinamismo e confiabilidade em todas as nossas ações.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Seção de Localização */}
        <motion.div
          className="mt-16 md:mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-red-900 text-center mb-8">Onde Atuamos</h2>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {/* Localizações */}
            <div className="text-center w-full sm:w-1/2 lg:w-1/5">
              <FaMapMarkerAlt className="text-red-900 text-4xl md:text-5xl mb-4 mx-auto" />
              <h3 className="text-xl md:text-2xl font-bold text-red-900">Norte</h3>
              <p className="text-gray-700 text-sm md:text-base">Belém (PA), Macapá (AP), Manaus (AM), Porto Velho (RO), Acre (AC)</p>
            </div>

            <div className="text-center w-full sm:w-1/2 lg:w-1/5">
              <FaMapMarkerAlt className="text-red-900 text-4xl md:text-5xl mb-4 mx-auto" />
              <h3 className="text-xl md:text-2xl font-bold text-red-900">Nordeste</h3>
              <p className="text-gray-700 text-sm md:text-base">São Luiz, Teresina (MA), Fortaleza (CE), Natal (RN), João Pessoa (PB), Recife (PE), Salvador (BA)</p>
            </div>

            <div className="text-center w-full sm:w-1/2 lg:w-1/5">
              <FaMapMarkerAlt className="text-red-900 text-4xl md:text-5xl mb-4 mx-auto" />
              <h3 className="text-xl md:text-2xl font-bold text-red-900">Centro-Oeste</h3>
              <p className="text-gray-700 text-sm md:text-base">Cuiabá (MT), Brasília (DF), Campo Grande (MS)</p>
            </div>

            <div className="text-center w-full sm:w-1/2 lg:w-1/5">
              <FaMapMarkerAlt className="text-red-900 text-4xl md:text-5xl mb-4 mx-auto" />
              <h3 className="text-xl md:text-2xl font-bold text-red-900">Sudeste</h3>
              <p className="text-gray-700 text-sm md:text-base">Belo Horizonte (MG), Vitória (ES), Rio de Janeiro (RJ), São Paulo (SP)</p>
            </div>

            <div className="text-center w-full sm:w-1/2 lg:w-1/5">
              <FaMapMarkerAlt className="text-red-900 text-4xl md:text-5xl mb-4 mx-auto" />
              <h3 className="text-xl md:text-2xl font-bold text-red-900">Sul</h3>
              <p className="text-gray-700 text-sm md:text-base">Curitiba (PR), Florianópolis (SC), Porto Alegre (RS)</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}