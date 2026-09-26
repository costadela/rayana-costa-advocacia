# ⚖️ Rayana Costa Advocacia & Consultoria Jurídica

> Plataforma web de alta performance desenvolvida para a **Dra. Rayana Costa** (OAB/MG 192.542), especialista em **Execução Penal e Advocacia Criminal**.

O ecossistema reúne portal institucional para captação estratégica de clientes, exibição de projetos sociais e de direitos humanos, vitrine de cursos sobre prática em Execução Penal e painel de controle administrativo integrado.

---

## 📌 Visão Geral e Módulos

A aplicação foi projetada sob uma estética editorial minimalista de tom escuro, focada em autoridade, transparência e humanização na área criminal.

### 🌟 Módulos e Rotas
- **Home / Institucional (`/`):** Apresentação técnica, métricas de autoridade com contadores animados, áreas de atuação e perguntas frequentes.
- **Projetos Sociais (`/projetos-sociais`):** Catálogo de iniciativas comunitárias e de direitos humanos no sistema prisional, com rotas dinâmicas (`/projetos-sociais/[slug]`) e suporte a layout/galeria personalizados.
- **Cursos & Capacitação (`/cursos`):** Vitrine e canal de vendas/matrículas para cursos voltados ao ensino da prática em Execução Penal.
- **Atendimento Jurídico & Captação (`/contato`):** Formulário de captação de leads em tempo real com validação de dados e direcionamento para atendimento emergencial.
- **Política de Privacidade (`/politica-de-privacidade`):** Termos e diretrizes de privacidade e conformidade com a LGPD.
- **Autenticação Admin (`/admin/login`):** Tela de acesso restrito para login de administradores.
- **Painel Administrativo (`/admin`):** Dashboard privado (`AdminDashboard.tsx`) para gestão e acompanhamento de leads e conteúdos.

---

## 🛠️ Tecnologias e Arquitetura

### **Core & backend**
- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
- **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
- **Banco de Dados & Autenticação:** [Supabase](https://supabase.com/) (`/lib/supabase/client.ts` e `projects.ts`)

### **Componentes Reutilizáveis (`/src/components`)**
- `Navbar.tsx` & `Footer.tsx`: Componentes globais de navegação e rodapé.
- `ProjectCard.tsx`: Card reaproveitável com efeito de hover, grayscale dinâmico e suporte a diferentes proporções.
- `CountUp.tsx`: Animação fluida de contadores numéricos para exibição de métricas e autoridade.
- `Reveal.tsx`: Wrapper para revelação suave de elementos durante a rolagem (scroll animation).
- `FaqAccordion.tsx`: Sistema interativo de perguntas e respostas expansíveis.
- `LeadForm.tsx`: Formulário integrado para captação e gerenciamento de contatos jurídicos.
