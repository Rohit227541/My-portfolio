import { motion } from 'framer-motion'
import servicesData from '../../data/servicesData'

const Services = () => {
  return (
    <section id="services" className="py-20 bg-black/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            What I Can Build
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Complete software for your business — from idea and requirements to launch and support
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {servicesData.map((service, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: (index % 4) * 0.06 }}
              whileHover={{ y: -8 }}
              className="group bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-purple-500/50 hover:bg-white/15 transition-all duration-300"
            >
              <div className="inline-flex p-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-purple-500/30 rounded-xl text-purple-300 text-2xl mb-4 group-hover:scale-110 transition-transform">
                <service.icon aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition">
                {service.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
