import { motion } from 'framer-motion'
import './TechnicalSkills.css'

const TechnicalSkills = () => {
  const skillCategories = [
    {
      category: 'Languages',
      skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C', 'C++']
    },
    {
      category: 'Frontend',
      skills: ['Angular', 'React.js', 'Angular Material', 'HTML', 'CSS']
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express.js', 'FastAPI']
    },
    {
      category: 'APIs',
      skills: ['REST', 'GraphQL']
    },
    {
      category: 'Databases',
      skills: ['PostgreSQL', 'MySQL', 'MongoDB']
    },
    {
      category: 'Automation & AI',
      skills: ['Camunda', 'Form.io', 'LangGraph']
    },
    {
      category: 'Tools',
      skills: ['Git', 'GitHub', 'Docker']
    }
  ]

  const categoryVariants = {
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

  const tagVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        delay: i * 0.05,
      },
    }),
  }

  return (
    <section id="skills" className="technical-skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="skill-category"
              custom={index}
              variants={categoryVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ x: 4 }}
            >
              <h3 className="skill-category-title">{category.category}</h3>
              <div className="skill-tags">
                {category.skills.map((skill, sIndex) => (
                  <motion.span
                    key={sIndex}
                    className="skill-tag"
                    custom={sIndex}
                    variants={tagVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -2 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechnicalSkills
