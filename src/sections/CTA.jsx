import Container from "../components/Container";
import Button from "../components/Button";

export default function CTA() {
  const scrollToContact = (e) => {
    e.preventDefault();
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] bg-navy-900 px-8 py-16 text-center md:px-16 md:py-20">
          <div className="absolute inset-0 bg-grid-dark bg-grid opacity-40 [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,black,transparent)]" />
          <div className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-electric-500/30 blur-3xl" />

          <div className="relative">
            <h2 className="mx-auto max-w-xl font-display text-3xl font-semibold leading-tight text-white md:text-4xl">
              Votre prochain site web commence ici.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-slate-300">
              Vous avez une idée, une entreprise ou un projet ? Parlons-en et construisons ensemble
              une présence en ligne professionnelle.
            </p>
            <div className="mt-8 flex justify-center">
              <Button href="#contact" onClick={scrollToContact} variant="primary" size="lg" icon="arrow" className="!bg-electric-500 hover:!bg-electric-400">
                Démarrer mon projet
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
