import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { FiArrowLeft, FiExternalLink, FiGithub } from 'react-icons/fi';

function ProjectDetailsModal({ project, open, onClose }) {
  const backButtonRef = useRef(null);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => backButtonRef.current?.focus(), 0);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  if (!open || typeof document === 'undefined') return null;

  const modal = (
    <div style={{ zIndex: 9999 }} className="fixed inset-0 p-3 sm:p-4">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} aria-hidden="true" />

      <div
        role="dialog"
        aria-modal="true"
        aria-label={`${project.title} project details`}
        className="relative mx-auto flex h-[92svh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl dark:bg-zinc-900"
      >
        <div className="flex items-center border-b border-zinc-200 px-4 py-3 dark:border-zinc-800 sm:px-6">
          <button
            ref={backButtonRef}
            type="button"
            onClick={onClose}
            className="inline-flex h-10 items-center gap-2 rounded-full border border-zinc-200 px-4 text-sm font-medium text-zinc-950 transition hover:border-zinc-950 dark:border-zinc-700 dark:text-zinc-50 dark:hover:border-zinc-200"
            aria-label="Back to project cards"
          >
            <FiArrowLeft /> Back
          </button>
        </div>

        <div className="grid flex-1 gap-0 overflow-hidden lg:grid-cols-[1fr_0.95fr]">
          <div className="flex h-full flex-col overflow-y-auto border-b border-zinc-200 p-5 sm:p-7 lg:border-b-0 lg:border-r dark:border-zinc-800">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400 sm:tracking-[0.3em]">
              {project.type}
            </p>
            <h3 className="mt-4 text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-3xl">
              {project.title}
            </h3>

            <div className="mt-5">
              <h4 className="text-sm font-semibold uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400 sm:tracking-[0.3em]">
                Detailed Description
              </h4>
              <p className="mt-4 text-justify text-sm leading-8 text-zinc-600 dark:text-zinc-300 sm:text-base">
                {project.detailsDescription}
              </p>
            </div>

            <div className="mt-7 grid gap-3 sm:flex sm:flex-wrap sm:gap-4">
              <a
                className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-950 transition hover:border-zinc-950 dark:border-zinc-700 dark:text-zinc-50 dark:hover:border-zinc-200"
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiGithub /> GitHub
              </a>
              <a
                className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-950 transition hover:border-zinc-950 dark:border-zinc-700 dark:text-zinc-50 dark:hover:border-zinc-200"
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiExternalLink /> Live Demo
              </a>
            </div>

            <div className="mt-8">
              <h4 className="text-sm font-semibold uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400 sm:tracking-[0.3em]">
                Tech Stack
              </h4>
              <ul className="mt-4 flex flex-wrap gap-3" aria-label={`${project.title} technologies`}>
                {project.stack.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex h-full flex-col overflow-y-auto p-5 sm:p-7">
            <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-100 shadow-soft dark:border-zinc-800 dark:bg-zinc-950">
              {project.image ? (
                <img src={project.image} alt={`${project.title} preview`} className="aspect-[16/10] w-full object-cover object-center" />
              ) : null}
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-semibold uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400 sm:tracking-[0.3em]">
                Key Features
              </h4>
              <ul className="mt-3 space-y-2 text-xs leading-6 text-zinc-600 dark:text-zinc-300 sm:text-sm">
                {project.keyFeatures?.map((feature) => (
                  <li key={feature} className="rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2.5 dark:border-zinc-800 dark:bg-zinc-900">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modal, document.body);
}

export default function ProjectCard({ project }) {
  const [detailsOpen, setDetailsOpen] = useState(false);

  return (
    <>
      <article className="group glass-panel w-full max-w-xs overflow-hidden rounded-[1.4rem] transition-all duration-300 hover:-translate-y-1 hover:border-zinc-950 dark:hover:border-zinc-200 sm:rounded-[1.6rem]">
        <div className="overflow-hidden border-b border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-950">
          <div className="aspect-[16/10] overflow-hidden bg-zinc-200 dark:bg-zinc-900">
            {project.image ? (
              <img
                src={project.image}
                alt={`${project.title} preview`}
                className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-[1.03]"
              />
            ) : null}
          </div>
        </div>

        <div className="flex h-full flex-col p-4 sm:p-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400 sm:tracking-[0.3em]">
              {project.type}
            </p>
            <h3 className="mt-3 text-base font-semibold tracking-tight sm:text-lg">{project.title}</h3>
            <p className="mt-2 text-xs leading-6 text-zinc-600 dark:text-zinc-300 sm:text-sm">{project.description}</p>
          </div>

          <button type="button" onClick={() => setDetailsOpen(true)} className="btn-primary mt-4 w-full py-2.5 text-sm">
            Details
          </button>
        </div>
      </article>

      <ProjectDetailsModal project={project} open={detailsOpen} onClose={() => setDetailsOpen(false)} />
    </>
  );
}
