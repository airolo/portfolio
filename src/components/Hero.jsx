import { motion } from 'framer-motion';
import { FiArrowDownRight } from 'react-icons/fi';

export default function Hero() {
  return (
    <section id="home" className="scroll-mt-24 border-b border-zinc-200/70 dark:border-zinc-800">
      <div className="section-shell grid min-h-[calc(100vh-5rem)] items-center py-20 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16">
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
            className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight text-zinc-950 sm:text-6xl lg:text-7xl dark:text-zinc-50"
          >
           Bradley Soloria
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2, ease: 'easeOut' }}
            className="mt-4 text-lg font-medium uppercase tracking-[0.28em] text-zinc-500 dark:text-zinc-400"
          >
            Full-Stack Developer
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.3, ease: 'easeOut' }}
            className="mt-8 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-300"
          >
            Building clean, secure, and scalable systems.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.4, ease: 'easeOut' }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a href="#projects" className="btn-primary">
              View Projects <FiArrowDownRight />
            </a>
            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
          className="mt-14 lg:mt-0"
        >
          <div className="glass-panel rounded-[2rem] p-8 sm:p-10">
            <div className="flex items-center justify-between border-b border-zinc-200 pb-5 dark:border-zinc-800">
              <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Focused on delivery</span>
              <span className="text-sm font-medium text-zinc-950 dark:text-zinc-50">Secure by design</span>
            </div>
            <div className="space-y-6 py-8">
              <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900">
                <p className="text-sm uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400">Core strength</p>
                <p className="mt-3 text-2xl font-semibold text-zinc-950 dark:text-zinc-50">Full-stack problem solving</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-zinc-200 p-5 dark:border-zinc-800">
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">Frontend</p>
                  <p className="mt-2 text-xl font-semibold">Elegant interfaces</p>
                </div>
                <div className="rounded-2xl border border-zinc-200 p-5 dark:border-zinc-800">
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">Backend</p>
                  <p className="mt-2 text-xl font-semibold">Reliable systems</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
