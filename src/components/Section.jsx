export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <div className="mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">{title}</h2>
            {subtitle && <p className="mt-3 text-lg text-gray-600 max-w-3xl">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
