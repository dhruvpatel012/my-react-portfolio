// Polymorphic button supporting anchor tags, click handlers, directional sweep animations, and hard shadows.
export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  ...props
}) {
  const baseStyles =
    'btn-sweep inline-flex items-center justify-center gap-2 font-bold transition-all duration-200 rounded-full text-sm sm:text-base border-[2.5px] border-[var(--border-ink)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed select-none'

  const variants = {
    primary:
      'bg-[var(--accent)] text-white shadow-[4px_4px_0_var(--border-ink)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_var(--border-ink)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0_var(--border-ink)] px-6 py-3',
    secondary:
      'btn-sweep-outline bg-[var(--bg-card)] text-[var(--ink)] shadow-[4px_4px_0_var(--border-ink)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_var(--border-ink)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0_var(--border-ink)] px-6 py-3',
    outline:
      'btn-sweep-outline bg-[var(--bg-card)] text-[var(--ink)] shadow-[4px_4px_0_var(--border-ink)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_var(--border-ink)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0_var(--border-ink)] px-6 py-3',
    ghost:
      'text-[var(--ink-muted)] hover:text-[var(--ink)] hover:bg-[var(--bg-card)] px-4 py-2 rounded-full border-none shadow-none',
  }

  const classes = `${baseStyles} ${variants[variant] || variants.primary} ${className}`

  // Render as anchor link when href is provided, otherwise as standard button element.
  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  )
}
