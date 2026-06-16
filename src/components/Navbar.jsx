import { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import ThemeToggle from './ThemeToggle';

export default function Navbar({ links, activeSection, theme, onToggleTheme }) {
  const [mobileOpen, setMobileOpen] = useState(false);

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

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/85 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/85">
      <div className="section-shell flex h-20 items-center justify-between gap-4">
        <a href="#home" className="text-sm font-semibold tracking-[0.3em] text-zinc-950 dark:text-zinc-50" onClick={() => setMobileOpen(false)}>
          BGS
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
          {links.map((link) => (
            <a key={link.href} href={link.href} className={`nav-link ${activeSection === link.href.slice(1) ? 'nav-link-active' : ''}`}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-300 text-zinc-950 transition hover:-translate-y-0.5 hover:border-zinc-950 md:hidden dark:border-zinc-700 dark:text-zinc-50 dark:hover:border-zinc-200"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
          >
            {mobileOpen ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>
      </div>

      <div className={`border-t border-zinc-200/80 bg-white px-4 py-4 transition-all duration-300 md:hidden dark:border-zinc-800 dark:bg-zinc-950 ${mobileOpen ? 'max-h-96 opacity-100' : 'pointer-events-none max-h-0 overflow-hidden opacity-0'}`} id="mobile-navigation">
        <nav className="section-shell flex flex-col gap-4" aria-label="Mobile navigation">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-base font-medium ${activeSection === link.href.slice(1) ? 'text-zinc-950 dark:text-zinc-50' : 'text-zinc-500 dark:text-zinc-400'}`}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
