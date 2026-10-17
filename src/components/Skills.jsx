import { skills } from '../data/profile.js'
import SectionHead from './SectionHead.jsx'

const MAX_YEARS = 7

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="wrap">
        <SectionHead title="Skills" subtitle="Years of hands-on production use" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s) => (
            <div key={s.group} className="card px-6 py-5">
              <div className="mb-3 flex items-baseline justify-between gap-2.5">
                <h3 className="text-[15px] font-bold">{s.group}</h3>
                <span className="whitespace-nowrap text-xs text-teal">{s.years} yrs</span>
              </div>
              <div className="mb-3.5 h-1 overflow-hidden rounded bg-[#16232e]">
                <i className="block h-full bg-gradient-to-r from-teal to-cyan" style={{ width: `${Math.round((s.years / MAX_YEARS) * 100)}%` }} />
              </div>
              <div className="flex flex-wrap gap-1.5">{s.items.map((t) => <span key={t} className="tag">{t}</span>)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
