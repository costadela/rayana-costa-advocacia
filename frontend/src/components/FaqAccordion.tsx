"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "O atendimento é realizado diretamente com a Dra. Rayana Costa?",
    a: "Sim. Acreditamos que a confiança é a base da advocacia criminal. Todo o atendimento é humanizado, sigiloso e conduzido diretamente pela advogada responsável, garantindo uma relação próxima e transparente.",
  },
  {
    q: "Como funciona o acompanhamento do processo de Execução Penal?",
    a: "Realizamos a análise detalhada do cálculo de pena e das pendências judiciais, fazemos os atendimentos presenciais necessários no estabelecimento prisional e mantemos a família constantemente informada sobre cada andamento.",
  },
  {
    q: "Quando o acautelado pode começar a trabalhar no sistema prisional?",
    a: "A permissão para o trabalho dentro ou fora da unidade prisional depende do regime de cumprimento de pena (fechado ou semiaberto), do cumprimento do lapso temporal e do comportamento do apenado. Cada dia trabalhado reme parte da pena.",
  },
  {
    q: "Preciso ser condenado definitivamente para ter direito ao Indulto ou comutação?",
    a: "Em regra, o Indulto e a comutação de pena exigem o trânsito em julgado da condenação, cumprindo os requisitos objetivos (tempo de pena) e subjetivos (bom comportamento) estabelecidos no Decreto Presidencial aplicável.",
  },
  {
    q: "O que fazer se o meu familiar praticar ou for acusado de falta grave?",
    a: "A acusação de falta grave pode interromper a contagem do tempo para benefícios e regressar o regime. Nesses casos, é indispensável a defesa técnica formal em Processo Administrativo Disciplinar (PAD) para resguardar seus direitos.",
  },
  {
    q: "O atendimento prestado é sigiloso?",
    a: "Sim. Todo o atendimento e a troca de informações e documentos são estritamente protegidos pelo sigilo profissional inerente à advocacia criminal e ao Código de Ética da OAB.",
  },
];

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="border-t border-gold/15 max-w-2xl">
      {FAQS.map((item, i) => (
        <div key={item.q} className="border-b border-gold/15">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
            className="w-full flex items-center justify-between gap-4 py-6 text-left font-serif text-lg text-offwhite hover:text-gold transition-colors focus-ring"
          >
            <span>{item.q}</span>
            <span
              className={`shrink-0 text-gold text-xl leading-none transition-transform duration-300 ${
                open === i ? "rotate-45" : ""
              }`}
            >
              +
            </span>
          </button>
          <div
            className="overflow-hidden transition-all duration-300 ease-in-out"
            style={{ maxHeight: open === i ? "350px" : "0px" }}
          >
            <p className="pb-6 text-offwhite/85 text-sm sm:text-base leading-relaxed max-w-xl">
              {item.a}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}