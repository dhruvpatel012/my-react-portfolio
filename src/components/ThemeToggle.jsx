// Accessible theme switcher button with animated sun/moon icon states.
export default function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className="p-2.5 rounded-xl bg-[var(--bg-card)] border-[2.5px] border-[var(--border-ink)] shadow-[3px_3px_0_var(--border-ink)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0_var(--border-ink)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0_var(--border-ink)] text-[var(--ink)] transition-all duration-150 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
    >
      {isDark ? (
        <svg
          className="w-5 h-5 text-[var(--accent)] hover:rotate-45 transition-transform duration-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ) : (
        <svg
          className="w-5 h-5 text-[var(--ink)] hover:-rotate-12 transition-transform duration-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      )}
    </button>
  )
}
