import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Zap, Layers, Music, Palette } from 'lucide-react';

interface Skill {
  icon: React.ReactNode;
  title: string;
  description: string;
  tools: string[];
}

const skills: Skill[] = [
  {
    icon: <Zap className="w-6 h-6 md:w-8 md:h-8" />,
    title: 'Edição de Vídeo',
    description: 'Edição profissional de conteúdo longo e curto com técnicas cinematográficas.',
    tools: ['Placeholder 1', 'Placeholder 2', 'Placeholder 3'],
  },
  {
    icon: <Layers className="w-6 h-6 md:w-8 md:h-8" />,
    title: 'Motion Graphics',
    description: 'Criação de animações e efeitos visuais para engajar sua audiência.',
    tools: ['Placeholder 1', 'Placeholder 2', 'Placeholder 3'],
  },
  {
    icon: <Palette className="w-6 h-6 md:w-8 md:h-8" />,
    title: 'Color Grading',
    description: 'Correção e grading de cores para estabelecer o tom visual perfeito.',
    tools: ['Placeholder 1', 'Placeholder 2', 'Placeholder 3'],
  },
  {
    icon: <Music className="w-6 h-6 md:w-8 md:h-8" />,
    title: 'Sound Design',
    description: 'Design de áudio e sincronização perfeita com elementos visuais.',
    tools: ['Placeholder 1', 'Placeholder 2', 'Placeholder 3'],
  },
];

export default function Skills() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section ref={ref} className="min-h-screen bg-black py-8 md:py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            HABILIDADES
          </h2>
          <div className="w-16 md:w-24 h-1 bg-blue-500" />
          <p className="text-gray-400 text-sm sm:text-base md:text-lg mt-4 md:mt-6 max-w-2xl">
            Domino as principais ferramentas e técnicas da indústria de edição de vídeo.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0, 102, 255, 0.2)' }}
              className="p-6 md:p-8 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-lg hover:border-blue-500 transition-colors duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4 md:mb-6 text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                {skill.icon}
              </div>

              {/* Content */}
              <h3 className="text-lg md:text-2xl font-bold text-white mb-2 md:mb-3">{skill.title}</h3>
              <p className="text-gray-400 text-sm md:text-base mb-4 md:mb-6 leading-relaxed">{skill.description}</p>

              {/* Tools */}
              <div className="space-y-2">
                <p className="text-xs md:text-sm text-gray-500 uppercase tracking-widest">Ferramentas</p>
                <div className="flex flex-wrap gap-2">
                  {skill.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="px-2 md:px-3 py-1 bg-blue-500/10 text-blue-400 text-xs md:text-sm rounded border border-blue-500/30 font-mono"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
