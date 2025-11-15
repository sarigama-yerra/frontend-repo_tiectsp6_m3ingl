import SEO from '../components/SEO'
import Header from '../components/Header'
import Footer from '../components/Footer'
import App from '../App'

export default function DaigPage(){
  // Reuse the same order section from home for simplicity
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <SEO title="Daig Orders | Al Rehman Biryani" description="Simple daig ordering across Karachi. No advance. WhatsApp or submit form." />
      <Header />
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-extrabold">Daig Orders</h1>
        <p className="text-gray-600 mt-2">Plan your daig easily with our popular sizes and instant WhatsApp ordering.</p>
      </section>
      {/* Render the order component from home */}
      <App />
      <Footer />
    </div>
  )
}
