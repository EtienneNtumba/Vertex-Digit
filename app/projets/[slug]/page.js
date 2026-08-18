'use client'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { ArrowRight, ArrowUpRight, ArrowLeft, CircleCheck } from 'lucide-react'
import { useI18n } from '@/components/site/i18n'
import { Header } from '@/components/site/Header'
import { Footer } from '@/components/site/Footer'
import { FadeUp } from '@/components/site/FadeUp'

function ProjectCasePage() {
  const { d } = useI18n()
  const params = useParams()
  const slug = params?.slug
  const all = d.pages.projects.items
  const idx = all.findIndex((p) => p.slug === slug)
  const proj = idx >= 0 ? all[idx] : null
  const next = proj ? all[(idx + 1) % all.length] : null

  if (!proj) {
    return (
      <>
        <Header />
        <main className="container-v py-40 text-center">
          <span className="eyebrow">404</span>
          <h1 className="mt-4 text-[36px]">Projet introuvable.</h1>
          <Link href="/projets" className="v-btn-primary mt-8"><ArrowLeft className="h-4 w-4" strokeWidth={1.5} /> Retour aux projets</Link>
        </main>
        <Footer />
      </>
    )
  }

  const L = d.pages.projectCase

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-vertex-line bg-white pt-32 lg:pt-40">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-40 right-0 h-[480px] w-[640px]"
            style={{ background: 'radial-gradient(closest-side, rgba(91,169,232,0.16), transparent 70%)' }}
          />
          <div className="container-v relative pb-16 lg:pb-24">
            <FadeUp>
              <Link href="/projets" className="inline-flex items-center gap-1.5 text-[13px] text-vertex-muted transition-colors hover:text-vertex-blue">
                <ArrowLeft className="h-3.5 w-3.5" strokeWidth={1.5} /> {L.back}
              </Link>
              <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-[12px] text-vertex-muted">
                <span className="eyebrow">{proj.sector}</span>
                <span className="text-vertex-line">•</span>
                <span>{proj.client}</span>
                <span className="text-vertex-line">•</span>
                <span>{proj.year}</span>
              </div>
              <h1 className="mt-5 max-w-[24ch] text-balance text-[40px] leading-[1.05] tracking-tight md:text-[56px] lg:text-[64px]">{proj.title}</h1>
              <p className="mt-7 max-w-[62ch] text-[18px] leading-[1.65] text-vertex-muted">{proj.desc}</p>
            </FadeUp>
          </div>
        </section>

        {/* KPIs strip */}
        {proj.kpis && (
          <section className="border-b border-vertex-line bg-vertex-offwhite py-16 lg:py-20">
            <div className="container-v">
              <div className="grid grid-cols-2 gap-y-10 lg:grid-cols-4">
                {proj.kpis.map((k, i) => (
                  <FadeUp key={i} delay={i * 60}>
                    <div>
                      <div className="font-serif text-[38px] leading-none text-vertex-navy lg:text-[48px]">{k.v}</div>
                      <div className="mt-2 max-w-[22ch] text-[13px] leading-relaxed text-vertex-muted">{k.l}</div>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Body: context / approach / results with sticky sidebar */}
        <section className="bg-white py-24 lg:py-28">
          <div className="container-v grid gap-12 lg:grid-cols-12 lg:gap-16">
            <aside className="lg:col-span-4">
              <FadeUp>
                <div className="sticky top-32 space-y-5">
                  <InfoRow label={L.client} value={proj.client} />
                  <InfoRow label={L.sector} value={proj.sector} />
                  <InfoRow label={L.year} value={proj.year} />
                  {proj.duration && <InfoRow label={L.duration} value={proj.duration} />}
                  {proj.stack && (
                    <div>
                      <div className="text-[11px] uppercase tracking-[0.12em] text-vertex-muted">{L.stack}</div>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {proj.stack.map((s) => (
                          <span key={s} className="rounded-md border border-vertex-line bg-vertex-offwhite px-2.5 py-1 text-[11px] font-medium text-vertex-navy">{s}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </FadeUp>
            </aside>
            <div className="lg:col-span-8">
              <div className="space-y-14">
                {proj.context && (
                  <FadeUp>
                    <article>
                      <span className="eyebrow">{L.context}</span>
                      <h2 className="mt-3 font-serif text-[26px] leading-tight md:text-[32px]">{proj.context.h}</h2>
                      <p className="mt-5 text-[17px] leading-[1.7] text-vertex-slate">{proj.context.p}</p>
                    </article>
                  </FadeUp>
                )}
                {proj.approach && (
                  <FadeUp delay={80}>
                    <article>
                      <span className="eyebrow">{L.approach}</span>
                      <h2 className="mt-3 font-serif text-[26px] leading-tight md:text-[32px]">{proj.approach.h}</h2>
                      <p className="mt-5 text-[17px] leading-[1.7] text-vertex-slate">{proj.approach.p}</p>
                      {proj.approach.bullets && (
                        <ul className="mt-6 space-y-2.5">
                          {proj.approach.bullets.map((b, j) => (
                            <li key={j} className="flex items-start gap-2.5 text-[15px] text-vertex-slate">
                              <CircleCheck className="mt-1 h-4 w-4 flex-none text-vertex-blue" strokeWidth={1.5} />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </article>
                  </FadeUp>
                )}
                {proj.results && (
                  <FadeUp delay={120}>
                    <article>
                      <span className="eyebrow">{L.results}</span>
                      <h2 className="mt-3 font-serif text-[26px] leading-tight md:text-[32px]">{proj.results.h}</h2>
                      <p className="mt-5 text-[17px] leading-[1.7] text-vertex-slate">{proj.results.p}</p>
                    </article>
                  </FadeUp>
                )}
                {proj.quote && (
                  <FadeUp delay={160}>
                    <blockquote className="rounded-xl border-l-2 border-vertex-blue bg-vertex-offwhite p-6 pl-7">
                      <p className="font-serif text-[20px] italic leading-snug text-vertex-navy md:text-[22px]">« {proj.quote.text} »</p>
                      <footer className="mt-3 text-[13px] text-vertex-muted">— {proj.quote.author}</footer>
                    </blockquote>
                  </FadeUp>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Next project + CTA */}
        <section className="border-t border-vertex-line bg-vertex-offwhite py-20">
          <div className="container-v grid gap-8 lg:grid-cols-2">
            {next && (
              <FadeUp>
                <Link href={`/projets/${next.slug}`} className="v-card group flex h-full flex-col justify-between">
                  <span className="eyebrow">{L.next}</span>
                  <div>
                    <div className="mt-4 text-[12px] uppercase tracking-[0.12em] text-vertex-muted">{next.client}</div>
                    <h3 className="mt-2 font-serif text-[22px] leading-tight text-vertex-navy group-hover:text-vertex-blue">{next.title}</h3>
                  </div>
                  <div className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-medium text-vertex-blue">{L.readNext} <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} /></div>
                </Link>
              </FadeUp>
            )}
            <FadeUp delay={80}>
              <div className="v-card flex h-full flex-col justify-between !bg-vertex-navy !border-vertex-navy text-white">
                <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.15em] text-vertex-sky">{L.discussEyebrow}</span>
                <div>
                  <h3 className="mt-4 font-serif text-[22px] leading-tight text-white">{L.discussTitle}</h3>
                  <p className="mt-2 text-[14px] text-white/60">{L.discussDesc}</p>
                </div>
                <Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-md bg-white px-5 py-2.5 text-[13px] font-medium text-vertex-navy transition-all hover:bg-vertex-sky hover:text-white">
                  {L.discussCta} <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                </Link>
              </div>
            </FadeUp>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

function InfoRow({ label, value }) {
  return (
    <div className="border-b border-vertex-line pb-4">
      <div className="text-[11px] uppercase tracking-[0.12em] text-vertex-muted">{label}</div>
      <div className="mt-1.5 text-[15px] text-vertex-navy">{value}</div>
    </div>
  )
}

export default ProjectCasePage
