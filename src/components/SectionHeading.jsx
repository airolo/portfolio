export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <p className="section-label">{eyebrow}</p>
      <h2 className="section-title mt-4">{title}</h2>
      {description ? <p className="section-copy mt-5">{description}</p> : null}
    </div>
  );
}
