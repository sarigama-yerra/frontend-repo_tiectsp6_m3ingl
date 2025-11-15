import SEO from '../components/SEO'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Gallery(){
  const photos = [
    'https://images.unsplash.com/photo-1606491956689-2ea866880c84?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1625944520878-2986441aa5fb?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1601050690112-5a5ba9808ae2?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1544025162-36f6ad47d34f?q=80&w=1000&auto=format&fit=crop',
  ]
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <SEO title="Gallery | Al Rehman Biryani" description="Food photography, behind-the-scenes cooking, and daig preparation." />
      <Header />
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-extrabold">Gallery</h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
          {photos.map((p,i)=> (
            <img key={i} src={p} alt={`Biryani photo ${i+1}`} className="rounded-xl w-full h-64 object-cover" />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  )
}
