import { motion } from 'framer-motion';
import { MessageCircle, ExternalLink, Play } from 'lucide-react';

export default function CTA() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-20 px-4 bg-black relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 -z-10"
        animate={{
          background: [
            'radial-gradient(circle at 0% 0%, rgba(34, 211, 238, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 100% 100%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 0% 0%, rgba(34, 211, 238, 0.1) 0%, transparent 50%)',
          ],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Pronto para <span className="neon-blue">Elevar</span> Seu Conteúdo?
          </h2>
          <p className="text-gray-400 text-lg">
            Vamos transformar seus vídeos em conteúdo que engaja, converte e viraliza
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12"
        >
          {/* WhatsApp Button */}
          <motion.a
            variants={itemVariants}
            href="https://wa.me/55"
            target="_blank"
            rel="noopener noreferrer"
            className="card-dark flex items-center justify-center gap-3 py-6 hover:border-green-500/50 group"
          >
            <MessageCircle className="w-6 h-6 text-green-400 group-hover:animate-bounce" />
            <span className="font-semibold">WhatsApp</span>
          </motion.a>

          {/* Portfolio Button */}
          <motion.button
            variants={itemVariants}
            className="card-dark flex items-center justify-center gap-3 py-6 hover:border-cyan-500/50 group"
          >
            <Play className="w-6 h-6 text-cyan-400 group-hover:animate-bounce" />
            <span className="font-semibold">Ver Portfólio</span>
          </motion.button>

          {/* YouTube Button */}
          <motion.a
            variants={itemVariants}
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="card-dark flex items-center justify-center gap-3 py-6 hover:border-red-500/50 group"
          >
            <ExternalLink className="w-6 h-6 text-red-400 group-hover:animate-bounce" />
            <span className="font-semibold">YouTube</span>
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center gap-4"
        >
          {[
            { name: 'Instagram', url: '#', color: 'from-pink-500 to-purple-500' },
            { name: 'TikTok', url: '#', color: 'from-black to-gray-800' },
            { name: 'YouTube', url: '#', color: 'from-red-600 to-red-500' },
          ].map((social) => (
            <motion.a
              key={social.name}
              href={social.url}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`w-12 h-12 rounded-full bg-gradient-to-br ${social.color} flex items-center justify-center text-white font-bold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300`}
              title={social.name}
            >
              {social.name.charAt(0)}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
