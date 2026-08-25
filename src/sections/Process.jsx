import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import RevealOnScroll from "../components/RevealOnScroll";
import Icon from "../components/Icon";
import { processSteps } from "../data/constants";

export default function Process() {
  return (
    <section className="bg-white py-24 md:py-32">
      <Container>
        <SectionTitle
          eyebrow="Le processus"
          title="Comment se déroule votre projet ?"
          description="Un déroulé simple et transparent, du premier échange jusqu'à la mise en ligne de votre site."
        />

        <div className="relative mt-16 grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-6">
          <div
            className="absolute left-0 right-0 top-6 hidden h-px bg-line md:block"
            aria-hidden="true"
          />

          {processSteps.map((step, index) => (
            <RevealOnScroll key={step.number} delay={index * 0.1} className="relative">
              <div className="flex items-center gap-3 md:block">
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-line bg-white font-mono text-sm font-semibold text-electric-600 shadow-card md:mb-6">
                  {step.number}
                </div>
                <div className="md:hidden font-display text-lg font-semibold text-ink">
                  {step.title}
                </div>
              </div>

              <div className="mt-0 md:mt-0">
                <div className="mb-2 hidden items-center gap-2 md:flex">
                  <Icon name={step.icon} size={18} className="text-electric-600" />
                  <h3 className="font-display text-lg font-semibold text-ink">{step.title}</h3>
                </div>
                <p className="mt-2 text-[15px] leading-relaxed text-slate-600 md:mt-0">
                  {step.description}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
