import { personalInfo } from '../data/personal'
import { LuArrowUp, LuGithub, LuLinkedin } from 'react-icons/lu'

// Site-wide footer with brand signature, social links, and smooth scroll-to-top control.
export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer className="relative z-10 w-full border-t-2 border-[var(--border-ink)] bg-[var(--bg)]/95 backdrop-blur-sm transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-4 text-center sm:text-left">
          
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <a
              href="#home"
              className="flex items-center group focus:outline-none focus:ring-2 focus:ring-[var(--accent)] rounded-lg py-1"
              aria-label="Back to top"
            >
              <span className="font-extrabold text-sm sm:text-base text-[var(--ink)] tracking-tight font-display group-hover:text-[var(--accent)] transition-colors">
                &lt;Dhruv /&gt;
              </span>
            </a>

            {/* Quick social profile links with distinct brand hover colors */}
            <div className="flex items-center gap-2 text-[var(--ink)] ml-0 sm:ml-2">
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noreferrer"
                className="p-1.5 rounded-lg bg-[var(--bg-card)] border-2 border-[var(--border-ink)] shadow-[2px_2px_0_var(--border-ink)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0_var(--border-ink)] transition-all"
                aria-label="GitHub Profile"
              >
                <LuGithub className="w-4 h-4 text-[var(--ink)]" />
              </a>
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-1.5 rounded-lg bg-[var(--bg-card)] border-2 border-[var(--border-ink)] shadow-[2px_2px_0_var(--border-ink)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0_var(--border-ink)] transition-all"
                aria-label="LinkedIn Profile"
              >
                <LuLinkedin className="w-4 h-4 text-[#0A66C2]" />
              </a>
            </div>
          </div>

          <p className="text-xs sm:text-sm font-bold text-[var(--ink-muted)] order-last sm:order-none">
            © {new Date().getFullYear()} {personalInfo.name}. Built with React & Tailwind CSS.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="btn-sweep btn-sweep-outline group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--bg-card)] border-2 border-[var(--border-ink)] shadow-[3px_3px_0_var(--border-ink)] text-[var(--ink)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0_var(--border-ink)] transition-all duration-150 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[var(--accent)] select-none"
            aria-label="Scroll back to top"
          >
            <LuArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            <span className="text-xs font-bold font-display">Back to top</span>
          </button>

        </div>
      </div>
    </footer>
  )
}
