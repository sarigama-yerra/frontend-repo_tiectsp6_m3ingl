import SEO from '../components/SEO'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function About(){
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <SEO title="About Us | Al Rehman Biryani" description="Our story, traditional methods, and why our biryani is famous in Karachi." />
      <Header />
      <section className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10">
        <div>
          <h1 className="text-4xl font-extrabold">Our Story</h1>
          <p className="mt-4 text-gray-700">Starting from a small kitchen in Karachi, Al Rehman Biryani perfected the art of layered dum biryani using premium basmati, hand-ground masalas, and time-honored techniques.</p>
          <h2 className="mt-8 text-2xl font-bold">Why Our Biryani is Famous</h2>
          <ul className="list-disc ml-6 mt-3 text-gray-700 space-y-2">
            <li>Aged basmati rice with perfect grain separation</li>
            <li>House-blend spices roasted and ground fresh</li>
            <li>Slow-cooked over dum for deep flavor infusion</li>
            <li>Strict quality control and hygiene standards</li>
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img className="rounded-xl object-cover h-48 w-full" src="https://images.unsplash.com/photo-1556911220-bff31c812dba?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxLaXRjaGVufGVufDB8MHx8fDE3NjMyMDI0NzZ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Kitchen" />
          <img className="rounded-xl object-cover h-48 w-full" src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop" alt="Masalas" />
          <img className="rounded-xl object-cover h-48 w-full" src="https://images.unsplash.com/photo-1519915734606-32d972e3b9b7?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTZXJ2aW5nfGVufDB8MHx8fDE3NjMyMDI0NzZ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Serving" />
          <img className="rounded-xl object-cover h-48 w-full" src="https://images.unsplash.com/photo-1514986888952-8cd320577b68?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDb29raW5nfGVufDB8MHx8fDE3NjMyMDI0Nzd8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Cooking" />
        </div>
      </section>
      <Footer />
    </div>
  )
}
