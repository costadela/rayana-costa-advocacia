import LeadForm from "@/components/LeadForm";
import Reveal from "@/components/Reveal";

export default function ContatoPage() {
  return (
    <main className="pt-32 pb-24 bg-black min-h-screen">
      <section className="w-full max-w-2xl mx-auto px-6">
        <Reveal>
          <h1 className="font-serif text-3xl sm:text-4xl text-offwhite mb-3 text-center">
            Cada caso merece atenção
          </h1>
          <p className="text-offwhite/80 text-center mb-10 text-sm sm:text-base">
            Fale diretamente com a advogada responsável pelo seu caso. Conte brevemente o que está acontecendo e receba uma orientação inicial sobre os próximos passos.
          </p>
          <LeadForm />
        </Reveal>
      </section>
    </main>
  );
}