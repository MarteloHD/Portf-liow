import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

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
          className="mb-12 md:mb-16 text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4">
            VAMOS CONVERSAR
          </h2>
          <div className="w-16 md:w-24 h-1 bg-blue-500 mx-auto" />
          <p className="text-gray-600 text-sm sm:text-base md:text-lg mt-4 md:mt-6 max-w-2xl mx-auto">
            Tem um projeto em mente? Gostaria de colaborar? Entre em contato e vamos criar algo incrível juntos.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
        >
          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-6 md:space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <Mail className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-black mb-1 md:mb-2">Email</h3>
                <p className="text-gray-600 text-sm md:text-base">seu.email@exemplo.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <Phone className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-black mb-1 md:mb-2">Telefone</h3>
                <p className="text-gray-600 text-sm md:text-base">(XX) XXXXX-XXXX</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <MapPin className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-black mb-1 md:mb-2">Localização</h3>
                <p className="text-gray-600 text-sm md:text-base">Sua cidade, Estado</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-4 md:pt-8">
              <h3 className="text-lg md:text-xl font-bold text-black mb-4">Redes Sociais</h3>
              <div className="flex gap-3 md:gap-4">
                {['Instagram', 'LinkedIn', 'YouTube'].map((social) => (
                  <motion.a
                    key={social}
                    href="#"
                    whileHover={{ scale: 1.1 }}
                    className="w-10 h-10 md:w-12 md:h-12 bg-black text-white rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors text-xs md:text-sm font-semibold"
                  >
                    {social.charAt(0)}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            variants={itemVariants}
            onSubmit={handleSubmit}
            className="space-y-4 md:space-y-6"
          >
            <div>
              <label className="block text-xs md:text-sm font-semibold text-black mb-2">
                Nome
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 md:py-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors text-sm md:text-base"
                placeholder="Seu nome"
              />
            </div>

            <div>
              <label className="block text-xs md:text-sm font-semibold text-black mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 md:py-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors text-sm md:text-base"
                placeholder="seu.email@exemplo.com"
              />
            </div>

            <div>
              <label className="block text-xs md:text-sm font-semibold text-black mb-2">
                Mensagem
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 md:py-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors resize-none text-sm md:text-base"
                placeholder="Conte-me sobre seu projeto..."
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-6 md:px-8 py-3 md:py-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 text-sm md:text-base"
            >
              <Send className="w-4 h-4 md:w-5 md:h-5" />
              Enviar Mensagem
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
