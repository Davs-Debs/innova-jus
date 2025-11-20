'use client'
import Image from "next/image";
import { motion } from "framer-motion";

export default function Contact() {
    return (
            <section id="contato" className=" bg-[#249261] flex items-center px-6 py-10 my-12"
                style={{ backgroundImage: "url('/assets/bg-contact.png')" }}>
                <div className="max-w-7xl mx-auto w-full flex flex-col items-center ">

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="text-white text-4xl md:text-5xl font-semibold text-left mb-6 mt-10 leading-tight"
                    >
                        Avalie seu precatório agora mesmo!
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-gray-200 text-lg md:text-2xl mb-6 leading-relaxed"
                    >
                        Informe seus dados básicos e receba uma proposta personalizada
                    </motion.p>
                        <motion.a
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="https://wa.me/558431903795?text=Ol%C3%A1!%20Vi%20o%20site%20de%20voc%C3%AAs%20e%20quero%20saber%20como%20funciona%20a%20avalia%C3%A7%C3%A3o%20gratuita%20do%20meu%20precat%C3%B3rio."
                            target="_blank"
                            className="bg-[#1E3848] mb-5 mt-5 cursor-pointer text-white uppercase rounded-sm px-10 py-3 flex items-center justify-center gap-2 w-fit hover:bg-[#12222c] transition-colors"
                        >
                            INICIE SUA AVALIAÇÃO GRATUITA
                            <Image
                                src="/assets/whatsapp-logo.svg"
                                alt="Dois homens dando um aperto de mão"
                                width={22}
                                height={22}
                            />
                        </motion.a>
                    </div>
            </section>

    );
}
