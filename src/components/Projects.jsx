import { useCallback, useEffect, useRef, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import SectionHeader from './SectionHeader';
import ProjectCard from './ProjectCard';
import ScrollReveal from './ScrollReveal';
import { projects } from '../data/portfolioData';

const pad = (value) => String(value).padStart(2, '0');

export default function Projects() {
  const count = projects.length;
  const [index, setIndex] = useState(0);
  const trackRef = useRef(null);
  const frameRef = useRef(0);

  const scrollToIndex = useCallback((next) => {
    const track = trackRef.current;
    if (!track) return;

    // `behavior: 'smooth'` is JS-driven and bypasses the CSS reduced-motion rule,
    // so it has to be handled here.
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    track.scrollTo({ left: next * track.clientWidth, behavior: reduced ? 'auto' : 'smooth' });
  }, []);

  const goTo = useCallback(
    (next) => {
      if (!count) return;
      const wrapped = ((next % count) + count) % count;
      setIndex(wrapped);
      scrollToIndex(wrapped);
    },
    [count, scrollToIndex]
  );

  useEffect(() => () => window.cancelAnimationFrame(frameRef.current), []);

  // keeps the counter in sync when the track is scrolled by touch or by the browser
  const handleScroll = () => {
    window.cancelAnimationFrame(frameRef.current);
    frameRef.current = window.requestAnimationFrame(() => {
      const track = trackRef.current;
      if (!track || !track.clientWidth) return;
      const next = Math.round(track.scrollLeft / track.clientWidth);
      setIndex((current) => (current === next ? current : next));
    });
  };

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      goTo(index + 1);
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      goTo(index - 1);
    }
  };

  const controlClass =
    'inline-flex h-10 w-10 items-center justify-center border border-line text-muted transition-colors duration-150 hover:border-accent hover:text-accent';

  return (
    <section id="projects" className="scroll-mt-20 border-t border-line py-20 sm:py-28">
      <div className="shell">
        <ScrollReveal>
          <SectionHeader
            kicker="Projects"
            title="Things I've built."
            description={`${count} projects that show how I approach a problem end to end.`}
          />
        </ScrollReveal>

        <div className="mt-12">
          <div
            ref={trackRef}
            onScroll={handleScroll}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="group"
            aria-label={`${count} projects. Use the left and right arrow keys to browse.`}
            className="scrollbar-hide flex snap-x snap-mandatory overflow-x-auto"
          >
            {projects.map((project, slideIndex) => (
              <div
                key={project.title}
                className="w-full shrink-0 snap-start"
                inert={slideIndex !== index}
                aria-hidden={slideIndex !== index}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-between">
            <p className="text-xs text-muted" aria-live="polite">
              {pad(index + 1)} / {pad(count)}
            </p>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => goTo(index - 1)}
                aria-label="Previous project"
                className={controlClass}
              >
                <FiChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={() => goTo(index + 1)}
                aria-label="Next project"
                className={controlClass}
              >
                <FiChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
