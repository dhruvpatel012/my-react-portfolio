// Color themes cycled across About section fact tiles using the 2-accent palette.
const tileThemes = [
  { bg: 'bg-[var(--accent)]/15', text: 'text-[var(--accent)]' },
  { bg: 'bg-[var(--accent-2)]/15', text: 'text-[var(--accent-2)]' },
  { bg: 'bg-[var(--accent)]/15', text: 'text-[var(--accent)]' },
  { bg: 'bg-[var(--accent-2)]/15', text: 'text-[var(--accent-2)]' },
]

// Modular fact tile component used in the 2x2 grid of the About section.
export default function InfoCard({ icon: Icon, title, description, index = 0 }) {
  const theme = tileThemes[index % tileThemes.length]

  return (
    <div
      className="p-5 sm:p-6 rounded-2xl bg-[var(--bg-card)] border-[2.5px] border-[var(--border-ink)] shadow-[4px_4px_0_var(--shadow-hard)] hover:shadow-[6px_6px_0_var(--shadow-hard)] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-150 flex flex-col justify-between select-none"
    >
      <div
        className={`w-11 h-11 rounded-xl ${theme.bg} ${theme.text} border-2 border-[var(--border-ink)] flex items-center justify-center shrink-0 mb-4 shadow-xs`}
      >
        {Icon && <Icon className="w-5 h-5" />}
      </div>
      <div>
        <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-[var(--ink-muted)] mb-1">
          {title}
        </p>
        <p className="text-sm sm:text-base font-extrabold text-[var(--ink)] font-display leading-snug">
          {description}
        </p>
      </div>
    </div>
  )
}
