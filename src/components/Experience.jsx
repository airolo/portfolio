import SectionHeading from './SectionHeading';
import TimelineItem from './TimelineItem';
import ScrollReveal from './ScrollReveal';
import { experience } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 border-y border-zinc-200/70 py-24 dark:border-zinc-800">
      <div className="section-shell">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Experience"
            title="Education & Internships"
            description=""
          />
        </ScrollReveal>

        <ScrollReveal delay={0.08} className="mt-12 rounded-[2rem] border border-zinc-200 bg-white/60 p-6 dark:border-zinc-800 dark:bg-zinc-900/60 sm:p-8">
          {experience.map((item, index) => (
            <TimelineItem key={item.title} item={item} isLast={index === experience.length - 1} />
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
