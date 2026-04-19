import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { Briefcase, MapPin, Calendar, Award } from 'lucide-react'

const ExperienceCard = ({ experience, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative"
    >
      <div className="glass p-6 rounded-xl hover:bg-white/5 transition-all group">
        {/* Company/Organization */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Briefcase className="text-primary" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                {experience.role}
              </h3>
              <p className="text-gray-400 text-sm">{experience.company}</p>
            </div>
          </div>
          {experience.certificate && (
            <Award className="text-primary" size={20} />
          )}
        </div>

        {/* Details */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <Calendar size={16} />
            <span>{experience.duration}</span>
            {experience.type && (
              <>
                <span>•</span>
                <span className="px-2 py-0.5 bg-primary/10 text-primary rounded text-xs">
                  {experience.type}
                </span>
              </>
            )}
          </div>
          {experience.location && (
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <MapPin size={16} />
              <span>{experience.location}</span>
            </div>
          )}
        </div>

        {/* Description */}
        <div className="space-y-2">
          {experience.description.map((desc, idx) => (
            <div key={idx} className="flex items-start space-x-2">
              <span className="text-primary mt-1.5">•</span>
              <p className="text-gray-300 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Skills/Tags */}
        {experience.skills && (
          <div className="flex flex-wrap gap-2 mt-4">
            {experience.skills.map((skill, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-xs bg-primary/5 text-primary rounded-full border border-primary/20"
              >
                {skill}
              </span>
            ))}
          </div>
        )}

        {/* Hover Border Effect */}
        <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/30 rounded-xl transition-all pointer-events-none"></div>
      </div>
    </motion.div>
  )
}

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const experiences = [
    {
      role: "Research Analyst",
      company: "Concentrix (Client: Google)",
      duration: "Aug 2025 - Sep 2025 · 2 months",
      type: "Internship",
      location: "Google OPAL · On-site",
      description: [
        "Conducted data research and analysis to support Google projects, ensuring accuracy and insights for decision-making",
        "Identified patterns and trends in datasets, helping optimize workflows and improve productivity",
        "Collaborated with cross-functional teams to deliver actionable insights"
      ],
      skills: ["Data Analysis", "Research", "Google Tools", "Problem Solving"]
    },
    {
      role: "Open Source Contributor",
      company: "Hacktoberfest",
      duration: "Oct 2025 · 1 month",
      type: "Open Source",
      location: "Remote",
      description: [
        "Contributing to open-source projects as part of Hacktoberfest 2025",
        "Participated in global month-long event encouraging collaboration and community-driven development",
        "Made meaningful contributions to various repositories"
      ],
      skills: ["Git", "GitHub", "Open Source", "Collaboration"]
    },
    {
      role: "Artificial Intelligence Intern",
      company: "Edunet Foundation",
      duration: "Dec 2024 - Jan 2025 · 2 months",
      type: "Internship",
      location: "Remote",
      certificate: true,
      description: [
        "Completed internship focused on Artificial Intelligence and Green Skills",
        "Gained hands-on experience with AI technologies and sustainable practices",
        "Received Certificate of Internship for successful completion"
      ],
      skills: ["Artificial Intelligence", "Machine Learning", "Python", "Green Tech"]
    },
    {
      role: "Student Ambassador",
      company: "LetsUpgrade",
      duration: "Aug 2024 · 1 month",
      type: "Ambassador",
      location: "Bengaluru, Karnataka, India",
      description: [
        "Represented LetsUpgrade and promoted tech education initiatives",
        "Engaged with student community to encourage upskilling and learning",
        "Organized and participated in educational events and workshops"
      ],
      skills: ["Community Building", "Leadership", "Communication", "Event Management"]
    }
  ]

  return (
    <section id="experience" className="relative py-20 md:py-32 bg-gradient-to-b from-darker via-slate-900 to-darker overflow-hidden">
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
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My journey through internships, open-source contributions, and community engagement
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
