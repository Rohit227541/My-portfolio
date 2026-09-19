import { motion } from 'framer-motion'
import { FaBriefcase, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa'
import experienceData from '../../data/experienceData'

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Working with clients on complete products — frontend, backend, APIs and deployment
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-5 md:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-transparent" aria-hidden="true"></div>

          <div className="space-y-8">
            {experienceData.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: idx * 0.1 }}
                className="relative pl-14 md:pl-16"
              >
                <div className="absolute left-2 md:left-3 top-1 w-7 h-7 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <FaBriefcase className="text-white text-xs" />
                </div>

                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-purple-500/40 transition">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                      <p className="text-purple-300 font-medium">{exp.company}</p>
                    </div>
                    <span className="text-xs px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-200">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-xs text-gray-500 flex items-center gap-1 mb-4">
                    <FaMapMarkerAlt /> {exp.location}
                  </p>

                  <ul className="space-y-2 mb-4">
                    {exp.responsibilities.map((r, i) => (
                      <li key={i} className="text-sm text-gray-300 flex items-start gap-2 leading-relaxed">
                        <FaCheckCircle className="text-green-400 mt-1 shrink-0 text-xs" />
                        {r}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mb-3">
                    {exp.technologies.map((t, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-white/10 rounded-full text-gray-300">{t}</span>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-white/10">
                    <p className="text-xs text-gray-500 mb-1">Major work</p>
                    <p className="text-sm text-gray-300">{exp.highlights.join(' · ')}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
