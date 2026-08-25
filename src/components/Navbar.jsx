import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Container from "./Container";
import Button from "./Button";
import { personalInfo, navLinks } from "../data/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleLinkClick = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-line shadow-sm"
          : "bg-white/40 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <Container className="flex h-[72px] items-center justify-between">
        <a href="#accueil" className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight text-ink">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-navy-900 text-sm font-bold text-white">
            {personalInfo.brand[0]}
          </span>
          {personalInfo.brand}
          <span className="text-electric-600">{personalInfo.brandSuffix}</span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-navy-900"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="#contact" variant="primary" size="md" icon="arrow">
            Démarrer mon projet
          </Button>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg text-navy-900 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-line bg-white lg:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25, delay: i * 0.04 }}
                  className="rounded-lg px-3 py-3 text-[15px] font-medium text-navy-900 hover:bg-paper"
                >
                  {link.label}
                </motion.a>
              ))}
              <Button
                href="#contact"
                variant="primary"
                size="md"
                className="mt-3 w-full"
                onClick={handleLinkClick}
              >
                Démarrer mon projet
              </Button>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
