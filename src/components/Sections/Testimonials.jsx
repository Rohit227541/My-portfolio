import { motion } from 'framer-motion'
import { FaQuoteLeft, FaStar, FaComments } from 'react-icons/fa'
import testimonialsData from '../../data/testimonialsData'

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-black/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Testimonials
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            What clients say about working together
          </p>
        </motion.div>

        {testimonialsData.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl mx-auto text-center bg-white/10 backdrop-blur-lg rounded-xl p-10 border border-white/10"
          >
            <div className="inline-flex p-4 bg-purple-500/15 rounded-full text-purple-300 text-3xl mb-4">
              <FaComments />
            </div>
            <p className="text-gray-200 font-semibold mb-2">Client testimonials will be added soon.</p>
            <p className="text-sm text-gray-400">
              I'm currently collecting feedback from recent client projects. Have we worked together?{' '}
              <a href="#contact" className="text-purple-300 hover:text-purple-200">Share your experience →</a>
            </p>
          </motion.div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonialsData.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/10"
              >
                <FaQuoteLeft className="text-purple-400 text-2xl mb-4" />
                <p className="text-gray-300 mb-4">{t.text}</p>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(t.rating || 5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-sm" />
                  ))}
                </div>
                <h4 className="font-bold text-white">{t.name}</h4>
                <p className="text-gray-400 text-sm">{t.role}</p>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Testimonials
