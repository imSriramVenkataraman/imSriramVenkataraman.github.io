import { projects } from '../data/profile.js'
import SectionHead from './SectionHead.jsx'

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="wrap">
        <SectionHead title="Key Projects" subtitle="Selected enterprise delivery" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <div key={p.title} className="card flex flex-col gap-2.5 p-6 transition hover:-translate-y-0.5 hover:border-[#2a5a55]">
              <span className="text-[11px] uppercase tracking-[.08em] text-cyan">{p.kind}</span>
              <h3 className="text-[17px] font-bold">{p.title}</h3>
              <p className="text-[13px] text-soft">{p.text}</p>
              <div className="mt-auto flex flex-wrap gap-4 border-t border-dashed border-line pt-3 text-xs text-muted">
                {p.metrics.map(([v, l]) => <span key={v + l}><b className="tabular-nums text-teal">{v}</b> {l}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
