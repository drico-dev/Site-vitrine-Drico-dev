import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import TestimonialCard from "../components/TestimonialCard";
import { testimonials } from "../data/constants";

export default function Testimonials() {
  return (
    <section className="bg-paper py-24 md:py-32">
      <Container>
        <SectionTitle
          eyebrow="Témoignages"
          title="Ils m'ont fait confiance"
          description="Quelques retours d'entreprises accompagnées dans la création de leur site."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
