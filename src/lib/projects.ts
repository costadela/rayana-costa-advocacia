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
    title: "Dia dos Pais no Cárcere: Conexão, Afeto e Acolhimento Infantil",
    location: "JUIZ DE FORA",
    date: "AGO 2026",
    summary:
      "Um dia especial dedicado ao reencontro familiar, permitindo que os filhos visitassem seus pais em cumprimento de pena, desenhassem, brincassem e os presenteassem.",
    description: [
      "Realizada em agosto de 2026 em Juiz de Fora, esta ação social foi planejada para promover a preservação dos laços afetivos e o direito à convivência familiar no ambiente prisional.",
      "Proporcionamos um espaço acolhedor onde as crianças puderam passar o dia com seus pais, realizando atividades lúdicas como desenhos, brincadeiras e a entrega de presentes preparados por elas.",
      "Iniciativas como essa reforçam que a humanização da Execução Penal passa pelo olhar sensível para a infância e pelo fortalecimento da estrutura familiar."
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
    title: "Inauguração do Posto de Trabalho no Anexo Feminino Eliane Beti",
    location: "JUIZ DE FORA",
    date: "AGO 2026",
    summary:
      "Abertura e estruturação de novos postos de trabalho voltados à remição de pena pela atividade laboral e qualificação profissional de mulheres privadas de liberdade.",
    description: [
      "No Anexo Feminino Eliane Beti, em Juiz de Fora, acompanhamos a inauguração de frentes de trabalho dedicadas às acauteladas.",
      "O trabalho no sistema prisional é uma das ferramentas mais eficazes para a remição de pena, oferecendo dignidade, aprendizado prático e preparação concreta para o retorno ao convívio social.",
      "Nossa atuação visa assegurar que o direito ao trabalho seja garantido com conformidade jurídica e respeito aos direitos fundamentais."
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
    title: "Projeto Passarela da Liberdade: Inclusão e Cidadania no Pavilhão LGBT",
    location: "UNICADEMIA — JUIZ DE FORA",
    date: "JUN 2026",
    summary:
      "Edição especial do projeto focada na valorização da identidade, autoimagem e respeito à diversidade no ambiente prisional.",
    description: [
      "Realizado no Centro Universitário UniAcademia, em Juiz de Fora, o Projeto Passarela da Liberdade direcionou suas atenções ao Pavilhão LGBT.",
      "A iniciativa debateu cidadania, direitos fundamentais e dignidade da pessoa humana, promovendo um espaço de expressão e combate ao estigma enfrentado pela população vulnerabilizada no sistema penal.",
      "O evento contou com dinâmicas de autoestima, acolhimento e suporte jurídico direcionado."
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
    title: "Integração Cultural e Convivência: Festa Junina na Penitenciária",
    location: "PENITENCIÁRIA EDSON CAVALCANTI",
    date: "JUN 2026",
    summary:
      "Momento de celebração, resgate cultural e humanização do espaço prisional com atividades festivas e momentos de descontração.",
    description: [
      "Na Penitenciária Professor Edson Cavalcanti, em Juiz de Fora, promovemos uma celebração junina comunitária.",
      "Atividades culturais e festivas dentro do ambiente acautelatório desempenham papel fundamental na redução de tensões, no fortalecimento da empatia e na promoção de um ambiente mais humanizado.",
      "O evento proporcionou aos participantes momentos de convivência respeitosa e resgate da autoimagem."
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
    title: "Projeto Passarela da Liberdade: Especial Dia Internacional da Mulher",
    location: "FACULDADE ESTÁCIO — JUIZ DE FORA",
    date: "MAR 2026",
    summary:
      "Ação voltada para a autoimagem, dignidade e garantias jurídicas das mulheres no sistema prisional em comemoração ao Mês da Mulher.",
    description: [
      "Sediado na Faculdade Estácio de Sá, em Juiz de Fora, o evento celebrou o Dia Internacional da Mulher com foco nas especificidades da maternidade e saúde da mulher privada de liberdade.",
      "A programação envolveu rodas de conversa sobre direitos fundamentais das acauteladas, além de atividades voltadas ao resgate da dignidade e autoestima.",
      "Uma atuação indispensável para visibilizar pautas femininas no âmbito do Direito Penal e da Execução de Penas."
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