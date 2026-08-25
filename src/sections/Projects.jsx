import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/constants";

export default function Projects() {
  return (
    <section id="realisations" className="bg-paper py-24 md:py-32">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionTitle
            eyebrow="Réalisations"
            title="Quelques projets réalisés"
            description="Un aperçu de sites conçus pour des activités variées — chaque projet est pensé pour le secteur et les objectifs de son propriétaire."
          />
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
