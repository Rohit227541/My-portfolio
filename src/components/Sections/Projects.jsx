import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FaGithub, FaExternalLinkAlt, FaEye,
  FaTimes, FaUser, FaCog
} from 'react-icons/fa'
import projectsData, { projectCategories } from '../../data/projectsData'

const Projects = () => {
  const [filter, setFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)

  const filteredProjects = filter === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === filter)

  // Lock body scroll when modal open + close on Escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setSelectedProject(null) }
    if (selectedProject) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', onKey)
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [selectedProject])

  return (
    <section id="projects" className="py-20 bg-black/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Real client products I worked on — payment platforms, CRM systems and mobile-app backends
          </p>
        </motion.div>

        {/* Filter */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {projectCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                filter === cat.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} — ${project.type}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-purple-500/90 backdrop-blur-sm rounded-full text-xs font-semibold text-white">
                      {project.type}
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center"
                    aria-label={`View ${project.title} case study`}
                  >
                    <span className="px-4 py-2 bg-white text-gray-900 rounded-lg font-semibold flex items-center gap-2 text-sm">
                      <FaEye /> View Case Study
                    </span>
                  </button>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-purple-300 transition">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {project.tagline}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.slice(0, 4).map((tech, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-white/10 rounded-full text-gray-300">
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="text-xs px-2 py-1 bg-white/10 rounded-full text-gray-400">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>
                  <div className="mt-auto pt-4 border-t border-white/10 flex justify-between items-center">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-sm text-purple-300 hover:text-purple-200 font-medium"
                    >
                      Read case study →
                    </button>
                    <div className="flex gap-3 text-gray-400">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                          <FaGithub size={18} className="hover:text-white transition" />
                        </a>
                      )}
                      {project.demo && (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label="Live demo">
                          <FaExternalLinkAlt size={16} className="hover:text-white transition" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Case study modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-lg z-50 flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setSelectedProject(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedProject.title} case study`}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="max-w-3xl w-full bg-gradient-to-br from-gray-900 to-purple-900 rounded-2xl overflow-hidden max-h-[90vh] overflow-y-auto my-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full hover:bg-black/70 transition"
                  aria-label="Close case study"
                >
                  <FaTimes />
                </button>
                <img
                  src={selectedProject.image}
                  alt={`${selectedProject.title} screenshot`}
                  className="w-full h-56 object-cover"
                  loading="lazy"
                />
                <div className="p-6 md:p-8 space-y-6">
                  <div>
                    <span className="inline-block px-3 py-1 bg-purple-500/30 rounded-full text-xs font-semibold text-purple-200 mb-3">
                      {selectedProject.type}
                    </span>
                    <h2 className="text-3xl font-bold mb-2">{selectedProject.title}</h2>
                    <p className="text-gray-300">{selectedProject.description}</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white/5 rounded-xl p-5">
                      <h3 className="font-semibold mb-2 text-red-300">Problem</h3>
                      <p className="text-sm text-gray-300 leading-relaxed">{selectedProject.problem}</p>
                    </div>
                    <div className="bg-white/5 rounded-xl p-5">
                      <h3 className="font-semibold mb-2 text-green-300">Solution</h3>
                      <p className="text-sm text-gray-300 leading-relaxed">{selectedProject.solution}</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3 text-purple-300">Key Features</h3>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {selectedProject.features.map((f, i) => (
                        <li key={i} className="text-sm text-gray-300 flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2">
                          <span className="text-purple-400">✓</span> {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-3 text-purple-300">Technology</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((t, i) => (
                        <span key={i} className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-200">{t}</span>
                      ))}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-start gap-2 bg-white/5 rounded-lg p-4">
                      <FaUser className="text-purple-400 mt-0.5 shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-200">My Role</p>
                        <p className="text-gray-400">{selectedProject.role}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 bg-white/5 rounded-lg p-4">
                      <FaCog className="text-purple-400 mt-0.5 shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-200">Development Type</p>
                        <p className="text-gray-400">{selectedProject.developmentType} · {selectedProject.team}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    {selectedProject.demo ? (
                      <a
                        href={selectedProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-semibold hover:opacity-90 transition"
                      >
                        <FaExternalLinkAlt className="inline mr-2" /> Live Demo
                      </a>
                    ) : (
                      <span className="flex-1 text-center px-6 py-3 bg-white/10 rounded-lg text-gray-400 text-sm">
                        Live demo available on request (client product)
                      </span>
                    )}
                    {selectedProject.github ? (
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center px-6 py-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition font-semibold"
                      >
                        <FaGithub className="inline mr-2" /> View Code
                      </a>
                    ) : (
                      <span className="flex-1 text-center px-6 py-3 bg-white/10 rounded-lg text-gray-400 text-sm">
                        Private client codebase
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects
