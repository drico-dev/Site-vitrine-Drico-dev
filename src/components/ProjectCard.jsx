import { ArrowUpRight } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";

// Dégradés distincts par catégorie pour les visuels placeholder des projets.
const gradients = {
  restaurant: "from-[#1B3B73] to-[#3D7EFF]",
  hotel: "from-[#0A1A38] to-[#4C6EA8]",
  boutique: "from-[#2A63E0] to-[#8FB4FF]",
  entreprise: "from-[#070F22] to-[#1B3B73]",
  portfolio: "from-[#1F4CB8] to-[#6EA1FF]",
};

export default function ProjectCard({ project, index = 0 }) {
  const { name, category, description, link, image } = project;
  const gradient = gradients[image] || gradients.entreprise;

  return (
    <RevealOnScroll delay={(index % 3) * 0.08} className="h-full">
      <a
        href={link}
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
      >
        <div
          className={`relative h-48 w-full overflow-hidden bg-gradient-to-br ${gradient} bg-grid-dark bg-grid`}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display text-2xl font-semibold text-white/90 tracking-tight">
              {name}
            </span>
          </div>
          <span className="absolute top-4 left-4 rounded-full bg-white/15 px-3 py-1 text-[11px] font-mono text-white backdrop-blur-sm">
            {category}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <h3 className="font-display text-lg font-semibold text-ink">{name}</h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{description}</p>
          <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-electric-600">
            Voir le projet
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </span>
        </div>
      </a>
    </RevealOnScroll>
  );
}
