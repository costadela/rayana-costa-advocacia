import type { Metadata } from "next";
import Reveal from "../../../components/Reveal";
import ProjectCard from "../../../components/ProjectCard";
import { projects, Project } from "../../../lib/projects";

export const metadata: Metadata = {
  title: "Projetos Sociais | Dra. Rayana Costa",
  description:
    "Estudos de caso, iniciativas sociais e defesa técnica humanizada na Execução Penal.",
};

export default function ProjetosSociaisPage() {
  return (
    <main className="min-h-screen bg-black text-offwhite">
      {/* CABEÇALHO EDITORIAL */}
      <section className="bg-[#0e0e0d] border-b border-gold/15 pt-36 sm:pt-40 pb-20 px-6 sm:px-12">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 items-center">
              {/* Coluna da Esquerda: Subtítulo e Título */}
              <div className="md:col-span-6 space-y-4">
                <p className="text-gold font-mono text-xs tracking-[0.2em] uppercase font-medium">
                  CONTRIBUIÇÃO SOCIAL
                </p>
                <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-offwhite font-normal leading-[1.15]">
                  Onde o Direito encontra a vida.
                </h1>
              </div>

              {/* Coluna da Direita: Texto Explicativo Alinhado */}
              <div className="md:col-span-6 text-offwhite/75 text-sm sm:text-base leading-relaxed font-light space-y-4">
                <p>
                  Minha atuação social nasce de uma crença simples: o Direito só cumpre verdadeiramente seu papel quando alcança as pessoas.
                </p>
                <p>
                  Por isso, desenvolvo projetos voltados à ressocialização, à preservação dos vínculos familiares e à valorização da dignidade, levando informação, acolhimento e cidadania para além do espaço tradicional da advocacia. São iniciativas que buscam olhar para a pessoa para além do processo e contribuir para a construção de novos caminhos.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SESSÃO DA GRELHA DE PROJETOS */}
      <section className="bg-black py-20 px-6 sm:px-12">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
              {projects.map((project: Project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}