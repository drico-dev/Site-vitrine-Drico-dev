import { motion } from "framer-motion";

/**
 * SectionTitle.jsx
 * eyebrow : petit label mono-espace au-dessus du titre (ex: "<Services />")
 * title   : titre principal (string ou JSX pour mise en forme partielle)
 * align   : "left" | "center"
 * dark    : true si utilisé sur un fond sombre
 */
export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
  className = "",
}) {
  const alignClass = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`flex flex-col gap-4 max-w-2xl ${alignClass} ${className}`}
    >
      {eyebrow && (
        <span className={`eyebrow ${dark ? "text-electric-300 before:bg-electric-400" : ""}`}>
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.12] tracking-tight font-semibold ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`text-base md:text-lg leading-relaxed ${dark ? "text-slate-300" : "text-slate-600"}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
