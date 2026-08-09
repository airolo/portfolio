export default function SkillCard({ groups }) {
  return (
    <div className="mt-12 grid gap-6 lg:grid-cols-2">
      {groups.map((group, groupIndex) => {
        const count = group.items.length;
        return (
          <article key={group.title} className="paper-card shadow-offset flex flex-col p-6 sm:p-7">
            <div className="flex items-start justify-between gap-4 border-b-2 border-ink pb-4">
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-sm font-semibold text-accent">
                  {String(groupIndex + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display text-xl font-semibold tracking-tight">{group.title}</h3>
              </div>
              <span className="chip !py-1">{count} {count === 1 ? 'tool' : 'tools'}</span>
            </div>

            <ul className="mt-5 flex flex-wrap gap-2.5" aria-label={group.title}>
              {group.items.map((item) => {
                const Icon = item.icon;

                return (
                  <li key={item.name}>
                    <span
                      className="chip group relative"
                    >
                      <Icon size={13} className="text-ink transition-colors group-hover:text-accent" />
                      {item.name}
                      <span className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-2 w-max max-w-[14rem] -translate-x-1/2 translate-y-1 border-2 border-ink bg-parchment px-3 py-2 text-[11px] font-sans font-normal normal-case leading-5 tracking-normal text-muted opacity-0 transition duration-200 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100">
                        {item.description}
                      </span>
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