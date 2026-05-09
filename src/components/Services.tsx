import { motion } from 'framer-motion';
import { Zap, Film, Music, Sparkles, Scissors, TrendingUp } from 'lucide-react';

const services = [
  {
    icon: Film,
    title: 'Edição YouTube',
    description: 'Edição profissional para vídeos longos com pacing perfeito e storytelling envolvente.',
  },
  {
    icon: Scissors,
    title: 'Shorts & Reels',
    description: 'Conteúdo vertical otimizado para TikTok, Instagram Reels e YouTube Shorts.',
  },
  {
    icon: Zap,
    title: 'Cortes Dinâmicos',
    description: 'Transições rápidas, zoom e cortes que mantêm o espectador engajado.',
  },
  {
    icon: Music,
    title: 'Sincronização de Áudio',
    description: 'Áudio sincronizado perfeitamente com visuais para máximo impacto.',
  },
  {
    icon: Sparkles,
    title: 'Efeitos Virais',
    description: 'Efeitos especiais e transições que fazem seu vídeo viralizar.',
  },
  {
    icon: TrendingUp,
    title: 'Otimização',
    description: 'Otimização para algoritmos e máxima retenção de espectadores.',
  },
];

export default function Services() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            O Que Eu <span className="neon-purple">Faço</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Serviços completos de edição de vídeo para criadores de conteúdo
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="card-dark group"
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:from-cyan-500/40 group-hover:to-purple-500/40 transition-all duration-300">
                  <Icon className="w-7 h-7 text-cyan-400" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Animated border */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 origin-left"
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
