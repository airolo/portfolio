export default function SkillCard({ groups }) {
  return (
    <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2">
      {groups.map((group) => (
        <div key={group.title}>
          <h3 className="text-sm font-semibold tracking-tight">{group.title}</h3>
          <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
            {group.items.map((item) => {
              const Icon = item.icon;

              return (
                <li key={item.name} className="flex items-center gap-2 text-sm text-muted">
                  <Icon size={15} className="shrink-0 text-accent" aria-hidden="true" />
                  {item.name}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}
