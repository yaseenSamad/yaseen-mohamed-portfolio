import './Hero.css'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-image-wrapper">
          <img
            src="/mohamed_yaseen.png"
            alt="Mohamed Yaseen PA"
            className="hero-image"
          />
        </div>
        <h1 className="hero-name">Mohamed Yaseen PA</h1>
        <p className="hero-title">Full Stack Developer</p>
        <div className="hero-links">
          <a
            href="https://www.linkedin.com/in/mohamed-yaseen-pa"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-link"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/mohamed-yaseen-pa"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-link"
          >
            GitHub
          </a>
        </div>
        <button
          className="hero-cta"
          onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
        >
          Get In Touch
        </button>
      </div>
    </section>
  )
}

export default Hero
