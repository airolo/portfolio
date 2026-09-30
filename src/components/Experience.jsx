import SectionHeader from './SectionHeader';
import TimelineItem from './TimelineItem';
import ScrollReveal from './ScrollReveal';
import { experience } from '../data/portfolioData';

export default function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-20 border-t border-line py-20 sm:py-28"
    >
      <div className="shell">
        <ScrollReveal>
          <SectionHeader
            kicker="Experience"
            title="Education and work."
            description="Where I studied and what I have actually built on the job."
          />
        </ScrollReveal>

        <ScrollReveal delay={0.06}>
          <div className="mt-12">
            {experience.map((item, index) => (
              <TimelineItem key={item.title} item={item} isLast={index === experience.length - 1} />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
