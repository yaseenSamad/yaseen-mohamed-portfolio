import { motion } from 'framer-motion'
import { Sparkles, BookOpen, CheckCircle2, Clock } from 'lucide-react'
import './ProfessionalDevelopment.css'

const ProfessionalDevelopment = () => {
  const cpnCourses = [
    {
      title: 'Introduction to Agent Skills',
      desc: 'Mastering task delegation, tool invocation, and multi-step agent execution.'
    },
    {
      title: 'Building with the Claude API',
      desc: 'Integrating Anthropic Claude LLMs, streaming responses, and structured JSON outputs.'
    },
    {
      title: 'Introduction to Model Context Protocol (MCP)',
      desc: 'Standardizing AI agent integrations, custom servers, and client protocol specs.'
    },
    {
      title: 'Claude Code in Action',
      desc: 'Advanced agentic pair programming, tool augmentation, and developer workflows.'
    }
  ]

  return (
    <section id="prof-dev" className="prof-dev-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Continuous Learning</span>
          <h2 className="section-title">Professional Development</h2>
          <p className="section-subtitle">
            Staying at the cutting edge of AI, Agentic Systems, and LLM orchestration.
          </p>
        </div>

        <motion.div
          className="prof-dev-card"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="card-top-bar">
            <div className="badge-wrapper">
              <span className="status-badge-in-progress">
                <Clock size={14} className="spin-icon" />
                In Progress
              </span>
              <span className="network-tag">Partner Network</span>
            </div>

            <div className="provider-logo">
              <Sparkles size={20} className="provider-sparkle" />
              <span>Anthropic</span>
            </div>
          </div>

          <div className="card-header-body">
            <h3 className="cpn-title">Anthropic Claude Partner Network (CPN)</h3>
            <p className="cpn-description">
              Specialized technical enablement and coursework focusing on state-of-the-art Model Context Protocol (MCP), agentic workflows, and building enterprise AI applications with the Claude API.
            </p>
          </div>

          <div className="coursework-section">
            <h4 className="coursework-heading">Active Coursework & Track Progress:</h4>
            <div className="courses-grid">
              {cpnCourses.map((course, index) => (
                <div key={index} className="course-card">
                  <div className="course-header">
                    <CheckCircle2 size={18} className="course-check" />
                    <h5 className="course-title">{course.title}</h5>
                  </div>
                  <p className="course-desc">{course.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProfessionalDevelopment
