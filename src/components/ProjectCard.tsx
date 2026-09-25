import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/lib/projects";

const heightClasses: Record<Project["cardHeight"], string> = {
  sm: "h-48",
  md: "h-64",
  lg: "h-80",
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projetos-sociais/${project.slug}`}
      className="group block w-full bg-[#0e0e0d] border border-white/10 rounded-none overflow-hidden hover:border-gold/50 transition-all duration-300 mb-6 break-inside-avoid"
    >
      {/* Imagem em P&B que fica Colorida ao Passar o Mouse */}
      <div
        className={`relative w-full ${
          heightClasses[project.cardHeight]
        } bg-zinc-900 overflow-hidden`}
      >
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover grayscale group-hover:grayscale-0 contrast-105 opacity-85 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Tag no canto superior esquerdo */}
        <span className="absolute top-3 left-3 bg-black/80 backdrop-blur-sm text-gold border border-gold/30 text-[9px] font-mono tracking-widest uppercase px-2.5 py-1">
          {project.tag}
        </span>
      </div>

      {/* Conteúdo do Card */}
      <div className="p-5 space-y-3">
        <p className="text-[10px] font-mono text-offwhite/50 tracking-widest uppercase">
          {project.location} — {project.date}
        </p>

        <h3 className="font-serif text-lg text-offwhite font-normal leading-snug group-hover:text-gold transition-colors">
          {project.title}
        </h3>

        <p className="text-xs text-offwhite/65 leading-relaxed font-light line-clamp-3">
          {project.summary}
        </p>

        <div className="pt-3 border-t border-white/10 flex items-center justify-end text-[10px] font-mono text-gold">
          <span className="group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
            Ver detalhes <span className="text-xs">→</span>
          </span>
        </div>
      </div>
    </Link>
  );
}