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

  return (
    <section id="skills" className="technical-skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="skill-category-title">{category.category}</h3>
              <div className="skill-tags">
                {category.skills.map((skill, sIndex) => (
                  <span key={sIndex} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechnicalSkills
