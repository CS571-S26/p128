export default function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="section-heading mb-4">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description && <p className="page-copy mb-0">{description}</p>}
    </div>
  )
}