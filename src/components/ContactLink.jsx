// Direct contact pill linking to email, GitHub, or LinkedIn with brand-colored icons.
export default function ContactLink({
  icon: Icon,
  label,
  value,
  href,
  iconStyle = '',
  iconColor = '',
  isExternal = true,
}) {
  return (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noreferrer' : undefined}
      className="group flex items-center gap-4 p-4 rounded-2xl bg-[var(--bg-card)] border-[2.5px] border-[var(--border-ink)] shadow-[4px_4px_0_var(--border-ink)] hover:shadow-[6px_6px_0_var(--border-ink)] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-150"
    >
      <div
        className={`w-11 h-11 rounded-xl bg-[var(--bg-card-inner)] border-2 border-[var(--border-ink)] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform ${iconStyle}`}
      >
        {Icon && <Icon className="w-5 h-5" style={iconColor ? { color: iconColor } : {}} />}
      </div>
      <div className="min-w-0">
        <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-[var(--ink-muted)]">
          {label}
        </p>
        <p className="text-sm sm:text-base font-extrabold text-[var(--ink)] group-hover:text-[var(--accent)] font-display transition-colors truncate">
          {value}
        </p>
      </div>
    </a>
  )
}
