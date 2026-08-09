import SectionHeader from './SectionHeader';
import SkillCard from './SkillCard';
import ScrollReveal from './ScrollReveal';
import { skills } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 border-b-2 border-ink py-24 sm:py-28">
      <div className="shell">
        <ScrollReveal>
          <SectionHeader
            index="01"
            kicker="The Toolkit"
            title={
              <>
               Compact for <span className="headline text-accent">full-stack</span> delivery.
              </>
            }
            description="The tools I use most often, grouped by how they support the build."
          />
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <SkillCard groups={skills} />
        </ScrollReveal>
      </div>
    </section>
  );
}