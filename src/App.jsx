import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import About from "./sections/About";
import Process from "./sections/Process";
import Projects from "./sections/Projects";
import Pricing from "./sections/Pricing";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import CTA from "./sections/CTA";

export default function App() {
  // Formule choisie dans la section Pricing, transmise au formulaire de Contact.
  const [selectedPlan, setSelectedPlan] = useState("");

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Process />
        <Projects />
        <Pricing onPlanSelect={setSelectedPlan} />
        <Testimonials />
        <Contact presetPlan={selectedPlan} />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
