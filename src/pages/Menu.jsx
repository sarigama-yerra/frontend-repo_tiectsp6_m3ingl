import { useEffect, useState } from 'react'
import SEO from '../components/SEO'
import Header from '../components/Header'
import Footer from '../components/Footer'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function MenuPage(){
  const [menu, setMenu] = useState([])
  const [filter, setFilter] = useState('All')
  useEffect(()=>{ fetch(`${BACKEND_URL}/api/menu`).then(r=>r.json()).then(setMenu) },[])
  const categories = ['All', ...Array.from(new Set(menu.map(m=>m.category)))]
  const items = filter==='All' ? menu : menu.filter(m=>m.category===filter)
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <SEO title="Menu | Al Rehman Biryani" description="Full menu with prices and photos: Chicken Biryani, Beef Biryani, Daigs, Sides, Drinks" />
      <Header />
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-extrabold">Menu</h1>
        <div className="flex flex-wrap gap-3 mt-6">
          {categories.map(c=> (
            <button key={c} onClick={()=>setFilter(c)} className={`px-4 py-2 rounded-full border ${filter===c?'bg-amber-600 text-white border-amber-600':'border-gray-200'}`}>{c}</button>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          {items.map(item => (
            <div key={item.name} className="border rounded-xl overflow-hidden bg-white hover:shadow-lg transition">
              <img src={item.photo_url} alt={item.name} className="h-44 w-full object-cover" />
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div className="font-semibold">{item.name}</div>
                  <div className="text-amber-700 font-bold">Rs {item.price}</div>
                </div>
                <p className="text-sm text-gray-600 mt-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  )
}
