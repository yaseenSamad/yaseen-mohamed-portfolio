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

  return (
    <section id="competencies" className="core-competencies">
      <div className="container">
        <h2 className="section-title">Core Competencies</h2>
        <div className="competencies-grid">
          {competencies.map((competency, index) => (
            <div key={index} className="competency-item">
              <div className="competency-check">✓</div>
              <p className="competency-text">{competency}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CoreCompetencies
