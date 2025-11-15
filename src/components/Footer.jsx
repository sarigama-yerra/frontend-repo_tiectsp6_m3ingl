import { Facebook, Instagram, Phone, Mail, MapPin, MessageCircle } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 pt-12">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8">
        <div>
          <div className="font-extrabold text-2xl mb-3"><span className="text-amber-500">Al Rehman</span> Biryani</div>
          <p className="text-sm text-gray-400">Authentic Karachi biryani crafted with premium spices, aged basmati, and traditional dum cooking. Daig delivery across Karachi.</p>
        </div>
        <div>
          <div className="text-white font-semibold mb-3">Quick Links</div>
          <ul className="space-y-2 text-sm">
            <li><a href="/menu" className="hover:text-white">Menu</a></li>
            <li><a href="/daig" className="hover:text-white">Daig Orders</a></li>
            <li><a href="/reviews" className="hover:text-white">Reviews</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div>
          <div className="text-white font-semibold mb-3">Contact</div>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2"><Phone size={16}/> +92 300 1234567</li>
            <li className="flex items-center gap-2"><Mail size={16}/> orders@alrehmanbiryani.pk</li>
            <li className="flex items-center gap-2"><MapPin size={16}/> Karachi, Pakistan</li>
          </ul>
          <div className="flex gap-3 mt-3">
            <a href="https://wa.me/923001234567" className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-2 rounded-full text-sm font-semibold"><MessageCircle size={16}/> WhatsApp</a>
          </div>
        </div>
        <div>
          <div className="text-white font-semibold mb-3">Follow</div>
          <div className="flex gap-4">
            <a href="#" aria-label="Instagram" className="hover:text-white"><Instagram/></a>
            <a href="#" aria-label="Facebook" className="hover:text-white"><Facebook/></a>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 mt-10 py-6 border-t border-white/10">© {new Date().getFullYear()} Al Rehman Biryani. All rights reserved.</div>
    </footer>
  )
}
