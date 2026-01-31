import { motion } from 'framer-motion'
import './Education.css'

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'IGNOU University',
      period: '2022 - 2025',
      grade: 'Pursuing'
    },
    {
      degree: 'Diploma in Computer Engineering',
      institution: 'Kerala State Board of Technical Education',
      period: '2020 - 2022',
      grade: 'First Class with Distinction'
    },
    {
      degree: 'Higher Secondary Education (Plus Two)',
      institution: 'Board of Higher Secondary Education, Kerala',
      period: 'Completed',
      grade: '2 A+, 4 A'
    },
    {
      degree: 'Secondary School Education (SSLC)',
      institution: 'General Education Department, Kerala',
      period: 'Completed',
      grade: 'Full A+'
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
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-grid">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="education-card"
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
            >
              <div className="education-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>
              <h3 className="education-degree">{edu.degree}</h3>
              <p className="education-institution">{edu.institution}</p>
              <p className="education-period">{edu.period}</p>
              <p className="education-grade">{edu.grade}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
