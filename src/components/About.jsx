import { profile, about, stats, certifications, focusAreas } from '../data/profile.js'
import SectionHead from './SectionHead.jsx'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="wrap">
        <SectionHead title="About Me" subtitle="Get to know me better" />
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="min-w-0">
            <h3 className="text-xl font-bold">{profile.name}</h3>
            <div className="mt-1.5 font-semibold text-teal">{profile.role}</div>
            {about.map((p) => <p key={p.slice(0, 20)} className="mt-4 text-soft">{p}</p>)}
            <div className="mt-7 grid grid-cols-2 gap-3.5">
              {stats.map((s) => (
                <div key={s.label} className="card px-4 py-5 text-center">
                  <b className="block text-3xl tabular-nums text-cyan">{s.value}</b>
                  <span className="text-[13px]">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="min-w-0">
            <h3 className="mb-4 text-xl font-bold">Professional Certifications</h3>
            <div className="mb-9 grid gap-3">
              {certifications.map((c) => (
                <div key={c.name} className="card flex flex-wrap items-center justify-between gap-3 px-5 py-4">
                  <div>
                    <strong className="text-sm">{c.name}</strong>
                    <small className="block text-xs text-muted">{c.issuer}</small>
                  </div>
                  <span className={`whitespace-nowrap rounded-full px-3 py-0.5 text-[11px] ${c.wip ? 'bg-[#3a2f0f] text-[#f2c94c]' : 'bg-[#0f3b36] text-teal'}`}>{c.status}</span>
                </div>
              ))}
            </div>

            <h3 className="mb-4 text-xl font-bold">Platform Engineering &amp; Delivery</h3>
            <div className="grid gap-3">
              {focusAreas.map((f) => (
                <div key={f.title} className="card px-5 py-4">
                  <h4 className="flex items-center gap-2.5 text-sm font-bold"><span className="h-[7px] w-[7px] shrink-0 rounded-full bg-teal" />{f.title}</h4>
                  <p className="ml-[17px] mt-1.5 text-[12.5px] leading-relaxed text-muted">{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
