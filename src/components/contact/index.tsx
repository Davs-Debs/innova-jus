import Image from "next/image";

export default function Contact() {
    return (
            <section id="contato" className=" bg-[#249261] flex items-center px-6 py-10 my-12"
                style={{ backgroundImage: "url('/assets/bg-contact.png')" }}>
                <div className="max-w-7xl mx-auto w-full flex flex-col items-center ">

                    <h1 className="text-white text-4xl md:text-5xl font-semibold text-left mb-6 mt-10 leading-tight">
                        Avalie seu precatório agora mesmo!
                    </h1>
                    <p className="text-gray-200 text-lg md:text-2xl mb-6 leading-relaxed">
                        Informe seus dados básicos e receba uma proposta personalizada
                    </p>
                        <button
                            type="button"
                            className="bg-[#1E3848] mb-5 mt-5 cursor-pointer text-white uppercase rounded-sm px-10 py-3 flex items-center justify-center gap-2 w-fit hover:bg-[#12222c] transition-colors"
                        >
                            INICIE SUA AVALIAÇÃO GRATUITA
                            <Image
                                src="/assets/whatsapp-logo.svg"
                                alt="Dois homens dando um aperto de mão"
                                width={22}
                                height={22}
                            />
                        </button>
                    </div>
            </section>

    );
}
