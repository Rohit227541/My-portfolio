import { motion } from 'framer-motion'
import {
    FaGithub, FaLinkedin, FaTwitter,
    FaEnvelope, FaCode, FaFolderOpen, FaDownload
} from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'
import UniverseBackground from '../UI/UniverseBackground'

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
            className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 pb-16 bg-black"
        >
            {/* Universe Background — stars + orbits */}
            <UniverseBackground />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-4xl mx-auto">

                    {/* Availability badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm font-semibold text-white mb-6 border border-white/30">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                            </span>
                            Available for Freelance Projects
                        </span>
                    </motion.div>

                    {/* Profile Image + Next-level orbit rings */}
                    <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.8, type: "spring", stiffness: 260, damping: 20 }}
                        className="relative inline-block mb-8"
                    >
                        {/* Big orbit ring 1 — white */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 md:w-72 md:h-72 pointer-events-none">
                            <div className="w-full h-full rounded-full border border-white/20 animate-spin [animation-duration:12s]">
                                <span className="absolute -top-1 left-1/2 w-2.5 h-2.5 bg-white rounded-full shadow-[0_0_12px_4px_rgba(255,255,255,0.8)]"></span>
                                <span className="absolute top-1/2 -right-1 w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_10px_3px_rgba(96,165,250,0.9)]"></span>
                            </div>
                        </div>
                        {/* Big orbit ring 2 — blue / yellow planet */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-44 md:w-80 md:h-56 pointer-events-none" style={{ transform: 'translate(-50%,-50%) rotate(-18deg)' }}>
                            <div className="w-full h-full rounded-[50%] border border-blue-300/20 animate-spin [animation-duration:18s] [animation-direction:reverse]">
                                <span className="absolute top-2 left-8 w-2 h-2 bg-amber-300 rounded-full shadow-[0_0_10px_3px_rgba(250,204,21,0.9)]"></span>
                                <span className="absolute bottom-3 right-10 w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_10px_3px_rgba(255,255,255,0.9)]"></span>
                            </div>
                        </div>
                        {/* Glow behind photo */}
                        <div className="absolute inset-0 -m-4 bg-white/10 blur-2xl rounded-full pointer-events-none"></div>
                        <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto bg-white rounded-full p-1 ring-4 ring-white/20">
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
                        <span className="text-white">
                            Rohit
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.35 }}
                        className="text-lg md:text-xl font-semibold text-gray-200 mb-2"
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
                            className="border-r-2 border-white pr-2"
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
                            className="px-6 py-3 md:px-8 bg-white rounded-full font-semibold text-black shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
                        >
                            <FaCode /> Hire Me
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => scrollTo('projects')}
                            className="px-6 py-3 md:px-8 border-2 border-white/70 rounded-full font-semibold text-white hover:bg-white/10 transition-all flex items-center gap-2"
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
