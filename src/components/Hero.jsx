import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiArrowDownRight } from 'react-icons/fi';
import CvModal from './CvModal';

const marqueeItems = [
  'Full-Stack Development',
  'React',
  'Tailwind CSS',
  'PHP',
  'Node.js',
  'MySQL',
  'UI Engineering',
  'Clean Code',
];

export default function Hero() {
  const [modalOpen, setModalOpen] = useState(false);
  const cvButtonRef = useRef(null);

  const closeModal = () => {
    setModalOpen(false);
    cvButtonRef.current?.focus();
  };

  return (
    <section id="home" className="border-b-2 border-ink">
      <div className="shell grid min-h-[calc(100svh-5rem)] items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.8fr] lg:gap-16">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="kicker"
          >
            Portfolio / 2026 
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: 'easeOut' }}
            className="mt-6 font-display text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl"
          >
            Bradley
            <br />
            <span className="headline text-accent">Soloria</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16, ease: 'easeOut' }}
            className="mt-6 font-mono text-xs font-medium uppercase tracking-[0.28em] text-muted sm:text-sm"
          >
            Full-Stack Developer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24, ease: 'easeOut' }}
            className="mt-5 max-w-xl text-base leading-8 text-muted sm:text-lg"
          >
            Building clean, secure, and scalable systems. I focus on writing
            maintainable code that solves real problems and delivering projects
            with a calm, methodical approach.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
            className="mt-8 grid grid-cols-1 gap-2 sm:grid-cols-2"
          >
            {[
              ['Location', 'Legazpi City, PH'],
              ['Focus', 'Web Applications'],
            ].map(([label, value]) => (
              <div key={label} className="flex items-baseline gap-3 border-b border-line/70 pb-2">
                <span className="font-mono text-[10px] font-medium uppercase tracking-[0.24em] text-accent">
                  {label}
                </span>
                <span className="font-mono text-xs font-medium text-ink">{value}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.38, ease: 'easeOut' }}
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4"
          >
            <a href="#projects" className="btn-ink">
              View Projects <FiArrowDownRight />
            </a>
            <button type="button" className="btn-outline" onClick={() => setModalOpen(true)} ref={cvButtonRef}>
              View CV / Resume
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="lg:justify-self-end"
        >
          <div className="paper-card shadow-offset-accent relative p-2.5">
            <div className="relative overflow-hidden border-2 border-ink bg-line">
              <img
                src="/temp-hero-placeholder.jpg"
                alt="Profile portrait"
                className="h-[22rem] w-full object-cover sm:h-[28rem]"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-coal/70 to-transparent" />
            </div>
            <div className="flex items-center justify-between gap-3 px-2 py-3">
              <p className="font-mono text-[10px] font-medium uppercase tracking-[0.24em] text-muted">
                Fig. 01 — Portrait
              </p>
              <p className="font-mono text-[10px] font-medium uppercase tracking-[0.24em] text-accent">
                Est. 2026
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="overflow-hidden border-t-2 border-ink bg-accent py-3" aria-hidden="true">
        <div className="marquee-track">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex items-center gap-8">
              {marqueeItems.map((item) => (
                <span
                  key={`${copy}-${item}`}
                  className="flex items-center gap-8 font-mono text-xs font-semibold uppercase tracking-[0.24em] text-paper"
                >
                  {item} <span className="text-paper/70">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <CvModal open={modalOpen} onClose={closeModal} />
    </section>
  );
}