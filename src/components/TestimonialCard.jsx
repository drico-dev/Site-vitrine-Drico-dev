import { Quote } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";

export default function TestimonialCard({ testimonial, index = 0 }) {
  const { name, role, quote, avatarInitials } = testimonial;

  return (
    <RevealOnScroll delay={index * 0.08} className="h-full">
      <div className="flex h-full flex-col rounded-2xl border border-line bg-white p-7 shadow-card">
        <Quote size={26} className="text-electric-300" strokeWidth={2} />
        <p className="mt-4 flex-1 text-[15px] leading-relaxed text-slate-600">“{quote}”</p>
        <div className="mt-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-900 font-mono text-xs font-medium text-white">
            {avatarInitials}
          </div>
          <div>
            <p className="text-sm font-semibold text-ink">{name}</p>
            <p className="text-xs text-slate-500">{role}</p>
          </div>
        </div>
      </div>
    </RevealOnScroll>
  );
}
