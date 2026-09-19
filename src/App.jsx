import { Suspense, lazy, useState, useEffect } from 'react'
import { Toaster } from 'react-hot-toast'
import Navbar from './components/Layout/Navbar'
import Hero from './components/Sections/Hero'
import Loader from './components/UI/Loader'
import ScrollToTop from './components/UI/ScrollToTop'
import Footer from './components/Layout/Footer'

// Lazy-load below-the-fold sections for faster initial load
const About = lazy(() => import('./components/Sections/About'))
const Skills = lazy(() => import('./components/Sections/Skills'))
const Services = lazy(() => import('./components/Sections/Services'))
const Experience = lazy(() => import('./components/Sections/Experience'))
const Projects = lazy(() => import('./components/Sections/Projects'))
const MobileApps = lazy(() => import('./components/Sections/MobileApps'))
const Testimonials = lazy(() => import('./components/Sections/Testimonials'))
const Blog = lazy(() => import('./components/Sections/Blog'))
const Contact = lazy(() => import('./components/Sections/Contact'))

const SectionFallback = () => (
  <div className="py-16 flex items-center justify-center" aria-hidden="true">
    <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
  </div>
)

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200)
    return () => clearTimeout(timer)
  }, [])

  if (loading) return <Loader />

  return (
    <div className="bg-slate-950 min-h-screen text-white overflow-x-clip">
      <Toaster position="top-right" />
      <Navbar />

      <main>
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <About />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Skills />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Services />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Experience />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <MobileApps />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Testimonials />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Blog />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Contact />
        </Suspense>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
