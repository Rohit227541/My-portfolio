import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FaGithub, FaExternalLinkAlt, FaHeart, FaEye, 
  FaCode, FaMobile, FaDesktop, FaDatabase, FaCloud,
  FaTimes, FaStar, FaUsers
} from 'react-icons/fa'

const Projects = () => {
  const [filter, setFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)
  const [likedProjects, setLikedProjects] = useState({})

  // Projects Data
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "fullstack",
      type: "Full Stack",
      tech: ["React", "Node.js", "MongoDB", "Express", "Redux", "Tailwind"],
      description: "A complete e-commerce solution with user authentication, product management, shopping cart, payment integration, and order tracking system.",
      features: [
        "User authentication with JWT",
        "Product search and filtering",
        "Shopping cart with quantity management",
        "Secure payment gateway integration",
        "Order history and tracking",
        "Admin dashboard for product management"
      ],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=600",
      github: "https://github.com",
      demo: "https://demo.com",
      duration: "3 months",
      team: "Solo Project",
      likes: 45,
      views: 1200
    },
    {
      id: 2,
      title: "Weather Forecast App",
      category: "frontend",
      type: "Frontend",
      tech: ["React", "API Integration", "Chart.js", "Tailwind", "Axios"],
      description: "Real-time weather application with 5-day forecast, interactive maps, and weather alerts using OpenWeatherMap API.",
      features: [
        "Real-time weather data",
        "5-day weather forecast",
        "Interactive weather maps",
        "Location-based weather",
        "Weather alerts and notifications",
        "Temperature unit conversion"
      ],
      image: "https://images.unsplash.com/photo-1592210454359-9043ad067fc1?w=600",
      github: "https://github.com",
      demo: "https://demo.com",
      duration: "2 weeks",
      team: "Solo Project",
      likes: 32,
      views: 890
    },
    {
      id: 3,
      title: "Task Management System",
      category: "fullstack",
      type: "Full Stack",
      tech: ["React", "Node.js", "PostgreSQL", "Socket.io", "Tailwind"],
      description: "Collaborative task management platform with real-time updates, team workspaces, and productivity analytics.",
      features: [
        "Real-time task updates",
        "Team collaboration features",
        "Task assignment and tracking",
        "Progress analytics dashboard",
        "File attachments",
        "Comment and notification system"
      ],
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600",
      github: "https://github.com",
      demo: "https://demo.com",
      duration: "2 months",
      team: "Team of 3",
      likes: 67,
      views: 2100
    },
    {
      id: 4,
      title: "Portfolio Website",
      category: "frontend",
      type: "Frontend",
      tech: ["React", "Tailwind", "Framer Motion", "EmailJS"],
      description: "Modern, responsive portfolio website with smooth animations, dark mode, and contact form functionality.",
      features: [
        "Responsive design",
        "Dark/Light mode toggle",
        "Smooth scroll animations",
        "Contact form with EmailJS",
        "Project filtering system",
        "Performance optimized"
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600",
      github: "https://github.com",
      demo: "https://demo.com",
      duration: "1 month",
      team: "Solo Project",
      likes: 89,
      views: 3400
    },
    {
      id: 5,
      title: "Social Media Dashboard",
      category: "frontend",
      type: "Frontend",
      tech: ["React", "Chart.js", "REST API", "Tailwind"],
      description: "Analytics dashboard for social media metrics with interactive charts and real-time data visualization.",
      features: [
        "Multi-platform analytics",
        "Interactive data charts",
        "Custom date range selection",
        "Export reports feature",
        "Real-time data updates",
        "User engagement metrics"
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600",
      github: "https://github.com",
      demo: "https://demo.com",
      duration: "3 weeks",
      team: "Solo Project",
      likes: 54,
      views: 1560
    },
    {
      id: 6,
      title: "Chat Application",
      category: "fullstack",
      type: "Full Stack",
      tech: ["React", "Socket.io", "Node.js", "MongoDB", "Tailwind"],
      description: "Real-time chat application with private messaging, group chats, and file sharing capabilities.",
      features: [
        "Real-time messaging",
        "Private and group chats",
        "File and image sharing",
        "User presence indicators",
        "Message search functionality",
        "End-to-end encryption"
      ],
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600",
      github: "https://github.com",
      demo: "https://demo.com",
      duration: "1.5 months",
      team: "Team of 2",
      likes: 78,
      views: 2450
    }
  ]

  // Filter categories
  const categories = [
    { id: 'all', name: 'All Projects', icon: <FaStar /> },
    { id: 'frontend', name: 'Frontend', icon: <FaDesktop /> },
    { id: 'fullstack', name: 'Full Stack', icon: <FaDatabase /> }
  ]

  // Filter projects
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

  // Handle like
  const handleLike = (projectId) => {
    setLikedProjects(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }))
  }

  // Get icon for tech
  const getTechIcon = (tech) => {
    if (tech.includes('React')) return <FaCode className="text-blue-400" />
    if (tech.includes('Node')) return <FaDatabase className="text-green-400" />
    if (tech.includes('Mobile')) return <FaMobile className="text-purple-400" />
    return null
  }

  return (
    <section id="projects" className="py-20 bg-black/30">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            My Projects
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Here are some of my best works. Each project represents a unique challenge solved.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center gap-4 mb-12 flex-wrap"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`flex items-center gap-2 px-6 py-2 rounded-full transition-all ${
                filter === cat.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {cat.icon}
              {cat.name}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden border border-white/20 hover:border-purple-500/50 transition-all h-full">
                
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-purple-500/90 backdrop-blur-sm rounded-full text-xs font-semibold">
                      {project.type}
                    </span>
                  </div>

                  {/* View Button Overlay */}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center"
                  >
                    <span className="px-4 py-2 bg-white text-gray-900 rounded-lg font-semibold flex items-center gap-2">
                      <FaEye /> Quick View
                    </span>
                  </button>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-white/10 rounded-full">
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="text-xs px-2 py-1 bg-white/10 rounded-full">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Stats & Actions */}
                  <div className="flex justify-between items-center pt-4 border-t border-white/10">
                    <div className="flex gap-4 text-sm text-gray-400">
                      <button 
                        onClick={() => handleLike(project.id)}
                        className={`flex items-center gap-1 transition ${
                          likedProjects[project.id] ? 'text-red-500' : 'hover:text-red-500'
                        }`}
                      >
                        <FaHeart /> {project.likes + (likedProjects[project.id] ? 1 : 0)}
                      </button>
                      <span className="flex items-center gap-1">
                        <FaEye /> {project.views}
                      </span>
                    </div>
                    
                    <div className="flex gap-2">
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition"
                      >
                        <FaGithub size={18} />
                      </a>
                      <a 
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition"
                      >
                        <FaExternalLinkAlt size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-lg z-50 flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-4xl w-full bg-gradient-to-br from-gray-900 to-purple-900 rounded-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full hover:bg-black/70 transition"
                >
                  <FaTimes />
                </button>
                
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover"
                />
                
                <div className="p-8">
                  <h2 className="text-3xl font-bold mb-4">{selectedProject.title}</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-purple-400">Project Details</h3>
                      <ul className="space-y-2 text-gray-300">
                        <li>📅 Duration: {selectedProject.duration}</li>
                        <li>👥 Team: {selectedProject.team}</li>
                        <li>💻 Type: {selectedProject.type}</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-purple-400">Technologies</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tech.map((tech, i) => (
                          <span key={i} className="px-3 py-1 bg-white/10 rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2 text-purple-400">Description</h3>
                    <p className="text-gray-300">{selectedProject.description}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-2 text-purple-400">Key Features</h3>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {selectedProject.features.map((feature, i) => (
                        <li key={i} className="text-gray-300 flex items-center gap-2">
                          <span className="text-purple-400">✓</span> {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex gap-4">
                    <a 
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-6 py-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition font-semibold"
                    >
                      <FaGithub className="inline mr-2" /> View Code
                    </a>
                    <a 
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:scale-105 transition font-semibold"
                    >
                      <FaExternalLinkAlt className="inline mr-2" /> Live Demo
                    </a>
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