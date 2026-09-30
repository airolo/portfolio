import SectionHeader from './SectionHeader';
import SkillCard from './SkillCard';
import ScrollReveal from './ScrollReveal';
import { skills } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 border-t border-line py-20 sm:py-28">
      <div className="shell">
        <ScrollReveal>
          <SectionHeader
            kicker="Skills"
            title="Tools I work with."
            description="Grouped by where they sit in a build — interface, server, data, and the tools around them."
          />
        </ScrollReveal>

        <ScrollReveal delay={0.06}>
          <SkillCard groups={skills} />
        </ScrollReveal>
      </div>
    </section>
  );
}
