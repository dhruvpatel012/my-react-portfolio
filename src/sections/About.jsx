import SectionHeading from '../components/SectionHeading'
import InfoCard from '../components/InfoCard'
import { LuGraduationCap, LuCode, LuHeart, LuTarget } from 'react-icons/lu'

// Overview metrics highlighting core educational background and aspirations.
const aboutCards = [
  {
    id: 'education',
    title: 'Education',
    description: 'B.E. Computer Engineering',
    icon: LuGraduationCap,
  },
  {
    id: 'focus',
    title: 'Focus',
    description: 'Full Stack & MERN Development',
    icon: LuCode,
  },
  {
    id: 'passion',
    title: 'Passion',
    description: 'Clean, Practical Web Solutions',
    icon: LuHeart,
  },
  {
    id: 'goal',
    title: 'Goal',
    description: 'Growing as a Full Stack Dev',
    icon: LuTarget,
  },
]

// About section pairing personal narrative with a 2x2 fact grid.
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
                I am a Computer Engineering student at LDRP Institute of Technology and Research (KSV), Gandhinagar, with a strong foundation in Full Stack development and the MERN stack.
              </p>
              <p>
                I enjoy building responsive web applications from the ground up—crafting intuitive user interfaces, developing and integrating REST APIs, managing database models with MongoDB, and implementing secure authentication workflows.
              </p>
              <p>
                With experience deploying full-stack web applications to platforms like Vercel and Render, I focus on writing clean, maintainable code and engineering practical, user-focused solutions.
              </p>
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
