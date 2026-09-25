import Reveal from "@/components/Reveal";

export default function ProjetosSociaisPage() {
  return (
    <main className="min-h-[80vh] bg-black pt-32 pb-24">
      <section className="max-w-4xl mx-auto px-6">
        <Reveal>
          <p className="text-gold text-xs tracking-widest uppercase font-medium mb-2">
            Projetos Sociais
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl text-offwhite font-medium mb-6">
            Compromisso além do tribunal
          </h1>
          <p className="text-offwhite/85 text-base sm:text-lg leading-relaxed max-w-2xl mb-12">
            Acredito que o acesso à justiça não deveria depender apenas de quem pode pagar por ele. Por isso, dedico parte do meu tempo a iniciativas que aproximam o Direito Criminal de quem mais precisa de orientação e defesa qualificada.
          </p>
        </Reveal>

       
      </section>
    </main>
  );
}