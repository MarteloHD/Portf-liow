import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="relative min-h-screen w-full bg-black overflow-hidden flex items-center justify-center py-12 md:py-0">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30 md:opacity-40"
        style={{
          backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663507282128/F8JjswrpStKyxsGCgRfHnj/hero-cinema-dark-LHu6n2ms9F5RJd4cHuMT7C.webp)',
          backgroundPosition: 'center',
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/70 to-black/85 md:from-black/80 md:via-black/60 md:to-black/80" />

      {/* Content */}
      <motion.div
        className="relative z-10 container mx-auto px-4 text-center w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Title */}
        <motion.div variants={itemVariants} className="mb-4 md:mb-6">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-2 md:mb-4 tracking-tight leading-tight">
            STORYTELLING
          </h1>
          <p className="text-base sm:text-lg md:text-2xl text-blue-400 font-mono tracking-widest">
            THROUGH EDITING
          </p>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto mb-6 md:mb-8 leading-relaxed px-2"
        >
          Transformo visões em narrativas visuais impactantes. Edição de vídeo profissional,
          motion graphics e storytelling cinematográfico.
        </motion.p>

        {/* CTA Button */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-2">
          <button className="px-6 md:px-8 py-2 md:py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors duration-300 transform hover:scale-105 text-sm md:text-base w-full sm:w-auto">
            Ver Portfólio
          </button>
          <button className="px-6 md:px-8 py-2 md:py-3 border-2 border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500/10 transition-all duration-300 text-sm md:text-base w-full sm:w-auto">
            Entrar em Contato
          </button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          <ChevronDown className="w-6 h-6 md:w-8 md:h-8 text-blue-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
