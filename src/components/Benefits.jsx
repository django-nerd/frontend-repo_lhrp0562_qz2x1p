export default function Benefits() {
  const items = [
    'Saves water & electricity',
    'Increases yield & plant health',
    'Reduces manual labor & guesswork',
    'Works even with intermittent network',
    'Easy mobile control',
  ]

  return (
    <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((t) => (
        <li key={t} className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm flex items-start space-x-3">
          <span className="h-2 w-2 mt-2 rounded-full bg-emerald-600"></span>
          <span className="text-gray-800 text-sm">{t}</span>
        </li>
      ))}
    </ul>
  )
}
