import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import Reveal from "@/components/Reveal";
import FaqAccordion from "@/components/FaqAccordion";
import CountUp from "@/components/CountUp";

export const AREAS = [
  {
    id: "01",
    title: "Execução Penal & Cálculos",
    description:
      "Acompanhamento rigoroso de pena, remição de dias trabalhados ou estudados, retificação de guia de recolhimento e progressão de regime.",
  },
  {
    id: "02",
    title: "Atendimento no Estabelecimento Prisional",
    description:
      "Visitas técnicas e atendimento direto ao custodiado em unidades prisionais para orientação jurídica, escuta humanizada e alinhamento de defesa.",
  },
  {
    id: "03",
    title: "Indulto & Comutação de Pena",
    description:
      "Análise de requisitos objetivos e subjetivos para pedidos de perdão ou redução de pena com base nos Decretos Presidenciais vigentes.",
  },
  {
    id: "04",
    title: "Livramento Condicional & Benefícios",
    description:
      "Atuação célere na instrução e pedido de liberdade condicional, saída temporária e adequação de condições de cumprimento de pena.",
  },
];

const STEPS = [
  {
    n: "01",
    title: "Primeira Escuta e Diagnóstico",
    desc: "Análise inicial da situação do cliente e da família para entender as demandas urgentes e o histórico do caso.",
  },
  {
    n: "02",
    title: "Análise Técnica do Processo",
    desc: "Exame minucioso da guia de execução, cálculos de pena e eventuais pendências administrativas ou judiciais.",
  },
  {
    n: "03",
    title: "Atuação e Acompanhamento",
    desc: "Peticionamento focado em resultados, visitas presenciais e acompanhamento próximo dos trâmites no tribunal.",
  },
  {
    n: "04",
    title: "Retorno Transparente à Família",
    desc: "Comunicação clara e constante com os familiares, informando cada decisão e os próximos passos do processo.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      {/* HERO (Fundo Preto Puro) */}
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-16 grid lg:grid-cols-[1.15fr_0.85fr] gap-14 items-center">
        <div>
          <h1 className="animate-fade-up delay-100 font-serif text-4xl sm:text-5xl lg:text-[3.2rem] xl:text-5xl font-semibold leading-[1.12] tracking-tight text-offwhite mb-7">
            Execução Penal sem{" "}
            <em className="not-italic text-gold">enrolação.</em>
          </h1>

          <p className="animate-fade-up delay-200 text-offwhite/85 text-lg sm:text-xl max-w-xl mb-10 leading-relaxed">
            Atendimento humanizado. Defesa de direitos no sistema prisional e acompanhamento transparente para o cliente e sua família.
          </p>

<div className="animate-fade-up delay-300 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
  <Link
    href="/contato"
    className="inline-flex items-center justify-center text-center px-7 py-3.5 bg-gold text-bg font-semibold rounded-md transition-all duration-300 hover:bg-goldSoft hover:scale-[1.02] hover:shadow-lg hover:shadow-gold/20 focus-ring text-xs tracking-wider normal-case"
  >
    Atendimento Jurídico
  </Link>

  <Link
    href="/cursos"
    className="inline-flex items-center justify-center text-center px-7 py-3.5 border border-gold/40 text-gold font-semibold rounded-md transition-all duration-300 hover:bg-gold/10 hover:border-gold focus-ring text-xs tracking-wider normal-case"
  >
    Aprender Execução Penal
  </Link>
</div>
        </div>

        {/* Imagem de Destaque */}
        <div className="animate-fade-up delay-200 relative aspect-[4/5] rounded-lg overflow-hidden border border-gold/30 shadow-2xl shadow-gold/10 group">
          <Image
            src="/imagens/rayana-about.jpg"
            alt="Dra. Rayana Costa, advogada especialista em Execução Penal"
            fill
            sizes="(min-width: 1024px) 420px, 100vw"
            className="object-cover saturate-[1.12] contrast-[1.05] brightness-[1.02] transition-transform duration-700 ease-out group-hover:scale-105"
            priority
          />
        </div>
      </section>

      {/* NÚMEROS DE AUTORIDADE */}
      <div className="border-b border-gold/15 py-12 bg-black">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-4 gap-8">
          {[
            {
              target: 2017,
              prefix: "Desde ",
              suffix: "",
              label: "Atuando na Advocacia Criminal e Execução Penal",
            },
            {
              target: 400,
              prefix: "+",
              suffix: "",
              label: "Atendimentos jurídicos realizados no CERESP/JF",
            },
            {
              target: 1,
              prefix: "",
              suffix: "",
              label: "Autora do Manual Prático de Execução Penal",
            },
            {
              target: 24,
              prefix: "",
              suffix: "h",
              label: "Atendimento emergencial em flagrantes",
            },
          ].map((s) => (
            <Reveal key={s.label}>
              <div className="flex flex-col h-full justify-between">
                <p className="font-serif text-3xl sm:text-4xl font-semibold mb-2">
                  <span className="text-gold">{s.prefix}</span>
                  <span className="text-offwhite">
                    <CountUp target={s.target} />
                  </span>
                  <span className="text-gold">{s.suffix}</span>
                </p>
                <p className="text-offwhite/85 text-xs sm:text-sm leading-relaxed max-w-[200px]">
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* ÁREAS DE ATUAÇÃO */}
      <section id="areas" className="max-w-6xl mx-auto px-6 py-24 bg-black">
        <Reveal>
          <p className="text-gold text-xs tracking-widest uppercase font-medium mb-4">
            Onde faço a diferença
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-offwhite mb-4 max-w-xl">
            Atendimento Especializado e Humanizado
          </h2>
          <p className="text-offwhite/80 max-w-md mb-14 text-sm sm:text-base leading-relaxed">
            Análise minuciosa de processos de Execução Penal, acompanhamento de direitos (progressão de regime, livramento condicional, indulto, remição e cálculo de pena) e atendimento direto ao custodiado e aos seus familiares.
          </p>
        </Reveal>

        <div className="border-t border-gold/15">
          {AREAS.map((area) => (
            <Reveal key={area.id}>
              <div className="group relative grid grid-cols-[50px_1fr] sm:grid-cols-[70px_1fr_1.4fr] gap-4 sm:gap-8 items-baseline py-7 pl-0 border-b border-gold/15 transition-[padding] duration-300 hover:pl-4">
                <span className="absolute left-0 top-0 bottom-0 w-[2px] bg-gold origin-top scale-y-0 transition-transform duration-300 group-hover:scale-y-100" />
                <span className="font-serif text-gold/60 text-sm font-medium">
                  {area.id}
                </span>
                <h3 className="font-serif text-lg text-offwhite group-hover:text-gold transition-colors">
                  {area.title}
                </h3>
                <p className="text-offwhite/80 text-sm sm:text-right sm:max-w-md col-span-2 sm:col-span-1 leading-relaxed">
                  {area.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SOBRE */}
      <section className="bg-[#0e0e0d] border-y border-gold/15 py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[340px_1fr] gap-12 lg:gap-16 items-center">
          
          <Reveal>
            <div className="relative aspect-[3/4] w-full max-w-[340px] rounded-lg overflow-hidden border border-gold/25 shadow-2xl shadow-black/80 group mx-auto md:mx-0">
              <Image
                src="/imagens/rayana-sobre.jpg"
                alt="Dra. Rayana Costa, advogada especialista em Execução Penal"
                fill
                sizes="340px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          </Reveal>

          <Reveal>
            <p className="text-gold text-xs tracking-widest uppercase font-medium mb-2">OAB/MG 192.542</p>
            <h2 className="font-serif text-3xl sm:text-4xl text-offwhite mb-6">Rayana Costa</h2>

            <div className="space-y-4 text-offwhite/90 leading-relaxed text-sm sm:text-base max-w-2xl mb-6">
              <p>
                Minha atuação na Execução Penal nasceu da prática e da vivência diária no sistema prisional. Desde 2017, dedico meu trabalho a transformar a complexidade da Execução Penal em uma atuação técnica, ágil, ética e, acima de tudo, próxima de quem precisa de orientação.
              </p>
              <p>
                Acredito em uma advocacia que alia conhecimento técnico à escuta atenta. Cada história é recebida com respeito, e cada família deve ter acesso a orientações claras e transparentes sobre o caso e seus possíveis caminhos.
              </p>
              <p>
                Além da advocacia, atuo como professora, mentora e autora de materiais práticos, compartilhando com outros profissionais do Direito a experiência construída ao longo dos anos nos tribunais e nas unidades prisionais.
              </p>
            </div>

            <div className="border-l-2 border-gold pl-4 max-w-xl mb-8 py-2 bg-gold/5 rounded-r-sm">
              <p className="text-offwhite/90 text-xs sm:text-sm leading-relaxed">
                Sou autora do livro{" "}
                <Link href="/cursos" className="link-underline text-gold font-medium hover:text-goldSoft">
                  Manual Prático de Execução Penal
                </Link>{" "}
                e professora docente no{" "}
                <Link href="/cursos" className="link-underline text-gold font-medium hover:text-goldSoft">
                  curso PeP
                </Link>{" "}
                (preparatório para a OAB), além de mentora de mais de 150 advogados e alunos.
              </p>
            </div>

            <div className="flex flex-wrap gap-8">
              {[
                { n: "10", l: "anos de atuação" },
                { n: "300+", l: "processos conduzidos" },
                { n: "1", l: "livro publicado" },
                { n: "150+", l: "alunos mentorados" },
              ].map((c) => (
                <div key={c.l} className="pt-3 border-t border-gold/25 min-w-[90px]">
                  <p className="font-serif text-2xl font-semibold text-offwhite mb-0.5">{c.n}</p>
                  <p className="text-offwhite/70 text-xs tracking-wide">{c.l}</p>
                </div>
              ))}
            </div>
          </Reveal>

        </div>
      </section>

      {/* MEU MÉTODO */}
      <section className="max-w-6xl mx-auto px-6 py-24 bg-black">
        <Reveal>
          <p className="text-gold text-xs tracking-widest uppercase font-medium mb-4">Meu método</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-offwhite mb-14 max-w-xl">
            Muito além do processo | Advocacia humanizada na Execução Penal.
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 border-t border-gold/15">
          {STEPS.map((step, i) => (
            <Reveal key={step.n}>
              <div className={`pt-7 pb-6 pr-6 ${i > 0 ? "md:border-l border-gold/15" : ""}`}>
                <span className="font-serif italic text-gold text-lg">{step.n}</span>
                <h3 className="text-offwhite mt-3 mb-2 font-medium text-base">{step.title}</h3>
                <p className="text-offwhite/80 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-6xl mx-auto px-6 py-24 bg-black">
        <Reveal>
          <p className="text-gold text-xs tracking-widest uppercase font-medium mb-4">Perguntas frequentes</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-offwhite mb-14 max-w-xl">
            Dúvidas comuns antes da consulta
          </h2>
        </Reveal>
        <Reveal className="w-full">
          <FaqAccordion />
        </Reveal>
      </section>

      {/* CONTATO */}
      <section id="contato" className="bg-[#0e0e0d] border-t border-gold/15 py-24">
        <div className="max-w-2xl mx-auto px-6">
          <Reveal>
            <h2 className="font-serif text-3xl sm:text-4xl text-offwhite mb-3 text-center">
              Cada hora importa
            </h2>
            <p className="text-offwhite/80 text-center mb-10 text-sm sm:text-base">
              Fale agora com quem vai conduzir o seu caso. Atendimento imediato e
              confidencial, direto com a advogada responsável.
            </p>
            <LeadForm />
          </Reveal>
        </div>
      </section>
    </main>
  );
}