import SectionHeading from '../components/SectionHeading'
import { skillGroups, programmingLanguages } from '../data/skills'

// Toolkit section displaying four organized groups and a compact programming languages row
export default function Skills() {
  return (
    <section id="skills" className="py-14 sm:py-20 border-t-2 border-[var(--border-ink)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-8 sm:mb-10">
          <SectionHeading
            tag="My Toolkit"
            title="Technologies &"
            highlight="expertise"
            subtitle="Frontend, backend, developer tools, and computer engineering fundamentals."
          />
        </div>

        {/* Compact Programming Languages Row */}
        <div className="mb-8 sm:mb-10 p-4 sm:p-5 rounded-2xl bg-[var(--bg-card)] border-2 sm:border-[2.5px] border-[var(--border-ink)] shadow-[4px_4px_0_var(--shadow-hard)] flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent)]" />
            <h3 className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-[var(--ink)]">
              Programming Languages
            </h3>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {programmingLanguages.map((lang) => {
              const Icon = lang.icon
              return (
                <div
                  key={lang.id}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[var(--bg-card-inner)] border-2 border-[var(--border-ink)] shadow-[2px_2px_0_var(--border-ink)] hover:-translate-y-0.5 hover:shadow-[3px_3px_0_var(--border-ink)] transition-all text-xs font-bold font-display text-[var(--ink)] select-none"
                >
                  {Icon && (
                    <Icon
                      className="w-4 h-4 shrink-0"
                      style={{ color: lang.brandColor || 'var(--ink)' }}
                      aria-hidden="true"
                    />
                  )}
                  <span>{lang.name}</span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Four distinct groups matching portfolio_update_spec.md */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
          {skillGroups.map((group) => {
            const GroupIcon = group.icon
            return (
              <div
                key={group.id}
                className="flex flex-col h-full rounded-2xl bg-[var(--bg-card)] border-[2.5px] border-[var(--border-ink)] shadow-[5px_5px_0_var(--shadow-hard)] overflow-hidden"
              >
                {/* Group card header */}
                <div className="p-4 sm:p-5 bg-[var(--bg-card-inner)] border-b-2 border-[var(--border-ink)] flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[var(--bg-card)] border-2 border-[var(--border-ink)] flex items-center justify-center shadow-xs text-[var(--accent)]">
                      {GroupIcon && <GroupIcon className="w-5 h-5" />}
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-extrabold text-[var(--ink)] font-display leading-tight">
                        {group.title}
                      </h3>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-[var(--accent)] text-white border border-[var(--border-ink)]">
                    {group.skills.length} skills
                  </span>
                </div>

                {/* Skills list within group */}
                <div className="p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                  {group.skills.map((skill, sIdx) => {
                    const SkillIcon = skill.icon
                    const isEven = sIdx % 2 === 0
                    const wiggle = isEven ? 'hover:rotate-1' : 'hover:-rotate-1'
                    return (
                      <div
                        key={skill.name}
                        className={`group flex items-center gap-3 p-2.5 rounded-xl bg-[var(--bg-card-inner)] border-2 border-[var(--border-ink)] shadow-[2px_2px_0_var(--border-ink)] hover:shadow-[3px_3px_0_var(--border-ink)] hover:-translate-y-0.5 ${wiggle} transition-all duration-150 select-none`}
                      >
                        <div className="w-8 h-8 rounded-lg bg-[var(--bg-card)] border border-[var(--border-ink)] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                          {SkillIcon && (
                            <SkillIcon
                              className="w-4 h-4 transition-transform"
                              style={{
                                color: skill.isMonochrome ? 'var(--ink)' : skill.brandColor
                              }}
                              aria-hidden="true"
                            />
                          )}
                        </div>
                        <span className="font-bold text-xs sm:text-sm text-[var(--ink)] leading-snug">
                          {skill.name}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
