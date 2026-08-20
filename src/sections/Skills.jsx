import SectionHeading from '../components/SectionHeading'
import SkillCard from '../components/SkillCard'
import { skillsData } from '../data/skills'

// Toolkit section displaying active technologies in a responsive 2-column mobile and 3-column desktop grid.
export default function Skills() {
  return (
    <section id="skills" className="py-14 sm:py-20 border-t-2 border-[var(--border-ink)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-8 sm:mb-12">
          <SectionHeading
            tag="My Toolkit"
            title="Technologies &"
            highlight="languages"
            subtitle="Core frontend stack and developer tools I use daily."
          />
        </div>

        {/* Index passed to each card controls alternating left/right hover tilts */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5">
          {skillsData.map((skill, index) => (
            <SkillCard key={skill.id} skill={skill} index={index} />
          ))}
        </div>

      </div>
    </section>
  )
}
