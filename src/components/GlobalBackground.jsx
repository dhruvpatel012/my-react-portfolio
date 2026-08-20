// Unified full-page technical grid and hardware-accelerated ambient glows.
export default function GlobalBackground() {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none transform-gpu"
      style={{ willChange: 'transform', transform: 'translateZ(0)' }}
      aria-hidden="true"
    >
      {/* Theme base canvas color with smooth theme transition */}
      <div className="absolute inset-0 bg-[var(--bg)] transition-colors duration-300" />

      {/* Lightweight CSS grid pattern avoids extra DOM nodes for 60fps scrolling */}
      <div
        className="absolute inset-0 w-full h-full opacity-100 transition-opacity duration-300"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--bg-grid) 1px, transparent 1px),
            linear-gradient(to bottom, var(--bg-grid) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Soft radial glow clusters positioned across the page for subtle depth */}
      <div
        className="absolute -top-[10%] -left-[10%] w-[55vw] h-[55vw] max-w-[650px] max-h-[650px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, var(--bg-glow-1) 0%, transparent 70%)',
          transform: 'translateZ(0)',
        }}
      />

      <div
        className="absolute top-[35%] -right-[10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, var(--bg-glow-2) 0%, transparent 70%)',
          transform: 'translateZ(0)',
        }}
      />

      <div
        className="absolute top-[70%] left-[5%] w-[45vw] h-[45vw] max-w-[550px] max-h-[550px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, var(--bg-glow-3) 0%, transparent 70%)',
          transform: 'translateZ(0)',
        }}
      />
    </div>
  )
}
