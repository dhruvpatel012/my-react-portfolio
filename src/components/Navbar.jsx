import { useState, useEffect } from 'react'
import ThemeToggle from './ThemeToggle'
import { navLinks } from '../data/personal'

// Sticky header featuring active scroll section tracking and mobile drawer navigation.
export default function Navbar({ theme, onToggleTheme }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('Home')

  // Observe all sections on page scroll and update the active navigation pill.
  useEffect(() => {
    const sections = navLinks.map((link) => {
      const id = link.href.replace('#', '')
      return document.getElementById(id)
    }).filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const found = navLinks.find((link) => link.href === `#${entry.target.id}`)
            if (found) {
              setActiveSection(found.label)
            }
          }
        })
      },
      { rootMargin: '-25% 0px -45% 0px', threshold: 0.1 }
    )

    sections.forEach((sec) => observer.observe(sec))

    return () => {
      sections.forEach((sec) => observer.unobserve(sec))
    }
  }, [])

  // Close the mobile drawer immediately when a navigation destination is tapped.
  const handleNavClick = (label) => {
    setActiveSection(label)
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-[var(--bg)]/90 backdrop-blur-md border-b-2 border-[var(--border-ink)] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          
          <a
            href="#home"
            className="flex items-center group focus:outline-none focus:ring-2 focus:ring-[var(--accent)] rounded-lg py-1"
          >
            <span className="font-extrabold text-base sm:text-lg text-[var(--ink)] tracking-tight font-display group-hover:text-[var(--accent)] transition-colors">
              &lt;Dhruv /&gt;
            </span>
          </a>

          {/* Desktop navigation pill list */}
          <nav className="hidden md:flex items-center gap-3 lg:gap-4">
            {navLinks.map((link) => {
              const isActive = activeSection === link.label
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => handleNavClick(link.label)}
                  className={`px-4 py-1 rounded-full text-xs sm:text-sm font-bold transition-all duration-150 ${
                    isActive
                      ? 'bg-[var(--accent)] text-white border-2 border-[var(--border-ink)] shadow-[2px_2px_0_var(--border-ink)]'
                      : 'text-[var(--ink)] hover:text-[var(--accent)]'
                  }`}
                >
                  {link.label}
                </a>
              )
            })}
          </nav>

          <div className="flex items-center gap-2.5">
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />

            {/* Mobile hamburger menu toggle */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-[var(--bg-card)] border-2 border-[var(--border-ink)] shadow-[2px_2px_0_var(--border-ink)] text-[var(--ink)] hover:text-[var(--accent)] transition-all focus:outline-none focus:ring-2 focus:ring-[var(--accent)] cursor-pointer"
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu drawer */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-3 border-t-2 border-[var(--border-ink)] space-y-1 bg-[var(--bg-card)] -mx-4 px-6 border-b-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.label
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => handleNavClick(link.label)}
                  className={`block px-3.5 py-2.5 rounded-xl text-sm font-bold transition-all ${
                    isActive
                      ? 'bg-[var(--accent)] text-white border-2 border-[var(--border-ink)] shadow-[2px_2px_0_var(--border-ink)]'
                      : 'text-[var(--ink)] hover:bg-[var(--bg)]'
                  }`}
                >
                  {link.label}
                </a>
              )
            })}
          </nav>
        )}
      </div>
    </header>
  )
}
