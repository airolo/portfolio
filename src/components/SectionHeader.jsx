export default function SectionHeader({ index, kicker, title, description, align = 'left' }) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <div
        className={`flex items-center gap-4 ${align === 'center' ? 'justify-center' : ''}`}
      >
        {index ? <span className="index-num">{index}</span> : null}
        <span className="kicker">{kicker}</span>
        <span className={`rule ${align === 'center' ? '' : 'flex-1'}`} aria-hidden="true" />
      </div>
      <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? <p className="mt-4 text-base leading-8 text-muted sm:text-lg">{description}</p> : null}
    </div>
  );
}