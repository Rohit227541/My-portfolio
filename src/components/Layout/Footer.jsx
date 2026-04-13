import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  FaGithub, FaLinkedin, FaTwitter, FaEnvelope, 
  FaHeart, FaArrowUp, FaMapMarkerAlt, FaPhone,
  FaCode, FaLaptopCode, FaInstagram, FaYoutube,
  FaFacebook, FaWhatsapp, FaTelegram, FaPaperPlane
} from 'react-icons/fa'
import toast from 'react-hot-toast'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [showScrollTop, setShowScrollTop] = useState(false)

  // Social Links
  const socialLinks = [
    { icon: <FaGithub />, url: "https://github.com/yourusername", name: "GitHub", color: "hover:text-gray-400" },
    { icon: <FaLinkedin />, url: "https://linkedin.com/in/yourusername", name: "LinkedIn", color: "hover:text-blue-500" },
    { icon: <FaTwitter />, url: "https://twitter.com/yourusername", name: "Twitter", color: "hover:text-blue-400" },
    { icon: <FaInstagram />, url: "https://instagram.com/yourusername", name: "Instagram", color: "hover:text-pink-500" },
    { icon: <FaFacebook />, url: "https://facebook.com/yourusername", name: "Facebook", color: "hover:text-blue-600" },
    { icon: <FaWhatsapp />, url: "https://wa.me/911234567890", name: "WhatsApp", color: "hover:text-green-500" },
    { icon: <FaTelegram />, url: "https://t.me/yourusername", name: "Telegram", color: "hover:text-blue-400" },
    { icon: <FaEnvelope />, url: "mailto:Rohitkodexive50@gmail.com", name: "Email", color: "hover:text-red-400" }
  ]

  // Quick Links
  const quickLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" }
  ]

  // Services
  const services = [
    "Web Development",
    "Mobile Apps",
    "UI/UX Design",
    "API Integration",
    "Cloud Solutions",
    "SEO Optimization"
  ]

  // Contact Info
  const contactInfo = [
    { icon: <FaMapMarkerAlt />, text: "Moradabad 244001, Uttar Pradesh, India", link: null },
    { icon: <FaPhone />, text: "+91 7055503724", link: "tel:+911234567890" },
    { icon: <FaEnvelope />, text: "Rohitkodexive50@gmail.com", link: "mailto:Rohitkodexive50@gmail.com" }
  ]

  // Handle newsletter subscription
  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      toast.success(`Thanks for subscribing! Updates will be sent to ${email}`)
      setEmail('')
    } else {
      toast.error('Please enter your email address')
    }
  }

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Check scroll position for scroll to top button
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setShowScrollTop(window.scrollY > 500)
    })
  }

  // Smooth scroll function
  const smoothScroll = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 border-t border-white/10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            
            {/* Column 1 - Brand */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-lg">
                  <FaLaptopCode className="text-white text-xl" />
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Mr.Rohit
                </h3>
              </div>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                Creating beautiful, responsive, and user-friendly web applications 
                that solve real-world problems.
              </p>
              <div className="flex gap-3">
                {socialLinks.slice(0, 4).map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, scale: 1.1 }}
                    className={`text-gray-400 text-xl transition-all ${social.color}`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Column 2 - Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link, idx) => (
                  <li key={idx}>
                    <button
                      onClick={() => smoothScroll(link.id)}
                      className="text-gray-400 hover:text-purple-400 transition text-sm flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-purple-400 transition-all"></span>
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Column 3 - Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
              <ul className="space-y-2">
                {services.map((service, idx) => (
                  <li key={idx}>
                    <span className="text-gray-400 text-sm flex items-center gap-2">
                      <FaCode className="text-purple-400 text-xs" />
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Column 4 - Newsletter & Contact */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-lg font-semibold mb-4 text-white">Stay Updated</h3>
              <p className="text-gray-400 text-sm mb-4">
                Subscribe to get latest updates and news
              </p>
              <form onSubmit={handleSubscribe} className="mb-6">
                <div className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-purple-500 text-white text-sm"
                  />
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white"
                  >
                    <FaPaperPlane />
                  </motion.button>
                </div>
              </form>

              {/* Contact Info */}
              <div className="space-y-2">
                {contactInfo.map((info, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm">
                    <span className="text-purple-400">{info.icon}</span>
                    {info.link ? (
                      <a href={info.link} className="text-gray-400 hover:text-purple-400 transition">
                        {info.text}
                      </a>
                    ) : (
                      <span className="text-gray-400">{info.text}</span>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Social Media Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center gap-6 py-6 border-t border-white/10 mb-6"
          >
            {socialLinks.map((social, idx) => (
              <motion.a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.2 }}
                className={`text-gray-400 text-2xl transition-all ${social.color}`}
                aria-label={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t border-white/10"
          >
            <p className="text-gray-400 text-sm flex items-center gap-1">
              © 2024 Mr.Rohit. Made with 
              <FaLaptopCode className="text-gray-50 animate-pulse" /> 
              by Mr.Rohit 
            </p>
            
            <div className="flex gap-4 text-xs text-gray-500">
              <a href="#" className="hover:text-purple-400 transition">Privacy Policy</a>
              <span>|</span>
              <a href="#" className="hover:text-purple-400 transition">Terms of Service</a>
              <span>|</span>
              <a href="#" className="hover:text-purple-400 transition">Sitemap</a>
            </div>
          </motion.div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
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