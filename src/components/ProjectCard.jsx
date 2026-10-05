import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import {
  FiChevronLeft,
  FiChevronRight,
  FiExternalLink,
  FiGithub,
  FiX,
} from 'react-icons/fi';

const hasLive = (project) => Boolean(project.live) && project.live !== '#' && !project.liveDisabled;
const hasSource = (project) => Boolean(project.github) && project.github !== '#';

function ProjectDetailsModal({ project, open, onClose }) {
  const closeButtonRef = useRef(null);
  const galleryRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const images = project.images?.length ? project.images : project.image ? [project.image] : [];

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      setActiveIndex(0);
      closeButtonRef.current?.focus();
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;

    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open || typeof document === 'undefined') return null;

  const goToSlide = (index) => {
    const el = galleryRef.current;
    if (!el) return;
    const clamped = Math.max(0, Math.min(images.length - 1, index));
    el.scrollTo({ left: clamped * el.clientWidth, behavior: 'smooth' });
    setActiveIndex(clamped);
  };

  const modal = (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6">
      <div className="fixed inset-0 bg-coal/70" onClick={onClose} aria-hidden="true" />

      <div
        role="dialog"
        aria-modal="true"
        aria-label={`${project.title} details`}
        className="relative flex max-h-[90svh] w-full max-w-5xl flex-col overflow-hidden border border-line bg-parchment"
      >
        <div className="flex items-center justify-between gap-4 border-b border-line px-5 py-3">
          <h3 className="text-sm font-semibold">{project.title}</h3>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="inline-flex h-9 w-9 items-center justify-center text-muted transition-colors duration-150 hover:text-ink"
          >
            <FiX size={18} />
          </button>
        </div>

        <div className="grid flex-1 overflow-y-auto lg:grid-cols-2">
          <div className="border-b border-line p-5 sm:p-7 lg:border-b-0 lg:border-r">
            <p className="text-sm leading-relaxed text-muted">{project.detailsDescription}</p>

            {project.keyFeatures?.length ? (
              <div className="mt-8">
                <h4 className="text-sm font-semibold">What it does</h4>
                <ul className="mt-3 space-y-2">
                  {project.keyFeatures.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm leading-relaxed text-muted">
                      <span className="text-accent" aria-hidden="true">
                        &middot;
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            <div className="mt-8">
              <h4 className="text-sm font-semibold">Stack</h4>
              <p className="mt-2 text-sm text-muted">{project.stack.join(' · ')}</p>
            </div>

            {hasLive(project) || hasSource(project) ? (
              <div className="mt-8 flex flex-wrap gap-3">
                {hasLive(project) && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    Live Demo <FiExternalLink size={15} />
                  </a>
                )}
                {hasSource(project) && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-sm"
                  >
                    <FiGithub size={15} /> Source Code
                  </a>
                )}
              </div>
            ) : null}
          </div>

          <div className="p-5 sm:p-7">
            {images.length > 0 ? (
              <div className="relative overflow-hidden border border-line">
                <div
                  ref={galleryRef}
                  onScroll={(e) => {
                    const el = e.currentTarget;
                    setActiveIndex(Math.round(el.scrollLeft / el.clientWidth));
                  }}
                  className="scrollbar-hide flex snap-x snap-mandatory overflow-x-auto"
                  aria-label={`${project.title} screenshots`}
                >
                  {images.map((src) => (
                    <div key={src} className="w-full shrink-0 snap-center">
                      <img
                        src={src}
                        alt={`${project.title} preview`}
                        className="aspect-[16/10] w-full object-cover"
                      />
                    </div>
                  ))}
                </div>

                {images.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={() => goToSlide(activeIndex - 1)}
                      aria-label="Previous screenshot"
                      className="absolute left-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center border border-line bg-paper/90 text-ink transition-colors duration-150 hover:text-accent"
                    >
                      <FiChevronLeft size={16} />
                    </button>
                    <button
                      type="button"
                      onClick={() => goToSlide(activeIndex + 1)}
                      aria-label="Next screenshot"
                      className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center border border-line bg-paper/90 text-ink transition-colors duration-150 hover:text-accent"
                    >
                      <FiChevronRight size={16} />
                    </button>
                  </>
                )}
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
      <article className="card grid h-full overflow-hidden sm:grid-cols-2">
        <div className="order-1 flex flex-col justify-center p-5 sm:p-7">
          <h3 className="text-lg font-medium tracking-tight">{project.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{project.description}</p>

          {project.stack?.length ? (
            <p className="mt-4 text-xs leading-relaxed text-muted">
              {project.stack.join(' · ')}
            </p>
          ) : null}

          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
            <button
              type="button"
              onClick={() => setDetailsOpen(true)}
              className="link text-sm"
            >
              Details
            </button>

            {hasLive(project) && (
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="link text-sm">
                Live Demo
              </a>
            )}

            {hasSource(project) && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="link text-sm">
                Source
              </a>
            )}
          </div>
        </div>

        {cover ? (
          <div className="order-2 flex items-center border-t border-line sm:border-l sm:border-t-0">
            <img src={cover} alt={`${project.title} preview`} className="w-full" />
          </div>
        ) : null}
      </article>

      <ProjectDetailsModal
        project={project}
        open={detailsOpen}
        onClose={() => setDetailsOpen(false)}
      />
    </>
  );
}
