import { motion } from 'framer-motion'
import { Briefcase, Calendar, FolderGit2, Sparkles, CheckCircle2 } from 'lucide-react'
import './Experience.css'

const Experience = () => {
  const roles = [
    {
      roleTitle: 'Software Engineer II',
      period: 'Jan 2025 – Present',
      company: 'AOT Technologies',
      location: 'Victoria, BC / Remote',
      badge: 'Current Role',
      projects: [
        {
          name: 'Foundery — Independent Works on formsflow.ai',
          tech: ['React', 'formsflow.ai', 'Offline Storage', 'IndexedDB', 'REST APIs', 'Field Operations'],
          statusBadge: 'Active / Current Focus',
          bullets: [
            'Independently developing offline forms functionality for field workers using formsflow.ai.',
            'Engineering local data storage, background queueing, and seamless synchronization for field operations in remote or disconnected environments.',
            'Enabling field workers to capture, validate, and store form submissions locally with automatic server sync upon reconnection.'
          ]
        },
        {
          name: 'Clinic Management Application (British Columbia, Canada)',
          tech: ['Angular', 'Node.js', 'FastAPI', 'PostgreSQL', 'Twilio', 'Stripe', 'SendGrid', 'Keycloak', 'Mapbox', 'i18n'],
          bullets: [
            'Independently handled end-to-end development of multiple healthcare application modules using Angular, Node.js, FastAPI, and PostgreSQL.',
            'Developed scalable frontend modules using Angular and Angular Material and implemented backend APIs and services using Node.js and FastAPI.',
            'Integrated third-party services including Twilio, Stripe, SendGrid, and Keycloak to support communication, payment, notification, and authentication workflows.',
            'Implemented features including appointment booking, invoice management, Mapbox integration, and internationalization (i18n).',
            'Improved application security through email security enforcement and backend security middleware.',
            'Provided production support, investigated application issues, and implemented fixes to improve system stability and reliability.',
            'Used Jira for sprint planning and task tracking, and Postman for API testing and validation within an Agile/Scrum delivery process.'
          ]
        },
        {
          name: 'Node Wire — Open-Source Connector Integration Platform',
          tech: ['Python', 'FastAPI', 'REST', 'gRPC', 'MCP', 'Google Drive', 'Stripe', 'FHIR', 'Salesforce', 'Slack'],
          bullets: [
            'Contributed to the development of an open-source Python/FastAPI platform for building and executing connector adapters for services including Google Drive, SMTP, Stripe, FHIR, Salesforce, and Slack.',
            'Worked with REST, gRPC, and MCP interfaces to expose connector capabilities through a consistent execution contract.',
            'Contributed to connector testing, validation, error handling, and reliability improvements across integration workflows.',
            'Participated in open-source licensing activities, testing, documentation, and project preparation for public release.',
            'Used GitHub for version control, code reviews, and collaborative development.'
          ]
        },
        {
          name: 'formsflow-EPIC — Healthcare EHR Integration POC',
          tech: ['Python', 'FastAPI', 'Epic EHR', 'immudb', 'AI Care Gap Finder', 'formsflow.ai'],
          statusBadge: 'Completed',
          bullets: [
            'Independently developed and completed a Proof of Concept (POC) integrating formsflow.ai with the Epic Electronic Health Record (EHR) system.',
            'Integrated immudb for immutable audit logging and cryptographic verification across healthcare form transactions.',
            'Implemented healthcare modules including EPIC Consent, Patient Registration, PHQ9-GAD7 mental health screening, and AI-driven Care Gap Finder.',
            'Engineered API-based healthcare data exchange workflows between formsflow.ai and Epic EHR using Python and FastAPI.'
          ]
        }
      ]
    },
    {
      roleTitle: 'Software Engineer I',
      period: 'Mar 2023 – Jan 2025',
      company: 'AOT Technologies',
      location: 'Kerala, India',
      projects: [
        {
          name: 'BC GolfSafaris — Travel and Tour Management Platform',
          tech: ['Angular', 'React', 'Node.js', 'FastAPI', 'REST APIs', 'MJML'],
          bullets: [
            'Developed and enhanced responsive frontend features using Angular and React, focusing on usability, performance, and maintainability.',
            'Contributed to backend services using Node.js and FastAPI and integrated frontend applications with REST APIs.',
            'Created dynamic email templates using MJML for automated customer communication.',
            'Collaborated with stakeholders to understand business requirements and translate them into technical solutions, working within an Agile/Scrum development process.'
          ]
        },
        {
          name: 'formsflow.ai — Form Automation and Workflow Platform',
          tech: ['React', 'Form.io', 'Camunda', 'Jira', 'Agile'],
          bullets: [
            'Developed and enhanced dynamic form and workflow features using React, Form.io, and Camunda.',
            'Implemented business workflows supporting multi-level approvals and complex workflow automation scenarios.',
            'Improved application usability and performance through feature enhancements, optimization, and code refactoring.',
            'Collaborated with the development team to troubleshoot issues and deliver production-ready features, tracking work items in Jira.'
          ]
        }
      ]
    },
    {
      roleTitle: 'Junior Software Engineer',
      period: 'Aug 2022 – Mar 2023',
      company: 'AOT Technologies',
      location: 'Kerala, India',
      projects: [
        {
          name: 'formsflow.ai — Form Automation and Workflow Platform',
          tech: ['React', 'Form.io', 'Camunda', 'Figma'],
          bullets: [
            'Developed frontend features using React and Form.io for dynamic form-based applications, referencing Figma designs for UI implementation.',
            'Worked with Camunda workflow configurations to support business process automation.',
            'Fixed application defects and implemented UI enhancements while following established development practices.'
          ]
        }
      ]
    }
  ]

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Career Journey</span>
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">
            4 years of continuous impact at AOT Technologies, progressing from Junior Engineer to Software Engineer II.
          </p>
        </div>

        <div className="timeline">
          {roles.map((role, roleIdx) => (
            <motion.div
              key={roleIdx}
              className="timeline-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: roleIdx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="timeline-marker">
                <Briefcase size={20} />
              </div>

              <div className="timeline-content">
                <div className="role-header">
                  <div>
                    <div className="role-title-row">
                      <h3 className="role-title">{role.roleTitle}</h3>
                      {role.badge && <span className="current-badge">{role.badge}</span>}
                    </div>
                    <div className="role-meta">
                      <span className="company-name">{role.company}</span>
                      <span className="meta-separator">•</span>
                      <span className="role-period">
                        <Calendar size={14} />
                        {role.period}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="role-projects">
                  {role.projects.map((proj, projIdx) => (
                    <div key={projIdx} className="project-detail-card">
                      <div className="project-header">
                        <div className="project-title-group">
                          <FolderGit2 size={18} className="project-icon" />
                          <h4 className="project-name">{proj.name}</h4>
                          {proj.statusBadge && (
                            <span className="status-pill">
                              <Sparkles size={12} />
                              {proj.statusBadge}
                            </span>
                          )}
                        </div>

                        <div className="project-tech-tags">
                          {proj.tech.map((t, tIdx) => (
                            <span key={tIdx} className="mini-tag">{t}</span>
                          ))}
                        </div>
                      </div>

                      <ul className="project-bullets">
                        {proj.bullets.map((bullet, bIdx) => (
                          <li key={bIdx}>
                            <CheckCircle2 size={16} className="bullet-check" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
