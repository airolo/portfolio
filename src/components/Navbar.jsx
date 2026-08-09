import { useEffect, useRef, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import ThemeToggle from './ThemeToggle';

export default function Navbar({ links, activeSection, theme, onToggleTheme, onSectionClick }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleButtonRef = useRef(null);
  const firstMobileLinkRef = useRef(null);
  const didMountRef = useRef(false);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (mobileOpen) {
      firstMobileLinkRef.current?.focus();
    } else if (didMountRef.current) {
      toggleButtonRef.current?.focus();
    }

    didMountRef.current = true;
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setMobileOpen(false);
      }
    };

    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-ink bg-paper/90 backdrop-blur">
      <div className="shell flex h-20 items-center justify-between gap-4">
        <a
          href="#home"
          className="font-display text-xl font-bold tracking-tight sm:text-2xl"
          onClick={() => setMobileOpen(false)}
        >
          BGS<span className="text-accent">.</span>
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary navigation">
          {links.map((link, idx) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                className={`group flex items-baseline gap-1.5 font-mono text-xs font-medium uppercase tracking-[0.18em] transition-colors duration-200 ${
                  isActive ? 'text-accent' : 'text-muted hover:text-ink'
                }`}
                onClick={() => onSectionClick?.(link.href.slice(1))}
              >
                <span className="text-[10px] text-accent">0{idx + 1}</span>
                {link.label}
                <span
                  className={`h-1.5 w-1.5 self-center rounded-full bg-accent transition-all duration-200 ${
                    isActive ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                  }`}
                  aria-hidden="true"
                />
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center border-2 border-ink bg-parchment text-ink transition-colors duration-200 hover:bg-accent hover:text-paper md:hidden"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            ref={toggleButtonRef}
          >
            {mobileOpen ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>
      </div>

      <div
        className={`border-t-2 border-ink bg-paper transition-all duration-300 md:hidden ${
          mobileOpen ? 'max-h-96 opacity-100' : 'pointer-events-none max-h-0 overflow-hidden opacity-0'
        }`}
        id="mobile-navigation"
        aria-hidden={!mobileOpen}
      >
        <nav className="shell flex flex-col gap-1 py-4" aria-label="Mobile navigation">
          {links.map((link, idx) => (
            <a
              key={link.href}
              href={link.href}
              className={`group flex items-center gap-3 border-b border-line/60 py-3 font-display text-lg font-semibold ${
                activeSection === link.href.slice(1) ? 'text-accent' : 'text-ink'
              }`}
              onClick={() => {
                onSectionClick?.(link.href.slice(1));
                setMobileOpen(false);
              }}
              tabIndex={mobileOpen ? 0 : -1}
              ref={idx === 0 ? firstMobileLinkRef : undefined}
            >
              <span className="font-mono text-xs font-medium text-accent">0{idx + 1}</span>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}