import { motion } from 'framer-motion'
import { Code, Cloud, Cpu, ShieldCheck, CheckCircle2 } from 'lucide-react'
import './About.css'

const About = () => {
  const highlights = [
    {
      icon: <Code size={24} />,
      title: 'Full Stack Excellence',
      description: 'Production frontend and backend expertise with Angular, React, FastAPI, and Node.js.'
    },
    {
      icon: <Cloud size={24} />,
      title: 'AWS Cloud & Infrastructure',
      description: 'Hands-on experience deploying scalable architecture across EC2, S3, RDS, CloudFront, & VPC.'
    },
    {
      icon: <Cpu size={24} />,
      title: 'AI & Agentic Workflows',
      description: 'Building next-gen applications with AI Agent Orchestration, MCP, LangGraph, and multi-agent RAG.'
    },
    {
      icon: <ShieldCheck size={24} />,
      title: 'End-to-End Ownership',
      description: 'Proven track record of taking complex features from design to production with 100% reliability.'
    }
  ]

  const keyStrengths = [
    '4 Years Production-Grade Development',
    'Agile & Scrum Methodologies (Jira, Postman)',
    'Enterprise Third-Party Integrations (Stripe, Twilio, Keycloak)',
    'Open-Source Software Contributions',
    'API-driven Healthcare Data Exchange (Epic EHR)',
    'Clean, Maintainable & Performant Code'
  ]

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">About Me</span>
          <h2 className="section-title">Architecting Robust Digital Solutions</h2>
          <p className="section-subtitle">
            Passionate software engineer focused on building clean, high-performance web applications and agentic AI systems.
          </p>
        </div>

        <div className="about-grid">
          <motion.div
            className="about-bio-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="bio-title">Professional Summary</h3>
            <p className="bio-text">
              Full Stack Developer with <strong>4 years of experience</strong> building and supporting production web applications across healthcare, workflow automation, travel, and enterprise domains. Strong experience with Angular, React, JavaScript, Python, FastAPI, Node.js, PostgreSQL, MySQL, and REST APIs.
            </p>
            <p className="bio-text">
              Experienced in end-to-end application development, third-party integrations, AWS deployment, production troubleshooting, and open-source software development. Hands-on experience with AI agent orchestration, MCP, LangGraph, and AI-driven application workflows.
            </p>
            <p className="bio-text">
              Comfortable working in Agile/Scrum teams, using Jira for sprint and task tracking, Git and GitHub for version control, and Postman for API testing. Proven ability to independently own features and proof-of-concept projects, collaborate with stakeholders, and deliver maintainable and scalable software solutions.
            </p>

            <div className="strengths-wrapper">
              <h4 className="strengths-title">Core Focus & Strengths</h4>
              <div className="strengths-grid">
                {keyStrengths.map((strength, index) => (
                  <div key={index} className="strength-item">
                    <CheckCircle2 size={18} className="check-icon" />
                    <span>{strength}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-highlights-grid"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {highlights.map((item, index) => (
              <div key={index} className="highlight-card">
                <div className="highlight-icon-box">{item.icon}</div>
                <h4 className="highlight-title">{item.title}</h4>
                <p className="highlight-desc">{item.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
