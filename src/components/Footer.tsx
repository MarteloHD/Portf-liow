import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-800 py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold neon-blue">Editor de Vídeo</h3>
            <p className="text-gray-500 text-sm">YouTube • TikTok • Reels • Shorts</p>
          </div>

          {/* Copyright */}
          <p className="text-gray-500 text-sm">
            © {currentYear} Todos os direitos reservados. Feito com ❤️ para criadores.
          </p>

          {/* Links */}
          <div className="flex gap-6">
            {['Privacidade', 'Termos', 'Contato'].map((link) => (
              <a
                key={link}
                href="#"
                className="text-gray-500 hover:text-cyan-400 transition-colors text-sm"
              >
                {link}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
