import SectionHeading from './SectionHeading';
import ProjectCard from './ProjectCard';
import { projects } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-24 sm:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Projects"
          title="Designed to be practical, polished, and clear."
          description=""
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
