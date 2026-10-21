import { useState, useMemo } from 'react'
import SectionHeading from '../components/SectionHeading'
import { allSkills, filterCategories, programmingLanguages } from '../data/skills'

// Technology & Skills section with compact category filters and programming languages row
export default function Skills() {
  const [activeFilter, setActiveFilter] = useState('all')

  // Filter skills based on selected category immediately without page reload
  const filteredSkills = useMemo(() => {
    if (activeFilter === 'all') {
      return allSkills
    }
    return allSkills.filter((skill) => skill.category === activeFilter)
  }, [activeFilter])

  return (
    <section id="skills" className="py-14 sm:py-20 border-t-2 border-[var(--border-ink)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with accurate dynamic skill count */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-10">
          <SectionHeading
            tag="MY TECH STACK"
            title="Technologies I"
            highlight="use."
            subtitle="The technologies, tools, and computer science fundamentals I work with."
          />
          <div className="self-start md:self-auto shrink-0">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-[var(--bg-card)] text-[var(--ink)] border-2 border-[var(--border-ink)] shadow-[2px_2px_0_var(--border-ink)]">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
              <span>{allSkills.length} Total Skills</span>
            </span>
          </div>
        </div>

        {/* Programming Languages Row: compact chip bar always visible across filters */}
        <div className="mb-6 sm:mb-8 p-3 sm:p-4 rounded-2xl bg-[var(--bg-card)] border-2 border-[var(--border-ink)] shadow-[3px_3px_0_var(--shadow-hard)] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2 shrink-0">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)] shrink-0" />
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--ink)]">
              Programming Languages:
            </h3>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {programmingLanguages.map((lang) => {
              const Icon = lang.icon
              return (
                <div
                  key={lang.id}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-[var(--bg-card-inner)] border border-[var(--border-ink)] text-xs font-bold text-[var(--ink)] shadow-[1px_1px_0_var(--border-ink)] select-none hover:-translate-y-0.5 transition-transform"
                >
                  {Icon && (
                    <Icon
                      className="w-3.5 h-3.5 shrink-0"
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

        {/* Compact Category Filters (Pill Buttons) */}
        <div
          role="tablist"
          aria-label="Skill categories"
          className="flex flex-wrap items-center gap-2 sm:gap-2.5 mb-6 sm:mb-8"
        >
          {filterCategories.map((filter) => {
            const isActive = activeFilter === filter.id
            const count =
              filter.id === 'all'
                ? allSkills.length
                : allSkills.filter((s) => s.category === filter.id).length

            return (
              <button
                key={filter.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveFilter(filter.id)}
                className={`inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold font-display border-2 border-[var(--border-ink)] cursor-pointer select-none transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] ${
                  isActive
                    ? 'bg-[var(--accent)] text-white shadow-[3px_3px_0_var(--border-ink)] -translate-y-0.5'
                    : 'bg-[var(--bg-card)] text-[var(--ink)] shadow-[2px_2px_0_var(--border-ink)] hover:shadow-[3px_3px_0_var(--border-ink)] hover:-translate-y-0.5'
                }`}
              >
                <span>{filter.label}</span>
                <span
                  className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full border ${
                    isActive
                      ? 'bg-white/20 text-white border-white/30'
                      : 'bg-[var(--bg-card-inner)] text-[var(--ink-muted)] border-[var(--border-ink)]/30'
                  }`}
                >
                  {count}
                </span>
              </button>
            )
          })}
        </div>

        {/* Compact Technology Grid: 2 cols on mobile, 3–4 cols on tablet, 5–6 cols on desktop */}
        <div
          key={activeFilter}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2.5 sm:gap-3 transition-opacity duration-200"
        >
          {filteredSkills.map((skill) => {
            const SkillIcon = skill.icon
            return (
              <div
                key={skill.name}
                className="group flex items-center gap-2 sm:gap-2.5 p-2 sm:p-2.5 rounded-xl bg-[var(--bg-card)] border-2 border-[var(--border-ink)] shadow-[2px_2px_0_var(--border-ink)] hover:shadow-[3px_3px_0_var(--border-ink)] hover:-translate-y-0.5 transition-all duration-150 select-none min-w-0 h-auto"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[var(--bg-card-inner)] border border-[var(--border-ink)] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform self-center">
                  {SkillIcon && (
                    <SkillIcon
                      className="w-4 h-4 transition-transform shrink-0"
                      style={{
                        color: skill.isMonochrome ? 'var(--ink)' : skill.brandColor,
                      }}
                      aria-hidden="true"
                    />
                  )}
                </div>
                <span className="font-bold text-xs sm:text-sm text-[var(--ink)] leading-snug break-words [overflow-wrap:anywhere] min-w-0">
                  {skill.name}
                </span>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
