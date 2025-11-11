import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Products', href: '#products' },
    { label: 'Vertical Farming', href: '#vertical' },
    { label: 'App', href: '#app' },
    { label: 'Benefits', href: '#benefits' },
    { label: 'Stories', href: '#testimonials' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/60 border-b border-neutral-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-green-500 to-emerald-600" />
            <span className="font-semibold text-gray-900">Ufarms</span>
          </a>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-sm text-gray-700 hover:text-gray-900 transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#cta" className="inline-flex items-center rounded-full bg-emerald-600 text-white text-sm font-medium px-4 py-2 shadow-sm hover:bg-emerald-700 transition-colors">
              Book a Demo
            </a>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md hover:bg-gray-100">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-neutral-200 bg-white">
          <div className="px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} onClick={() => setOpen(false)} className="block text-gray-700">
                {item.label}
              </a>
            ))}
            <a href="#cta" onClick={() => setOpen(false)} className="inline-flex items-center rounded-full bg-emerald-600 text-white text-sm font-medium px-4 py-2">
              Book a Demo
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
