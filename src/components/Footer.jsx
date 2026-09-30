export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="shell flex flex-col gap-2 py-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted">&copy; 2026 Bradley Soloria</p>
        <p className="text-xs text-muted">Built with React, Vite and Tailwind CSS</p>
      </div>
    </footer>
  );
}
