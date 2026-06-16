import SectionHeading from './SectionHeading';

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-24 sm:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="About"
          title="Focused on clarity, security, and dependable delivery."
          description="I build web experiences that blend clean development with AI-assisted creativity turning ideas into functional, scalable, and user-friendly applications from frontend to backend. I am willing to continuously learn, adapt, and explore new technologies to improve my skills and create better digital experiences."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <article className="glass-panel rounded-[1.75rem] p-7">
            <h3 className="text-lg font-semibold">Developing</h3>
            <p className="mt-4 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
              I approach projects with structure, clean code, and a clear understanding of how each layer supports the final product.
            </p>
          </article>
          <article className="glass-panel rounded-[1.75rem] p-7">
            <h3 className="text-lg font-semibold">Problem solving</h3>
            <p className="mt-4 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
              I like breaking complex requirements into small, practical steps that can be implemented and tested with confidence.
            </p>
          </article>
          <article className="glass-panel rounded-[1.75rem] p-7">
            <h3 className="text-lg font-semibold">Continuous learning</h3>
            <p className="mt-4 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
              I stay adaptable by learning modern tools, improving UX judgment, and refining how I build secure and maintainable applications.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
