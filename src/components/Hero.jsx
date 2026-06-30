import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiArrowDownRight } from 'react-icons/fi';
import CvModal from './CvModal';

export default function Hero() {
  const [modalOpen, setModalOpen] = useState(false);
  const cvButtonRef = useRef(null);

  const closeModal = () => {
    setModalOpen(false);
    cvButtonRef.current?.focus();
  };

  return (
    <section id="home" className="scroll-mt-24 border-b border-zinc-200/70 dark:border-zinc-800">
      <div className="section-shell grid min-h-[calc(100svh-5rem)] items-center py-16 sm:py-20 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="section-label"
          >
            Hello, I'm
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease: 'easeOut' }}
            className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-zinc-950 sm:mt-6 sm:text-6xl lg:text-7xl dark:text-zinc-50"
          >
           Bradley Soloria
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2, ease: 'easeOut' }}
            className="mt-4 text-sm font-medium uppercase tracking-[0.18em] text-zinc-500 sm:text-lg sm:tracking-[0.28em] dark:text-zinc-400"
          >
            Full-Stack Developer
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.3, ease: 'easeOut' }}
            className="mt-6 max-w-2xl text-base leading-8 text-zinc-600 sm:mt-8 sm:text-lg dark:text-zinc-300"
          >
            Building clean, secure, and scalable systems.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.4, ease: 'easeOut' }}
            className="mt-8 grid gap-3 sm:mt-10 sm:flex sm:flex-wrap sm:gap-4"
          >
            <a href="#projects" className="btn-primary w-full sm:w-auto">
              View Projects <FiArrowDownRight />
            </a>
            <button
              type="button"
              className="btn-secondary w-full sm:w-auto"
              onClick={() => setModalOpen(true)}
              ref={cvButtonRef}
            >
              View CV/Resume
            </button>
            <a href="#contact" className="btn-secondary w-full sm:w-auto">
              Contact Me
            </a>
            
            <CvModal open={modalOpen} onClose={() => setModalOpen(false)} />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
          className="mt-12 lg:mt-0"
        >
          <div className="glass-panel rounded-[1.5rem] p-4 sm:rounded-[2rem] sm:p-6">
            <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 sm:rounded-3xl">
              <img
                src="/temp-hero-placeholder.jpg"
                alt="Temporary profile placeholder"
                className="h-[20rem] w-full object-cover sm:h-[26rem]"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/45 to-transparent" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

