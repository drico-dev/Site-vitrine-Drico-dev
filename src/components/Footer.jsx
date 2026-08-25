import Container from "./Container";
import Icon from "./Icon";
import { personalInfo, navLinks, services, socialLinks } from "../data/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#accueil" className="flex items-center gap-2 font-display text-lg font-semibold text-white">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-electric-500 text-sm font-bold text-white">
                {personalInfo.brand[0]}
              </span>
              {personalInfo.brand}
              <span className="text-electric-400">{personalInfo.brandSuffix}</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              {personalInfo.tagline}. Basé à {personalInfo.location}, j'accompagne les entreprises
              qui veulent être prises au sérieux en ligne.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-colors duration-200 hover:border-electric-400 hover:text-electric-400"
                >
                  <Icon name={social.icon} size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-mono text-xs tracking-wide text-slate-500">Liens rapides</h4>
            <ul className="mt-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-slate-300 transition-colors duration-200 hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs tracking-wide text-slate-500">Services</h4>
            <ul className="mt-4 flex flex-col gap-3">
              {services.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <a href="#services" className="text-sm text-slate-300 transition-colors duration-200 hover:text-white">
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs tracking-wide text-slate-500">Contact</h4>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-slate-300">
              <li>{personalInfo.phone}</li>
              <li>{personalInfo.email}</li>
              <li>{personalInfo.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-slate-500">© {year} {personalInfo.name} — Tous droits réservés.</p>
          <p className="font-mono text-xs text-slate-600">Conçu &amp; développé avec React + Tailwind CSS</p>
        </div>
      </Container>
    </footer>
  );
}
