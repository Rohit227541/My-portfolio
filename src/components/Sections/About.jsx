import { motion } from 'framer-motion'
import { FaServer, FaDatabase, FaPlug, FaRocket, FaBriefcase, FaHandshake } from 'react-icons/fa'

const About = () => {
  const highlights = [
    { icon: <FaBriefcase />, title: '2+ Years Experience', text: 'Working on real business websites, CRM systems and full-stack products.' },
    { icon: <FaServer />, title: 'Frontend + Backend + Database', text: 'React / Next.js frontend, Node.js / PHP backend, MySQL / MongoDB data layer.' },
    { icon: <FaPlug />, title: 'API Integration', text: 'REST APIs, payment gateways, third-party services and WhatsApp automation.' },
    { icon: <FaRocket />, title: 'Deployment & Maintenance', text: 'Launch on Vercel / cPanel / Linux and ongoing support after go-live.' },
  ]

  return (
    <section id="about" className="py-20 bg-black/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            About Me
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Full-Stack Developer focused on complete digital products for clients and agencies
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left — image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative z-10">
              <div className="w-64 h-64 md:w-80 md:h-80 mx-auto bg-white rounded-3xl rotate-6"></div>
              <div className="absolute top-0 left-0 w-64 h-64 md:w-80 md:h-80 mx-auto bg-gradient-to-r from-white to-gray-500 rounded-3xl -rotate-6 opacity-50"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-56 h-56 md:w-72 md:h-72 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center shadow-2xl overflow-hidden">
                  <img
                    src="/Rohit.jpg"
                    alt="Rohit — Full Stack Developer portrait"
                    className="w-full h-full object-cover rounded-2xl"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-white/20 rounded-full blur-xl"></div>
          </motion.div>

          {/* Right — story */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-3">
                I build complete products, not just pages
              </h3>
              <p className="text-gray-300 leading-relaxed">
                I'm Rohit, a Full-Stack Developer with 2+ years of experience working on
                business websites, web applications, CRM systems and mobile-app backends.
                I start from your business requirement, design the right data and API
                structure, then deliver frontend, backend, database and deployment as one
                complete product.
              </p>
            </div>

            <div className="flex items-start gap-3 bg-white/10 rounded-xl p-4 border border-white/20">
              <FaHandshake className="text-white text-xl mt-1 shrink-0" />
              <p className="text-gray-300 text-sm leading-relaxed">
                <span className="text-white font-semibold">Client-focused development:</span>{' '}
                clear communication, milestone-wise progress and clean handover with
                documentation — suitable for direct clients and agency collaborations.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-5 hover:bg-white/15 transition"
                >
                  <div className="text-2xl text-white mb-2">{h.icon}</div>
                  <h4 className="font-bold text-white mb-1">{h.title}</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">{h.text}</p>
                </motion.div>
              ))}
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-400">
              <FaDatabase className="text-white" />
              <span>Based in Noida, India · Working remotely with clients & agencies</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
