import { FiGithub, FiLinkedin, FiMail, FiFacebook } from 'react-icons/fi';
import SectionHeading from './SectionHeading';

const contactLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/yourusername',
    display: 'github.com/yourusername',
    username: 'yourusername',
    icon: FiGithub,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/yourusername',
    display: 'linkedin.com/in/yourusername',
    username: 'yourname',
    icon: FiLinkedin,
  },
  {
    label: 'Facebook',
    href: 'https://facebook.com/yourusername',
    display: 'facebook.com/yourusername',
    username: 'yourusername',
    icon: FiFacebook,
  },
  {
    label: 'Email',
    href: 'mailto:hello@example.com',
    display: 'hello@example.com',
    username: 'hello@example.com',
    icon: FiMail,
  },
];

export default function Contact() {
  // Split links into two columns: left and right for the requested layout
  const leftLinks = [contactLinks[0], contactLinks[1]];
  const rightLinks = [contactLinks[2], contactLinks[3]];

  return (
    <section id="contact" className="scroll-mt-24 py-24 sm:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Contact"
          title="Reach out through any links."
          description="GitHub, LinkedIn, Facebook, or Email"
        />

        <div className="mt-12 grid gap-6 grid-cols-1 md:grid-cols-2 max-w-4xl">
          <div className="space-y-5">
            {leftLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.label === 'Email' ? undefined : '_blank'}
                  rel={link.label === 'Email' ? undefined : 'noreferrer'}
                  className="glass-panel group rounded-[1.75rem] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-950 dark:hover:border-zinc-200 block"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-zinc-200 bg-zinc-50 text-zinc-950 transition group-hover:border-zinc-950 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-50 dark:group-hover:border-zinc-200">
                      <Icon size={20} />
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">{link.label}</p>
                      <p className="mt-3 text-base font-medium text-zinc-950 dark:text-zinc-50">{link.username}</p>
                      <p className="mt-2 break-all text-sm text-zinc-600 transition group-hover:text-zinc-950 dark:text-zinc-300 dark:group-hover:text-zinc-50">
                        {link.display}
                      </p>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          <div className="space-y-5">
            {rightLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.label === 'Email' ? undefined : '_blank'}
                  rel={link.label === 'Email' ? undefined : 'noreferrer'}
                  className="glass-panel group rounded-[1.75rem] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-950 dark:hover:border-zinc-200 block"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-zinc-200 bg-zinc-50 text-zinc-950 transition group-hover:border-zinc-950 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-50 dark:group-hover:border-zinc-200">
                      <Icon size={20} />
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">{link.label}</p>
                      <p className="mt-3 text-base font-medium text-zinc-950 dark:text-zinc-50">{link.username}</p>
                      <p className="mt-2 break-all text-sm text-zinc-600 transition group-hover:text-zinc-950 dark:text-zinc-300 dark:group-hover:text-zinc-50">
                        {link.display}
                      </p>
                    </div>
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
