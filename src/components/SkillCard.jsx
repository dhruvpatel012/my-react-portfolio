// Compact skill card with official brand icon color and alternating spring wiggle on hover.
export default function SkillCard({ skill, index = 0 }) {
  const Icon = skill.icon
  const isEven = index % 2 === 0
  const wiggleClass = isEven ? 'skill-card-wiggle-left' : 'skill-card-wiggle-right'

  return (
    <div
      className={`group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-2xl bg-[var(--bg-card)] border-2 sm:border-[2.5px] border-[var(--border-ink)] shadow-[3px_3px_0_var(--border-ink)] sm:shadow-[4px_4px_0_var(--border-ink)] ${wiggleClass} select-none cursor-pointer`}
    >
      <div
        className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-[var(--bg-card-inner)] border-2 border-[var(--border-ink)] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-200 shadow-xs"
      >
        {Icon && (
          <Icon
            className="w-5 h-5 sm:w-6 sm:h-6 transition-transform"
            style={{
              color: skill.isMonochrome ? 'var(--ink)' : skill.brandColor
            }}
          />
        )}
      </div>

      <span className="font-extrabold text-xs sm:text-base text-[var(--ink)] truncate font-display">
        {skill.name}
      </span>
    </div>
  )
}
