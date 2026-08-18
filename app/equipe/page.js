'use client'
import Image from 'next/image'
import { useI18n } from '@/components/site/i18n'
import { Header } from '@/components/site/Header'
import { Footer } from '@/components/site/Footer'
import { FadeUp } from '@/components/site/FadeUp'
import { PageHeader } from '@/components/site/PageHeader'

// Portrait: real photo when provided, initials avatar otherwise. Always navy background frame.
function Portrait({ name, portrait, accent }) {
  const initials = name.split(' ').filter(Boolean).map((s) => s[0]).slice(0, 2).join('').replace(/[^A-Z]/gi, '').toUpperCase()
  const colors = ['#1B6FD4', '#125399', '#5BA9E8', '#0A1F44', '#0E2A55']
  const c = colors[accent % colors.length]

  return (
    <div
      className="relative h-72 w-full overflow-hidden rounded-lg"
      style={{ background: `linear-gradient(135deg, ${c}, #0A1F44)` }}
    >
      {portrait ? (
        <>
          <Image
            src={portrait}
            alt={name}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
          {/* subtle navy vignette to unify with the design system */}
          <div
            aria-hidden
            className="absolute inset-0"
            style={{ background: 'linear-gradient(180deg, rgba(10,31,68,0) 45%, rgba(10,31,68,0.55) 100%)' }}
          />
        </>
      ) : (
        <>
          <div className="absolute inset-0 grain opacity-30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-serif text-[64px] tracking-tight text-white/95">{initials}</span>
          </div>
        </>
      )}
      <div className="absolute right-3 top-3 h-2 w-2 rounded-full bg-vertex-health" />
    </div>
  )
}

function TeamPage() {
  const { d } = useI18n()
  const p = d.pages.team
  return (
    <>
      <Header />
      <main>
        <PageHeader eyebrow={p.eyebrow} title={p.title} intro={p.intro} />

        <section className="bg-white py-24 lg:py-28">
          <div className="container-v">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {p.members.map((m, i) => (
                <FadeUp key={m.name} delay={i * 70}>
                  <article className="v-card flex h-full flex-col">
                    <Portrait name={m.name} portrait={m.portrait} accent={i} />
                    <h3 className="mt-6 font-serif text-[22px] leading-tight text-vertex-navy">{m.name}</h3>
                    <div className="mt-1.5 text-[13px] font-medium text-vertex-blue">{m.role}</div>
                    <p className="mt-3 text-[14px] leading-relaxed text-vertex-muted">{m.bio}</p>
                  </article>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default TeamPage
