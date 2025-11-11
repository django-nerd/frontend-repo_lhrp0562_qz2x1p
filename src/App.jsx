import Navbar from './components/Navbar'
import ParallaxHero from './components/ParallaxHero'
import Section from './components/Section'
import ProductGrid from './components/ProductGrid'
import VerticalFarming from './components/VerticalFarming'
import AppExperience from './components/AppExperience'
import Benefits from './components/Benefits'
import Testimonials from './components/Testimonials'
import BackgroundFX from './components/BackgroundFX'
import Showcase3D from './components/Showcase3D'
import FeatureTimeline from './components/FeatureTimeline'
import Marquee from './components/Marquee'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 relative">
      <BackgroundFX />
      <Navbar />
      <main>
        <ParallaxHero />

        <div className="py-4">
          <Marquee items={[
            'Precision irrigation',
            'EC/pH dosing',
            'Climate stability',
            'Fail-safe offline',
            'Mobile control',
            'IoT + Automation',
            'Hydroponics ready',
          ]} />
        </div>

        <Showcase3D />

        <Section
          id="about"
          title="Why Ufarms"
          subtitle="Automation that respects the craft of growing. Designed to be powerful for pros and effortless for first-time growers."
        >
          <div className="rounded-3xl border border-gray-200 bg-white/80 backdrop-blur p-6 shadow-sm">
            <p className="text-gray-700 text-lg leading-relaxed">
              From polyhouses to home gardens, Ufarms brings intelligent control that just works. Our controllers orchestrate irrigation, climate, and dosing based on live data and schedules — so you harvest more with less effort.
            </p>
          </div>
        </Section>

        <Section id="products" title="Product Lineup">
          <ProductGrid />
        </Section>

        <Section id="vertical" title="Vertical Farming" subtitle="Grow vegetables anywhere — balcony, rooftop, or backyard.">
          <VerticalFarming />
        </Section>

        <Section id="app" title="App Experience" subtitle="Your entire farm, in your pocket.">
          <AppExperience />
        </Section>

        <FeatureTimeline />

        <Section id="benefits" title="Benefits">
          <Benefits />
        </Section>

        <Section id="testimonials" title="Real Results">
          <Testimonials />
        </Section>

        <section id="cta" className="py-20 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-gradient-to-br from-emerald-600 to-emerald-700 text-white p-10 sm:p-16 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl">
              <div>
                <h3 className="text-3xl sm:text-4xl font-bold">Bring automation to your farm</h3>
                <p className="mt-2 text-emerald-50">Get a personalized walkthrough or a tailored quote.</p>
              </div>
              <div className="flex gap-3">
                <a href="#" className="inline-flex items-center rounded-full bg-white text-emerald-700 font-semibold px-6 py-3 shadow-sm hover:bg-emerald-50 transition">Get Pricing</a>
                <a href="#" className="inline-flex items-center rounded-full bg-emerald-800 text-white font-semibold px-6 py-3 shadow-sm hover:bg-emerald-900 transition">Schedule Demo</a>
              </div>
            </div>
          </div>
        </section>

        <footer className="py-10 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-600">© {new Date().getFullYear()} Ufarms. All rights reserved.</p>
            <div className="flex items-center gap-6 text-sm text-gray-600">
              <a href="#about" className="hover:text-gray-900">About</a>
              <a href="#products" className="hover:text-gray-900">Products</a>
              <a href="#app" className="hover:text-gray-900">App</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
