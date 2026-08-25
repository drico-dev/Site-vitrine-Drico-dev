import { motion } from "framer-motion";
import Container from "../components/Container";
import Button from "../components/Button";
import CodeWindow from "../components/CodeWindow";
import { personalInfo } from "../data/constants";

const easing = [0.16, 1, 0.3, 1];

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative overflow-hidden bg-white pt-40 pb-24 md:pt-48 md:pb-32"
    >
      <div className="absolute inset-0 bg-grid-light bg-grid [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />

      <Container className="relative grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow"
          >
            {personalInfo.role} · {personalInfo.location}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease: easing }}
            className="mt-5 text-4xl font-semibold leading-[1.08] tracking-tight text-ink md:text-5xl lg:text-[3.4rem]"
          >
            Votre activité mérite une présence en ligne à la hauteur de vos{" "}
            <span className="text-electric-600">ambitions</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18, ease: easing }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600"
          >
            Je conçois des sites internet professionnels pour restaurants, hôtels,
            entreprises, commerces et entrepreneurs afin de leur permettre de
            développer leur visibilité et convertir leurs visiteurs en clients.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28, ease: easing }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Button href="#contact" variant="primary" size="lg" icon="arrow">
              Créer mon site
            </Button>
            <Button href="#realisations" variant="secondary" size="lg">
              Voir mes réalisations
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 flex items-center gap-6 text-sm text-slate-500"
          >
            <div className="flex -space-x-2.5">
              {["RC", "AK", "FD"].map((initials) => (
                <span
                  key={initials}
                  className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-navy-100 font-mono text-[11px] font-medium text-navy-800"
                >
                  {initials}
                </span>
              ))}
            </div>
            <span>Déjà utilisé par des entreprises locales pour se lancer en ligne</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: easing }}
          className="flex justify-center lg:justify-end"
        >
          <CodeWindow />
        </motion.div>
      </Container>
    </section>
  );
}
