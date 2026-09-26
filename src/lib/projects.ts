export type CardHeight = "sm" | "md" | "lg";

export interface Project {
  slug: string;
  tag: string;
  title: string;
  location: string;
  date: string;
  summary: string;
  description: string[];
  imageUrl: string;
  gallery: string[];
  cardHeight: CardHeight;
}

export const projects: Project[] = [
{
  slug: "acao-dia-dos-pais-com-as-criancas-2026",
  tag: "AÇÃO SOCIAL",
  title: "Dia dos Pais no Cárcere: Afeto que Aproxima",
  location: "JUIZ DE FORA",
  date: "AGO 2026",
  summary:
    "Uma ação de Dia dos Pais dedicada ao reencontro entre crianças e seus pais em cumprimento de pena, criando um momento de convivência, brincadeiras, carinho e afeto dentro do ambiente prisional.",
  description: [
    "Em agosto de 2026, em Juiz de Fora, promovemos uma ação especial de Dia dos Pais para que crianças pudessem visitar seus pais em cumprimento de pena e viver juntos um momento de carinho, presença e conexão.",
    "Durante a visita, pais e filhos puderam brincar, desenhar, conversar e compartilhar um tempo de qualidade juntos. As crianças também tiveram a oportunidade de entregar presentes preparados especialmente para seus pais.",
    "Mais do que uma comemoração, a iniciativa buscou preservar os vínculos familiares e proporcionar às crianças um momento de afeto e convivência, mostrando que, mesmo diante das dificuldades, os laços entre pais e filhos continuam sendo importantes.",
  ],
  imageUrl: "/projetos/dia-dos-pais-capa.jpg",
  gallery: [
    "/projetos/dia-dos-pais-capa.jpg",
    "/projetos/dia-dos-pais-1.jpg",
    "/projetos/dia-dos-pais-2.jpg",
    "/projetos/dia-dos-pais-3.jpg",
    "/projetos/dia-dos-pais-4.jpg",
    "/projetos/dia-dos-pais-5.jpg",
    "/projetos/dia-dos-pais-6.jpg",
  ],
  cardHeight: "lg",
},
{
  slug: "inauguracao-posto-de-trabalho-anexo-feminino",
  tag: "RESSOCIALIZAÇÃO",
  title: "Trabalho que Transforma: Posto de Trabalho no Anexo Feminino",
  location: "JUIZ DE FORA",
  date: "AGO 2026",
  summary:
    "A inauguração de um novo posto de trabalho no Anexo Feminino Eliane Beti, criando oportunidades de aprendizado, dignidade e remição de pena para mulheres privadas de liberdade.",
  description: [
    "Em agosto de 2026, acompanhamos a inauguração de um novo posto de trabalho no Anexo Feminino Eliane Beti, em Juiz de Fora, voltado às mulheres privadas de liberdade.",
    "Mais do que uma oportunidade de trabalho, a iniciativa representa um caminho de aprendizado, responsabilidade e construção de novas perspectivas. A atividade laboral também pode contribuir para a remição de parte da pena, conforme os requisitos legais.",
    "Acreditamos que a ressocialização também passa pela criação de oportunidades concretas. O acesso ao trabalho durante o cumprimento da pena pode ajudar a fortalecer a autonomia, desenvolver habilidades e preparar novos caminhos para a vida após o cárcere.",
  ],
  imageUrl: "/projetos/posto-trabalho-capa.jpg",
  gallery: [
    "/projetos/posto-trabalho-capa.jpg",
    "/projetos/posto-trabalho-1.jpg",
    "/projetos/posto-trabalho-2.jpg",
    "/projetos/posto-trabalho-3.jpg",
  ],
  cardHeight: "sm",
},
{
  slug: "passarela-da-liberdade-pavilhao-lgbt",
  tag: "DIREITOS HUMANOS",
  title: "Passarela da Liberdade: Identidade, Respeito e Cidadania",
  location: "UNICADEMIA — JUIZ DE FORA",
  date: "JUN 2026",
  summary:
    "Uma edição especial do Projeto Passarela da Liberdade dedicada à valorização da identidade, da autoestima e do respeito à diversidade no ambiente prisional.",
  description: [
    "Realizado no Centro Universitário UniAcademia, em Juiz de Fora, o Projeto Passarela da Liberdade promoveu uma edição especial voltada às pessoas privadas de liberdade do Pavilhão LGBT.",
    "A iniciativa criou um espaço de expressão, acolhimento e valorização da identidade, abordando temas como cidadania, dignidade e direitos fundamentais.",
    "Por meio de dinâmicas de autoestima, momentos de convivência e orientação jurídica, a ação buscou fortalecer a percepção de valor e dignidade de cada participante, levando informação, respeito e acolhimento para dentro do ambiente prisional.",
  ],
  imageUrl: "/projetos/passarela-lgbt-capa.jpg",
  gallery: [
    "/projetos/passarela-lgbt-capa.jpg",
    "/projetos/passarela-lgbt-1.jpg",
    "/projetos/passarela-lgbt-2.jpg",
    "/projetos/passarela-lgbt-3.jpg",
    "/projetos/passarela-lgbt-4.jpg",
    "/projetos/passarela-lgbt-5.jpg",
    "/projetos/passarela-lgbt-6.jpg",
    "/projetos/passarela-lgbt-7.jpg",
    "/projetos/passarela-lgbt-8.jpg",
    "/projetos/passarela-lgbt-9.jpg",
  ],
  cardHeight: "md",
},
  {
  slug: "festa-junina-penitenciaria-edson-cavalcanti",
  tag: "AÇÃO CULTURAL",
  title: "Festa Junina no Cárcere: Cultura, Convivência e Afeto",
  location: "PENITENCIÁRIA EDSON CAVALCANTI",
  date: "JUN 2026",
  summary:
    "Uma celebração junina que levou cultura, alegria e momentos de convivência para dentro do ambiente prisional, valorizando a interação e a humanização.",
  description: [
    "Em junho de 2026, na Penitenciária Professor Edson Cavalcanti, em Juiz de Fora, promovemos uma celebração junina com atividades culturais e momentos de convivência.",
    "A ação proporcionou aos participantes um momento de descontração, interação e celebração de uma tradição tão presente na cultura brasileira.",
    "Mais do que uma festa, a iniciativa buscou criar um espaço de convivência respeitosa e leveza dentro do ambiente prisional, reforçando a importância de ações que também olham para a pessoa por trás da pena.",
  ],
  imageUrl: "/projetos/festa-junina-capa.jpg",
  gallery: [
    "/projetos/festa-junina-capa.jpg",
    "/projetos/festa-junina-1.jpg",
    "/projetos/festa-junina-2.jpg",
    "/projetos/festa-junina-3.jpg",
    "/projetos/festa-junina-4.jpg",
  ],
  cardHeight: "sm",
},
{
  slug: "passarela-da-liberdade-dia-da-mulher",
  tag: "EMPODERAMENTO",
  title: "Passarela da Liberdade: Identidade, Autoestima e Dignidade",
  location: "FACULDADE ESTÁCIO — JUIZ DE FORA",
  date: "MAR 2026",
  summary:
    "Uma ação dedicada à valorização da mulher privada de liberdade, promovendo identidade, autoestima, expressão e reconhecimento de sua dignidade.",
  description: [
    "Realizado na Faculdade Estácio, em Juiz de Fora, o Projeto Passarela da Liberdade promoveu um encontro dedicado às mulheres privadas de liberdade, criando um espaço para expressão, cuidado e valorização de suas identidades.",
    "A iniciativa reuniu momentos de conversa, acolhimento e atividades voltadas à autoestima, permitindo que cada participante pudesse se reconhecer para além da condição de pessoa privada de liberdade.",
    "Mais do que uma ação pontual, o projeto buscou reforçar a importância de enxergar a mulher em sua individualidade, história e dignidade, levando para dentro do ambiente prisional um momento de expressão, respeito e valorização.",
  ],
  imageUrl: "/projetos/passarela-mulher-capa.jpg",
  gallery: [
    "/projetos/passarela-mulher-capa.jpg",
    "/projetos/passarela-mulher-1.jpg",
    "/projetos/passarela-mulher-2.jpg",
    "/projetos/passarela-mulher-3.jpg",
    "/projetos/passarela-mulher-4.jpg",
  ],
  cardHeight: "md",
},
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}