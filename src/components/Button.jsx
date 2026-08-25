import { MessageCircle, ArrowRight } from "lucide-react";

const variants = {
  primary:
    "bg-navy-900 text-white hover:bg-electric-600 shadow-card hover:shadow-card-hover",
  secondary:
    "bg-white text-navy-900 border border-line hover:border-navy-900 shadow-card",
  outline:
    "bg-transparent text-white border border-white/30 hover:border-white hover:bg-white/10",
  whatsapp: "bg-wa text-white hover:bg-[#1EBE5A] shadow-card hover:shadow-card-hover",
};

const sizes = {
  md: "px-5 py-3 text-sm",
  lg: "px-7 py-4 text-base",
};

/**
 * Button.jsx — bouton réutilisable.
 * <Button variant="primary" size="lg" href="#contact">Démarrer mon projet</Button>
 * <Button variant="whatsapp" as="a" href="https://wa.me/..." icon="whatsapp">Écrire sur WhatsApp</Button>
 */
export default function Button({
  children,
  variant = "primary",
  size = "md",
  icon,
  as,
  href,
  onClick,
  type = "button",
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-all duration-300 whitespace-nowrap";
  const classes = `${base} ${variants[variant] || variants.primary} ${
    sizes[size] || sizes.md
  } ${className}`;

  const content = (
    <>
      {icon === "whatsapp" && <MessageCircle size={18} strokeWidth={2} />}
      <span>{children}</span>
      {icon === "arrow" && (
        <ArrowRight
          size={16}
          strokeWidth={2.5}
          className="transition-transform duration-300 group-hover:translate-x-0.5"
        />
      )}
    </>
  );

  const Tag = as || (href ? "a" : "button");

  if (Tag === "a") {
    return (
      <a href={href} className={`group ${classes}`} onClick={onClick} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={`group ${classes}`} onClick={onClick} {...props}>
      {content}
    </button>
  );
}
