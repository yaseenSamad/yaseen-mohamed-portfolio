import { motion } from 'framer-motion'
import './Summary.css'

const Summary = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: i * 0.2,
      },
    }),
  }

  return (
    <section id="summary" className="summary">
      <div className="container">
        <h2 className="section-title">Professional Summary</h2>
        <div className="summary-content">
          <motion.p
            className="summary-text"
            custom={0}
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Full Stack Developer with 3+ years of experience building scalable, production-grade web
            applications across healthcare, automation, travel, and e-commerce domains. Strong
            expertise in JavaScript, Python, Angular, React, Node.js, FastAPI, PostgreSQL, and
            workflow automation using Camunda and Form.io.
          </motion.p>
          <motion.p
            className="summary-text"
            custom={1}
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Proven ability to own end-to-end development, mentor junior engineers, provide production
            support, and collaborate directly with clients. Passionate about AI agent orchestration,
            system architecture, and clean, maintainable code.
          </motion.p>
        </div>
      </div>
    </section>
  )
}

export default Summary
