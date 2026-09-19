import { motion } from 'framer-motion'
import { FaMobileAlt } from 'react-icons/fa'
import mobileAppsData from '../../data/mobileAppsData'

const MobileApps = () => {
  return (
    <section id="mobile-apps" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-purple-500/15 border border-purple-500/30 rounded-full text-sm text-purple-300 mb-4">
            <FaMobileAlt /> Mobile App Solutions
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Mobile Apps I Can Build
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            App categories I develop for businesses — each with backend, admin panel and APIs
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs text-gray-500 max-w-2xl mx-auto mb-10"
        >
          Brand names below are reference examples to explain app categories only — not claims of having built those products.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {mobileAppsData.map((app, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: (index % 4) * 0.06 }}
              whileHover={{ y: -8 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-purple-500/50 hover:bg-white/15 transition-all duration-300"
            >
              <div className="inline-flex p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white text-2xl mb-4">
                <app.icon aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{app.title}</h3>
              <p className="text-sm text-gray-300 leading-relaxed mb-3">{app.description}</p>
              <p className="text-xs text-gray-500 italic">{app.reference}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MobileApps
