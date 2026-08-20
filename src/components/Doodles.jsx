// Hand-drawn SVG doodle annotations for the neo-brutalist studio aesthetic.

export function SquiggleUnderline({ className = '' }) {
  return (
    <svg
      viewBox="0 0 200 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`overflow-visible pointer-events-none ${className}`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M2 12C32 2 62 14 92 6C122 -2 152 14 198 8"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="doodle-squiggle"
      />
    </svg>
  )
}

export function CurvedArrow({ className = '' }) {
  return (
    <svg
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`overflow-visible pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <path
        d="M8 12C12 28 22 45 44 48"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M34 40L45 49L42 36"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

// Downward pointing arrow connecting Hero CTA buttons to the handwritten annotation.
export function CurvedDownArrow({ className = '' }) {
  return (
    <svg
      viewBox="0 0 60 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`overflow-visible pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <path
        d="M8 6C20 6 36 14 38 38"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M27 30L38 41L47 31"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function StarBurst({ className = '' }) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`overflow-visible pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <path
        d="M18 2V34M2 18H34M6.7 6.7L29.3 29.3M6.7 29.3L29.3 6.7"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function CircleScribble({ className = '' }) {
  return (
    <svg
      viewBox="0 0 100 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`overflow-visible pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <path
        d="M8 20C12 8 40 4 68 8C90 12 96 25 84 32C70 38 32 36 16 30C4 24 8 12 28 10C55 8 82 12 92 22"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

// Semi-transparent tape sticker applied to the corners of identity cards.
export function TapeStrip({ className = '' }) {
  return (
    <div
      className={`w-14 h-5 bg-white/40 dark:bg-white/25 backdrop-blur-[1px] border border-white/50 -rotate-6 shadow-xs pointer-events-none select-none rounded-[1px] ${className}`}
      aria-hidden="true"
    />
  )
}
