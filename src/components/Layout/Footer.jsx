import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  FaGithub, FaLinkedin, FaTwitter, FaEnvelope,
  FaArrowUp, FaMapMarkerAlt, FaPhone,
  FaCode, FaLaptopCode, FaInstagram,
  FaWhatsapp, FaPaperPlane
} from 'react-icons/fa'
import toast from 'react-hot-toast'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 500)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/yourusername', name: 'GitHub', color: 'hover:text-gray-300' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com/in/yourusername', name: 'LinkedIn', color: 'hover:text-blue-500' },
    { icon: <FaTwitter />, url: 'https://twitter.com/yourusername', name: 'Twitter', color: 'hover:text-blue-400' },
    { icon: <FaInstagram />, url: 'https://instagram.com/yourusername', name: 'Instagram', color: 'hover:text-pink-500' },
    { icon: <FaWhatsapp />, url: 'https://wa.me/917055503724', name: 'WhatsApp', color: 'hover:text-green-500' },
    { icon: <FaEnvelope />, url: 'mailto:Rohitkodexive50@gmail.com', name: 'Email', color: 'hover:text-red-400' }
  ]

  const quickLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Services', id: 'services' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Mobile Apps', id: 'mobile-apps' },
    { name: 'Contact', id: 'contact' }
  ]

  const services = [
    'Business Websites',
    'Web Applications',
    'CRM & Admin Panels',
    'E-commerce Websites',
    'REST API Development',
    'Mobile Applications'
  ]

  const contactInfo = [
    { icon: <FaMapMarkerAlt />, text: 'Moradabad 244001, Uttar Pradesh, India', link: null },
    { icon: <FaPhone />, text: '+91 7055503724', link: 'tel:+917055503724' },
    { icon: <FaEnvelope />, text: 'Rohitkodexive50@gmail.com', link: 'mailto:Rohitkodexive50@gmail.com' }
  ]

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      toast.success('Thanks for subscribing!')
      setEmail('')
    } else {
      toast.error('Please enter a valid email address')
    }
  }

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
  const smoothScroll = (id) => {
    const element = document.getElementById(id)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 border-t border-white/10">
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-lg">
                  <FaLaptopCode className="text-white text-xl" />
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Rohit
                </h3>
              </div>
              <p className="text-gray-400 text-sm mb-1 leading-relaxed">
                Full Stack Developer building websites, web apps, CRM systems and mobile apps for businesses.
              </p>
              <p className="text-gray-500 text-xs mb-4">Frontend + Backend + Database + APIs + Deployment</p>
              <div className="flex gap-3">
                {socialLinks.slice(0, 4).map((social, idx) => (
                  <motion.a key={idx} href={social.url} target="_blank" rel="noopener noreferrer" whileHover={{ y: -3, scale: 1.1 }} className={`text-gray-400 text-xl transition-all ${social.color}`} aria-label={social.name}>
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
              <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link, idx) => (
                  <li key={idx}>
                    <button onClick={() => smoothScroll(link.id)} className="text-gray-400 hover:text-purple-300 transition text-sm flex items-center gap-2 group">
                      <span className="w-0 group-hover:w-2 h-0.5 bg-purple-400 transition-all"></span>
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
              <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
              <ul className="space-y-2">
                {services.map((service, idx) => (
                  <li key={idx}>
                    <span className="text-gray-400 text-sm flex items-center gap-2">
                      <FaCode className="text-purple-400 text-xs shrink-0" />
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
              <h3 className="text-lg font-semibold mb-4 text-white">Stay Updated</h3>
              <p className="text-gray-400 text-sm mb-4">Subscribe for project updates and notes</p>
              <form onSubmit={handleSubscribe} className="mb-6">
                <div className="flex gap-2">
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email" aria-label="Email for newsletter" className="flex-1 min-w-0 px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-purple-500 text-white text-sm" />
                  <motion.button type="submit" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white" aria-label="Subscribe">
                    <FaPaperPlane />
                  </motion.button>
                </div>
              </form>
              <div className="space-y-2">
                {contactInfo.map((info, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm">
                    <span className="text-purple-400 shrink-0">{info.icon}</span>
                    {info.link ? (
                      <a href={info.link} className="text-gray-400 hover:text-purple-300 transition break-all">{info.text}</a>
                    ) : (
                      <span className="text-gray-400">{info.text}</span>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="flex justify-center gap-6 py-6 border-t border-white/10 mb-6">
            {socialLinks.map((social, idx) => (
              <motion.a key={idx} href={social.url} target="_blank" rel="noopener noreferrer" whileHover={{ y: -3, scale: 1.2 }} className={`text-gray-400 text-2xl transition-all ${social.color}`} aria-label={social.name}>
                {social.icon}
              </motion.a>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t border-white/10">
            <p className="text-gray-400 text-sm flex items-center gap-1">
              © {new Date().getFullYear()} Rohit · Full Stack Developer
            </p>
            <div className="flex gap-4 text-xs text-gray-500">
              <span>React · Next.js · Node.js · MySQL</span>
            </div>
          </motion.div>
        </div>
      </footer>

      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="text-white text-xl" />
        </motion.button>
      )}
    </>
  )
}

export default Footer
