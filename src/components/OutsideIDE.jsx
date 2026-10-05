import SectionHeader from './SectionHeader';
import ScrollReveal from './ScrollReveal';
import { hobbies } from '../data/portfolioData';

export default function OutsideIDE() {
  return (
    <section
      id="outside-the-ide"
      className="scroll-mt-20 border-t border-line py-20 sm:py-28"
    >
      <div className="shell">
        <ScrollReveal>
          <SectionHeader
            kicker="Outside the IDE"
            title="Away from the desk."
            description="Gym occasionally, basketball most evenings, a run when the weather holds, and gaming when nothing else is on the calendar."
          />
        </ScrollReveal>

        <ScrollReveal delay={0.06}>
          <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {hobbies.map((hobby) => (
              <li key={hobby.label}>
                <figure>
                  <img
                    src={hobby.src}
                    alt={hobby.label}
                    loading="lazy"
                    className="aspect-square w-full border border-line object-cover"
                  />
                  <figcaption className="mt-2 text-xs text-muted">{hobby.label}</figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </div>
    </section>
  );
}
