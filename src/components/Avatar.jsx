import { profile } from '../data/profile.js'

export default function Avatar({ size = 'h-[200px] w-[200px] text-[62px]' }) {
  return (
    <div className={`${size} grid shrink-0 place-items-center overflow-hidden rounded-full border-4 border-ok bg-[radial-gradient(circle_at_35%_30%,#1b3b45,#0d1820)] font-extrabold shadow-[0_0_40px_rgba(34,197,94,.18)]`}>
      {profile.photo
        ? <img src={profile.photo} alt={profile.name} className="h-full w-full scale-[1.35] object-cover object-[50%_40%]" />
        : <span className="grad">{profile.initials}</span>}
    </div>
  )
}
