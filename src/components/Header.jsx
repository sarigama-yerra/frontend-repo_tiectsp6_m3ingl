import { useState } from 'react'
import { Menu, Phone, ShoppingBag, MapPin } from 'lucide-react'

export default function Header() {
  const [open, setOpen] = useState(false)
  const nav = [
    { href: '/', label: 'Home' },
    { href: '/menu', label: 'Menu' },
    { href: '/daig', label: 'Daig Orders' },
    { href: '/about', label: 'About' },
    { href: '/branches', label: 'Branches' },
    { href: '/reviews', label: 'Reviews' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b border-amber-100">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="Al Rehman Biryani" className="h-9 w-9 rounded-full ring-2 ring-amber-400" />
          <div className="font-extrabold text-xl tracking-tight">
            <span className="text-amber-600">Al Rehman</span> <span className="text-gray-900">Biryani</span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-6 font-medium">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-gray-700 hover:text-amber-700 transition-colors">{n.label}</a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="tel:+923001234567" className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-full text-sm font-semibold shadow">
            <Phone size={16} /> Call Now
          </a>
          <a href="#order" className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-full text-sm font-semibold shadow">
            <ShoppingBag size={16} /> Order Now
          </a>
        </div>

        <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
          <Menu />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="px-4 py-3 flex flex-col gap-2">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="py-2 text-gray-700">{n.label}</a>
            ))}
            <a href="tel:+923001234567" className="inline-flex items-center gap-2 bg-amber-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              <Phone size={16} /> Call Now
            </a>
            <a href="#order" className="inline-flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              <ShoppingBag size={16} /> Order Now
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
