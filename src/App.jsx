import { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import TechnicalSkills from './components/TechnicalSkills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import ProfessionalDevelopment from './components/ProfessionalDevelopment'
import Contact from './components/Contact'
import './App.css'

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark'
  })
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]')
      const scrollPosition = window.scrollY + 140

      sections.forEach(section => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app-main">
      <Navigation
        theme={theme}
        toggleTheme={toggleTheme}
        activeSection={activeSection}
      />
      <main>
        <Hero />
        <About />
        <TechnicalSkills />
        <Experience />
        <Projects />
        <Education />
        <ProfessionalDevelopment />
        <Contact />
      </main>
    </div>
  )
}

export default App
