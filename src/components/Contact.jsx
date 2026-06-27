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
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=razogodfrey18@gmail.com',
    icon: FiMail,
  },
];

const gmailAddress = 'razogodfrey18@gmail.com';

export default function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get('name')?.toString().trim() || '';
    const email = formData.get('email')?.toString().trim() || '';
    const message = formData.get('message')?.toString().trim() || '';

    const subject = encodeURIComponent(`Portfolio inquiry from ${name || 'a visitor'}`);
    const body = encodeURIComponent(
      [`Name: ${name || 'Not provided'}`, `Email: ${email || 'Not provided'}`, '', message || ''].join('\n')
    );

    window.location.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      gmailAddress
    )}&su=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="scroll-mt-24 py-24 sm:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Contact"
          title="Reach out or send a direct message."
          description=""
        />

        <div className="mx-auto mt-12 grid max-w-6xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-5">
            <div className="glass-panel rounded-[2rem] p-6 sm:p-8">
              <p className="section-label">Quick Links</p>
              <div className="mt-5 grid gap-4">
                {contactLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.label === 'Email' ? undefined : '_blank'}
                      rel={link.label === 'Email' ? undefined : 'noopener noreferrer'}
                      aria-label={link.label}
                      className="group flex items-center gap-4 rounded-2xl border border-zinc-200 bg-white px-4 py-4 transition duration-300 hover:-translate-y-0.5 hover:border-zinc-950 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-200"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-zinc-200 bg-zinc-50 text-zinc-950 transition group-hover:border-zinc-950 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-50 dark:group-hover:border-zinc-200">
                        <Icon size={18} />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">{link.label}</p>
                        <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                          {link.label === 'Email' ? gmailAddress : link.href.replace(/^https?:\/\//, '')}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="glass-panel rounded-[2rem] p-6 sm:p-8">
            <div className="mb-8">
              <p className="section-label">Direct Message</p>
              
            </div>
            <form className="grid gap-5" onSubmit={handleSubmit}>
              <label className="grid gap-2">
                <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Name</span>
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-zinc-950 placeholder:text-zinc-400 transition focus:border-zinc-950 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 dark:placeholder:text-zinc-500 dark:focus:border-zinc-200"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Email</span>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-zinc-950 placeholder:text-zinc-400 transition focus:border-zinc-950 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 dark:placeholder:text-zinc-500 dark:focus:border-zinc-200"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Message</span>
                <textarea
                  name="message"
                  required
                  rows={7}
                  placeholder="Your Message..."
                  className="w-full resize-none rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-zinc-950 placeholder:text-zinc-400 transition focus:border-zinc-950 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 dark:placeholder:text-zinc-500 dark:focus:border-zinc-200"
                />
              </label>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
              
                <button type="submit" className="btn-primary w-full sm:w-auto">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
