import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { FiDownload, FiX } from 'react-icons/fi';

const documents = {
  cv: { label: 'CV', fileName: 'cv.pdf', title: 'Curriculum Vitae' },
  resume: { label: 'Resume', fileName: 'resume.pdf', title: 'Resume' },
};

export default function CvModal({ open, onClose }) {
  const closeButtonRef = useRef(null);
  const [selectedDocument, setSelectedDocument] = useState('resume');

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      setSelectedDocument('resume');
      closeButtonRef.current?.focus();
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;

    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open || typeof document === 'undefined') return null;

  const currentDocument = documents[selectedDocument];

  const modal = (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6">
      <div className="fixed inset-0 bg-coal/70" onClick={onClose} aria-hidden="true" />

      <div
        role="dialog"
        aria-modal="true"
        aria-label="CV and resume preview"
        className="relative flex max-h-[90svh] w-full max-w-5xl flex-col overflow-hidden border border-line bg-parchment"
      >
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line px-5 py-3">
          <div className="flex items-center gap-4">
            <h3 className="text-sm font-semibold">{currentDocument.title}</h3>

            <div className="flex gap-1">
              {Object.entries(documents).map(([key, doc]) => (
                <button
                  key={doc.label}
                  type="button"
                  onClick={() => setSelectedDocument(key)}
                  aria-pressed={selectedDocument === key}
                  className={`px-2.5 py-1 text-xs transition-colors duration-150 ${
                    selectedDocument === key
                      ? 'bg-ink text-paper'
                      : 'text-muted hover:text-ink'
                  }`}
                >
                  {doc.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={`/${currentDocument.fileName}`}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="btn-secondary px-4 py-2 text-sm"
            >
              <FiDownload size={15} /> Download
            </a>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label="Close document preview"
              className="inline-flex h-9 w-9 items-center justify-center text-muted transition-colors duration-150 hover:text-ink"
            >
              <FiX size={18} />
            </button>
          </div>
        </div>

        <div className="min-h-0 flex-1">
          <iframe
            src={`/${currentDocument.fileName}`}
            title={`${currentDocument.title} preview`}
            className="h-[70svh] w-full bg-parchment"
          >
            <p className="p-6 text-sm">Preview unavailable. You can download the file instead.</p>
          </iframe>
        </div>
      </div>
    </div>
  );

  return createPortal(modal, document.body);
}
