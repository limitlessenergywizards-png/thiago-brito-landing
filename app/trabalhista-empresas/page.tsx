import { Hero } from "@/components/Hero";
import { Identificacao } from "@/components/Identificacao";
import { Autoridade } from "@/components/Autoridade";
import { Qualificacao } from "@/components/Qualificacao";
import { CtaFinal } from "@/components/CtaFinal";
import { Footer } from "@/components/Footer";

export default function TrabalhistaEmpresasPage() {
  return (
    <main>
      <Hero />
      <Identificacao />
      <Autoridade />
      <Qualificacao />
      <CtaFinal />
      <Footer />
    </main>
  );
}
