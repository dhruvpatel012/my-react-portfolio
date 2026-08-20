import { projectsData } from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import SectionHeading from '../components/SectionHeading'

// Showcases featured applications in a 3x2 grid on desktop and a horizontal swipe carousel on mobile.
export default function Projects() {
  return (
    <section id="work" className="py-14 sm:py-20 border-t-2 border-[var(--border-ink)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8 sm:mb-12 max-w-2xl">
          <SectionHeading
            tag="Selected Work"
            title="Projects I've"
            highlight="built & shipped"
            subtitle="Real-world interfaces, responsive web apps, and personal experiments."
          />
        </div>

        {/* Mobile swipe hint visible only on small viewports */}
        <div className="md:hidden flex items-center gap-2 mb-3 px-1 text-xs font-mono font-bold text-[var(--ink-muted)] select-none">
          <span>More projects? Swipe left → right to explore</span>
        </div>

        {/* Horizontal scroll on mobile reduces vertical page length while preserving full desktop grid */}
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none pb-6 pt-1 -mx-4 px-4 sm:-mx-6 sm:px-6 md:mx-0 md:px-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="w-[82vw] sm:w-[65vw] md:w-auto max-w-[340px] md:max-w-none shrink-0 md:shrink snap-start flex"
            >
              {/* Pass project data so the same card component can render every project */}
              <ProjectCard project={project} className="w-full" />
            </div>
          ))}
          {/* Spacer pill to ensure the last mobile card does not touch the edge */}
          <div className="w-2 shrink-0 md:hidden" aria-hidden="true" />
        </div>

      </div>
    </section>
  )
}
