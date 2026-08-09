import { FiArrowDownRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import SectionHeader from './SectionHeader';
import ScrollReveal from './ScrollReveal';

const contactLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/airolo',
    handle: 'github.com/airolo',
    icon: FiGithub,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/bradleysoloria/',
    handle: 'linkedin.com/in/bradleysoloria',
    icon: FiLinkedin,
  },
  {
    label: 'Email',
    href: 'mailto:razogodfrey18@gmail.com',
    handle: 'razogodfrey18@gmail.com',
    icon: FiMail,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-24 sm:py-28">
      <div className="shell">
        <ScrollReveal>
          <SectionHeader
            align="center"
            index="05"
            kicker="Contact"
            title={
              <>
                Let's build something <span className="headline text-accent">together</span>.
              </>
            }
            description="Have a project in mind? If you want to build something together, I would love to hear about your idea and help bring it to life."
          />
        </ScrollReveal>

        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
          {contactLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <ScrollReveal key={link.label} delay={0.08 + index * 0.06}>
                <a
                  href={link.href}
                  target={link.label === 'Email' ? undefined : '_blank'}
                  rel={link.label === 'Email' ? undefined : 'noopener noreferrer'}
                  aria-label={link.label}
                  className="paper-card group flex h-full min-w-0 flex-col items-center gap-4 border-2 border-ink p-6 text-center transition-all duration-200 hover:-translate-y-1 hover:border-accent"
                  style={{ boxShadow: 'var(--shadow-offset)' }}
                >
                  <span className="flex h-12 w-12 items-center justify-center border-2 border-ink bg-paper text-ink transition-colors duration-200 group-hover:border-accent group-hover:bg-accent group-hover:text-paper">
                    <Icon size={20} />
                  </span>
                  <div className="min-w-0">
                    <p className="font-display text-base font-semibold">{link.label}</p>
                    <p className="mt-1 break-words font-mono text-xs text-muted">{link.handle}</p>
                  </div>
                </a>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}