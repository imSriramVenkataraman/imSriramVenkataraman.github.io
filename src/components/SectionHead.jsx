export default function SectionHead({ title, subtitle }) {
  return (
    <div className="mb-12 text-center">
      <h2 className="text-[clamp(28px,3.4vw,38px)] font-extrabold leading-tight">{title}</h2>
      {subtitle && <p className="mt-2 text-muted">{subtitle}</p>}
    </div>
  )
}
