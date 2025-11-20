'use client'
import { motion } from 'framer-motion'

export default function Hero() {

  return (
    <section
      className="h-screen bg-cover bg-center flex items-center px-6"
      style={{ backgroundImage: "url('/assets/bg-hero.jpg')" }}
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="w-full md:w-8/12">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-white text-4xl md:text-5xl font-semibold text-left mb-6 mt-10 md:mt-20 leading-tight"
          >
            Transforme seu precatório em dinheiro de forma rápida, segura e justa
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-gray-300 text-lg md:text-2xl mb-6 leading-relaxed"
          >
            Com a INNOVAJUS, você avalia seu crédito judicial online, recebe
            proposta personalizada e assina contrato digitalmente
          </motion.p>

          <motion.a
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-[#249261] mt-10 text-white uppercase rounded-sm px-6 py-3 flex items-center justify-center gap-2 w-full md:w-7/12 hover:bg-green-700 transition-colors"
            href="https://wa.me/558431903795?text=Ol%C3%A1!%20Vi%20o%20site%20de%20voc%C3%AAs%20e%20quero%20saber%20como%20funciona%20a%20avalia%C3%A7%C3%A3o%20gratuita%20do%20meu%20precat%C3%B3rio."
            target="_blank"
            rel="noopener noreferrer"
          >
            INICIE SUA AVALIAÇÃO GRATUITA
          </motion.a>
        </div>
      </div>
    </section>


  );
}
