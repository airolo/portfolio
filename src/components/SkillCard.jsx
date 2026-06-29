export default function SkillCard({ title, groups }) {
  return (
    <article className="glass-panel rounded-[1.75rem] p-6 sm:p-7">
      <div className="flex flex-col gap-3 border-b border-zinc-200 pb-5 dark:border-zinc-800 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-zinc-950 dark:text-zinc-50">{title}</h3>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-600 dark:text-zinc-300">
            Practical tools for interfaces, APIs, databases, version control, and assisted development.
          </p>
        </div>
        <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
          {groups.reduce((total, group) => total + group.items.length, 0)} tools
        </p>
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        {groups.map((group) => {
          return (
            <div key={group.title} className="rounded-2xl border border-zinc-200 bg-white/70 p-4 dark:border-zinc-800 dark:bg-zinc-950/60">
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-zinc-500 dark:text-zinc-400">{group.title}</p>
                <span className="text-xs font-medium text-zinc-400 dark:text-zinc-500">{group.items.length}</span>
              </div>

              <ul className="mt-4 flex flex-wrap gap-2" aria-label={group.title}>
                {group.items.map((item) => {
                  const Icon = item.icon;

                  return (
                    <li key={item.name}>
                      <span
                        className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-2 text-xs font-medium text-zinc-700 transition hover:border-zinc-950 hover:bg-white dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-zinc-200 dark:hover:bg-zinc-950"
                        title={item.description}
                      >
                        <span className="text-zinc-950 dark:text-zinc-50">
                          <Icon size={14} />
                        </span>
                        {item.name}
                      </span>
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
