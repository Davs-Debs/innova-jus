import Image from "next/image";

export default function Faq() {
    return (
        <div>
            <section id="faq" className=" bg-[#FDFCF8] flex items-center px-6 ">
                <div className="max-w-7xl mx-auto w-full">

                    <h1 className="text-[#1E3848]   text-4xl md:text-5xl font-semibold text-left mb-6 mt-10 md:mt-20 leading-tight">
                        Perguntas Frequentes (FAQ)
                    </h1>
                    <p className="text-gray-800 text-lg md:text-2xl mb-6 leading-relaxed">
                        Tire suas dúvidas!
                    </p>
                    <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4">

                        <div className="w-full">
                            {/* 1 */}
                            <div className="collapse  border shadow-sm border-gray-100 mb-4 bg-white">
                                <input type="radio" name="faq-accordion" defaultChecked />
                                <div className="collapse-title font-semibold text-[#249261]">
                                    O que é um precatório?
                                </div>
                                <div className="collapse-content text-sm text-gray-700">
                                    <p>
                                        Precatório é uma ordem de pagamento expedida pela Justiça quando o
                                        governo (municipal, estadual ou federal) é condenado a pagar uma
                                        dívida. Ele representa um crédito que o cidadão ou empresa tem a
                                        receber do poder público.
                                    </p>
                                </div>
                            </div>

                            {/* 2 */}
                            <div className="collapse  border shadow-sm border-gray-100 mb-4 bg-white">
                                <input type="radio" name="faq-accordion" />
                                <div className="collapse-title font-semibold text-[#249261] ">
                                    Quem pode vender seu precatório?
                                </div>
                                <div className="collapse-content text-sm text-gray-700 ">
                                    <p>
                                        O titular do precatório (quem tem o direito de receber) ou seus
                                        herdeiros legais podem vender o crédito. É necessário apenas
                                        comprovar a titularidade e a legitimidade da venda.
                                    </p>
                                </div>
                            </div>

                            {/* 3 */}
                            <div className="collapse  border shadow-sm border-gray-100 mb-4 bg-white">
                                <input type="radio" name="faq-accordion" />
                                <div className="collapse-title font-semibold text-[#249261]">
                                    Quanto tempo demora para receber o pagamento?
                                </div>
                                <div className="collapse-content text-sm text-gray-700">
                                    <p>
                                        Após a assinatura do contrato digital e a análise da documentação,
                                        o pagamento é feito de forma rápida, geralmente em poucos dias,
                                        conforme os prazos definidos em contrato.
                                    </p>
                                </div>
                            </div>

                            {/* 4 */}
                            <div className="collapse  border shadow-sm border-gray-100 mb-4 bg-white">
                                <input type="radio" name="faq-accordion" />
                                <div className="collapse-title font-semibold text-[#249261] ">
                                    Os contratos são realmente válidos digitalmente?
                                </div>
                                <div className="collapse-content text-sm text-gray-700 ">
                                    <p>
                                        Sim. Os contratos digitais têm validade jurídica no Brasil, desde
                                        que assinados eletronicamente conforme a legislação vigente. Nós
                                        utilizamos plataformas seguras e reconhecidas para garantir a
                                        autenticidade.
                                    </p>
                                </div>
                            </div>

                            {/* 5 */}
                            <div className="collapse  border shadow-sm border-gray-100 mb-4">
                                <input type="radio" name="faq-accordion" />
                                <div className="collapse-title font-semibold text-[#249261] ">
                                    A avaliação é gratuita e sem compromisso?
                                </div>
                                <div className="collapse-content text-sm text-gray-700 ">
                                    <p>
                                        Sim. A avaliação do seu precatório é totalmente gratuita e sem
                                        compromisso. Você recebe uma proposta personalizada e só decide se
                                        deseja prosseguir após conhecer as condições.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="hidden lg:flex lg:align-middle lg:items-center lg:justify-center"
                        >
                            <Image
                                src="/assets/image-faq.png"
                                alt="Dois homens dando um aperto de mão"
                                width={400}
                                height={400}
                            />
                        </div>


                    </div>
                </div>
            </section>
        </div>

    );
}
