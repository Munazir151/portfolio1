import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { projects } from '../data/projects'

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false)
  const Icon = project.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="card rounded-xl overflow-hidden group cursor-pointer"
      onClick={() => project.link && window.open(project.link, '_blank')}
    >
      {/* Project Image */}
      {project.image && (
        <div className="relative h-48 overflow-hidden bg-slate-100">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
          
          {/* Icon Overlay */}
          <div className="absolute top-4 right-4 text-white bg-primary/90 p-3 rounded-lg backdrop-blur-sm">
            <Icon size={24} />
          </div>
        </div>
      )}

      <div className="p-6">
        {!project.image && (
          <div className="flex items-start justify-between mb-4">
            <div className="text-primary mb-4 group-hover:scale-110 transition-transform">
              <Icon size={48} />
            </div>
            <div className="flex space-x-2">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-primary transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github size={20} />
                </a>
              )}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-primary transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink size={20} />
                </a>
              )}
            </div>
          </div>
        )}

        {project.image && (
          <div className="flex items-center justify-end mb-4">
            <div className="flex space-x-2">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-primary transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github size={20} />
                </a>
              )}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-primary transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink size={20} />
                </a>
              )}
            </div>
          </div>
        )}

        <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        <p className="text-slate-600 mb-4 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 text-xs bg-blue-50 text-primary rounded-full border border-blue-100"
            >
              {tech}
            </span>
          ))}
        </div>

        {project.status && (
          <div className="mt-4 inline-block px-3 py-1 text-xs font-semibold bg-green-50 text-accent rounded-full border border-green-100">
            {project.status}
          </div>
        )}
      </div>
    </motion.div>
  )
}

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="relative py-20 md:py-32 bg-white">
      <div ref={ref} className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Real-world applications and innovative solutions that solve actual problems
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-slate-600 mb-4">Want to see more of my work?</p>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 border-2 border-primary text-primary font-medium rounded-lg hover:bg-primary hover:text-white transition-all"
          >
            <Github size={20} />
            <span>View GitHub Profile</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
