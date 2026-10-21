import SectionHeading from '../components/SectionHeading'
import JourneyItem from '../components/JourneyItem'
import { journeyData, certificationsData } from '../data/journey'
import { LuAward } from 'react-icons/lu'

// Milestone progression section showing academic timeline, development journey, and verified certifications.
export default function Journey() {
  return (
    <section id="journey" className="py-14 sm:py-20 border-t-2 border-[var(--border-ink)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-2xl mb-10 sm:mb-14">
          <SectionHeading
            tag="My Journey"
            title="Learning path &"
            highlight="milestones"
            subtitle="From secondary education to computer engineering, full-stack development, and certifications."
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

        {/* Certifications showcase card matching the neo-brutalist theme */}
        <div className="mt-10 sm:mt-14 p-6 sm:p-8 rounded-3xl bg-[var(--bg-card)] border-[2.5px] border-[var(--border-ink)] shadow-[6px_6px_0_var(--shadow-hard)]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b-2 border-[var(--border-ink)]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[var(--accent)] text-white border-2 border-[var(--border-ink)] flex items-center justify-center shadow-[2px_2px_0_var(--border-ink)]">
                <LuAward className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-extrabold text-[var(--ink)] font-display">
                  Certifications
                </h3>
                <p className="text-xs font-medium text-[var(--ink-muted)]">
                  Verified achievements and specializations from recognized institutions
                </p>
              </div>
            </div>
            <span className="self-start sm:self-auto text-[11px] font-mono font-bold px-3 py-1 rounded-full bg-[var(--bg-card-inner)] border border-[var(--border-ink)] text-[var(--ink)]">
              2 Credentials
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {certificationsData.map((cert) => (
              <div
                key={cert.id}
                className="p-4 sm:p-5 rounded-2xl bg-[var(--bg-card-inner)] border-2 border-[var(--border-ink)] shadow-[3px_3px_0_var(--border-ink)] hover:shadow-[5px_5px_0_var(--border-ink)] hover:-translate-y-0.5 transition-all flex flex-col justify-between gap-3"
              >
                <div className="space-y-1">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-[var(--accent)] text-white border border-[var(--border-ink)]">
                      {cert.period}
                    </span>
                    <LuAward className="w-4 h-4 text-[var(--accent)]" />
                  </div>
                  <h4 className="text-base font-extrabold text-[var(--ink)] font-display pt-1">
                    {cert.title}
                  </h4>
                  <p className="text-xs font-semibold text-[var(--ink-muted)]">
                    {cert.issuer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
