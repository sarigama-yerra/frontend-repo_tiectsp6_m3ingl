import SEO from '../components/SEO'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Branches(){
  const [branches, setBranches] = useState([])
  useEffect(()=>{ fetch(`${BACKEND_URL}/api/branches`).then(r=>r.json()).then(setBranches) },[])
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <SEO title="Branches | Al Rehman Biryani" description="All branch addresses, timings, and delivery areas in Karachi." />
      <Header />
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-extrabold">Branches & Locations</h1>
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {branches.map((b,i)=> (
            <div key={i} className="border rounded-xl p-5">
              <div className="text-xl font-bold">{b.name}</div>
              <div className="mt-1 text-gray-700">{b.address}</div>
              <div className="mt-1 text-gray-700">{b.phone}</div>
              <div className="mt-1 text-gray-700">Hours: {b.hours}</div>
              {b.areas && <div className="mt-2 text-sm text-gray-600">Delivery Areas: {b.areas.join(', ')}</div>}
              {b.lat && b.lng && (
                <iframe className="mt-4 rounded-lg w-full h-52" src={`https://www.google.com/maps?q=${b.lat},${b.lng}&hl=es;z=14&output=embed`} allowFullScreen loading="lazy"></iframe>
              )}
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  )
}
