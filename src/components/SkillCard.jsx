export default function SkillCard({ groups }) {
  return (
    <div className="mt-12 grid gap-6 md:grid-cols-2">
      {groups.map((group) => {
        const count = group.items.length;
        return (
          <article key={group.title} className="glass-panel rounded-[1.5rem] p-6 sm:p-7">
            <div className="flex items-center justify-between gap-3 border-b border-zinc-200 pb-5 dark:border-zinc-800">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500 sm:text-sm sm:tracking-[0.3em] dark:text-zinc-400">
                {group.title}
              </p>
              <span className="text-xs font-medium text-zinc-400 dark:text-zinc-500">
                {count} {count === 1 ? 'tool' : 'tools'}
              </span>
            </div>

            <ul className="mt-5 flex flex-wrap gap-2.5" aria-label={group.title}>
              {group.items.map((item) => {
                const Icon = item.icon;

                return (
                  <li key={item.name}>
                    <span className="group relative inline-flex max-w-full items-center gap-2 rounded-full border border-zinc-200 bg-white/70 px-3 py-2 text-xs font-medium text-zinc-700 transition hover:border-zinc-950 hover:bg-white dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-zinc-200 dark:hover:bg-zinc-950">
                      <span className="inline-flex items-center text-zinc-950 dark:text-zinc-50">
                        <Icon size={14} />
                        <span className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-2 w-max max-w-[14rem] -translate-x-1/2 translate-y-1 rounded-xl border border-zinc-200 bg-white px-3 py-2 text-[11px] leading-5 text-zinc-600 opacity-0 shadow-lg transition duration-200 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-300">
                          {item.description}
                        </span>
                      </span>
                      {item.name}
                    </span>
                  </li>
                );
              })}
            </ul>
          </article>
        );
      })}
    </div>
  );
}