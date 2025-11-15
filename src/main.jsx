import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import './index.css'

// Pages
import MenuPage from './pages/Menu'
import DaigPage from './pages/Daig'
import About from './pages/About'
import Branches from './pages/Branches'
import Reviews from './pages/Reviews'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/daig" element={<DaigPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/branches" element={<Branches />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
