import Image from "next/image";

export default function About() {
  return (
    <section id="sobre-nos" className="bg-[#1E3848] flex items-center px-6 py-10 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto w-full py-8">
        
   <div className="hidden lg:block relative w-full h-[400px]">
  <Image
    src="/assets/image-about.jpg"
    alt="Balões de dialogo"
    fill
    className="object-cover rounded-md"
  />
</div>
        <div className="flex flex-col justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-semibold  mb-6 text-center ">
            Sobre nós
          </h1>
          <p className="text-gray-200 mb-6 leading-relaxed text-justify">
            A INNOVAJUS é uma empresa especializada em investimentos em créditos judiciais, com foco na compra e 
            negociação de precatórios. Nosso propósito é oferecer soluções rápidas, seguras e transparentes. 
             </p>
          <ul className="space-y-4 flex flex-col items-center w-full">
            <li className="bg-white w-full md:w-[65%] px-6 py-2 rounded-md flex items-center gap-2">
              <Image
                src="/assets/icons/shield-check.svg"
                alt="Símbolo de segurança"
                width={28}
                height={28}
              />
              <p className="text-[#249261] w-full text-center">
                Plataforma 100% digital e segura
              </p>
            </li>
            <li className="bg-white w-full md:w-[65%] px-6 py-2 rounded-md flex items-center gap-2">
              <Image
                src="/assets/icons/scale.svg"
                alt="Símbolo de justiça"
                width={28}
                height={28}
              />
              <p className="text-[#249261] w-full text-center">
                Proposta justa e transparente
              </p>
            </li>
            <li className="bg-white w-full md:w-[65%] px-6 py-2 rounded-md flex items-center gap-2">
              <Image
                src="/assets/icons/pen-line.svg"
                alt="Assinatura"
                width={28}
                height={28}
              />
              <p className="text-[#249261] w-full text-center">
                Contratos digitais válidos legalmente
              </p>
            </li>
            <li className="bg-white w-full md:w-[65%] px-6 py-2 rounded-md flex items-center gap-2">
              <Image
                src="/assets/icons/messages-square.svg"
                alt="Balões de dialogo"
                width={28}
                height={28}
              />
              <p className="text-[#249261] w-full text-center">
                Atendimento especializado
              </p>
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
}
