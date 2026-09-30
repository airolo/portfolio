export default function SectionHeader({ kicker, title, description }) {
  return (
    <div className="max-w-2xl">
      <p className="kicker">{kicker}</p>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted">{description}</p>
      ) : null}
    </div>
  );
}
