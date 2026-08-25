import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import Icon from "../components/Icon";
import RevealOnScroll from "../components/RevealOnScroll";
import { whyChooseUs } from "../data/constants";

export default function About() {
  return (
    <section id="a-propos" className="relative overflow-hidden bg-navy-950 py-24 md:py-32">
      <div className="absolute inset-0 bg-grid-dark bg-grid opacity-60 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_10%,black,transparent)]" />

      <Container className="relative">
        <SectionTitle
          eyebrow="Pourquoi_investir.md"
          title="Pourquoi choisir un site professionnel ?"
          description="Un site n'est pas une dépense : c'est l'outil qui travaille pour vous, 24h/24, même quand vous êtes occupé ailleurs."
          dark
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((item, index) => (
            <RevealOnScroll key={item.title} delay={(index % 4) * 0.06}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors duration-300 hover:border-electric-400/40 hover:bg-white/[0.05]">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-electric-500/15 text-electric-300">
                  <Icon name={item.icon} size={19} strokeWidth={1.8} />
                </div>
                <h3 className="font-display text-[15px] font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.description}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
