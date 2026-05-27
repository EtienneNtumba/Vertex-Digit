'use client'
import Link from 'next/link'
import { ArrowRight, FlaskConical, Droplet, Pill, UserRound, Receipt, BarChart3 } from 'lucide-react'
import { useI18n } from '@/components/site/i18n'
import { Header } from '@/components/site/Header'
import { Footer } from '@/components/site/Footer'
import { FadeUp } from '@/components/site/FadeUp'
import { PageHeader } from '@/components/site/PageHeader'
import { HealthMockup } from '@/components/site/HealthMockup'

const featureIcons = [FlaskConical, Droplet, Pill, UserRound, Receipt, BarChart3]

function SolutionPage() {
  const { d } = useI18n()
  const p = d.pages.solution
  return (
    <>
      <Header />
      <main>
        <PageHeader eyebrow={p.eyebrow} title={p.title} intro={p.intro} />

        {/* Mockup band */}
        <section className="bg-vertex-navy py-20 lg:py-24">
          <div className="container-v">
            <FadeUp>
              <HealthMockup />
            </FadeUp>
          </div>
        </section>

        {/* Features grid */}
        <section className="bg-white py-24 lg:py-28">
          <div className="container-v">
            <FadeUp>
              <div className="mb-14 max-w-3xl">
                <span className="eyebrow">Modules</span>
                <h2 className="mt-4 text-[30px] leading-[1.1] md:text-[40px]">Six modules intégrés, une seule base de données.</h2>
              </div>
            </FadeUp>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {p.features.map((f, i) => {
                const Icon = featureIcons[i] || FlaskConical
                return (
                  <FadeUp key={i} delay={i * 60}>
                    <div className="v-card h-full">
                      <div className="flex h-11 w-11 items-center justify-center rounded-md bg-vertex-tint text-vertex-blue">
                        <Icon className="h-5 w-5" strokeWidth={1.5} />
                      </div>
                      <h3 className="mt-5 font-serif text-[20px] leading-tight">{f.t}</h3>
                      <p className="mt-3 text-[14px] leading-relaxed text-vertex-muted">{f.d}</p>
                    </div>
                  </FadeUp>
                )
              })}
            </div>
          </div>
        </section>

        {/* Standards */}
        <section className="border-y border-vertex-line bg-vertex-offwhite py-20 lg:py-24">
          <div className="container-v">
            <FadeUp>
              <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
                <div>
                  <span className="eyebrow">Standards & stack</span>
                  <h2 className="mt-4 max-w-[24ch] text-[28px] leading-[1.1] md:text-[36px]">Standards internationaux, infrastructure libre.</h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {p.standards.map((s) => (
                    <span key={s} className="rounded-md border border-vertex-line bg-white px-3.5 py-2 text-[13px] font-medium text-vertex-navy">{s}</span>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 lg:py-28" style={{ background: '#EFF6FF' }}>
          <div className="container-v">
            <FadeUp>
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-[34px] leading-[1.1] md:text-[44px]">{d.home.finalCta.title}</h2>
                <p className="mx-auto mt-5 max-w-[52ch] text-vertex-muted">{d.home.finalCta.desc}</p>
                <Link href="/contact" className="v-btn-primary mt-8">{d.home.finalCta.cta} <ArrowRight className="h-4 w-4" strokeWidth={1.5} /></Link>
              </div>
            </FadeUp>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default SolutionPage
