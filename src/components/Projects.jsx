import SectionHeading from './SectionHeading';
import ProjectCard from './ProjectCard';
import ScrollReveal from './ScrollReveal';
import { projects } from '../data/portfolioData';

export default function Projects() {
  const featuredProject = projects[0];

  return (
    <section id="projects" className="scroll-mt-24 py-24 sm:py-28">
      <div className="section-shell">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Projects"
            title="Project work with real product shape."
            description="A closer look at the systems I have built, from full-stack portals to focused web experiences."
          />
        </ScrollReveal>

        <ScrollReveal delay={0.08} className="mt-12">
          <ProjectCard project={featuredProject} featured />
        </ScrollReveal>
      </div>
    </section>
  );
}
