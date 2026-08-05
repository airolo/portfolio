export default function TimelineItem({ item, isLast }) {
  return (
    <div className="relative pb-10 pl-10 last:pb-0">
      <span
        className="absolute left-[7px] top-1.5 h-3 w-3 rounded-full border border-zinc-950 bg-white dark:border-zinc-50 dark:bg-zinc-950"
        aria-hidden="true"
      />
      {!isLast ? (
        <span className="absolute left-[12px] top-6 h-full w-px bg-zinc-300 dark:bg-zinc-700" aria-hidden="true" />
      ) : null}

      <span className="inline-flex rounded-full border border-zinc-200 bg-white/70 px-3 py-1 text-xs font-medium text-zinc-500 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-400">
        {item.period}
      </span>
      <h3 className="mt-3 text-lg font-semibold sm:text-xl">{item.title}</h3>
      <p className="mt-1.5 text-sm font-medium text-zinc-500 dark:text-zinc-400">{item.organization}</p>
      <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-600 dark:text-zinc-300">{item.description}</p>
    </div>
  );
}