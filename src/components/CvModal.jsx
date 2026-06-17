import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

export default function CvModal({ open, onClose }) {
  const closeBtnRef = useRef(null);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      // focus close button when opened
      setTimeout(() => closeBtnRef.current?.focus(), 0);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  if (!open || typeof document === 'undefined') return null;

  const modal = (
    <div style={{ zIndex: 9999 }} className="fixed inset-0 flex items-center justify-center">
      <div className="fixed inset-0 bg-black/40" onClick={onClose} aria-hidden="true" />

      <div
        role="dialog"
        aria-modal="true"
        aria-label="CV preview"
        className="relative mx-4 max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-xl bg-white shadow-2xl dark:bg-zinc-900"
      >
        <div className="flex items-center justify-between border-b border-zinc-200 px-4 py-3 dark:border-zinc-800">
          <h3 className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">Curriculum Vitae</h3>
          <div className="flex items-center gap-2">
            <a
              href="/resume.pdf"
              className="btn-secondary mr-2"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              Download CV
            </a>
            <button
              ref={closeBtnRef}
              onClick={onClose}
              className="inline-flex h-9 items-center justify-center rounded-md border border-zinc-200 px-3 py-1 text-sm dark:border-zinc-800"
              aria-label="Close CV preview"
            >
              Close
            </button>
          </div>
        </div>

        <div className="h-[80vh] max-h-[80vh] w-full">
          <iframe
            src="/resume.pdf"
            title="Resume preview"
            className="h-full w-full bg-white/50 dark:bg-zinc-900"
          >
            <p className="p-6 text-sm">Preview not available. You can download the CV instead.</p>
          </iframe>
        </div>
      </div>
    </div>
  );

  return createPortal(modal, document.body);
}
