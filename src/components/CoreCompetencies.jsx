import { motion } from 'framer-motion'
import './CoreCompetencies.css'

const CoreCompetencies = () => {
  const competencies = [
    'Full Stack Application Development',
    'API Design and Integration (REST, GraphQL)',
    'Workflow Automation and BPM',
    'AI Agent Orchestration',
    'Performance Optimization and Tuning',
    'Database Design and Optimization',
    'Object-Oriented Programming',
    'Unit Testing and Error Handling',
    'Refactoring and Code Quality',
    'Mentoring and Knowledge Sharing'
  ]

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.08,
      },
    }),
  }

  return (
    <section id="competencies" className="core-competencies">
      <div className="container">
        <h2 className="section-title">Core Competencies</h2>
        <div className="competencies-grid">
          {competencies.map((competency, index) => (
            <motion.div
              key={index}
              className="competency-item"
              custom={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ x: 8 }}
            >
              <div className="competency-check">✓</div>
              <p className="competency-text">{competency}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CoreCompetencies
