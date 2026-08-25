import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data/constants";

export default function Services() {
  return (
    <section id="services" className="bg-paper py-24 md:py-32">
      <Container>
        <SectionTitle
          eyebrow="<Services />"
          title="Des solutions web adaptées à votre activité"
          description="Quel que soit votre secteur, je construis un site pensé pour vos objectifs et pour les personnes qui doivent vous trouver et vous faire confiance."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard key={service.id} index={index} {...service} />
          ))}
        </div>
      </Container>
    </section>
  );
}
