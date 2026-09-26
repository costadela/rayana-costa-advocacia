"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "O atendimento é realizado diretamente com a Dra. Rayana Costa?",
    a: "Sim. O atendimento é realizado de forma próxima e humanizada, diretamente pela advogada responsável pelo caso, com escuta individualizada, transparência e sigilo profissional.",
  },
  {
    q: "Como funciona o acompanhamento do processo de Execução Penal?",
    a: "O trabalho começa com uma análise detalhada do processo, do cálculo de pena e das possíveis pendências. A partir disso, são definidas as medidas necessárias, com acompanhamento dos trâmites e comunicação clara com a família.",
  },
  {
    q: "Quando o apenado pode trabalhar durante o cumprimento da pena?",
    a: "A possibilidade de trabalho depende das condições do caso, do regime de cumprimento da pena e das regras aplicáveis à unidade prisional. O trabalho também pode gerar remição de parte da pena, conforme os requisitos legais.",
  },
  {
    q: "Quando é possível pedir Indulto ou Comutação de Pena?",
    a: "A possibilidade depende dos requisitos estabelecidos no decreto presidencial aplicável a cada caso. Por isso, é necessário analisar a situação do apenado, o tempo de pena cumprido e os demais requisitos previstos na norma vigente.",
  },
  {
    q: "O que acontece quando há uma acusação de falta grave?",
    a: "A apuração de uma falta grave pode trazer consequências importantes para a execução da pena e para a análise de benefícios. Nesses casos, é importante contar com acompanhamento jurídico para apresentar a defesa e acompanhar o procedimento.",
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