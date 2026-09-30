import SectionHeader from './SectionHeader';
import ScrollReveal from './ScrollReveal';

const EMAIL = 'razogodfrey18@gmail.com';

const links = [
  { label: 'GitHub', href: 'https://github.com/airolo' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/bradleysoloria/' },
];

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 border-t border-line py-20 sm:py-28">
      <div className="shell">
        <ScrollReveal>
          <SectionHeader
            kicker="Contact"
            title="Get in touch."
            description="If you have a project, a role, or just a question about something I built, I'm happy to talk about it."
          />

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <a href={`mailto:${EMAIL}`} className="link text-base">
              {EMAIL}
            </a>
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link text-base"
              >
                {link.label}
              </a>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
