import { LuExternalLink, LuGithub } from 'react-icons/lu'

// Reusable neo-brutalist project card featuring browser window header, tech tags, and external action links.
export default function ProjectCard({ project, className = '' }) {
  const Icon = project.icon

  return (
    <div
      className={`group flex flex-col h-full bg-[var(--bg-card)] border-[2.5px] border-[var(--border-ink)] rounded-2xl overflow-hidden shadow-[5px_5px_0_var(--shadow-hard)] hover:shadow-[8px_8px_0_var(--shadow-hard)] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-200 ${className}`}
    >
      {/* Decorative window frame header with colorful control dots */}
      <div className="p-4 bg-[var(--bg-card-inner)] border-b-2 border-[var(--border-ink)] flex flex-col items-center justify-center relative">
        <div className="absolute top-3 left-3.5 flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#EF4444] border border-[var(--border-ink)]"></span>
          <span className="w-2 h-2 rounded-full bg-[#F59E0B] border border-[var(--border-ink)]"></span>
          <span className="w-2 h-2 rounded-full bg-[#10B981] border border-[var(--border-ink)]"></span>
        </div>

        <div className="w-14 h-14 rounded-2xl bg-[var(--bg-card)] flex items-center justify-center mt-3 border-2 border-[var(--border-ink)] shadow-xs group-hover:scale-105 transition-transform duration-200">
          {Icon && <Icon className="w-7 h-7 text-[var(--accent)]" />}
        </div>
      </div>

      <div className="flex-1 flex flex-col p-5 space-y-3">
        <div>
          <span className="inline-block px-2.5 py-0.5 text-[10px] font-mono font-bold tracking-wider bg-[var(--accent)] text-white rounded-md border border-[var(--border-ink)] uppercase">
            {project.category}
          </span>
        </div>

        <h3 className="text-lg sm:text-xl font-extrabold text-[var(--ink)] tracking-tight font-display group-hover:text-[var(--accent)] transition-colors leading-snug">
          {project.title}
        </h3>

        <p className="text-xs text-[var(--ink-muted)] leading-relaxed min-h-[3.25rem] font-medium">
          {project.description}
        </p>

        {/* Cohesive technology badges highlight key framework and tools */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.technologies.map((tech, techIdx) => {
            const isFirst = techIdx === 0
            return (
              <span
                key={tech}
                className={`px-2.5 py-0.5 text-[11px] font-mono font-bold rounded-full border border-[var(--border-ink)] ${
                  isFirst
                    ? 'bg-[var(--accent)] text-white'
                    : 'bg-[var(--bg-card-inner)] text-[var(--ink)]'
                }`}
              >
                {tech}
              </span>
            )
          })}
        </div>

        {/* Action links to live demo and source code repository */}
        <div className="pt-3.5 mt-auto border-t-2 border-[var(--border-ink)]/15 flex items-center justify-between text-xs font-bold">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-[var(--ink)] hover:text-[var(--accent)] transition-colors"
            >
              <LuExternalLink className="w-3.5 h-3.5" />
              <span>Live Demo</span>
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-[var(--ink-muted)] hover:text-[var(--ink)] transition-colors ml-auto"
              aria-label="GitHub Repository"
            >
              <LuGithub className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          )}
        </div>

      </div>
    </div>
  )
}
