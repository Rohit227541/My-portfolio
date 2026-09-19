import { motion } from 'framer-motion'
import { FaLaptopCode, FaServer, FaDatabase, FaTools } from 'react-icons/fa'
import { skillCategories } from '../../data/skillsData'

const categoryIcons = {
  Frontend: <FaLaptopCode className="text-3xl text-white" />,
  Backend: <FaServer className="text-3xl text-gray-200" />,
  Database: <FaDatabase className="text-3xl text-blue-400" />,
  'Tools & Deployment': <FaTools className="text-3xl text-orange-400" />,
}

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-slate-950">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Tech Stack
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Technologies I use to design, build, deploy and maintain complete products
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: catIndex * 0.08 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/15 transition-all duration-300"
            >
              <div className="text-center mb-5">
                <div className="flex justify-center mb-2">{categoryIcons[category.title]}</div>
                <h3 className="text-lg font-bold text-white">{category.title}</h3>
                <div className="w-12 h-0.5 bg-white mx-auto mt-2"></div>
              </div>

              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="flex items-center gap-3 p-2 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-all"
                  >
                    <skill.icon className={`text-xl shrink-0 ${skill.color}`} aria-hidden="true" />
                    <span className="text-sm text-gray-200">{skill.name}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-10"
        >
          <p className="text-gray-400 text-sm max-w-xl mx-auto">
            Stack is chosen per project — based on your requirements, scale, timeline and maintenance needs.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
