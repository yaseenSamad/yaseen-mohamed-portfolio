import { motion } from 'framer-motion'
import './Experience.css'

const Experience = () => {
  const experiences = [
    {
      title: 'Software Engineer 2',
      company: 'AOT Technologies',
      period: '2022 – Present',
      projects: [
        {
          name: 'formsflow.ai',
          subtitle: 'Form Automation and Workflow Platform',
          description: [
            'Developed dynamic UI components and forms using React.js and Form.io',
            'Designed and implemented scalable workflows using Camunda BPM',
            'Integrated frontend with backend services using REST and GraphQL APIs',
            'Improved performance, stability, and usability through refactoring'
          ]
        },
        {
          name: 'BC GolfSafaris',
          subtitle: 'Travel and Tour Management Platform',
          description: [
            'Built and optimized responsive frontend features using React.js',
            'Improved UI performance through component refactoring',
            'Designed MJML email templates for automated communication'
          ]
        },
        {
          name: 'Quipo',
          subtitle: 'Healthcare Management Application',
          description: [
            'Owned end-to-end development of multiple healthcare modules',
            'Developed frontend modules using Angular and Angular Material',
            'Built backend services using Node.js and FastAPI',
            'Implemented AI agent orchestration and third-party integrations',
            'Provided production support and mentored junior developers'
          ]
        }
      ]
    }
  ]

  const cardVariants = {
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
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="experience-item"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="experience-header">
                <h3 className="experience-title">{exp.title}</h3>
                <p className="experience-company">{exp.company}</p>
                <p className="experience-period">{exp.period}</p>
              </div>
              <div className="projects">
                {exp.projects.map((project, pIndex) => (
                  <motion.div
                    key={pIndex}
                    className="project-card"
                    custom={pIndex}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover={{ y: -4 }}
                  >
                    <h4 className="project-name">{project.name}</h4>
                    <p className="project-subtitle">{project.subtitle}</p>
                    <ul className="project-description">
                      {project.description.map((item, iIndex) => (
                        <li key={iIndex}>{item}</li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
