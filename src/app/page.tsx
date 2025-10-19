import Navbar from "../components/navbar";
import Faq from "@/components/faq";
import Contact from "@/components/contact";
import About from "@/components/about";
import HowItWorks from "@/components/howItWorks";
import Footer from "@/components/footer";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <main>
        <Hero></Hero>
        <HowItWorks></HowItWorks>
        <About></About>
        <Faq></Faq>
        <Contact></Contact>
        <Footer></Footer>
      </main>
    </div>

  );
}
