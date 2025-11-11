export default function Testimonials() {
  const items = [
    {
      name: 'Ravi, Polyhouse Owner',
      quote:
        'Ufarms automation keeps my climate stable and cut my water usage by 30%. App control is super easy.',
      img: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'Sneha, Terrace Gardener',
      quote:
        'I never miss a watering cycle now. The scheduler just works and my plants look healthier than ever.',
      img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'Aman, Hydroponics',
      quote:
        'The dosing system maintains EC and pH around the clock. Yields improved without constant manual checks.',
      img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop',
    },
  ]

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {items.map((it) => (
        <div key={it.name} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex items-center space-x-3">
            <img src={it.img} alt={it.name} className="h-10 w-10 rounded-full object-cover" />
            <div>
              <p className="font-medium text-gray-900">{it.name}</p>
            </div>
          </div>
          <p className="mt-4 text-gray-700 text-sm leading-relaxed">“{it.quote}”</p>
        </div>
      ))}
    </div>
  )
}
