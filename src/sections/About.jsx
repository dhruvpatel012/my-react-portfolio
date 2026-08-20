import SectionHeading from '../components/SectionHeading'
import InfoCard from '../components/InfoCard'
import Button from '../components/Button'
import { personalInfo } from '../data/personal'
import { LuGraduationCap, LuCode, LuHeart, LuTarget, LuDownload } from 'react-icons/lu'

// Overview metrics highlighting core educational background and aspirations.
const aboutCards = [
  {
    id: 'education',
    title: 'Education',
    description: '7th Sem Computer Engineering',
    icon: LuGraduationCap,
  },
  {
    id: 'focus',
    title: 'Focus',
    description: 'Frontend & React Development',
    icon: LuCode,
  },
  {
    id: 'passion',
    title: 'Passion',
    description: 'Building solutions that help users',
    icon: LuHeart,
  },
  {
    id: 'goal',
    title: 'Goal',
    description: 'Growing into a Full-Stack Engineer',
    icon: LuTarget,
  },
]

// About section pairing personal narrative and resume download with a 2x2 fact grid.
export default function About() {
  return (
    <section id="about" className="py-14 sm:py-20 border-t-2 border-[var(--border-ink)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          <div className="lg:col-span-7 space-y-5">
            <SectionHeading
              tag="About Me"
              title="A student with a"
              highlight="developer's mindset."
            />

            <div className="space-y-3.5 text-sm sm:text-base text-[var(--ink-muted)] leading-relaxed max-w-xl font-medium">
              <p>
                I am currently a 7th-semester Computer Engineering student who discovered a genuine passion for frontend development. I enjoy bridging the gap between design concepts and interactive, responsive web applications.
              </p>
              <p>
                My focus centers on React, modern JavaScript, and Tailwind CSS. Rather than relying on complicated abstractions or bloated libraries, I believe in writing readable, maintainable code and understanding how things work under the hood.
              </p>
              <p>
                Every project is an opportunity to learn something new, refine my attention to detail, and build interfaces that feel engineered with purpose.
              </p>
            </div>

            {/* Resume button downloads PDF and opens preview in a new tab */}
            <div className="pt-2">
              <Button
                variant="outline"
                href={personalInfo.resume}
                target="_blank"
                rel="noopener noreferrer"
                download="Dhruv_Patel_Resume.pdf"
              >
                <LuDownload className="w-4 h-4" />
                <span>Download Resume</span>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-4 sm:gap-5">
            {aboutCards.map((card, idx) => (
              <InfoCard
                key={card.id}
                icon={card.icon}
                title={card.title}
                description={card.description}
                index={idx}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
