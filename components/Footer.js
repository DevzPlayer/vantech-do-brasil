import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 py-4">
      <div className="container mx-auto text-center">
        {/* Informações de contato */}
        <div className="text-sm mb-4">
          <p className="mb-1">Vantech do Brasil - Todos os direitos reservados</p>
          <p className="mb-2">Avenida Creta, 12, Nova Cidade, Manaus - AM</p>
          <p className="mb-2">Cep: 69097438</p>
        </div>

        {/* Links */}
        <div className="text-sm mb-4">
          <a href="#" className="mx-2 hover:text-red-600 transition duration-300">Privacidade</a>
          <a href="#" className="mx-2 hover:text-red-600 transition duration-300">Termos</a>
          <a href="#" className="mx-2 hover:text-red-600 transition duration-300">Sobre</a>
        </div>

        {/* Contato via WhatsApp */}
        <div className="flex justify-center items-center text-sm mb-4">
          <FaWhatsapp className="text-green-500 text-lg mr-2" />
          <a
            href="https://wa.me/559292925200"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:text-green-800 transition duration-300"
          >
            +55 92 9292-5200
          </a>
        </div>

        {/* Créditos */}
        <div className="text-xs text-gray-500">
          <p>
            Site criado por{" "}
            <a href="mailto:matheussilva7m@gmail.com" className="text-red-600 hover:text-red-800">
              Matheus Silva
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
