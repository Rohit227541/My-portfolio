import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Toaster } from 'react-hot-toast'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'
import Navbar from './components/Layout/Navbar'
import About from './components/Sections/About'
import Skills from './components/Sections/Skills'
import Projects from './components/Sections/Projects'
import Contact from './components/Sections/Contact' 
import ScrollToTop from './components/UI/ScrollToTop'
import Footer from './components/Layout/Footer'
import useTheme from './hooks/useTheme'
import Hero from './components/Sections/Hero'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500)
  }, [])

  const projects = [
    { name: "E-Commerce App", tech: "React, Node.js, MongoDB" },
    { name: "Weather App", tech: "React, API, Tailwind" },
    { name: "Portfolio Website", tech: "React, Tailwind, Framer" }
  ]

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-purple-900 flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    )
  }

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 min-h-screen text-white">
      <Toaster position="top-right" />
      <Navbar />

  <Hero />

    <About />

    <Skills />

<Projects />

    <Contact />

 <Footer />

      <ScrollToTop />
    </div>
  )
}

export default App