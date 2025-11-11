import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Section from './components/Section'
import ProductGrid from './components/ProductGrid'
import VerticalFarming from './components/VerticalFarming'
import AppExperience from './components/AppExperience'
import Benefits from './components/Benefits'
import Testimonials from './components/Testimonials'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />

        <Section
          id="about"
          title="About Ufarms"
          subtitle="Ufarms helps growers reduce water usage, improve crop quality, and simplify farm management through intelligent automation and real-time monitoring."
        >
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-gray-700 text-lg leading-relaxed">
              From polyhouses to home gardens, Ufarms brings powerful automation that stays farmer-friendly. Our IoT controllers and mobile app work together to monitor sensors, track conditions, and control irrigation, misting, dosing, ventilation, and climate systems.
            </p>
          </div>
        </Section>

        <Section id="products" title="Product Lineup">
          <ProductGrid />
        </Section>

        <Section id="vertical" title="Vertical Farming" subtitle="Grow vegetables anywhere — from your balcony to your rooftop.">
          <VerticalFarming />
        </Section>

        <Section id="app" title="App Experience" subtitle="Your entire farm, in your pocket.">
          <AppExperience />
        </Section>

        <Section id="benefits" title="Benefits">
          <Benefits />
        </Section>

        <Section id="testimonials" title="Testimonials / Real Success Stories">
          <Testimonials />
        </Section>

        <section id="cta" className="py-20 sm:py-24 bg-gradient-to-b from-emerald-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-emerald-600 text-white p-10 sm:p-16 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-3xl sm:text-4xl font-bold">Ready to make your farm intelligent?</h3>
                <p className="mt-2 text-emerald-50">Book a personalized walkthrough or get a tailored quote.</p>
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
