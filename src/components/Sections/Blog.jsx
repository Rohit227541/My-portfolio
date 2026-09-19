import { motion } from 'framer-motion'
import { FaBookOpen, FaArrowRight } from 'react-icons/fa'

// Minimal knowledge section — no fake articles.
// Topics reflect real areas of work; posts can be added when actually written.
const topics = [
  { title: 'React vs Next.js', text: 'When to use each for business websites and web apps.' },
  { title: 'REST APIs', text: 'How clean APIs connect websites, mobile apps and CRMs.' },
  { title: 'CRM Development', text: 'Designing lead, order and team workflows that scale.' },
  { title: 'Payment Gateway Integration', text: 'Payin, payout and merchant flow essentials.' },
  { title: 'MySQL', text: 'Data modeling basics for reliable business software.' },
  { title: 'Website Development Process', text: 'From requirements to launch and maintenance.' },
]

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-purple-500/15 border border-purple-500/30 rounded-full text-sm text-purple-300 mb-4">
            <FaBookOpen /> Developer Notes
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Knowledge Topics
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Areas I work with daily — detailed articles coming soon
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {topics.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.08 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-purple-500/40 transition"
            >
              <h3 className="font-bold text-white mb-2">{t.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-4">{t.text}</p>
              <a href="#contact" className="text-sm text-purple-300 hover:text-purple-200 inline-flex items-center gap-1">
                Ask about this <FaArrowRight size={12} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog
