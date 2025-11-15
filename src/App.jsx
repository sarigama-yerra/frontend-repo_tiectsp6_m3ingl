import { useEffect, useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import SEO from './components/SEO'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1606491956689-2ea866880c84?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
      <div className="relative bg-black/50">
        <div className="max-w-7xl mx-auto px-4 py-28 md:py-36">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">Karachi’s Famous Al Rehman Biryani</h1>
            <p className="mt-4 text-lg md:text-xl text-white/90">Daig Delivery All Over Karachi — No Advance. Premium spices, aged basmati, and traditional dum that keeps you coming back.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#order" className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full font-semibold">Order Now</a>
              <a href="tel:+923001234567" className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-full font-semibold">Call Now</a>
              <a href="/menu" className="bg-white text-gray-900 hover:bg-gray-100 px-6 py-3 rounded-full font-semibold">View Menu</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Highlights() {
  const items = [
    { title: 'Daig Delivery', desc: 'All over Karachi — No Advance', icon: '🚚' },
    { title: 'Premium Ingredients', desc: 'Aged basmati & house masala', icon: '🌾' },
    { title: 'Thousand+ Reviews', desc: 'Trusted by Karachi', icon: '⭐' },
  ]
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-6">
        {items.map((i) => (
          <div key={i.title} className="rounded-2xl border border-amber-100 bg-amber-50 p-6">
            <div className="text-3xl">{i.icon}</div>
            <div className="mt-3 text-xl font-bold text-amber-900">{i.title}</div>
            <p className="text-amber-800/80">{i.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function MenuPreview() {
  const [menu, setMenu] = useState([])
  useEffect(() => {
    fetch(`${BACKEND_URL}/api/menu`).then(r => r.json()).then(setMenu).catch(() => {})
  }, [])
  const featured = menu.slice(0, 6)
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">Our Menu</h2>
            <p className="text-gray-600 mt-1">Chicken • Beef • Daigs • Sides • Drinks</p>
          </div>
          <a href="/menu" className="text-amber-700 font-semibold">View Full Menu →</a>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          {featured.map((item) => (
            <div key={item.name} className="border rounded-xl overflow-hidden bg-white hover:shadow-lg transition">
              <img src={item.photo_url} alt={item.name} className="h-40 w-full object-cover" />
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div className="font-semibold text-gray-900">{item.name}</div>
                  <div className="text-amber-700 font-bold">Rs {item.price}</div>
                </div>
                <p className="text-sm text-gray-600 mt-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Reviews() {
  const [reviews, setReviews] = useState([])
  useEffect(() => {
    fetch(`${BACKEND_URL}/api/reviews`).then(r => r.json()).then(setReviews).catch(() => {})
  }, [])
  return (
    <section className="bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-extrabold text-gray-900">Loved by Karachi</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {reviews.slice(0,3).map((r, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 border border-amber-100">
              <div className="text-amber-600 font-bold">{"★".repeat(r.rating)}{"☆".repeat(5-r.rating)}</div>
              <p className="mt-3 text-gray-700">{r.comment}</p>
              <div className="mt-4 text-sm text-gray-500">— {r.name} · {r.source}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function DaigOrderForm() {
  const [form, setForm] = useState({ name: '', phone: '', quantity: '', address: '', notes: '' })
  const [status, setStatus] = useState('')
  const whatsappHref = `https://wa.me/923001234567?text=${encodeURIComponent(`Daig Order Inquiry\nName: ${form.name}\nPhone: ${form.phone}\nQuantity: ${form.quantity}\nAddress: ${form.address}\nNotes: ${form.notes}`)}`

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      const res = await fetch(`${BACKEND_URL}/api/orders/daig`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      const data = await res.json()
      if (res.ok) setStatus('Order received! We will call you shortly.')
      else setStatus(data?.detail || 'Something went wrong')
    } catch {
      setStatus('Could not send. Please WhatsApp us!')
    }
  }

  return (
    <section id="order" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl font-extrabold text-gray-900">Daig Ordering</h2>
          <p className="text-gray-600 mt-2">Popular sizes & rates</p>
          <ul className="mt-6 space-y-3">
            <li className="flex items-center justify-between border rounded-xl p-4"><span>Chicken Daig (20 ppl)</span><span className="font-bold text-amber-700">Rs 8,500</span></li>
            <li className="flex items-center justify-between border rounded-xl p-4"><span>Chicken Daig (50 ppl)</span><span className="font-bold text-amber-700">Rs 18,500</span></li>
            <li className="flex items-center justify-between border rounded-xl p-4"><span>Beef Daig (50 ppl)</span><span className="font-bold text-amber-700">Rs 24,000</span></li>
          </ul>
        </div>
        <form onSubmit={submit} className="bg-amber-50 rounded-2xl p-6 border border-amber-100">
          <div className="grid grid-cols-1 gap-4">
            <input className="px-4 py-3 rounded-lg border" placeholder="Name" required value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})}/>
            <input className="px-4 py-3 rounded-lg border" placeholder="Phone" required value={form.phone} onChange={(e)=>setForm({...form, phone:e.target.value})}/>
            <input className="px-4 py-3 rounded-lg border" placeholder="Quantity / Daig Size" required value={form.quantity} onChange={(e)=>setForm({...form, quantity:e.target.value})}/>
            <input className="px-4 py-3 rounded-lg border" placeholder="Delivery Address" required value={form.address} onChange={(e)=>setForm({...form, address:e.target.value})}/>
            <textarea className="px-4 py-3 rounded-lg border" placeholder="Notes (optional)" value={form.notes} onChange={(e)=>setForm({...form, notes:e.target.value})}></textarea>
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold">Submit Order</button>
            <a href={whatsappHref} target="_blank" className="text-center bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold">Order on WhatsApp</a>
            {status && <div className="text-sm text-gray-700">{status}</div>}
          </div>
        </form>
      </div>
    </section>
  )
}

function FAQ() {
  const faqs = [
    { q: 'What are delivery charges?', a: 'Delivery starts from Rs 200 depending on area. Daig delivery is quoted based on size and distance.' },
    { q: 'Delivery timings?', a: '11am to 11pm daily. For daigs, schedule at least 24 hours in advance.' },
    { q: 'Daig sizes?', a: '20, 30, 50, 75, 100+ people. We guide you based on guests.' },
    { q: 'Food quantity details?', a: 'One plate is approx. 750ml. Daig serving is calculated per person with generous portions.' },
  ]
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-extrabold text-gray-900">FAQs</h2>
        <div className="mt-6 divide-y">
          {faqs.map((f) => (
            <details key={f.q} className="py-4">
              <summary className="cursor-pointer font-semibold text-gray-900">{f.q}</summary>
              <p className="mt-2 text-gray-700">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <SEO title="Al Rehman Biryani | Daig Delivery Karachi | Best Biryani Karachi" description="Karachi’s famous Al Rehman Biryani. Daig delivery all over Karachi — No advance. Order chicken & beef biryani, sides, and drinks." keywords={["Karachi Biryani","Best Biryani Karachi","Al Rehman Biryani","Daig Delivery Karachi"]} />
      <Header />
      <Hero />
      <Highlights />
      <MenuPreview />
      <Reviews />
      <DaigOrderForm />
      <FAQ />
      <Footer />
    </div>
  )
}
