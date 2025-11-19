export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-xl font-extrabold">The Regal Retreat</h4>
          <p className="text-white/70 mt-2 text-sm">Minimal, cozy, and perfectly located in Bhuj — beside NY Cinema and Seven Sky, near the airport. A comfortable studio for 2–4 guests.</p>
        </div>

        <div>
          <h5 className="font-semibold">Contact</h5>
          <ul className="mt-3 space-y-2 text-white/80 text-sm">
            <li>Email: stay@regalretreat.in</li>
            <li>Phone: +91 9XXXXXXXXX</li>
            <li>Bhuj, Kutch, Gujarat</li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold">Quick links</h5>
          <ul className="mt-3 space-y-2 text-white/80 text-sm">
            <li><a href="#amenities" className="hover:text-white">Amenities</a></li>
            <li><a href="#book" className="hover:text-white">Book your stay</a></li>
            <li><a href="/test" className="hover:text-white">System status</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-6 text-sm text-white/60 flex items-center justify-between">
          <p>© {new Date().getFullYear()} The Regal Retreat. All rights reserved.</p>
          <p>Crafted for a seamless stay in Bhuj • Kutch</p>
        </div>
      </div>
    </footer>
  )
}
