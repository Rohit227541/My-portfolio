import { motion } from 'framer-motion'
import { FaUser, FaCode, FaBriefcase, FaGraduationCap, FaHeart, FaRocket } from 'react-icons/fa'

const About = () => {
  const stats = [
    { number: "3+", label: "Years Experience", icon: <FaBriefcase /> },
    { number: "20+", label: "Projects Completed", icon: <FaCode /> },
    { number: "15+", label: "Happy Clients", icon: <FaHeart /> },
    { number: "5+", label: "Technologies", icon: <FaRocket /> }
  ]

  const hobbies = ["Coding", "Reading", "Traveling", "Photography", "Gaming"]

  return (
    <section id="about" className="py-20 bg-black/30">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Get to know me better - my journey, skills, and what drives me
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative z-10">
              <div className="w-64 h-64 md:w-80 md:h-80 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl rotate-6"></div>
              <div className="absolute top-0 left-0 w-64 h-64 md:w-80 md:h-80 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl -rotate-6 opacity-50"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-56 h-56 md:w-72 md:h-72 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center shadow-2xl">
                    <img
                                    src="/Rohit.jpg"
                                    alt="Rohit"
                                    className="w-full h-full object-cover rounded-2xl "
                                />
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-blue-500/20 rounded-full blur-xl"></div>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-purple-500/20 rounded-full blur-xl"></div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Introduction */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-3">
                Who Am I?
              </h3>
              <p className="text-gray-300 leading-relaxed">
                I'm a passionate Full Stack Developer with over 3 years of experience in building 
                modern web applications. I love creating beautiful, responsive, and user-friendly 
                websites that solve real-world problems.
              </p>
            </div>

            {/* Mission */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-3">
                My Mission
              </h3>
              <p className="text-gray-300 leading-relaxed">
                To create innovative digital solutions that make a positive impact on people's lives. 
                I strive to write clean, efficient code while staying updated with the latest technologies.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-4 text-center hover:bg-white/20 transition"
                >
                  <div className="text-3xl text-purple-400 mb-2 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-white">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Hobbies/Interests */}
            <div>
              <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <FaHeart className="text-purple-400" />
                When I'm not coding
              </h4>
              <div className="flex flex-wrap gap-2">
                {hobbies.map((hobby, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-purple-500/20 rounded-full text-sm text-purple-300"
                  >
                    {hobby}
                  </span>
                ))}
              </div>
            </div>

            {/* Fun Fact */}
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl p-4 border border-purple-500/20">
              <p className="text-gray-300 text-sm">
                💡 <span className="text-purple-400">Fun Fact:</span> I can solve a Rubik's cube in under 2 minutes!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About