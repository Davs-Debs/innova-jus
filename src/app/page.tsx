import Navbar from "../components/navbar";
import Faq from "@/components/faq";
import Contact from "@/components/contact";
import About from "@/components/about";
import HowItWorks from "@/components/howItWorks";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <main>
        <section
          className="h-screen bg-cover bg-center flex items-center px-6"
          style={{ backgroundImage: "url('/assets/bg-hero.jpg')" }}
        >
          <div className="max-w-7xl mx-auto w-full">
            <div className="w-full sm:w-8/12">
              <h1 className="text-white text-4xl md:text-5xl font-semibold text-left mb-6 mt-10 md:mt-20 leading-tight">
                Transforme seu precatório em dinheiro de forma rápida, segura e justa
              </h1>

              <p className="text-gray-300 text-lg md:text-2xl mb-6 leading-relaxed">
                Com a INNOVAJUS, você avalia seu crédito judicial online, recebe
                proposta personalizada e assina contrato digitalmente
              </p>

              <button
                type="button"
                className="bg-[#249261] mt-10 text-white uppercase rounded-sm px-6 py-3 flex items-center justify-center gap-2 w-full md:w-7/12 hover:bg-green-700 transition-colors"
              >
                <span>INICIE SUA AVALIAÇÃO GRATUITA</span>

              </button>
            </div>
          </div>
        </section>
        <HowItWorks></HowItWorks>
        <About></About>
        <Faq></Faq>
        <Contact></Contact>
        <Footer></Footer>
      </main>
    </div>

  );
}
