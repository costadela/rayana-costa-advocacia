import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { projects, getProjectBySlug, Project } from "@/lib/projects";

export async function generateStaticParams() {
  return projects.map((project: Project) => ({ slug: project.slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

const heightPatterns = [
  "h-96",
  "h-64",
  "h-80",
  "h-56",
  "h-84",
  "h-64",
  "h-72",
];

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project: Project | undefined = getProjectBySlug(slug);

  if (!project) return notFound();

  return (
    <main className="min-h-screen bg-black text-offwhite">
      {/* Cabeçalho */}
      <section className="bg-[#0e0e0d] border-b border-gold/15 pt-36 sm:pt-40 pb-20 px-6 sm:px-12">
        <div className="max-w-5xl mx-auto space-y-8">
          <Reveal>
            <Link
              href="/projetos-sociais"
              className="inline-flex items-center gap-1.5 text-xs text-offwhite/60 hover:text-gold transition-colors font-mono tracking-wider uppercase"
            >
              ← Voltar para Projetos Sociais
            </Link>
          </Reveal>

          <Reveal>
            <div className="space-y-6">
              {/* Tag e Localização */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-[10px] text-gold font-mono tracking-widest uppercase px-2.5 py-1 border border-gold/30 bg-black/60">
                  {project.tag}
                </span>
                <span className="text-offwhite/30 text-xs">•</span>
                <p className="text-xs font-mono text-offwhite/60 tracking-wider uppercase">
                  {project.location} — {project.date}
                </p>
              </div>

              {/* Título Principal */}
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-offwhite font-normal leading-[1.15]">
                {project.title}
              </h1>

              {/* Parágrafos da Descrição */}
              <div className="space-y-4 pt-6 border-t border-white/10 max-w-3xl">
                {project.description.map((paragraph: string, i: number) => (
                  <p
                    key={i}
                    className="text-sm sm:text-base text-offwhite/80 leading-relaxed font-light"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Galeria */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="py-20 px-6 sm:px-12 bg-black">
          <div className="max-w-5xl mx-auto">
            <Reveal>
              <div className="space-y-8">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <p className="text-xs font-mono text-gold uppercase tracking-widest">
                    Registros da Ação
                  </p>
                  <p className="text-[10px] font-mono text-offwhite/40 uppercase tracking-widest">
                    {project.gallery.length} FOTOS
                  </p>
                </div>

                <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 [column-fill:_balance]">
                  {project.gallery.map((photoUrl: string, index: number) => {
                    const heightClass =
                      heightPatterns[index % heightPatterns.length];

                    return (
                      <div
                        key={index}
                        className={`relative w-full ${heightClass} bg-[#111113] border border-white/10 overflow-hidden group rounded-none break-inside-avoid hover:border-gold/40 transition-all duration-300`}
                      >
                        <Image
                          src={photoUrl}
                          alt={`Registro ${index + 1} - ${project.title}`}
                          fill
                          className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute bottom-2 right-2 bg-black/80 backdrop-blur-sm px-2 py-0.5 text-[9px] font-mono text-offwhite/40 border border-white/10">
                          0{index + 1}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      )}
    </main>
  );
}