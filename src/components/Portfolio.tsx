import { motion } from 'framer-motion';
import { Play, Zap } from 'lucide-react';
import { useState } from 'react';

interface Video {
  id: number;
  title: string;
  category: string;
  thumbnail: string;
  duration: string;
}

const videoLongos: Video[] = [
  {
    id: 1,
    title: 'Análise de Anime Épica',
    category: 'YouTube',
    thumbnail: 'https://images.unsplash.com/photo-1535016120754-fd58615602f0?w=500&h=300&fit=crop',
    duration: '15:42',
  },
  {
    id: 2,
    title: 'Tutorial de Edição Avançada',
    category: 'YouTube',
    thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f70504504?w=500&h=300&fit=crop',
    duration: '22:18',
  },
  {
    id: 3,
    title: 'Documentário Minimalista',
    category: 'YouTube',
    thumbnail: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=500&h=300&fit=crop',
    duration: '18:05',
  },
];

const videoCurtos: Video[] = [
  {
    id: 4,
    title: 'Trend Viral #1',
    category: 'TikTok/Reels',
    thumbnail: 'https://images.unsplash.com/photo-1611339555312-e607c90352fd?w=300&h=500&fit=crop',
    duration: '0:45',
  },
  {
    id: 5,
    title: 'Meme Editado',
    category: 'Shorts',
    thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f70504504?w=300&h=500&fit=crop',
    duration: '0:30',
  },
  {
    id: 6,
    title: 'Transição Smooth',
    category: 'TikTok',
    thumbnail: 'https://images.unsplash.com/photo-1535016120754-fd58615602f0?w=300&h=500&fit=crop',
    duration: '0:15',
  },
];

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<'long' | 'short'>('long');

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

  const videos = activeTab === 'long' ? videoLongos : videoCurtos;

  return (
    <section className="py-20 px-4 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Meu <span className="neon-blue">Portfólio</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Confira alguns dos meus trabalhos mais recentes em edição de vídeo
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex justify-center gap-4 mb-12"
        >
          <button
            onClick={() => setActiveTab('long')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeTab === 'long'
                ? 'btn-neon'
                : 'bg-gray-900 text-gray-300 hover:text-white'
            }`}
          >
            Vídeos Longos
          </button>
          <button
            onClick={() => setActiveTab('short')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeTab === 'short'
                ? 'btn-neon'
                : 'bg-gray-900 text-gray-300 hover:text-white'
            }`}
          >
            Vídeos Curtos
          </button>
        </motion.div>

        {/* Videos Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className={`grid gap-6 ${
            activeTab === 'long'
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
              : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
          }`}
        >
          {videos.map((video) => (
            <motion.div
              key={video.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="group relative overflow-hidden rounded-xl cursor-pointer"
            >
              {/* Thumbnail */}
              <div className="relative overflow-hidden bg-gray-900 aspect-video md:aspect-square">
                <img
                  src={video.thumbnail}
                  alt={video.title}
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
                  <div className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                    <Play className="w-6 h-6 text-white fill-white ml-1" />
                  </div>
                </motion.div>

                {/* Duration */}
                <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded text-xs font-semibold text-white">
                  {video.duration}
                </div>

                {/* Category Badge */}
                <div className="absolute top-2 left-2 bg-cyan-500/80 px-3 py-1 rounded-full text-xs font-semibold text-black">
                  {video.category}
                </div>
              </div>

              {/* Title */}
              <div className="p-4 bg-gradient-to-b from-gray-900 to-black">
                <h3 className="font-semibold text-white group-hover:text-cyan-400 transition-colors">
                  {video.title}
                </h3>
              </div>

              {/* Hover border animation */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 origin-left"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
