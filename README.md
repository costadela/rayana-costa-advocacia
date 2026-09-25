# ⚖️ Rayana Costa Advocacia & Consultoria Jurídica

> Plataforma web de alta performance desenvolvida para a **Dra. Rayana Costa** (OAB/MG 192.542), especialista em **Execução Penal e Advocacia Criminal**.

O ecossistema reúne portal institucional para captação estratégica de clientes, exibição de projetos sociais e de direitos humanos, vitrine de cursos sobre prática em Execução Penal e painel de controle administrativo.

---

## 📌 Visão Geral e Módulos

A aplicação foi projetada sob uma estética editorial minimalista de tom escuro, focada em autoridade, transparência e humanização na área criminal.

### 🌟 Módulos Principais
- **Home / Institutional Page (`/`):** Apresentação técnica, métricas de autoridade com contadores animados, áreas de atuação e perguntas frequentes.
- **Projetos Sociais (`/projetos-sociais`):** Catálogo de iniciativas comunitárias e de direitos humanos no sistema prisional, com rotas dinâmicas (`/projetos-sociais/[slug]`) e galerias de fotos em grade estável.
- **Cursos & Capacitação (`/cursos`):** Vitrine e canal de vendas/matrículas para cursos voltados ao ensino da prática em Execução Penal.
- **Atendimento Jurídico & Captação (`/contato`):** Formulário de captação de leads em tempo real com validação de dados e direcionamento para atendimento emergencial.
- **Painel Administrativo (`/admin`):** Dashboard restrito para acompanhamento de leads e suporte operacional.

---

## 🛠️ Tecnologias e Ferramentas

### **Core & Estilização**
- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
- **Estilização:** [Tailwind CSS](https://tailwindcss.com/) e PostCSS

### **Componentes e Utilitários**
- `ProjectCard.tsx`: Card reaproveitável com efeito de hover, grayscale dinâmico e suporte a diferentes proporções.
- `CountUp.tsx`: Animação fluida de contadores numéricos para exibição de métricas e autoridade.
- `Reveal.tsx`: Componente wrapper para revelação suave de elementos durante a rolagem (scroll animation).
- `FaqAccordion.tsx`: Sistema interativo de perguntas e respostas com colapso expansível.
- `LeadForm.tsx`: Formulário integrado para captação e gerenciamento de contatos jurídicos.

---

## 📜 Licença e Propriedade

Este software é de propriedade privada de **Rayana Costa Advocacia e Consultoria Jurídica**. Todos os direitos autorais e de marca estão reservados.