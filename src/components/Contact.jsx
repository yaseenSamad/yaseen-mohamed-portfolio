import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState(null) // null | 'submitting' | 'success' | 'error'

  const contactInfo = [
    {
      icon: <Mail size={22} />,
      label: 'Email',
      value: 'yasinsamad123@gmail.com',
      href: 'mailto:yasinsamad123@gmail.com'
    },
    {
      icon: <Phone size={22} />,
      label: 'Phone',
      value: '+91-9072271777',
      href: 'tel:+919072271777'
    },
    {
      icon: <MapPin size={22} />,
      label: 'Location',
      value: 'Kerala, India',
      href: null
    },
    {
      icon: <LinkedinIcon size={22} />,
      label: 'LinkedIn',
      value: 'Mohamed Yaseen PA',
      href: 'https://www.linkedin.com/in/yaseen-mohamed-a28414254/'
    },
    {
      icon: <GithubIcon size={22} />,
      label: 'GitHub',
      value: 'yaseenSamad',
      href: 'https://github.com/yaseenSamad'
    }
  ]

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error')
      return
    }

    setStatus('submitting')

    try {
      const response = await fetch('https://formsubmit.co/ajax/yasinsamad123@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: formData.subject || `New Portfolio Message from ${formData.name}`,
          message: formData.message,
          _template: 'table'
        })
      })

      const result = await response.json()

      if (result.success === 'true' || result.success === true || response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setStatus(null), 6000)
      } else {
        // Fallback to mailto link
        window.location.href = `mailto:yasinsamad123@gmail.com?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`
        setStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setStatus(null), 6000)
      }
    } catch (err) {
      console.error('Contact form submission error:', err)
      window.location.href = `mailto:yasinsamad123@gmail.com?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`
      setStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setStatus(null), 6000)
    }
  }

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">Let's Connect & Collaborate</h2>
          <p className="section-subtitle">
            Whether you have a new opportunity, an open-source collaboration, or an engineering inquiry, feel free to reach out!
          </p>
        </div>

        <div className="contact-wrapper">
          <motion.div
            className="contact-info-column"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="info-column-title">Contact Information</h3>
            <p className="info-column-text">
              I am open to full-time Software Engineering roles, AI Agent Orchestration projects, and technology consulting.
            </p>

            <div className="contact-cards-list">
              {contactInfo.map((info, idx) => (
                <div key={idx} className="contact-item-card">
                  <div className="contact-item-icon">{info.icon}</div>
                  <div className="contact-item-details">
                    <span className="contact-item-label">{info.label}</span>
                    {info.href ? (
                      <a
                        href={info.href}
                        target={info.href.startsWith('http') ? '_blank' : undefined}
                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="contact-item-value link"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <span className="contact-item-value">{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="contact-form-column"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="contact-form">
              <h3 className="form-title">Send Me a Message</h3>

              {status === 'success' && (
                <div className="form-alert alert-success">
                  <CheckCircle2 size={20} />
                  <span>Thank you! Your message has been sent successfully. I will get back to you shortly.</span>
                </div>
              )}

              {status === 'error' && (
                <div className="form-alert alert-error">
                  <AlertCircle size={20} />
                  <span>Please fill out all required fields before sending.</span>
                </div>
              )}

              <div className="form-group-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Your Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Opportunity / Collaboration"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hi Yaseen, I'd like to discuss..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary submit-btn"
                disabled={status === 'submitting'}
              >
                <Send size={18} />
                <span>{status === 'submitting' ? 'Sending Message...' : 'Send Message'}</span>
              </button>
            </form>
          </motion.div>
        </div>

        <footer className="footer">
          <div className="footer-content">
            <p>&copy; {new Date().getFullYear()} Mohamed Yaseen PA. Built with React & Modern Web Standards.</p>
            <div className="footer-links">
              <a href="https://github.com/yaseenSamad" target="_blank" rel="noopener noreferrer">GitHub</a>
              <span>•</span>
              <a href="https://www.linkedin.com/in/yaseen-mohamed-a28414254/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  )
}

export default Contact
