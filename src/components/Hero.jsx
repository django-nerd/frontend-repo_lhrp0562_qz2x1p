import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center" id="hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/70 to-white pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
            Smart Farming Made Simple.
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-700 max-w-xl">
            Monitor, automate, and optimize your farm — from anywhere.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#cta" className="inline-flex items-center rounded-full bg-emerald-600 text-white font-medium px-6 py-3 shadow-lg hover:bg-emerald-700 transition">
              Book a Demo
            </a>
            <a href="#about" className="inline-flex items-center rounded-full bg-white text-gray-900 font-medium px-6 py-3 border border-gray-200 shadow-sm hover:bg-gray-50 transition">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
