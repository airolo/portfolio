export default function Footer() {
  return (
    <footer className="border-t-2 border-ink">
      <div className="border-b-2 border-ink bg-accent py-3" aria-hidden="true">
        <div className="marquee-track">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex items-center gap-8">
              {[
                'Clean Code',
                'Secure Systems',
                'Scalable Apps',
                'Full-Stack',
                'Always Learning',
                'Problem Solving',
              ].map((item) => (
                <span
                  key={`${copy}-${item}`}
                  className="flex items-center gap-8 font-mono text-xs font-semibold uppercase tracking-[0.24em] text-paper"
                >
                  {item} <span className="text-paper/70">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="shell flex flex-col gap-3 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-xs text-muted">
          Copyright © 2026. All rights reserved.
        </p>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
          Designed & built by <span className="text-accent">Bradley Soloria</span>
        </p>
      </div>
    </footer>
  );
}