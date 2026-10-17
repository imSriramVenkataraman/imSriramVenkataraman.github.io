import { useEffect, useState } from 'react'
import { nav, profile } from '../data/profile.js'
import { LinkedInIcon, MailIcon, GitHubIcon } from './Icons.jsx'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const ids = nav.map((n) => n.toLowerCase())
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    ids.forEach((id) => { const el = document.getElementById(id); if (el) io.observe(el) })
    return () => io.disconnect()
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/90 backdrop-blur">
      <div className="wrap flex h-16 items-center justify-between gap-4">
        <a href="#home" className="grad text-[17px] font-bold">{profile.name}</a>

        <nav
          className={`${open ? 'flex' : 'hidden'} absolute inset-x-0 top-16 flex-col border-b border-line bg-ink-2 px-5 py-2 md:static md:flex md:flex-row md:gap-6 md:border-0 md:bg-transparent md:p-0`}
        >
          {nav.map((n) => {
            const id = n.toLowerCase()
            return (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className={`border-b border-line py-2.5 text-[13px] md:border-0 md:py-0 ${active === id ? 'text-teal' : 'text-fg hover:text-teal'}`}
              >
                {n}
              </a>
            )
          })}
        </nav>

        <div className="hidden gap-2 md:flex">
          {profile.github && <a className="ic" href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><GitHubIcon /></a>}
          <a className="ic" href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedInIcon /></a>
          <a className="ic" href={`mailto:${profile.email}`} aria-label="Email"><MailIcon /></a>
        </div>

        <button
          className="grid h-10 w-10 place-items-center rounded-lg border border-line md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          ☰
        </button>
      </div>
    </header>
  )
}
