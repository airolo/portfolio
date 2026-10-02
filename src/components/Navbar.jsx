import { useEffect, useRef, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar({ links, activeSection, onSectionClick }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleButtonRef = useRef(null);
  const firstMobileLinkRef = useRef(null);
  const didMountRef = useRef(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';

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
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur">
      <div className="shell flex h-16 items-center justify-between gap-4">
        <a
          href="#home"
          onClick={() => setMobileOpen(false)}
          className="text-base font-semibold tracking-tight"
        >
          Bradley Soloria
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary navigation">
          {links.map((link) => {
            const isActive = activeSection === link.href.slice(1);

            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => onSectionClick?.(link.href.slice(1))}
                aria-current={isActive ? 'true' : undefined}
                className={`text-sm transition-colors duration-150 ${
                  isActive ? 'text-accent' : 'text-muted hover:text-ink'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            ref={toggleButtonRef}
            className="inline-flex h-10 w-10 items-center justify-center text-muted transition-colors duration-150 hover:text-ink md:hidden"
          >
            {mobileOpen ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>
      </div>

      <div
        id="mobile-navigation"
        aria-hidden={!mobileOpen}
        className={`border-t border-line md:hidden ${
          mobileOpen ? 'block' : 'hidden'
        }`}
      >
        <nav className="shell flex flex-col py-2" aria-label="Mobile navigation">
          {links.map((link, idx) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => {
                onSectionClick?.(link.href.slice(1));
                setMobileOpen(false);
              }}
              tabIndex={mobileOpen ? 0 : -1}
              ref={idx === 0 ? firstMobileLinkRef : undefined}
              className={`border-b border-line py-3 text-sm last:border-0 ${
                activeSection === link.href.slice(1) ? 'text-ink' : 'text-muted'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
