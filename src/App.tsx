import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-black min-h-screen">
      <Hero />
      <Portfolio />
      <Services />
      <CTA />
      <Footer />
    </div>
  );
}
