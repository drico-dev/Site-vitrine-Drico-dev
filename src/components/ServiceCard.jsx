import Icon from "./Icon";
import RevealOnScroll from "./RevealOnScroll";

export default function ServiceCard({ icon, title, description, index = 0 }) {
  return (
    <RevealOnScroll delay={(index % 4) * 0.06} className="h-full">
      <div className="group h-full rounded-2xl border border-line bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover hover:border-electric-300">
        <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900 text-white transition-colors duration-300 group-hover:bg-electric-600">
          <Icon name={icon} size={20} strokeWidth={1.8} />
        </div>
        <h3 className="mb-2 font-display text-lg font-semibold text-ink">{title}</h3>
        <p className="text-[15px] leading-relaxed text-slate-600">{description}</p>
      </div>
    </RevealOnScroll>
  );
}
