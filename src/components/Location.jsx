import { MapPin, Landmark, Plane, Building2 } from 'lucide-react'

export default function Location() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">Prime Bhuj location</h2>
        <p className="mt-3 text-slate-600 max-w-3xl">Stay beside NY Cinema, Seven Sky Clerk Exotica Hotel, and Seven Sky Mall — with Bhuj Airport just a short drive away. Perfect base for exploring Kutch.</p>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-slate-200 p-6 bg-white">
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-center gap-3"><MapPin className="w-5 h-5 text-slate-900" /> Beside NY Cinema</li>
              <li className="flex items-center gap-3"><Building2 className="w-5 h-5 text-slate-900" /> Next to Seven Sky Clerk Exotica</li>
              <li className="flex items-center gap-3"><Landmark className="w-5 h-5 text-slate-900" /> Seven Sky Mall close by</li>
              <li className="flex items-center gap-3"><Plane className="w-5 h-5 text-slate-900" /> Near Bhuj Airport</li>
            </ul>

            <div className="mt-6 text-sm text-slate-600">Easy access to local eateries, essentials, and day-trip routes across the Kutch region.</div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white">
            <iframe
              title="The Regal Retreat Location"
              src="https://www.google.com/maps?q=NY%20Cinema%20Bhuj&output=embed"
              className="w-full h-[340px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
