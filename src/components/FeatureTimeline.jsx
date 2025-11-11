import { motion } from 'framer-motion'

const steps = [
  {
    title: 'Plug & Play Install',
    desc: 'Mount the controller, connect sensors and actuators. No rewiring of existing pumps required.',
  },
  {
    title: 'Create Automations',
    desc: 'Use schedules and sensor rules to water precisely when plants need it.',
  },
  {
    title: 'Monitor & Optimize',
    desc: 'Track water, climate and yield metrics. Iterate your recipes for consistent results.',
  },
]

export default function FeatureTimeline() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">How it works</h2>
          <p className="mt-2 text-gray-600 max-w-2xl">From unboxing to harvest — a refined flow designed to save time, water, and effort.</p>
        </div>

        <div className="relative">
          <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-200 via-emerald-300 to-transparent" />
          <div className="space-y-12">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative grid sm:grid-cols-2 gap-6 ${i % 2 ? 'sm:text-left' : ''}`}
              >
                <div className={`sm:col-start-${i % 2 ? 1 : 2} bg-white/80 backdrop-blur border border-gray-200 rounded-2xl p-6 shadow-sm`}> 
                  <h3 className="text-xl font-semibold text-gray-900">{s.title}</h3>
                  <p className="mt-2 text-gray-700">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
