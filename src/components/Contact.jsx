import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import SectionHeading from './SectionHeading';
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
    <section id="contact" className="scroll-mt-24 border-y border-zinc-200/70 py-24 sm:py-28 dark:border-zinc-800">
      <div className="section-shell">
        <ScrollReveal>
          <SectionHeading
            align="center"
            eyebrow="Contact"
            title="Let's build something together."
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
                  className="group glass-panel flex h-full min-w-0 flex-col items-center gap-4 rounded-[1.4rem] p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-zinc-950 dark:hover:border-zinc-200"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-200 bg-white/70 text-zinc-950 transition group-hover:border-zinc-950 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50 dark:group-hover:border-zinc-200">
                    <Icon size={20} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">{link.label}</p>
                    <p className="mt-1 break-words text-xs leading-5 text-zinc-500 dark:text-zinc-400">
                      {link.handle}
                    </p>
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