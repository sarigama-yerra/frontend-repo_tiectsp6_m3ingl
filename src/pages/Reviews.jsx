import SEO from '../components/SEO'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Reviews(){
  const [reviews, setReviews] = useState([])
  useEffect(()=>{ fetch(`${BACKEND_URL}/api/reviews`).then(r=>r.json()).then(setReviews) },[])
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <SEO title="Reviews | Al Rehman Biryani" description="Real customer reviews and ratings from Google and Foodpanda." />
      <Header />
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-extrabold">Reviews & Social Proof</h1>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {reviews.map((r,i)=> (
            <div key={i} className="border rounded-xl p-5">
              <div className="text-amber-600 font-bold">{"★".repeat(r.rating || 5)}{"☆".repeat(5-(r.rating || 5))}</div>
              <p className="mt-3 text-gray-700">{r.comment}</p>
              <div className="mt-4 text-sm text-gray-500">— {r.name} · {r.source}</div>
            </div>
          ))}
        </div>
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <iframe className="w-full h-96 rounded-xl" src="https://www.instagram.com/p/CyWPCo6I9G6/embed" title="Instagram"></iframe>
          <iframe className="w-full h-96 rounded-xl" src="https://www.tiktok.com/embed/7227314275488572703" title="TikTok"></iframe>
        </div>
      </section>
      <Footer />
    </div>
  )
}
