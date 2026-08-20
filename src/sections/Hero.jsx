import Button from '../components/Button'
import { personalInfo } from '../data/personal'
import { SquiggleUnderline, CurvedDownArrow, StarBurst, TapeStrip } from '../components/Doodles'
import { LuArrowRight } from 'react-icons/lu'
import profileImg from '../assets/dhruv.JPG'

// Hero section combining brand headline, role badge, core philosophy, and desk-style photo card.
export default function Hero() {
  return (
    <section id="home" className="relative pt-10 pb-14 md:pt-16 md:pb-20 lg:pt-20 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Two-column layout on desktop, naturally stacked on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* Left Column: Headline typography, philosophy, and primary CTA */}
          <div className="lg:col-span-7 space-y-5 text-left">

            {/* Top eyebrow badge */}
            <div className="inline-block transform -rotate-1 hover:rotate-0 transition-transform">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--accent)] text-white font-extrabold text-xs tracking-wider border-2 border-[var(--border-ink)] shadow-[2px_2px_0_var(--border-ink)] uppercase">
                Crafting Digital Experiences
              </span>
            </div>

            {/* Developer code signature headline with starburst and zigzag doodle underline */}
            <div className="space-y-1">
              <div className="relative inline-block">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[var(--ink)] leading-[1.08] font-display">
                  &lt;Dhruv{' '}
                  <span className="relative inline-block text-[var(--accent)]">
                    Patel
                    <StarBurst className="absolute -top-4 -right-7 sm:-top-5 sm:-right-8 w-8 h-8 text-[var(--accent)] opacity-85" />
                    <SquiggleUnderline className="absolute -bottom-2 left-0 w-full text-[var(--ink)]" />
                  </span>
                  {' '}/&gt;
                </h1>
              </div>

              {/* Sub-headline placed once directly beneath name to avoid repetition */}
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--ink-muted)] font-display tracking-tight pt-1">
                Frontend Developer
              </h2>
            </div>

            {/* Core philosophy statement */}
            <p className="text-lg sm:text-xl font-bold text-[var(--ink)] leading-snug">
              I build interfaces that feel{' '}
              <span className="relative inline-block text-[var(--accent)]">
                engineered
                <SquiggleUnderline className="absolute -bottom-1 left-0 w-full text-[var(--accent)]" />
              </span>
              , not assembled.
            </p>

            <p className="text-sm sm:text-base text-[var(--ink-muted)] leading-relaxed max-w-xl font-medium">
              I turn ideas into responsive, thoughtful web experiences with clean code, intuitive interactions, and attention to detail.
            </p>

            {/* CTA action and downward guide pointing to the projects section */}
            <div className="pt-2 relative space-y-3">
              <div className="flex flex-wrap items-center gap-4">
                <Button variant="primary" href="#work">
                  <span>Explore My Work</span>
                  <LuArrowRight className="w-4 h-4" />
                </Button>
              </div>

              {/* Sketchy curved downward arrow guiding user to explore work */}
              <div className="flex items-start gap-2.5 text-[var(--accent)] select-none pl-2 pt-1">
                <CurvedDownArrow className="w-8 h-10 text-[var(--accent)] shrink-0" />
                <span className="font-hand text-xl sm:text-2xl font-bold transform -rotate-1 mt-2">
                  check out what I built!
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Desk identity card with real photo and academic status pill */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group w-full max-w-[340px] sm:max-w-[370px]">

              {/* Decorative corner tape strips simulate a polaroid sticker effect */}
              <TapeStrip className="absolute -top-3.5 -left-3 z-20 opacity-80" />
              <TapeStrip className="absolute -bottom-3.5 -right-3 z-20 rotate-12 opacity-80" />

              <div className="relative rounded-2xl bg-[var(--bg-card)] border-[2.5px] border-[var(--border-ink)] shadow-[8px_8px_0_var(--shadow-hard)] hover:shadow-[10px_10px_0_var(--shadow-hard)] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-200 p-6 sm:p-7 space-y-5 text-center">

                {/* Profile photo container with subtle accent ring */}
                <div className="relative mx-auto w-44 h-44 sm:w-48 sm:h-48 rounded-2xl overflow-hidden border-[2.5px] border-[var(--border-ink)] shadow-[4px_4px_0_var(--border-ink)] bg-[var(--bg-card-inner)] ring-4 ring-[var(--accent)]/20 transform -rotate-1 group-hover:rotate-0 transition-transform">
                  <img
                    src={profileImg}
                    alt="Dhruv Patel"
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                  />
                </div>

                <div>
                  <p className="text-base font-extrabold text-[var(--ink)] font-display tracking-tight">
                    Computer Engineering
                  </p>
                </div>

                {/* Status pill with centered pulsing active indicator */}
                <div className="w-full py-2.5 px-3.5 rounded-2xl bg-[var(--bg-card-inner)] border-2 border-[var(--border-ink)] flex items-center justify-center gap-2 text-xs font-bold shadow-[2px_2px_0_var(--border-ink)] leading-snug">
                  <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse shrink-0 self-center" />
                  <div className="flex flex-wrap items-center justify-center gap-x-1.5 gap-y-0.5">
                    <span className="text-[var(--ink-muted)] uppercase tracking-wider">{personalInfo.status.label}:</span>
                    <span className="text-[var(--ink)] text-center">
                      7th Semester Computer Engineering
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
