import { Globe } from "lucide-react";

/**
 * CodeWindow.jsx — élément visuel signature de la Hero section.
 * Représente une fenêtre de navigateur affichant le code d'un site en train
 * d'être écrit, puis la barre d'adresse qui "prend vie" : la métaphore du
 * service vendu (du code -> un site en ligne).
 */
export default function CodeWindow() {
  return (
    <div className="relative w-full max-w-[480px]">
      {/* halo décoratif */}
      <div className="absolute -inset-8 rounded-[2rem] bg-electric-500/20 blur-3xl" aria-hidden="true" />

      <div className="relative animate-floaty rounded-2xl border border-white/10 bg-navy-950 shadow-glow overflow-hidden">
        {/* barre de titre */}
        <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
          <div className="ml-3 flex flex-1 items-center gap-1.5 rounded-md bg-white/5 px-3 py-1 font-mono text-[11px] text-slate-400">
            <Globe size={11} />
            votre-entreprise.com
          </div>
        </div>

        {/* corps "code" */}
        <div className="space-y-2.5 px-5 py-6 font-mono text-[12.5px] leading-relaxed">
          <div className="flex gap-3 text-slate-500">
            <span className="w-4 shrink-0 text-right">1</span>
            <span className="text-electric-300">import</span>
            <span className="text-slate-300">{"{ Hero, Services, Contact }"}</span>
          </div>
          <div className="flex gap-3 text-slate-500">
            <span className="w-4 shrink-0 text-right">2</span>
            <span className="overflow-hidden whitespace-nowrap border-r-2 border-electric-400/70 animate-typeline1">
              <span className="text-electric-300">export default</span>{" "}
              <span className="text-white">function</span>{" "}
              <span className="text-[#8FB4FF]">VotreSite</span>
              <span className="text-slate-400">() {"{"}</span>
            </span>
          </div>
          <div className="flex gap-3 text-slate-500">
            <span className="w-4 shrink-0 text-right">3</span>
            <span className="overflow-hidden whitespace-nowrap border-r-2 border-electric-400/70 animate-typeline2 pl-2">
              <span className="text-slate-400">return</span>{" "}
              <span className="text-[#6EA1FF]">{"<Site"}</span>
            </span>
          </div>
          <div className="flex gap-3 text-slate-500">
            <span className="w-4 shrink-0 text-right">4</span>
            <span className="overflow-hidden whitespace-nowrap border-r-2 border-electric-400/70 animate-typeline3 pl-4">
              <span className="text-emerald-300">client</span>
              <span className="text-slate-400">=</span>
              <span className="text-amber-200">"vous"</span>
            </span>
          </div>
          <div className="flex gap-3 pt-1 text-slate-500">
            <span className="w-4 shrink-0 text-right">5</span>
            <span className="pl-2 text-[#6EA1FF]">{"/>"}</span>
          </div>
          <div className="flex gap-3 text-slate-500">
            <span className="w-4 shrink-0 text-right">6</span>
            <span className="text-slate-400">{"}"}</span>
          </div>

          <div className="mt-4 flex items-center gap-2 rounded-lg border border-emerald-400/20 bg-emerald-400/10 px-3 py-2 font-body text-[12px] font-medium text-emerald-300">
            <span className="h-1.5 w-1.5 animate-pulseSoft rounded-full bg-emerald-400" />
            Site en ligne — build réussi
          </div>
        </div>
      </div>
    </div>
  );
}
