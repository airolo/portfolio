import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import SectionHeading from './SectionHeading';

const contactLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/airolo',
    icon: FiGithub,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/bradley-soloria-ba64423b8/',
    icon: FiLinkedin,
  },
  {
    label: 'Email',
    href: 'mailto:razogodfrey18@gmail.com',
    icon: FiMail,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-24 sm:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Contact"
          title="Reach out through any links."
          description="GitHub, LinkedIn, or Email"
        />

        <div className="mx-auto mt-12 max-w-5xl">
          <div className="mx-auto mb-8 h-px w-24 bg-zinc-300 dark:bg-zinc-700" aria-hidden="true" />
          <div className="grid gap-6 md:grid-cols-3">
            {contactLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.label === 'Email' ? undefined : '_blank'}
                  rel={link.label === 'Email' ? undefined : 'noreferrer'}
                  className="glass-panel group rounded-[1.75rem] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-950 dark:hover:border-zinc-200 block"
                >
                  <div className="flex flex-col items-center text-center gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-zinc-200 bg-zinc-50 text-zinc-950 transition group-hover:border-zinc-950 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-50 dark:group-hover:border-zinc-200">
                      <Icon size={20} />
                    </span>
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500 transition group-hover:text-zinc-950 dark:text-zinc-400 dark:group-hover:text-zinc-50">
                      {link.label}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
