import { BedDouble, DoorOpen, Projector, Refrigerator, Utensils, Coffee, ShieldCheck, ShowerHead, CarFront, KeyRound, Wifi, TvMinimalPlay, Bath, Sparkles } from 'lucide-react'

const items = [
  { icon: BedDouble, title: 'Private Bedroom', desc: '6x6 comfy double bed, aesthetic mirror, compact wardrobe' },
  { icon: Projector, title: 'Projector + Sofa-cum-bed', desc: 'Cinematic living room, extra sleep space for 2' },
  { icon: DoorOpen, title: 'Private Entry', desc: 'Self check-in via lockbox — simple and secure' },
  { icon: Utensils, title: 'Functional Kitchen', desc: 'Induction, utensils, mugs, spices, foldable dining' },
  { icon: ShowerHead, title: 'Essential Bathroom', desc: 'Shower, basin, toilet, shampoo + gel dispensers' },
  { icon: Wifi, title: 'Fast Wi‑Fi', desc: 'Stream, work, or binge comfortably' },
  { icon: CarFront, title: 'Common Parking', desc: 'Convenient space beside the apartment' },
  { icon: KeyRound, title: 'Self Check‑in', desc: 'Lockbox access — arrive on your time' },
  { icon: TvMinimalPlay, title: 'Movie Night Ready', desc: 'Bring the cinema feel to your stay' },
  { icon: ShieldCheck, title: 'Safe & Quiet', desc: 'Minimal, aesthetic, and restful' },
]

export default function Amenities() {
  return (
    <section id="amenities" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">Comforts that matter</h2>
        <p className="mt-3 text-slate-600 max-w-2xl">Designed for couples, friends, and solo travelers who value clean design, comfort, and effortless convenience.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-slate-200 p-6 hover:shadow-xl transition shadow-slate-100">
              <div className="w-11 h-11 rounded-xl bg-slate-900 text-white flex items-center justify-center">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 text-white p-8 flex flex-col md:flex-row items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold">Optional add-ons</h3>
            <p className="text-white/80 mt-1">Dry cleaning, extra cleaning, fresh towels, airport pickup/drop, and curated day tours.</p>
          </div>
          <a href="#book" className="mt-4 md:mt-0 inline-flex items-center px-5 py-3 rounded-lg bg-white text-slate-900 font-semibold hover:bg-slate-100 transition">Plan your stay</a>
        </div>
      </div>
    </section>
  )
}
