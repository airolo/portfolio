import { FiExternalLink, FiGithub } from 'react-icons/fi';

export default function ProjectCard({ project, featured = false }) {
  return (
    <article className={`group glass-panel overflow-hidden rounded-[1.75rem] transition-all duration-300 hover:-translate-y-1 hover:border-zinc-950 dark:hover:border-zinc-200 ${featured ? 'lg:grid lg:grid-cols-[1.1fr_0.9fr]' : ''}`}>
      <div className={`relative min-h-[16rem] overflow-hidden border-b border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-950 ${featured ? 'lg:min-h-[24rem] lg:border-b-0 lg:border-r' : ''}`}>
        {project.image ? (
          <div className="absolute inset-5 flex items-center justify-center overflow-hidden rounded-2xl border border-zinc-200 bg-[#eef6ff] shadow-soft dark:border-zinc-800 dark:bg-zinc-900">
            <img
              src={project.image}
              alt={`${project.title} preview`}
              className="h-full w-full object-contain object-center p-2 transition duration-500 group-hover:scale-[1.01] sm:p-3"
            />
          </div>
        ) : (
          <div className="absolute inset-5 rounded-2xl border border-zinc-200 bg-white shadow-soft dark:border-zinc-800 dark:bg-zinc-900">
            <div className="flex h-10 items-center gap-2 border-b border-zinc-200 px-4 dark:border-zinc-800">
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
              <span className="ml-3 h-2 w-24 rounded-full bg-zinc-200 dark:bg-zinc-800" />
            </div>

            <div className="grid h-[calc(100%-2.5rem)] grid-rows-[auto_1fr] p-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400">{project.type}</p>
                <h4 className="mt-3 max-w-sm text-xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">{project.preview}</h4>
              </div>

              <div className="mt-6 grid grid-cols-[0.8fr_1.2fr] gap-4">
                <div className="space-y-3">
                  <span className="block h-16 rounded-2xl border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950" />
                  <span className="block h-16 rounded-2xl border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950" />
                </div>
                <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-950">
                  <span className="block h-3 w-2/3 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                  <span className="mt-4 block h-24 rounded-xl bg-zinc-200 dark:bg-zinc-800" />
                  <span className="mt-4 block h-3 w-4/5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                  <span className="mt-2 block h-3 w-1/2 rounded-full bg-zinc-200 dark:bg-zinc-800" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="flex h-full flex-col p-7">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">{featured ? 'Featured project' : project.type}</p>
          <h3 className="mt-4 text-2xl font-semibold tracking-tight">{project.title}</h3>
          <p className="mt-4 text-sm leading-7 text-zinc-600 dark:text-zinc-300">{project.description}</p>
        </div>

        <ul className="mt-6 flex flex-wrap gap-3" aria-label={`${project.title} technologies`}>
          {project.stack.map((item) => (
            <li key={item} className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300">
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap gap-4 pt-8">
          <a className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-950 transition hover:border-zinc-950 dark:border-zinc-700 dark:text-zinc-50 dark:hover:border-zinc-200" href={project.github} target="_blank" rel="noopener noreferrer">
            <FiGithub /> GitHub
          </a>
          <a className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-950 transition hover:border-zinc-950 dark:border-zinc-700 dark:text-zinc-50 dark:hover:border-zinc-200" href={project.live} target="_blank" rel="noopener noreferrer">
            <FiExternalLink /> Live Demo
          </a>
        </div>
      </div>
    </article>
  );
}
