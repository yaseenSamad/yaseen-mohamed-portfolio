import { motion } from 'framer-motion'
import { GraduationCap, Award, Calendar, BookOpen } from 'lucide-react'
import './Education.css'

const Education = () => {
  const educationList = [
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'Indira Gandhi National Open University (IGNOU)',
      period: '2023 – 2025',
      grade: 'Result Awaited',
      badge: 'Undergraduate Degree',
      status: 'pursuing'
    },
    {
      degree: 'Diploma in Computer Engineering',
      institution: 'Kerala State Board of Technical Education',
      period: '2019 – 2022',
      grade: 'CGPA: 8.47 (First Class with Distinction)',
      badge: 'Technical Diploma',
      status: 'completed'
    },
    {
      degree: 'Higher Secondary Education (Plus Two)',
      institution: 'Board of Higher Secondary Education, Kerala',
      period: 'Computer Science Stream',
      grade: 'Score: 89% (2 A+, 4 A)',
      badge: 'Higher Secondary',
      status: 'completed'
    },
    {
      degree: 'Secondary School Leaving Certificate (SSLC)',
      institution: 'General Education Department, Kerala',
      period: 'Completed',
      grade: 'Grade: Full A+',
      badge: 'High School',
      status: 'completed'
    }
  ]

  return (
    <section id="education" className="education-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Academic Background</span>
          <h2 className="section-title">Education & Qualifications</h2>
          <p className="section-subtitle">
            Formal technical education in Computer Science and Engineering.
          </p>
        </div>

        <div className="education-grid">
          {educationList.map((edu, index) => (
            <motion.div
              key={index}
              className="education-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="edu-card-top">
                <div className="edu-icon-box">
                  <GraduationCap size={24} />
                </div>
                <span className={`edu-badge ${edu.status}`}>{edu.badge}</span>
              </div>

              <h3 className="edu-degree">{edu.degree}</h3>
              <p className="edu-institution">{edu.institution}</p>

              <div className="edu-meta-row">
                <div className="edu-meta-item">
                  <Calendar size={14} />
                  <span>{edu.period}</span>
                </div>
                <div className="edu-meta-item grade-item">
                  <Award size={14} />
                  <span>{edu.grade}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
