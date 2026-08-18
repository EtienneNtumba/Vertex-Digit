'use client'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, ShieldCheck, Boxes, GraduationCap, FlaskConical, Code2, Compass, CircleCheck } from 'lucide-react'
import { useI18n } from '@/components/site/i18n'
import { Header } from '@/components/site/Header'
import { Footer } from '@/components/site/Footer'
import { FadeUp } from '@/components/site/FadeUp'
import { HeroNetwork } from '@/components/site/HeroNetwork'
import { HealthMockup } from '@/components/site/HealthMockup'

const Wordmark = ({ children }) => (
  <span className="font-serif text-[18px] tracking-tight text-vertex-muted/70 transition-colors hover:text-vertex-slate">{children}</span>
)

const commitIcons = [ShieldCheck, Boxes, GraduationCap]
const domainIcons = [FlaskConical, Code2, Compass]

function Home() {
  const { d } = useI18n()

  return (
    <>
      <Header />
      <main>
        {/* 1. HERO */}
        <section className="relative overflow-hidden bg-white">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-32 right-[-10%] h-[760px] w-[760px]"
            style={{ background: 'radial-gradient(closest-side, rgba(91,169,232,0.22), transparent 70%)' }}
          />
          <div className="container-v relative grid min-h-[100svh] grid-cols-1 items-center gap-12 pt-28 pb-20 lg:grid-cols-12 lg:gap-8 lg:pt-32">
            <div className="lg:col-span-7">
              <FadeUp>
                <span className="eyebrow">{d.home.hero.eyebrow}</span>
              </FadeUp>
              <FadeUp delay={80}>
                <h1 className="mt-6 max-w-[18ch] text-balance text-[44px] leading-[1.02] tracking-tight md:text-[60px] lg:text-[72px]">
                  {d.home.hero.h1}
                </h1>
              </FadeUp>
              <FadeUp delay={160}>
                <p className="mt-7 max-w-[58ch] text-[18px] leading-[1.65] text-vertex-muted">
                  {d.home.hero.subtitle}
                </p>
              </FadeUp>
              <FadeUp delay={240}>
                <div className="mt-9 flex flex-wrap items-center gap-3">
                  <Link href="/solutions/vertex-health-suite" className="v-btn-primary">
                    {d.home.hero.cta1}
                    <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                  </Link>
                  <Link href="/contact" className="v-btn-ghost">{d.home.hero.cta2}</Link>
                </div>
              </FadeUp>
            </div>
            <div className="lg:col-span-5">
              <FadeUp delay={120}>
                <div className="flex justify-center lg:justify-end">
                  <HeroNetwork />
                </div>
              </FadeUp>
            </div>
          </div>

          {/* partner wordmarks (sober, no real logos) */}
          <div className="container-v relative pb-16">
            <FadeUp delay={300}>
              <div className="flex flex-col items-center gap-6 border-t border-vertex-line pt-10 lg:flex-row lg:justify-between">
                <span className="text-[11px] uppercase tracking-[0.15em] text-vertex-muted">{d.home.hero.partners}</span>
                <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
                  <Wordmark>McGill</Wordmark>
                  <Wordmark>Ministère Santé RDC</Wordmark>
                </div>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* 2. STATS */}
        <section className="border-y border-vertex-line bg-vertex-offwhite py-24 lg:py-28">
          <div className="container-v">
            <div className="grid grid-cols-2 gap-y-12 lg:grid-cols-4">
              {d.home.stats.map((s, i) => (
                <FadeUp key={i} delay={i * 80}>
                  <div>
                    <div className="font-serif text-[44px] leading-none text-vertex-navy lg:text-[56px]">{s.value}</div>
                    <div className="mt-3 max-w-[18ch] text-[14px] leading-relaxed text-vertex-muted">{s.label}</div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* 3. 3 COMMITMENTS */}
        <section className="bg-white py-28 lg:py-32">
          <div className="container-v">
            <div className="mx-auto max-w-3xl text-center">
              <FadeUp><span className="eyebrow">{d.home.commitments.eyebrow}</span></FadeUp>
              <FadeUp delay={80}>
                <h2 className="mt-5 text-[34px] leading-[1.1] md:text-[44px]">{d.home.commitments.title}</h2>
              </FadeUp>
            </div>
            <div className="mt-16 grid gap-6 lg:grid-cols-3">
              {d.home.commitments.items.map((c, i) => {
                const Icon = commitIcons[i]
                return (
                  <FadeUp key={i} delay={i * 100}>
                    <div className="v-card h-full">
                      <div className="flex h-11 w-11 items-center justify-center rounded-md bg-vertex-tint text-vertex-blue">
                        <Icon className="h-5 w-5" strokeWidth={1.5} />
                      </div>
                      <h3 className="mt-6 font-serif text-[22px] leading-tight">{c.title}</h3>
                      <p className="mt-3 text-[15px] leading-relaxed text-vertex-muted">{c.desc}</p>
                    </div>
                  </FadeUp>
                )
              })}
            </div>
          </div>
        </section>

        {/* 4. 3 DOMAINS — alternating bands */}
        <section className="bg-vertex-offwhite">
          {d.home.domains.items.map((dom, i) => {
            const Icon = domainIcons[i]
            const reverse = i % 2 === 1
            return (
              <div key={i} className={`border-b border-vertex-line last:border-b-0 py-24 lg:py-28 ${i % 2 === 1 ? 'bg-white' : ''}`}>
                <div className="container-v">
                  <div className={`grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16 ${reverse ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                    <FadeUp>
                      <div>
                        <span className="eyebrow">{dom.kicker}</span>
                        <h3 className="mt-4 max-w-[20ch] text-[30px] leading-[1.1] md:text-[40px]">{dom.title}</h3>
                        <p className="mt-5 max-w-[58ch] text-[16px] leading-[1.7] text-vertex-muted">{dom.desc}</p>
                        <ul className="mt-6 space-y-2.5">
                          {dom.bullets.map((b, j) => (
                            <li key={j} className="flex items-start gap-2.5 text-[15px] text-vertex-slate">
                              <CircleCheck className="mt-0.5 h-4 w-4 flex-none text-vertex-blue" strokeWidth={1.5} />
                              {b}
                            </li>
                          ))}
                        </ul>
                        <Link href={i === 0 ? '/solutions/vertex-health-suite' : i === 1 ? '/expertise' : '/projets'} className="mt-7 inline-flex items-center gap-1.5 text-[14px] font-medium text-vertex-blue transition-colors hover:text-vertex-blue-dark">
                          {dom.link} <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                        </Link>
                      </div>
                    </FadeUp>
                    <FadeUp delay={120}>
                      <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-vertex-line bg-white">
                        <div
                          aria-hidden
                          className="absolute inset-0"
                          style={{ background: i === 0 ? 'linear-gradient(135deg, #EFF6FF, #CFE2F7)' : i === 1 ? 'linear-gradient(135deg, #F8FAFC, #E2E8F0)' : 'linear-gradient(135deg, #ECFDF5, #DBEAFE)' }}
                        />
                        <div className="absolute inset-0 grain opacity-50" />
                        <div className="relative flex h-full items-center justify-center">
                          <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-white/90 shadow-sm ring-1 ring-vertex-line">
                            <Icon className="h-12 w-12 text-vertex-blue" strokeWidth={1.2} />
                          </div>
                        </div>
                        {/* small floating chips */}
                        <div className="absolute left-6 top-6 rounded-md border border-vertex-line bg-white/95 px-3 py-1.5 text-[11px] font-medium text-vertex-navy shadow-sm">{dom.bullets[0]}</div>
                        <div className="absolute bottom-6 right-6 rounded-md border border-vertex-line bg-white/95 px-3 py-1.5 text-[11px] font-medium text-vertex-navy shadow-sm">{dom.bullets[dom.bullets.length-1]}</div>
                      </div>
                    </FadeUp>
                  </div>
                </div>
              </div>
            )
          })}
        </section>

        {/* 5. FLAGSHIP SOLUTION — Dark Navy */}
        <section className="relative overflow-hidden bg-vertex-navy py-28 text-white lg:py-32">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-40 -top-40 h-[600px] w-[600px]"
            style={{ background: 'radial-gradient(closest-side, rgba(91,169,232,0.18), transparent 70%)' }}
          />
          <div className="container-v relative grid gap-14 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <FadeUp>
                <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.15em] text-vertex-sky">{d.home.solution.eyebrow}</span>
              </FadeUp>
              <FadeUp delay={80}>
                <h2 className="mt-5 text-[34px] leading-[1.1] text-white md:text-[44px]">{d.home.solution.title}</h2>
              </FadeUp>
              <FadeUp delay={160}>
                <p className="mt-6 max-w-[52ch] text-[16px] leading-[1.7] text-white/65">{d.home.solution.desc}</p>
              </FadeUp>
              <FadeUp delay={220}>
                <div className="mt-8 flex flex-wrap gap-2">
                  {d.home.solution.modules.map((m) => (
                    <span key={m} className="rounded-md border border-white/15 bg-white/[0.04] px-3 py-1.5 text-[12px] text-white/80">{m}</span>
                  ))}
                </div>
              </FadeUp>
              <FadeUp delay={280}>
                <Link href="/solutions/vertex-health-suite" className="mt-10 inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 text-[14px] font-medium text-vertex-navy transition-all duration-300 hover:bg-vertex-sky hover:text-white">
                  {d.home.solution.cta} <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                </Link>
              </FadeUp>
            </div>
            <div className="lg:col-span-7">
              <FadeUp delay={140}>
                <HealthMockup />
              </FadeUp>
            </div>
          </div>
        </section>

        {/* 6. FOUNDER QUOTE */}
        <section className="bg-white py-28 lg:py-36">
          <div className="container-v">
            <FadeUp>
              <figure className="mx-auto max-w-[58ch] text-center">
                <svg className="mx-auto h-8 w-8 text-vertex-blue/30" viewBox="0 0 32 32" fill="currentColor" aria-hidden>
                  <path d="M11 8c-3.866 0-7 3.134-7 7v9h9V15H8c0-1.657 1.343-3 3-3V8zm14 0c-3.866 0-7 3.134-7 7v9h9V15h-5c0-1.657 1.343-3 3-3V8z"/>
                </svg>
                <blockquote className="mt-6 font-serif text-[26px] italic leading-[1.35] text-vertex-navy md:text-[32px]">
                  « {d.home.quote.text} »
                </blockquote>
                <figcaption className="mt-8">
                  <div className="font-medium text-vertex-navy">{d.home.quote.author}</div>
                  <div className="mt-1 text-[14px] text-vertex-muted">{d.home.quote.role}</div>
                </figcaption>
              </figure>
            </FadeUp>
          </div>
        </section>

        {/* 7. INSIGHTS */}
        <section className="border-y border-vertex-line bg-vertex-offwhite py-28 lg:py-32">
          <div className="container-v">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <FadeUp>
                <div>
                  <span className="eyebrow">{d.home.insights.eyebrow}</span>
                  <h2 className="mt-4 max-w-[24ch] text-[30px] leading-[1.1] md:text-[40px]">{d.home.insights.title}</h2>
                </div>
              </FadeUp>
              <FadeUp delay={80}>
                <Link href="/insights" className="inline-flex items-center gap-1.5 text-[14px] font-medium text-vertex-blue transition-colors hover:text-vertex-blue-dark">
                  {d.home.insights.link} <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                </Link>
              </FadeUp>
            </div>
            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {d.home.insights.items.map((post, i) => (
                <FadeUp key={i} delay={i * 100}>
                  <Link href="/insights" className="v-card group flex h-full flex-col">
                    <div className="flex items-center gap-3 text-[12px] text-vertex-muted">
                      <span className="rounded-full bg-vertex-tint px-2.5 py-1 text-[11px] font-medium text-vertex-blue">{post.tag}</span>
                      <span>{post.date}</span>
                    </div>
                    <h3 className="mt-5 font-serif text-[20px] leading-tight text-vertex-navy group-hover:text-vertex-blue">{post.title}</h3>
                    <p className="mt-3 flex-1 text-[14px] leading-relaxed text-vertex-muted">{post.excerpt}</p>
                    <div className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-medium text-vertex-blue">Lire <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} /></div>
                  </Link>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* 8. FINAL CTA */}
        <section className="py-24 lg:py-28" style={{ background: '#EFF6FF' }}>
          <div className="container-v">
            <FadeUp>
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-[36px] leading-[1.1] md:text-[48px]">{d.home.finalCta.title}</h2>
                <p className="mx-auto mt-5 max-w-[52ch] text-[17px] text-vertex-muted">{d.home.finalCta.desc}</p>
                <Link href="/contact" className="v-btn-primary mt-9">{d.home.finalCta.cta} <ArrowRight className="h-4 w-4" strokeWidth={1.5} /></Link>
              </div>
            </FadeUp>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Home
