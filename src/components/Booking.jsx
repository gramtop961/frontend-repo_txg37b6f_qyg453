import { useState } from 'react'

export default function Booking() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', checkin: '', checkout: '', guests: 2, message: '' })
  const [status, setStatus] = useState('')

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      // This demo posts to a mailto link fallback. You can later connect to backend or an email service.
      const body = encodeURIComponent(`Inquiry for The Regal Retreat\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nCheck-in: ${form.checkin}\nCheck-out: ${form.checkout}\nGuests: ${form.guests}\nMessage: ${form.message}`)
      window.location.href = `mailto:bookings@regalretreat.example?subject=Stay Inquiry - The Regal Retreat&body=${body}`
      setStatus('Opened your email client. If it did not open, please email or call us directly.')
    } catch (err) {
      setStatus('Could not open email client. Please try again or contact us.')
    }
  }

  return (
    <section id="book" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">Check availability</h2>
            <p className="mt-3 text-slate-600">Share your dates and we’ll confirm within minutes. Perfect for couples and small groups up to 4.</p>

            <form onSubmit={onSubmit} className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input name="name" value={form.name} onChange={onChange} placeholder="Full name" className="border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-900" required />
              <input name="email" type="email" value={form.email} onChange={onChange} placeholder="Email" className="border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-900" required />
              <input name="phone" value={form.phone} onChange={onChange} placeholder="Phone" className="border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-900 sm:col-span-2" />

              <input name="checkin" type="date" value={form.checkin} onChange={onChange} className="border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-900" required />
              <input name="checkout" type="date" value={form.checkout} onChange={onChange} className="border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-900" required />

              <select name="guests" value={form.guests} onChange={onChange} className="border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-900">
                {[1,2,3,4].map(n => <option key={n} value={n}>{n} guest{n>1?'s':''}</option>)}
              </select>

              <textarea name="message" value={form.message} onChange={onChange} placeholder="Anything we should know?" className="border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-900 sm:col-span-2" rows={4} />

              <button type="submit" className="sm:col-span-2 inline-flex items-center justify-center px-6 py-3 rounded-lg bg-slate-900 text-white font-semibold hover:bg-slate-800 transition">Request to book</button>
            </form>

            {status && <p className="mt-4 text-sm text-slate-600">{status}</p>}
          </div>

          <div className="rounded-2xl border border-slate-200 p-6 bg-slate-50">
            <h3 className="text-xl font-semibold text-slate-900">House rules</h3>
            <ul className="mt-3 text-slate-600 list-disc pl-5 space-y-2 text-sm">
              <li>Self check-in after 2 PM. Check-out by 11 AM.</li>
              <li>No smoking inside. No parties. Respect quiet hours after 10 PM.</li>
              <li>Pets on prior request only.</li>
              <li>Optional services available at extra charge: dry cleaning, extra cleaning, towels, pickup/drop, day tours.</li>
            </ul>

            <div className="mt-6 rounded-xl bg-white p-5 border border-slate-200">
              <h4 className="font-semibold text-slate-900">What guests love</h4>
              <p className="mt-2 text-slate-600 text-sm">Clean and minimalist interior, projector for movie nights, and a super convenient location to explore Kutch.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
