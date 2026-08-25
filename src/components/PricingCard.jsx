import { Check, Sparkle } from "lucide-react";
import Button from "./Button";
import RevealOnScroll from "./RevealOnScroll";

export default function PricingCard({ plan, index = 0, onSelect }) {
  const { name, price, currency, period, description, features, popular, cta } = plan;

  return (
    <RevealOnScroll delay={index * 0.08} className="h-full">
      <div
        className={`relative flex h-full flex-col rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 ${
          popular
            ? "bg-navy-950 text-white shadow-glow border border-electric-500/40"
            : "bg-white text-ink border border-line shadow-card hover:shadow-card-hover"
        }`}
      >
        {popular && (
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-electric-500 px-4 py-1.5 text-xs font-semibold tracking-wide text-white shadow-card">
            <Sparkle size={13} /> PLUS POPULAIRE
          </span>
        )}

        <h3 className="font-display text-xl font-semibold">{name}</h3>
        <p className={`mt-2 text-sm leading-relaxed ${popular ? "text-slate-300" : "text-slate-600"}`}>
          {description}
        </p>

        <div className="mt-6 flex items-baseline gap-1.5">
          <span className="font-display text-3xl font-semibold">{price}</span>
          {currency && <span className="text-sm font-medium opacity-70">{currency}</span>}
        </div>
        <span className={`text-xs font-mono ${popular ? "text-slate-400" : "text-slate-500"}`}>
          {period}
        </span>

        <ul className="mt-7 flex flex-1 flex-col gap-3">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5 text-sm">
              <Check
                size={16}
                strokeWidth={2.5}
                className={`mt-0.5 shrink-0 ${popular ? "text-electric-400" : "text-electric-600"}`}
              />
              <span className={popular ? "text-slate-200" : "text-slate-600"}>{feature}</span>
            </li>
          ))}
        </ul>

        <Button
          variant={popular ? "primary" : "secondary"}
          className={`mt-8 w-full ${popular ? "!bg-electric-500 hover:!bg-electric-400" : ""}`}
          onClick={() => onSelect?.(plan)}
        >
          {cta}
        </Button>
      </div>
    </RevealOnScroll>
  );
}
