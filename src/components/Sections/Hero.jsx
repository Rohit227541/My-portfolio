import { motion } from 'framer-motion'
import {
    FaGithub, FaLinkedin, FaTwitter,
    FaEnvelope, FaCode, FaFolderOpen, FaDownload
} from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'

const Hero = () => {
    const socialLinks = [
        { icon: <FaGithub />, url: "https://github.com/yourusername", label: "GitHub", color: "hover:text-gray-300" },
        { icon: <FaLinkedin />, url: "https://linkedin.com/in/yourusername", label: "LinkedIn", color: "hover:text-blue-500" },
        { icon: <FaTwitter />, url: "https://twitter.com/yourusername", label: "Twitter", color: "hover:text-blue-400" },
        { icon: <FaEnvelope />, url: "mailto:Rohitkodexive50@gmail.com", label: "Email", color: "hover:text-red-400" }
    ]

    const scrollTo = (id) => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 pb-16"
        >
            {/* Animated Background */}
            <div className="absolute inset-0 z-0" aria-hidden="true">
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-4xl mx-auto">

                    {/* Availability badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 rounded-full text-sm font-semibold text-green-400 mb-6 border border-green-500/30">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            Available for Freelance Projects
                        </span>
                    </motion.div>

                    {/* Profile Image */}
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
                                    alt="Rohit — Full Stack Developer"
                                    className="w-full h-full object-cover"
                                    loading="eager"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Name */}
                    <motion.h1
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
                    >
                        Hi, I'm{" "}
                        <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Rohit
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.35 }}
                        className="text-lg md:text-xl font-semibold text-purple-300 mb-2"
                    >
                        Full Stack Developer
                    </motion.p>

                    {/* Typing roles */}
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-base md:text-lg text-gray-400 mb-6"
                    >
                        <TypeAnimation
                            sequence={[
                                'React · Next.js · Node.js',
                                2000,
                                'CRM Systems & Admin Panels',
                                2000,
                                'Payment Gateways & REST APIs',
                                2000,
                                'Mobile Apps for Businesses',
                                2000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="border-r-2 border-purple-500 pr-2"
                        />
                    </motion.div>

                    {/* Supporting text */}
                    <motion.p
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed"
                    >
                        Building scalable websites, web applications, CRM systems and
                        mobile apps for businesses — from requirements and design to
                        backend, APIs and deployment.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="flex flex-wrap gap-4 justify-center mb-10"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => scrollTo('contact')}
                            className="px-6 py-3 md:px-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full font-semibold text-white shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
                        >
                            <FaCode /> Hire Me
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => scrollTo('projects')}
                            className="px-6 py-3 md:px-8 border-2 border-purple-500 rounded-full font-semibold text-purple-300 hover:bg-purple-500/10 transition-all flex items-center gap-2"
                        >
                            <FaFolderOpen /> View Projects
                        </motion.button>

                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="/Mr.Rohit.pdf"
                            download
                            className="px-6 py-3 md:px-8 border-2 border-gray-600 rounded-full font-semibold text-gray-300 hover:bg-white/5 transition-all flex items-center gap-2"
                        >
                            <FaDownload /> Download CV
                        </motion.a>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="flex justify-center gap-5"
                    >
                        {socialLinks.map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ y: -5, scale: 1.1 }}
                                className={`text-2xl text-gray-400 transition-all ${social.color}`}
                                aria-label={social.label}
                            >
                                {social.icon}
                            </motion.a>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Hero
