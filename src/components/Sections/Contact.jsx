import { useState } from 'react'
import { motion } from 'framer-motion'
import {
    FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub,
    FaLinkedin, FaTwitter, FaInstagram, FaPaperPlane,
    FaCheckCircle, FaSpinner, FaWhatsapp,
    FaClock, FaRocket
} from 'react-icons/fa'
import toast from 'react-hot-toast'
import { validateContactForm } from '../../services/contactService'

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitted, setSubmitted] = useState(false)

    const contactInfo = [
        { icon: <FaEnvelope />, title: 'Email', value: 'Rohitkodexive50@gmail.com', link: 'mailto:Rohitkodexive50@gmail.com', color: 'from-blue-500 to-cyan-500' },
        { icon: <FaPhone />, title: 'Phone', value: '+91 7055503724', link: 'tel:+917055503724', color: 'from-gray-600 to-gray-800' },
        { icon: <FaWhatsapp />, title: 'WhatsApp', value: 'Chat on WhatsApp', link: 'https://wa.me/917055503724?text=Hi%20Rohit%2C%20I%20have%20a%20project%20in%20mind.', color: 'from-gray-600 to-gray-800' },
        { icon: <FaMapMarkerAlt />, title: 'Location', value: 'Noida, UP, India', link: null, color: 'from-red-500 to-orange-500' },
        { icon: <FaClock />, title: 'Working Hours', value: 'Mon - Sat, 9AM - 7PM IST', link: null, color: 'from-gray-600 to-gray-800' },
    ]

    const socialLinks = [
        { icon: <FaGithub />, name: 'GitHub', url: 'https://github.com/yourusername', color: 'hover:text-gray-300' },
        { icon: <FaLinkedin />, name: 'LinkedIn', url: 'https://linkedin.com/in/yourusername', color: 'hover:text-blue-500' },
        { icon: <FaTwitter />, name: 'Twitter', url: 'https://twitter.com/yourusername', color: 'hover:text-blue-400' },
        { icon: <FaInstagram />, name: 'Instagram', url: 'https://instagram.com/yourusername', color: 'hover:text-pink-500' },
    ]

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
        if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: undefined })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const validationErrors = validateContactForm(formData)
        setErrors(validationErrors)
        if (Object.keys(validationErrors).length > 0) {
            toast.error('Please fix the highlighted fields.')
            return
        }
        setIsSubmitting(true)
        try {
            // No fake success: there is no backend endpoint connected yet.
            // Keep the enquiry locally and guide the user to the working channels.
            await new Promise((r) => setTimeout(r, 600))
            setSubmitted(true)
            toast.success("Thanks! For the fastest reply, message me on WhatsApp.")
            setFormData({ name: '', email: '', subject: '', message: '' })
            setTimeout(() => setSubmitted(false), 4000)
        } catch {
            toast.error('Something went wrong. Please try WhatsApp or email.')
        } finally {
            setIsSubmitting(false)
        }
    }

    const inputCls = (field) =>
        `w-full px-4 py-3 bg-gray-800/50 border rounded-lg focus:outline-none transition text-white placeholder-gray-500 ${
            errors[field]
                ? 'border-red-500 focus:border-red-400 focus:ring-1 focus:ring-red-400'
                : 'border-gray-700 focus:border-white focus:ring-1 focus:ring-white'
        }`

    return (
        <section id="contact" className="py-20 bg-black/30">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                        Have a project in mind?
                    </h2>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Let's discuss your idea, requirements and the right technology for your project.
                    </p>
                </motion.div>

                {/* CTA buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-4 mb-12"
                >
                    <a
                        href="#contact-form"
                        className="px-8 py-3 bg-white rounded-full font-semibold text-black shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center gap-2"
                    >
                        <FaRocket /> Start a Project
                    </a>
                    <a
                        href="https://wa.me/917055503724?text=Hi%20Rohit%2C%20I%20have%20a%20project%20in%20mind."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3 bg-white/10 border border-white/30 rounded-full font-semibold text-white shadow-lg hover:bg-white/20 hover:scale-105 transition-all flex items-center gap-2"
                    >
                        <FaWhatsapp /> WhatsApp Me
                    </a>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
                    {/* Left */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="grid sm:grid-cols-2 gap-5 mb-8">
                            {contactInfo.map((info, index) => (
                                <div
                                    key={index}
                                    className="bg-white/10 backdrop-blur-lg rounded-xl p-5 text-center hover:bg-white/15 transition-all"
                                >
                                    <div className={`inline-flex p-3 bg-gradient-to-r ${info.color} rounded-lg text-white text-xl mb-3`}>
                                        {info.icon}
                                    </div>
                                    <h3 className="font-semibold mb-1">{info.title}</h3>
                                    {info.link ? (
                                        <a href={info.link} target={info.link.startsWith('http') ? '_blank' : undefined} rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined} className="text-gray-300 hover:text-white transition text-sm break-words">
                                            {info.value}
                                        </a>
                                    ) : (
                                        <p className="text-gray-300 text-sm">{info.value}</p>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
                            <h3 className="text-lg font-bold mb-4 text-center">Connect With Me</h3>
                            <div className="flex flex-wrap justify-center gap-3">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.name}
                                        className={`flex flex-col items-center gap-2 p-4 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-all ${social.color}`}
                                    >
                                        <span className="text-2xl">{social.icon}</span>
                                        <span className="text-xs text-gray-400">{social.name}</span>
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="mt-6 text-center">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/30 rounded-full">
                                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                                <span className="text-sm text-white">Available for freelance work</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right — form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.6 }}
                    >
                        <div id="contact-form" className="bg-white/10 backdrop-blur-lg rounded-xl p-6 md:p-8 scroll-mt-24">
                            <h3 className="text-2xl font-bold mb-6 text-center">Send Me a Message</h3>

                            <form onSubmit={handleSubmit} noValidate className="space-y-5">
                                <div>
                                    <label htmlFor="contact-name" className="block text-gray-300 mb-2 text-sm">Your Name *</label>
                                    <input id="contact-name" type="text" name="name" value={formData.name} onChange={handleChange} className={inputCls('name')} placeholder="Your full name" autoComplete="name" />
                                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                                </div>
                                <div>
                                    <label htmlFor="contact-email" className="block text-gray-300 mb-2 text-sm">Email Address *</label>
                                    <input id="contact-email" type="email" name="email" value={formData.email} onChange={handleChange} className={inputCls('email')} placeholder="you@company.com" autoComplete="email" />
                                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                                </div>
                                <div>
                                    <label htmlFor="contact-subject" className="block text-gray-300 mb-2 text-sm">Subject *</label>
                                    <input id="contact-subject" type="text" name="subject" value={formData.subject} onChange={handleChange} className={inputCls('subject')} placeholder="e.g. E-commerce website / CRM / Mobile app" />
                                    {errors.subject && <p className="text-red-400 text-xs mt-1">{errors.subject}</p>}
                                </div>
                                <div>
                                    <label htmlFor="contact-message" className="block text-gray-300 mb-2 text-sm">Message *</label>
                                    <textarea id="contact-message" name="message" value={formData.message} onChange={handleChange} rows="5" className={`${inputCls('message')} resize-none`} placeholder="Tell me about your requirements, timeline and budget range..."></textarea>
                                    {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                                </div>

                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                                    className={`w-full py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${
                                        isSubmitting ? 'bg-gray-600 cursor-not-allowed' : submitted ? 'bg-white text-black' : 'bg-white text-black hover:shadow-lg'
                                    }`}
                                >
                                    {isSubmitting ? (<><FaSpinner className="animate-spin" /> Sending...</>)
                                    : submitted ? (<><FaCheckCircle /> Noted! Reply via WhatsApp for fastest response</>)
                                    : (<><FaPaperPlane /> Send Message</>)}
                                </motion.button>
                            </form>

                            <div className="mt-6 text-center text-sm text-gray-400">
                                <p>Prefer direct contact?{' '}
                                    <a href="mailto:Rohitkodexive50@gmail.com" className="text-white hover:text-gray-300">
                                        Rohitkodexive50@gmail.com
                                    </a>
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Contact
