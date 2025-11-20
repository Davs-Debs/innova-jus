'use client'
import React from "react";
import { motion } from "framer-motion";

const steps = [
    { id: "01", label: "Informe seus dados básicos", description: "Nos envie seus dados pessoais e as informações do seu precatório ou RPV. Assim, nossa equipe já poderá iniciar a análise do seu caso para apresentar uma proposta rápida e segura, sem burocracia." },
    { id: "02", label: "Receba a proposta personalizada", description: "Após a análise, elaboramos uma proposta de compra, considerando o valor, o tribunal e o tipo de crédito. Você saberá exatamente quanto pode receber e em quanto tempo, sem custos para avaliar."},
    { id: "03", label: "Envie seus documentos", description: "Com a proposta aprovada, basta enviar os documentos solicitados de forma 100% digital. Nossa equipe faz toda a conferência para garantir que o processo seja validado junto ao Tribunal de origem" },
    { id: "04", label: "Assine o contrato digital", description: "Depois da validação, você assina o contrato digital. O pagamento é realizado de acordo com o cronograma combinado, e você transforma o seu precatório em dinheiro, com total segurança jurídica." },
];

export default function HowItWorks() {
    return (
        <section id="como-funciona" className="bg-[#fbfbf9] py-20">
            <div className="max-w-7xl mx-auto px-6">
                <motion.header
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="max-w-2xl"
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800">
                        Como funciona?
                    </h2>
                    <p className="mt-4 text-lg text-slate-600">
                        Veja como é simples transformar seu precatório em liquidez!
                    </p>
                </motion.header>

                <div className="mt-12">
                    <div className="flex flex-col md:flex-row items-stretch md:divide-x md:divide-gray-200">
                        {steps.map((s, idx) => (
                            <motion.div
                                key={s.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: idx * 0.15 }}
                                className="flex-1 flex flex-col items-center text-center px-6 py-10"
                            >
                                <motion.div
                                    initial={{ scale: 0.5, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: idx * 0.15 + 0.2 }}
                                    aria-hidden
                                    className="select-none leading-none font-extrabold text-[8rem] md:text-[6rem] lg:text-[8rem] -mt-2 bg-gradient-to-b from-[#1E3848] to-#fbfbf9] bg-clip-text text-transparent"
                                >
                                    {s.id}
                                </motion.div>
                                <p className=" text-3xl font-semibold -mt-8 text-[#1E3848]  max-w-xs">
                                    {s.label}
                                </p>
                                <p className="text-base md:text-lg font-normal mt-4 text-gray-800 max-w-xs">
                                    {s.description}
                                </p>
                                <span className="sr-only">Passo {s.id} — {s.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-12 flex justify-center"
                >
                      <motion.a
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-[#249261]  hover:bg-green-700 text-white w-fit rounded-md px-8 py-4 cursor-pointer"
                          href="https://wa.me/558431903795?text=Ol%C3%A1!%20Vi%20o%20site%20de%20voc%C3%AAs%20e%20quero%20saber%20como%20funciona%20a%20avalia%C3%A7%C3%A3o%20gratuita%20do%20meu%20precat%C3%B3rio."
                          target="_blank"
                          rel="noopener noreferrer"
                      >
                        Quer saber quanto pagamos pelo seu Precatório ou RPV? Clique aqui
                      </motion.a>

                </motion.div>
            </div>
        </section>
    );
}
