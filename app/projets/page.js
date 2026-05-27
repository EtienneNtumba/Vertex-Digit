'use client'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { useI18n } from '@/components/site/i18n'
import { Header } from '@/components/site/Header'
import { Footer } from '@/components/site/Footer'
import { FadeUp } from '@/components/site/FadeUp'
import { PageHeader } from '@/components/site/PageHeader'

function ProjectsPage() {
  const { d } = useI18n()
  const p = d.pages.projects
  return (
    <>
      <Header />
      <main>
        <PageHeader eyebrow={p.eyebrow} title={p.title} intro={p.intro} />

        <section className="bg-white py-24 lg:py-28">
          <div className="container-v">
            <div className="divide-y divide-vertex-line border-y border-vertex-line">
              {p.items.map((proj, i) => (
                <FadeUp key={i} delay={i * 60}>
                  <article className="group grid gap-6 py-10 lg:grid-cols-12 lg:items-start">
                    <div className="lg:col-span-3">
                      <span className="eyebrow">{proj.sector}</span>
                      <div className="mt-2 text-[14px] text-vertex-muted">{proj.year}</div>
                    </div>
                    <div className="lg:col-span-7">
                      <div className="text-[13px] uppercase tracking-[0.12em] text-vertex-muted">{proj.client}</div>
                      <h3 className="mt-2 font-serif text-[24px] leading-tight md:text-[28px]">{proj.title}</h3>
                      <p className="mt-3 max-w-[62ch] text-[15px] leading-[1.7] text-vertex-slate">{proj.desc}</p>
                    </div>
                    <div className="lg:col-span-2 lg:text-right">
                      <ArrowUpRight className="inline h-5 w-5 text-vertex-blue transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={1.5} />
                    </div>
                  </article>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

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

export default ProjectsPage
