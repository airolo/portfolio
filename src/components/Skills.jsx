import SectionHeading from './SectionHeading';
import SkillCard from './SkillCard';
import ScrollReveal from './ScrollReveal';
import { skills } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 border-y border-zinc-200/70 py-24 dark:border-zinc-800">
      <div className="section-shell">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Skills"
            title="A compact stack for full-stack delivery."
            description="The tools I use most often, grouped by how they support the build."
          />
        </ScrollReveal>

        <ScrollReveal delay={0.08} className="mt-12">
          <SkillCard title="Tech Stack" groups={skills} />
        </ScrollReveal>
      </div>
    </section>
  );
}
