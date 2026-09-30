export default function TimelineItem({ item, isLast }) {
  return (
    <div
      className={`grid gap-1 py-6 sm:grid-cols-[12rem_1fr] sm:gap-8 ${
        isLast ? '' : 'border-b border-line'
      }`}
    >
      <p className="text-xs text-muted sm:pt-1">{item.period}</p>

      <div>
        <h3 className="font-medium tracking-tight">{item.title}</h3>
        <p className="mt-1 text-sm text-muted">{item.organization}</p>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
          {item.description}
        </p>
      </div>
    </div>
  );
}
