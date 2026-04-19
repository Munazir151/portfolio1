import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { Award, Trophy, Users, Code, Sparkles, GraduationCap } from 'lucide-react'

const Achievements = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const achievements = [
    {
      icon: <Award size={32} />,
      title: "Microsoft Student Ambassador",
      description: "Selected as a Microsoft Learn Student Ambassador, representing Microsoft technologies and empowering fellow students",
      year: "2024",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <GraduationCap size={32} />,
      title: "Academic Excellence Award",
      description: "Achieved 9.15 CGPA, demonstrating consistent academic performance and dedication to learning",
      year: "2024",
      color: "from-primary to-secondary"
    },
    {
      icon: <Users size={32} />,
      title: "Student Ambassador - LetsUpgrade",
      description: "Actively promoting tech education and helping students upskill in emerging technologies",
      year: "2024",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Code size={32} />,
      title: "GirlsScript Winter of Blockchain",
      description: "Selected participant in the prestigious open-source program focused on blockchain technology",
      year: "2024",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Trophy size={32} />,
      title: "Hack2Skill GenAI Christmas Edition",
      description: "Participated in the GenAI hackathon, exploring cutting-edge artificial intelligence applications",
      year: "2024",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: <Sparkles size={32} />,
      title: "Hacktoberfest Contributor",
      description: "Active contributor to open-source projects during Hacktoberfest, giving back to the developer community",
      year: "2023-2024",
      color: "from-pink-500 to-purple-500"
    }
  ]

  return (
    <section id="achievements" className="relative py-20 md:py-32 bg-gradient-to-b from-darker via-slate-900 to-darker overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>

      <div ref={ref} className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Achievements & <span className="gradient-text">Recognition</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Milestones and recognitions that mark my journey in technology and innovation
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-secondary to-accent"></div>

          <div className="space-y-12">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <div className="w-full md:w-5/12">
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="glass p-6 rounded-xl hover:bg-opacity-10 transition-all group relative overflow-hidden"
                  >
                    {/* Gradient Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>

                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`text-primary group-hover:scale-110 transition-transform bg-gradient-to-br ${achievement.color} bg-clip-text text-transparent`}>
                          {achievement.icon}
                        </div>
                        <span className="text-xs font-mono text-gray-500">{achievement.year}</span>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                        {achievement.title}
                      </h3>

                      <p className="text-gray-400 text-sm leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>

                    {/* Hover Border Effect */}
                    <div className={`absolute inset-0 border-2 border-transparent group-hover:border-primary opacity-0 group-hover:opacity-100 rounded-xl transition-opacity pointer-events-none`}></div>
                  </motion.div>
                </div>

                {/* Center Icon */}
                <div className="hidden md:flex w-2/12 justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${achievement.color} flex items-center justify-center shadow-lg`}
                  >
                    <div className="text-white">
                      {achievement.icon}
                    </div>
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: "5+", label: "Hackathons" },
            { number: "3+", label: "Ambassadorships" },
            { number: "10+", label: "Projects" },
            { number: "9.15", label: "CGPA" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass p-6 rounded-xl text-center hover:bg-opacity-10 transition-all"
            >
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">{stat.number}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Achievements
