'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaUsers, FaImages, FaEnvelope } from 'react-icons/fa'; // Ícones da biblioteca react-icons

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 ${scrolled ? 'bg-red-600 shadow-lg' : 'bg-transparent'} transition-all duration-300`}>
      <div className="container mx-auto flex justify-between items-center px-4 py-4">
        {/* Logo Substituído pelo SVG */}
        <img src="/torre2.svg" alt="Logo Torre1" className="w-24 h-auto" />

        {/* Menu Desktop */}
        <nav className="hidden md:flex space-x-6">
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="text-white hover:text-red-300 text-lg font-medium transition-colors flex items-center space-x-2">
                <FaHome className="text-white" />
                <span>Página Inicial</span>
              </Link>
            </li>
            <li>
              <Link href="/quem-somos" className="text-white hover:text-red-300 text-lg font-medium transition-colors flex items-center space-x-2">
                <FaUsers className="text-white" />
                <span>Quem Somos</span>
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="text-white hover:text-red-300 text-lg font-medium transition-colors flex items-center space-x-2">
                <FaImages className="text-white" />
                <span>Portfólio</span>
              </Link>
            </li>
            <li>
              <Link href="/contato" className="text-white hover:text-red-300 text-lg font-medium transition-colors flex items-center space-x-2">
                <FaEnvelope className="text-white" />
                <span>Contato</span>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Menu Mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleDrawer}
            className="text-white focus:outline-none"
          >
            {/* Ícone de Menu Moderno */}
            <motion.div
              className="w-6 h-6 flex flex-col justify-between"
              animate={isDrawerOpen ? 'open' : 'closed'}
            >
              <motion.span
                className="w-full h-1 bg-white rounded"
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: 7 },
                }}
              />
              <motion.span
                className="w-full h-1 bg-white rounded"
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 },
                }}
              />
              <motion.span
                className="w-full h-1 bg-white rounded"
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: -45, y: -7 },
                }}
              />
            </motion.div>
          </button>

          {/* Drawer Menu com Animações */}
          <AnimatePresence>
            {isDrawerOpen && (
              <motion.div
                className="fixed inset-0 bg-black/50 flex justify-end items-start z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="bg-red-900 w-2/3 h-full p-6 flex flex-col justify-between"
                  initial={{ x: '100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '100%' }}
                  transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                >
                  <button
                    onClick={toggleDrawer}
                    className="text-white text-3xl mb-8 hover:text-red-300 transition-colors"
                  >
                    ×
                  </button>
                  <ul className="space-y-6">
                    <li className="flex items-center space-x-3">
                      <FaHome className="text-white text-xl" />
                      <Link href="/" className="text-white text-lg font-medium hover:text-red-300 transition-colors" onClick={toggleDrawer}>
                        Página Inicial
                      </Link>
                    </li>
                    <li className="flex items-center space-x-3">
                      <FaUsers className="text-white text-xl" />
                      <Link href="/quem-somos" className="text-white text-lg font-medium hover:text-red-300 transition-colors" onClick={toggleDrawer}>
                        Quem Somos
                      </Link>
                    </li>
                    <li className="flex items-center space-x-3">
                      <FaImages className="text-white text-xl" />
                      <Link href="/portfolio" className="text-white text-lg font-medium hover:text-red-300 transition-colors" onClick={toggleDrawer}>
                        Portfólio
                      </Link>
                    </li>
                    <li className="flex items-center space-x-3">
                      <FaEnvelope className="text-white text-xl" />
                      <Link href="/contato" className="text-white text-lg font-medium hover:text-red-300 transition-colors" onClick={toggleDrawer}>
                        Contato
                      </Link>
                    </li>
                  </ul>

                  {/* Logo da Vantech */}
                  <div className="mt-auto">
                    <img src="/torre2.svg" alt="Logo Vantech" className="w-24 h-auto mx-auto" />
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}