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
      <div className="fixed inset-0 bg-coal/70" onClick={onClose} aria-hidden="true" />

      <div
        role="dialog"
        aria-modal="true"
        aria-label={`${project.title} project details`}
        className="relative mx-auto flex h-[92svh] w-full max-w-6xl flex-col overflow-hidden border-2 border-ink bg-parchment shadow-offset-accent"
      >
        <div className="flex items-center justify-between gap-4 border-b-2 border-ink bg-paper px-4 py-3 sm:px-6">
          <button
            ref={backButtonRef}
            type="button"
            onClick={onClose}
            className="inline-flex h-10 items-center gap-2 border-2 border-ink bg-parchment px-4 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-ink transition-colors duration-200 hover:border-accent hover:bg-accent hover:text-paper"
            aria-label="Back to project cards"
          >
            <FiArrowLeft /> Back
          </button>
          <p className="hidden font-mono text-[10px] font-medium uppercase tracking-[0.24em] text-muted sm:block">
            Field Report — Case 0{String(project.number ?? 0).padStart(2, '0')}
          </p>
        </div>

        <div className="grid flex-1 gap-0 overflow-hidden lg:grid-cols-[1fr_0.95fr]">
          <div className="flex h-full flex-col overflow-y-auto border-b-2 border-ink p-5 sm:p-7 lg:border-b-0 lg:border-r-2">
            <h3 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              {project.title}
            </h3>

            <div className="mt-5">
              <p className="kicker">About the Project</p>
              <p className="mt-3 text-sm leading-8 text-muted sm:text-base">
                {project.detailsDescription}
              </p>
            </div>

            <div className="mt-8">
              <p className="kicker">Technologies</p>
              <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${project.title} technologies`}>
                {project.stack.map((item) => (
                  <li key={item} className="chip">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {project.live && project.live !== '#' ? (
                project.liveDisabled ? (
                  <span
                    aria-disabled="true"
                    title="Live demo unavailable"
                    className="btn-ink cursor-not-allowed px-4 py-2.5 text-xs opacity-50"
                  >
                    Live Demo <FiExternalLink />
                  </span>
                ) : (
                  <a className="btn-ink px-4 py-2.5 text-xs" href={project.live} target="_blank" rel="noopener noreferrer">
                    Live Demo <FiExternalLink />
                  </a>
                )
              ) : null}
              <a className="btn-outline px-4 py-2.5 text-xs" href={project.github} target="_blank" rel="noopener noreferrer">
                <FiGithub size={14} /> Source Code
              </a>
            </div>
          </div>

          <div className="flex h-full flex-col overflow-y-auto p-5 sm:p-7">
            <div className="relative overflow-hidden border-2 border-ink bg-line">
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
                    className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center border-2 border-ink bg-paper/90 text-ink backdrop-blur transition hover:bg-accent hover:text-paper"
                    aria-label="Previous screenshot"
                  >
                    <FiChevronLeft size={18} />
                  </button>
                  <button
                    type="button"
                    onClick={() => goToSlide(activeIndex + 1)}
                    className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center border-2 border-ink bg-paper/90 text-ink backdrop-blur transition hover:bg-accent hover:text-paper"
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
                        className={`h-2.5 border border-ink transition-all duration-300 ${
                          index === activeIndex ? 'w-6 bg-accent' : 'w-2.5 bg-paper/70 hover:bg-paper'
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
                <p className="kicker">Key Features</p>
                <ul className="mt-3 space-y-2 text-xs leading-6 text-muted sm:text-sm">
                  {project.keyFeatures.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 border-b border-line/70 pb-2">
                      <span className="mt-0.5 text-accent" aria-hidden="true">
                        →
                      </span>
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

export default function ProjectCard({ project, number }) {
  const [detailsOpen, setDetailsOpen] = useState(false);
  const cover = project.images?.[0] || project.image;

  return (
    <>
      <article className="group paper-card shadow-offset flex h-full w-full flex-col border-2 border-ink transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5">
        <div className="flex flex-1 flex-col sm:flex-row">
          <div className="group relative overflow-hidden border-b-2 border-ink bg-line sm:w-[40%] sm:shrink-0 sm:border-b-0 sm:border-r-2">
            <div className="overflow-hidden sm:absolute sm:inset-0">
              {cover ? (
                <img
                  src={cover}
                  alt={`${project.title} preview`}
                  loading="lazy"
                  className="h-auto w-full object-cover object-top transition duration-500 group-hover:scale-[1.03] sm:h-full sm:object-center"
                />
              ) : null}
            </div>
            <span className="absolute left-3 top-3 bg-accent px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-paper">
              {String(number).padStart(2, '0')}
            </span>
          </div>

          <div className="flex flex-1 flex-col p-4 sm:p-5">
            <h3 className="font-display text-lg font-semibold tracking-tight sm:text-xl">
              {project.title}
            </h3>
            <p className="mt-2 text-xs leading-6 text-muted sm:text-sm">{project.description}</p>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t-2 border-ink bg-paper p-4 sm:flex-row">
          <button
            type="button"
            onClick={() => setDetailsOpen(true)}
            className="btn-ink flex-1 justify-center px-4 py-2.5 text-xs"
          >
            View Details <FiArrowRight />
          </button>

          {project.live && project.live !== '#' ? (
            project.liveDisabled ? (
              <span
                aria-disabled="true"
                title="Live demo unavailable"
                className="btn-outline flex-1 cursor-not-allowed justify-center px-4 py-2.5 text-xs opacity-50"
              >
                Live Demo <FiExternalLink />
              </span>
            ) : (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline flex-1 justify-center px-4 py-2.5 text-xs"
              >
                Live Demo <FiExternalLink />
              </a>
            )
          ) : null}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline flex-1 justify-center px-4 py-2.5 text-xs"
          >
            <FiGithub size={14} /> Source
          </a>
        </div>
      </article>

      <ProjectDetailsModal project={{ ...project, number }} open={detailsOpen} onClose={() => setDetailsOpen(false)} />
    </>
  );
}