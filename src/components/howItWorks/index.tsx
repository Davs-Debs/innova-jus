import React from "react";

const steps = [
    { id: "01", label: "Informe seus dados básicos", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { id: "02", label: "Receba a proposta personalizada", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { id: "03", label: "Envie seus documentos", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { id: "04", label: "Assine o contrato digital", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
];

export default function HowItWorks() {
    return (
        <section id="como-funciona" className="bg-[#fbfbf9] py-20">
            <div className="max-w-7xl mx-auto px-6">
                <header className="max-w-2xl">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800">
                        Como funciona?
                    </h2>
                    <p className="mt-4 text-lg text-slate-600">
                        Veja como é simples transformar seu precatório em liquidez!
                    </p>
                </header>

                <div className="mt-12">
                    <div className="flex flex-col md:flex-row items-stretch md:divide-x md:divide-gray-200">
                        {steps.map((s, idx) => (
                            <div
                                key={s.id}
                                className="flex-1 flex flex-col items-center text-center px-6 py-10"
                            >
                                <div
                                    aria-hidden
                                    className="select-none leading-none font-extrabold text-[8rem] md:text-[6rem] lg:text-[8rem] -mt-2 bg-gradient-to-b from-[#1E3848] to-#fbfbf9] bg-clip-text text-transparent"
                                >
                                    {s.id}
                                </div>
                                <p className=" text-3xl font-semibold -mt-8 text-[#1E3848]  max-w-xs">
                                    {s.label}
                                </p>
                                <p className="text-base md:text-lg font-normal mt-4 text-gray-800 max-w-xs">
                                    {s.description}
                                </p>
                                <span className="sr-only">Passo {s.id} — {s.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-12 flex justify-center">
                    <button className="bg-[#249261]  hover:bg-green-700 text-white w-fit rounded-md px-8 py-4 cursor-pointer">
                        Quer saber quanto pagamos pelo seu Precatório ou RPV? Clique aqui
                    </button>
                </div>
            </div>
        </section>
    );
}
