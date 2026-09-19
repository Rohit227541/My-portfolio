import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FaBars, FaTimes, FaHome, FaUser, FaCode,
  FaProjectDiagram, FaEnvelope, FaSun, FaMoon,
  FaLaptopCode, FaDownload, FaCogs, FaBriefcase, FaMobileAlt
} from 'react-icons/fa'
import useTheme from '../../hooks/useTheme'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const { theme, toggleTheme } = useTheme()
  const isDarkMode = theme === 'dark'

  const menuItems = [
    { id: 'home', name: 'Home', icon: <FaHome /> },
    { id: 'about', name: 'About', icon: <FaUser /> },
    { id: 'skills', name: 'Skills', icon: <FaCode /> },
    { id: 'services', name: 'Services', icon: <FaCogs /> },
    { id: 'experience', name: 'Experience', icon: <FaBriefcase /> },
    { id: 'projects', name: 'Projects', icon: <FaProjectDiagram /> },
    { id: 'mobile-apps', name: 'Mobile Apps', icon: <FaMobileAlt /> },
    { id: 'contact', name: 'Contact', icon: <FaEnvelope /> }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      const scrollPosition = window.scrollY + 120
      for (const item of menuItems) {
        const element = document.getElementById(item.id)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(item.id)
            break
          }
        }
      }
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const smoothScroll = (e, id) => {
    e.preventDefault()
    setIsOpen(false)
    const element = document.getElementById(id)
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-gray-900/95 backdrop-blur-xl shadow-2xl border-b border-white/10'
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center h-16 md:h-20">
            <motion.a
              href="#home"
              onClick={(e) => smoothScroll(e, 'home')}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="group relative flex items-center gap-2 cursor-pointer"
              aria-label="Rohit — home"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur-lg opacity-75 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-xl">
                  <FaLaptopCode className="text-white text-xl md:text-2xl" />
                </div>
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Rohit
                </h1>
                <p className="text-xs text-gray-400 hidden md:block">Full Stack Developer</p>
              </div>
            </motion.a>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-1">
              {menuItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={(e) => smoothScroll(e, item.id)}
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.04 }}
                  className={`relative px-3 py-2 rounded-lg transition-all duration-300 group text-sm ${
                    activeSection === item.id
                      ? 'text-purple-300'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    <span className="text-base">{item.icon}</span>
                    <span className="font-medium">{item.name}</span>
                  </span>
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <div className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition duration-300"></div>
                </motion.button>
              ))}

              <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                onClick={toggleTheme}
                className="ml-2 p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300"
                aria-label="Toggle theme"
              >
                {isDarkMode ? <FaSun className="text-yellow-400 text-lg" /> : <FaMoon className="text-gray-300 text-lg" />}
              </motion.button>

              <motion.a
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/Mr.Rohit.pdf"
                download
                className="ml-2 px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 text-sm"
              >
                <FaDownload className="text-sm" />
                <span>Resume</span>
              </motion.a>
            </div>

            {/* Mobile */}
            <div className="lg:hidden flex items-center gap-3">
              <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300"
                aria-label="Toggle theme"
              >
                {isDarkMode ? <FaSun className="text-yellow-400 text-lg" /> : <FaMoon className="text-gray-300 text-lg" />}
              </motion.button>
              <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300"
                aria-label="Toggle menu"
                aria-expanded={isOpen}
              >
                {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
              </motion.button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-white/10 overflow-hidden max-h-[70vh] overflow-y-auto"
            >
              <div className="container mx-auto px-4 py-4">
                <div className="flex flex-col gap-2">
                  {menuItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      onClick={(e) => smoothScroll(e, item.id)}
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.04 }}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                        activeSection === item.id
                          ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-purple-300 border-l-4 border-purple-500'
                          : 'text-gray-300 hover:bg-white/5'
                      }`}
                    >
                      <span className="text-xl">{item.icon}</span>
                      <span className="font-medium">{item.name}</span>
                    </motion.button>
                  ))}
                  <motion.a
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    href="/Mr.Rohit.pdf"
                    download
                    className="mt-4 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-semibold text-center flex items-center justify-center gap-2"
                  >
                    <FaDownload /> Download Resume
                  </motion.a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      <div className="h-16 md:h-20"></div>
    </>
  )
}

export default Navbar
