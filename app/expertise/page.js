'use client'
import Link from 'next/link'
import { ArrowRight, FlaskConical, Code2, Compass, CircleCheck } from 'lucide-react'
import { useI18n } from '@/components/site/i18n'
import { Header } from '@/components/site/Header'
import { Footer } from '@/components/site/Footer'
import { FadeUp } from '@/components/site/FadeUp'
import { PageHeader } from '@/components/site/PageHeader'

const icons = [FlaskConical, Code2, Compass]
const anchors = ['sante', 'ingenierie', 'transformation']

function ExpertisePage() {
  const { d } = useI18n()
  const p = d.pages.expertise
  const domains = d.home.domains.items

  return (
    <>
      <Header />
      <main>
        <PageHeader eyebrow={p.eyebrow} title={p.title} intro={p.intro} />

        <section className="bg-vertex-offwhite">
          {domains.map((dom, i) => {
            const Icon = icons[i]
            return (
              <div key={i} id={anchors[i]} className={`scroll-mt-28 border-b border-vertex-line py-24 lg:py-28 ${i % 2 === 1 ? 'bg-white' : ''}`}>
                <div className="container-v grid gap-12 lg:grid-cols-12 lg:items-start">
                  <div className="lg:col-span-5">
                    <FadeUp>
                      <div className="sticky top-32">
                        <div className="flex h-12 w-12 items-center justify-center rounded-md bg-vertex-tint text-vertex-blue">
                          <Icon className="h-6 w-6" strokeWidth={1.5} />
                        </div>
                        <span className="mt-5 block eyebrow">{dom.kicker}</span>
                        <h2 className="mt-3 max-w-[20ch] text-[28px] leading-[1.1] md:text-[36px]">{dom.title}</h2>
                      </div>
                    </FadeUp>
                  </div>
                  <div className="lg:col-span-7">
                    <FadeUp delay={100}>
                      <p className="text-[17px] leading-[1.7] text-vertex-slate">{dom.desc}</p>
                      <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                        {dom.bullets.map((b, j) => (
                          <li key={j} className="flex items-start gap-2.5 rounded-md border border-vertex-line bg-white p-4 text-[14px] text-vertex-slate">
                            <CircleCheck className="mt-0.5 h-4 w-4 flex-none text-vertex-blue" strokeWidth={1.5} />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </FadeUp>
                  </div>
                </div>
              </div>
            )
          })}
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

export default ExpertisePage
