import { useEffect, useRef } from 'react';
import { useState } from 'react';
import { createPortal } from 'react-dom';

const documents = {
  cv: {
    label: 'CV',
    fileName: 'cv.pdf',
    title: 'Curriculum Vitae',
  },
  resume: {
    label: 'Resume',
    fileName: 'resume.pdf',
    title: 'Resume',
  },
};

export default function CvModal({ open, onClose }) {
  const closeBtnRef = useRef(null);
  const [selectedDocument, setSelectedDocument] = useState('resume');

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      // focus close button when opened
      setTimeout(() => closeBtnRef.current?.focus(), 0);
      setSelectedDocument('resume');
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  if (!open || typeof document === 'undefined') return null;

  const currentDocument = documents[selectedDocument];

  const modal = (
    <div style={{ zIndex: 9999 }} className="fixed inset-0 flex items-center justify-center p-3 sm:p-4">
      <div className="fixed inset-0 bg-black/40" onClick={onClose} aria-hidden="true" />

      <div
        role="dialog"
        aria-modal="true"
        aria-label="CV and resume preview"
        className="relative max-h-[92svh] w-full max-w-4xl overflow-hidden rounded-xl bg-white shadow-2xl dark:bg-zinc-900"
      >
        <div className="flex flex-col gap-3 border-b border-zinc-200 px-4 py-3 dark:border-zinc-800 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">{currentDocument.title}</h3>
            <div className="flex flex-wrap gap-2">
              {Object.entries(documents).map(([key, document]) => (
                <button
                  key={document.label}
                  type="button"
                  onClick={() => setSelectedDocument(key)}
                  className={`rounded-full border px-3 py-1.5 text-xs font-medium transition ${
                    selectedDocument === key
                      ? 'border-zinc-950 bg-zinc-950 text-white dark:border-zinc-50 dark:bg-zinc-50 dark:text-zinc-950'
                      : 'border-zinc-200 text-zinc-600 hover:border-zinc-950 hover:text-zinc-950 dark:border-zinc-800 dark:text-zinc-300 dark:hover:border-zinc-200 dark:hover:text-zinc-50'
                  }`}
                >
                  {document.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-2 sm:flex sm:items-center">
            <a
              href={`/${currentDocument.fileName}`}
              className="btn-secondary w-full sm:w-auto"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              Download {currentDocument.label}
            </a>
            <button
              ref={closeBtnRef}
              onClick={onClose}
              className="inline-flex h-10 items-center justify-center rounded-md border border-zinc-200 px-3 py-1 text-sm dark:border-zinc-800"
              aria-label="Close document preview"
            >
              Close
            </button>
          </div>
        </div>

        <div className="h-[70svh] w-full sm:h-[80vh]">
          <iframe
            src={`/${currentDocument.fileName}`}
            title={`${currentDocument.title} preview`}
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
