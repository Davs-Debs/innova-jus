'use client'
import Image from "next/image";
import { motion } from "framer-motion";

export default function Faq() {
    const faqs = [
        {
            question: "O que é um precatório?",
            answer: "Precatório é uma ordem de pagamento expedida pela Justiça quando o governo (municipal, estadual ou federal) é condenado a pagar uma dívida. Ele representa um crédito que o cidadão ou empresa tem a receber do poder público."
        },
        {
            question: "Quem pode vender seu precatório?",
            answer: "O titular do precatório (quem tem o direito de receber) ou seus herdeiros legais podem vender o crédito. É necessário apenas comprovar a titularidade e a legitimidade da venda."
        },
        {
            question: "Quanto tempo demora para receber o pagamento?",
            answer: "Após a assinatura do contrato digital e a análise da documentação, o pagamento é feito de forma rápida, geralmente em poucos dias, conforme os prazos definidos em contrato."
        },
        {
            question: "Os contratos são realmente válidos digitalmente?",
            answer: "Sim. Os contratos digitais têm validade jurídica no Brasil, desde que assinados eletronicamente conforme a legislação vigente. Nós utilizamos plataformas seguras e reconhecidas para garantir a autenticidade."
        },
        {
            question: "A avaliação é gratuita e sem compromisso?",
            answer: "Sim. A avaliação do seu precatório é totalmente gratuita e sem compromisso. Você recebe uma proposta personalizada e só decide se deseja prosseguir após conhecer as condições."
        }
    ];

    return (
        <div>
            <section id="faq" className=" bg-[#FDFCF8] flex items-center px-6 ">
                <div className="max-w-7xl mx-auto w-full">

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="text-[#1E3848]   text-4xl md:text-5xl font-semibold text-left mb-6 mt-10 md:mt-20 leading-tight"
                    >
                        Perguntas Frequentes (FAQ)
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-gray-800 text-lg md:text-2xl mb-6 leading-relaxed"
                    >
                        Tire suas dúvidas!
                    </motion.p>
                    <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4">

                        <div className="w-full">
                            {faqs.map((faq, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    className="collapse border shadow-sm border-gray-100 mb-4 bg-white"
                                >
                                    <input type="radio" name="faq-accordion" defaultChecked={idx === 0} />
                                    <div className="collapse-title font-semibold text-[#249261]">
                                        {faq.question}
                                    </div>
                                    <div className="collapse-content text-sm text-gray-700">
                                        <p>{faq.answer}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="hidden lg:flex lg:align-middle lg:items-center lg:justify-center"
                        >
                            <Image
                                src="/assets/image-faq.png"
                                alt="Dois homens dando um aperto de mão"
                                width={400}
                                height={400}
                            />
                        </motion.div>


                    </div>
                </div>
            </section>
        </div>

    );
}
