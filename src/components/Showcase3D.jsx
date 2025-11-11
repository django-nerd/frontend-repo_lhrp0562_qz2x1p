import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const systems = [
  {
    key: 'scheduler',
    title: 'Irrigation Scheduler',
    desc: 'Time-based irrigation across zones. Perfect for gardens and large drip setups.',
    model: 'https://prod.spline.design/pGhTq0v2TQdsyEK3/scene.splinecode',
  },
  {
    key: 'climate',
    title: 'Climate Controller',
    desc: 'Stabilize temperature and humidity using live sensor rules.',
    model: 'https://prod.spline.design/8jgd5z3nNsF1Qh9I/scene.splinecode',
  },
  {
    key: 'dosing',
    title: 'Dosing & EC/pH',
    desc: 'Automated fertigation that keeps EC and pH on target 24/7.',
    model: 'https://prod.spline.design/5kOr0W5dE3e9Q6un/scene.splinecode',
  },
]

export default function Showcase3D() {
  const [active, setActive] = useState('scheduler')

  return (
    <section id="showcase" className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Explore the Systems</h2>
            <p className="mt-2 text-gray-600 max-w-2xl">Switch between interactive 3D models to understand how each controller works on the field.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {systems.map((s) => (
              <button
                key={s.key}
                onClick={() => setActive(s.key)}
                className={`rounded-full px-4 py-2 text-sm border transition ${
                  active === s.key ? 'bg-emerald-600 text-white border-emerald-600' : 'bg-white text-gray-800 border-gray-200 hover:bg-gray-50'
                }`}
              >
                {s.title}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-gray-200 overflow-hidden bg-white shadow-xl">
          <div className="grid lg:grid-cols-2">
            <div className="relative aspect-[4/3] lg:aspect-auto min-h-[22rem]">
              <iframe
                key={active}
                src={systems.find((s) => s.key === active).model}
                className="absolute inset-0 h-full w-full"
                allow="autoplay; fullscreen"
                title="Ufarms 3D"
              />
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-white/20 via-transparent to-transparent" />
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {systems.map((s) => (
                  s.key === active && (
                    <motion.div
                      key={s.key}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.35 }}
                    >
                      <h3 className="text-2xl font-semibold text-gray-900">{s.title}</h3>
                      <p className="mt-3 text-gray-700">{s.desc}</p>
                      <ul className="mt-6 space-y-2 text-sm text-gray-700">
                        <li>• Live sensors, rules, and schedules</li>
                        <li>• Offline safety and retries</li>
                        <li>• Secure app control</li>
                      </ul>
                    </motion.div>
                  )
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
