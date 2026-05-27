'use client'
import { FadeUp } from './FadeUp'

export function PageHeader({ eyebrow, title, intro }) {
  return (
    <section className="relative overflow-hidden border-b border-vertex-line bg-white pt-32 lg:pt-40">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-0 h-[480px] w-[640px]"
        style={{ background: 'radial-gradient(closest-side, rgba(91,169,232,0.16), transparent 70%)' }}
      />
      <div className="container-v relative pb-20 lg:pb-28">
        <FadeUp>
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h1 className="mt-5 max-w-[18ch] text-balance text-[40px] leading-[1.05] tracking-tight md:text-[56px] lg:text-[64px]">{title}</h1>
          {intro && <p className="mt-7 max-w-[62ch] text-[18px] leading-[1.65] text-vertex-muted">{intro}</p>}
        </FadeUp>
      </div>
    </section>
  )
}

export default PageHeader
