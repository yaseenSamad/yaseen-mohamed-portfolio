import { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Summary from './components/Summary'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import TechnicalSkills from './components/TechnicalSkills'
import CoreCompetencies from './components/CoreCompetencies'
import Contact from './components/Contact'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]')
      const scrollPosition = window.scrollY + 100

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
    <div className="app">
      <Navigation activeSection={activeSection} />
      <Hero />
      <Summary />
      <Experience />
      <Education />
      <Projects />
      <TechnicalSkills />
      <CoreCompetencies />
      <Contact />
    </div>
  )
}

export default App
