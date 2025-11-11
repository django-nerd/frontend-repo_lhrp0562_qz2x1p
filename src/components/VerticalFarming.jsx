export default function VerticalFarming() {
  const items = [
    {
      title: 'Balcony Towers',
      img: 'https://images.unsplash.com/photo-1615679687154-6ba6f45f41cf?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Terrace Hydroponics',
      img: 'https://images.unsplash.com/photo-1566801328609-3e8b00c3fa0d?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Modular Vertical Grow',
      img: 'https://images.unsplash.com/photo-1576092768242-2a8a5a2e0a53?q=80&w=1200&auto=format&fit=crop',
    },
  ]

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {items.map((it) => (
        <div key={it.title} className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          <div className="aspect-[4/3] overflow-hidden">
            <img src={it.img} alt={it.title} className="h-full w-full object-cover" />
          </div>
          <div className="p-5">
            <h3 className="text-lg font-semibold text-gray-900">{it.title}</h3>
            <p className="mt-2 text-sm text-gray-600">
              Grow vegetables anywhere — from your balcony to your rooftop.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="inline-flex items-center rounded-full bg-gray-100 text-gray-800 text-xs font-medium px-3 py-1">Tower Only</span>
              <span className="inline-flex items-center rounded-full bg-emerald-50 text-emerald-700 text-xs font-medium px-3 py-1">Smart Farming Tower</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
