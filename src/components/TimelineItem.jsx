export default function TimelineItem({ item, isLast }) {
  return (
    <div className="relative pl-10 pb-10 last:pb-0">
      <span className="absolute left-[7px] top-2 h-3 w-3 rounded-full border border-zinc-950 bg-white dark:border-zinc-50 dark:bg-zinc-950" aria-hidden="true" />
      {!isLast ? <span className="absolute left-[12px] top-5 h-full w-px bg-zinc-300 dark:bg-zinc-700" aria-hidden="true" /> : null}
      <p className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-500 sm:text-sm sm:tracking-[0.25em] dark:text-zinc-400">{item.period}</p>
      <h3 className="mt-3 text-lg font-semibold sm:text-xl">{item.title}</h3>
      <p className="mt-2 text-sm font-medium text-zinc-500 dark:text-zinc-400">{item.organization}</p>
      <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-600 dark:text-zinc-300">{item.description}</p>
    </div>
  );
}
