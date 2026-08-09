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
      <div className="fixed inset-0 bg-coal/70" onClick={onClose} aria-hidden="true" />

      <div
        role="dialog"
        aria-modal="true"
        aria-label="CV and resume preview"
        className="relative max-h-[92svh] w-full max-w-4xl overflow-hidden border-2 border-ink bg-parchment shadow-offset-accent"
      >
        <div className="flex flex-col gap-3 border-b-2 border-ink bg-paper px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-3">
            <h3 className="font-display text-lg font-semibold tracking-tight">{currentDocument.title}</h3>
            <div className="flex flex-wrap gap-2">
              {Object.entries(documents).map(([key, document]) => (
                <button
                  key={document.label}
                  type="button"
                  onClick={() => setSelectedDocument(key)}
                  className={`border-2 px-3 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.14em] transition-colors duration-200 ${
                    selectedDocument === key
                      ? 'border-accent bg-accent text-paper'
                      : 'border-line bg-parchment text-ink hover:border-accent hover:text-accent'
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
              className="btn-outline w-full px-4 py-2.5 text-xs sm:w-auto"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              Download {currentDocument.label}
            </a>
            <button
              ref={closeBtnRef}
              onClick={onClose}
              className="inline-flex h-11 items-center justify-center border-2 border-ink bg-parchment px-4 font-mono text-xs font-semibold uppercase tracking-[0.14em] transition-colors duration-200 hover:bg-accent hover:text-paper"
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
            className="h-full w-full bg-parchment"
          >
            <p className="p-6 text-sm">Preview not available. You can download the CV instead.</p>
          </iframe>
        </div>
      </div>
    </div>
  );

  return createPortal(modal, document.body);
}