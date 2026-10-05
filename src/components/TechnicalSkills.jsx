import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Code2, Layout, Server, Network, Database, Cpu, Cloud,
  Lock, GitBranch, Wrench
} from 'lucide-react'
import { FigmaIcon, TrelloIcon } from './Icons'
import './TechnicalSkills.css'

const TechnicalSkills = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const skillCategories = [
    {
      name: 'Languages',
      icon: <Code2 size={20} />,
      skills: ['Python', 'JavaScript', 'TypeScript', 'C', 'C++', 'HTML', 'CSS']
    },
    {
      name: 'Frontend',
      icon: <Layout size={20} />,
      skills: ['Angular', 'React', 'Angular Material', 'Form.io']
    },
    {
      name: 'Backend',
      icon: <Server size={20} />,
      skills: ['FastAPI', 'Node.js', 'Express.js']
    },
    {
      name: 'APIs',
      icon: <Network size={20} />,
      skills: ['REST', 'GraphQL', 'gRPC', 'MCP']
    },
    {
      name: 'Databases',
      icon: <Database size={20} />,
      skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'immudb']
    },
    {
      name: 'AI / LLM',
      icon: <Cpu size={20} />,
      skills: [
        'LangGraph', 'LangChain', 'MCP', 'Agent Orchestration', 'RAG',
        'Multi-Agent Systems', 'Claude (Anthropic)', 'Gemini', 'OpenAI', 'Grok'
      ]
    },
    {
      name: 'Cloud / DevOps',
      icon: <Cloud size={20} />,
      skills: [
        'AWS EC2', 'S3', 'RDS', 'CloudFront', 'Route 53', 'VPC',
        'Docker', 'Docker Compose', 'Nginx', 'GitHub Actions'
      ]
    },
    {
      name: 'Security / Identity',
      icon: <Lock size={20} />,
      skills: ['Keycloak', 'Authentication', 'Authorization']
    },
    {
      name: 'Version Control & Collab',
      icon: <GitBranch size={20} />,
      skills: ['Git', 'GitHub', 'Slack']
    },
    {
      name: 'Project & Agile Tools',
      icon: <TrelloIcon size={20} />,
      skills: ['Jira', 'Scrum', 'Agile', 'Postman']
    },
    {
      name: 'Design Collaboration',
      icon: <FigmaIcon size={20} />,
      skills: ['Figma']
    },
    {
      name: 'Other Tools',
      icon: <Wrench size={20} />,
      skills: ['Camunda', 'MJML']
    }
  ]

  const categoryNames = ['All', ...skillCategories.map(c => c.name)]

  const filteredCategories = selectedCategory === 'All'
    ? skillCategories
    : skillCategories.filter(c => c.name === selectedCategory)

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Technical Proficiency</span>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            A comprehensive overview of programming languages, frameworks, cloud services, and AI technologies I leverage in production.
          </p>
        </div>

        <div className="skills-filter-tabs">
          {categoryNames.map((cat, idx) => (
            <button
              key={idx}
              className={`filter-tab ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="skills-categories-grid">
          {filteredCategories.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              className="skill-category-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIdx * 0.05 }}
              viewport={{ once: true }}
            >
              <div className="category-header">
                <div className="category-icon">{category.icon}</div>
                <h3 className="category-title">{category.name}</h3>
              </div>
              <div className="skills-tags-container">
                {category.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="skill-chip">
                    {skill}
                  </span>
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
