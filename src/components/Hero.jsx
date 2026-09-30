import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import CvModal from './CvModal';

export default function Hero() {
  const [modalOpen, setModalOpen] = useState(false);
  const cvButtonRef = useRef(null);

  const closeModal = () => {
    setModalOpen(false);
    cvButtonRef.current?.focus();
  };

  return (
    <section id="home" className="py-20 sm:py-28">
      <div className="shell grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="kicker"
          >
            Full-Stack Developer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.06, ease: 'easeOut' }}
            className="mt-4 text-5xl font-semibold tracking-tight sm:text-6xl"
          >
            Bradley Soloria
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: 'easeOut' }}
            className="mt-6 max-w-lg text-base leading-relaxed text-muted"
          >
            I build clean, secure, and scalable web applications. Most of my work
            sits in React and PHP/Node backends, and I care more about code that
            the next person can read than code that looks clever.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18, ease: 'easeOut' }}
            className="mt-4 text-sm text-muted"
          >
            Based in Legazpi City, Philippines.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24, ease: 'easeOut' }}
            className="mt-8 flex flex-col items-start gap-1 sm:flex-row sm:items-center sm:gap-6"
          >
            <a href="#projects" className="link inline-block py-2 text-base">
              View Projects
            </a>
            <button
              type="button"
              className="link inline-block py-2 text-base"
              onClick={() => setModalOpen(true)}
              ref={cvButtonRef}
            >
              View CV / Resume
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.16, ease: 'easeOut' }}
          className="lg:justify-self-end"
        >
          <img
            src="/temp-hero-placeholder.jpg"
            alt="Bradley Soloria"
            className="aspect-[4/5] w-full max-w-sm border border-line object-cover lg:w-[19rem]"
          />
        </motion.div>
      </div>

      <CvModal open={modalOpen} onClose={closeModal} />
    </section>
  );
}
