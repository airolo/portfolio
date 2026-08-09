export default function TimelineItem({ item, isLast }) {
  return (
    <div className={`relative py-8 pl-4 ${isLast ? '' : 'border-b border-line/70'}`}>
      <div className="flex flex-wrap items-center gap-3">
        <span className="index-num">{item.period}</span>
        <span className="chip !py-1">{item.organization}</span>
      </div>
      <h3 className="mt-3 font-display text-xl font-semibold tracking-tight sm:text-2xl">
        {item.title}
      </h3>
      <p className="mt-3 max-w-3xl text-sm leading-7 text-muted">{item.description}</p>
    </div>
  );
}