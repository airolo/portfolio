import SectionHeader from './SectionHeader';
import TimelineItem from './TimelineItem';
import ScrollReveal from './ScrollReveal';
import { experience } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 border-b-2 border-ink border-t-2 py-24 sm:py-28">
      <div className="shell">
        <ScrollReveal>
          <SectionHeader
            index="03"
            kicker="Education & Training"
            title={
              <>
                The road so <span className="headline text-accent">far</span>.
              </>
            }
            description=""
          />
        </ScrollReveal>

        <ScrollReveal delay={0.08} className="mt-12">
          <div className="paper-card shadow-offset p-6 sm:p-9">
            <div className="flex items-center justify-between gap-4 border-b-2 border-ink pb-4">
              <p className="kicker">Curriculum</p>
              <span className="font-mono text-xs font-semibold text-accent">
                {String(experience.length).padStart(2, '0')} ENTRIES
              </span>
            </div>

            <div className="mt-4">
              {experience.map((item, index) => (
                <TimelineItem key={item.title} item={item} isLast={index === experience.length - 1} />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}