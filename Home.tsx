import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Divider from '@/components/Divider';

/**
 * Design Philosophy: Minimalismo Cinemático com Contraste Alto
 * - Preto profundo (#0a0a0a) e branco puro (#ffffff) com acentos em azul elétrico (#0066ff)
 * - Seções alternadas entre fundo preto e branco para máximo contraste
 * - Animações suaves e intencionais com scroll-triggered effects
 * - Tipografia hierárquica: Poppins para títulos, Inter para corpo
 * - Espaço negativo generoso e elementos flutuantes
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <Divider height={180} fromColor="#0a0a0a" toColor="#ffffff" animationType="gradient-shift" />
      <Projects />
      <Divider height={180} fromColor="#ffffff" toColor="#0a0a0a" animationType="particles" />
      <Skills />
      <Divider height={180} fromColor="#0a0a0a" toColor="#ffffff" animationType="wave" />
      <Contact />
      <Footer />
    </div>
  );
}
