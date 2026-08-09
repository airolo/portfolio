import { useState } from 'react';
import SectionHeader from './SectionHeader';
import ProjectCard from './ProjectCard';
import ScrollReveal from './ScrollReveal';
import { projects } from '../data/portfolioData';
import { FiArrowDownRight } from 'react-icons/fi';

const INITIAL_COUNT = 4;

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? projects : projects.slice(0, INITIAL_COUNT);

  return (
    <section id="projects" className="scroll-mt-24 py-24 sm:py-28">
      <div className="shell">
        <ScrollReveal>
          <SectionHeader
            index="02"
            kicker="Selected Work"
            title={
              <>
                Projects with a  <span className="headline text-accent">product</span> shape.
              </>
            }
            description="A closer look at the systems I have built, from full-stack portals to focused web experiences."
          />
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {visible.map((project, index) => (
            <ScrollReveal key={project.title} delay={0.08 + index * 0.06} className="h-full">
              <ProjectCard project={project} number={index + 1} />
            </ScrollReveal>
          ))}
        </div>

        {projects.length > INITIAL_COUNT && (
          <div className="mt-12 text-center">
            <button type="button" className="btn-outline" onClick={() => setShowAll((prev) => !prev)}>
              {showAll ? 'Show Less' : 'View All Projects'} <FiArrowDownRight />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}