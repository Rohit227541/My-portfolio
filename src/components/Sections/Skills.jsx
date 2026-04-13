import { motion } from 'framer-motion'
import { 
  FaReact, FaNodeJs, FaPython, FaJava, FaHtml5, FaCss3Alt, 
  FaJs, FaDatabase, FaGitAlt, FaFigma, FaBootstrap, FaWind,
  FaAws, FaDocker, FaPhp, FaAngular, FaVuejs, FaWordpress,FaLaptopCode, FaServer, FaTools
  
} from 'react-icons/fa'
import { 
  SiTypescript, SiNextdotjs, SiMongodb, SiExpress, SiRedux, SiGraphql 
} from 'react-icons/si'

const Skills = () => {
  // Technical Skills with levels
  const technicalSkills = [
  

      { name: "HTML5", icon: <FaHtml5 />, level: 92, color: "text-orange-500" },
       { name: "CSS3", icon: <FaCss3Alt />, level: 88, color: "text-blue-500" },
    { name: "Tailwind CSS", icon: <FaWind />, level: 85, color: "text-cyan-400" },
        { name: "JavaScript", icon: <FaJs />, level: 88, color: "text-yellow-400" },
          { name: "React.js", icon: <FaReact />, level: 90, color: "text-blue-400" },
          {name:"php", icon: <FaPhp />, level: 80, color: "text-purple-400" },
          {name:"wordpress", icon: <FaWordpress />, level: 80, color: "text-blue-400" },
    // { name: "Node.js", icon: <FaNodeJs />, level: 82, color: "text-green-500" },
    // { name: "MongoDB", icon: <SiMongodb />, level: 78, color: "text-green-400" },
    // { name: "Express.js", icon: <SiExpress />, level: 80, color: "text-gray-400" },
  
   
    { name: "Git", icon: <FaGitAlt />, level: 85, color: "text-orange-600" },
    {name: "MySQL", icon: <FaDatabase />, level: 80, color: "text-blue-400" },
    // { name: "TypeScript", icon: <SiTypescript />, level: 75, color: "text-blue-600" }
  ]

  // Frontend Skills
  const frontendSkills = [
    { name: "React", icon: <FaReact />, color: "text-blue-400" },
    { name: "Next.js", icon: <SiNextdotjs />, color: "text-gray-400" },
    {name: "Tailwind CSS", icon: <FaWind />, color: "text-cyan-400" },
    { name: "JavaScript", icon: <FaJs />, color: "text-yellow-400" },
    { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-500" },
    { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-500" },
    // { name: "Vue.js", icon: <FaVuejs />, color: "text-green-400" },
    // { name: "Angular", icon: <FaAngular />, color: "text-red-500" },
    // { name: "Redux", icon: <SiRedux />, color: "text-purple-400" },
    // { name: "GraphQL", icon: <SiGraphql />, color: "text-pink-500" }
  ]

  // Backend Skills
  const backendSkills = [
    // { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
    // { name: "Python", icon: <FaPython />, color: "text-blue-400" },
    // { name: "Java", icon: <FaJava />, color: "text-red-500" },
    { name: "PHP", icon: <FaPhp />, color: "text-purple-400" },
    // { name: "MongoDB", icon: <SiMongodb />, color: "text-green-400" },
    { name: "MySQL", icon: <FaDatabase />, color: "text-blue-400" }
  ]

  // Tools & Others
  const toolSkills = [
    { name: "Git", icon: <FaGitAlt />, color: "text-orange-500" },
    // { name: "Docker", icon: <FaDocker />, color: "text-blue-400" },
    // { name: "AWS", icon: <FaAws />, color: "text-yellow-500" },
    { name: "Figma", icon: <FaFigma />, color: "text-purple-400" },
    { name: "Bootstrap", icon: <FaBootstrap />, color: "text-purple-500" },
    { name: "WordPress", icon: <FaWordpress />, color: "text-blue-400" }
  ]

  const skillCategories = [
  { 
    title: "Frontend Development", 
    skills: frontendSkills, 
    icon: <FaLaptopCode className="text-4xl text-purple-400" />
  },
  { 
    title: "Backend Development", 
    skills: backendSkills, 
    icon: <FaServer className="text-4xl text-green-400" />
  },
  { 
    title: "Tools & Technologies", 
    skills: toolSkills, 
    icon: <FaTools className="text-4xl text-orange-400" />
  }
]

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            My Skills
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Technical Skills with Progress Bars */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8 flex items-center justify-center gap-2">
            <span className="text-purple-400">📊</span> Technical Proficiency
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {technicalSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className={`text-2xl ${skill.color}`}>{skill.icon}</span>
                    <span className="font-semibold text-gray-200">{skill.name}</span>
                  </div>
                  <span className="text-sm text-gray-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.05 }}
                    className={`h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skill Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
            >
              {/* Category Header */}
              <div className="text-center mb-6">
                <div className="text-4xl mb-2">{category.icon}</div>
                <h3 className="text-xl font-bold text-purple-400">{category.title}</h3>
                <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-2"></div>
              </div>

              {/* Skills List */}
              <div className="flex flex-wrap gap-3 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: skillIndex * 0.05 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="group relative"
                  >
                    <div className="flex flex-col items-center gap-2 p-3 bg-gray-800/50 rounded-lg min-w-[80px] hover:bg-gray-700/50 transition-all">
                      <span className={`text-3xl ${skill.color} group-hover:scale-110 transition`}>
                        {skill.icon}
                      </span>
                      <span className="text-xs text-gray-300 text-center">{skill.name}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

  

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400">
            Always learning and exploring new technologies to stay ahead in the field
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills