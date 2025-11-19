import Hero from './components/Hero'
import Amenities from './components/Amenities'
import Location from './components/Location'
import Booking from './components/Booking'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-white text-slate-900">
      {/* SEO meta for basic discoverability */}
      <SEO />
      <header className="absolute top-0 left-0 right-0 z-20">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <a href="#" className="text-white font-extrabold tracking-tight text-xl">The Regal Retreat</a>
          <nav className="hidden md:flex items-center gap-6 text-white/90">
            <a href="#amenities" className="hover:text-white">Amenities</a>
            <a href="#book" className="hover:text-white">Book</a>
            <a href="#location" className="hover:text-white">Location</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Amenities />
        <Location />
        <Booking />
      </main>

      <Footer />
    </div>
  )
}

function SEO() {
  return (
    <>
      <title>The Regal Retreat • Studio Stay in Bhuj Kutch — Near NY Cinema & Airport</title>
      <meta name="description" content="The Regal Retreat in Bhuj Kutch — a minimal, aesthetic studio apartment with self check-in, private entry, projector for movie nights, kitchen, and essentials. Beside NY Cinema, Seven Sky Clerk Exotica & Mall, near the airport." />
      <meta name="keywords" content="Bhuj stay, Kutch studio apartment, Bhuj Airbnb, near NY Cinema Bhuj, Seven Sky Clerk Exotica hotel, Seven Sky Mall, Bhuj airport stay, projector apartment Bhuj, self check-in Bhuj, studio for 4 Bhuj" />
      <meta property="og:title" content="The Regal Retreat • Studio Stay in Bhuj Kutch" />
      <meta property="og:description" content="Minimal, cozy studio with projector and private entry, beside NY Cinema & Seven Sky, near Bhuj Airport. Perfect for 2–4 guests." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={typeof window !== 'undefined' ? window.location.href : ''} />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="canonical" href={typeof window !== 'undefined' ? window.location.href : ''} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'LodgingBusiness',
        name: 'The Regal Retreat',
        description: 'Minimal aesthetic studio apartment in Bhuj Kutch with projector, kitchen, and self check-in. Beside NY Cinema & Seven Sky, near airport.',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Bhuj',
          addressRegion: 'Kutch',
          addressCountry: 'IN'
        },
        amenityFeature: [
          { '@type': 'LocationFeatureSpecification', name: 'Private entry & self check-in' },
          { '@type': 'LocationFeatureSpecification', name: 'Projector & sofa-cum-bed' },
          { '@type': 'LocationFeatureSpecification', name: '6x6 double bed' },
          { '@type': 'LocationFeatureSpecification', name: 'Kitchen with induction & spices' },
          { '@type': 'LocationFeatureSpecification', name: 'Bathroom with shower & dispensers' },
          { '@type': 'LocationFeatureSpecification', name: 'Common parking space' }
        ],
        url: typeof window !== 'undefined' ? window.location.href : 'https://regalretreat.example',
        sameAs: [
          'https://maps.google.com/?q=NY%20Cinema%20Bhuj'
        ]
      }) }} />
    </>
  )
}

export default App
