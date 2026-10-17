import { useState } from 'react'
import { profile } from '../data/profile.js'
import { LinkedInIcon, MailIcon, PinIcon } from './Icons.jsx'
import SectionHead from './SectionHead.jsx'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try { await navigator.clipboard.writeText(profile.email); setCopied(true) } catch { /* clipboard blocked */ }
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="section">
      <div className="wrap">
        <SectionHead title="Contact" subtitle="Happy to talk platforms, cloud and DevOps" />
        <div className="mx-auto grid max-w-[960px] gap-5 md:grid-cols-3">
          <div className="card flex flex-col items-center gap-2 p-6 text-center">
            <span className="soc mb-1.5 !border-ok !text-ok"><MailIcon /></span>
            <small className="text-xs uppercase tracking-[.08em] text-muted">Email</small>
            <a href={`mailto:${profile.email}`} className="break-all text-[13.5px] text-teal hover:text-cyan">{profile.email}</a>
            <button onClick={copy} className="rounded-full border border-teal px-3.5 py-1 text-xs text-teal hover:bg-teal/15">{copied ? 'Copied' : 'Copy email'}</button>
          </div>
          <div className="card flex flex-col items-center gap-2 p-6 text-center">
            <span className="soc mb-1.5"><LinkedInIcon /></span>
            <small className="text-xs uppercase tracking-[.08em] text-muted">LinkedIn</small>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="break-all text-[13.5px] text-teal hover:text-cyan">{profile.linkedinLabel}</a>
          </div>
          <div className="card flex flex-col items-center gap-2 p-6 text-center">
            <span className="soc mb-1.5"><PinIcon /></span>
            <small className="text-xs uppercase tracking-[.08em] text-muted">Location</small>
            <span className="text-[13.5px]">{profile.locationShort}</span>
          </div>
        </div>
        <p className="mt-8 text-center text-[13px] text-muted">Languages: {profile.languages}</p>
      </div>
    </section>
  )
}
