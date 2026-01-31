import { motion } from 'framer-motion'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      name: 'Travel Website and CRM System',
      tech: 'Angular, Node.js',
      description: 'Comprehensive travel management system with customer relationship management features'
    },
    {
      name: 'E-commerce Landing Page',
      tech: 'Responsive UI',
      description: 'Modern, responsive landing page for e-commerce platform with optimal user experience'
    },
    {
      name: 'Agentic Orchestrated Contrarian Project',
      tech: 'FastAPI, React',
      description: 'Hackathon project featuring AI agent orchestration and contrarian analysis'
    },
    {
      name: 'Human Resource Management Application',
      tech: 'Angular, Node.js',
      description: 'Complete HR management system with employee tracking and management features'
    },
    {
      name: 'Library Management System',
      tech: 'React',
      description: 'Digital library management system with book tracking and user management'
    }
  ]

  const projectVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.1,
      },
    }),
  }

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>

        <div className="projects-section">
          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="project-item"
                custom={index}
                variants={projectVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -8, boxShadow: '0 12px 32px rgba(0, 0, 0, 0.15)' }}
              >
                <h4 className="project-item-name">{project.name}</h4>
                <p className="project-item-tech">{project.tech}</p>
                <p className="project-item-description">{project.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
