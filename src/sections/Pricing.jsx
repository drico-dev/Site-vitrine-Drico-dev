import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import PricingCard from "../components/PricingCard";
import { pricingPlans } from "../data/constants";

/**
 * onPlanSelect(planId) est transmis par App.jsx pour pré-remplir le
 * formulaire de contact avec la formule choisie et faire défiler vers lui.
 */
export default function Pricing({ onPlanSelect }) {
  const handleSelect = (plan) => {
    onPlanSelect?.(plan.id);
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="formules" className="bg-white py-24 md:py-32">
      <Container>
        <SectionTitle
          align="center"
          eyebrow="Formules"
          title="Choisissez la formule adaptée à votre activité"
          description="Des formules claires, sans frais cachés. Besoin d'un conseil pour choisir ? Écrivez-moi directement sur WhatsApp."
          className="mx-auto"
        />

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:items-stretch">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={plan.id} plan={plan} index={index} onSelect={handleSelect} />
          ))}
        </div>
      </Container>
    </section>
  );
}
