import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

interface DividerProps {
  height?: number;
  fromColor?: string;
  toColor?: string;
  animationType?: 'wave' | 'gradient-shift' | 'particles';
}

export default function Divider({
  height = 150,
  fromColor = '#0a0a0a',
  toColor = '#ffffff',
  animationType = 'gradient-shift',
}: DividerProps) {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  const [key, setKey] = useState(0);

  useEffect(() => {
    if (inView) {
      setKey((prev) => prev + 1);
    }
  }, [inView]);

  const gradientVariants = {
    animate: {
      backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
      transition: {
        duration: 8,
        repeat: Infinity,
      },
    },
  };

  const waveVariants = {
    animate: {
      y: [0, -10, 0],
      opacity: [0.3, 1, 0.3],
      transition: {
        duration: 6,
        repeat: Infinity,
      },
    },
  };

  return (
    <div ref={ref} className="relative overflow-hidden w-full" style={{ height: `${height}px`, margin: 0, padding: 0 }}>
      {animationType === 'gradient-shift' && (
        <motion.div
          key={key}
          className="absolute inset-0 w-full h-full"
          style={{
            background: `linear-gradient(135deg, ${fromColor}, ${toColor}, ${fromColor})`,
            backgroundSize: '200% 200%',
            margin: 0,
            padding: 0,
          }}
          variants={gradientVariants}
          animate="animate"
        />
      )}

      {animationType === 'wave' && (
        <div className="absolute inset-0 bg-gradient-to-b from-black to-white w-full h-full" style={{ margin: 0, padding: 0 }}>
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            style={{ margin: 0, padding: 0 }}
          >
            <motion.path
              key={key}
              d="M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z"
              fill={toColor}
              variants={waveVariants}
              animate="animate"
            />
          </svg>
        </div>
      )}

      {animationType === 'particles' && (
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-white w-full h-full" style={{ margin: 0, padding: 0 }}>
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`${key}-${i}`}
              className="absolute w-0.5 h-0.5 md:w-1 md:h-1 bg-blue-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -height, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
