import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-800 py-6 md:py-10 px-4">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8"
        >
          {/* Brand */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">PORTFÓLIO</h3>
            <p className="text-gray-400 text-sm md:text-base">Edição de vídeo e storytelling cinematográfico</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-3 md:mb-4 text-sm md:text-base">Links Rápidos</h4>
            <ul className="space-y-2">
              {['Projetos', 'Habilidades', 'Contato'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm md:text-base">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-3 md:mb-4 text-sm md:text-base">Contato</h4>
            <p className="text-gray-400 mb-2 text-sm md:text-base">Email: seu.email@exemplo.com</p>
            <p className="text-gray-400 text-sm md:text-base">(XX) XXXXX-XXXX</p>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-6 md:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center text-gray-400 text-xs md:text-sm gap-4">
            <p>&copy; {currentYear} Seu Nome. Todos os direitos reservados.</p>
            <div className="flex gap-4 md:gap-6">
              <a href="#" className="hover:text-blue-400 transition-colors">
                Privacidade
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Termos
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
