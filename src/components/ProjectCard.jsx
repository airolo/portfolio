import { FiExternalLink, FiGithub } from 'react-icons/fi';

export default function ProjectCard({ project }) {
  return (
    <article className="group glass-panel rounded-[1.75rem] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-950 dark:hover:border-zinc-200">
      <div className="flex h-full flex-col">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">Featured project</p>
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

        <div className="mt-8 flex flex-wrap gap-4 pt-2">
          <a className="inline-flex items-center gap-2 text-sm font-medium text-zinc-950 transition hover:opacity-70 dark:text-zinc-50" href={project.github} target="_blank" rel="noreferrer">
            <FiGithub /> GitHub
          </a>
          <a className="inline-flex items-center gap-2 text-sm font-medium text-zinc-950 transition hover:opacity-70 dark:text-zinc-50" href={project.live} target="_blank" rel="noreferrer">
            <FiExternalLink /> Live Demo
          </a>
        </div>
      </div>
    </article>
  );
}
