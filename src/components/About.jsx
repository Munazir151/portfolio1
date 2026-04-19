import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, Palette, Brain, Briefcase } from 'lucide-react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const highlights = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Full-Stack Development",
      description: "Building end-to-end web applications with modern technologies"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "UI/UX Design",
      description: "Creating beautiful, intuitive user experiences in Figma"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI/ML Engineering",
      description: "Exploring machine learning and artificial intelligence"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Professional Experience",
      description: "Internships at Google & Edunet Foundation"
    }
  ]

  return (
    <section id="about" className="relative py-20 md:py-32 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary rounded-full blur-3xl"></div>
      </div>

      <div ref={ref} className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-slate-900">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Passionate developer, creative designer, and lifelong learner
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {/* Left Column - Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-full"
          >
            <div className="card p-8 rounded-2xl h-full flex flex-col">
              <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                <span className="w-2 h-8 bg-primary rounded-full mr-3"></span>
                My Journey
              </h3>
              <div className="space-y-4 text-slate-600 leading-relaxed flex-grow">
                <p>
                  Hey there! I'm <span className="text-primary font-semibold">Munazir Ansari</span>, a pre-final year engineering student at 
                  <span className="text-primary font-semibold"> East Point College of Engineering</span> with a passion for turning ideas into reality through code and design.
                </p>
                <p>
                  My journey in tech started with curiosity and has evolved into a deep commitment to building innovative solutions. 
                  As an aspiring <span className="text-primary font-semibold">AI/ML Engineer</span>, I combine technical expertise in 
                  <span className="text-primary font-semibold"> frontend development</span> with creative skills in 
                  <span className="text-primary font-semibold"> UI/UX design</span> to create experiences that users love.
                </p>
                <p>
                  I've had the privilege of working with amazing teams at <span className="text-primary font-semibold">Google (via Concentrix)</span> and 
                  <span className="text-primary font-semibold"> Edunet Foundation</span>, where I contributed to real-world projects involving data analysis, 
                  AI technologies, and innovative solutions.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-full"
          >
            <div className="card p-8 rounded-2xl h-full flex flex-col">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                <span className="w-2 h-8 bg-primary rounded-full mr-3"></span>
                What I Do
              </h3>
              <div className="space-y-4 flex-grow">
                {highlights.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-start space-x-4 p-4 rounded-xl hover:bg-slate-50 transition-colors"
                  >
                    <div className="text-primary bg-slate-50 p-3 rounded-lg flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-sm text-slate-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="card p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-center text-slate-900 mb-8">
              By The <span className="gradient-text">Numbers</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { number: "9.15", label: "CGPA", sublabel: "Academic Excellence" },
                { number: "6+", label: "Projects", sublabel: "Live & Deployed" },
                { number: "18+", label: "Technologies", sublabel: "Mastered" },
                { number: "2", label: "Internships", sublabel: "Google & Edunet" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center p-6 rounded-xl hover:bg-slate-50 transition-all"
                >
                  <div className="text-5xl font-bold gradient-text mb-2">{stat.number}</div>
                  <div className="text-slate-900 font-semibold mb-1">{stat.label}</div>
                  <div className="text-xs text-slate-500">{stat.sublabel}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
