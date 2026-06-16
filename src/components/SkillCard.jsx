export default function SkillCard({ title, groups }) {
  return (
    <article className="glass-panel overflow-visible rounded-[1.75rem] p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-7">
      <h3 className="text-lg font-semibold text-zinc-950 dark:text-zinc-50">{title}</h3>

      <div className="mt-6 space-y-6">
        {groups.map((group) => {
          return (
            <div key={group.title}>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400">{group.title}</p>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3" aria-label={group.title}>
                {group.items.map((item) => {
                  const Icon = item.icon;

                  return (
                    <li
                      key={item.name}
                      className="group relative"
                    >
                      <button
                        type="button"
                        className="flex w-full flex-col items-center justify-center gap-2 rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-3 text-center text-xs text-zinc-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-zinc-950 hover:bg-white focus:outline-none focus:ring-2 focus:ring-zinc-950/20 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-zinc-200 dark:hover:bg-zinc-950 dark:focus:ring-zinc-200/20 sm:py-4"
                        aria-label={item.name}
                      >
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-950 shadow-sm transition group-hover:scale-105 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-50">
                          <Icon size={16} />
                        </span>
                        <span className="text-[0.78rem] font-medium leading-none text-zinc-950 dark:text-zinc-50">{item.name}</span>
                      </button>

                      <div className="pointer-events-none absolute left-1/2 top-full z-20 mt-3 w-[min(16rem,calc(100vw-2rem))] -translate-x-1/2 translate-y-1 rounded-2xl border border-zinc-200 bg-white p-3 text-left opacity-0 shadow-[0_20px_60px_rgba(0,0,0,0.14)] transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100 dark:border-zinc-700 dark:bg-zinc-950">
                        <p className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">{item.name}</p>
                        <p className="mt-1.5 text-xs leading-5 text-zinc-600 dark:text-zinc-300">{item.description}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </article>
  );
}
