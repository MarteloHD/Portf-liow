import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Play } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Projeto Placeholder 1',
    category: 'Edição Longa',
    description: 'Descrição do seu projeto será adicionada aqui',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663507282128/F8JjswrpStKyxsGCgRfHnj/abstract-video-waves-EmZ8dGqRSEaVFQE2yGe4vA.webp',
  },
  {
    id: 2,
    title: 'Projeto Placeholder 2',
    category: 'Motion Graphics',
    description: 'Descrição do seu projeto será adicionada aqui',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663507282128/F8JjswrpStKyxsGCgRfHnj/editing-workspace-MM3kHZmzgVbBV2cMSdDrtn.webp',
  },
  {
    id: 3,
    title: 'Projeto Placeholder 3',
    category: 'Vídeo Curto',
    description: 'Descrição do seu projeto será adicionada aqui',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663507282128/F8JjswrpStKyxsGCgRfHnj/motion-graphics-abstract-3AScRpD5yJ2V8qQCT6dVej.webp',
  },
  {
    id: 4,
    title: 'Projeto Placeholder 4',
    category: 'Edição Longa',
    description: 'Descrição do seu projeto será adicionada aqui',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663507282128/F8JjswrpStKyxsGCgRfHnj/hero-cinema-dark-LHu6n2ms9F5RJd4cHuMT7C.webp',
  },
];

export default function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section ref={ref} className="min-h-screen bg-white py-8 md:py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4">
            PROJETOS
          </h2>
          <div className="w-16 md:w-24 h-1 bg-blue-500" />
          <p className="text-gray-600 text-sm sm:text-base md:text-lg mt-4 md:mt-6 max-w-2xl">
            Explore uma seleção dos meus trabalhos mais recentes em edição de vídeo, motion graphics e storytelling visual.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-lg bg-black"
            >
              {/* Image Container */}
              <div className="relative h-48 sm:h-64 md:h-80 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300" />

                {/* Play Button */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                    <Play className="w-5 h-5 md:w-8 md:h-8 text-white fill-white" />
                  </div>
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-4 md:p-6 bg-black">
                <p className="text-blue-400 text-xs md:text-sm font-mono mb-2">{project.category}</p>
                <h3 className="text-lg md:text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-xs md:text-sm">{project.description}</p>

                {/* Hover Border */}
                <motion.div
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 h-1 bg-blue-500"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
