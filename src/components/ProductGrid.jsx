const products = [
  {
    title: 'Ufarms Smart Controller',
    badge: 'All-in-One Plug & Play',
    desc:
      'A flexible controller for any sensors and any actuators (pumps, valves, foggers, fans, etc.). Supports Schedules, Sensor-Based Rules, and Manual Tap Actions. Ideal for polyhouses, nurseries, gardens, and multi-purpose setups.',
  },
  {
    title: 'Ufarms Climate Controller',
    badge: 'Sensor-Based Only',
    desc:
      'Designed for temperature & humidity control, without schedules. Automatically runs fans/foggers based on live sensor readings. Perfect for polyhouse climate stability.',
  },
  {
    title: 'Ufarms Irrigation Scheduler',
    badge: 'Schedule-Based Only',
    desc:
      'Simple time-based irrigation automation. Used in home gardens, balconies, lawns, small farms. No sensors required — just set the schedule and forget.',
  },
  {
    title: 'Ufarms Drip Zone Controller',
    badge: 'Multi-Zone Irrigation System',
    desc:
      'For large farms where land is divided into zones. Runs irrigation zone-by-zone based on schedules. Made specifically for drip line distribution.',
  },
  {
    title: 'Ufarms Dosing System',
    badge: 'EC & pH Automation',
    desc:
      'For hydroponics & fertigation. Automatically maintains EC and pH levels using dosing pumps. User sets target values — controller maintains them 24/7.',
  },
]

export default function ProductGrid() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((p) => (
        <div
          key={p.title}
          className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex items-start justify-between">
            <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
            <span className="ml-2 inline-flex items-center rounded-full bg-emerald-50 text-emerald-700 text-xs font-medium px-2 py-1">
              {p.badge}
            </span>
          </div>
          <p className="mt-3 text-sm text-gray-600 leading-relaxed">{p.desc}</p>
        </div>
      ))}
    </div>
  )
}
