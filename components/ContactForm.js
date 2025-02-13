'use client';

import { useState } from 'react';
import emailjs from 'emailjs-com';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    // Dados para o envio do e-mail
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    try {
      // Envio do e-mail via EmailJS
      const response = await emailjs.send(
        'service_v6c8lrn',  // ID do seu serviço (substitua pelo seu Service ID)
        'template_4skx3u4',  // ID do seu template (substitua pelo seu Template ID)
        templateParams,
        '2dPUg5eGPtWLviXvM'  // Seu User ID (substitua pelo seu PUBLIC_KEY)
      );

      if (response.status === 200) {
        setSuccess('Mensagem enviada com sucesso!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSuccess('Erro ao enviar a mensagem.');
      }
    } catch (error) {
      setSuccess('Erro ao enviar a mensagem.');
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-8">
      <div className="flex flex-col md:flex-row gap-2 bg-white border-2 border-red-600 rounded-lg shadow-lg p-4 w-full sm:w-11/12 md:w-4/5 lg:w-2/3 xl:w-3/4">
        {/* Imagem */}
        <div className="hidden md:block w-5/12">
          <img src="/image1.svg" alt="Entre em contato" className="rounded-lg shadow-lg" width={280} />
        </div>

        {/* Formulário */}
        <div className="w-full md:w-7/12 p-2">
          <h2 className="text-red-600 text-2xl font-bold mb-4 text-center">Fale Conosco</h2>
          {success && <p className="text-center text-red-600 font-bold">{success}</p>}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block font-bold text-red-700">Nome</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Nome da Silva"
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none text-black bg-gray-100"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-bold text-red-700">E-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="email.seuemail.com"
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none text-black bg-gray-100"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block font-bold text-red-700">Mensagem</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Olá, preciso de ajuda..."
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:outline-none text-black bg-gray-100"
                rows="5"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-red-700 text-white font-bold px-4 py-2 rounded-lg hover:bg-red-800 transition duration-300"
              disabled={loading}
            >
              {loading ? 'Enviando...' : 'Enviar'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
