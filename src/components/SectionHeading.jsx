// Consistent section heading with tilted sticker badge, bold title, and highlighted accent keywords.
export default function SectionHeading({
  tag,
  title,
  highlight,
  subtitle,
  className = '',
}) {
  return (
    <div className={`space-y-2.5 ${className}`}>
      {tag && (
        <div className="inline-block transform -rotate-1 hover:rotate-0 transition-transform">
          <span className="px-3.5 py-1 text-xs font-bold font-mono tracking-wider bg-[var(--accent)] text-white rounded-full border-2 border-[var(--border-ink)] shadow-[2px_2px_0_var(--border-ink)] uppercase inline-block">
            {tag}
          </span>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--ink)] leading-[1.15] font-display">
        {title}{' '}
        {highlight && (
          <span className="relative inline-block text-[var(--accent)]">
            {highlight}
          </span>
        )}
      </h2>
      {subtitle && (
        <p className="text-sm sm:text-base text-[var(--ink-muted)] max-w-2xl leading-relaxed font-medium">
          {subtitle}
        </p>
      )}
    </div>
  )
}
