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

  const achievements = [
    {
      title: 'Second Prize',
      description: 'Technopark Trivandrum Hackathon',
      icon: '🏆'
    },
    {
      title: 'Promotion to Software Engineer II',
      description: 'Recognition for technical excellence and leadership',
      icon: '⭐'
    },
    {
      title: 'Mentored Junior Developers',
      description: 'Guided and supported junior team members',
      icon: '👥'
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects & Achievements</h2>

        <div className="projects-section">
          <h3 className="subsection-title">Projects</h3>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-item">
                <h4 className="project-item-name">{project.name}</h4>
                <p className="project-item-tech">{project.tech}</p>
                <p className="project-item-description">{project.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="achievements-section">
          <h3 className="subsection-title">Achievements</h3>
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <div key={index} className="achievement-item">
                <div className="achievement-icon">{achievement.icon}</div>
                <h4 className="achievement-title">{achievement.title}</h4>
                <p className="achievement-description">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
