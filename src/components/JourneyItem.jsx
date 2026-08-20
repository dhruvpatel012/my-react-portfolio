// Renders a timeline milestone card in horizontal progression on desktop and compact vertical rail on mobile.
export default function JourneyItem({ item, index = 0, isLast }) {
  const Icon = item.icon

  return (
    <div className="relative flex flex-col h-full group">
      {/* Desktop layout: horizontal timeline node and card */}
      <div className="hidden lg:flex flex-col h-full relative">
        {/* Milestone step node with glowing ring for ongoing milestone */}
        <div className="flex items-center mb-6 relative">
          <div className="relative z-10">
            {item.isCurrent ? (
              <div className="relative flex items-center justify-center">
                <span className="absolute w-7 h-7 rounded-full bg-[var(--accent)] opacity-40 animate-ping" />
                <div className="w-5 h-5 rounded-full bg-[var(--accent)] border-2 border-[var(--border-ink)] shadow-[2px_2px_0_var(--border-ink)] flex items-center justify-center text-[10px] text-white font-bold">
                  {index + 1}
                </div>
              </div>
            ) : (
              <div className="w-5 h-5 rounded-full bg-[var(--bg-card)] border-2 border-[var(--border-ink)] shadow-[2px_2px_0_var(--border-ink)] flex items-center justify-center text-[10px] font-bold text-[var(--ink)]">
                {index + 1}
              </div>
            )}
          </div>

          {/* Progress rail connecting to the next milestone */}
          {!isLast && (
            <div className="grow h-[2.5px] bg-[var(--border-ink)] ml-2 mr-0" />
          )}
        </div>

        {/* Milestone content card */}
        <div
          className={`flex-1 flex flex-col justify-between p-5 rounded-2xl bg-[var(--bg-card)] border-[2.5px] border-[var(--border-ink)] shadow-[4px_4px_0_var(--shadow-hard)] hover:shadow-[6px_6px_0_var(--shadow-hard)] hover:-translate-y-1 transition-all duration-200 ${
            item.isCurrent ? 'ring-2 ring-[var(--accent)]/30' : ''
          }`}
        >
          <div>
            <div className="flex items-center justify-between gap-2 mb-3">
              <span
                className={`text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full border border-[var(--border-ink)] ${
                  item.isCurrent
                    ? 'bg-[var(--accent)] text-white'
                    : 'bg-[var(--bg-card-inner)] text-[var(--ink)]'
                }`}
              >
                {item.period || item.year}
              </span>
              {Icon && <Icon className="w-4 h-4 text-[var(--accent)] shrink-0" />}
            </div>

            {item.subtitle && (
              <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-[var(--ink-muted)] mb-1">
                {item.subtitle}
              </p>
            )}

            <h3 className="text-base font-extrabold text-[var(--ink)] font-display leading-snug mb-2">
              {item.title}
            </h3>

            <p className="text-xs text-[var(--ink-muted)] leading-relaxed font-medium">
              {item.description}
            </p>
          </div>
        </div>
      </div>

      {/* Mobile and tablet layout: compact vertical rail */}
      <div className="lg:hidden flex gap-4 relative">
        <div className="flex flex-col items-center shrink-0">
          <div className="relative mt-1 z-10 flex items-center justify-center">
            {item.isCurrent ? (
              <div className="relative flex items-center justify-center">
                <span className="absolute w-5 h-5 rounded-full bg-[var(--accent)] opacity-40 animate-ping" />
                <div className="w-3.5 h-3.5 rounded-full bg-[var(--accent)] border-2 border-[var(--border-ink)]" />
              </div>
            ) : (
              <div className="w-3.5 h-3.5 rounded-full bg-[var(--bg-card)] border-2 border-[var(--border-ink)]" />
            )}
          </div>
          {!isLast && <div className="w-[2px] grow bg-[var(--border-ink)] my-1" />}
        </div>

        <div className={`pb-5 ${isLast ? 'pb-1' : ''} w-full`}>
          <div className="p-4 sm:p-5 rounded-2xl bg-[var(--bg-card)] border-[2.5px] border-[var(--border-ink)] shadow-[3px_3px_0_var(--shadow-hard)] space-y-1.5">
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <span
                className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full border border-[var(--border-ink)] ${
                  item.isCurrent
                    ? 'bg-[var(--accent)] text-white'
                    : 'bg-[var(--bg-card-inner)] text-[var(--ink)]'
                }`}
              >
                {item.period || item.year}
              </span>
              {item.subtitle && (
                <span className="text-[11px] text-[var(--ink-muted)] font-bold">
                  {item.subtitle}
                </span>
              )}
            </div>

            <div className="flex items-center gap-2 pt-0.5">
              {Icon && <Icon className="w-4 h-4 text-[var(--accent)] shrink-0" />}
              <h3 className="text-sm sm:text-base font-extrabold text-[var(--ink)] font-display leading-snug">
                {item.title}
              </h3>
            </div>

            <p className="text-xs text-[var(--ink-muted)] leading-relaxed font-medium">
              {item.description}
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}
