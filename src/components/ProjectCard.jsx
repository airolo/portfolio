import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { FiArrowLeft, FiArrowRight, FiChevronLeft, FiChevronRight, FiExternalLink, FiGithub } from 'react-icons/fi';

function ProjectDetailsModal({ project, open, onClose }) {
  const backButtonRef = useRef(null);
  const galleryRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const images = project.images?.length ? project.images : project.image ? [project.image] : [];

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      setActiveIndex(0);
      setTimeout(() => backButtonRef.current?.focus(), 0);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  if (!open || typeof document === 'undefined') return null;

  const handleGalleryScroll = () => {
    const el = galleryRef.current;
    if (!el) return;
    setActiveIndex(Math.round(el.scrollLeft / el.clientWidth));
  };

  const goToSlide = (index) => {
    const el = galleryRef.current;
    if (!el) return;
    const clamped = Math.max(0, Math.min(images.length - 1, index));
    el.scrollTo({ left: clamped * el.clientWidth, behavior: 'smooth' });
    setActiveIndex(clamped);
  };

  const modal = (
    <div style={{ zIndex: 9999 }} className="fixed inset-0 p-3 sm:p-4">
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />

      <div
        role="dialog"
        aria-modal="true"
        aria-label={`${project.title} project details`}
        className="relative mx-auto flex h-[92svh] w-full max-w-6xl flex-col overflow-hidden rounded-[1.75rem] border border-white/40 bg-white/80 shadow-2xl backdrop-blur-2xl dark:border-white/10 dark:bg-zinc-900/80"
      >
        <div className="flex items-center justify-between border-b border-zinc-200/70 px-4 py-3 dark:border-zinc-800 sm:px-6">
          <button
            ref={backButtonRef}
            type="button"
            onClick={onClose}
            className="inline-flex h-10 items-center gap-2 rounded-full border border-zinc-200 bg-white/60 px-4 text-sm font-medium text-zinc-950 backdrop-blur transition hover:border-zinc-950 dark:border-zinc-700 dark:bg-zinc-950/60 dark:text-zinc-50 dark:hover:border-zinc-200"
            aria-label="Back to project cards"
          >
            <FiArrowLeft /> Back
          </button>
          <p className="hidden text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500 sm:block dark:text-zinc-400">
            {project.year}
          </p>
        </div>

        <div className="grid flex-1 gap-0 overflow-hidden lg:grid-cols-[1fr_0.95fr]">
          <div className="flex h-full flex-col overflow-y-auto border-b border-zinc-200/70 p-5 sm:p-7 lg:border-b-0 lg:border-r dark:border-zinc-800">
            <h3 className="mt-3 flex flex-wrap items-center gap-3 text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-3xl">
              {project.title}
              <span className="rounded-full border border-zinc-200 bg-white/70 px-2.5 py-1 text-xs font-medium text-zinc-500 dark:border-zinc-700 dark:bg-zinc-950/60 dark:text-zinc-400">
                {project.year}
              </span>
            </h3>

            <div className="mt-5">
              <h4 className="text-sm font-semibold uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400 sm:tracking-[0.3em]">
                About the Project
              </h4>
              <p className="mt-4 text-justify text-sm leading-8 text-zinc-600 dark:text-zinc-300 sm:text-base">
                {project.detailsDescription}
              </p>
            </div>

            <div className="mt-8">
              <h4 className="text-sm font-semibold uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400 sm:tracking-[0.3em]">
                Technologies
              </h4>
              <ul className="mt-4 flex flex-wrap gap-2.5" aria-label={`${project.title} technologies`}>
                {project.stack.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-zinc-200 bg-white/70 px-3 py-1.5 text-xs font-medium text-zinc-700 backdrop-blur transition hover:border-zinc-950 dark:border-zinc-700 dark:bg-zinc-950/60 dark:text-zinc-300 dark:hover:border-zinc-200"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {project.live && project.live !== '#' ? (
                <a
                  className="btn-primary"
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo <FiExternalLink />
                </a>
              ) : null}
              <a
                className="btn-secondary"
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiGithub /> Source Code
              </a>
            </div>
          </div>

          <div className="flex h-full flex-col overflow-y-auto p-5 sm:p-7">
            <div className="relative overflow-hidden rounded-3xl border border-zinc-200/70 bg-zinc-100 shadow-soft dark:border-zinc-800 dark:bg-zinc-950">
              <div
                ref={galleryRef}
                onScroll={handleGalleryScroll}
                className="flex snap-x snap-mandatory overflow-x-auto scrollbar-hide"
                aria-label={`${project.title} screenshots`}
              >
                {images.map((src) => (
                  <div key={src} className="w-full shrink-0 snap-center">
                    <img
                      src={src}
                      alt={`${project.title} preview`}
                      className="aspect-[16/10] w-full object-cover object-center"
                    />
                  </div>
                ))}
              </div>

              {images.length > 1 ? (
                <>
                  <button
                    type="button"
                    onClick={() => goToSlide(activeIndex - 1)}
                    className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur transition hover:bg-black/60"
                    aria-label="Previous screenshot"
                  >
                    <FiChevronLeft size={18} />
                  </button>
                  <button
                    type="button"
                    onClick={() => goToSlide(activeIndex + 1)}
                    className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur transition hover:bg-black/60"
                    aria-label="Next screenshot"
                  >
                    <FiChevronRight size={18} />
                  </button>

                  <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
                    {images.map((src, index) => (
                      <button
                        key={src}
                        type="button"
                        onClick={() => goToSlide(index)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          index === activeIndex ? 'w-5 bg-white' : 'w-2 bg-white/50 hover:bg-white/80'
                        }`}
                        aria-label={`Go to screenshot ${index + 1}`}
                      />
                    ))}
                  </div>
                </>
              ) : null}
            </div>

            {project.keyFeatures?.length ? (
              <div className="mt-6">
                <h4 className="text-sm font-semibold uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400 sm:tracking-[0.3em]">
                  Key Features
                </h4>
                <ul className="mt-3 space-y-2 text-xs leading-6 text-zinc-600 dark:text-zinc-300 sm:text-sm">
                  {project.keyFeatures.map((feature) => (
                    <li
                      key={feature}
                      className="rounded-xl border border-zinc-200/80 bg-white/60 px-3 py-2.5 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/60"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modal, document.body);
}

export default function ProjectCard({ project }) {
  const [detailsOpen, setDetailsOpen] = useState(false);
  const cover = project.images?.[0] || project.image;

  return (
    <>
      <article className="group glass-panel flex h-full w-full flex-col overflow-hidden rounded-xl transition-all duration-300 hover:-translate-y-1 hover:border-zinc-950 dark:hover:border-zinc-200">
        <div className="flex flex-1 flex-col sm:flex-row">
          <div className="relative overflow-hidden bg-zinc-100 sm:w-[60%] sm:shrink-0 sm:border-r sm:border-zinc-200/70 dark:bg-zinc-800 dark:bg-zinc-950 sm:dark:border-zinc-800">
            <div className="overflow-hidden sm:absolute sm:inset-0">
                {cover ? (
                  <img
                    src={cover}
                    alt={`${project.title} preview`}
                    loading="lazy"
                    className="h-auto w-full object-cover object-top transition duration-700 ease-out group-hover:scale-[1.04] sm:h-full sm:object-center"
                  />
                ) : null}
              </div>
          </div>

          <div className="flex flex-1 flex-col p-4 sm:p-5">
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-base font-semibold tracking-tight sm:text-lg">{project.title}</h3>
              <span className="shrink-0 rounded-full border border-zinc-200 bg-white/70 px-2.5 py-1 text-xs font-medium text-zinc-500 dark:border-zinc-700 dark:bg-zinc-950/60 dark:text-zinc-400">
                {project.year}
              </span>
            </div>
            <p className="mt-2 text-xs leading-6 text-zinc-600 dark:text-zinc-300 sm:text-sm">
              {project.description}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2.5 border-t border-zinc-200/70 p-4 dark:border-zinc-800 sm:flex-row">
          <button
            type="button"
            onClick={() => setDetailsOpen(true)}
            className="btn-primary flex-1 justify-center py-2.5 text-sm"
          >
            View Details <FiArrowRight />
          </button>

          {project.live && project.live !== '#' ? (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex-1 justify-center py-2.5 text-sm"
            >
              Live Demo <FiExternalLink />
            </a>
          ) : null}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary flex-1 justify-center py-2.5 text-sm"
          >
            <FiGithub size={15} /> Source Code
          </a>
        </div>
      </article>

      <ProjectDetailsModal project={project} open={detailsOpen} onClose={() => setDetailsOpen(false)} />
    </>
  );
}