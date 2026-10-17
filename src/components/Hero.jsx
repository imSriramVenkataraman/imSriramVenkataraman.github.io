import { profile, orbit } from '../data/profile.js'
import { LinkedInIcon, MailIcon, PinIcon, GitHubIcon } from './Icons.jsx'
import Avatar from './Avatar.jsx'

// chip positions around the ring, as % of the orbit box
const spots = [[50, 9], [83, 24], [92, 55], [76, 84], [44, 92], [14, 76], [8, 44], [20, 17]]

function Orbit() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[400px]" aria-label="Platforms I work with">
      <div className="absolute inset-[6%] rounded-full bg-[radial-gradient(circle,rgba(34,184,230,.22),transparent_65%)]" />
      <div className="absolute inset-[14%] rounded-full border border-dashed border-[#1f3f48]" />
      <div className="absolute inset-[30%] rounded-full border border-dashed border-[#1f3f48]" />
      <div className="absolute inset-[36%] grid place-items-center rounded-[22px] border border-[#23505a] bg-gradient-to-br from-[#12303a] to-[#0d1a22] text-center text-[11px] text-muted shadow-[0_0_30px_rgba(45,212,191,.2)]">
        <div><b className="block text-[22px] text-fg">7 yrs</b>multi-cloud</div>
      </div>
      <div className="absolute inset-0 animate-orbit">
        {orbit.map((label, i) => (
          <div
            key={label}
            style={{ left: `${spots[i % spots.length][0]}%`, top: `${spots[i % spots.length][1]}%` }}
            className={`absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-xl border px-3 py-2 text-xs font-semibold shadow-[0_6px_18px_rgba(0,0,0,.4)] ${i % 2 ? 'border-[#1f5470] bg-[#0f2f40] text-[#d8f3ff]' : 'border-[#1f6158] bg-[#0f3b36] text-[#d6fff8]'}`}
          >
            <span className="inline-block animate-counter">{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <div id="home" className="hero-lines relative overflow-hidden border-b border-line">
      <div className="wrap relative grid items-center gap-10 py-12 sm:py-20 md:grid-cols-[180px_minmax(0,1fr)] xl:grid-cols-[220px_minmax(0,1fr)_minmax(0,420px)]">
        <Avatar size="h-[150px] w-[150px] text-[46px] sm:h-[170px] sm:w-[170px] sm:text-[52px] xl:h-[200px] xl:w-[200px] xl:text-[62px]" />

        <div className="min-w-0">
          <h1 className="text-[clamp(38px,5.4vw,62px)] font-extrabold leading-[1.15]">
            Hi, I'm<br /><span className="grad">{profile.name}</span>
          </h1>
          <p className="mt-4 text-[clamp(18px,2.2vw,26px)] font-medium leading-snug">
            {profile.role}<br />{profile.roleLine2}
          </p>
          <p className="mt-4 max-w-[56ch] text-soft">{profile.lede}</p>

          <div className="mt-7 flex flex-wrap gap-3.5">
            <a className="btn" href="#contact">Get In Touch</a>
            <a className="btn" href="#projects">View Projects</a>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-3.5">
            <a className="soc" href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedInIcon /></a>
            {profile.github && <a className="soc" href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><GitHubIcon /></a>}
            <a className="soc !border-ok !text-ok hover:!bg-ok/15" href={`mailto:${profile.email}`} aria-label="Email"><MailIcon /></a>
            <span className="flex items-center gap-1.5 text-[13px] text-muted"><PinIcon className="h-3.5 w-3.5" />{profile.location}</span>
          </div>
        </div>

        <div className="md:col-span-2 xl:col-span-1">
          <Orbit />
          <a href="#skills" className="mx-auto mt-1.5 block w-max rounded-full border border-teal px-3.5 py-1 text-xs text-teal">View all skills</a>
        </div>
      </div>
    </div>
  )
}
