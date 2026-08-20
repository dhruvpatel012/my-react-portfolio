import SectionHeading from '../components/SectionHeading'
import JourneyItem from '../components/JourneyItem'
import { journeyData } from '../data/journey'

// Milestone progression section showing academic timeline and frontend development milestones.
export default function Journey() {
  return (
    <section id="journey" className="py-14 sm:py-20 border-t-2 border-[var(--border-ink)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-2xl mb-10 sm:mb-14">
          <SectionHeading
            tag="My Journey"
            title="Learning path &"
            highlight="milestones"
            subtitle="From secondary education to software engineering and building responsive web applications."
          />
        </div>

        {/* 4-column horizontal rail on desktop gracefully transforms into compact stacked rail on smaller screens */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-6 items-stretch">
          {journeyData.map((item, index) => (
            <JourneyItem
              key={item.id}
              item={item}
              index={index}
              isLast={index === journeyData.length - 1}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
