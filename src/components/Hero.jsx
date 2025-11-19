import Spline from '@splinetool/react-spline'
import { MapPin, CalendarCheck, DoorOpen } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/1VHYoewWfi45VYZ5/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70 pointer-events-none" />

      <div className="relative z-10 h-full max-w-6xl mx-auto px-6 flex items-center">
        <div className="text-white">
          <p className="text-sm uppercase tracking-widest text-white/80 mb-3">Bhuj • Kutch</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">The Regal Retreat</h1>
          <p className="mt-4 max-w-2xl text-white/90 text-lg sm:text-xl">A minimal yet aesthetic studio apartment with private entry, self check-in, and a cozy cinema-night vibe — right beside NY Cinema, Seven Sky Clerk Exotica, and Seven Sky Mall; minutes from Bhuj Airport.</p>

          <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-white/90">
            <span className="inline-flex items-center gap-2 bg-white/10 px-3 py-2 rounded-full backdrop-blur">
              <DoorOpen className="w-4 h-4" /> Private entry • Self check-in
            </span>
            <span className="inline-flex items-center gap-2 bg-white/10 px-3 py-2 rounded-full backdrop-blur">
              <CalendarCheck className="w-4 h-4" /> Perfect for 2–4 guests
            </span>
            <span className="inline-flex items-center gap-2 bg-white/10 px-3 py-2 rounded-full backdrop-blur">
              <MapPin className="w-4 h-4" /> Prime location
            </span>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#book" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-slate-900 font-semibold shadow/50 shadow-black/20 hover:shadow-lg hover:shadow-black/30 transition">Check availability</a>
            <a href="#amenities" className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-white/30 text-white hover:bg-white/10 transition">Explore amenities</a>
          </div>
        </div>
      </div>
    </section>
  )
}
