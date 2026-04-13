import { useState } from 'react'
import { motion } from 'framer-motion'
import {
    FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub,
    FaLinkedin, FaTwitter, FaInstagram, FaPaperPlane,  // ✅ FaPaperPlane use karo
    FaCheckCircle, FaSpinner, FaWhatsapp, FaTelegram,
    FaClock, FaGlobe
} from 'react-icons/fa'
import toast from 'react-hot-toast'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitted, setSubmitted] = useState(false)

    // Contact Information
    const contactInfo = [
        {
            icon: <FaEnvelope />,
            title: "Email",
            value: "Rohitkodexive50@gmail.com",
            link: "mailto:Rohitkodexive50@gmail.com",
            color: "from-blue-500 to-cyan-500"
        },
        {
            icon: <FaPhone />,
            title: "Phone",
            value: "+91 7055503724",
            link: "tel:+911234567890",
            color: "from-green-500 to-emerald-500"
        },
        {
            icon: <FaMapMarkerAlt />,
            title: "Location",
            value: "Moradabad 244001, Uttar Pradesh, India",
            link: null,
            color: "from-red-500 to-orange-500"
        },
        {
            icon: <FaClock />,
            title: "Working Hours",
            value: "Mon - Fri, 9AM - 6PM",
            link: null,
            color: "from-purple-500 to-pink-500"
        }
    ]

    // Social Links
    const socialLinks = [
        { icon: <FaGithub />, name: "GitHub", url: "https://github.com/yourusername", color: "hover:text-gray-400" },
        { icon: <FaLinkedin />, name: "LinkedIn", url: "https://linkedin.com/in/yourusername", color: "hover:text-blue-500" },
        { icon: <FaTwitter />, name: "Twitter", url: "https://twitter.com/yourusername", color: "hover:text-blue-400" },
        { icon: <FaInstagram />, name: "Instagram", url: "https://instagram.com/yourusername", color: "hover:text-pink-500" },
        { icon: <FaWhatsapp />, name: "WhatsApp", url: "https://wa.me/911234567890", color: "hover:text-green-500" },
        { icon: <FaTelegram />, name: "Telegram", url: "https://t.me/yourusername", color: "hover:text-blue-400" }
    ]

    // Handle input change
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false)
            setSubmitted(true)
            toast.success('Message sent successfully! I\'ll get back to you soon.')

            // Reset form
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            })

            // Reset submitted status after 3 seconds
            setTimeout(() => setSubmitted(false), 3000)
        }, 1500)
    }

    return (
        <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
            <div className="container mx-auto px-6">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        Get In Touch
                    </h2>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Have a project in mind? Let's work together! Feel free to reach out through any platform.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">

                    {/* Left Side - Contact Info & Social */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Contact Information Cards */}
                        <div className="grid sm:grid-cols-2 gap-6 mb-8">
                            {contactInfo.map((info, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ y: -5 }}
                                    className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center hover:bg-white/20 transition-all"
                                >
                                    <div className={`inline-flex p-3 bg-gradient-to-r ${info.color} rounded-lg text-white text-2xl mb-4`}>
                                        {info.icon}
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                                    {info.link ? (
                                        <a
                                            href={info.link}
                                            className="text-gray-300 hover:text-purple-400 transition text-sm"
                                        >
                                            {info.value}
                                        </a>
                                    ) : (
                                        <p className="text-gray-300 text-sm">{info.value}</p>
                                    )}
                                </motion.div>
                            ))}
                        </div>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="bg-white/10 backdrop-blur-lg rounded-xl p-6"
                        >
                            <h3 className="text-xl font-bold mb-4 text-center">Connect With Me</h3>
                            <div className="flex flex-wrap justify-center gap-4">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        whileHover={{ scale: 1.1, y: -3 }}
                                        transition={{ delay: index * 0.05 }}
                                        className={`flex flex-col items-center gap-2 p-4 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-all group ${social.color}`}
                                    >
                                        <span className="text-2xl">{social.icon}</span>
                                        <span className="text-xs text-gray-400 group-hover:text-white">{social.name}</span>
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>

                        {/* Availability Status */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="mt-6 text-center"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 rounded-full">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="text-sm text-green-400">Available for freelance work</span>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Side - Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8">
                            <h3 className="text-2xl font-bold mb-6 text-center">Send Me a Message</h3>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                {/* Name Field */}
                                <div>
                                    <label className="block text-gray-300 mb-2 text-sm">Your Name *</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition text-white"
                                        placeholder="John Doe"
                                    />
                                </div>

                                {/* Email Field */}
                                <div>
                                    <label className="block text-gray-300 mb-2 text-sm">Email Address *</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition text-white"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                {/* Subject Field */}
                                <div>
                                    <label className="block text-gray-300 mb-2 text-sm">Subject *</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition text-white"
                                        placeholder="Project Inquiry"
                                    />
                                </div>

                                {/* Message Field */}
                                <div>
                                    <label className="block text-gray-300 mb-2 text-sm">Message *</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="5"
                                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition text-white resize-none"
                                        placeholder="Tell me about your project..."
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className={`w-full py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${isSubmitting
                                            ? 'bg-gray-600 cursor-not-allowed'
                                            : submitted
                                                ? 'bg-green-500'
                                                : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:shadow-lg'
                                        }`}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <FaSpinner className="animate-spin" /> Sending...
                                        </>
                                    ) : submitted ? (
                                        <>
                                            <FaCheckCircle /> Sent Successfully!
                                        </>
                                    ) : (
                                        <>
                                            <FaPaperPlane /> Send Message
                                        </>
                                    )}
                                </motion.button>
                            </form>

                            {/* Alternative Contact */}
                            <div className="mt-6 text-center text-sm text-gray-400">
                                <p>Or reach me directly at:
                                    <a href="mailto:Rohitkodexive50@gmail.com" className="text-purple-400 hover:text-purple-300 ml-1">
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