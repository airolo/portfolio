import SectionHeading from './SectionHeading';
import TimelineItem from './TimelineItem';
import ScrollReveal from './ScrollReveal';
import { experience } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 border-y border-zinc-200/70 py-24 sm:py-28 dark:border-zinc-800">
      <div className="section-shell">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Experience"
            title=""
            description=""
          />
        </ScrollReveal>

        <ScrollReveal delay={0.08} className="mt-12">
          <div className="glass-panel rounded-[2rem] p-6 sm:p-8">
            <div className="flex items-center justify-between gap-3 border-b border-zinc-200 pb-5 dark:border-zinc-800">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500 sm:text-sm sm:tracking-[0.3em] dark:text-zinc-400">
                Education & Experience
              </p>
              <span className="text-xs font-medium text-zinc-400 dark:text-zinc-500">
                {experience.length} entries
              </span>
            </div>

            <div className="mt-7">
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