import { profile } from '../data/profile.js'
import { LinkedInIcon, MailIcon, GitHubIcon } from './Icons.jsx'

export default function Footer() {
  return (
    <footer className="py-11">
      <div className="wrap grid items-center gap-7 text-center md:grid-cols-[1.2fr_1fr_1.2fr] md:text-left">
        <div>
          <div className="grad text-xl font-bold">{profile.name}</div>
          <p className="mt-2.5 text-[13px] text-soft">{profile.footerBlurb}</p>
        </div>
        <div className="flex flex-col items-center gap-3">
          <div className="flex gap-3">
            <a className="ic" href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedInIcon /></a>
            {profile.github && <a className="ic" href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><GitHubIcon /></a>}
            <a className="ic" href={`mailto:${profile.email}`} aria-label="Email"><MailIcon /></a>
          </div>
          <span className="text-[13px] text-muted">{profile.location}</span>
        </div>
        <div className="text-[12.5px] text-muted md:text-right">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.<br />
          Built with React &amp; Tailwind CSS
        </div>
      </div>
    </footer>
  )
}
