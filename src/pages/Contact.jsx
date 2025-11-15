import SEO from '../components/SEO'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState } from 'react'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Contact(){
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      const res = await fetch(`${BACKEND_URL}/api/inquiry`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      if (res.ok) setStatus('Thanks! We will get back shortly.')
      else setStatus('Something went wrong.')
    } catch {
      setStatus('Please WhatsApp or call us directly.')
    }
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <SEO title="Contact | Al Rehman Biryani" description="Call, WhatsApp, or send a message. Find our location on the map." />
      <Header />
      <section className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10">
        <div>
          <h1 className="text-4xl font-extrabold">Contact Us</h1>
          <p className="text-gray-700 mt-2">Phone: +92 300 1234567</p>
          <a href="https://wa.me/923001234567" className="inline-block mt-4 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full font-semibold">WhatsApp Us</a>
          <iframe className="mt-6 rounded-xl w-full h-64" src="https://www.google.com/maps?q=Karachi&hl=es;z=12&output=embed" loading="lazy"></iframe>
        </div>
        <form onSubmit={submit} className="bg-amber-50 rounded-2xl p-6 border border-amber-100">
          <div className="grid gap-4">
            <input className="px-4 py-3 rounded-lg border" placeholder="Name" required value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})}/>
            <input className="px-4 py-3 rounded-lg border" placeholder="Email" type="email" value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})}/>
            <input className="px-4 py-3 rounded-lg border" placeholder="Phone" value={form.phone} onChange={(e)=>setForm({...form, phone:e.target.value})}/>
            <textarea className="px-4 py-3 rounded-lg border" placeholder="Your message" required value={form.message} onChange={(e)=>setForm({...form, message:e.target.value})}></textarea>
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold">Send Message</button>
            {status && <div className="text-sm text-gray-700">{status}</div>}
          </div>
        </form>
      </section>
      <Footer />
    </div>
  )
}
