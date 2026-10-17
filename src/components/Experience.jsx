import { experience } from '../data/profile.js'
import SectionHead from './SectionHead.jsx'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="wrap">
        <SectionHead title="Experience" subtitle="Where I've worked and what I shipped" />
        <div className="relative mx-auto grid max-w-[920px] gap-5 before:absolute before:bottom-2 before:left-[9px] before:top-2 before:w-0.5 before:bg-gradient-to-b before:from-teal before:via-cyan before:to-transparent">
          {experience.map((job) => (
            <div key={job.title + job.date} className="relative pl-10">
              <span className="absolute left-0.5 top-[22px] h-4 w-4 rounded-full border-[3px] border-teal bg-ink" />
              <div className="card px-6 py-5">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <h3 className="text-[17px] font-bold">{job.title}</h3>
                    <div className="text-sm font-semibold text-teal">{job.company}</div>
                  </div>
                  <span className="whitespace-nowrap text-xs tabular-nums text-muted">{job.date}</span>
                </div>
                {job.context && <p className="mt-2 text-[12.5px] italic text-muted">{job.context}</p>}
                <ul className="mt-3 grid list-disc gap-1.5 pl-[18px] text-[13.5px] text-soft marker:text-teal">
                  {job.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
                {job.tags.length > 0 && (
                  <div className="mt-3.5 flex flex-wrap gap-1.5">{job.tags.map((t) => <span key={t} className="tag">{t}</span>)}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
