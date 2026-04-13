import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import {
    FaGithub, FaLinkedin, FaTwitter, FaDownload,
    FaEnvelope, FaCode, FaArrowDown
} from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'

const Hero = () => {
    const heroRef = useRef(null)

    // Social Links
    const socialLinks = [
        { icon: <FaGithub />, url: "https://github.com/yourusername", label: "GitHub", color: "hover:text-gray-400" },
        { icon: <FaLinkedin />, url: "https://linkedin.com/in/yourusername", label: "LinkedIn", color: "hover:text-blue-500" },
        { icon: <FaTwitter />, url: "https://twitter.com/yourusername", label: "Twitter", color: "hover:text-blue-400" },
        { icon: <FaEnvelope />, url: "mailto:Rohitkodexive50@gmail.com", label: "Email", color: "hover:text-red-400" }
    ]

    // Stats Data
    const stats = [
        { number: "3+", label: "Years Experience" },
        { number: "20+", label: "Projects" },
        { number: "15+", label: "Happy Clients" },
        { number: "10+", label: "Technologies" }
    ]

    return (
        <section
            id="home"
            ref={heroRef}
            className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
        >
            {/* Animated Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center">

                    {/* Profile Image with Animation */}
                    <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.8, type: "spring", stiffness: 260, damping: 20 }}
                        className="relative inline-block mb-8"
                    >
                        <div className="w-32 h-32 md:w-40 md:h-40 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-1">
                            <div className="w-full h-full rounded-full overflow-hidden">
                                <img
                                    src="/Rohit.jpg"
                                    alt="Rohit"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        {/* Online Status Badge */}
                        <div className="absolute bottom-2 right-2 md:bottom-3 md:right-3">
                            <div className="relative">
                                <div className="w-4 h-4 bg-green-500 rounded-full animate-ping absolute"></div>
                                <div className="w-4 h-4 bg-green-500 rounded-full relative"></div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Greeting Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full text-sm font-semibold text-purple-400 mb-6 border border-purple-500/30">
                            ✨ Welcome to my portfolio
                        </span>
                    </motion.div>

                    {/* Name with Typing Animation */}
                    <motion.h1
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
                    >
                        Hi, I'm{" "}
                        <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Mr.Rohit
                        </span>
                    </motion.h1>

                    {/* Typing Animation for Role */}
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-6"
                    >
                        <TypeAnimation
                            sequence={[
                                'Full Stack Developer',
                                2000,
                                'React Specialist',
                                2000,
                                'UI/UX Enthusiast',
                                2000,
                                'Problem Solver',
                                2000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="border-r-2 border-purple-500 pr-2"
                        />
                    </motion.div>

                    {/* Description */}
                    <motion.p
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed"
                    >
                        I create beautiful, responsive, and user-friendly web applications
                        that solve real-world problems. Let's build something amazing together!
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="flex flex-wrap gap-4 justify-center mb-12"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => {
                                const contactSection = document.getElementById('contact')
                                if (contactSection) {
                                    contactSection.scrollIntoView({ behavior: 'smooth' })
                                }
                            }}
                            className="px-6 py-3 md:px-8 md:py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full font-semibold text-white shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
                        >
                            <FaCode /> Hire Me
                        </motion.button>

                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="/resume.pdf"
                            download
                            className="px-6 py-3 md:px-8 md:py-3 border-2 border-purple-500 rounded-full font-semibold text-purple-400 hover:bg-purple-500/10 transition-all flex items-center gap-2"
                        >
                            <FaDownload /> Download CV
                        </motion.a>
                    </motion.div>

                    {/* Stats Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-12"
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -5 }}
                                className="bg-white/10 backdrop-blur-lg rounded-xl p-4 text-center"
                            >
                                <div className="text-2xl md:text-3xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
                                    {stat.number}
                                </div>
                                <div className="text-xs md:text-sm text-gray-400 mt-1">{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="flex justify-center gap-4"
                    >
                        {socialLinks.map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ y: -5, scale: 1.1 }}
                                className={`text-2xl text-gray-400 pb-4 transition-all ${social.color}`}
                                aria-label={social.label}
                            >
                                {social.icon}
                            </motion.a>
                        ))}
                    </motion.div>

                    {/* Scroll Down Indicator */}
                    <motion.a
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        href="#about"
                        onClick={(e) => {
                            e.preventDefault()
                            const aboutSection = document.getElementById('about')
                            if (aboutSection) {
                                aboutSection.scrollIntoView({ behavior: 'smooth' })
                            }
                        }}
                        className="absolute bottom-8 left-1/2 pb-6 transform -translate-x-1/2 text-gray-400 hover:text-purple-400 transition hidden md:block"
                    >
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}

                        >
                            <FaArrowDown size={24} />
                        </motion.div>
                    </motion.a>
                </div>
            </div>
        </section>
    )
}

export default Hero