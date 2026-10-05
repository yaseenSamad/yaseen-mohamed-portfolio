import { motion } from 'framer-motion'
import { Award, Layers, Sparkles } from 'lucide-react'
import { GithubIcon } from './Icons'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: 'Contrarian Stock Market Analysis System',
      category: 'AI / Multi-Agent System',
      awardBadge: '🏆 2nd Prize Winner - Technopark Trivandrum Hackathon',
      tech: ['FastAPI', 'React', 'Gemini', 'OpenAI', 'Grok', 'LangGraph', 'SSE'],
      description: 'Built an AI-powered multi-agent application using FastAPI and React for market analysis. Implemented multi-agent orchestration and Server-Sent Events (SSE) for real-time streaming communication between backend AI agents and interactive frontend charts. Integrated multiple LLM providers (Gemini, OpenAI, Grok).',
      highlights: [
        'Multi-Agent Orchestration with LangGraph',
        'Real-time streaming over Server-Sent Events (SSE)',
        'Multi-LLM Integration (Gemini, OpenAI, Grok)',
        'Awarded 2nd Prize at Technopark Trivandrum Hackathon'
      ],
      github: 'https://github.com/yaseenSamad'
    },
    {
      title: 'Human Resource Management System',
      category: 'Full-Stack & AWS Cloud',
      awardBadge: '☁️ AWS Cloud Infrastructure',
      tech: ['Angular', 'Node.js', 'MySQL', 'AWS EC2', 'AWS S3', 'AWS RDS', 'CloudFront', 'Route 53', 'VPC'],
      description: 'Developed an enterprise HR management platform using Angular, Node.js, and MySQL. Architected and deployed backend on AWS EC2, frontend on Amazon S3, and relational database on Amazon RDS with CloudFront CDN and Route 53 DNS. Provisioned custom AWS VPC with public and private subnets.',
      highlights: [
        'Full AWS Cloud Infrastructure (EC2, S3, RDS, CloudFront, Route 53)',
        'VPC Networking with Public & Private Subnets',
        'Employee Data & Workflow Management',
        'Production-grade environment setup'
      ],
      github: 'https://github.com/yaseenSamad'
    },
    {
      title: 'Travel Website and CRM System',
      category: 'Web Application',
      tech: ['Angular', 'Node.js', 'REST APIs', 'Express'],
      description: 'Comprehensive travel management system with customer relationship management (CRM) capabilities. Features automated tour booking management, customer profile tracking, and dynamic itinerary generation.',
      highlights: [
        'Customer Relationship Management (CRM) workflows',
        'Automated Tour Booking & Itinerary Generation',
        'Responsive Angular Frontend'
      ],
      github: 'https://github.com/yaseenSamad'
    },
    {
      title: 'E-commerce Landing Page',
      category: 'Frontend Application',
      tech: ['React', 'HTML5', 'CSS3', 'Responsive UI', 'Framer Motion'],
      description: 'Modern, responsive landing page for e-commerce platforms engineered for conversion and optimal user experience. Built with fluid micro-interactions, high performance, and mobile-first responsive layout.',
      highlights: [
        'Mobile-first responsive design',
        'Smooth animations & micro-interactions',
        'Conversion-optimized layout'
      ],
      github: 'https://github.com/yaseenSamad'
    },
    {
      title: 'Library Management System',
      category: 'Web Application',
      tech: ['React', 'Node.js', 'Express.js', 'REST APIs'],
      description: 'Digital library management system designed to streamline book cataloging, search filters, borrowing/return workflows, and member management with automated fine calculations.',
      highlights: [
        'Book Tracking & Catalog Search Filters',
        'User Borrowing & Return Workflows',
        'Clean React Management Dashboard'
      ],
      github: 'https://github.com/yaseenSamad'
    }
  ]

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Portfolio Showcase</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A selection of standalone software platforms, hackathon-winning AI systems, and cloud deployments.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`project-card ${index < 2 ? 'featured-card' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="project-card-header">
                <div className="category-badge">
                  <Layers size={14} />
                  <span>{project.category}</span>
                </div>

                {project.awardBadge && (
                  <div className="award-badge">
                    <Award size={14} />
                    <span>{project.awardBadge}</span>
                  </div>
                )}
              </div>

              <h3 className="project-card-title">{project.title}</h3>
              <p className="project-card-desc">{project.description}</p>

              <div className="project-card-highlights">
                {project.highlights.map((h, hIdx) => (
                  <div key={hIdx} className="highlight-item">
                    <Sparkles size={14} className="highlight-sparkle" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              <div className="project-card-footer">
                <div className="project-tags">
                  {project.tech.map((t, tIdx) => (
                    <span key={tIdx} className="tech-chip">{t}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link-btn"
                    title="View GitHub Repository"
                  >
                    <GithubIcon size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
