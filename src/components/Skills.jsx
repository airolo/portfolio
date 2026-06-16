import SectionHeading from './SectionHeading';
import SkillCard from './SkillCard';
import { skills } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 border-y border-zinc-200/70 py-24 dark:border-zinc-800">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Skills"
          title="A focused stack, collected into one card."
          description=""
        />

        <div className="mt-12">
          <SkillCard title="Tech Stack" groups={skills} />
        </div>
      </div>
    </section>
  );
}
