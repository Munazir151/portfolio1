import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { Mail, Linkedin, Github, Send, MapPin, MessageCircle, Twitter } from 'lucide-react'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const socialLinks = [
    {
      icon: <Linkedin size={24} />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/munazir-ansari/",
      color: "hover:bg-blue-50 hover:text-blue-600"
    },
    {
      icon: <Github size={24} />,
      label: "GitHub",
      href: "https://github.com/Munazir151",
      color: "hover:bg-slate-100 hover:text-slate-900"
    },
    {
      icon: <Twitter size={24} />,
      label: "X (Twitter)",
      href: "https://x.com/munazir_ansari8",
      color: "hover:bg-slate-100 hover:text-slate-900"
    },
    {
      icon: <Mail size={24} />,
      label: "Email",
      href: "mailto:munazir9741@gmail.com",
      color: "hover:bg-red-50 hover:text-red-600"
    },
    {
      icon: <MessageCircle size={24} />,
      label: "Discord",
      href: "https://discord.com/users/munaziransari",
      color: "hover:bg-indigo-50 hover:text-indigo-600"
    }
  ]

  return (
    <section id="contact" className="relative py-20 md:py-32 bg-slate-50">
      <div ref={ref} className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Let's collaborate on exciting projects or discuss opportunities in tech and innovation
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold mb-6 text-slate-900">Let's Connect</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
                  Whether you want to collaborate on a project or just want to say hi, feel free to reach out!
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-4 text-slate-700">
                  <MapPin className="text-primary" size={20} />
                  <span>Bangalore, Karnataka, India</span>
                </div>
                <div className="flex items-center space-x-4 text-slate-700">
                  <Mail className="text-primary" size={20} />
                  <a href="mailto:munazir9741@gmail.com" className="hover:text-primary transition-colors">
                    munazir9741@gmail.com
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold mb-4 text-slate-900">Connect on Social Media</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -5 }}
                      className={`p-4 rounded-lg text-slate-600 transition-all border border-slate-200 ${link.color}`}
                      aria-label={link.label}
                    >
                      {link.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="card p-8 rounded-xl"
            >
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-primary transition-colors text-slate-900"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-primary transition-colors text-slate-900"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-primary transition-colors text-slate-900 resize-none"
                    placeholder="Tell me about your project or idea..."
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-4 bg-primary text-white font-medium rounded-lg hover:bg-secondary transition-all flex items-center justify-center space-x-2 shadow-lg"
                >
                  <span>Send Message</span>
                  <Send size={18} />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="w-full h-px bg-slate-200 mb-8"></div>
          <p className="text-slate-500 text-sm">
            Designed & Built by <span className="text-primary font-semibold">Munazir Ansari</span>
          </p>
          <p className="text-slate-400 text-xs mt-2">
            © 2024 All rights reserved
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
