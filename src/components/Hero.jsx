import { motion } from 'framer-motion'
import './Hero.css'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section id="home" className="hero">
      <motion.div
        className="hero-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-image-wrapper" variants={imageVariants}>
          <img
            src="/mohamed_yaseen.png"
            alt="Mohamed Yaseen PA"
            className="hero-image"
          />
        </motion.div>
        <motion.h1 className="hero-name" variants={itemVariants}>
          Mohamed Yaseen PA
        </motion.h1>
        <motion.p className="hero-title" variants={itemVariants}>
          Full Stack Developer
        </motion.p>
        <motion.div className="hero-links" variants={itemVariants}>
          <a
            href="https://www.linkedin.com/in/yaseen-mohamed-a28414254"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-link"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/yaseenSamad"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-link"
          >
            GitHub
          </a>
        </motion.div>
        <motion.button
          className="hero-cta"
          variants={itemVariants}
          onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get In Touch
        </motion.button>
      </motion.div>
    </section>
  )
}

export default Hero
