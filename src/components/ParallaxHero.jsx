import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import FloatingSeeds from './FloatingSeeds'

export default function ParallaxHero() {
  return (
    <section className="relative min-h-[110vh] flex items-center" id="hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white/90 pointer-events-none" />
      </div>

      <div className="absolute inset-0">
        <FloatingSeeds count={28} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900"
          >
            Automate Every Drop.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-5 text-xl text-gray-700 max-w-2xl"
          >
            Ufarms orchestrates sensors, pumps, dosing, and climate so your plants thrive 24/7 — on autopilot.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href="#cta" className="inline-flex items-center rounded-full bg-emerald-600 text-white font-medium px-7 py-3.5 shadow-lg hover:bg-emerald-700 transition">
              Get a Live Demo
            </a>
            <a href="#showcase" className="inline-flex items-center rounded-full bg-white text-gray-900 font-medium px-7 py-3.5 border border-gray-200 shadow-sm hover:bg-gray-50 transition">
              See the Systems
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.15 }}
            className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm text-gray-700"
          >
            {['Water Savings', 'Yield Uplift', 'Fail-safe Offline', 'App Control'].map((t) => (
              <div key={t} className="rounded-xl border border-gray-200/80 bg-white/80 backdrop-blur p-3 text-center">
                {t}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
