export default function AppExperience() {
  const items = [
    {
      title: 'Live sensor dashboard',
      img: 'https://images.unsplash.com/photo-1531973968078-9bb02785f13d?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Actuator controls',
      img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Automations (Rules & Schedules)',
      img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Alerts & notifications',
      img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
    },
  ]

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {items.map((it) => (
        <div key={it.title} className="rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm">
          <div className="aspect-[4/3]">
            <img src={it.img} alt={it.title} className="h-full w-full object-cover" />
          </div>
          <div className="p-4">
            <p className="text-sm font-medium text-gray-900">{it.title}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
