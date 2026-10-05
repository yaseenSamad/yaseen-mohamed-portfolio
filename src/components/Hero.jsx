import { motion } from 'framer-motion'
import { FileText, Send, Sparkles, MapPin, Briefcase } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'
import './Hero.css'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1.0] },
    },
  }

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="hero-section">
      <div className="hero-background">
        <div className="hero-glow glow-1"></div>
        <div className="hero-glow glow-2"></div>
        <div className="hero-grid-pattern"></div>
      </div>

      <div className="container hero-container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-badge" variants={itemVariants}>
            <Sparkles size={16} className="badge-sparkle" />
            <span>Available for Full-Stack & Engineering Roles</span>
          </motion.div>

          <motion.h1 className="hero-heading" variants={itemVariants}>
            Hi, I'm <span className="gradient-text">Mohamed Yaseen PA</span>
          </motion.h1>

          <motion.h2 className="hero-subheading" variants={itemVariants}>
            Full Stack Developer | Software Engineer
          </motion.h2>

          <motion.p className="hero-description" variants={itemVariants}>
            Architecting scalable web applications, AI agent orchestrations, and cloud-native services with 
            <strong className="hero-highlight"> 4 years of hands-on production expertise</strong> across healthcare, travel, workflow automation, and enterprise platforms.
          </motion.p>

          <motion.div className="hero-meta" variants={itemVariants}>
            <div className="meta-item">
              <MapPin size={16} />
              <span>Kerala, India</span>
            </div>
            <div className="meta-item">
              <Briefcase size={16} />
              <span>Software Engineer II @ AOT Technologies</span>
            </div>
          </motion.div>

          <motion.div className="hero-actions" variants={itemVariants}>
            <a
              href={`${import.meta.env.BASE_URL}Mohamed_Yaseen_Resume.pdf`}
              download="Mohamed_Yaseen_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <FileText size={18} />
              <span>Download Resume</span>
            </a>

            <button
              onClick={() => scrollToSection('contact')}
              className="btn btn-secondary"
            >
              <Send size={18} />
              <span>Contact Me</span>
            </button>

            <div className="social-links">
              <a
                href="https://github.com/yaseenSamad"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="GitHub Profile"
                title="GitHub Profile"
              >
                <GithubIcon size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/yaseen-mohamed-a28414254/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="LinkedIn Profile"
                title="LinkedIn Profile"
              >
                <LinkedinIcon size={20} />
              </a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image-wrapper"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="image-card">
            <div className="image-ring"></div>
            <img
              src={`${import.meta.env.BASE_URL}mohamed_yaseen.png`}
              alt="Mohamed Yaseen PA"
              className="profile-img"
            />
            <div className="experience-pill">
              <span className="pill-number">4+</span>
              <span className="pill-label">Years Exp.</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
