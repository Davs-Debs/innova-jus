'use client'
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  const features = [
    { icon: "/assets/icons/shield-check.svg", alt: "Símbolo de segurança", text: "Plataforma 100% digital e segura" },
    { icon: "/assets/icons/scale.svg", alt: "Símbolo de justiça", text: "Proposta justa e transparente" },
    { icon: "/assets/icons/pen-line.svg", alt: "Assinatura", text: "Contratos digitais válidos legalmente" },
    { icon: "/assets/icons/messages-square.svg", alt: "Balões de dialogo", text: "Atendimento especializado" }
  ];

  return (
    <section id="sobre-nos" className="bg-[#1E3848] flex items-center px-6 py-10 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto w-full py-8">

   <motion.div
       initial={{ opacity: 0, x: -50 }}
       whileInView={{ opacity: 1, x: 0 }}
       viewport={{ once: true, margin: "-100px" }}
       transition={{ duration: 0.8 }}
       className="hidden lg:block relative w-full h-[400px]"
   >
  <Image
    src="/assets/image-about.jpg"
    alt="Balões de dialogo"
    fill
    className="object-cover rounded-md"
  />
</motion.div>
        <div className="flex flex-col justify-center">
          <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-white text-4xl md:text-5xl font-semibold  mb-6 text-center "
          >
            Sobre nós
          </motion.h1>
          <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-200 mb-6 leading-relaxed text-justify"
          >
            A INNOVAJUS é uma empresa especializada em investimentos em créditos judiciais, com foco na compra e
            negociação de precatórios. Nosso propósito é oferecer soluções rápidas, seguras e transparentes.
             </motion.p>
          <ul className="space-y-4 flex flex-col items-center w-full">
            {features.map((feature, idx) => (
                <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                    whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                    className="bg-white w-full md:w-[65%] px-6 py-2 rounded-md flex items-center gap-2"
                >
                  <Image
                      src={feature.icon}
                      alt={feature.alt}
                      width={28}
                      height={28}
                  />
                  <p className="text-[#249261] w-full text-center">
                    {feature.text}
                  </p>
                </motion.li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
