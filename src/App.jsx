import { useState, useEffect } from 'react'
import GlobalBackground from './components/GlobalBackground'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Journey from './sections/Journey'
import About from './sections/About'
import Contact from './sections/Contact'
import Footer from './components/Footer'

export default function App() {
  // Restore user's preferred theme from previous visits, defaulting to light.
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('portfolio-theme')
    return saved ? saved : 'light'
  })

  // Synchronize the root HTML class and persist theme choice whenever it changes.
  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'))
  }

  return (
    <div className="relative min-h-screen text-[var(--ink)] selection:bg-[var(--accent)] selection:text-white transition-colors duration-300 flex flex-col">
      {/* Fixed global background layer sits behind all sections */}
      <GlobalBackground />

      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      
      {/* Main content container with flex-grow keeps footer pinned to bottom */}
      <main className="relative z-10 grow">
        <Hero />
        <Projects />
        <Skills />
        <Journey />
        <About />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
